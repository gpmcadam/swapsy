![swapsy.js](./logo.svg?raw=true "Swapsy")

![](https://travis-ci.org/gpmcadam/swapsy.png?branch=master)

Swap two elements in an array. Easy, peasy.

## Install

    $ npm install swapsy

## Example

    const swapsy = require('swapsy');

    const arr = [ 'hello', 'world' ]
    const fromIndex = 0
    const toIndex = 1

    swapsy(arr, fromIndex, toIndex)

    // Returns [ 'world', 'hello' ]


## Why?

 - ✅ Tiny (~400 bytes)
 - ✅ Zero-Dependencies
 - ✅ Immutable/Pure
 - ✅ ES6
 - ✅ Tested

## Better Example

Suppose you use React and Redux, and you have
some kind of action and a reducer that reorders
some components for the user.

Your action might look like this:

    const swapItems = (from, to) => {
      return {
        type: 'SWAP_ITEMS',
        from,
        to
      }
    }

And your reducer might have looked like this:

    const items = (state = [], ({ from, to })) => {
      switch (action.type) {
        case 'SWAP_ITEMS':
          const x = state[from];
          const y = state[to];
          state[to] = x;
          state[from] = y;
          return state;
      }
    }

Which is bad because it's long, ungainly, wasteful
and mutates the state directly. Also note, there are worse implementations than the one above.

But with swapsy, keep your reducers pure and
readable:

    const swap = require('swapsy');

    const items = (state = [], ({ from, to })) => {
      switch (action.type) {
        case 'SWAP_ITEMS':
          return swap(state, from, to);
      }
    }
