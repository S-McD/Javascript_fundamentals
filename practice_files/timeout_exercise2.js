const printHello = () => {
    console.log('Hello!');
  }

  const executeAfterDelay = (time, message) => {
    setTimeout(message, (time * 1000));
  }
  executeAfterDelay(5, printHello);