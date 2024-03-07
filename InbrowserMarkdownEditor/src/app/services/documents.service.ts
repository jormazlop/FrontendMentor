import { Injectable, effect, inject, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export type Document = {
  id: number;
  createdAt: Date;
  name: string;
  content: string;
};

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  private data = [
    {
      id: 0,
      createdAt: new Date('2022-01-04'),
      name: 'welcome.md',
      content:
        "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n \n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
    },
    {
      id: 1,
      createdAt: new Date('2022-01-04'),
      name: 'untitled-document.md',
      content: '',
    },
  ];

  private documents = signal<Document[]>([...this.data]);

  private document = signal<Document>({ ...this.data[0] });

  readonly documents$ = this.documents.asReadonly();

  readonly document$ = this.document.asReadonly();

  private toastr = inject(ToastrService);

  changeDocument(doc: Document): void {
    this.document.set(doc);
  }

  loadDocument(id: number): void {
    const doc = this.data.find((doc) => doc.id === id);
    if (doc) {
      this.document.set({ ...doc });
    }
  }

  saveDocument(): void {
    const indexDoc = this.data.findIndex(
      (doc) => doc.id === this.document().id
    );

    if (indexDoc != -1) {
      this.data[indexDoc] = this.document();
      this.toastr.success(`Document ${this.document().name} saved!`);
    }
  }

  createDocument(): void {
    const newDoc: Document = {
      id: this.data.length
        ? Math.max(...this.data.map((doc) => doc.id)) + 1
        : 0,
      createdAt: new Date(),
      name: 'untitled-document.md',
      content: '',
    };

    this.data.push(newDoc);
    this.documents.set([...this.data]);
    this.document.set({ ...newDoc });
  }

  deleteDocument(): void {

    const deletedDocName = this.document().name;

    const indexDoc = this.data.findIndex(
      (doc) => doc.id === this.document().id
    );

    this.data = this.data.filter((doc) => doc.id !== this.document().id);

    this.documents.set(this.data);

    this.toastr.success(`Document ${deletedDocName} deleted!`);

    this.data[0]
      ? this.document.set({ ...this.data[0] })
      : this.createDocument();
  }
}
