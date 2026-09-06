/// <reference lib="webworker" />

addEventListener('message', () => {
  const title = ['G', 'r', 'i', 'd', ' ', 'L', 'a', 'n', 'd', 'i', 'n', 'g', ' ', 'P', 'a', 'g', 'e'];
  let currentTitle = '';

  const interval = setInterval(() => {
    const nextChar = title.shift();

    if (nextChar !== undefined) {
      currentTitle += nextChar;
      postMessage(currentTitle);
    }

    if (!title.length) {
      clearInterval(interval);
    }
  }, 75);
});
