/**
 * Test fixtures for the IDisposable interface.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { IDisposable } from '../../mod.ts';

interface InternalState {
  /**
   * Whether the resource for this AbstractDisposable have been freed up.
   */
  isDisposed: boolean;
}

class DisposableTest implements IDisposable {
  protected state: InternalState = {
    isDisposed: false,
  };

  public get isDisposed(): boolean {
    return this.state.isDisposed;
  }

  public dispose(): void {
    this.state.isDisposed = true;
  }
}

export const fixtures = [
  [new DisposableTest(), false, true],
] as const;
