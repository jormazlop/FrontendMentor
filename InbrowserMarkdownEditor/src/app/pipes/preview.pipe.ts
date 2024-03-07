import { Pipe, PipeTransform, inject } from '@angular/core';

@Pipe({
  name: 'preview',
  standalone: true,
})
export class PreviewPipe implements PipeTransform {

  private isCodeBlock = false;
  private isBlockQuoute = false;
  private isOrdered = false;
  private isUnordered = false;

  transform(lines: string[]): string {
    let renderHTML = '';

    lines.forEach((line: string) => {
      if (line) {
        renderHTML += this.transformHTML(line);
      }
    });

    return renderHTML;
  }

  private transformHTML(line: string): string {
    line = line.replaceAll('%20', ' ');
    line = line.replaceAll('%3E', '>');
    line = line.replaceAll('%3C', '<');
    line = line.replaceAll('%60', '`');
    line = line.replaceAll('%5B', '[');
    line = line.replaceAll('%5D', ']');
    line = line.trimStart();
    line = line.trimEnd();

    line = this.blockquote(line);
    line = this.bold(line);
    line = this.italic(line);
    line = this.link(line);
    line = this.code(line);

    let lineHTML = `${line}`;

    lineHTML = this.headings(line, lineHTML);
    lineHTML = this.orderedList(line, lineHTML);
    lineHTML = this.unOrderedList(line, lineHTML);

    return lineHTML;
  }

  private blockquote(line: string): string {
    if (line.substring(0, 2) === '>>' && this.isBlockQuoute) {
      line = `<blockquote><p>${line.substring(2)}</p></blockquote>`;
    } else if (line.at(0) === '>' && line.length > 1 && line.at(1) !== '>') {
      if (!this.isBlockQuoute) {
        line = `<blockquote><p>${line.substring(1)}</p>`;
      } else {
        line = `<p>${line.substring(1)}</p>`;
      }
      this.isBlockQuoute = true;
    } else if (line.at(0) !== '>') {
      if (this.isBlockQuoute) {
        line = `</blockquote>${line}`;
      }
      this.isBlockQuoute = false;
    }

    return line;
  }

  private link(line: string): string {
    const linkRegExp = new RegExp('\\[.*?\\]\\(.*?\\)', 'g');
    const linkMatchs = Array.from(line.matchAll(linkRegExp));

    if (linkMatchs.length) {
      linkMatchs.forEach((link) => {

        const firstSquare = link[0].indexOf('[');
        const lastSquare = link[0].lastIndexOf(']');

        const firstParenthesis = link[0].indexOf('(');
        const lastParenthesis = link[0].indexOf(')');

        const url = link[0].substring(firstParenthesis + 1, lastParenthesis);

        line = line.replace(
          link[0],
          `<a href="${url}" target="_blank">${link[0].substring(
            firstSquare + 1,
            lastSquare
          )}</a>`
        );
      });
    }

    return line;
  }

  private bold(line: string): string {
    const boldRegExp = new RegExp('[*]{3}[^*]+[*]{3}', 'g');

    const boldMatchs = Array.from(line.matchAll(boldRegExp));

    if (boldMatchs.length) {
      boldMatchs.forEach((bold) => {
        const boldChars = bold[0].substring(3, bold[0].length - 3);

        line = line.replace(bold[0], `<span class="bold">${boldChars}</span>`);
      });
    }

    return line;
  }

  private italic(line: string): string {
    const italicRegExp = new RegExp('[*]{1}[^*]+[*]{1}', 'g');

    const italicMatchs = Array.from(line.matchAll(italicRegExp));

    if (italicMatchs.length) {
      italicMatchs.forEach((italic) => {
        const italicChars = italic[0].substring(1, italic[0].length - 1);

        line = line.replace(
          italic[0],
          `<span class="italic">${italicChars}</span>`
        );
      });
    }

    return line;
  }

