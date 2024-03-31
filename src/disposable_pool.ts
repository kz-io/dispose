/**
 * Contains the class DisposablePool.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { AbstractDisposable } from './abstract_disposable.ts';
import { dispose } from './dispose.ts';

import type { IDisposable } from './types/mod.ts';

/**
 * A class for collecting independant {@link IDisposable} objects into a single DisposablePool.
 */
export class DisposablePool<T extends { [key: string]: IDisposable }>
  extends AbstractDisposable {
  /**
   * Creates a new instance of DisposablePool, with the keyed collection of {@link IDisposable} objects to pool together.
   *
   * @param disposables - The keyed collection of {@link IDisposable} objects to pool together.
   */
  constructor(disposables: T) {
    super();

    this._disposables = disposables;
  }

  /**
   * The resources within the DisposablePool.
   */
  public get resources(): T | undefined {
    return this._disposables ? { ...this._disposables } : undefined;
  }

  /**
   * A convenience method to use the pool of {@link IDisposable} objects in a callback, disposing of the pool and this DisposablePool on completion.
   *
   * @param callback - The function to perform with the pool of {@link IDisposable} objects.
   * @returns The result of the callback function.
   */
  public use<R>(callback: (disposables: T, self: this) => void): this {
    this.assertNotDisposed();

    const { resources } = this;

    try {
      if (resources) {
        callback(resources, this);
      }
    } finally {
      this.dispose();
    }

    return this;
  }

  /**
   * A convenience method to use the pool of {@link IDisposable} objects in a callback, disposing of the pool and this DisposablePool on completion.
   *
   * @param callback - The function to perform with the pool of {@link IDisposable} objects.
   * @returns The result of the callback function.
   */
  public async useAsync<R>(
    callback: (disposables: T, self: this) => Promise<void>,
  ): Promise<this> {
    this.assertNotDisposed();

    const { resources } = this;

    try {
      if (resources) {
        await callback(resources, this);
      }
    } finally {
      this.dispose();
    }

    return this;
  }

  /**
   * The pool of {@link IDisposable} objects.
   */
  protected _disposables: T | undefined;

  /**
   * Disposes the pool of {@link IDisposable} objects, then disposes this DisposablePool.
   *
   * @returns An array of exceptions that occurred during disposal, if any.
   */
  protected onDispose(): void {
    this.assertNotDisposed();

    const { resources } = this;

    if (resources) {
      Object.keys(resources).forEach((key) => {
        dispose(resources[key]);
      });
    }

    this._disposables = undefined;
  }
}
