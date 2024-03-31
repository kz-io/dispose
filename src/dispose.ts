/**
 * This file exports the dispose function.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { disposeInternal } from './_internals/mod.ts';

import type { Exception } from '../deps.ts';
import type { IDisposable } from './types/interfaces.ts';

/**
 * Disposes an array of {@link IDisposable} objects returning any exceptions that may have occrred during disposal.
 *
 * @param disposables - The array of {@link IDisposable} objects to dispose.
 * @returns An array of exceptions that occurred during disposal, if any.
 */
export function dispose(
  ...disposables: IDisposable[]
): (Error | Exception)[] | undefined {
  return disposeInternal(disposables);
}
