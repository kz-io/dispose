/**
 * This file contains test cases, mocks, or other data for testing the
 * AbstractDisposable feature.
 *
 * For use in ../abstract_disposable.test.ts.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { AbstractDisposable } from '../../mod.ts';

export class Fibonacci extends AbstractDisposable {
  #items: number[] = [0, 1];

  constructor(itemCount: number) {
    super();

    const itemLength = this.#items.length;

    if (itemCount > this.#items.length) {
      for (let i = 0; i < (itemCount - itemLength); i++) {
        const [a, b] = this.#items.slice(-2);

        this.#items.push(a + b);
      }
    }
  }

  public get sequence(): number[] {
    return [...this.#items];
  }

  public get count(): number {
    return this.#items.length;
  }

  public continueSequence(itemCount: number): void {
    this.assertNotDisposed();

    for (let i = 0; i < itemCount; i++) {
      const [a, b] = this.#items.slice(-2);

      this.#items.push(a + b);
    }
  }

  public disposing(): void {
    console.log('Disposing Fibonacci');
  }

  protected onDispose(): void {
    this.disposing();
    this.#items = [];
  }
}
