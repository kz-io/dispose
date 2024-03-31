/**
 * This file contains tests for the DisposablePool feature.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assert, assertEquals, describe, it } from '../dev_deps.ts';

import { DisposablePool } from '../mod.ts';

import {
  AsyncA,
  AsyncB,
  AsyncC,
  BasicA,
  BasicB,
  BasicC,
} from './fixtures/disposable_pool.fixtures.ts';

describe('DisposablePool', () => {
  describe('(resources)', () => {
    it('should create a new instance with undisposed .resources', () => {
      const pool = new DisposablePool({
        a: new BasicA(),
        b: new BasicB(),
        c: new BasicC(),
      });
      assert(!pool.isDisposed);
      assert(!pool.resources?.a.isDisposed);
      assert(!pool.resources?.b.isDisposed);
      assert(!pool.resources?.c.isDisposed);
    });
  });

  describe('use(callback)', () => {
    const pool = new DisposablePool({
      a: new BasicA(),
      b: new BasicB(),
      c: new BasicC(),
    });

    it('pool and resource undisposed', () => {
      pool.use(({ a, b, c }, p) => {
        assert(!p.isDisposed);
        assert(!a.isDisposed);
        assert(!b.isDisposed);
        assert(!c.isDisposed);
      });
    });

    it('should dispose after callback', () => {
      assert(pool.isDisposed);
      assertEquals(pool.resources, undefined);
    });
  });

  describe('useAsync(callback)', () => {
    const pool = new DisposablePool({
      a: new AsyncA(),
      b: new AsyncB(),
      c: new AsyncC(),
    });

    it('pool and resource undisposed', async () => {
      await pool.useAsync(async ({ a, b, c }, p) => {
        assert(!p.isDisposed);
        assert(!a.isDisposed);
        assert(!b.isDisposed);
        assert(!c.isDisposed);

        await a.run();
        await b.run();
        await c.run();
      });
    });

    it('should dispose after callback', () => {
      assert(pool.isDisposed);
      assertEquals(pool.resources, undefined);
    });
  });
});
