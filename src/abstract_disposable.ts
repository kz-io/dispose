/**
 * This file exports the AbstractDisposable abstract base class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { assertNotDisposed } from './assert_not_disposed.ts';

import type { IDisposable } from './types/interfaces.ts';

/**
 * The state of an AbstractDisposable instance.
 */
interface InternalState {
  /**
   * Whether the resource for this AbstractDisposable have been freed up.
   */
  isDisposed: boolean;
}

/**
 * An abstract class implementation of the {@link IDisposable} interface.
 */
export abstract class AbstractDisposable implements IDisposable {
  /**
   * The state of this AbstractDisposable instance.
   */
  protected state: InternalState = {
    /**
     * Whether the resource for this AbstractDisposable have been freed up.
     */
    isDisposed: false,
  };

  /**
   * Asserts that an {@link IDisposable} instance has not been disposed, optionally with a specific message.
   *
   * @param disposable - The object to check.
   * @param message - The message to include in the exception, if thrown.
   * @throws {ObjectDisposedException} If the object is disposed.
   */
  public static assertNotDisposed(
    disposable: IDisposable,
    message?: string,
  ): void {
    assertNotDisposed(disposable, message);
  }

  /**
   * Whether the resource for this AbstractDisposable have been freed up.
   */
  public get isDisposed(): boolean {
    return this.state.isDisposed;
  }

  /**
   * Returns the string representation of this AbstractDisposable.
   */
  public toString(): string {
    const { isDisposed, constructor } = this;
    return `[object ${constructor.name}{isDisposed: ${isDisposed}}]`;
  }

  /**
   * Initiates the process of freeing up unmanaged resources and finalizing this AbstractDisposable.
   */
  public dispose(): void {
    if (this.isDisposed) return;

    try {
      this.onDispose();
    } finally {
      this.state.isDisposed = true;
    }
  }

  /**
   * Asserts that this AbstractDisposable has not been disposed, optionally with a specific message.
   *
   * @param message - The message to include in the exception, if thrown.
   * @throws {ObjectDisposedException} If this AbstractDisposable has been disposed.
   */
  protected assertNotDisposed(message?: string): void {
    AbstractDisposable.assertNotDisposed(this, message);
  }

  /**
   * Free up resources.
   */
  protected onDispose(): void {}
}
