/**
 * Tests IDisposable interface.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/i_disposable.fixtures.ts';

describe('IDisposable', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, beforeDispose, afterDispose]) => {
      assertEquals(instance.isDisposed, beforeDispose);

      instance.dispose();

      assertEquals(instance.isDisposed, afterDispose);
    });
  });
});
