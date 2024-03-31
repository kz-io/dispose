/**
 * This file contains tests for the AbstractDisposable feature.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  assertEquals,
  assertSpyCalls,
  assertThrows,
  describe,
  it,
  spy,
} from '../dev_deps.ts';

import { Fibonacci } from './fixtures/abstract_disposable.fixtures.ts';

describe('AbstractDisposable', () => {
  const fib = new Fibonacci(6);
  const spyDisposing = spy(fib, 'disposing');

  it('tests all', () => {
    assertEquals(fib.count, 6);
    assertEquals(fib.isDisposed, false);
    assertEquals(`${fib}`, '[object Fibonacci{isDisposed: false}]');

    fib.continueSequence(5);
    assertEquals(fib.count, 11);
    assertEquals(fib.isDisposed, false);
    assertEquals(`${fib}`, '[object Fibonacci{isDisposed: false}]');

    fib.dispose();

    assertEquals(`${fib}`, '[object Fibonacci{isDisposed: true}]');
    assertSpyCalls(spyDisposing, 1);
    assertThrows(() => fib.continueSequence(5));
    assertEquals(fib.count, 0);
    assertEquals(fib.isDisposed, true);
  });
});
