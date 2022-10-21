/*
* @jest-environment jsdom
*/

import itemCounter from '../items-counter.js';

describe('Test for the items counter function', () => {
  test('Counting 5 elements with the class "test-class"', () => {
    document.body.innerHTML = `
      <section>
        <p class="test-class">item 1</p>
        <p class="test-class">item 2</p>
        <p class="test-class">item 3</p>
        <p class="test-class">item 4</p>
        <p class="test-class">item 5</p>
      </section>
    `;
    expect(itemCounter('test-class')).toBe(5);
    expect(itemCounter('test-class')).not.toBe(2);
    expect(itemCounter('test-class')).not.toBe(null);
    expect(itemCounter('test-class')).not.toBe(undefined);
  });
  test('if there are no elements of the given class, the counter should return 0', () => {
    document.body.innerHTML = `
      <section>
      </section>
    `;
    expect(itemCounter('test-class')).toBe(0);
    expect(itemCounter('test-class')).not.toBe(1);
    expect(itemCounter('test-class')).not.toBe(null);
    expect(itemCounter('test-class')).not.toBe(undefined);
  });
  test('if there are elements of different classes, the function should only count the elements with the specified class', () => {
    document.body.innerHTML = `
      <section>
        <p class="test-class">item 1</p>
        <p class="test-class">item 2</p>
        <p class="test">item 3</p>
        <p class="test-class">item 4</p>
        <p class="test-class">item 5</p>
      </section>
    `;
    expect(itemCounter('test-class')).toBe(4);
    expect(itemCounter('test-class')).not.toBe(5);
    expect(itemCounter('test-class')).not.toBe(null);
    expect(itemCounter('test-class')).not.toBe(undefined);
  });
  test('test case for 99 items', () => {
    document.body.innerHTML = `
      <section class="test-area">        
      </section>
    `;
    const section = document.querySelector('.test-area');
    for (let i = 0; i < 99; i += 1) {
      const p = document.createElement('p');
      p.classList.add('test-class');
      section.appendChild(p);
    }
    expect(itemCounter('test-class')).toBe(99);
    expect(itemCounter('test-class')).not.toBe(100);
    expect(itemCounter('test-class')).not.toBe(null);
    expect(itemCounter('test-class')).not.toBe(undefined);
  });
});