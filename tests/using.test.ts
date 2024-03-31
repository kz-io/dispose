/**
 * This file contains tests for the using feature.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { assert, assertEquals, describe, it } from '../dev_deps.ts';

import { DisposablePool, using } from '../mod.ts';

import { A, B, C } from './fixtures/using.fixtures.ts';

describe('using', () => {
  describe('(disposable, callback)', () => {
    const a_ = new A();
    const b_ = new B();
    const c_ = new C();
    const pool = new DisposablePool({ a: new A(), b: new B(), c: new C() });

    it('should dispose after callback', () => {
      using(a_, (a) => {
        assert(!a.isDisposed);
        assertEquals(a.name, 'A');

        using(b_, (b) => {
          assert(!b.isDisposed);
          assertEquals(b.name, 'B');

          using(c_, (c) => {
            assert(!c.isDisposed);
            assertEquals(c.name, 'C');

            using(pool, (p) => {
              assert(!p.isDisposed);
              assert(!p.resources?.a.isDisposed);
              assert(!p.resources?.b.isDisposed);
              assert(!p.resources?.c.isDisposed);
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
