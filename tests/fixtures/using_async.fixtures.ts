/**
 * This file contains test cases, mocks, or other data for testing the
 * usingAsync feature.
 *
 * For use in ../using_async.test.ts.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { IDisposable } from '../../mod.ts';

export class A implements IDisposable {
  name = 'A';
  isDisposed = false;

  async run(): Promise<void> {
    await new Promise(function (resolve): void {
      setTimeout(resolve, 1000);
    });
  }

  dispose(): void {
    this.isDisposed = true;
  }
}

export class B implements IDisposable {
  name = 'B';
  isDisposed = false;

  async run(): Promise<void> {
    await new Promise(function (resolve): void {
      setTimeout(resolve, 500);
    });
  }

  dispose(): void {
    this.isDisposed = true;
  }
}

export class C implements IDisposable {
  name = 'C';
  isDisposed = false;

  async run(): Promise<void> {
    await new Promise(function (resolve): void {
      setTimeout(resolve, 250);
    });
  }

  dispose(): void {
    this.isDisposed = true;
  }
}
