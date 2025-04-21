
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Projeto
 * 
 */
export type Projeto = $Result.DefaultSelection<Prisma.$ProjetoPayload>
/**
 * Model Tarefa
 * 
 */
export type Tarefa = $Result.DefaultSelection<Prisma.$TarefaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projeto`: Exposes CRUD operations for the **Projeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projetos
    * const projetos = await prisma.projeto.findMany()
    * ```
    */
  get projeto(): Prisma.ProjetoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarefa`: Exposes CRUD operations for the **Tarefa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tarefas
    * const tarefas = await prisma.tarefa.findMany()
    * ```
    */
  get tarefa(): Prisma.TarefaDelegate<ExtArgs, ClientOptions>;
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
    Usuario: 'Usuario',
    Projeto: 'Projeto',
    Tarefa: 'Tarefa'
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
      modelProps: "usuario" | "projeto" | "tarefa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Projeto: {
        payload: Prisma.$ProjetoPayload<ExtArgs>
        fields: Prisma.ProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findFirst: {
            args: Prisma.ProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findMany: {
            args: Prisma.ProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          create: {
            args: Prisma.ProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          createMany: {
            args: Prisma.ProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          delete: {
            args: Prisma.ProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          update: {
            args: Prisma.ProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          deleteMany: {
            args: Prisma.ProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          upsert: {
            args: Prisma.ProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          aggregate: {
            args: Prisma.ProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjeto>
          }
          groupBy: {
            args: Prisma.ProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetoCountAggregateOutputType> | number
          }
        }
      }
      Tarefa: {
        payload: Prisma.$TarefaPayload<ExtArgs>
        fields: Prisma.TarefaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarefaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarefaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findFirst: {
            args: Prisma.TarefaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarefaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findMany: {
            args: Prisma.TarefaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          create: {
            args: Prisma.TarefaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          createMany: {
            args: Prisma.TarefaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TarefaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          delete: {
            args: Prisma.TarefaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          update: {
            args: Prisma.TarefaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          deleteMany: {
            args: Prisma.TarefaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarefaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TarefaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          upsert: {
            args: Prisma.TarefaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          aggregate: {
            args: Prisma.TarefaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarefa>
          }
          groupBy: {
            args: Prisma.TarefaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarefaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarefaCountArgs<ExtArgs>
            result: $Utils.Optional<TarefaCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    projeto?: ProjetoOmit
    tarefa?: TarefaOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    projetos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | UsuarioCountOutputTypeCountProjetosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
  }


  /**
   * Count Type ProjetoCountOutputType
   */

  export type ProjetoCountOutputType = {
    tarefas: number
  }

  export type ProjetoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | ProjetoCountOutputTypeCountTarefasArgs
  }

  // Custom InputTypes
  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoCountOutputType
     */
    select?: ProjetoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
    nome: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
    nome: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    senha: number
    nome: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    senha: string
    nome: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    projetos?: boolean | Usuario$projetosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "senha" | "nome", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | Usuario$projetosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      projetos: Prisma.$ProjetoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      senha: string
      nome: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projetos<T extends Usuario$projetosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$projetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.projetos
   */
  export type Usuario$projetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    cursor?: ProjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Projeto
   */

  export type AggregateProjeto = {
    _count: ProjetoCountAggregateOutputType | null
    _avg: ProjetoAvgAggregateOutputType | null
    _sum: ProjetoSumAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  export type ProjetoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type ProjetoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type ProjetoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    usuarioId: number | null
  }

  export type ProjetoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    usuarioId: number | null
  }

  export type ProjetoCountAggregateOutputType = {
    id: number
    nome: number
    usuarioId: number
    _all: number
  }


  export type ProjetoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type ProjetoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type ProjetoMinAggregateInputType = {
    id?: true
    nome?: true
    usuarioId?: true
  }

  export type ProjetoMaxAggregateInputType = {
    id?: true
    nome?: true
    usuarioId?: true
  }

  export type ProjetoCountAggregateInputType = {
    id?: true
    nome?: true
    usuarioId?: true
    _all?: true
  }

  export type ProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projeto to aggregate.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projetos
    **/
    _count?: true | ProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjetoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjetoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetoMaxAggregateInputType
  }

  export type GetProjetoAggregateType<T extends ProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjeto[P]>
      : GetScalarType<T[P], AggregateProjeto[P]>
  }




  export type ProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithAggregationInput | ProjetoOrderByWithAggregationInput[]
    by: ProjetoScalarFieldEnum[] | ProjetoScalarFieldEnum
    having?: ProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetoCountAggregateInputType | true
    _avg?: ProjetoAvgAggregateInputType
    _sum?: ProjetoSumAggregateInputType
    _min?: ProjetoMinAggregateInputType
    _max?: ProjetoMaxAggregateInputType
  }

  export type ProjetoGroupByOutputType = {
    id: number
    nome: string
    usuarioId: number
    _count: ProjetoCountAggregateOutputType | null
    _avg: ProjetoAvgAggregateOutputType | null
    _sum: ProjetoSumAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  type GetProjetoGroupByPayload<T extends ProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
        }
      >
    >


  export type ProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuarioId?: boolean
    tarefas?: boolean | Projeto$tarefasArgs<ExtArgs>
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuarioId?: boolean
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuarioId?: boolean
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectScalar = {
    id?: boolean
    nome?: boolean
    usuarioId?: boolean
  }

  export type ProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "usuarioId", ExtArgs["result"]["projeto"]>
  export type ProjetoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | Projeto$tarefasArgs<ExtArgs>
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjetoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProjetoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projeto"
    objects: {
      tarefas: Prisma.$TarefaPayload<ExtArgs>[]
      usuarioRel: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      usuarioId: number
    }, ExtArgs["result"]["projeto"]>
    composites: {}
  }

  type ProjetoGetPayload<S extends boolean | null | undefined | ProjetoDefaultArgs> = $Result.GetResult<Prisma.$ProjetoPayload, S>

  type ProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetoCountAggregateInputType | true
    }

  export interface ProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projeto'], meta: { name: 'Projeto' } }
    /**
     * Find zero or one Projeto that matches the filter.
     * @param {ProjetoFindUniqueArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjetoFindUniqueArgs>(args: SelectSubset<T, ProjetoFindUniqueArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjetoFindUniqueOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjetoFindFirstArgs>(args?: SelectSubset<T, ProjetoFindFirstArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projetos
     * const projetos = await prisma.projeto.findMany()
     * 
     * // Get first 10 Projetos
     * const projetos = await prisma.projeto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetoWithIdOnly = await prisma.projeto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjetoFindManyArgs>(args?: SelectSubset<T, ProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projeto.
     * @param {ProjetoCreateArgs} args - Arguments to create a Projeto.
     * @example
     * // Create one Projeto
     * const Projeto = await prisma.projeto.create({
     *   data: {
     *     // ... data to create a Projeto
     *   }
     * })
     * 
     */
    create<T extends ProjetoCreateArgs>(args: SelectSubset<T, ProjetoCreateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projetos.
     * @param {ProjetoCreateManyArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjetoCreateManyArgs>(args?: SelectSubset<T, ProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projetos and returns the data saved in the database.
     * @param {ProjetoCreateManyAndReturnArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projeto.
     * @param {ProjetoDeleteArgs} args - Arguments to delete one Projeto.
     * @example
     * // Delete one Projeto
     * const Projeto = await prisma.projeto.delete({
     *   where: {
     *     // ... filter to delete one Projeto
     *   }
     * })
     * 
     */
    delete<T extends ProjetoDeleteArgs>(args: SelectSubset<T, ProjetoDeleteArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projeto.
     * @param {ProjetoUpdateArgs} args - Arguments to update one Projeto.
     * @example
     * // Update one Projeto
     * const projeto = await prisma.projeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjetoUpdateArgs>(args: SelectSubset<T, ProjetoUpdateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projetos.
     * @param {ProjetoDeleteManyArgs} args - Arguments to filter Projetos to delete.
     * @example
     * // Delete a few Projetos
     * const { count } = await prisma.projeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjetoDeleteManyArgs>(args?: SelectSubset<T, ProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjetoUpdateManyArgs>(args: SelectSubset<T, ProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos and returns the data updated in the database.
     * @param {ProjetoUpdateManyAndReturnArgs} args - Arguments to update many Projetos.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projeto.
     * @param {ProjetoUpsertArgs} args - Arguments to update or create a Projeto.
     * @example
     * // Update or create a Projeto
     * const projeto = await prisma.projeto.upsert({
     *   create: {
     *     // ... data to create a Projeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projeto we want to update
     *   }
     * })
     */
    upsert<T extends ProjetoUpsertArgs>(args: SelectSubset<T, ProjetoUpsertArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoCountArgs} args - Arguments to filter Projetos to count.
     * @example
     * // Count the number of Projetos
     * const count = await prisma.projeto.count({
     *   where: {
     *     // ... the filter for the Projetos we want to count
     *   }
     * })
    **/
    count<T extends ProjetoCountArgs>(
      args?: Subset<T, ProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjetoAggregateArgs>(args: Subset<T, ProjetoAggregateArgs>): Prisma.PrismaPromise<GetProjetoAggregateType<T>>

    /**
     * Group by Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoGroupByArgs} args - Group by arguments.
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
      T extends ProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetoGroupByArgs['orderBy'] }
        : { orderBy?: ProjetoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projeto model
   */
  readonly fields: ProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarefas<T extends Projeto$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, Projeto$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarioRel<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Projeto model
   */
  interface ProjetoFieldRefs {
    readonly id: FieldRef<"Projeto", 'Int'>
    readonly nome: FieldRef<"Projeto", 'String'>
    readonly usuarioId: FieldRef<"Projeto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Projeto findUnique
   */
  export type ProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findUniqueOrThrow
   */
  export type ProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findFirst
   */
  export type ProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findFirstOrThrow
   */
  export type ProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findMany
   */
  export type ProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projetos to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto create
   */
  export type ProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to create a Projeto.
     */
    data: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
  }

  /**
   * Projeto createMany
   */
  export type ProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
  }

  /**
   * Projeto createManyAndReturn
   */
  export type ProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projeto update
   */
  export type ProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to update a Projeto.
     */
    data: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
    /**
     * Choose, which Projeto to update.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto updateMany
   */
  export type ProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
  }

  /**
   * Projeto updateManyAndReturn
   */
  export type ProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projeto upsert
   */
  export type ProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The filter to search for the Projeto to update in case it exists.
     */
    where: ProjetoWhereUniqueInput
    /**
     * In case the Projeto found by the `where` argument doesn't exist, create a new Projeto with this data.
     */
    create: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
    /**
     * In case the Projeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
  }

  /**
   * Projeto delete
   */
  export type ProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter which Projeto to delete.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto deleteMany
   */
  export type ProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projetos to delete
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to delete.
     */
    limit?: number
  }

  /**
   * Projeto.tarefas
   */
  export type Projeto$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    cursor?: TarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Projeto without action
   */
  export type ProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
  }


  /**
   * Model Tarefa
   */

  export type AggregateTarefa = {
    _count: TarefaCountAggregateOutputType | null
    _avg: TarefaAvgAggregateOutputType | null
    _sum: TarefaSumAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  export type TarefaAvgAggregateOutputType = {
    id: number | null
    projetoId: number | null
  }

  export type TarefaSumAggregateOutputType = {
    id: number | null
    projetoId: number | null
  }

  export type TarefaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    projetoId: number | null
  }

  export type TarefaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    projetoId: number | null
  }

  export type TarefaCountAggregateOutputType = {
    id: number
    nome: number
    projetoId: number
    _all: number
  }


  export type TarefaAvgAggregateInputType = {
    id?: true
    projetoId?: true
  }

  export type TarefaSumAggregateInputType = {
    id?: true
    projetoId?: true
  }

  export type TarefaMinAggregateInputType = {
    id?: true
    nome?: true
    projetoId?: true
  }

  export type TarefaMaxAggregateInputType = {
    id?: true
    nome?: true
    projetoId?: true
  }

  export type TarefaCountAggregateInputType = {
    id?: true
    nome?: true
    projetoId?: true
    _all?: true
  }

  export type TarefaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefa to aggregate.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tarefas
    **/
    _count?: true | TarefaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TarefaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TarefaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarefaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarefaMaxAggregateInputType
  }

  export type GetTarefaAggregateType<T extends TarefaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarefa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarefa[P]>
      : GetScalarType<T[P], AggregateTarefa[P]>
  }




  export type TarefaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithAggregationInput | TarefaOrderByWithAggregationInput[]
    by: TarefaScalarFieldEnum[] | TarefaScalarFieldEnum
    having?: TarefaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarefaCountAggregateInputType | true
    _avg?: TarefaAvgAggregateInputType
    _sum?: TarefaSumAggregateInputType
    _min?: TarefaMinAggregateInputType
    _max?: TarefaMaxAggregateInputType
  }

  export type TarefaGroupByOutputType = {
    id: number
    nome: string
    projetoId: number
    _count: TarefaCountAggregateOutputType | null
    _avg: TarefaAvgAggregateOutputType | null
    _sum: TarefaSumAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  type GetTarefaGroupByPayload<T extends TarefaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarefaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarefaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarefaGroupByOutputType[P]>
            : GetScalarType<T[P], TarefaGroupByOutputType[P]>
        }
      >
    >


  export type TarefaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    projetoId?: boolean
    nomeProjeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    projetoId?: boolean
    nomeProjeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    projetoId?: boolean
    nomeProjeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectScalar = {
    id?: boolean
    nome?: boolean
    projetoId?: boolean
  }

  export type TarefaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "projetoId", ExtArgs["result"]["tarefa"]>
  export type TarefaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nomeProjeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }
  export type TarefaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nomeProjeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }
  export type TarefaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nomeProjeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }

  export type $TarefaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarefa"
    objects: {
      nomeProjeto: Prisma.$ProjetoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      projetoId: number
    }, ExtArgs["result"]["tarefa"]>
    composites: {}
  }

  type TarefaGetPayload<S extends boolean | null | undefined | TarefaDefaultArgs> = $Result.GetResult<Prisma.$TarefaPayload, S>

  type TarefaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarefaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarefaCountAggregateInputType | true
    }

  export interface TarefaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarefa'], meta: { name: 'Tarefa' } }
    /**
     * Find zero or one Tarefa that matches the filter.
     * @param {TarefaFindUniqueArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarefaFindUniqueArgs>(args: SelectSubset<T, TarefaFindUniqueArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarefa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarefaFindUniqueOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarefaFindUniqueOrThrowArgs>(args: SelectSubset<T, TarefaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarefaFindFirstArgs>(args?: SelectSubset<T, TarefaFindFirstArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarefaFindFirstOrThrowArgs>(args?: SelectSubset<T, TarefaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tarefas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tarefas
     * const tarefas = await prisma.tarefa.findMany()
     * 
     * // Get first 10 Tarefas
     * const tarefas = await prisma.tarefa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TarefaFindManyArgs>(args?: SelectSubset<T, TarefaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarefa.
     * @param {TarefaCreateArgs} args - Arguments to create a Tarefa.
     * @example
     * // Create one Tarefa
     * const Tarefa = await prisma.tarefa.create({
     *   data: {
     *     // ... data to create a Tarefa
     *   }
     * })
     * 
     */
    create<T extends TarefaCreateArgs>(args: SelectSubset<T, TarefaCreateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tarefas.
     * @param {TarefaCreateManyArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarefaCreateManyArgs>(args?: SelectSubset<T, TarefaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tarefas and returns the data saved in the database.
     * @param {TarefaCreateManyAndReturnArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tarefas and only return the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TarefaCreateManyAndReturnArgs>(args?: SelectSubset<T, TarefaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarefa.
     * @param {TarefaDeleteArgs} args - Arguments to delete one Tarefa.
     * @example
     * // Delete one Tarefa
     * const Tarefa = await prisma.tarefa.delete({
     *   where: {
     *     // ... filter to delete one Tarefa
     *   }
     * })
     * 
     */
    delete<T extends TarefaDeleteArgs>(args: SelectSubset<T, TarefaDeleteArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarefa.
     * @param {TarefaUpdateArgs} args - Arguments to update one Tarefa.
     * @example
     * // Update one Tarefa
     * const tarefa = await prisma.tarefa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarefaUpdateArgs>(args: SelectSubset<T, TarefaUpdateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tarefas.
     * @param {TarefaDeleteManyArgs} args - Arguments to filter Tarefas to delete.
     * @example
     * // Delete a few Tarefas
     * const { count } = await prisma.tarefa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarefaDeleteManyArgs>(args?: SelectSubset<T, TarefaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarefaUpdateManyArgs>(args: SelectSubset<T, TarefaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas and returns the data updated in the database.
     * @param {TarefaUpdateManyAndReturnArgs} args - Arguments to update many Tarefas.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tarefas and only return the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.updateManyAndReturn({
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
    updateManyAndReturn<T extends TarefaUpdateManyAndReturnArgs>(args: SelectSubset<T, TarefaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarefa.
     * @param {TarefaUpsertArgs} args - Arguments to update or create a Tarefa.
     * @example
     * // Update or create a Tarefa
     * const tarefa = await prisma.tarefa.upsert({
     *   create: {
     *     // ... data to create a Tarefa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarefa we want to update
     *   }
     * })
     */
    upsert<T extends TarefaUpsertArgs>(args: SelectSubset<T, TarefaUpsertArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaCountArgs} args - Arguments to filter Tarefas to count.
     * @example
     * // Count the number of Tarefas
     * const count = await prisma.tarefa.count({
     *   where: {
     *     // ... the filter for the Tarefas we want to count
     *   }
     * })
    **/
    count<T extends TarefaCountArgs>(
      args?: Subset<T, TarefaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarefaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarefaAggregateArgs>(args: Subset<T, TarefaAggregateArgs>): Prisma.PrismaPromise<GetTarefaAggregateType<T>>

    /**
     * Group by Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaGroupByArgs} args - Group by arguments.
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
      T extends TarefaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarefaGroupByArgs['orderBy'] }
        : { orderBy?: TarefaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TarefaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarefaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarefa model
   */
  readonly fields: TarefaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarefa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarefaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nomeProjeto<T extends ProjetoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjetoDefaultArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tarefa model
   */
  interface TarefaFieldRefs {
    readonly id: FieldRef<"Tarefa", 'Int'>
    readonly nome: FieldRef<"Tarefa", 'String'>
    readonly projetoId: FieldRef<"Tarefa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tarefa findUnique
   */
  export type TarefaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findUniqueOrThrow
   */
  export type TarefaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findFirst
   */
  export type TarefaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findFirstOrThrow
   */
  export type TarefaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findMany
   */
  export type TarefaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefas to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa create
   */
  export type TarefaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarefa.
     */
    data: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
  }

  /**
   * Tarefa createMany
   */
  export type TarefaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
  }

  /**
   * Tarefa createManyAndReturn
   */
  export type TarefaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarefa update
   */
  export type TarefaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarefa.
     */
    data: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
    /**
     * Choose, which Tarefa to update.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa updateMany
   */
  export type TarefaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
  }

  /**
   * Tarefa updateManyAndReturn
   */
  export type TarefaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarefa upsert
   */
  export type TarefaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarefa to update in case it exists.
     */
    where: TarefaWhereUniqueInput
    /**
     * In case the Tarefa found by the `where` argument doesn't exist, create a new Tarefa with this data.
     */
    create: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
    /**
     * In case the Tarefa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
  }

  /**
   * Tarefa delete
   */
  export type TarefaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter which Tarefa to delete.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa deleteMany
   */
  export type TarefaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefas to delete
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to delete.
     */
    limit?: number
  }

  /**
   * Tarefa without action
   */
  export type TarefaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    senha: 'senha',
    nome: 'nome'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProjetoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    usuarioId: 'usuarioId'
  };

  export type ProjetoScalarFieldEnum = (typeof ProjetoScalarFieldEnum)[keyof typeof ProjetoScalarFieldEnum]


  export const TarefaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    projetoId: 'projetoId'
  };

  export type TarefaScalarFieldEnum = (typeof TarefaScalarFieldEnum)[keyof typeof TarefaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    projetos?: ProjetoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    projetos?: ProjetoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    projetos?: ProjetoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type ProjetoWhereInput = {
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    id?: IntFilter<"Projeto"> | number
    nome?: StringFilter<"Projeto"> | string
    usuarioId?: IntFilter<"Projeto"> | number
    tarefas?: TarefaListRelationFilter
    usuarioRel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ProjetoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
    tarefas?: TarefaOrderByRelationAggregateInput
    usuarioRel?: UsuarioOrderByWithRelationInput
  }

  export type ProjetoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    nome?: StringFilter<"Projeto"> | string
    usuarioId?: IntFilter<"Projeto"> | number
    tarefas?: TarefaListRelationFilter
    usuarioRel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ProjetoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
    _count?: ProjetoCountOrderByAggregateInput
    _avg?: ProjetoAvgOrderByAggregateInput
    _max?: ProjetoMaxOrderByAggregateInput
    _min?: ProjetoMinOrderByAggregateInput
    _sum?: ProjetoSumOrderByAggregateInput
  }

  export type ProjetoScalarWhereWithAggregatesInput = {
    AND?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    OR?: ProjetoScalarWhereWithAggregatesInput[]
    NOT?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projeto"> | number
    nome?: StringWithAggregatesFilter<"Projeto"> | string
    usuarioId?: IntWithAggregatesFilter<"Projeto"> | number
  }

  export type TarefaWhereInput = {
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    id?: IntFilter<"Tarefa"> | number
    nome?: StringFilter<"Tarefa"> | string
    projetoId?: IntFilter<"Tarefa"> | number
    nomeProjeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
  }

  export type TarefaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    projetoId?: SortOrder
    nomeProjeto?: ProjetoOrderByWithRelationInput
  }

  export type TarefaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    nome?: StringFilter<"Tarefa"> | string
    projetoId?: IntFilter<"Tarefa"> | number
    nomeProjeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
  }, "id">

  export type TarefaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    projetoId?: SortOrder
    _count?: TarefaCountOrderByAggregateInput
    _avg?: TarefaAvgOrderByAggregateInput
    _max?: TarefaMaxOrderByAggregateInput
    _min?: TarefaMinOrderByAggregateInput
    _sum?: TarefaSumOrderByAggregateInput
  }

  export type TarefaScalarWhereWithAggregatesInput = {
    AND?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    OR?: TarefaScalarWhereWithAggregatesInput[]
    NOT?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tarefa"> | number
    nome?: StringWithAggregatesFilter<"Tarefa"> | string
    projetoId?: IntWithAggregatesFilter<"Tarefa"> | number
  }

  export type UsuarioCreateInput = {
    email: string
    senha: string
    nome: string
    projetos?: ProjetoCreateNestedManyWithoutUsuarioRelInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    senha: string
    nome: string
    projetos?: ProjetoUncheckedCreateNestedManyWithoutUsuarioRelInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    projetos?: ProjetoUpdateManyWithoutUsuarioRelNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    projetos?: ProjetoUncheckedUpdateManyWithoutUsuarioRelNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoCreateInput = {
    nome: string
    tarefas?: TarefaCreateNestedManyWithoutNomeProjetoInput
    usuarioRel: UsuarioCreateNestedOneWithoutProjetosInput
  }

  export type ProjetoUncheckedCreateInput = {
    id?: number
    nome: string
    usuarioId: number
    tarefas?: TarefaUncheckedCreateNestedManyWithoutNomeProjetoInput
  }

  export type ProjetoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tarefas?: TarefaUpdateManyWithoutNomeProjetoNestedInput
    usuarioRel?: UsuarioUpdateOneRequiredWithoutProjetosNestedInput
  }

  export type ProjetoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    tarefas?: TarefaUncheckedUpdateManyWithoutNomeProjetoNestedInput
  }

  export type ProjetoCreateManyInput = {
    id?: number
    nome: string
    usuarioId: number
  }

  export type ProjetoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type TarefaCreateInput = {
    nome: string
    nomeProjeto: ProjetoCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateInput = {
    id?: number
    nome: string
    projetoId: number
  }

  export type TarefaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: ProjetoUpdateOneRequiredWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type TarefaCreateManyInput = {
    id?: number
    nome: string
    projetoId: number
  }

  export type TarefaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TarefaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProjetoListRelationFilter = {
    every?: ProjetoWhereInput
    some?: ProjetoWhereInput
    none?: ProjetoWhereInput
  }

  export type ProjetoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type TarefaListRelationFilter = {
    every?: TarefaWhereInput
    some?: TarefaWhereInput
    none?: TarefaWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type TarefaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjetoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProjetoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProjetoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProjetoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProjetoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProjetoScalarRelationFilter = {
    is?: ProjetoWhereInput
    isNot?: ProjetoWhereInput
  }

  export type TarefaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    projetoId?: SortOrder
  }

  export type TarefaAvgOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
  }

  export type TarefaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    projetoId?: SortOrder
  }

  export type TarefaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    projetoId?: SortOrder
  }

  export type TarefaSumOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
  }

  export type ProjetoCreateNestedManyWithoutUsuarioRelInput = {
    create?: XOR<ProjetoCreateWithoutUsuarioRelInput, ProjetoUncheckedCreateWithoutUsuarioRelInput> | ProjetoCreateWithoutUsuarioRelInput[] | ProjetoUncheckedCreateWithoutUsuarioRelInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutUsuarioRelInput | ProjetoCreateOrConnectWithoutUsuarioRelInput[]
    createMany?: ProjetoCreateManyUsuarioRelInputEnvelope
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type ProjetoUncheckedCreateNestedManyWithoutUsuarioRelInput = {
    create?: XOR<ProjetoCreateWithoutUsuarioRelInput, ProjetoUncheckedCreateWithoutUsuarioRelInput> | ProjetoCreateWithoutUsuarioRelInput[] | ProjetoUncheckedCreateWithoutUsuarioRelInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutUsuarioRelInput | ProjetoCreateOrConnectWithoutUsuarioRelInput[]
    createMany?: ProjetoCreateManyUsuarioRelInputEnvelope
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProjetoUpdateManyWithoutUsuarioRelNestedInput = {
    create?: XOR<ProjetoCreateWithoutUsuarioRelInput, ProjetoUncheckedCreateWithoutUsuarioRelInput> | ProjetoCreateWithoutUsuarioRelInput[] | ProjetoUncheckedCreateWithoutUsuarioRelInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutUsuarioRelInput | ProjetoCreateOrConnectWithoutUsuarioRelInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutUsuarioRelInput | ProjetoUpsertWithWhereUniqueWithoutUsuarioRelInput[]
    createMany?: ProjetoCreateManyUsuarioRelInputEnvelope
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutUsuarioRelInput | ProjetoUpdateWithWhereUniqueWithoutUsuarioRelInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutUsuarioRelInput | ProjetoUpdateManyWithWhereWithoutUsuarioRelInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjetoUncheckedUpdateManyWithoutUsuarioRelNestedInput = {
    create?: XOR<ProjetoCreateWithoutUsuarioRelInput, ProjetoUncheckedCreateWithoutUsuarioRelInput> | ProjetoCreateWithoutUsuarioRelInput[] | ProjetoUncheckedCreateWithoutUsuarioRelInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutUsuarioRelInput | ProjetoCreateOrConnectWithoutUsuarioRelInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutUsuarioRelInput | ProjetoUpsertWithWhereUniqueWithoutUsuarioRelInput[]
    createMany?: ProjetoCreateManyUsuarioRelInputEnvelope
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutUsuarioRelInput | ProjetoUpdateWithWhereUniqueWithoutUsuarioRelInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutUsuarioRelInput | ProjetoUpdateManyWithWhereWithoutUsuarioRelInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type TarefaCreateNestedManyWithoutNomeProjetoInput = {
    create?: XOR<TarefaCreateWithoutNomeProjetoInput, TarefaUncheckedCreateWithoutNomeProjetoInput> | TarefaCreateWithoutNomeProjetoInput[] | TarefaUncheckedCreateWithoutNomeProjetoInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutNomeProjetoInput | TarefaCreateOrConnectWithoutNomeProjetoInput[]
    createMany?: TarefaCreateManyNomeProjetoInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutProjetosInput = {
    create?: XOR<UsuarioCreateWithoutProjetosInput, UsuarioUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProjetosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TarefaUncheckedCreateNestedManyWithoutNomeProjetoInput = {
    create?: XOR<TarefaCreateWithoutNomeProjetoInput, TarefaUncheckedCreateWithoutNomeProjetoInput> | TarefaCreateWithoutNomeProjetoInput[] | TarefaUncheckedCreateWithoutNomeProjetoInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutNomeProjetoInput | TarefaCreateOrConnectWithoutNomeProjetoInput[]
    createMany?: TarefaCreateManyNomeProjetoInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type TarefaUpdateManyWithoutNomeProjetoNestedInput = {
    create?: XOR<TarefaCreateWithoutNomeProjetoInput, TarefaUncheckedCreateWithoutNomeProjetoInput> | TarefaCreateWithoutNomeProjetoInput[] | TarefaUncheckedCreateWithoutNomeProjetoInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutNomeProjetoInput | TarefaCreateOrConnectWithoutNomeProjetoInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutNomeProjetoInput | TarefaUpsertWithWhereUniqueWithoutNomeProjetoInput[]
    createMany?: TarefaCreateManyNomeProjetoInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutNomeProjetoInput | TarefaUpdateWithWhereUniqueWithoutNomeProjetoInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutNomeProjetoInput | TarefaUpdateManyWithWhereWithoutNomeProjetoInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutProjetosNestedInput = {
    create?: XOR<UsuarioCreateWithoutProjetosInput, UsuarioUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProjetosInput
    upsert?: UsuarioUpsertWithoutProjetosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProjetosInput, UsuarioUpdateWithoutProjetosInput>, UsuarioUncheckedUpdateWithoutProjetosInput>
  }

  export type TarefaUncheckedUpdateManyWithoutNomeProjetoNestedInput = {
    create?: XOR<TarefaCreateWithoutNomeProjetoInput, TarefaUncheckedCreateWithoutNomeProjetoInput> | TarefaCreateWithoutNomeProjetoInput[] | TarefaUncheckedCreateWithoutNomeProjetoInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutNomeProjetoInput | TarefaCreateOrConnectWithoutNomeProjetoInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutNomeProjetoInput | TarefaUpsertWithWhereUniqueWithoutNomeProjetoInput[]
    createMany?: TarefaCreateManyNomeProjetoInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutNomeProjetoInput | TarefaUpdateWithWhereUniqueWithoutNomeProjetoInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutNomeProjetoInput | TarefaUpdateManyWithWhereWithoutNomeProjetoInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type ProjetoCreateNestedOneWithoutTarefasInput = {
    create?: XOR<ProjetoCreateWithoutTarefasInput, ProjetoUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutTarefasInput
    connect?: ProjetoWhereUniqueInput
  }

  export type ProjetoUpdateOneRequiredWithoutTarefasNestedInput = {
    create?: XOR<ProjetoCreateWithoutTarefasInput, ProjetoUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutTarefasInput
    upsert?: ProjetoUpsertWithoutTarefasInput
    connect?: ProjetoWhereUniqueInput
    update?: XOR<XOR<ProjetoUpdateToOneWithWhereWithoutTarefasInput, ProjetoUpdateWithoutTarefasInput>, ProjetoUncheckedUpdateWithoutTarefasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type ProjetoCreateWithoutUsuarioRelInput = {
    nome: string
    tarefas?: TarefaCreateNestedManyWithoutNomeProjetoInput
  }

  export type ProjetoUncheckedCreateWithoutUsuarioRelInput = {
    id?: number
    nome: string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutNomeProjetoInput
  }

  export type ProjetoCreateOrConnectWithoutUsuarioRelInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutUsuarioRelInput, ProjetoUncheckedCreateWithoutUsuarioRelInput>
  }

  export type ProjetoCreateManyUsuarioRelInputEnvelope = {
    data: ProjetoCreateManyUsuarioRelInput | ProjetoCreateManyUsuarioRelInput[]
  }

  export type ProjetoUpsertWithWhereUniqueWithoutUsuarioRelInput = {
    where: ProjetoWhereUniqueInput
    update: XOR<ProjetoUpdateWithoutUsuarioRelInput, ProjetoUncheckedUpdateWithoutUsuarioRelInput>
    create: XOR<ProjetoCreateWithoutUsuarioRelInput, ProjetoUncheckedCreateWithoutUsuarioRelInput>
  }

  export type ProjetoUpdateWithWhereUniqueWithoutUsuarioRelInput = {
    where: ProjetoWhereUniqueInput
    data: XOR<ProjetoUpdateWithoutUsuarioRelInput, ProjetoUncheckedUpdateWithoutUsuarioRelInput>
  }

  export type ProjetoUpdateManyWithWhereWithoutUsuarioRelInput = {
    where: ProjetoScalarWhereInput
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyWithoutUsuarioRelInput>
  }

  export type ProjetoScalarWhereInput = {
    AND?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    OR?: ProjetoScalarWhereInput[]
    NOT?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    id?: IntFilter<"Projeto"> | number
    nome?: StringFilter<"Projeto"> | string
    usuarioId?: IntFilter<"Projeto"> | number
  }

  export type TarefaCreateWithoutNomeProjetoInput = {
    nome: string
  }

  export type TarefaUncheckedCreateWithoutNomeProjetoInput = {
    id?: number
    nome: string
  }

  export type TarefaCreateOrConnectWithoutNomeProjetoInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutNomeProjetoInput, TarefaUncheckedCreateWithoutNomeProjetoInput>
  }

  export type TarefaCreateManyNomeProjetoInputEnvelope = {
    data: TarefaCreateManyNomeProjetoInput | TarefaCreateManyNomeProjetoInput[]
  }

  export type UsuarioCreateWithoutProjetosInput = {
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUncheckedCreateWithoutProjetosInput = {
    id?: number
    email: string
    senha: string
    nome: string
  }

  export type UsuarioCreateOrConnectWithoutProjetosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProjetosInput, UsuarioUncheckedCreateWithoutProjetosInput>
  }

  export type TarefaUpsertWithWhereUniqueWithoutNomeProjetoInput = {
    where: TarefaWhereUniqueInput
    update: XOR<TarefaUpdateWithoutNomeProjetoInput, TarefaUncheckedUpdateWithoutNomeProjetoInput>
    create: XOR<TarefaCreateWithoutNomeProjetoInput, TarefaUncheckedCreateWithoutNomeProjetoInput>
  }

  export type TarefaUpdateWithWhereUniqueWithoutNomeProjetoInput = {
    where: TarefaWhereUniqueInput
    data: XOR<TarefaUpdateWithoutNomeProjetoInput, TarefaUncheckedUpdateWithoutNomeProjetoInput>
  }

  export type TarefaUpdateManyWithWhereWithoutNomeProjetoInput = {
    where: TarefaScalarWhereInput
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyWithoutNomeProjetoInput>
  }

  export type TarefaScalarWhereInput = {
    AND?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    OR?: TarefaScalarWhereInput[]
    NOT?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    id?: IntFilter<"Tarefa"> | number
    nome?: StringFilter<"Tarefa"> | string
    projetoId?: IntFilter<"Tarefa"> | number
  }

  export type UsuarioUpsertWithoutProjetosInput = {
    update: XOR<UsuarioUpdateWithoutProjetosInput, UsuarioUncheckedUpdateWithoutProjetosInput>
    create: XOR<UsuarioCreateWithoutProjetosInput, UsuarioUncheckedCreateWithoutProjetosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProjetosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProjetosInput, UsuarioUncheckedUpdateWithoutProjetosInput>
  }

  export type UsuarioUpdateWithoutProjetosInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutProjetosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoCreateWithoutTarefasInput = {
    nome: string
    usuarioRel: UsuarioCreateNestedOneWithoutProjetosInput
  }

  export type ProjetoUncheckedCreateWithoutTarefasInput = {
    id?: number
    nome: string
    usuarioId: number
  }

  export type ProjetoCreateOrConnectWithoutTarefasInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutTarefasInput, ProjetoUncheckedCreateWithoutTarefasInput>
  }

  export type ProjetoUpsertWithoutTarefasInput = {
    update: XOR<ProjetoUpdateWithoutTarefasInput, ProjetoUncheckedUpdateWithoutTarefasInput>
    create: XOR<ProjetoCreateWithoutTarefasInput, ProjetoUncheckedCreateWithoutTarefasInput>
    where?: ProjetoWhereInput
  }

  export type ProjetoUpdateToOneWithWhereWithoutTarefasInput = {
    where?: ProjetoWhereInput
    data: XOR<ProjetoUpdateWithoutTarefasInput, ProjetoUncheckedUpdateWithoutTarefasInput>
  }

  export type ProjetoUpdateWithoutTarefasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    usuarioRel?: UsuarioUpdateOneRequiredWithoutProjetosNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutTarefasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjetoCreateManyUsuarioRelInput = {
    id?: number
    nome: string
  }

  export type ProjetoUpdateWithoutUsuarioRelInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tarefas?: TarefaUpdateManyWithoutNomeProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutUsuarioRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tarefas?: TarefaUncheckedUpdateManyWithoutNomeProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateManyWithoutUsuarioRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TarefaCreateManyNomeProjetoInput = {
    id?: number
    nome: string
  }

  export type TarefaUpdateWithoutNomeProjetoInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TarefaUncheckedUpdateWithoutNomeProjetoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TarefaUncheckedUpdateManyWithoutNomeProjetoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
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