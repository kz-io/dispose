/**
 * This file contains test fixtures for the ObjectDisposedException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { Exception, InvalidException } from '../../deps.ts';

import { ObjectDisposedException as _ObjectDisposedException } from '../../mod.ts';

export const ObjectDisposedException = _ObjectDisposedException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x40,
      name: 'ObjectDisposedException',
      message: 'An operation was attempted on a disposed object.',
      toString:
        'ObjectDisposedException: An operation was attempted on a disposed object.',
      valueOf: 64,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['An object is disposed, but an operation was attempted.'],
    {
      code: 0x40,
      name: 'ObjectDisposedException',
      message: 'An object is disposed, but an operation was attempted.',
      toString:
        'ObjectDisposedException: An object is disposed, but an operation was attempted.',
      valueOf: 64,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x40,
      name: 'ObjectDisposedException',
      message: 'An operation was attempted on a disposed object.',
      toString:
        'ObjectDisposedException: An operation was attempted on a disposed object.',
      valueOf: 64,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { objectName: 'TestObject' };

export const fixturesNewData = [
  [
    [data1],
    {
      code: 0x40,
      name: 'ObjectDisposedException',
      message: 'An operation was attempted on a disposed object, TestObject.',
      toString:
        'ObjectDisposedException: An operation was attempted on a disposed object, TestObject.',
      valueOf: 64,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data0],
    {
      code: 0x40,
      name: 'ObjectDisposedException',
      message: 'An operation was attempted on a disposed object.',
      toString:
        'ObjectDisposedException: An operation was attempted on a disposed object.',
      valueOf: 64,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['An object is disposed, but an operation was attempted.', data1],
    {
      code: 0x40,
      name: 'ObjectDisposedException',
      message: 'An object is disposed, but an operation was attempted.',
      toString:
        'ObjectDisposedException: An object is disposed, but an operation was attempted.',
      valueOf: 64,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['An object is disposed, but an operation was attempted.', data0],
    {
      code: 0x40,
      name: 'ObjectDisposedException',
      message: 'An object is disposed, but an operation was attempted.',
      toString:
        'ObjectDisposedException: An object is disposed, but an operation was attempted.',
      valueOf: 64,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;
