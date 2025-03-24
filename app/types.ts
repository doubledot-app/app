/**
 * DeepPartial
 * @desc Partial that works for deeply nested structure
 * @example
 *   // Expect: {
 *   //   first?: {
 *   //     second?: {
 *   //       name?: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 *   type PartialNestedProps = DeepPartial<NestedProps>;
 */
export type DeepPartial<T> = {[P in keyof T]?: _DeepPartial<T[P]>};

/** @private */
export type _DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? _DeepPartialArray<U>
    : T extends object
      ? DeepPartial<T>
      : T | undefined;
/** @private */
// tslint:disable-next-line:class-name
export interface _DeepPartialArray<T> extends Array<_DeepPartial<T>> {}

/**
 * DeepNullish
 * @desc Nullish that works for deeply nested structure
 * @example
 *   // Expect: {
 *   //   first?: {
 *   //     second?: {
 *   //       name?: string | null;
 *   //     } | null;
 *   //   } | null;
 *   // }
 *   type NestedProps = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 *   type NullishNestedProps = DeepNullish<NestedProps>;
 */
export type DeepNullish<T> = {[P in keyof T]?: _DeepNullish<T[P]> | null};

/** @private */
export type _DeepNullish<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? _DeepNullishArray<U>
    : T extends object
      ? DeepNullish<T>
      : T | undefined | null;
/** @private */
// tslint:disable-next-line:class-name
export interface _DeepNullishArray<T> extends Array<_DeepNullish<T>> {}

/**
 * Nullish
 * @desc Nullish that works for deeply nested structure
 * @example
 *  // Expect: {
 * //   first?: {
 * //     second: {
 * //       name: string;
 * //     };
 * //   } | null;
 * // }
 * type NestedProps = {
 *  first: {
 *   second: {
 *    name: string;
 *  };
 * };
 */
export type Nullish<T> = {[P in keyof T]?: T[P] | null};
