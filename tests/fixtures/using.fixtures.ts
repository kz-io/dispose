/**
 * This file contains test cases, mocks, or other data for testing the
 * using feature.
 *
 * For use in ../using.test.ts.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { IDisposable } from '../../mod.ts';

export class A implements IDisposable {
  name = 'A';
  isDisposed = false;
  dispose(): void {
    this.isDisposed = true;
  }
}

export class B implements IDisposable {
  name = 'B';
  isDisposed = false;
  dispose(): void {
    this.isDisposed = true;
  }
}

export class C implements IDisposable {
  name = 'C';
  isDisposed = false;
  dispose(): void {
    this.isDisposed = true;
  }
}
