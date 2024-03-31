/**
 * This file is used to import all of the package development dependencies.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

export { describe, it } from 'https://deno.land/std@0.213.0/testing/bdd.ts';
export {
  assert,
  assertEquals,
  assertThrows,
} from 'https://deno.land/std@0.213.0/assert/mod.ts';
export {
  assertSpyCalls,
  spy,
  stub,
} from 'https://deno.land/std@0.213.0/testing/mock.ts';
