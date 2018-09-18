import React, { Timeout } from 'react';
import ReactDOM from 'react-dom';

let cache = null;

const sleep = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

const HelloSuspenseWorld = () => {
  if (cache) {
    return cache;
  }

  throw new Promise(async (resolve) => {
    await sleep(5);
    cache = 'hello, suspense world!';
    resolve();
  });
};

ReactDOM.render(
  <Timeout>
    {didExpire => didExpire ? 'loading' : <HelloSuspenseWorld />}
  </Timeout>,
  document.getElementById('app'),
);
