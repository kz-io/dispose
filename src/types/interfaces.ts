/**
 * This file contains package interfaces.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

/**
 * Provides a mechanism to dispose of resources associated with the current class.
 */
export interface IDisposable {
  /**
   * Dispose of resources associated with the current instance.
   */
  dispose(): void;

  /**
   * A value indicating whether the current instance has been disposed.
   */
  isDisposed: boolean;
}
