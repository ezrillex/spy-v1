
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CookieLogs
 * 
 */
export type CookieLogs = $Result.DefaultSelection<Prisma.$CookieLogsPayload>
/**
 * Model RequestLogs
 * 
 */
export type RequestLogs = $Result.DefaultSelection<Prisma.$RequestLogsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CookieLogs
 * const cookieLogs = await prisma.cookieLogs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CookieLogs
   * const cookieLogs = await prisma.cookieLogs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cookieLogs`: Exposes CRUD operations for the **CookieLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CookieLogs
    * const cookieLogs = await prisma.cookieLogs.findMany()
    * ```
    */
  get cookieLogs(): Prisma.CookieLogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestLogs`: Exposes CRUD operations for the **RequestLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestLogs
    * const requestLogs = await prisma.requestLogs.findMany()
    * ```
    */
  get requestLogs(): Prisma.RequestLogsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CookieLogs: 'CookieLogs',
    RequestLogs: 'RequestLogs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cookieLogs" | "requestLogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CookieLogs: {
        payload: Prisma.$CookieLogsPayload<ExtArgs>
        fields: Prisma.CookieLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CookieLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CookieLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>
          }
          findFirst: {
            args: Prisma.CookieLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CookieLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>
          }
          findMany: {
            args: Prisma.CookieLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>[]
          }
          create: {
            args: Prisma.CookieLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>
          }
          createMany: {
            args: Prisma.CookieLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CookieLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>[]
          }
          delete: {
            args: Prisma.CookieLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>
          }
          update: {
            args: Prisma.CookieLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>
          }
          deleteMany: {
            args: Prisma.CookieLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CookieLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CookieLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>[]
          }
          upsert: {
            args: Prisma.CookieLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookieLogsPayload>
          }
          aggregate: {
            args: Prisma.CookieLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCookieLogs>
          }
          groupBy: {
            args: Prisma.CookieLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CookieLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CookieLogsCountArgs<ExtArgs>
            result: $Utils.Optional<CookieLogsCountAggregateOutputType> | number
          }
        }
      }
      RequestLogs: {
        payload: Prisma.$RequestLogsPayload<ExtArgs>
        fields: Prisma.RequestLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>
          }
          findFirst: {
            args: Prisma.RequestLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>
          }
          findMany: {
            args: Prisma.RequestLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>[]
          }
          create: {
            args: Prisma.RequestLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>
          }
          createMany: {
            args: Prisma.RequestLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>[]
          }
          delete: {
            args: Prisma.RequestLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>
          }
          update: {
            args: Prisma.RequestLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>
          }
          deleteMany: {
            args: Prisma.RequestLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>[]
          }
          upsert: {
            args: Prisma.RequestLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogsPayload>
          }
          aggregate: {
            args: Prisma.RequestLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestLogs>
          }
          groupBy: {
            args: Prisma.RequestLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestLogsCountArgs<ExtArgs>
            result: $Utils.Optional<RequestLogsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cookieLogs?: CookieLogsOmit
    requestLogs?: RequestLogsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model CookieLogs
   */

  export type AggregateCookieLogs = {
    _count: CookieLogsCountAggregateOutputType | null
    _avg: CookieLogsAvgAggregateOutputType | null
    _sum: CookieLogsSumAggregateOutputType | null
    _min: CookieLogsMinAggregateOutputType | null
    _max: CookieLogsMaxAggregateOutputType | null
  }

  export type CookieLogsAvgAggregateOutputType = {
    id: number | null
  }

  export type CookieLogsSumAggregateOutputType = {
    id: number | null
  }

  export type CookieLogsMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: string | null
    timestamp: Date | null
  }

  export type CookieLogsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: string | null
    timestamp: Date | null
  }

  export type CookieLogsCountAggregateOutputType = {
    id: number
    name: number
    value: number
    timestamp: number
    _all: number
  }


  export type CookieLogsAvgAggregateInputType = {
    id?: true
  }

  export type CookieLogsSumAggregateInputType = {
    id?: true
  }

  export type CookieLogsMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    timestamp?: true
  }

  export type CookieLogsMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    timestamp?: true
  }

  export type CookieLogsCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    timestamp?: true
    _all?: true
  }

  export type CookieLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CookieLogs to aggregate.
     */
    where?: CookieLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CookieLogs to fetch.
     */
    orderBy?: CookieLogsOrderByWithRelationInput | CookieLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CookieLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CookieLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CookieLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CookieLogs
    **/
    _count?: true | CookieLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CookieLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CookieLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CookieLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CookieLogsMaxAggregateInputType
  }

  export type GetCookieLogsAggregateType<T extends CookieLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateCookieLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCookieLogs[P]>
      : GetScalarType<T[P], AggregateCookieLogs[P]>
  }




  export type CookieLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CookieLogsWhereInput
    orderBy?: CookieLogsOrderByWithAggregationInput | CookieLogsOrderByWithAggregationInput[]
    by: CookieLogsScalarFieldEnum[] | CookieLogsScalarFieldEnum
    having?: CookieLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CookieLogsCountAggregateInputType | true
    _avg?: CookieLogsAvgAggregateInputType
    _sum?: CookieLogsSumAggregateInputType
    _min?: CookieLogsMinAggregateInputType
    _max?: CookieLogsMaxAggregateInputType
  }

  export type CookieLogsGroupByOutputType = {
    id: number
    name: string
    value: string
    timestamp: Date
    _count: CookieLogsCountAggregateOutputType | null
    _avg: CookieLogsAvgAggregateOutputType | null
    _sum: CookieLogsSumAggregateOutputType | null
    _min: CookieLogsMinAggregateOutputType | null
    _max: CookieLogsMaxAggregateOutputType | null
  }

  type GetCookieLogsGroupByPayload<T extends CookieLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CookieLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CookieLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CookieLogsGroupByOutputType[P]>
            : GetScalarType<T[P], CookieLogsGroupByOutputType[P]>
        }
      >
    >


  export type CookieLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cookieLogs"]>

  export type CookieLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cookieLogs"]>

  export type CookieLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cookieLogs"]>

  export type CookieLogsSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    timestamp?: boolean
  }

  export type CookieLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "timestamp", ExtArgs["result"]["cookieLogs"]>

  export type $CookieLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CookieLogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: string
      timestamp: Date
    }, ExtArgs["result"]["cookieLogs"]>
    composites: {}
  }

  type CookieLogsGetPayload<S extends boolean | null | undefined | CookieLogsDefaultArgs> = $Result.GetResult<Prisma.$CookieLogsPayload, S>

  type CookieLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CookieLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CookieLogsCountAggregateInputType | true
    }

  export interface CookieLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CookieLogs'], meta: { name: 'CookieLogs' } }
    /**
     * Find zero or one CookieLogs that matches the filter.
     * @param {CookieLogsFindUniqueArgs} args - Arguments to find a CookieLogs
     * @example
     * // Get one CookieLogs
     * const cookieLogs = await prisma.cookieLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CookieLogsFindUniqueArgs>(args: SelectSubset<T, CookieLogsFindUniqueArgs<ExtArgs>>): Prisma__CookieLogsClient<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CookieLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CookieLogsFindUniqueOrThrowArgs} args - Arguments to find a CookieLogs
     * @example
     * // Get one CookieLogs
     * const cookieLogs = await prisma.cookieLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CookieLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, CookieLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CookieLogsClient<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CookieLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieLogsFindFirstArgs} args - Arguments to find a CookieLogs
     * @example
     * // Get one CookieLogs
     * const cookieLogs = await prisma.cookieLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CookieLogsFindFirstArgs>(args?: SelectSubset<T, CookieLogsFindFirstArgs<ExtArgs>>): Prisma__CookieLogsClient<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CookieLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieLogsFindFirstOrThrowArgs} args - Arguments to find a CookieLogs
     * @example
     * // Get one CookieLogs
     * const cookieLogs = await prisma.cookieLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CookieLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, CookieLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CookieLogsClient<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CookieLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CookieLogs
     * const cookieLogs = await prisma.cookieLogs.findMany()
     * 
     * // Get first 10 CookieLogs
     * const cookieLogs = await prisma.cookieLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cookieLogsWithIdOnly = await prisma.cookieLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CookieLogsFindManyArgs>(args?: SelectSubset<T, CookieLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CookieLogs.
     * @param {CookieLogsCreateArgs} args - Arguments to create a CookieLogs.
     * @example
     * // Create one CookieLogs
     * const CookieLogs = await prisma.cookieLogs.create({
     *   data: {
     *     // ... data to create a CookieLogs
     *   }
     * })
     * 
     */
    create<T extends CookieLogsCreateArgs>(args: SelectSubset<T, CookieLogsCreateArgs<ExtArgs>>): Prisma__CookieLogsClient<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CookieLogs.
     * @param {CookieLogsCreateManyArgs} args - Arguments to create many CookieLogs.
     * @example
     * // Create many CookieLogs
     * const cookieLogs = await prisma.cookieLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CookieLogsCreateManyArgs>(args?: SelectSubset<T, CookieLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CookieLogs and returns the data saved in the database.
     * @param {CookieLogsCreateManyAndReturnArgs} args - Arguments to create many CookieLogs.
     * @example
     * // Create many CookieLogs
     * const cookieLogs = await prisma.cookieLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CookieLogs and only return the `id`
     * const cookieLogsWithIdOnly = await prisma.cookieLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CookieLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, CookieLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CookieLogs.
     * @param {CookieLogsDeleteArgs} args - Arguments to delete one CookieLogs.
     * @example
     * // Delete one CookieLogs
     * const CookieLogs = await prisma.cookieLogs.delete({
     *   where: {
     *     // ... filter to delete one CookieLogs
     *   }
     * })
     * 
     */
    delete<T extends CookieLogsDeleteArgs>(args: SelectSubset<T, CookieLogsDeleteArgs<ExtArgs>>): Prisma__CookieLogsClient<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CookieLogs.
     * @param {CookieLogsUpdateArgs} args - Arguments to update one CookieLogs.
     * @example
     * // Update one CookieLogs
     * const cookieLogs = await prisma.cookieLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CookieLogsUpdateArgs>(args: SelectSubset<T, CookieLogsUpdateArgs<ExtArgs>>): Prisma__CookieLogsClient<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CookieLogs.
     * @param {CookieLogsDeleteManyArgs} args - Arguments to filter CookieLogs to delete.
     * @example
     * // Delete a few CookieLogs
     * const { count } = await prisma.cookieLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CookieLogsDeleteManyArgs>(args?: SelectSubset<T, CookieLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CookieLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CookieLogs
     * const cookieLogs = await prisma.cookieLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CookieLogsUpdateManyArgs>(args: SelectSubset<T, CookieLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CookieLogs and returns the data updated in the database.
     * @param {CookieLogsUpdateManyAndReturnArgs} args - Arguments to update many CookieLogs.
     * @example
     * // Update many CookieLogs
     * const cookieLogs = await prisma.cookieLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CookieLogs and only return the `id`
     * const cookieLogsWithIdOnly = await prisma.cookieLogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CookieLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, CookieLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CookieLogs.
     * @param {CookieLogsUpsertArgs} args - Arguments to update or create a CookieLogs.
     * @example
     * // Update or create a CookieLogs
     * const cookieLogs = await prisma.cookieLogs.upsert({
     *   create: {
     *     // ... data to create a CookieLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CookieLogs we want to update
     *   }
     * })
     */
    upsert<T extends CookieLogsUpsertArgs>(args: SelectSubset<T, CookieLogsUpsertArgs<ExtArgs>>): Prisma__CookieLogsClient<$Result.GetResult<Prisma.$CookieLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CookieLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieLogsCountArgs} args - Arguments to filter CookieLogs to count.
     * @example
     * // Count the number of CookieLogs
     * const count = await prisma.cookieLogs.count({
     *   where: {
     *     // ... the filter for the CookieLogs we want to count
     *   }
     * })
    **/
    count<T extends CookieLogsCountArgs>(
      args?: Subset<T, CookieLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CookieLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CookieLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CookieLogsAggregateArgs>(args: Subset<T, CookieLogsAggregateArgs>): Prisma.PrismaPromise<GetCookieLogsAggregateType<T>>

    /**
     * Group by CookieLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CookieLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CookieLogsGroupByArgs['orderBy'] }
        : { orderBy?: CookieLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CookieLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCookieLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CookieLogs model
   */
  readonly fields: CookieLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CookieLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CookieLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CookieLogs model
   */
  interface CookieLogsFieldRefs {
    readonly id: FieldRef<"CookieLogs", 'Int'>
    readonly name: FieldRef<"CookieLogs", 'String'>
    readonly value: FieldRef<"CookieLogs", 'String'>
    readonly timestamp: FieldRef<"CookieLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CookieLogs findUnique
   */
  export type CookieLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * Filter, which CookieLogs to fetch.
     */
    where: CookieLogsWhereUniqueInput
  }

  /**
   * CookieLogs findUniqueOrThrow
   */
  export type CookieLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * Filter, which CookieLogs to fetch.
     */
    where: CookieLogsWhereUniqueInput
  }

  /**
   * CookieLogs findFirst
   */
  export type CookieLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * Filter, which CookieLogs to fetch.
     */
    where?: CookieLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CookieLogs to fetch.
     */
    orderBy?: CookieLogsOrderByWithRelationInput | CookieLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CookieLogs.
     */
    cursor?: CookieLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CookieLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CookieLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CookieLogs.
     */
    distinct?: CookieLogsScalarFieldEnum | CookieLogsScalarFieldEnum[]
  }

  /**
   * CookieLogs findFirstOrThrow
   */
  export type CookieLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * Filter, which CookieLogs to fetch.
     */
    where?: CookieLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CookieLogs to fetch.
     */
    orderBy?: CookieLogsOrderByWithRelationInput | CookieLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CookieLogs.
     */
    cursor?: CookieLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CookieLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CookieLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CookieLogs.
     */
    distinct?: CookieLogsScalarFieldEnum | CookieLogsScalarFieldEnum[]
  }

  /**
   * CookieLogs findMany
   */
  export type CookieLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * Filter, which CookieLogs to fetch.
     */
    where?: CookieLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CookieLogs to fetch.
     */
    orderBy?: CookieLogsOrderByWithRelationInput | CookieLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CookieLogs.
     */
    cursor?: CookieLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CookieLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CookieLogs.
     */
    skip?: number
    distinct?: CookieLogsScalarFieldEnum | CookieLogsScalarFieldEnum[]
  }

  /**
   * CookieLogs create
   */
  export type CookieLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * The data needed to create a CookieLogs.
     */
    data: XOR<CookieLogsCreateInput, CookieLogsUncheckedCreateInput>
  }

  /**
   * CookieLogs createMany
   */
  export type CookieLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CookieLogs.
     */
    data: CookieLogsCreateManyInput | CookieLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CookieLogs createManyAndReturn
   */
  export type CookieLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * The data used to create many CookieLogs.
     */
    data: CookieLogsCreateManyInput | CookieLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CookieLogs update
   */
  export type CookieLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * The data needed to update a CookieLogs.
     */
    data: XOR<CookieLogsUpdateInput, CookieLogsUncheckedUpdateInput>
    /**
     * Choose, which CookieLogs to update.
     */
    where: CookieLogsWhereUniqueInput
  }

  /**
   * CookieLogs updateMany
   */
  export type CookieLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CookieLogs.
     */
    data: XOR<CookieLogsUpdateManyMutationInput, CookieLogsUncheckedUpdateManyInput>
    /**
     * Filter which CookieLogs to update
     */
    where?: CookieLogsWhereInput
    /**
     * Limit how many CookieLogs to update.
     */
    limit?: number
  }

  /**
   * CookieLogs updateManyAndReturn
   */
  export type CookieLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * The data used to update CookieLogs.
     */
    data: XOR<CookieLogsUpdateManyMutationInput, CookieLogsUncheckedUpdateManyInput>
    /**
     * Filter which CookieLogs to update
     */
    where?: CookieLogsWhereInput
    /**
     * Limit how many CookieLogs to update.
     */
    limit?: number
  }

  /**
   * CookieLogs upsert
   */
  export type CookieLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * The filter to search for the CookieLogs to update in case it exists.
     */
    where: CookieLogsWhereUniqueInput
    /**
     * In case the CookieLogs found by the `where` argument doesn't exist, create a new CookieLogs with this data.
     */
    create: XOR<CookieLogsCreateInput, CookieLogsUncheckedCreateInput>
    /**
     * In case the CookieLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CookieLogsUpdateInput, CookieLogsUncheckedUpdateInput>
  }

  /**
   * CookieLogs delete
   */
  export type CookieLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
    /**
     * Filter which CookieLogs to delete.
     */
    where: CookieLogsWhereUniqueInput
  }

  /**
   * CookieLogs deleteMany
   */
  export type CookieLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CookieLogs to delete
     */
    where?: CookieLogsWhereInput
    /**
     * Limit how many CookieLogs to delete.
     */
    limit?: number
  }

  /**
   * CookieLogs without action
   */
  export type CookieLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookieLogs
     */
    select?: CookieLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookieLogs
     */
    omit?: CookieLogsOmit<ExtArgs> | null
  }


  /**
   * Model RequestLogs
   */

  export type AggregateRequestLogs = {
    _count: RequestLogsCountAggregateOutputType | null
    _avg: RequestLogsAvgAggregateOutputType | null
    _sum: RequestLogsSumAggregateOutputType | null
    _min: RequestLogsMinAggregateOutputType | null
    _max: RequestLogsMaxAggregateOutputType | null
  }

  export type RequestLogsAvgAggregateOutputType = {
    id: number | null
    roundtrip: number | null
    status: number | null
  }

  export type RequestLogsSumAggregateOutputType = {
    id: number | null
    roundtrip: number | null
    status: number | null
  }

  export type RequestLogsMinAggregateOutputType = {
    id: number | null
    roundtrip: number | null
    sent_headers: string | null
    sent_cookies: string | null
    status: number | null
    headers: string | null
    html: string | null
    timestamp: Date | null
  }

  export type RequestLogsMaxAggregateOutputType = {
    id: number | null
    roundtrip: number | null
    sent_headers: string | null
    sent_cookies: string | null
    status: number | null
    headers: string | null
    html: string | null
    timestamp: Date | null
  }

  export type RequestLogsCountAggregateOutputType = {
    id: number
    roundtrip: number
    sent_headers: number
    sent_cookies: number
    status: number
    headers: number
    html: number
    timestamp: number
    _all: number
  }


  export type RequestLogsAvgAggregateInputType = {
    id?: true
    roundtrip?: true
    status?: true
  }

  export type RequestLogsSumAggregateInputType = {
    id?: true
    roundtrip?: true
    status?: true
  }

  export type RequestLogsMinAggregateInputType = {
    id?: true
    roundtrip?: true
    sent_headers?: true
    sent_cookies?: true
    status?: true
    headers?: true
    html?: true
    timestamp?: true
  }

  export type RequestLogsMaxAggregateInputType = {
    id?: true
    roundtrip?: true
    sent_headers?: true
    sent_cookies?: true
    status?: true
    headers?: true
    html?: true
    timestamp?: true
  }

  export type RequestLogsCountAggregateInputType = {
    id?: true
    roundtrip?: true
    sent_headers?: true
    sent_cookies?: true
    status?: true
    headers?: true
    html?: true
    timestamp?: true
    _all?: true
  }

  export type RequestLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestLogs to aggregate.
     */
    where?: RequestLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestLogs to fetch.
     */
    orderBy?: RequestLogsOrderByWithRelationInput | RequestLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestLogs
    **/
    _count?: true | RequestLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestLogsMaxAggregateInputType
  }

  export type GetRequestLogsAggregateType<T extends RequestLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestLogs[P]>
      : GetScalarType<T[P], AggregateRequestLogs[P]>
  }




  export type RequestLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestLogsWhereInput
    orderBy?: RequestLogsOrderByWithAggregationInput | RequestLogsOrderByWithAggregationInput[]
    by: RequestLogsScalarFieldEnum[] | RequestLogsScalarFieldEnum
    having?: RequestLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestLogsCountAggregateInputType | true
    _avg?: RequestLogsAvgAggregateInputType
    _sum?: RequestLogsSumAggregateInputType
    _min?: RequestLogsMinAggregateInputType
    _max?: RequestLogsMaxAggregateInputType
  }

  export type RequestLogsGroupByOutputType = {
    id: number
    roundtrip: number
    sent_headers: string
    sent_cookies: string
    status: number
    headers: string
    html: string
    timestamp: Date
    _count: RequestLogsCountAggregateOutputType | null
    _avg: RequestLogsAvgAggregateOutputType | null
    _sum: RequestLogsSumAggregateOutputType | null
    _min: RequestLogsMinAggregateOutputType | null
    _max: RequestLogsMaxAggregateOutputType | null
  }

  type GetRequestLogsGroupByPayload<T extends RequestLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestLogsGroupByOutputType[P]>
            : GetScalarType<T[P], RequestLogsGroupByOutputType[P]>
        }
      >
    >


  export type RequestLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundtrip?: boolean
    sent_headers?: boolean
    sent_cookies?: boolean
    status?: boolean
    headers?: boolean
    html?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["requestLogs"]>

  export type RequestLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundtrip?: boolean
    sent_headers?: boolean
    sent_cookies?: boolean
    status?: boolean
    headers?: boolean
    html?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["requestLogs"]>

  export type RequestLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundtrip?: boolean
    sent_headers?: boolean
    sent_cookies?: boolean
    status?: boolean
    headers?: boolean
    html?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["requestLogs"]>

  export type RequestLogsSelectScalar = {
    id?: boolean
    roundtrip?: boolean
    sent_headers?: boolean
    sent_cookies?: boolean
    status?: boolean
    headers?: boolean
    html?: boolean
    timestamp?: boolean
  }

  export type RequestLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roundtrip" | "sent_headers" | "sent_cookies" | "status" | "headers" | "html" | "timestamp", ExtArgs["result"]["requestLogs"]>

  export type $RequestLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestLogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roundtrip: number
      sent_headers: string
      sent_cookies: string
      status: number
      headers: string
      html: string
      timestamp: Date
    }, ExtArgs["result"]["requestLogs"]>
    composites: {}
  }

  type RequestLogsGetPayload<S extends boolean | null | undefined | RequestLogsDefaultArgs> = $Result.GetResult<Prisma.$RequestLogsPayload, S>

  type RequestLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestLogsCountAggregateInputType | true
    }

  export interface RequestLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestLogs'], meta: { name: 'RequestLogs' } }
    /**
     * Find zero or one RequestLogs that matches the filter.
     * @param {RequestLogsFindUniqueArgs} args - Arguments to find a RequestLogs
     * @example
     * // Get one RequestLogs
     * const requestLogs = await prisma.requestLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestLogsFindUniqueArgs>(args: SelectSubset<T, RequestLogsFindUniqueArgs<ExtArgs>>): Prisma__RequestLogsClient<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestLogsFindUniqueOrThrowArgs} args - Arguments to find a RequestLogs
     * @example
     * // Get one RequestLogs
     * const requestLogs = await prisma.requestLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestLogsClient<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogsFindFirstArgs} args - Arguments to find a RequestLogs
     * @example
     * // Get one RequestLogs
     * const requestLogs = await prisma.requestLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestLogsFindFirstArgs>(args?: SelectSubset<T, RequestLogsFindFirstArgs<ExtArgs>>): Prisma__RequestLogsClient<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogsFindFirstOrThrowArgs} args - Arguments to find a RequestLogs
     * @example
     * // Get one RequestLogs
     * const requestLogs = await prisma.requestLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestLogsClient<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestLogs
     * const requestLogs = await prisma.requestLogs.findMany()
     * 
     * // Get first 10 RequestLogs
     * const requestLogs = await prisma.requestLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestLogsWithIdOnly = await prisma.requestLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestLogsFindManyArgs>(args?: SelectSubset<T, RequestLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestLogs.
     * @param {RequestLogsCreateArgs} args - Arguments to create a RequestLogs.
     * @example
     * // Create one RequestLogs
     * const RequestLogs = await prisma.requestLogs.create({
     *   data: {
     *     // ... data to create a RequestLogs
     *   }
     * })
     * 
     */
    create<T extends RequestLogsCreateArgs>(args: SelectSubset<T, RequestLogsCreateArgs<ExtArgs>>): Prisma__RequestLogsClient<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestLogs.
     * @param {RequestLogsCreateManyArgs} args - Arguments to create many RequestLogs.
     * @example
     * // Create many RequestLogs
     * const requestLogs = await prisma.requestLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestLogsCreateManyArgs>(args?: SelectSubset<T, RequestLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestLogs and returns the data saved in the database.
     * @param {RequestLogsCreateManyAndReturnArgs} args - Arguments to create many RequestLogs.
     * @example
     * // Create many RequestLogs
     * const requestLogs = await prisma.requestLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestLogs and only return the `id`
     * const requestLogsWithIdOnly = await prisma.requestLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestLogs.
     * @param {RequestLogsDeleteArgs} args - Arguments to delete one RequestLogs.
     * @example
     * // Delete one RequestLogs
     * const RequestLogs = await prisma.requestLogs.delete({
     *   where: {
     *     // ... filter to delete one RequestLogs
     *   }
     * })
     * 
     */
    delete<T extends RequestLogsDeleteArgs>(args: SelectSubset<T, RequestLogsDeleteArgs<ExtArgs>>): Prisma__RequestLogsClient<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestLogs.
     * @param {RequestLogsUpdateArgs} args - Arguments to update one RequestLogs.
     * @example
     * // Update one RequestLogs
     * const requestLogs = await prisma.requestLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestLogsUpdateArgs>(args: SelectSubset<T, RequestLogsUpdateArgs<ExtArgs>>): Prisma__RequestLogsClient<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestLogs.
     * @param {RequestLogsDeleteManyArgs} args - Arguments to filter RequestLogs to delete.
     * @example
     * // Delete a few RequestLogs
     * const { count } = await prisma.requestLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestLogsDeleteManyArgs>(args?: SelectSubset<T, RequestLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestLogs
     * const requestLogs = await prisma.requestLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestLogsUpdateManyArgs>(args: SelectSubset<T, RequestLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestLogs and returns the data updated in the database.
     * @param {RequestLogsUpdateManyAndReturnArgs} args - Arguments to update many RequestLogs.
     * @example
     * // Update many RequestLogs
     * const requestLogs = await prisma.requestLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestLogs and only return the `id`
     * const requestLogsWithIdOnly = await prisma.requestLogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestLogs.
     * @param {RequestLogsUpsertArgs} args - Arguments to update or create a RequestLogs.
     * @example
     * // Update or create a RequestLogs
     * const requestLogs = await prisma.requestLogs.upsert({
     *   create: {
     *     // ... data to create a RequestLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestLogs we want to update
     *   }
     * })
     */
    upsert<T extends RequestLogsUpsertArgs>(args: SelectSubset<T, RequestLogsUpsertArgs<ExtArgs>>): Prisma__RequestLogsClient<$Result.GetResult<Prisma.$RequestLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogsCountArgs} args - Arguments to filter RequestLogs to count.
     * @example
     * // Count the number of RequestLogs
     * const count = await prisma.requestLogs.count({
     *   where: {
     *     // ... the filter for the RequestLogs we want to count
     *   }
     * })
    **/
    count<T extends RequestLogsCountArgs>(
      args?: Subset<T, RequestLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestLogsAggregateArgs>(args: Subset<T, RequestLogsAggregateArgs>): Prisma.PrismaPromise<GetRequestLogsAggregateType<T>>

    /**
     * Group by RequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestLogsGroupByArgs['orderBy'] }
        : { orderBy?: RequestLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestLogs model
   */
  readonly fields: RequestLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestLogs model
   */
  interface RequestLogsFieldRefs {
    readonly id: FieldRef<"RequestLogs", 'Int'>
    readonly roundtrip: FieldRef<"RequestLogs", 'Float'>
    readonly sent_headers: FieldRef<"RequestLogs", 'String'>
    readonly sent_cookies: FieldRef<"RequestLogs", 'String'>
    readonly status: FieldRef<"RequestLogs", 'Int'>
    readonly headers: FieldRef<"RequestLogs", 'String'>
    readonly html: FieldRef<"RequestLogs", 'String'>
    readonly timestamp: FieldRef<"RequestLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestLogs findUnique
   */
  export type RequestLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * Filter, which RequestLogs to fetch.
     */
    where: RequestLogsWhereUniqueInput
  }

  /**
   * RequestLogs findUniqueOrThrow
   */
  export type RequestLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * Filter, which RequestLogs to fetch.
     */
    where: RequestLogsWhereUniqueInput
  }

  /**
   * RequestLogs findFirst
   */
  export type RequestLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * Filter, which RequestLogs to fetch.
     */
    where?: RequestLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestLogs to fetch.
     */
    orderBy?: RequestLogsOrderByWithRelationInput | RequestLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestLogs.
     */
    cursor?: RequestLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestLogs.
     */
    distinct?: RequestLogsScalarFieldEnum | RequestLogsScalarFieldEnum[]
  }

  /**
   * RequestLogs findFirstOrThrow
   */
  export type RequestLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * Filter, which RequestLogs to fetch.
     */
    where?: RequestLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestLogs to fetch.
     */
    orderBy?: RequestLogsOrderByWithRelationInput | RequestLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestLogs.
     */
    cursor?: RequestLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestLogs.
     */
    distinct?: RequestLogsScalarFieldEnum | RequestLogsScalarFieldEnum[]
  }

  /**
   * RequestLogs findMany
   */
  export type RequestLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * Filter, which RequestLogs to fetch.
     */
    where?: RequestLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestLogs to fetch.
     */
    orderBy?: RequestLogsOrderByWithRelationInput | RequestLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestLogs.
     */
    cursor?: RequestLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestLogs.
     */
    skip?: number
    distinct?: RequestLogsScalarFieldEnum | RequestLogsScalarFieldEnum[]
  }

  /**
   * RequestLogs create
   */
  export type RequestLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * The data needed to create a RequestLogs.
     */
    data: XOR<RequestLogsCreateInput, RequestLogsUncheckedCreateInput>
  }

  /**
   * RequestLogs createMany
   */
  export type RequestLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestLogs.
     */
    data: RequestLogsCreateManyInput | RequestLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestLogs createManyAndReturn
   */
  export type RequestLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * The data used to create many RequestLogs.
     */
    data: RequestLogsCreateManyInput | RequestLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestLogs update
   */
  export type RequestLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * The data needed to update a RequestLogs.
     */
    data: XOR<RequestLogsUpdateInput, RequestLogsUncheckedUpdateInput>
    /**
     * Choose, which RequestLogs to update.
     */
    where: RequestLogsWhereUniqueInput
  }

  /**
   * RequestLogs updateMany
   */
  export type RequestLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestLogs.
     */
    data: XOR<RequestLogsUpdateManyMutationInput, RequestLogsUncheckedUpdateManyInput>
    /**
     * Filter which RequestLogs to update
     */
    where?: RequestLogsWhereInput
    /**
     * Limit how many RequestLogs to update.
     */
    limit?: number
  }

  /**
   * RequestLogs updateManyAndReturn
   */
  export type RequestLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * The data used to update RequestLogs.
     */
    data: XOR<RequestLogsUpdateManyMutationInput, RequestLogsUncheckedUpdateManyInput>
    /**
     * Filter which RequestLogs to update
     */
    where?: RequestLogsWhereInput
    /**
     * Limit how many RequestLogs to update.
     */
    limit?: number
  }

  /**
   * RequestLogs upsert
   */
  export type RequestLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * The filter to search for the RequestLogs to update in case it exists.
     */
    where: RequestLogsWhereUniqueInput
    /**
     * In case the RequestLogs found by the `where` argument doesn't exist, create a new RequestLogs with this data.
     */
    create: XOR<RequestLogsCreateInput, RequestLogsUncheckedCreateInput>
    /**
     * In case the RequestLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestLogsUpdateInput, RequestLogsUncheckedUpdateInput>
  }

  /**
   * RequestLogs delete
   */
  export type RequestLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
    /**
     * Filter which RequestLogs to delete.
     */
    where: RequestLogsWhereUniqueInput
  }

  /**
   * RequestLogs deleteMany
   */
  export type RequestLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestLogs to delete
     */
    where?: RequestLogsWhereInput
    /**
     * Limit how many RequestLogs to delete.
     */
    limit?: number
  }

  /**
   * RequestLogs without action
   */
  export type RequestLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLogs
     */
    select?: RequestLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLogs
     */
    omit?: RequestLogsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CookieLogsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    timestamp: 'timestamp'
  };

  export type CookieLogsScalarFieldEnum = (typeof CookieLogsScalarFieldEnum)[keyof typeof CookieLogsScalarFieldEnum]


  export const RequestLogsScalarFieldEnum: {
    id: 'id',
    roundtrip: 'roundtrip',
    sent_headers: 'sent_headers',
    sent_cookies: 'sent_cookies',
    status: 'status',
    headers: 'headers',
    html: 'html',
    timestamp: 'timestamp'
  };

  export type RequestLogsScalarFieldEnum = (typeof RequestLogsScalarFieldEnum)[keyof typeof RequestLogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CookieLogsWhereInput = {
    AND?: CookieLogsWhereInput | CookieLogsWhereInput[]
    OR?: CookieLogsWhereInput[]
    NOT?: CookieLogsWhereInput | CookieLogsWhereInput[]
    id?: IntFilter<"CookieLogs"> | number
    name?: StringFilter<"CookieLogs"> | string
    value?: StringFilter<"CookieLogs"> | string
    timestamp?: DateTimeFilter<"CookieLogs"> | Date | string
  }

  export type CookieLogsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type CookieLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CookieLogsWhereInput | CookieLogsWhereInput[]
    OR?: CookieLogsWhereInput[]
    NOT?: CookieLogsWhereInput | CookieLogsWhereInput[]
    name?: StringFilter<"CookieLogs"> | string
    value?: StringFilter<"CookieLogs"> | string
    timestamp?: DateTimeFilter<"CookieLogs"> | Date | string
  }, "id">

  export type CookieLogsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    _count?: CookieLogsCountOrderByAggregateInput
    _avg?: CookieLogsAvgOrderByAggregateInput
    _max?: CookieLogsMaxOrderByAggregateInput
    _min?: CookieLogsMinOrderByAggregateInput
    _sum?: CookieLogsSumOrderByAggregateInput
  }

  export type CookieLogsScalarWhereWithAggregatesInput = {
    AND?: CookieLogsScalarWhereWithAggregatesInput | CookieLogsScalarWhereWithAggregatesInput[]
    OR?: CookieLogsScalarWhereWithAggregatesInput[]
    NOT?: CookieLogsScalarWhereWithAggregatesInput | CookieLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CookieLogs"> | number
    name?: StringWithAggregatesFilter<"CookieLogs"> | string
    value?: StringWithAggregatesFilter<"CookieLogs"> | string
    timestamp?: DateTimeWithAggregatesFilter<"CookieLogs"> | Date | string
  }

  export type RequestLogsWhereInput = {
    AND?: RequestLogsWhereInput | RequestLogsWhereInput[]
    OR?: RequestLogsWhereInput[]
    NOT?: RequestLogsWhereInput | RequestLogsWhereInput[]
    id?: IntFilter<"RequestLogs"> | number
    roundtrip?: FloatFilter<"RequestLogs"> | number
    sent_headers?: StringFilter<"RequestLogs"> | string
    sent_cookies?: StringFilter<"RequestLogs"> | string
    status?: IntFilter<"RequestLogs"> | number
    headers?: StringFilter<"RequestLogs"> | string
    html?: StringFilter<"RequestLogs"> | string
    timestamp?: DateTimeFilter<"RequestLogs"> | Date | string
  }

  export type RequestLogsOrderByWithRelationInput = {
    id?: SortOrder
    roundtrip?: SortOrder
    sent_headers?: SortOrder
    sent_cookies?: SortOrder
    status?: SortOrder
    headers?: SortOrder
    html?: SortOrder
    timestamp?: SortOrder
  }

  export type RequestLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequestLogsWhereInput | RequestLogsWhereInput[]
    OR?: RequestLogsWhereInput[]
    NOT?: RequestLogsWhereInput | RequestLogsWhereInput[]
    roundtrip?: FloatFilter<"RequestLogs"> | number
    sent_headers?: StringFilter<"RequestLogs"> | string
    sent_cookies?: StringFilter<"RequestLogs"> | string
    status?: IntFilter<"RequestLogs"> | number
    headers?: StringFilter<"RequestLogs"> | string
    html?: StringFilter<"RequestLogs"> | string
    timestamp?: DateTimeFilter<"RequestLogs"> | Date | string
  }, "id">

  export type RequestLogsOrderByWithAggregationInput = {
    id?: SortOrder
    roundtrip?: SortOrder
    sent_headers?: SortOrder
    sent_cookies?: SortOrder
    status?: SortOrder
    headers?: SortOrder
    html?: SortOrder
    timestamp?: SortOrder
    _count?: RequestLogsCountOrderByAggregateInput
    _avg?: RequestLogsAvgOrderByAggregateInput
    _max?: RequestLogsMaxOrderByAggregateInput
    _min?: RequestLogsMinOrderByAggregateInput
    _sum?: RequestLogsSumOrderByAggregateInput
  }

  export type RequestLogsScalarWhereWithAggregatesInput = {
    AND?: RequestLogsScalarWhereWithAggregatesInput | RequestLogsScalarWhereWithAggregatesInput[]
    OR?: RequestLogsScalarWhereWithAggregatesInput[]
    NOT?: RequestLogsScalarWhereWithAggregatesInput | RequestLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RequestLogs"> | number
    roundtrip?: FloatWithAggregatesFilter<"RequestLogs"> | number
    sent_headers?: StringWithAggregatesFilter<"RequestLogs"> | string
    sent_cookies?: StringWithAggregatesFilter<"RequestLogs"> | string
    status?: IntWithAggregatesFilter<"RequestLogs"> | number
    headers?: StringWithAggregatesFilter<"RequestLogs"> | string
    html?: StringWithAggregatesFilter<"RequestLogs"> | string
    timestamp?: DateTimeWithAggregatesFilter<"RequestLogs"> | Date | string
  }

  export type CookieLogsCreateInput = {
    name: string
    value: string
    timestamp?: Date | string
  }

  export type CookieLogsUncheckedCreateInput = {
    id?: number
    name: string
    value: string
    timestamp?: Date | string
  }

  export type CookieLogsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CookieLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CookieLogsCreateManyInput = {
    id?: number
    name: string
    value: string
    timestamp?: Date | string
  }

  export type CookieLogsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CookieLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogsCreateInput = {
    roundtrip: number
    sent_headers: string
    sent_cookies: string
    status: number
    headers: string
    html: string
    timestamp?: Date | string
  }

  export type RequestLogsUncheckedCreateInput = {
    id?: number
    roundtrip: number
    sent_headers: string
    sent_cookies: string
    status: number
    headers: string
    html: string
    timestamp?: Date | string
  }

  export type RequestLogsUpdateInput = {
    roundtrip?: FloatFieldUpdateOperationsInput | number
    sent_headers?: StringFieldUpdateOperationsInput | string
    sent_cookies?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    headers?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundtrip?: FloatFieldUpdateOperationsInput | number
    sent_headers?: StringFieldUpdateOperationsInput | string
    sent_cookies?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    headers?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogsCreateManyInput = {
    id?: number
    roundtrip: number
    sent_headers: string
    sent_cookies: string
    status: number
    headers: string
    html: string
    timestamp?: Date | string
  }

  export type RequestLogsUpdateManyMutationInput = {
    roundtrip?: FloatFieldUpdateOperationsInput | number
    sent_headers?: StringFieldUpdateOperationsInput | string
    sent_cookies?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    headers?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundtrip?: FloatFieldUpdateOperationsInput | number
    sent_headers?: StringFieldUpdateOperationsInput | string
    sent_cookies?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    headers?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CookieLogsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type CookieLogsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CookieLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type CookieLogsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type CookieLogsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RequestLogsCountOrderByAggregateInput = {
    id?: SortOrder
    roundtrip?: SortOrder
    sent_headers?: SortOrder
    sent_cookies?: SortOrder
    status?: SortOrder
    headers?: SortOrder
    html?: SortOrder
    timestamp?: SortOrder
  }

  export type RequestLogsAvgOrderByAggregateInput = {
    id?: SortOrder
    roundtrip?: SortOrder
    status?: SortOrder
  }

  export type RequestLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    roundtrip?: SortOrder
    sent_headers?: SortOrder
    sent_cookies?: SortOrder
    status?: SortOrder
    headers?: SortOrder
    html?: SortOrder
    timestamp?: SortOrder
  }

  export type RequestLogsMinOrderByAggregateInput = {
    id?: SortOrder
    roundtrip?: SortOrder
    sent_headers?: SortOrder
    sent_cookies?: SortOrder
    status?: SortOrder
    headers?: SortOrder
    html?: SortOrder
    timestamp?: SortOrder
  }

  export type RequestLogsSumOrderByAggregateInput = {
    id?: SortOrder
    roundtrip?: SortOrder
    status?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}