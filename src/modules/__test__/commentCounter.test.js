/*
* @jest-environment jsdom
*/

import countComments from '../commentCounter';

describe('Test comments counter method', () => {
  test('When there are 3 comments the next should be the number 4', () => {
    document.body.innerHTML = `
      <section class="commentSection">
        <p>comment 1</p>
        <p>comment 2</p>
        <p>comment 3</p>
      </section>
    `;
    expect(countComments()).toBe(3);
    expect(countComments()).not.toBe(2);
    expect(countComments()).not.toBe(null);
    expect(countComments()).not.toBe(undefined);
  });
  test('When there are no comments the next should be the number 1', () => {
    document.body.innerHTML = `
      <section class="commentSection">
      </section>
    `;
    expect(countComments()).toEqual(1);
    expect(countComments()).not.toBe(0);
    expect(countComments()).not.toBe(null);
    expect(countComments()).not.toBe(undefined);
  });
});
