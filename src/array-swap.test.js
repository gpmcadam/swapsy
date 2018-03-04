const { expect } = require('chai');

const arraySwap = require('./array-swap');

describe('array-swap', () => {
  it('swaps two elements in an array', () => {
    const arr = [ 'hello', 'world' ];
    const actual = arraySwap(arr, 0, 1);
    expect(actual).to.deep.equal(['world', 'hello']);
  });
  it('does not mutate the original array', () => {
    const arr = [ 'hello', 'world' ];
    arraySwap(arr, 0, 1);
    expect(arr).to.deep.equal(['hello', 'world']);
  });
  it('does not accept anything but an array', () => {
    const spy = jest.spyOn(global.console, 'warn')
    const notArr = {};
    const actual = arraySwap(notArr, 0, 1);
    expect(notArr).to.deep.equal(actual);
    expect(spy.mock.calls.length).to.equal(1);
    spy.mockReset();
    spy.mockRestore();
  });
  it('does not swap if index is out of bounds', () => {
    const spy = jest.spyOn(global.console, 'warn')
    const arr = [ 1, 2, 3 ];
    expect(arraySwap(arr, -1, 2)).to.deep.equal(arr);
    expect(arraySwap(arr, 1, 400)).to.deep.equal(arr);
    expect(spy.mock.calls.length).to.equal(2);
    spy.mockReset();
    spy.mockRestore();
  });
  it('does not swap if indexes are not given', () => {
    const spy = jest.spyOn(global.console, 'warn')
    const arr = [ 1, 2, 3 ];
    expect(arraySwap(arr)).to.deep.equal(arr);
    expect(spy.mock.calls.length).to.equal(1);
    spy.mockReset();
    spy.mockRestore();
  });
})
