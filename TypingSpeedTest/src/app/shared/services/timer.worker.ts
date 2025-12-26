addEventListener('message', (message) => {
  if (message.data === 'passage') {
    let timer = 0;
    postMessage(timer);
    setInterval(() => {
      timer++;
      postMessage(timer);
    }, 1000);
  }
  if (message.data === 'timed') {
    let timer = 60;
    postMessage(timer);
    setInterval(() => {
      timer--;
      postMessage(timer);
    }, 1000);
  }
});
