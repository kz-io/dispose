/**
 * This file exports the using and usingAsync functions.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { dispose } from './dispose.ts';

import type { IDisposable } from './types/mod.ts';

/**
 * Performs a callback function with the provided {@link IDisposable} disposing on completion, returning any exceptions that may have occured during disposal.
 *
 * @param disposable - The {@link IDisposable} object to use.
 * @param callback - The function to perform with the `disposable`.
 * @returns The result of the `callback` function.
 */
export function using<T extends IDisposable, R>(
  disposable: T,
  callback: (disposable: T) => R,
): R {
  try {
    return callback(disposable);
  } finally {
    dispose(disposable);
  }
}

/**
 * Asynchronously performs a callback function with the provided {@link IDisposable} disposing on completion, returning any exceptions that may have occured during disposal.
 *
 * @param disposable - The {@link IDisposable} object to use.
 * @param callback - The function to perform with the `disposable`.
 * @returns The result of the `callback` function.
 */
export async function usingAsync<T extends IDisposable, R>(
  disposable: T,
  callback: (disposable: T) => Promise<R>,
): Promise<R> {
  try {
    return await callback(disposable);
  } finally {
    dispose(disposable);
  }
}
