const { expect } = require('chai');

const swapsy = require('./swapsy');

describe('swapsy', () => {
  it('swaps two elements in an array', () => {
    const arr = [ 'hello', 'world' ];
    const actual = swapsy(arr, 0, 1);
    expect(actual).to.deep.equal(['world', 'hello']);
  });
  it('does not mutate the original array', () => {
    const arr = [ 'hello', 'world' ];
    swapsy(arr, 0, 1);
    expect(arr).to.deep.equal(['hello', 'world']);
  });
  it('does not accept anything but an array', () => {
    const spy = jest.spyOn(global.console, 'warn')
    const notArr = {};
    const actual = swapsy(notArr, 0, 1);
    expect(notArr).to.deep.equal(actual);
    expect(spy.mock.calls.length).to.equal(1);
    spy.mockReset();
    spy.mockRestore();
  });
  it('does not swap if index is out of bounds', () => {
    const spy = jest.spyOn(global.console, 'warn')
    const arr = [ 1, 2, 3 ];
    expect(swapsy(arr, -1, 2)).to.deep.equal(arr);
    expect(swapsy(arr, 1, 400)).to.deep.equal(arr);
    expect(spy.mock.calls.length).to.equal(2);
    spy.mockReset();
    spy.mockRestore();
  });
  it('does not swap if indexes are not given', () => {
    const spy = jest.spyOn(global.console, 'warn')
    const arr = [ 1, 2, 3 ];
    expect(swapsy(arr)).to.deep.equal(arr);
    expect(spy.mock.calls.length).to.equal(1);
    spy.mockReset();
    spy.mockRestore();
  });
})