  private code(line: string): string {

    if (this.isCodeBlock) {
      line = line.replaceAll('<', '&lt;');
      line = line.replaceAll('>', '&gt;');
    }

    const codeBlockRegExp = new RegExp('^[`]{3}', 'g');
    const codeBlocMatchs = Array.from(line.matchAll(codeBlockRegExp));

    const codeRegExp = new RegExp('[`]{1}[^*]+[`]{1}', 'g');
    const codeMatchs = Array.from(line.matchAll(codeRegExp));

    if (codeBlocMatchs.length) {

      if(this.isCodeBlock) {
        line = line.replace('```', '</div>')
      } else {
        line = line.replace('```', '<div class="code-block">')
      }

      this.isCodeBlock = !this.isCodeBlock;
    } else if (codeMatchs.length) {
      codeMatchs.forEach((code) => {
        let codeChars = code[0];
        codeChars = codeChars.replaceAll('<', '&lt;');
        codeChars = codeChars.replaceAll('>', '&gt;');
        line = line.replaceAll(code[0], `${codeChars}`);
      });
    }

    return line;
  }

  private headings(line: string, lineHTML: string): string {
    if (line.substring(0, 13) === '</blockquote>') {
      if (line.substring(13, 19) === '######') {
        lineHTML = `</blockquote><h6>${line.substring(19)}</h6>`;
      } else if (line.substring(13, 18) === '#####') {
        lineHTML = `</blockquote><h5>${line.substring(18)}</h5>`;
      } else if (line.substring(13, 17) === '####') {
        lineHTML = `</blockquote><h4>${line.substring(17)}</h4>`;
      } else if (line.substring(13, 16) === '###') {
        lineHTML = `</blockquote><h3>${line.substring(16)}</h3>`;
      } else if (line.substring(13, 15) === '##') {
        lineHTML = `</blockquote><h2>${line.substring(15)}</h2>`;
      } else if (line.substring(13, 14) === '#') {
        lineHTML = `</blockquote><h1>${line.substring(14)}</h1>`;
      }
    }

    if (line.substring(0, 6) === '######') {
      lineHTML = `<h6>${line.substring(6)}</h6>`;
    } else if (line.substring(0, 5) === '#####') {
      lineHTML = `<h5>${line.substring(5)}</h5>`;
    } else if (line.substring(0, 4) === '####') {
      lineHTML = `<h4>${line.substring(4)}</h4>`;
    } else if (line.substring(0, 3) === '###') {
      lineHTML = `<h3>${line.substring(3)}</h3>`;
    } else if (line.substring(0, 2) === '##') {
      lineHTML = `<h2>${line.substring(2)}</h2>`;
    } else if (line.substring(0, 1) === '#') {
      lineHTML = `<h1>${line.substring(1)}</h1>`;
    }

    return lineHTML;
  }

  private orderedList(line: string, lineHTML: string): string {
    const orderedListRegExp = new RegExp('^[0-9]+[.]');
    const orderedList = line.match(orderedListRegExp);

    if (orderedList) {
      if (!this.isOrdered) {
        this.isOrdered = true;
        lineHTML = `<ol><li value="${orderedList[0].slice(
          0,
          -1
        )}">${line.substring(orderedList[0].length)}</li>`;
      } else {
        lineHTML = `<li value="${orderedList[0].slice(0, -1)}">${line.substring(
          orderedList[0].length
        )}</li>`;
      }
    } else {
      if (this.isOrdered) {
        this.isOrdered = false;
        lineHTML = `</ol>` + lineHTML;
      }
    }

    return lineHTML;
  }

  private unOrderedList(line: string, lineHTML: string): string {
    const unorderedListRegExp = new RegExp('^[-][" "]');
    const unorderedList = line.match(unorderedListRegExp);

    if (unorderedList) {
      if (!this.isUnordered) {
        this.isUnordered = true;
        lineHTML = `<ul><li value="${unorderedList[0].slice(
          0,
          -1
        )}">${line.substring(unorderedList[0].length)}</li>`;
      } else {
        lineHTML = `<li value="${unorderedList[0].slice(
          0,
          -1
        )}">${line.substring(unorderedList[0].length)}</li>`;
      }
    } else {
      if (this.isUnordered) {
        this.isUnordered = false;
        lineHTML = `</ul>` + lineHTML;
      }
    }

    return lineHTML;
  }
}
