/**
 * This file exports the ObjectDisposedException exception and related features.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { type BaseExceptionData, InvalidException } from '../../deps.ts';

/**
 * Additional data about the ObjectDisposedException exception.
 */
export type ObjectDisposedExceptionInit = BaseExceptionData<{
  /**
   * The name of the disposed object.
   */
  objectName?: string;
}>;

/**
 * An exception raised when an operation is attempted on a disposed {@link IDisposable}.
 */
export class ObjectDisposedException<
  T extends ObjectDisposedExceptionInit = ObjectDisposedExceptionInit,
> extends InvalidException<T> {
  /**
   * Creates a new ObjectDisposedException with the default message description.
   */
  constructor();

  /**
   * Creates an ObjectDisposedException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an ObjectDisposedException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an ObjectDisposedException with a message description and additional relevant data.
   *
   * @param message The human-readable description of the exception.
   * @param data Additional, relevant data about the exception.
   */
  constructor(message: string, data: T);

  constructor(messageOrData: string | T = DEFAULT_MESSAGE, data: T = {} as T) {
    let message: string;

    if (typeof messageOrData === 'string') {
      message = messageOrData;
    } else {
      data = messageOrData;
      message = createMessageFromData(data);
    }

    message = message || DEFAULT_MESSAGE;

    super(message, data);
  }

  /**
   * The numeric code unique to this type of exception.
   */
  public code = 0x40;
}

/**
 * The default message for the ObjectDisposedException exception.
 */
const DEFAULT_MESSAGE = 'An operation was attempted on a disposed object.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(init: ObjectDisposedExceptionInit): string {
  const { objectName } = init;

  return objectName
    ? `An operation was attempted on a disposed object, ${objectName}.`
    : DEFAULT_MESSAGE;
}
