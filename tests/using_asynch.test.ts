/**
 * This file contains tests for the usingAsync feature.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { assert, assertEquals, describe, it } from '../dev_deps.ts';

import { DisposablePool, usingAsync } from '../mod.ts';

import { A, B, C } from './fixtures/using_async.fixtures.ts';

describe('usingAsync', () => {
  describe('(disposable, callback)', () => {
    const a_ = new A();
    const b_ = new B();
    const c_ = new C();
    const pool = new DisposablePool({ a: new A(), b: new B(), c: new C() });

    it('should dispose after callback', async () => {
      await usingAsync(a_, async (a) => {
        assert(!a.isDisposed);
        assertEquals(a.name, 'A');

        await a.run();

        await usingAsync(b_, async (b) => {
          assert(!b.isDisposed);
          assertEquals(b.name, 'B');

          await b.run();

          await usingAsync(c_, async (c) => {
            assert(!c.isDisposed);
            assertEquals(c.name, 'C');

            await c.run();

            await usingAsync(pool, async (p) => {
              const { a, b, c } = p.resources!;

              assert(!p.isDisposed);
              assert(!a.isDisposed);
              assert(!b.isDisposed);
              assert(!c.isDisposed);

              await a.run();
              await b.run();
              await c.run();
            });

            assert(pool.isDisposed);
            assertEquals(pool.resources, undefined);
          });

          assert(c_.isDisposed);
        });

        assert(b_.isDisposed);
      });

      assert(a_.isDisposed);
    });
  });
});
