/**
 * This file exports the disposeInternal function.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import type { Exception } from '../../deps.ts';
import type { IDisposable } from '../types/interfaces.ts';

/**
 * Disposes an array of {@link IDisposable} objects, returning any exceptions that may have occurred during disposal.
 *
 * @param disposables - The array of {@link IDisposable} objects to dispose.
 * @returns An array of exceptions that occurred during disposal, if any.
 */
export function disposeInternal(
  disposables: IDisposable[],
): (Error | Exception)[] | undefined {
  const exceptions: (Error | Exception)[] = [];

  for (let i = 0; i < disposables.length; i++) {
    const disposable = disposables[i];
    const ex = disposeInternalOne(disposable);

    if (ex) exceptions.push(ex);

    continue;
  }

  return exceptions.length ? exceptions : undefined;
}

/**
 * Disposes an {@link IDisposable} object, returning the exception that occurred, if any, during disposal.
 *
 * @param disposable - The {@link IDisposable} object to dispose.
 * @returns The exception that occurred during disposal, if any.
 */
function disposeInternalOne(
  disposable: IDisposable,
): Error | Exception | undefined {
  try {
    disposable.dispose();

    return;
  } catch (err) {
    return err;
  }
}
