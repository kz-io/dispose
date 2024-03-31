/**
 * This file contains test cases, mocks, or other data for testing the
 * DisposablePool feature.
 *
 * For use in ../disposable_pool.test.ts.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { IDisposable } from '../../mod.ts';

export class BasicA implements IDisposable {
  name = 'A';
  isDisposed = false;
  dispose(): void {
    this.isDisposed = true;
  }
}

export class BasicB implements IDisposable {
  name = 'B';
  isDisposed = false;
  dispose(): void {
    this.isDisposed = true;
  }
}

export class BasicC implements IDisposable {
  name = 'C';
  isDisposed = false;
  dispose(): void {
    this.isDisposed = true;
  }
}

export class AsyncA implements IDisposable {
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

export class AsyncB implements IDisposable {
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

export class AsyncC implements IDisposable {
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
