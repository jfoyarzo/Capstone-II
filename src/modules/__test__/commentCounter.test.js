/*
* @jest-environment jsdom
*/

import modalMethods from '../modal.js';

describe('Test comments counter method', () => {
  test('When there are 3 comments the next should be the number 4', () => {
    document.body.innerHTML = `
      <section class="commentSection">
        <p>comment 1</p>
        <p>comment 2</p>
        <p>comment 3</p>
      </section>
    `;
    expect(modalMethods.countComments()).toBe(3);
    expect(modalMethods.countComments()).not.toBe(2);
    expect(modalMethods.countComments()).not.toBe(null);
    expect(modalMethods.countComments()).not.toBe(undefined);
  });
  test('When there are no comments the next should be the number 1', () => {
    document.body.innerHTML = `
      <section class="commentSection">
      </section>
    `;
    expect(modalMethods.countComments()).toEqual(1);
    expect(modalMethods.countComments()).not.toBe(0);
    expect(modalMethods.countComments()).not.toBe(null);
    expect(modalMethods.countComments()).not.toBe(undefined);
  });
});
