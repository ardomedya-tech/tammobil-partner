
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BayiUser
 * 
 */
export type BayiUser = $Result.DefaultSelection<Prisma.$BayiUserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Marka
 * 
 */
export type Marka = $Result.DefaultSelection<Prisma.$MarkaPayload>
/**
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model Adress
 * 
 */
export type Adress = $Result.DefaultSelection<Prisma.$AdressPayload>
/**
 * Model PhoneSell
 * 
 */
export type PhoneSell = $Result.DefaultSelection<Prisma.$PhoneSellPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Ayarlar
 * 
 */
export type Ayarlar = $Result.DefaultSelection<Prisma.$AyarlarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bayiUser`: Exposes CRUD operations for the **BayiUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BayiUsers
    * const bayiUsers = await prisma.bayiUser.findMany()
    * ```
    */
  get bayiUser(): Prisma.BayiUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marka`: Exposes CRUD operations for the **Marka** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markas
    * const markas = await prisma.marka.findMany()
    * ```
    */
  get marka(): Prisma.MarkaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adress`: Exposes CRUD operations for the **Adress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adresses
    * const adresses = await prisma.adress.findMany()
    * ```
    */
  get adress(): Prisma.AdressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phoneSell`: Exposes CRUD operations for the **PhoneSell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneSells
    * const phoneSells = await prisma.phoneSell.findMany()
    * ```
    */
  get phoneSell(): Prisma.PhoneSellDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ayarlar`: Exposes CRUD operations for the **Ayarlar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ayarlars
    * const ayarlars = await prisma.ayarlar.findMany()
    * ```
    */
  get ayarlar(): Prisma.AyarlarDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    BayiUser: 'BayiUser',
    Product: 'Product',
    Category: 'Category',
    Marka: 'Marka',
    Model: 'Model',
    Adress: 'Adress',
    PhoneSell: 'PhoneSell',
    Contact: 'Contact',
    Ayarlar: 'Ayarlar'
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
      modelProps: "user" | "bayiUser" | "product" | "category" | "marka" | "model" | "adress" | "phoneSell" | "contact" | "ayarlar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BayiUser: {
        payload: Prisma.$BayiUserPayload<ExtArgs>
        fields: Prisma.BayiUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BayiUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BayiUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>
          }
          findFirst: {
            args: Prisma.BayiUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BayiUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>
          }
          findMany: {
            args: Prisma.BayiUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>[]
          }
          create: {
            args: Prisma.BayiUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>
          }
          createMany: {
            args: Prisma.BayiUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BayiUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>[]
          }
          delete: {
            args: Prisma.BayiUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>
          }
          update: {
            args: Prisma.BayiUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>
          }
          deleteMany: {
            args: Prisma.BayiUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BayiUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BayiUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>[]
          }
          upsert: {
            args: Prisma.BayiUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayiUserPayload>
          }
          aggregate: {
            args: Prisma.BayiUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBayiUser>
          }
          groupBy: {
            args: Prisma.BayiUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<BayiUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.BayiUserCountArgs<ExtArgs>
            result: $Utils.Optional<BayiUserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Marka: {
        payload: Prisma.$MarkaPayload<ExtArgs>
        fields: Prisma.MarkaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>
          }
          findFirst: {
            args: Prisma.MarkaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>
          }
          findMany: {
            args: Prisma.MarkaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>[]
          }
          create: {
            args: Prisma.MarkaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>
          }
          createMany: {
            args: Prisma.MarkaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarkaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>[]
          }
          delete: {
            args: Prisma.MarkaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>
          }
          update: {
            args: Prisma.MarkaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>
          }
          deleteMany: {
            args: Prisma.MarkaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarkaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarkaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>[]
          }
          upsert: {
            args: Prisma.MarkaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkaPayload>
          }
          aggregate: {
            args: Prisma.MarkaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarka>
          }
          groupBy: {
            args: Prisma.MarkaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkaCountArgs<ExtArgs>
            result: $Utils.Optional<MarkaCountAggregateOutputType> | number
          }
        }
      }
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      Adress: {
        payload: Prisma.$AdressPayload<ExtArgs>
        fields: Prisma.AdressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          findFirst: {
            args: Prisma.AdressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          findMany: {
            args: Prisma.AdressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          create: {
            args: Prisma.AdressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          createMany: {
            args: Prisma.AdressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          delete: {
            args: Prisma.AdressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          update: {
            args: Prisma.AdressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          deleteMany: {
            args: Prisma.AdressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          upsert: {
            args: Prisma.AdressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          aggregate: {
            args: Prisma.AdressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdress>
          }
          groupBy: {
            args: Prisma.AdressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdressCountArgs<ExtArgs>
            result: $Utils.Optional<AdressCountAggregateOutputType> | number
          }
        }
      }
      PhoneSell: {
        payload: Prisma.$PhoneSellPayload<ExtArgs>
        fields: Prisma.PhoneSellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneSellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneSellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>
          }
          findFirst: {
            args: Prisma.PhoneSellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneSellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>
          }
          findMany: {
            args: Prisma.PhoneSellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>[]
          }
          create: {
            args: Prisma.PhoneSellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>
          }
          createMany: {
            args: Prisma.PhoneSellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneSellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>[]
          }
          delete: {
            args: Prisma.PhoneSellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>
          }
          update: {
            args: Prisma.PhoneSellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>
          }
          deleteMany: {
            args: Prisma.PhoneSellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneSellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneSellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>[]
          }
          upsert: {
            args: Prisma.PhoneSellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSellPayload>
          }
          aggregate: {
            args: Prisma.PhoneSellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneSell>
          }
          groupBy: {
            args: Prisma.PhoneSellGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneSellGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneSellCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneSellCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Ayarlar: {
        payload: Prisma.$AyarlarPayload<ExtArgs>
        fields: Prisma.AyarlarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AyarlarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AyarlarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>
          }
          findFirst: {
            args: Prisma.AyarlarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AyarlarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>
          }
          findMany: {
            args: Prisma.AyarlarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>[]
          }
          create: {
            args: Prisma.AyarlarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>
          }
          createMany: {
            args: Prisma.AyarlarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AyarlarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>[]
          }
          delete: {
            args: Prisma.AyarlarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>
          }
          update: {
            args: Prisma.AyarlarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>
          }
          deleteMany: {
            args: Prisma.AyarlarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AyarlarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AyarlarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>[]
          }
          upsert: {
            args: Prisma.AyarlarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyarlarPayload>
          }
          aggregate: {
            args: Prisma.AyarlarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAyarlar>
          }
          groupBy: {
            args: Prisma.AyarlarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AyarlarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AyarlarCountArgs<ExtArgs>
            result: $Utils.Optional<AyarlarCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    bayiUser?: BayiUserOmit
    product?: ProductOmit
    category?: CategoryOmit
    marka?: MarkaOmit
    model?: ModelOmit
    adress?: AdressOmit
    phoneSell?: PhoneSellOmit
    contact?: ContactOmit
    ayarlar?: AyarlarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Adress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adress?: boolean | UserCountOutputTypeCountAdressArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdressWhereInput
  }


  /**
   * Count Type BayiUserCountOutputType
   */

  export type BayiUserCountOutputType = {
    products: number
  }

  export type BayiUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BayiUserCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BayiUserCountOutputType without action
   */
  export type BayiUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUserCountOutputType
     */
    select?: BayiUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BayiUserCountOutputType without action
   */
  export type BayiUserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Product: number
    Marka: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryCountOutputTypeCountProductArgs
    Marka?: boolean | CategoryCountOutputTypeCountMarkaArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMarkaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkaWhereInput
  }


  /**
   * Count Type MarkaCountOutputType
   */

  export type MarkaCountOutputType = {
    Product: number
    Model: number
  }

  export type MarkaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | MarkaCountOutputTypeCountProductArgs
    Model?: boolean | MarkaCountOutputTypeCountModelArgs
  }

  // Custom InputTypes
  /**
   * MarkaCountOutputType without action
   */
  export type MarkaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkaCountOutputType
     */
    select?: MarkaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarkaCountOutputType without action
   */
  export type MarkaCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * MarkaCountOutputType without action
   */
  export type MarkaCountOutputTypeCountModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
  }


  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    products: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ModelCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    password: string | null
    code: string | null
    emailVerified: boolean | null
    tel: string | null
    identityNumber: string | null
    Role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    password: string | null
    code: string | null
    emailVerified: boolean | null
    tel: string | null
    identityNumber: string | null
    Role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastname: number
    email: number
    password: number
    code: number
    emailVerified: number
    tel: number
    identityNumber: number
    Role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    code?: true
    emailVerified?: true
    tel?: true
    identityNumber?: true
    Role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    code?: true
    emailVerified?: true
    tel?: true
    identityNumber?: true
    Role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    code?: true
    emailVerified?: true
    tel?: true
    identityNumber?: true
    Role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    lastname: string | null
    email: string
    password: string
    code: string | null
    emailVerified: boolean | null
    tel: string | null
    identityNumber: string | null
    Role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    code?: boolean
    emailVerified?: boolean
    tel?: boolean
    identityNumber?: boolean
    Role?: boolean
    Adress?: boolean | User$AdressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    code?: boolean
    emailVerified?: boolean
    tel?: boolean
    identityNumber?: boolean
    Role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    code?: boolean
    emailVerified?: boolean
    tel?: boolean
    identityNumber?: boolean
    Role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    code?: boolean
    emailVerified?: boolean
    tel?: boolean
    identityNumber?: boolean
    Role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastname" | "email" | "password" | "code" | "emailVerified" | "tel" | "identityNumber" | "Role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adress?: boolean | User$AdressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Adress: Prisma.$AdressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      lastname: string | null
      email: string
      password: string
      code: string | null
      emailVerified: boolean | null
      tel: string | null
      identityNumber: string | null
      Role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adress<T extends User$AdressArgs<ExtArgs> = {}>(args?: Subset<T, User$AdressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly code: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly tel: FieldRef<"User", 'String'>
    readonly identityNumber: FieldRef<"User", 'String'>
    readonly Role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Adress
   */
  export type User$AdressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    where?: AdressWhereInput
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    cursor?: AdressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BayiUser
   */

  export type AggregateBayiUser = {
    _count: BayiUserCountAggregateOutputType | null
    _avg: BayiUserAvgAggregateOutputType | null
    _sum: BayiUserSumAggregateOutputType | null
    _min: BayiUserMinAggregateOutputType | null
    _max: BayiUserMaxAggregateOutputType | null
  }

  export type BayiUserAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type BayiUserSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type BayiUserMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    tel: string | null
    password: string | null
    code: string | null
    emailVerified: boolean | null
    firstTimeLogin: boolean | null
    identityNumber: string | null
    magazaName: string | null
    sirketName: string | null
    sirketAdres: string | null
    vergiDairesi: string | null
    vergiNo: string | null
    iban: string | null
    ibanName: string | null
    adminOnay: boolean | null
    vergiUrl: string | null
    ticaretSicilUrl: string | null
    sozlesmeUrl: string | null
    imzaUrl: string | null
    kimlikUrl: string | null
    score: number | null
  }

  export type BayiUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    tel: string | null
    password: string | null
    code: string | null
    emailVerified: boolean | null
    firstTimeLogin: boolean | null
    identityNumber: string | null
    magazaName: string | null
    sirketName: string | null
    sirketAdres: string | null
    vergiDairesi: string | null
    vergiNo: string | null
    iban: string | null
    ibanName: string | null
    adminOnay: boolean | null
    vergiUrl: string | null
    ticaretSicilUrl: string | null
    sozlesmeUrl: string | null
    imzaUrl: string | null
    kimlikUrl: string | null
    score: number | null
  }

  export type BayiUserCountAggregateOutputType = {
    id: number
    name: number
    lastname: number
    email: number
    tel: number
    password: number
    code: number
    emailVerified: number
    firstTimeLogin: number
    identityNumber: number
    magazaName: number
    sirketName: number
    sirketAdres: number
    vergiDairesi: number
    vergiNo: number
    iban: number
    ibanName: number
    adminOnay: number
    vergiUrl: number
    ticaretSicilUrl: number
    sozlesmeUrl: number
    imzaUrl: number
    kimlikUrl: number
    score: number
    _all: number
  }


  export type BayiUserAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type BayiUserSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type BayiUserMinAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    tel?: true
    password?: true
    code?: true
    emailVerified?: true
    firstTimeLogin?: true
    identityNumber?: true
    magazaName?: true
    sirketName?: true
    sirketAdres?: true
    vergiDairesi?: true
    vergiNo?: true
    iban?: true
    ibanName?: true
    adminOnay?: true
    vergiUrl?: true
    ticaretSicilUrl?: true
    sozlesmeUrl?: true
    imzaUrl?: true
    kimlikUrl?: true
    score?: true
  }

  export type BayiUserMaxAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    tel?: true
    password?: true
    code?: true
    emailVerified?: true
    firstTimeLogin?: true
    identityNumber?: true
    magazaName?: true
    sirketName?: true
    sirketAdres?: true
    vergiDairesi?: true
    vergiNo?: true
    iban?: true
    ibanName?: true
    adminOnay?: true
    vergiUrl?: true
    ticaretSicilUrl?: true
    sozlesmeUrl?: true
    imzaUrl?: true
    kimlikUrl?: true
    score?: true
  }

  export type BayiUserCountAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    tel?: true
    password?: true
    code?: true
    emailVerified?: true
    firstTimeLogin?: true
    identityNumber?: true
    magazaName?: true
    sirketName?: true
    sirketAdres?: true
    vergiDairesi?: true
    vergiNo?: true
    iban?: true
    ibanName?: true
    adminOnay?: true
    vergiUrl?: true
    ticaretSicilUrl?: true
    sozlesmeUrl?: true
    imzaUrl?: true
    kimlikUrl?: true
    score?: true
    _all?: true
  }

  export type BayiUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BayiUser to aggregate.
     */
    where?: BayiUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BayiUsers to fetch.
     */
    orderBy?: BayiUserOrderByWithRelationInput | BayiUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BayiUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BayiUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BayiUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BayiUsers
    **/
    _count?: true | BayiUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BayiUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BayiUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BayiUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BayiUserMaxAggregateInputType
  }

  export type GetBayiUserAggregateType<T extends BayiUserAggregateArgs> = {
        [P in keyof T & keyof AggregateBayiUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBayiUser[P]>
      : GetScalarType<T[P], AggregateBayiUser[P]>
  }




  export type BayiUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BayiUserWhereInput
    orderBy?: BayiUserOrderByWithAggregationInput | BayiUserOrderByWithAggregationInput[]
    by: BayiUserScalarFieldEnum[] | BayiUserScalarFieldEnum
    having?: BayiUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BayiUserCountAggregateInputType | true
    _avg?: BayiUserAvgAggregateInputType
    _sum?: BayiUserSumAggregateInputType
    _min?: BayiUserMinAggregateInputType
    _max?: BayiUserMaxAggregateInputType
  }

  export type BayiUserGroupByOutputType = {
    id: number
    name: string | null
    lastname: string | null
    email: string
    tel: string | null
    password: string
    code: string | null
    emailVerified: boolean | null
    firstTimeLogin: boolean | null
    identityNumber: string | null
    magazaName: string | null
    sirketName: string | null
    sirketAdres: string | null
    vergiDairesi: string | null
    vergiNo: string | null
    iban: string | null
    ibanName: string | null
    adminOnay: boolean | null
    vergiUrl: string | null
    ticaretSicilUrl: string | null
    sozlesmeUrl: string | null
    imzaUrl: string | null
    kimlikUrl: string | null
    score: number | null
    _count: BayiUserCountAggregateOutputType | null
    _avg: BayiUserAvgAggregateOutputType | null
    _sum: BayiUserSumAggregateOutputType | null
    _min: BayiUserMinAggregateOutputType | null
    _max: BayiUserMaxAggregateOutputType | null
  }

  type GetBayiUserGroupByPayload<T extends BayiUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BayiUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BayiUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BayiUserGroupByOutputType[P]>
            : GetScalarType<T[P], BayiUserGroupByOutputType[P]>
        }
      >
    >


  export type BayiUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    code?: boolean
    emailVerified?: boolean
    firstTimeLogin?: boolean
    identityNumber?: boolean
    magazaName?: boolean
    sirketName?: boolean
    sirketAdres?: boolean
    vergiDairesi?: boolean
    vergiNo?: boolean
    iban?: boolean
    ibanName?: boolean
    adminOnay?: boolean
    vergiUrl?: boolean
    ticaretSicilUrl?: boolean
    sozlesmeUrl?: boolean
    imzaUrl?: boolean
    kimlikUrl?: boolean
    score?: boolean
    products?: boolean | BayiUser$productsArgs<ExtArgs>
    _count?: boolean | BayiUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bayiUser"]>

  export type BayiUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    code?: boolean
    emailVerified?: boolean
    firstTimeLogin?: boolean
    identityNumber?: boolean
    magazaName?: boolean
    sirketName?: boolean
    sirketAdres?: boolean
    vergiDairesi?: boolean
    vergiNo?: boolean
    iban?: boolean
    ibanName?: boolean
    adminOnay?: boolean
    vergiUrl?: boolean
    ticaretSicilUrl?: boolean
    sozlesmeUrl?: boolean
    imzaUrl?: boolean
    kimlikUrl?: boolean
    score?: boolean
  }, ExtArgs["result"]["bayiUser"]>

  export type BayiUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    code?: boolean
    emailVerified?: boolean
    firstTimeLogin?: boolean
    identityNumber?: boolean
    magazaName?: boolean
    sirketName?: boolean
    sirketAdres?: boolean
    vergiDairesi?: boolean
    vergiNo?: boolean
    iban?: boolean
    ibanName?: boolean
    adminOnay?: boolean
    vergiUrl?: boolean
    ticaretSicilUrl?: boolean
    sozlesmeUrl?: boolean
    imzaUrl?: boolean
    kimlikUrl?: boolean
    score?: boolean
  }, ExtArgs["result"]["bayiUser"]>

  export type BayiUserSelectScalar = {
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    code?: boolean
    emailVerified?: boolean
    firstTimeLogin?: boolean
    identityNumber?: boolean
    magazaName?: boolean
    sirketName?: boolean
    sirketAdres?: boolean
    vergiDairesi?: boolean
    vergiNo?: boolean
    iban?: boolean
    ibanName?: boolean
    adminOnay?: boolean
    vergiUrl?: boolean
    ticaretSicilUrl?: boolean
    sozlesmeUrl?: boolean
    imzaUrl?: boolean
    kimlikUrl?: boolean
    score?: boolean
  }

  export type BayiUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastname" | "email" | "tel" | "password" | "code" | "emailVerified" | "firstTimeLogin" | "identityNumber" | "magazaName" | "sirketName" | "sirketAdres" | "vergiDairesi" | "vergiNo" | "iban" | "ibanName" | "adminOnay" | "vergiUrl" | "ticaretSicilUrl" | "sozlesmeUrl" | "imzaUrl" | "kimlikUrl" | "score", ExtArgs["result"]["bayiUser"]>
  export type BayiUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BayiUser$productsArgs<ExtArgs>
    _count?: boolean | BayiUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BayiUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BayiUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BayiUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BayiUser"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      lastname: string | null
      email: string
      tel: string | null
      password: string
      code: string | null
      emailVerified: boolean | null
      firstTimeLogin: boolean | null
      identityNumber: string | null
      magazaName: string | null
      sirketName: string | null
      sirketAdres: string | null
      vergiDairesi: string | null
      vergiNo: string | null
      iban: string | null
      ibanName: string | null
      adminOnay: boolean | null
      vergiUrl: string | null
      ticaretSicilUrl: string | null
      sozlesmeUrl: string | null
      imzaUrl: string | null
      kimlikUrl: string | null
      score: number | null
    }, ExtArgs["result"]["bayiUser"]>
    composites: {}
  }

  type BayiUserGetPayload<S extends boolean | null | undefined | BayiUserDefaultArgs> = $Result.GetResult<Prisma.$BayiUserPayload, S>

  type BayiUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BayiUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BayiUserCountAggregateInputType | true
    }

  export interface BayiUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BayiUser'], meta: { name: 'BayiUser' } }
    /**
     * Find zero or one BayiUser that matches the filter.
     * @param {BayiUserFindUniqueArgs} args - Arguments to find a BayiUser
     * @example
     * // Get one BayiUser
     * const bayiUser = await prisma.bayiUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BayiUserFindUniqueArgs>(args: SelectSubset<T, BayiUserFindUniqueArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BayiUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BayiUserFindUniqueOrThrowArgs} args - Arguments to find a BayiUser
     * @example
     * // Get one BayiUser
     * const bayiUser = await prisma.bayiUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BayiUserFindUniqueOrThrowArgs>(args: SelectSubset<T, BayiUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BayiUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayiUserFindFirstArgs} args - Arguments to find a BayiUser
     * @example
     * // Get one BayiUser
     * const bayiUser = await prisma.bayiUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BayiUserFindFirstArgs>(args?: SelectSubset<T, BayiUserFindFirstArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BayiUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayiUserFindFirstOrThrowArgs} args - Arguments to find a BayiUser
     * @example
     * // Get one BayiUser
     * const bayiUser = await prisma.bayiUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BayiUserFindFirstOrThrowArgs>(args?: SelectSubset<T, BayiUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BayiUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayiUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BayiUsers
     * const bayiUsers = await prisma.bayiUser.findMany()
     * 
     * // Get first 10 BayiUsers
     * const bayiUsers = await prisma.bayiUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bayiUserWithIdOnly = await prisma.bayiUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BayiUserFindManyArgs>(args?: SelectSubset<T, BayiUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BayiUser.
     * @param {BayiUserCreateArgs} args - Arguments to create a BayiUser.
     * @example
     * // Create one BayiUser
     * const BayiUser = await prisma.bayiUser.create({
     *   data: {
     *     // ... data to create a BayiUser
     *   }
     * })
     * 
     */
    create<T extends BayiUserCreateArgs>(args: SelectSubset<T, BayiUserCreateArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BayiUsers.
     * @param {BayiUserCreateManyArgs} args - Arguments to create many BayiUsers.
     * @example
     * // Create many BayiUsers
     * const bayiUser = await prisma.bayiUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BayiUserCreateManyArgs>(args?: SelectSubset<T, BayiUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BayiUsers and returns the data saved in the database.
     * @param {BayiUserCreateManyAndReturnArgs} args - Arguments to create many BayiUsers.
     * @example
     * // Create many BayiUsers
     * const bayiUser = await prisma.bayiUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BayiUsers and only return the `id`
     * const bayiUserWithIdOnly = await prisma.bayiUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BayiUserCreateManyAndReturnArgs>(args?: SelectSubset<T, BayiUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BayiUser.
     * @param {BayiUserDeleteArgs} args - Arguments to delete one BayiUser.
     * @example
     * // Delete one BayiUser
     * const BayiUser = await prisma.bayiUser.delete({
     *   where: {
     *     // ... filter to delete one BayiUser
     *   }
     * })
     * 
     */
    delete<T extends BayiUserDeleteArgs>(args: SelectSubset<T, BayiUserDeleteArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BayiUser.
     * @param {BayiUserUpdateArgs} args - Arguments to update one BayiUser.
     * @example
     * // Update one BayiUser
     * const bayiUser = await prisma.bayiUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BayiUserUpdateArgs>(args: SelectSubset<T, BayiUserUpdateArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BayiUsers.
     * @param {BayiUserDeleteManyArgs} args - Arguments to filter BayiUsers to delete.
     * @example
     * // Delete a few BayiUsers
     * const { count } = await prisma.bayiUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BayiUserDeleteManyArgs>(args?: SelectSubset<T, BayiUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BayiUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayiUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BayiUsers
     * const bayiUser = await prisma.bayiUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BayiUserUpdateManyArgs>(args: SelectSubset<T, BayiUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BayiUsers and returns the data updated in the database.
     * @param {BayiUserUpdateManyAndReturnArgs} args - Arguments to update many BayiUsers.
     * @example
     * // Update many BayiUsers
     * const bayiUser = await prisma.bayiUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BayiUsers and only return the `id`
     * const bayiUserWithIdOnly = await prisma.bayiUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends BayiUserUpdateManyAndReturnArgs>(args: SelectSubset<T, BayiUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BayiUser.
     * @param {BayiUserUpsertArgs} args - Arguments to update or create a BayiUser.
     * @example
     * // Update or create a BayiUser
     * const bayiUser = await prisma.bayiUser.upsert({
     *   create: {
     *     // ... data to create a BayiUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BayiUser we want to update
     *   }
     * })
     */
    upsert<T extends BayiUserUpsertArgs>(args: SelectSubset<T, BayiUserUpsertArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BayiUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayiUserCountArgs} args - Arguments to filter BayiUsers to count.
     * @example
     * // Count the number of BayiUsers
     * const count = await prisma.bayiUser.count({
     *   where: {
     *     // ... the filter for the BayiUsers we want to count
     *   }
     * })
    **/
    count<T extends BayiUserCountArgs>(
      args?: Subset<T, BayiUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BayiUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BayiUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayiUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BayiUserAggregateArgs>(args: Subset<T, BayiUserAggregateArgs>): Prisma.PrismaPromise<GetBayiUserAggregateType<T>>

    /**
     * Group by BayiUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayiUserGroupByArgs} args - Group by arguments.
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
      T extends BayiUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BayiUserGroupByArgs['orderBy'] }
        : { orderBy?: BayiUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BayiUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBayiUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BayiUser model
   */
  readonly fields: BayiUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BayiUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BayiUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends BayiUser$productsArgs<ExtArgs> = {}>(args?: Subset<T, BayiUser$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BayiUser model
   */
  interface BayiUserFieldRefs {
    readonly id: FieldRef<"BayiUser", 'Int'>
    readonly name: FieldRef<"BayiUser", 'String'>
    readonly lastname: FieldRef<"BayiUser", 'String'>
    readonly email: FieldRef<"BayiUser", 'String'>
    readonly tel: FieldRef<"BayiUser", 'String'>
    readonly password: FieldRef<"BayiUser", 'String'>
    readonly code: FieldRef<"BayiUser", 'String'>
    readonly emailVerified: FieldRef<"BayiUser", 'Boolean'>
    readonly firstTimeLogin: FieldRef<"BayiUser", 'Boolean'>
    readonly identityNumber: FieldRef<"BayiUser", 'String'>
    readonly magazaName: FieldRef<"BayiUser", 'String'>
    readonly sirketName: FieldRef<"BayiUser", 'String'>
    readonly sirketAdres: FieldRef<"BayiUser", 'String'>
    readonly vergiDairesi: FieldRef<"BayiUser", 'String'>
    readonly vergiNo: FieldRef<"BayiUser", 'String'>
    readonly iban: FieldRef<"BayiUser", 'String'>
    readonly ibanName: FieldRef<"BayiUser", 'String'>
    readonly adminOnay: FieldRef<"BayiUser", 'Boolean'>
    readonly vergiUrl: FieldRef<"BayiUser", 'String'>
    readonly ticaretSicilUrl: FieldRef<"BayiUser", 'String'>
    readonly sozlesmeUrl: FieldRef<"BayiUser", 'String'>
    readonly imzaUrl: FieldRef<"BayiUser", 'String'>
    readonly kimlikUrl: FieldRef<"BayiUser", 'String'>
    readonly score: FieldRef<"BayiUser", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BayiUser findUnique
   */
  export type BayiUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * Filter, which BayiUser to fetch.
     */
    where: BayiUserWhereUniqueInput
  }

  /**
   * BayiUser findUniqueOrThrow
   */
  export type BayiUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * Filter, which BayiUser to fetch.
     */
    where: BayiUserWhereUniqueInput
  }

  /**
   * BayiUser findFirst
   */
  export type BayiUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * Filter, which BayiUser to fetch.
     */
    where?: BayiUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BayiUsers to fetch.
     */
    orderBy?: BayiUserOrderByWithRelationInput | BayiUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BayiUsers.
     */
    cursor?: BayiUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BayiUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BayiUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BayiUsers.
     */
    distinct?: BayiUserScalarFieldEnum | BayiUserScalarFieldEnum[]
  }

  /**
   * BayiUser findFirstOrThrow
   */
  export type BayiUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * Filter, which BayiUser to fetch.
     */
    where?: BayiUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BayiUsers to fetch.
     */
    orderBy?: BayiUserOrderByWithRelationInput | BayiUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BayiUsers.
     */
    cursor?: BayiUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BayiUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BayiUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BayiUsers.
     */
    distinct?: BayiUserScalarFieldEnum | BayiUserScalarFieldEnum[]
  }

  /**
   * BayiUser findMany
   */
  export type BayiUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * Filter, which BayiUsers to fetch.
     */
    where?: BayiUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BayiUsers to fetch.
     */
    orderBy?: BayiUserOrderByWithRelationInput | BayiUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BayiUsers.
     */
    cursor?: BayiUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BayiUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BayiUsers.
     */
    skip?: number
    distinct?: BayiUserScalarFieldEnum | BayiUserScalarFieldEnum[]
  }

  /**
   * BayiUser create
   */
  export type BayiUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * The data needed to create a BayiUser.
     */
    data: XOR<BayiUserCreateInput, BayiUserUncheckedCreateInput>
  }

  /**
   * BayiUser createMany
   */
  export type BayiUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BayiUsers.
     */
    data: BayiUserCreateManyInput | BayiUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BayiUser createManyAndReturn
   */
  export type BayiUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * The data used to create many BayiUsers.
     */
    data: BayiUserCreateManyInput | BayiUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BayiUser update
   */
  export type BayiUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * The data needed to update a BayiUser.
     */
    data: XOR<BayiUserUpdateInput, BayiUserUncheckedUpdateInput>
    /**
     * Choose, which BayiUser to update.
     */
    where: BayiUserWhereUniqueInput
  }

  /**
   * BayiUser updateMany
   */
  export type BayiUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BayiUsers.
     */
    data: XOR<BayiUserUpdateManyMutationInput, BayiUserUncheckedUpdateManyInput>
    /**
     * Filter which BayiUsers to update
     */
    where?: BayiUserWhereInput
    /**
     * Limit how many BayiUsers to update.
     */
    limit?: number
  }

  /**
   * BayiUser updateManyAndReturn
   */
  export type BayiUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * The data used to update BayiUsers.
     */
    data: XOR<BayiUserUpdateManyMutationInput, BayiUserUncheckedUpdateManyInput>
    /**
     * Filter which BayiUsers to update
     */
    where?: BayiUserWhereInput
    /**
     * Limit how many BayiUsers to update.
     */
    limit?: number
  }

  /**
   * BayiUser upsert
   */
  export type BayiUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * The filter to search for the BayiUser to update in case it exists.
     */
    where: BayiUserWhereUniqueInput
    /**
     * In case the BayiUser found by the `where` argument doesn't exist, create a new BayiUser with this data.
     */
    create: XOR<BayiUserCreateInput, BayiUserUncheckedCreateInput>
    /**
     * In case the BayiUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BayiUserUpdateInput, BayiUserUncheckedUpdateInput>
  }

  /**
   * BayiUser delete
   */
  export type BayiUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    /**
     * Filter which BayiUser to delete.
     */
    where: BayiUserWhereUniqueInput
  }

  /**
   * BayiUser deleteMany
   */
  export type BayiUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BayiUsers to delete
     */
    where?: BayiUserWhereInput
    /**
     * Limit how many BayiUsers to delete.
     */
    limit?: number
  }

  /**
   * BayiUser.products
   */
  export type BayiUser$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * BayiUser without action
   */
  export type BayiUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    inprice: number | null
    stock: number | null
    onclick: number | null
    sells: number | null
    categoryId: number | null
    markaId: number | null
    modelId: number | null
    bayiUserId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    inprice: number | null
    stock: number | null
    onclick: number | null
    sells: number | null
    categoryId: number | null
    markaId: number | null
    modelId: number | null
    bayiUserId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    desc: string | null
    color: string | null
    storage: string | null
    condition: string | null
    price: number | null
    inprice: number | null
    indirimsize: string | null
    indirim: boolean | null
    haftaurun: boolean | null
    stock: number | null
    onclick: number | null
    sells: number | null
    aksesuar: boolean | null
    kargoTime: string | null
    imei: string | null
    isActive: boolean | null
    createdAt: Date | null
    categoryId: number | null
    markaId: number | null
    modelId: number | null
    bayiUserId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    desc: string | null
    color: string | null
    storage: string | null
    condition: string | null
    price: number | null
    inprice: number | null
    indirimsize: string | null
    indirim: boolean | null
    haftaurun: boolean | null
    stock: number | null
    onclick: number | null
    sells: number | null
    aksesuar: boolean | null
    kargoTime: string | null
    imei: string | null
    isActive: boolean | null
    createdAt: Date | null
    categoryId: number | null
    markaId: number | null
    modelId: number | null
    bayiUserId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    desc: number
    color: number
    storage: number
    condition: number
    price: number
    inprice: number
    indirimsize: number
    indirim: number
    haftaurun: number
    stock: number
    images: number
    onclick: number
    sells: number
    aksesuar: number
    kargoTime: number
    imei: number
    isActive: number
    createdAt: number
    categoryId: number
    markaId: number
    modelId: number
    bayiUserId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    inprice?: true
    stock?: true
    onclick?: true
    sells?: true
    categoryId?: true
    markaId?: true
    modelId?: true
    bayiUserId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    inprice?: true
    stock?: true
    onclick?: true
    sells?: true
    categoryId?: true
    markaId?: true
    modelId?: true
    bayiUserId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    desc?: true
    color?: true
    storage?: true
    condition?: true
    price?: true
    inprice?: true
    indirimsize?: true
    indirim?: true
    haftaurun?: true
    stock?: true
    onclick?: true
    sells?: true
    aksesuar?: true
    kargoTime?: true
    imei?: true
    isActive?: true
    createdAt?: true
    categoryId?: true
    markaId?: true
    modelId?: true
    bayiUserId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    desc?: true
    color?: true
    storage?: true
    condition?: true
    price?: true
    inprice?: true
    indirimsize?: true
    indirim?: true
    haftaurun?: true
    stock?: true
    onclick?: true
    sells?: true
    aksesuar?: true
    kargoTime?: true
    imei?: true
    isActive?: true
    createdAt?: true
    categoryId?: true
    markaId?: true
    modelId?: true
    bayiUserId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    desc?: true
    color?: true
    storage?: true
    condition?: true
    price?: true
    inprice?: true
    indirimsize?: true
    indirim?: true
    haftaurun?: true
    stock?: true
    images?: true
    onclick?: true
    sells?: true
    aksesuar?: true
    kargoTime?: true
    imei?: true
    isActive?: true
    createdAt?: true
    categoryId?: true
    markaId?: true
    modelId?: true
    bayiUserId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    slug: string
    desc: string | null
    color: string | null
    storage: string | null
    condition: string | null
    price: number | null
    inprice: number | null
    indirimsize: string | null
    indirim: boolean | null
    haftaurun: boolean | null
    stock: number | null
    images: JsonValue | null
    onclick: number | null
    sells: number | null
    aksesuar: boolean | null
    kargoTime: string | null
    imei: string | null
    isActive: boolean | null
    createdAt: Date | null
    categoryId: number | null
    markaId: number | null
    modelId: number | null
    bayiUserId: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    desc?: boolean
    color?: boolean
    storage?: boolean
    condition?: boolean
    price?: boolean
    inprice?: boolean
    indirimsize?: boolean
    indirim?: boolean
    haftaurun?: boolean
    stock?: boolean
    images?: boolean
    onclick?: boolean
    sells?: boolean
    aksesuar?: boolean
    kargoTime?: boolean
    imei?: boolean
    isActive?: boolean
    createdAt?: boolean
    categoryId?: boolean
    markaId?: boolean
    modelId?: boolean
    bayiUserId?: boolean
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Marka?: boolean | Product$MarkaArgs<ExtArgs>
    Model?: boolean | Product$ModelArgs<ExtArgs>
    BayiUser?: boolean | Product$BayiUserArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    desc?: boolean
    color?: boolean
    storage?: boolean
    condition?: boolean
    price?: boolean
    inprice?: boolean
    indirimsize?: boolean
    indirim?: boolean
    haftaurun?: boolean
    stock?: boolean
    images?: boolean
    onclick?: boolean
    sells?: boolean
    aksesuar?: boolean
    kargoTime?: boolean
    imei?: boolean
    isActive?: boolean
    createdAt?: boolean
    categoryId?: boolean
    markaId?: boolean
    modelId?: boolean
    bayiUserId?: boolean
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Marka?: boolean | Product$MarkaArgs<ExtArgs>
    Model?: boolean | Product$ModelArgs<ExtArgs>
    BayiUser?: boolean | Product$BayiUserArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    desc?: boolean
    color?: boolean
    storage?: boolean
    condition?: boolean
    price?: boolean
    inprice?: boolean
    indirimsize?: boolean
    indirim?: boolean
    haftaurun?: boolean
    stock?: boolean
    images?: boolean
    onclick?: boolean
    sells?: boolean
    aksesuar?: boolean
    kargoTime?: boolean
    imei?: boolean
    isActive?: boolean
    createdAt?: boolean
    categoryId?: boolean
    markaId?: boolean
    modelId?: boolean
    bayiUserId?: boolean
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Marka?: boolean | Product$MarkaArgs<ExtArgs>
    Model?: boolean | Product$ModelArgs<ExtArgs>
    BayiUser?: boolean | Product$BayiUserArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    desc?: boolean
    color?: boolean
    storage?: boolean
    condition?: boolean
    price?: boolean
    inprice?: boolean
    indirimsize?: boolean
    indirim?: boolean
    haftaurun?: boolean
    stock?: boolean
    images?: boolean
    onclick?: boolean
    sells?: boolean
    aksesuar?: boolean
    kargoTime?: boolean
    imei?: boolean
    isActive?: boolean
    createdAt?: boolean
    categoryId?: boolean
    markaId?: boolean
    modelId?: boolean
    bayiUserId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "desc" | "color" | "storage" | "condition" | "price" | "inprice" | "indirimsize" | "indirim" | "haftaurun" | "stock" | "images" | "onclick" | "sells" | "aksesuar" | "kargoTime" | "imei" | "isActive" | "createdAt" | "categoryId" | "markaId" | "modelId" | "bayiUserId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Marka?: boolean | Product$MarkaArgs<ExtArgs>
    Model?: boolean | Product$ModelArgs<ExtArgs>
    BayiUser?: boolean | Product$BayiUserArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Marka?: boolean | Product$MarkaArgs<ExtArgs>
    Model?: boolean | Product$ModelArgs<ExtArgs>
    BayiUser?: boolean | Product$BayiUserArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Marka?: boolean | Product$MarkaArgs<ExtArgs>
    Model?: boolean | Product$ModelArgs<ExtArgs>
    BayiUser?: boolean | Product$BayiUserArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs> | null
      Marka: Prisma.$MarkaPayload<ExtArgs> | null
      Model: Prisma.$ModelPayload<ExtArgs> | null
      BayiUser: Prisma.$BayiUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      desc: string | null
      color: string | null
      storage: string | null
      condition: string | null
      price: number | null
      inprice: number | null
      indirimsize: string | null
      indirim: boolean | null
      haftaurun: boolean | null
      stock: number | null
      images: Prisma.JsonValue | null
      onclick: number | null
      sells: number | null
      aksesuar: boolean | null
      kargoTime: string | null
      imei: string | null
      isActive: boolean | null
      createdAt: Date | null
      categoryId: number | null
      markaId: number | null
      modelId: number | null
      bayiUserId: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends Product$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Marka<T extends Product$MarkaArgs<ExtArgs> = {}>(args?: Subset<T, Product$MarkaArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Model<T extends Product$ModelArgs<ExtArgs> = {}>(args?: Subset<T, Product$ModelArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    BayiUser<T extends Product$BayiUserArgs<ExtArgs> = {}>(args?: Subset<T, Product$BayiUserArgs<ExtArgs>>): Prisma__BayiUserClient<$Result.GetResult<Prisma.$BayiUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly desc: FieldRef<"Product", 'String'>
    readonly color: FieldRef<"Product", 'String'>
    readonly storage: FieldRef<"Product", 'String'>
    readonly condition: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly inprice: FieldRef<"Product", 'Float'>
    readonly indirimsize: FieldRef<"Product", 'String'>
    readonly indirim: FieldRef<"Product", 'Boolean'>
    readonly haftaurun: FieldRef<"Product", 'Boolean'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly images: FieldRef<"Product", 'Json'>
    readonly onclick: FieldRef<"Product", 'Int'>
    readonly sells: FieldRef<"Product", 'Int'>
    readonly aksesuar: FieldRef<"Product", 'Boolean'>
    readonly kargoTime: FieldRef<"Product", 'String'>
    readonly imei: FieldRef<"Product", 'String'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly markaId: FieldRef<"Product", 'Int'>
    readonly modelId: FieldRef<"Product", 'Int'>
    readonly bayiUserId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.Category
   */
  export type Product$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.Marka
   */
  export type Product$MarkaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    where?: MarkaWhereInput
  }

  /**
   * Product.Model
   */
  export type Product$ModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
  }

  /**
   * Product.BayiUser
   */
  export type Product$BayiUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayiUser
     */
    select?: BayiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayiUser
     */
    omit?: BayiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayiUserInclude<ExtArgs> | null
    where?: BayiUserWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    is_active: boolean | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    is_active: boolean | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    is_active: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    is_active?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    is_active?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    is_active?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string | null
    slug: string | null
    is_active: boolean | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    is_active?: boolean
    Product?: boolean | Category$ProductArgs<ExtArgs>
    Marka?: boolean | Category$MarkaArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    is_active?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "is_active", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Category$ProductArgs<ExtArgs>
    Marka?: boolean | Category$MarkaArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
      Marka: Prisma.$MarkaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      slug: string | null
      is_active: boolean | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Category$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Category$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Marka<T extends Category$MarkaArgs<ExtArgs> = {}>(args?: Subset<T, Category$MarkaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly is_active: FieldRef<"Category", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data?: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Product
   */
  export type Category$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.Marka
   */
  export type Category$MarkaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    where?: MarkaWhereInput
    orderBy?: MarkaOrderByWithRelationInput | MarkaOrderByWithRelationInput[]
    cursor?: MarkaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkaScalarFieldEnum | MarkaScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Marka
   */

  export type AggregateMarka = {
    _count: MarkaCountAggregateOutputType | null
    _avg: MarkaAvgAggregateOutputType | null
    _sum: MarkaSumAggregateOutputType | null
    _min: MarkaMinAggregateOutputType | null
    _max: MarkaMaxAggregateOutputType | null
  }

  export type MarkaAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type MarkaSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type MarkaMinAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
    slug: string | null
    categoryId: number | null
  }

  export type MarkaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
    slug: string | null
    categoryId: number | null
  }

  export type MarkaCountAggregateOutputType = {
    id: number
    name: number
    label: number
    slug: number
    categoryId: number
    _all: number
  }


  export type MarkaAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type MarkaSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type MarkaMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    slug?: true
    categoryId?: true
  }

  export type MarkaMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    slug?: true
    categoryId?: true
  }

  export type MarkaCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    slug?: true
    categoryId?: true
    _all?: true
  }

  export type MarkaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marka to aggregate.
     */
    where?: MarkaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markas to fetch.
     */
    orderBy?: MarkaOrderByWithRelationInput | MarkaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markas
    **/
    _count?: true | MarkaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkaMaxAggregateInputType
  }

  export type GetMarkaAggregateType<T extends MarkaAggregateArgs> = {
        [P in keyof T & keyof AggregateMarka]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarka[P]>
      : GetScalarType<T[P], AggregateMarka[P]>
  }




  export type MarkaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkaWhereInput
    orderBy?: MarkaOrderByWithAggregationInput | MarkaOrderByWithAggregationInput[]
    by: MarkaScalarFieldEnum[] | MarkaScalarFieldEnum
    having?: MarkaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkaCountAggregateInputType | true
    _avg?: MarkaAvgAggregateInputType
    _sum?: MarkaSumAggregateInputType
    _min?: MarkaMinAggregateInputType
    _max?: MarkaMaxAggregateInputType
  }

  export type MarkaGroupByOutputType = {
    id: number
    name: string | null
    label: string | null
    slug: string | null
    categoryId: number | null
    _count: MarkaCountAggregateOutputType | null
    _avg: MarkaAvgAggregateOutputType | null
    _sum: MarkaSumAggregateOutputType | null
    _min: MarkaMinAggregateOutputType | null
    _max: MarkaMaxAggregateOutputType | null
  }

  type GetMarkaGroupByPayload<T extends MarkaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkaGroupByOutputType[P]>
            : GetScalarType<T[P], MarkaGroupByOutputType[P]>
        }
      >
    >


  export type MarkaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    slug?: boolean
    categoryId?: boolean
    Category?: boolean | Marka$CategoryArgs<ExtArgs>
    Product?: boolean | Marka$ProductArgs<ExtArgs>
    Model?: boolean | Marka$ModelArgs<ExtArgs>
    _count?: boolean | MarkaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marka"]>

  export type MarkaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    slug?: boolean
    categoryId?: boolean
    Category?: boolean | Marka$CategoryArgs<ExtArgs>
  }, ExtArgs["result"]["marka"]>

  export type MarkaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    slug?: boolean
    categoryId?: boolean
    Category?: boolean | Marka$CategoryArgs<ExtArgs>
  }, ExtArgs["result"]["marka"]>

  export type MarkaSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    slug?: boolean
    categoryId?: boolean
  }

  export type MarkaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label" | "slug" | "categoryId", ExtArgs["result"]["marka"]>
  export type MarkaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Marka$CategoryArgs<ExtArgs>
    Product?: boolean | Marka$ProductArgs<ExtArgs>
    Model?: boolean | Marka$ModelArgs<ExtArgs>
    _count?: boolean | MarkaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarkaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Marka$CategoryArgs<ExtArgs>
  }
  export type MarkaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Marka$CategoryArgs<ExtArgs>
  }

  export type $MarkaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marka"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs> | null
      Product: Prisma.$ProductPayload<ExtArgs>[]
      Model: Prisma.$ModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      label: string | null
      slug: string | null
      categoryId: number | null
    }, ExtArgs["result"]["marka"]>
    composites: {}
  }

  type MarkaGetPayload<S extends boolean | null | undefined | MarkaDefaultArgs> = $Result.GetResult<Prisma.$MarkaPayload, S>

  type MarkaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarkaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarkaCountAggregateInputType | true
    }

  export interface MarkaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marka'], meta: { name: 'Marka' } }
    /**
     * Find zero or one Marka that matches the filter.
     * @param {MarkaFindUniqueArgs} args - Arguments to find a Marka
     * @example
     * // Get one Marka
     * const marka = await prisma.marka.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkaFindUniqueArgs>(args: SelectSubset<T, MarkaFindUniqueArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marka that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkaFindUniqueOrThrowArgs} args - Arguments to find a Marka
     * @example
     * // Get one Marka
     * const marka = await prisma.marka.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkaFindUniqueOrThrowArgs>(args: SelectSubset<T, MarkaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marka that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkaFindFirstArgs} args - Arguments to find a Marka
     * @example
     * // Get one Marka
     * const marka = await prisma.marka.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkaFindFirstArgs>(args?: SelectSubset<T, MarkaFindFirstArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marka that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkaFindFirstOrThrowArgs} args - Arguments to find a Marka
     * @example
     * // Get one Marka
     * const marka = await prisma.marka.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkaFindFirstOrThrowArgs>(args?: SelectSubset<T, MarkaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markas
     * const markas = await prisma.marka.findMany()
     * 
     * // Get first 10 Markas
     * const markas = await prisma.marka.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const markaWithIdOnly = await prisma.marka.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarkaFindManyArgs>(args?: SelectSubset<T, MarkaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marka.
     * @param {MarkaCreateArgs} args - Arguments to create a Marka.
     * @example
     * // Create one Marka
     * const Marka = await prisma.marka.create({
     *   data: {
     *     // ... data to create a Marka
     *   }
     * })
     * 
     */
    create<T extends MarkaCreateArgs>(args: SelectSubset<T, MarkaCreateArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markas.
     * @param {MarkaCreateManyArgs} args - Arguments to create many Markas.
     * @example
     * // Create many Markas
     * const marka = await prisma.marka.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarkaCreateManyArgs>(args?: SelectSubset<T, MarkaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markas and returns the data saved in the database.
     * @param {MarkaCreateManyAndReturnArgs} args - Arguments to create many Markas.
     * @example
     * // Create many Markas
     * const marka = await prisma.marka.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markas and only return the `id`
     * const markaWithIdOnly = await prisma.marka.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarkaCreateManyAndReturnArgs>(args?: SelectSubset<T, MarkaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marka.
     * @param {MarkaDeleteArgs} args - Arguments to delete one Marka.
     * @example
     * // Delete one Marka
     * const Marka = await prisma.marka.delete({
     *   where: {
     *     // ... filter to delete one Marka
     *   }
     * })
     * 
     */
    delete<T extends MarkaDeleteArgs>(args: SelectSubset<T, MarkaDeleteArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marka.
     * @param {MarkaUpdateArgs} args - Arguments to update one Marka.
     * @example
     * // Update one Marka
     * const marka = await prisma.marka.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarkaUpdateArgs>(args: SelectSubset<T, MarkaUpdateArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markas.
     * @param {MarkaDeleteManyArgs} args - Arguments to filter Markas to delete.
     * @example
     * // Delete a few Markas
     * const { count } = await prisma.marka.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarkaDeleteManyArgs>(args?: SelectSubset<T, MarkaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markas
     * const marka = await prisma.marka.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarkaUpdateManyArgs>(args: SelectSubset<T, MarkaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markas and returns the data updated in the database.
     * @param {MarkaUpdateManyAndReturnArgs} args - Arguments to update many Markas.
     * @example
     * // Update many Markas
     * const marka = await prisma.marka.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markas and only return the `id`
     * const markaWithIdOnly = await prisma.marka.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarkaUpdateManyAndReturnArgs>(args: SelectSubset<T, MarkaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marka.
     * @param {MarkaUpsertArgs} args - Arguments to update or create a Marka.
     * @example
     * // Update or create a Marka
     * const marka = await prisma.marka.upsert({
     *   create: {
     *     // ... data to create a Marka
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marka we want to update
     *   }
     * })
     */
    upsert<T extends MarkaUpsertArgs>(args: SelectSubset<T, MarkaUpsertArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkaCountArgs} args - Arguments to filter Markas to count.
     * @example
     * // Count the number of Markas
     * const count = await prisma.marka.count({
     *   where: {
     *     // ... the filter for the Markas we want to count
     *   }
     * })
    **/
    count<T extends MarkaCountArgs>(
      args?: Subset<T, MarkaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marka.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkaAggregateArgs>(args: Subset<T, MarkaAggregateArgs>): Prisma.PrismaPromise<GetMarkaAggregateType<T>>

    /**
     * Group by Marka.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkaGroupByArgs} args - Group by arguments.
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
      T extends MarkaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkaGroupByArgs['orderBy'] }
        : { orderBy?: MarkaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarkaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marka model
   */
  readonly fields: MarkaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marka.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends Marka$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Marka$CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Product<T extends Marka$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Marka$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Model<T extends Marka$ModelArgs<ExtArgs> = {}>(args?: Subset<T, Marka$ModelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Marka model
   */
  interface MarkaFieldRefs {
    readonly id: FieldRef<"Marka", 'Int'>
    readonly name: FieldRef<"Marka", 'String'>
    readonly label: FieldRef<"Marka", 'String'>
    readonly slug: FieldRef<"Marka", 'String'>
    readonly categoryId: FieldRef<"Marka", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Marka findUnique
   */
  export type MarkaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * Filter, which Marka to fetch.
     */
    where: MarkaWhereUniqueInput
  }

  /**
   * Marka findUniqueOrThrow
   */
  export type MarkaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * Filter, which Marka to fetch.
     */
    where: MarkaWhereUniqueInput
  }

  /**
   * Marka findFirst
   */
  export type MarkaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * Filter, which Marka to fetch.
     */
    where?: MarkaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markas to fetch.
     */
    orderBy?: MarkaOrderByWithRelationInput | MarkaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markas.
     */
    cursor?: MarkaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markas.
     */
    distinct?: MarkaScalarFieldEnum | MarkaScalarFieldEnum[]
  }

  /**
   * Marka findFirstOrThrow
   */
  export type MarkaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * Filter, which Marka to fetch.
     */
    where?: MarkaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markas to fetch.
     */
    orderBy?: MarkaOrderByWithRelationInput | MarkaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markas.
     */
    cursor?: MarkaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markas.
     */
    distinct?: MarkaScalarFieldEnum | MarkaScalarFieldEnum[]
  }

  /**
   * Marka findMany
   */
  export type MarkaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * Filter, which Markas to fetch.
     */
    where?: MarkaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markas to fetch.
     */
    orderBy?: MarkaOrderByWithRelationInput | MarkaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markas.
     */
    cursor?: MarkaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markas.
     */
    skip?: number
    distinct?: MarkaScalarFieldEnum | MarkaScalarFieldEnum[]
  }

  /**
   * Marka create
   */
  export type MarkaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * The data needed to create a Marka.
     */
    data?: XOR<MarkaCreateInput, MarkaUncheckedCreateInput>
  }

  /**
   * Marka createMany
   */
  export type MarkaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markas.
     */
    data: MarkaCreateManyInput | MarkaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marka createManyAndReturn
   */
  export type MarkaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * The data used to create many Markas.
     */
    data: MarkaCreateManyInput | MarkaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marka update
   */
  export type MarkaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * The data needed to update a Marka.
     */
    data: XOR<MarkaUpdateInput, MarkaUncheckedUpdateInput>
    /**
     * Choose, which Marka to update.
     */
    where: MarkaWhereUniqueInput
  }

  /**
   * Marka updateMany
   */
  export type MarkaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markas.
     */
    data: XOR<MarkaUpdateManyMutationInput, MarkaUncheckedUpdateManyInput>
    /**
     * Filter which Markas to update
     */
    where?: MarkaWhereInput
    /**
     * Limit how many Markas to update.
     */
    limit?: number
  }

  /**
   * Marka updateManyAndReturn
   */
  export type MarkaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * The data used to update Markas.
     */
    data: XOR<MarkaUpdateManyMutationInput, MarkaUncheckedUpdateManyInput>
    /**
     * Filter which Markas to update
     */
    where?: MarkaWhereInput
    /**
     * Limit how many Markas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marka upsert
   */
  export type MarkaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * The filter to search for the Marka to update in case it exists.
     */
    where: MarkaWhereUniqueInput
    /**
     * In case the Marka found by the `where` argument doesn't exist, create a new Marka with this data.
     */
    create: XOR<MarkaCreateInput, MarkaUncheckedCreateInput>
    /**
     * In case the Marka was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkaUpdateInput, MarkaUncheckedUpdateInput>
  }

  /**
   * Marka delete
   */
  export type MarkaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    /**
     * Filter which Marka to delete.
     */
    where: MarkaWhereUniqueInput
  }

  /**
   * Marka deleteMany
   */
  export type MarkaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markas to delete
     */
    where?: MarkaWhereInput
    /**
     * Limit how many Markas to delete.
     */
    limit?: number
  }

  /**
   * Marka.Category
   */
  export type Marka$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Marka.Product
   */
  export type Marka$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Marka.Model
   */
  export type Marka$ModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    cursor?: ModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Marka without action
   */
  export type MarkaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
  }


  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    id: number | null
    bazFiyat: number | null
    markaId: number | null
  }

  export type ModelSumAggregateOutputType = {
    id: number | null
    bazFiyat: number | null
    markaId: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    bazFiyat: number | null
    markaId: number | null
  }

  export type ModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    bazFiyat: number | null
    markaId: number | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    bazFiyat: number
    color: number
    storage: number
    markaId: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    id?: true
    bazFiyat?: true
    markaId?: true
  }

  export type ModelSumAggregateInputType = {
    id?: true
    bazFiyat?: true
    markaId?: true
  }

  export type ModelMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bazFiyat?: true
    markaId?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bazFiyat?: true
    markaId?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bazFiyat?: true
    color?: true
    storage?: true
    markaId?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: number
    name: string | null
    slug: string | null
    bazFiyat: number | null
    color: JsonValue | null
    storage: JsonValue | null
    markaId: number | null
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    bazFiyat?: boolean
    color?: boolean
    storage?: boolean
    markaId?: boolean
    products?: boolean | Model$productsArgs<ExtArgs>
    Marka?: boolean | Model$MarkaArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    bazFiyat?: boolean
    color?: boolean
    storage?: boolean
    markaId?: boolean
    Marka?: boolean | Model$MarkaArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    bazFiyat?: boolean
    color?: boolean
    storage?: boolean
    markaId?: boolean
    Marka?: boolean | Model$MarkaArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    bazFiyat?: boolean
    color?: boolean
    storage?: boolean
    markaId?: boolean
  }

  export type ModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "bazFiyat" | "color" | "storage" | "markaId", ExtArgs["result"]["model"]>
  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Model$productsArgs<ExtArgs>
    Marka?: boolean | Model$MarkaArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Marka?: boolean | Model$MarkaArgs<ExtArgs>
  }
  export type ModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Marka?: boolean | Model$MarkaArgs<ExtArgs>
  }

  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      Marka: Prisma.$MarkaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      slug: string | null
      bazFiyat: number | null
      color: Prisma.JsonValue | null
      storage: Prisma.JsonValue | null
      markaId: number | null
    }, ExtArgs["result"]["model"]>
    composites: {}
  }

  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelFindUniqueArgs>(args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelFindFirstArgs>(args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelFindManyArgs>(args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
     */
    create<T extends ModelCreateArgs>(args: SelectSubset<T, ModelCreateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelCreateManyArgs>(args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
     */
    delete<T extends ModelDeleteArgs>(args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelUpdateArgs>(args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelDeleteManyArgs>(args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelUpdateManyArgs>(args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
     */
    upsert<T extends ModelUpsertArgs>(args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
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
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Model$productsArgs<ExtArgs> = {}>(args?: Subset<T, Model$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Marka<T extends Model$MarkaArgs<ExtArgs> = {}>(args?: Subset<T, Model$MarkaArgs<ExtArgs>>): Prisma__MarkaClient<$Result.GetResult<Prisma.$MarkaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Model model
   */
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'Int'>
    readonly name: FieldRef<"Model", 'String'>
    readonly slug: FieldRef<"Model", 'String'>
    readonly bazFiyat: FieldRef<"Model", 'Float'>
    readonly color: FieldRef<"Model", 'Json'>
    readonly storage: FieldRef<"Model", 'Json'>
    readonly markaId: FieldRef<"Model", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data?: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }

  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Model createManyAndReturn
   */
  export type ModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Model updateManyAndReturn
   */
  export type ModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }

  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Model.products
   */
  export type Model$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Model.Marka
   */
  export type Model$MarkaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marka
     */
    select?: MarkaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marka
     */
    omit?: MarkaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkaInclude<ExtArgs> | null
    where?: MarkaWhereInput
  }

  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
  }


  /**
   * Model Adress
   */

  export type AggregateAdress = {
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  export type AdressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AdressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AdressMinAggregateOutputType = {
    id: number | null
    adressName: string | null
    name: string | null
    lastname: string | null
    identityNumber: string | null
    tel: string | null
    adres: string | null
    postalCode: string | null
    city: string | null
    district: string | null
    category: string | null
    firmaName: string | null
    vergiDairesi: string | null
    vergiNo: string | null
    efatura: boolean | null
    userId: number | null
  }

  export type AdressMaxAggregateOutputType = {
    id: number | null
    adressName: string | null
    name: string | null
    lastname: string | null
    identityNumber: string | null
    tel: string | null
    adres: string | null
    postalCode: string | null
    city: string | null
    district: string | null
    category: string | null
    firmaName: string | null
    vergiDairesi: string | null
    vergiNo: string | null
    efatura: boolean | null
    userId: number | null
  }

  export type AdressCountAggregateOutputType = {
    id: number
    adressName: number
    name: number
    lastname: number
    identityNumber: number
    tel: number
    adres: number
    postalCode: number
    city: number
    district: number
    category: number
    firmaName: number
    vergiDairesi: number
    vergiNo: number
    efatura: number
    userId: number
    _all: number
  }


  export type AdressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdressMinAggregateInputType = {
    id?: true
    adressName?: true
    name?: true
    lastname?: true
    identityNumber?: true
    tel?: true
    adres?: true
    postalCode?: true
    city?: true
    district?: true
    category?: true
    firmaName?: true
    vergiDairesi?: true
    vergiNo?: true
    efatura?: true
    userId?: true
  }

  export type AdressMaxAggregateInputType = {
    id?: true
    adressName?: true
    name?: true
    lastname?: true
    identityNumber?: true
    tel?: true
    adres?: true
    postalCode?: true
    city?: true
    district?: true
    category?: true
    firmaName?: true
    vergiDairesi?: true
    vergiNo?: true
    efatura?: true
    userId?: true
  }

  export type AdressCountAggregateInputType = {
    id?: true
    adressName?: true
    name?: true
    lastname?: true
    identityNumber?: true
    tel?: true
    adres?: true
    postalCode?: true
    city?: true
    district?: true
    category?: true
    firmaName?: true
    vergiDairesi?: true
    vergiNo?: true
    efatura?: true
    userId?: true
    _all?: true
  }

  export type AdressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adress to aggregate.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adresses
    **/
    _count?: true | AdressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdressMaxAggregateInputType
  }

  export type GetAdressAggregateType<T extends AdressAggregateArgs> = {
        [P in keyof T & keyof AggregateAdress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdress[P]>
      : GetScalarType<T[P], AggregateAdress[P]>
  }




  export type AdressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdressWhereInput
    orderBy?: AdressOrderByWithAggregationInput | AdressOrderByWithAggregationInput[]
    by: AdressScalarFieldEnum[] | AdressScalarFieldEnum
    having?: AdressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdressCountAggregateInputType | true
    _avg?: AdressAvgAggregateInputType
    _sum?: AdressSumAggregateInputType
    _min?: AdressMinAggregateInputType
    _max?: AdressMaxAggregateInputType
  }

  export type AdressGroupByOutputType = {
    id: number
    adressName: string | null
    name: string | null
    lastname: string | null
    identityNumber: string | null
    tel: string | null
    adres: string | null
    postalCode: string | null
    city: string | null
    district: string | null
    category: string | null
    firmaName: string | null
    vergiDairesi: string | null
    vergiNo: string | null
    efatura: boolean | null
    userId: number | null
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  type GetAdressGroupByPayload<T extends AdressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdressGroupByOutputType[P]>
            : GetScalarType<T[P], AdressGroupByOutputType[P]>
        }
      >
    >


  export type AdressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adressName?: boolean
    name?: boolean
    lastname?: boolean
    identityNumber?: boolean
    tel?: boolean
    adres?: boolean
    postalCode?: boolean
    city?: boolean
    district?: boolean
    category?: boolean
    firmaName?: boolean
    vergiDairesi?: boolean
    vergiNo?: boolean
    efatura?: boolean
    userId?: boolean
    User?: boolean | Adress$UserArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adressName?: boolean
    name?: boolean
    lastname?: boolean
    identityNumber?: boolean
    tel?: boolean
    adres?: boolean
    postalCode?: boolean
    city?: boolean
    district?: boolean
    category?: boolean
    firmaName?: boolean
    vergiDairesi?: boolean
    vergiNo?: boolean
    efatura?: boolean
    userId?: boolean
    User?: boolean | Adress$UserArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adressName?: boolean
    name?: boolean
    lastname?: boolean
    identityNumber?: boolean
    tel?: boolean
    adres?: boolean
    postalCode?: boolean
    city?: boolean
    district?: boolean
    category?: boolean
    firmaName?: boolean
    vergiDairesi?: boolean
    vergiNo?: boolean
    efatura?: boolean
    userId?: boolean
    User?: boolean | Adress$UserArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectScalar = {
    id?: boolean
    adressName?: boolean
    name?: boolean
    lastname?: boolean
    identityNumber?: boolean
    tel?: boolean
    adres?: boolean
    postalCode?: boolean
    city?: boolean
    district?: boolean
    category?: boolean
    firmaName?: boolean
    vergiDairesi?: boolean
    vergiNo?: boolean
    efatura?: boolean
    userId?: boolean
  }

  export type AdressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adressName" | "name" | "lastname" | "identityNumber" | "tel" | "adres" | "postalCode" | "city" | "district" | "category" | "firmaName" | "vergiDairesi" | "vergiNo" | "efatura" | "userId", ExtArgs["result"]["adress"]>
  export type AdressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Adress$UserArgs<ExtArgs>
  }
  export type AdressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Adress$UserArgs<ExtArgs>
  }
  export type AdressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Adress$UserArgs<ExtArgs>
  }

  export type $AdressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adress"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adressName: string | null
      name: string | null
      lastname: string | null
      identityNumber: string | null
      tel: string | null
      adres: string | null
      postalCode: string | null
      city: string | null
      district: string | null
      category: string | null
      firmaName: string | null
      vergiDairesi: string | null
      vergiNo: string | null
      efatura: boolean | null
      userId: number | null
    }, ExtArgs["result"]["adress"]>
    composites: {}
  }

  type AdressGetPayload<S extends boolean | null | undefined | AdressDefaultArgs> = $Result.GetResult<Prisma.$AdressPayload, S>

  type AdressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdressCountAggregateInputType | true
    }

  export interface AdressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adress'], meta: { name: 'Adress' } }
    /**
     * Find zero or one Adress that matches the filter.
     * @param {AdressFindUniqueArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdressFindUniqueArgs>(args: SelectSubset<T, AdressFindUniqueArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdressFindUniqueOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdressFindUniqueOrThrowArgs>(args: SelectSubset<T, AdressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdressFindFirstArgs>(args?: SelectSubset<T, AdressFindFirstArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdressFindFirstOrThrowArgs>(args?: SelectSubset<T, AdressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adresses
     * const adresses = await prisma.adress.findMany()
     * 
     * // Get first 10 Adresses
     * const adresses = await prisma.adress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adressWithIdOnly = await prisma.adress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdressFindManyArgs>(args?: SelectSubset<T, AdressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adress.
     * @param {AdressCreateArgs} args - Arguments to create a Adress.
     * @example
     * // Create one Adress
     * const Adress = await prisma.adress.create({
     *   data: {
     *     // ... data to create a Adress
     *   }
     * })
     * 
     */
    create<T extends AdressCreateArgs>(args: SelectSubset<T, AdressCreateArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adresses.
     * @param {AdressCreateManyArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adress = await prisma.adress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdressCreateManyArgs>(args?: SelectSubset<T, AdressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adresses and returns the data saved in the database.
     * @param {AdressCreateManyAndReturnArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adress = await prisma.adress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adresses and only return the `id`
     * const adressWithIdOnly = await prisma.adress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdressCreateManyAndReturnArgs>(args?: SelectSubset<T, AdressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adress.
     * @param {AdressDeleteArgs} args - Arguments to delete one Adress.
     * @example
     * // Delete one Adress
     * const Adress = await prisma.adress.delete({
     *   where: {
     *     // ... filter to delete one Adress
     *   }
     * })
     * 
     */
    delete<T extends AdressDeleteArgs>(args: SelectSubset<T, AdressDeleteArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adress.
     * @param {AdressUpdateArgs} args - Arguments to update one Adress.
     * @example
     * // Update one Adress
     * const adress = await prisma.adress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdressUpdateArgs>(args: SelectSubset<T, AdressUpdateArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adresses.
     * @param {AdressDeleteManyArgs} args - Arguments to filter Adresses to delete.
     * @example
     * // Delete a few Adresses
     * const { count } = await prisma.adress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdressDeleteManyArgs>(args?: SelectSubset<T, AdressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adresses
     * const adress = await prisma.adress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdressUpdateManyArgs>(args: SelectSubset<T, AdressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses and returns the data updated in the database.
     * @param {AdressUpdateManyAndReturnArgs} args - Arguments to update many Adresses.
     * @example
     * // Update many Adresses
     * const adress = await prisma.adress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adresses and only return the `id`
     * const adressWithIdOnly = await prisma.adress.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdressUpdateManyAndReturnArgs>(args: SelectSubset<T, AdressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adress.
     * @param {AdressUpsertArgs} args - Arguments to update or create a Adress.
     * @example
     * // Update or create a Adress
     * const adress = await prisma.adress.upsert({
     *   create: {
     *     // ... data to create a Adress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adress we want to update
     *   }
     * })
     */
    upsert<T extends AdressUpsertArgs>(args: SelectSubset<T, AdressUpsertArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressCountArgs} args - Arguments to filter Adresses to count.
     * @example
     * // Count the number of Adresses
     * const count = await prisma.adress.count({
     *   where: {
     *     // ... the filter for the Adresses we want to count
     *   }
     * })
    **/
    count<T extends AdressCountArgs>(
      args?: Subset<T, AdressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdressAggregateArgs>(args: Subset<T, AdressAggregateArgs>): Prisma.PrismaPromise<GetAdressAggregateType<T>>

    /**
     * Group by Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressGroupByArgs} args - Group by arguments.
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
      T extends AdressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdressGroupByArgs['orderBy'] }
        : { orderBy?: AdressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adress model
   */
  readonly fields: AdressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Adress$UserArgs<ExtArgs> = {}>(args?: Subset<T, Adress$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Adress model
   */
  interface AdressFieldRefs {
    readonly id: FieldRef<"Adress", 'Int'>
    readonly adressName: FieldRef<"Adress", 'String'>
    readonly name: FieldRef<"Adress", 'String'>
    readonly lastname: FieldRef<"Adress", 'String'>
    readonly identityNumber: FieldRef<"Adress", 'String'>
    readonly tel: FieldRef<"Adress", 'String'>
    readonly adres: FieldRef<"Adress", 'String'>
    readonly postalCode: FieldRef<"Adress", 'String'>
    readonly city: FieldRef<"Adress", 'String'>
    readonly district: FieldRef<"Adress", 'String'>
    readonly category: FieldRef<"Adress", 'String'>
    readonly firmaName: FieldRef<"Adress", 'String'>
    readonly vergiDairesi: FieldRef<"Adress", 'String'>
    readonly vergiNo: FieldRef<"Adress", 'String'>
    readonly efatura: FieldRef<"Adress", 'Boolean'>
    readonly userId: FieldRef<"Adress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Adress findUnique
   */
  export type AdressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findUniqueOrThrow
   */
  export type AdressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findFirst
   */
  export type AdressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress findFirstOrThrow
   */
  export type AdressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress findMany
   */
  export type AdressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adresses to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress create
   */
  export type AdressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The data needed to create a Adress.
     */
    data?: XOR<AdressCreateInput, AdressUncheckedCreateInput>
  }

  /**
   * Adress createMany
   */
  export type AdressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adresses.
     */
    data: AdressCreateManyInput | AdressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adress createManyAndReturn
   */
  export type AdressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * The data used to create many Adresses.
     */
    data: AdressCreateManyInput | AdressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adress update
   */
  export type AdressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The data needed to update a Adress.
     */
    data: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
    /**
     * Choose, which Adress to update.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress updateMany
   */
  export type AdressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to update.
     */
    limit?: number
  }

  /**
   * Adress updateManyAndReturn
   */
  export type AdressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adress upsert
   */
  export type AdressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The filter to search for the Adress to update in case it exists.
     */
    where: AdressWhereUniqueInput
    /**
     * In case the Adress found by the `where` argument doesn't exist, create a new Adress with this data.
     */
    create: XOR<AdressCreateInput, AdressUncheckedCreateInput>
    /**
     * In case the Adress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
  }

  /**
   * Adress delete
   */
  export type AdressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter which Adress to delete.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress deleteMany
   */
  export type AdressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adresses to delete
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to delete.
     */
    limit?: number
  }

  /**
   * Adress.User
   */
  export type Adress$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Adress without action
   */
  export type AdressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
  }


  /**
   * Model PhoneSell
   */

  export type AggregatePhoneSell = {
    _count: PhoneSellCountAggregateOutputType | null
    _avg: PhoneSellAvgAggregateOutputType | null
    _sum: PhoneSellSumAggregateOutputType | null
    _min: PhoneSellMinAggregateOutputType | null
    _max: PhoneSellMaxAggregateOutputType | null
  }

  export type PhoneSellAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PhoneSellSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PhoneSellMinAggregateOutputType = {
    id: number | null
    marka: string | null
    model: string | null
    storage: string | null
    yurtici: string | null
    passport: string | null
    price: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    tcNumber: string | null
    city: string | null
    district: string | null
    address: string | null
    ibanName: string | null
    ibanSurname: string | null
    ibanNumber: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PhoneSellMaxAggregateOutputType = {
    id: number | null
    marka: string | null
    model: string | null
    storage: string | null
    yurtici: string | null
    passport: string | null
    price: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    tcNumber: string | null
    city: string | null
    district: string | null
    address: string | null
    ibanName: string | null
    ibanSurname: string | null
    ibanNumber: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PhoneSellCountAggregateOutputType = {
    id: number
    marka: number
    model: number
    storage: number
    yurtici: number
    passport: number
    answers: number
    price: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    tcNumber: number
    city: number
    district: number
    address: number
    ibanName: number
    ibanSurname: number
    ibanNumber: number
    status: number
    createdAt: number
    _all: number
  }


  export type PhoneSellAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PhoneSellSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PhoneSellMinAggregateInputType = {
    id?: true
    marka?: true
    model?: true
    storage?: true
    yurtici?: true
    passport?: true
    price?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    tcNumber?: true
    city?: true
    district?: true
    address?: true
    ibanName?: true
    ibanSurname?: true
    ibanNumber?: true
    status?: true
    createdAt?: true
  }

  export type PhoneSellMaxAggregateInputType = {
    id?: true
    marka?: true
    model?: true
    storage?: true
    yurtici?: true
    passport?: true
    price?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    tcNumber?: true
    city?: true
    district?: true
    address?: true
    ibanName?: true
    ibanSurname?: true
    ibanNumber?: true
    status?: true
    createdAt?: true
  }

  export type PhoneSellCountAggregateInputType = {
    id?: true
    marka?: true
    model?: true
    storage?: true
    yurtici?: true
    passport?: true
    answers?: true
    price?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    tcNumber?: true
    city?: true
    district?: true
    address?: true
    ibanName?: true
    ibanSurname?: true
    ibanNumber?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PhoneSellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneSell to aggregate.
     */
    where?: PhoneSellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneSells to fetch.
     */
    orderBy?: PhoneSellOrderByWithRelationInput | PhoneSellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneSellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneSells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneSells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneSells
    **/
    _count?: true | PhoneSellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhoneSellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhoneSellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneSellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneSellMaxAggregateInputType
  }

  export type GetPhoneSellAggregateType<T extends PhoneSellAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneSell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneSell[P]>
      : GetScalarType<T[P], AggregatePhoneSell[P]>
  }




  export type PhoneSellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneSellWhereInput
    orderBy?: PhoneSellOrderByWithAggregationInput | PhoneSellOrderByWithAggregationInput[]
    by: PhoneSellScalarFieldEnum[] | PhoneSellScalarFieldEnum
    having?: PhoneSellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneSellCountAggregateInputType | true
    _avg?: PhoneSellAvgAggregateInputType
    _sum?: PhoneSellSumAggregateInputType
    _min?: PhoneSellMinAggregateInputType
    _max?: PhoneSellMaxAggregateInputType
  }

  export type PhoneSellGroupByOutputType = {
    id: number
    marka: string | null
    model: string | null
    storage: string | null
    yurtici: string | null
    passport: string | null
    answers: JsonValue | null
    price: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    tcNumber: string | null
    city: string | null
    district: string | null
    address: string | null
    ibanName: string | null
    ibanSurname: string | null
    ibanNumber: string | null
    status: string | null
    createdAt: Date | null
    _count: PhoneSellCountAggregateOutputType | null
    _avg: PhoneSellAvgAggregateOutputType | null
    _sum: PhoneSellSumAggregateOutputType | null
    _min: PhoneSellMinAggregateOutputType | null
    _max: PhoneSellMaxAggregateOutputType | null
  }

  type GetPhoneSellGroupByPayload<T extends PhoneSellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneSellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneSellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneSellGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneSellGroupByOutputType[P]>
        }
      >
    >


  export type PhoneSellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marka?: boolean
    model?: boolean
    storage?: boolean
    yurtici?: boolean
    passport?: boolean
    answers?: boolean
    price?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    tcNumber?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    ibanName?: boolean
    ibanSurname?: boolean
    ibanNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["phoneSell"]>

  export type PhoneSellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marka?: boolean
    model?: boolean
    storage?: boolean
    yurtici?: boolean
    passport?: boolean
    answers?: boolean
    price?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    tcNumber?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    ibanName?: boolean
    ibanSurname?: boolean
    ibanNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["phoneSell"]>

  export type PhoneSellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marka?: boolean
    model?: boolean
    storage?: boolean
    yurtici?: boolean
    passport?: boolean
    answers?: boolean
    price?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    tcNumber?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    ibanName?: boolean
    ibanSurname?: boolean
    ibanNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["phoneSell"]>

  export type PhoneSellSelectScalar = {
    id?: boolean
    marka?: boolean
    model?: boolean
    storage?: boolean
    yurtici?: boolean
    passport?: boolean
    answers?: boolean
    price?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    tcNumber?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    ibanName?: boolean
    ibanSurname?: boolean
    ibanNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PhoneSellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marka" | "model" | "storage" | "yurtici" | "passport" | "answers" | "price" | "firstName" | "lastName" | "email" | "phoneNumber" | "tcNumber" | "city" | "district" | "address" | "ibanName" | "ibanSurname" | "ibanNumber" | "status" | "createdAt", ExtArgs["result"]["phoneSell"]>

  export type $PhoneSellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneSell"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marka: string | null
      model: string | null
      storage: string | null
      yurtici: string | null
      passport: string | null
      answers: Prisma.JsonValue | null
      price: number | null
      firstName: string | null
      lastName: string | null
      email: string | null
      phoneNumber: string | null
      tcNumber: string | null
      city: string | null
      district: string | null
      address: string | null
      ibanName: string | null
      ibanSurname: string | null
      ibanNumber: string | null
      status: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["phoneSell"]>
    composites: {}
  }

  type PhoneSellGetPayload<S extends boolean | null | undefined | PhoneSellDefaultArgs> = $Result.GetResult<Prisma.$PhoneSellPayload, S>

  type PhoneSellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneSellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneSellCountAggregateInputType | true
    }

  export interface PhoneSellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneSell'], meta: { name: 'PhoneSell' } }
    /**
     * Find zero or one PhoneSell that matches the filter.
     * @param {PhoneSellFindUniqueArgs} args - Arguments to find a PhoneSell
     * @example
     * // Get one PhoneSell
     * const phoneSell = await prisma.phoneSell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneSellFindUniqueArgs>(args: SelectSubset<T, PhoneSellFindUniqueArgs<ExtArgs>>): Prisma__PhoneSellClient<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhoneSell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneSellFindUniqueOrThrowArgs} args - Arguments to find a PhoneSell
     * @example
     * // Get one PhoneSell
     * const phoneSell = await prisma.phoneSell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneSellFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneSellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneSellClient<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneSell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSellFindFirstArgs} args - Arguments to find a PhoneSell
     * @example
     * // Get one PhoneSell
     * const phoneSell = await prisma.phoneSell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneSellFindFirstArgs>(args?: SelectSubset<T, PhoneSellFindFirstArgs<ExtArgs>>): Prisma__PhoneSellClient<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneSell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSellFindFirstOrThrowArgs} args - Arguments to find a PhoneSell
     * @example
     * // Get one PhoneSell
     * const phoneSell = await prisma.phoneSell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneSellFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneSellFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneSellClient<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhoneSells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneSells
     * const phoneSells = await prisma.phoneSell.findMany()
     * 
     * // Get first 10 PhoneSells
     * const phoneSells = await prisma.phoneSell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneSellWithIdOnly = await prisma.phoneSell.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneSellFindManyArgs>(args?: SelectSubset<T, PhoneSellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhoneSell.
     * @param {PhoneSellCreateArgs} args - Arguments to create a PhoneSell.
     * @example
     * // Create one PhoneSell
     * const PhoneSell = await prisma.phoneSell.create({
     *   data: {
     *     // ... data to create a PhoneSell
     *   }
     * })
     * 
     */
    create<T extends PhoneSellCreateArgs>(args: SelectSubset<T, PhoneSellCreateArgs<ExtArgs>>): Prisma__PhoneSellClient<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhoneSells.
     * @param {PhoneSellCreateManyArgs} args - Arguments to create many PhoneSells.
     * @example
     * // Create many PhoneSells
     * const phoneSell = await prisma.phoneSell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneSellCreateManyArgs>(args?: SelectSubset<T, PhoneSellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneSells and returns the data saved in the database.
     * @param {PhoneSellCreateManyAndReturnArgs} args - Arguments to create many PhoneSells.
     * @example
     * // Create many PhoneSells
     * const phoneSell = await prisma.phoneSell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneSells and only return the `id`
     * const phoneSellWithIdOnly = await prisma.phoneSell.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneSellCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneSellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhoneSell.
     * @param {PhoneSellDeleteArgs} args - Arguments to delete one PhoneSell.
     * @example
     * // Delete one PhoneSell
     * const PhoneSell = await prisma.phoneSell.delete({
     *   where: {
     *     // ... filter to delete one PhoneSell
     *   }
     * })
     * 
     */
    delete<T extends PhoneSellDeleteArgs>(args: SelectSubset<T, PhoneSellDeleteArgs<ExtArgs>>): Prisma__PhoneSellClient<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhoneSell.
     * @param {PhoneSellUpdateArgs} args - Arguments to update one PhoneSell.
     * @example
     * // Update one PhoneSell
     * const phoneSell = await prisma.phoneSell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneSellUpdateArgs>(args: SelectSubset<T, PhoneSellUpdateArgs<ExtArgs>>): Prisma__PhoneSellClient<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhoneSells.
     * @param {PhoneSellDeleteManyArgs} args - Arguments to filter PhoneSells to delete.
     * @example
     * // Delete a few PhoneSells
     * const { count } = await prisma.phoneSell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneSellDeleteManyArgs>(args?: SelectSubset<T, PhoneSellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneSells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneSells
     * const phoneSell = await prisma.phoneSell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneSellUpdateManyArgs>(args: SelectSubset<T, PhoneSellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneSells and returns the data updated in the database.
     * @param {PhoneSellUpdateManyAndReturnArgs} args - Arguments to update many PhoneSells.
     * @example
     * // Update many PhoneSells
     * const phoneSell = await prisma.phoneSell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhoneSells and only return the `id`
     * const phoneSellWithIdOnly = await prisma.phoneSell.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhoneSellUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneSellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhoneSell.
     * @param {PhoneSellUpsertArgs} args - Arguments to update or create a PhoneSell.
     * @example
     * // Update or create a PhoneSell
     * const phoneSell = await prisma.phoneSell.upsert({
     *   create: {
     *     // ... data to create a PhoneSell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneSell we want to update
     *   }
     * })
     */
    upsert<T extends PhoneSellUpsertArgs>(args: SelectSubset<T, PhoneSellUpsertArgs<ExtArgs>>): Prisma__PhoneSellClient<$Result.GetResult<Prisma.$PhoneSellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhoneSells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSellCountArgs} args - Arguments to filter PhoneSells to count.
     * @example
     * // Count the number of PhoneSells
     * const count = await prisma.phoneSell.count({
     *   where: {
     *     // ... the filter for the PhoneSells we want to count
     *   }
     * })
    **/
    count<T extends PhoneSellCountArgs>(
      args?: Subset<T, PhoneSellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneSellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneSell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhoneSellAggregateArgs>(args: Subset<T, PhoneSellAggregateArgs>): Prisma.PrismaPromise<GetPhoneSellAggregateType<T>>

    /**
     * Group by PhoneSell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSellGroupByArgs} args - Group by arguments.
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
      T extends PhoneSellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneSellGroupByArgs['orderBy'] }
        : { orderBy?: PhoneSellGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhoneSellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneSellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneSell model
   */
  readonly fields: PhoneSellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneSell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneSellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PhoneSell model
   */
  interface PhoneSellFieldRefs {
    readonly id: FieldRef<"PhoneSell", 'Int'>
    readonly marka: FieldRef<"PhoneSell", 'String'>
    readonly model: FieldRef<"PhoneSell", 'String'>
    readonly storage: FieldRef<"PhoneSell", 'String'>
    readonly yurtici: FieldRef<"PhoneSell", 'String'>
    readonly passport: FieldRef<"PhoneSell", 'String'>
    readonly answers: FieldRef<"PhoneSell", 'Json'>
    readonly price: FieldRef<"PhoneSell", 'Float'>
    readonly firstName: FieldRef<"PhoneSell", 'String'>
    readonly lastName: FieldRef<"PhoneSell", 'String'>
    readonly email: FieldRef<"PhoneSell", 'String'>
    readonly phoneNumber: FieldRef<"PhoneSell", 'String'>
    readonly tcNumber: FieldRef<"PhoneSell", 'String'>
    readonly city: FieldRef<"PhoneSell", 'String'>
    readonly district: FieldRef<"PhoneSell", 'String'>
    readonly address: FieldRef<"PhoneSell", 'String'>
    readonly ibanName: FieldRef<"PhoneSell", 'String'>
    readonly ibanSurname: FieldRef<"PhoneSell", 'String'>
    readonly ibanNumber: FieldRef<"PhoneSell", 'String'>
    readonly status: FieldRef<"PhoneSell", 'String'>
    readonly createdAt: FieldRef<"PhoneSell", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneSell findUnique
   */
  export type PhoneSellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * Filter, which PhoneSell to fetch.
     */
    where: PhoneSellWhereUniqueInput
  }

  /**
   * PhoneSell findUniqueOrThrow
   */
  export type PhoneSellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * Filter, which PhoneSell to fetch.
     */
    where: PhoneSellWhereUniqueInput
  }

  /**
   * PhoneSell findFirst
   */
  export type PhoneSellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * Filter, which PhoneSell to fetch.
     */
    where?: PhoneSellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneSells to fetch.
     */
    orderBy?: PhoneSellOrderByWithRelationInput | PhoneSellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneSells.
     */
    cursor?: PhoneSellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneSells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneSells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneSells.
     */
    distinct?: PhoneSellScalarFieldEnum | PhoneSellScalarFieldEnum[]
  }

  /**
   * PhoneSell findFirstOrThrow
   */
  export type PhoneSellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * Filter, which PhoneSell to fetch.
     */
    where?: PhoneSellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneSells to fetch.
     */
    orderBy?: PhoneSellOrderByWithRelationInput | PhoneSellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneSells.
     */
    cursor?: PhoneSellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneSells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneSells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneSells.
     */
    distinct?: PhoneSellScalarFieldEnum | PhoneSellScalarFieldEnum[]
  }

  /**
   * PhoneSell findMany
   */
  export type PhoneSellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * Filter, which PhoneSells to fetch.
     */
    where?: PhoneSellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneSells to fetch.
     */
    orderBy?: PhoneSellOrderByWithRelationInput | PhoneSellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneSells.
     */
    cursor?: PhoneSellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneSells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneSells.
     */
    skip?: number
    distinct?: PhoneSellScalarFieldEnum | PhoneSellScalarFieldEnum[]
  }

  /**
   * PhoneSell create
   */
  export type PhoneSellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * The data needed to create a PhoneSell.
     */
    data?: XOR<PhoneSellCreateInput, PhoneSellUncheckedCreateInput>
  }

  /**
   * PhoneSell createMany
   */
  export type PhoneSellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneSells.
     */
    data: PhoneSellCreateManyInput | PhoneSellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneSell createManyAndReturn
   */
  export type PhoneSellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * The data used to create many PhoneSells.
     */
    data: PhoneSellCreateManyInput | PhoneSellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneSell update
   */
  export type PhoneSellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * The data needed to update a PhoneSell.
     */
    data: XOR<PhoneSellUpdateInput, PhoneSellUncheckedUpdateInput>
    /**
     * Choose, which PhoneSell to update.
     */
    where: PhoneSellWhereUniqueInput
  }

  /**
   * PhoneSell updateMany
   */
  export type PhoneSellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneSells.
     */
    data: XOR<PhoneSellUpdateManyMutationInput, PhoneSellUncheckedUpdateManyInput>
    /**
     * Filter which PhoneSells to update
     */
    where?: PhoneSellWhereInput
    /**
     * Limit how many PhoneSells to update.
     */
    limit?: number
  }

  /**
   * PhoneSell updateManyAndReturn
   */
  export type PhoneSellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * The data used to update PhoneSells.
     */
    data: XOR<PhoneSellUpdateManyMutationInput, PhoneSellUncheckedUpdateManyInput>
    /**
     * Filter which PhoneSells to update
     */
    where?: PhoneSellWhereInput
    /**
     * Limit how many PhoneSells to update.
     */
    limit?: number
  }

  /**
   * PhoneSell upsert
   */
  export type PhoneSellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * The filter to search for the PhoneSell to update in case it exists.
     */
    where: PhoneSellWhereUniqueInput
    /**
     * In case the PhoneSell found by the `where` argument doesn't exist, create a new PhoneSell with this data.
     */
    create: XOR<PhoneSellCreateInput, PhoneSellUncheckedCreateInput>
    /**
     * In case the PhoneSell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneSellUpdateInput, PhoneSellUncheckedUpdateInput>
  }

  /**
   * PhoneSell delete
   */
  export type PhoneSellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
    /**
     * Filter which PhoneSell to delete.
     */
    where: PhoneSellWhereUniqueInput
  }

  /**
   * PhoneSell deleteMany
   */
  export type PhoneSellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneSells to delete
     */
    where?: PhoneSellWhereInput
    /**
     * Limit how many PhoneSells to delete.
     */
    limit?: number
  }

  /**
   * PhoneSell without action
   */
  export type PhoneSellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSell
     */
    select?: PhoneSellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneSell
     */
    omit?: PhoneSellOmit<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    konu: string | null
    not: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    konu: string | null
    not: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    konu: number
    not: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    konu?: true
    not?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    konu?: true
    not?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    konu?: true
    not?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    konu: string | null
    not: string | null
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    konu?: boolean
    not?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    konu?: boolean
    not?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    konu?: boolean
    not?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    konu?: boolean
    not?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "konu" | "not", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      konu: string | null
      not: string | null
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly konu: FieldRef<"Contact", 'String'>
    readonly not: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data?: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model Ayarlar
   */

  export type AggregateAyarlar = {
    _count: AyarlarCountAggregateOutputType | null
    _avg: AyarlarAvgAggregateOutputType | null
    _sum: AyarlarSumAggregateOutputType | null
    _min: AyarlarMinAggregateOutputType | null
    _max: AyarlarMaxAggregateOutputType | null
  }

  export type AyarlarAvgAggregateOutputType = {
    id: number | null
    taksit: number | null
  }

  export type AyarlarSumAggregateOutputType = {
    id: number | null
    taksit: number | null
  }

  export type AyarlarMinAggregateOutputType = {
    id: number | null
    taksit: number | null
  }

  export type AyarlarMaxAggregateOutputType = {
    id: number | null
    taksit: number | null
  }

  export type AyarlarCountAggregateOutputType = {
    id: number
    taksit: number
    banner: number
    settings: number
    _all: number
  }


  export type AyarlarAvgAggregateInputType = {
    id?: true
    taksit?: true
  }

  export type AyarlarSumAggregateInputType = {
    id?: true
    taksit?: true
  }

  export type AyarlarMinAggregateInputType = {
    id?: true
    taksit?: true
  }

  export type AyarlarMaxAggregateInputType = {
    id?: true
    taksit?: true
  }

  export type AyarlarCountAggregateInputType = {
    id?: true
    taksit?: true
    banner?: true
    settings?: true
    _all?: true
  }

  export type AyarlarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayarlar to aggregate.
     */
    where?: AyarlarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayarlars to fetch.
     */
    orderBy?: AyarlarOrderByWithRelationInput | AyarlarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AyarlarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayarlars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayarlars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ayarlars
    **/
    _count?: true | AyarlarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AyarlarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AyarlarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AyarlarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AyarlarMaxAggregateInputType
  }

  export type GetAyarlarAggregateType<T extends AyarlarAggregateArgs> = {
        [P in keyof T & keyof AggregateAyarlar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAyarlar[P]>
      : GetScalarType<T[P], AggregateAyarlar[P]>
  }




  export type AyarlarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyarlarWhereInput
    orderBy?: AyarlarOrderByWithAggregationInput | AyarlarOrderByWithAggregationInput[]
    by: AyarlarScalarFieldEnum[] | AyarlarScalarFieldEnum
    having?: AyarlarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AyarlarCountAggregateInputType | true
    _avg?: AyarlarAvgAggregateInputType
    _sum?: AyarlarSumAggregateInputType
    _min?: AyarlarMinAggregateInputType
    _max?: AyarlarMaxAggregateInputType
  }

  export type AyarlarGroupByOutputType = {
    id: number
    taksit: number | null
    banner: JsonValue | null
    settings: JsonValue | null
    _count: AyarlarCountAggregateOutputType | null
    _avg: AyarlarAvgAggregateOutputType | null
    _sum: AyarlarSumAggregateOutputType | null
    _min: AyarlarMinAggregateOutputType | null
    _max: AyarlarMaxAggregateOutputType | null
  }

  type GetAyarlarGroupByPayload<T extends AyarlarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AyarlarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AyarlarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AyarlarGroupByOutputType[P]>
            : GetScalarType<T[P], AyarlarGroupByOutputType[P]>
        }
      >
    >


  export type AyarlarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taksit?: boolean
    banner?: boolean
    settings?: boolean
  }, ExtArgs["result"]["ayarlar"]>

  export type AyarlarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taksit?: boolean
    banner?: boolean
    settings?: boolean
  }, ExtArgs["result"]["ayarlar"]>

  export type AyarlarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taksit?: boolean
    banner?: boolean
    settings?: boolean
  }, ExtArgs["result"]["ayarlar"]>

  export type AyarlarSelectScalar = {
    id?: boolean
    taksit?: boolean
    banner?: boolean
    settings?: boolean
  }

  export type AyarlarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taksit" | "banner" | "settings", ExtArgs["result"]["ayarlar"]>

  export type $AyarlarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ayarlar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taksit: number | null
      banner: Prisma.JsonValue | null
      settings: Prisma.JsonValue | null
    }, ExtArgs["result"]["ayarlar"]>
    composites: {}
  }

  type AyarlarGetPayload<S extends boolean | null | undefined | AyarlarDefaultArgs> = $Result.GetResult<Prisma.$AyarlarPayload, S>

  type AyarlarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AyarlarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AyarlarCountAggregateInputType | true
    }

  export interface AyarlarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ayarlar'], meta: { name: 'Ayarlar' } }
    /**
     * Find zero or one Ayarlar that matches the filter.
     * @param {AyarlarFindUniqueArgs} args - Arguments to find a Ayarlar
     * @example
     * // Get one Ayarlar
     * const ayarlar = await prisma.ayarlar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AyarlarFindUniqueArgs>(args: SelectSubset<T, AyarlarFindUniqueArgs<ExtArgs>>): Prisma__AyarlarClient<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ayarlar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AyarlarFindUniqueOrThrowArgs} args - Arguments to find a Ayarlar
     * @example
     * // Get one Ayarlar
     * const ayarlar = await prisma.ayarlar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AyarlarFindUniqueOrThrowArgs>(args: SelectSubset<T, AyarlarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AyarlarClient<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayarlar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyarlarFindFirstArgs} args - Arguments to find a Ayarlar
     * @example
     * // Get one Ayarlar
     * const ayarlar = await prisma.ayarlar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AyarlarFindFirstArgs>(args?: SelectSubset<T, AyarlarFindFirstArgs<ExtArgs>>): Prisma__AyarlarClient<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayarlar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyarlarFindFirstOrThrowArgs} args - Arguments to find a Ayarlar
     * @example
     * // Get one Ayarlar
     * const ayarlar = await prisma.ayarlar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AyarlarFindFirstOrThrowArgs>(args?: SelectSubset<T, AyarlarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AyarlarClient<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ayarlars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyarlarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ayarlars
     * const ayarlars = await prisma.ayarlar.findMany()
     * 
     * // Get first 10 Ayarlars
     * const ayarlars = await prisma.ayarlar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ayarlarWithIdOnly = await prisma.ayarlar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AyarlarFindManyArgs>(args?: SelectSubset<T, AyarlarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ayarlar.
     * @param {AyarlarCreateArgs} args - Arguments to create a Ayarlar.
     * @example
     * // Create one Ayarlar
     * const Ayarlar = await prisma.ayarlar.create({
     *   data: {
     *     // ... data to create a Ayarlar
     *   }
     * })
     * 
     */
    create<T extends AyarlarCreateArgs>(args: SelectSubset<T, AyarlarCreateArgs<ExtArgs>>): Prisma__AyarlarClient<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ayarlars.
     * @param {AyarlarCreateManyArgs} args - Arguments to create many Ayarlars.
     * @example
     * // Create many Ayarlars
     * const ayarlar = await prisma.ayarlar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AyarlarCreateManyArgs>(args?: SelectSubset<T, AyarlarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ayarlars and returns the data saved in the database.
     * @param {AyarlarCreateManyAndReturnArgs} args - Arguments to create many Ayarlars.
     * @example
     * // Create many Ayarlars
     * const ayarlar = await prisma.ayarlar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ayarlars and only return the `id`
     * const ayarlarWithIdOnly = await prisma.ayarlar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AyarlarCreateManyAndReturnArgs>(args?: SelectSubset<T, AyarlarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ayarlar.
     * @param {AyarlarDeleteArgs} args - Arguments to delete one Ayarlar.
     * @example
     * // Delete one Ayarlar
     * const Ayarlar = await prisma.ayarlar.delete({
     *   where: {
     *     // ... filter to delete one Ayarlar
     *   }
     * })
     * 
     */
    delete<T extends AyarlarDeleteArgs>(args: SelectSubset<T, AyarlarDeleteArgs<ExtArgs>>): Prisma__AyarlarClient<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ayarlar.
     * @param {AyarlarUpdateArgs} args - Arguments to update one Ayarlar.
     * @example
     * // Update one Ayarlar
     * const ayarlar = await prisma.ayarlar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AyarlarUpdateArgs>(args: SelectSubset<T, AyarlarUpdateArgs<ExtArgs>>): Prisma__AyarlarClient<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ayarlars.
     * @param {AyarlarDeleteManyArgs} args - Arguments to filter Ayarlars to delete.
     * @example
     * // Delete a few Ayarlars
     * const { count } = await prisma.ayarlar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AyarlarDeleteManyArgs>(args?: SelectSubset<T, AyarlarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayarlars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyarlarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ayarlars
     * const ayarlar = await prisma.ayarlar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AyarlarUpdateManyArgs>(args: SelectSubset<T, AyarlarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayarlars and returns the data updated in the database.
     * @param {AyarlarUpdateManyAndReturnArgs} args - Arguments to update many Ayarlars.
     * @example
     * // Update many Ayarlars
     * const ayarlar = await prisma.ayarlar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ayarlars and only return the `id`
     * const ayarlarWithIdOnly = await prisma.ayarlar.updateManyAndReturn({
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
    updateManyAndReturn<T extends AyarlarUpdateManyAndReturnArgs>(args: SelectSubset<T, AyarlarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ayarlar.
     * @param {AyarlarUpsertArgs} args - Arguments to update or create a Ayarlar.
     * @example
     * // Update or create a Ayarlar
     * const ayarlar = await prisma.ayarlar.upsert({
     *   create: {
     *     // ... data to create a Ayarlar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ayarlar we want to update
     *   }
     * })
     */
    upsert<T extends AyarlarUpsertArgs>(args: SelectSubset<T, AyarlarUpsertArgs<ExtArgs>>): Prisma__AyarlarClient<$Result.GetResult<Prisma.$AyarlarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ayarlars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyarlarCountArgs} args - Arguments to filter Ayarlars to count.
     * @example
     * // Count the number of Ayarlars
     * const count = await prisma.ayarlar.count({
     *   where: {
     *     // ... the filter for the Ayarlars we want to count
     *   }
     * })
    **/
    count<T extends AyarlarCountArgs>(
      args?: Subset<T, AyarlarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AyarlarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ayarlar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyarlarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AyarlarAggregateArgs>(args: Subset<T, AyarlarAggregateArgs>): Prisma.PrismaPromise<GetAyarlarAggregateType<T>>

    /**
     * Group by Ayarlar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyarlarGroupByArgs} args - Group by arguments.
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
      T extends AyarlarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AyarlarGroupByArgs['orderBy'] }
        : { orderBy?: AyarlarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AyarlarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAyarlarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ayarlar model
   */
  readonly fields: AyarlarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ayarlar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AyarlarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Ayarlar model
   */
  interface AyarlarFieldRefs {
    readonly id: FieldRef<"Ayarlar", 'Int'>
    readonly taksit: FieldRef<"Ayarlar", 'Int'>
    readonly banner: FieldRef<"Ayarlar", 'Json'>
    readonly settings: FieldRef<"Ayarlar", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Ayarlar findUnique
   */
  export type AyarlarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * Filter, which Ayarlar to fetch.
     */
    where: AyarlarWhereUniqueInput
  }

  /**
   * Ayarlar findUniqueOrThrow
   */
  export type AyarlarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * Filter, which Ayarlar to fetch.
     */
    where: AyarlarWhereUniqueInput
  }

  /**
   * Ayarlar findFirst
   */
  export type AyarlarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * Filter, which Ayarlar to fetch.
     */
    where?: AyarlarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayarlars to fetch.
     */
    orderBy?: AyarlarOrderByWithRelationInput | AyarlarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayarlars.
     */
    cursor?: AyarlarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayarlars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayarlars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayarlars.
     */
    distinct?: AyarlarScalarFieldEnum | AyarlarScalarFieldEnum[]
  }

  /**
   * Ayarlar findFirstOrThrow
   */
  export type AyarlarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * Filter, which Ayarlar to fetch.
     */
    where?: AyarlarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayarlars to fetch.
     */
    orderBy?: AyarlarOrderByWithRelationInput | AyarlarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayarlars.
     */
    cursor?: AyarlarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayarlars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayarlars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayarlars.
     */
    distinct?: AyarlarScalarFieldEnum | AyarlarScalarFieldEnum[]
  }

  /**
   * Ayarlar findMany
   */
  export type AyarlarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * Filter, which Ayarlars to fetch.
     */
    where?: AyarlarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayarlars to fetch.
     */
    orderBy?: AyarlarOrderByWithRelationInput | AyarlarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ayarlars.
     */
    cursor?: AyarlarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayarlars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayarlars.
     */
    skip?: number
    distinct?: AyarlarScalarFieldEnum | AyarlarScalarFieldEnum[]
  }

  /**
   * Ayarlar create
   */
  export type AyarlarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * The data needed to create a Ayarlar.
     */
    data: XOR<AyarlarCreateInput, AyarlarUncheckedCreateInput>
  }

  /**
   * Ayarlar createMany
   */
  export type AyarlarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ayarlars.
     */
    data: AyarlarCreateManyInput | AyarlarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ayarlar createManyAndReturn
   */
  export type AyarlarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * The data used to create many Ayarlars.
     */
    data: AyarlarCreateManyInput | AyarlarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ayarlar update
   */
  export type AyarlarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * The data needed to update a Ayarlar.
     */
    data: XOR<AyarlarUpdateInput, AyarlarUncheckedUpdateInput>
    /**
     * Choose, which Ayarlar to update.
     */
    where: AyarlarWhereUniqueInput
  }

  /**
   * Ayarlar updateMany
   */
  export type AyarlarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ayarlars.
     */
    data: XOR<AyarlarUpdateManyMutationInput, AyarlarUncheckedUpdateManyInput>
    /**
     * Filter which Ayarlars to update
     */
    where?: AyarlarWhereInput
    /**
     * Limit how many Ayarlars to update.
     */
    limit?: number
  }

  /**
   * Ayarlar updateManyAndReturn
   */
  export type AyarlarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * The data used to update Ayarlars.
     */
    data: XOR<AyarlarUpdateManyMutationInput, AyarlarUncheckedUpdateManyInput>
    /**
     * Filter which Ayarlars to update
     */
    where?: AyarlarWhereInput
    /**
     * Limit how many Ayarlars to update.
     */
    limit?: number
  }

  /**
   * Ayarlar upsert
   */
  export type AyarlarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * The filter to search for the Ayarlar to update in case it exists.
     */
    where: AyarlarWhereUniqueInput
    /**
     * In case the Ayarlar found by the `where` argument doesn't exist, create a new Ayarlar with this data.
     */
    create: XOR<AyarlarCreateInput, AyarlarUncheckedCreateInput>
    /**
     * In case the Ayarlar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AyarlarUpdateInput, AyarlarUncheckedUpdateInput>
  }

  /**
   * Ayarlar delete
   */
  export type AyarlarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
    /**
     * Filter which Ayarlar to delete.
     */
    where: AyarlarWhereUniqueInput
  }

  /**
   * Ayarlar deleteMany
   */
  export type AyarlarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayarlars to delete
     */
    where?: AyarlarWhereInput
    /**
     * Limit how many Ayarlars to delete.
     */
    limit?: number
  }

  /**
   * Ayarlar without action
   */
  export type AyarlarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayarlar
     */
    select?: AyarlarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayarlar
     */
    omit?: AyarlarOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    code: 'code',
    emailVerified: 'emailVerified',
    tel: 'tel',
    identityNumber: 'identityNumber',
    Role: 'Role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BayiUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    tel: 'tel',
    password: 'password',
    code: 'code',
    emailVerified: 'emailVerified',
    firstTimeLogin: 'firstTimeLogin',
    identityNumber: 'identityNumber',
    magazaName: 'magazaName',
    sirketName: 'sirketName',
    sirketAdres: 'sirketAdres',
    vergiDairesi: 'vergiDairesi',
    vergiNo: 'vergiNo',
    iban: 'iban',
    ibanName: 'ibanName',
    adminOnay: 'adminOnay',
    vergiUrl: 'vergiUrl',
    ticaretSicilUrl: 'ticaretSicilUrl',
    sozlesmeUrl: 'sozlesmeUrl',
    imzaUrl: 'imzaUrl',
    kimlikUrl: 'kimlikUrl',
    score: 'score'
  };

  export type BayiUserScalarFieldEnum = (typeof BayiUserScalarFieldEnum)[keyof typeof BayiUserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    desc: 'desc',
    color: 'color',
    storage: 'storage',
    condition: 'condition',
    price: 'price',
    inprice: 'inprice',
    indirimsize: 'indirimsize',
    indirim: 'indirim',
    haftaurun: 'haftaurun',
    stock: 'stock',
    images: 'images',
    onclick: 'onclick',
    sells: 'sells',
    aksesuar: 'aksesuar',
    kargoTime: 'kargoTime',
    imei: 'imei',
    isActive: 'isActive',
    createdAt: 'createdAt',
    categoryId: 'categoryId',
    markaId: 'markaId',
    modelId: 'modelId',
    bayiUserId: 'bayiUserId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    is_active: 'is_active'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MarkaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    slug: 'slug',
    categoryId: 'categoryId'
  };

  export type MarkaScalarFieldEnum = (typeof MarkaScalarFieldEnum)[keyof typeof MarkaScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    bazFiyat: 'bazFiyat',
    color: 'color',
    storage: 'storage',
    markaId: 'markaId'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const AdressScalarFieldEnum: {
    id: 'id',
    adressName: 'adressName',
    name: 'name',
    lastname: 'lastname',
    identityNumber: 'identityNumber',
    tel: 'tel',
    adres: 'adres',
    postalCode: 'postalCode',
    city: 'city',
    district: 'district',
    category: 'category',
    firmaName: 'firmaName',
    vergiDairesi: 'vergiDairesi',
    vergiNo: 'vergiNo',
    efatura: 'efatura',
    userId: 'userId'
  };

  export type AdressScalarFieldEnum = (typeof AdressScalarFieldEnum)[keyof typeof AdressScalarFieldEnum]


  export const PhoneSellScalarFieldEnum: {
    id: 'id',
    marka: 'marka',
    model: 'model',
    storage: 'storage',
    yurtici: 'yurtici',
    passport: 'passport',
    answers: 'answers',
    price: 'price',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    tcNumber: 'tcNumber',
    city: 'city',
    district: 'district',
    address: 'address',
    ibanName: 'ibanName',
    ibanSurname: 'ibanSurname',
    ibanNumber: 'ibanNumber',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PhoneSellScalarFieldEnum = (typeof PhoneSellScalarFieldEnum)[keyof typeof PhoneSellScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    konu: 'konu',
    not: 'not'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const AyarlarScalarFieldEnum: {
    id: 'id',
    taksit: 'taksit',
    banner: 'banner',
    settings: 'settings'
  };

  export type AyarlarScalarFieldEnum = (typeof AyarlarScalarFieldEnum)[keyof typeof AyarlarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    code?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    tel?: StringNullableFilter<"User"> | string | null
    identityNumber?: StringNullableFilter<"User"> | string | null
    Role?: EnumRoleFilter<"User"> | $Enums.Role
    Adress?: AdressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    code?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    identityNumber?: SortOrderInput | SortOrder
    Role?: SortOrder
    Adress?: AdressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    code?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    tel?: StringNullableFilter<"User"> | string | null
    identityNumber?: StringNullableFilter<"User"> | string | null
    Role?: EnumRoleFilter<"User"> | $Enums.Role
    Adress?: AdressListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    code?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    identityNumber?: SortOrderInput | SortOrder
    Role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    code?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    tel?: StringNullableWithAggregatesFilter<"User"> | string | null
    identityNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    Role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type BayiUserWhereInput = {
    AND?: BayiUserWhereInput | BayiUserWhereInput[]
    OR?: BayiUserWhereInput[]
    NOT?: BayiUserWhereInput | BayiUserWhereInput[]
    id?: IntFilter<"BayiUser"> | number
    name?: StringNullableFilter<"BayiUser"> | string | null
    lastname?: StringNullableFilter<"BayiUser"> | string | null
    email?: StringFilter<"BayiUser"> | string
    tel?: StringNullableFilter<"BayiUser"> | string | null
    password?: StringFilter<"BayiUser"> | string
    code?: StringNullableFilter<"BayiUser"> | string | null
    emailVerified?: BoolNullableFilter<"BayiUser"> | boolean | null
    firstTimeLogin?: BoolNullableFilter<"BayiUser"> | boolean | null
    identityNumber?: StringNullableFilter<"BayiUser"> | string | null
    magazaName?: StringNullableFilter<"BayiUser"> | string | null
    sirketName?: StringNullableFilter<"BayiUser"> | string | null
    sirketAdres?: StringNullableFilter<"BayiUser"> | string | null
    vergiDairesi?: StringNullableFilter<"BayiUser"> | string | null
    vergiNo?: StringNullableFilter<"BayiUser"> | string | null
    iban?: StringNullableFilter<"BayiUser"> | string | null
    ibanName?: StringNullableFilter<"BayiUser"> | string | null
    adminOnay?: BoolNullableFilter<"BayiUser"> | boolean | null
    vergiUrl?: StringNullableFilter<"BayiUser"> | string | null
    ticaretSicilUrl?: StringNullableFilter<"BayiUser"> | string | null
    sozlesmeUrl?: StringNullableFilter<"BayiUser"> | string | null
    imzaUrl?: StringNullableFilter<"BayiUser"> | string | null
    kimlikUrl?: StringNullableFilter<"BayiUser"> | string | null
    score?: FloatNullableFilter<"BayiUser"> | number | null
    products?: ProductListRelationFilter
  }

  export type BayiUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    tel?: SortOrderInput | SortOrder
    password?: SortOrder
    code?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    firstTimeLogin?: SortOrderInput | SortOrder
    identityNumber?: SortOrderInput | SortOrder
    magazaName?: SortOrderInput | SortOrder
    sirketName?: SortOrderInput | SortOrder
    sirketAdres?: SortOrderInput | SortOrder
    vergiDairesi?: SortOrderInput | SortOrder
    vergiNo?: SortOrderInput | SortOrder
    iban?: SortOrderInput | SortOrder
    ibanName?: SortOrderInput | SortOrder
    adminOnay?: SortOrderInput | SortOrder
    vergiUrl?: SortOrderInput | SortOrder
    ticaretSicilUrl?: SortOrderInput | SortOrder
    sozlesmeUrl?: SortOrderInput | SortOrder
    imzaUrl?: SortOrderInput | SortOrder
    kimlikUrl?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type BayiUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: BayiUserWhereInput | BayiUserWhereInput[]
    OR?: BayiUserWhereInput[]
    NOT?: BayiUserWhereInput | BayiUserWhereInput[]
    name?: StringNullableFilter<"BayiUser"> | string | null
    lastname?: StringNullableFilter<"BayiUser"> | string | null
    tel?: StringNullableFilter<"BayiUser"> | string | null
    password?: StringFilter<"BayiUser"> | string
    code?: StringNullableFilter<"BayiUser"> | string | null
    emailVerified?: BoolNullableFilter<"BayiUser"> | boolean | null
    firstTimeLogin?: BoolNullableFilter<"BayiUser"> | boolean | null
    identityNumber?: StringNullableFilter<"BayiUser"> | string | null
    magazaName?: StringNullableFilter<"BayiUser"> | string | null
    sirketName?: StringNullableFilter<"BayiUser"> | string | null
    sirketAdres?: StringNullableFilter<"BayiUser"> | string | null
    vergiDairesi?: StringNullableFilter<"BayiUser"> | string | null
    vergiNo?: StringNullableFilter<"BayiUser"> | string | null
    iban?: StringNullableFilter<"BayiUser"> | string | null
    ibanName?: StringNullableFilter<"BayiUser"> | string | null
    adminOnay?: BoolNullableFilter<"BayiUser"> | boolean | null
    vergiUrl?: StringNullableFilter<"BayiUser"> | string | null
    ticaretSicilUrl?: StringNullableFilter<"BayiUser"> | string | null
    sozlesmeUrl?: StringNullableFilter<"BayiUser"> | string | null
    imzaUrl?: StringNullableFilter<"BayiUser"> | string | null
    kimlikUrl?: StringNullableFilter<"BayiUser"> | string | null
    score?: FloatNullableFilter<"BayiUser"> | number | null
    products?: ProductListRelationFilter
  }, "id" | "email">

  export type BayiUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    tel?: SortOrderInput | SortOrder
    password?: SortOrder
    code?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    firstTimeLogin?: SortOrderInput | SortOrder
    identityNumber?: SortOrderInput | SortOrder
    magazaName?: SortOrderInput | SortOrder
    sirketName?: SortOrderInput | SortOrder
    sirketAdres?: SortOrderInput | SortOrder
    vergiDairesi?: SortOrderInput | SortOrder
    vergiNo?: SortOrderInput | SortOrder
    iban?: SortOrderInput | SortOrder
    ibanName?: SortOrderInput | SortOrder
    adminOnay?: SortOrderInput | SortOrder
    vergiUrl?: SortOrderInput | SortOrder
    ticaretSicilUrl?: SortOrderInput | SortOrder
    sozlesmeUrl?: SortOrderInput | SortOrder
    imzaUrl?: SortOrderInput | SortOrder
    kimlikUrl?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    _count?: BayiUserCountOrderByAggregateInput
    _avg?: BayiUserAvgOrderByAggregateInput
    _max?: BayiUserMaxOrderByAggregateInput
    _min?: BayiUserMinOrderByAggregateInput
    _sum?: BayiUserSumOrderByAggregateInput
  }

  export type BayiUserScalarWhereWithAggregatesInput = {
    AND?: BayiUserScalarWhereWithAggregatesInput | BayiUserScalarWhereWithAggregatesInput[]
    OR?: BayiUserScalarWhereWithAggregatesInput[]
    NOT?: BayiUserScalarWhereWithAggregatesInput | BayiUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BayiUser"> | number
    name?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    email?: StringWithAggregatesFilter<"BayiUser"> | string
    tel?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    password?: StringWithAggregatesFilter<"BayiUser"> | string
    code?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    emailVerified?: BoolNullableWithAggregatesFilter<"BayiUser"> | boolean | null
    firstTimeLogin?: BoolNullableWithAggregatesFilter<"BayiUser"> | boolean | null
    identityNumber?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    magazaName?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    sirketName?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    sirketAdres?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    vergiDairesi?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    vergiNo?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    iban?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    ibanName?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    adminOnay?: BoolNullableWithAggregatesFilter<"BayiUser"> | boolean | null
    vergiUrl?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    ticaretSicilUrl?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    sozlesmeUrl?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    imzaUrl?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    kimlikUrl?: StringNullableWithAggregatesFilter<"BayiUser"> | string | null
    score?: FloatNullableWithAggregatesFilter<"BayiUser"> | number | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    desc?: StringNullableFilter<"Product"> | string | null
    color?: StringNullableFilter<"Product"> | string | null
    storage?: StringNullableFilter<"Product"> | string | null
    condition?: StringNullableFilter<"Product"> | string | null
    price?: FloatNullableFilter<"Product"> | number | null
    inprice?: FloatNullableFilter<"Product"> | number | null
    indirimsize?: StringNullableFilter<"Product"> | string | null
    indirim?: BoolNullableFilter<"Product"> | boolean | null
    haftaurun?: BoolNullableFilter<"Product"> | boolean | null
    stock?: IntNullableFilter<"Product"> | number | null
    images?: JsonNullableFilter<"Product">
    onclick?: IntNullableFilter<"Product"> | number | null
    sells?: IntNullableFilter<"Product"> | number | null
    aksesuar?: BoolNullableFilter<"Product"> | boolean | null
    kargoTime?: StringNullableFilter<"Product"> | string | null
    imei?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    markaId?: IntNullableFilter<"Product"> | number | null
    modelId?: IntNullableFilter<"Product"> | number | null
    bayiUserId?: IntNullableFilter<"Product"> | number | null
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Marka?: XOR<MarkaNullableScalarRelationFilter, MarkaWhereInput> | null
    Model?: XOR<ModelNullableScalarRelationFilter, ModelWhereInput> | null
    BayiUser?: XOR<BayiUserNullableScalarRelationFilter, BayiUserWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    desc?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    storage?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    inprice?: SortOrderInput | SortOrder
    indirimsize?: SortOrderInput | SortOrder
    indirim?: SortOrderInput | SortOrder
    haftaurun?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    onclick?: SortOrderInput | SortOrder
    sells?: SortOrderInput | SortOrder
    aksesuar?: SortOrderInput | SortOrder
    kargoTime?: SortOrderInput | SortOrder
    imei?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    markaId?: SortOrderInput | SortOrder
    modelId?: SortOrderInput | SortOrder
    bayiUserId?: SortOrderInput | SortOrder
    Category?: CategoryOrderByWithRelationInput
    Marka?: MarkaOrderByWithRelationInput
    Model?: ModelOrderByWithRelationInput
    BayiUser?: BayiUserOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    desc?: StringNullableFilter<"Product"> | string | null
    color?: StringNullableFilter<"Product"> | string | null
    storage?: StringNullableFilter<"Product"> | string | null
    condition?: StringNullableFilter<"Product"> | string | null
    price?: FloatNullableFilter<"Product"> | number | null
    inprice?: FloatNullableFilter<"Product"> | number | null
    indirimsize?: StringNullableFilter<"Product"> | string | null
    indirim?: BoolNullableFilter<"Product"> | boolean | null
    haftaurun?: BoolNullableFilter<"Product"> | boolean | null
    stock?: IntNullableFilter<"Product"> | number | null
    images?: JsonNullableFilter<"Product">
    onclick?: IntNullableFilter<"Product"> | number | null
    sells?: IntNullableFilter<"Product"> | number | null
    aksesuar?: BoolNullableFilter<"Product"> | boolean | null
    kargoTime?: StringNullableFilter<"Product"> | string | null
    imei?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    markaId?: IntNullableFilter<"Product"> | number | null
    modelId?: IntNullableFilter<"Product"> | number | null
    bayiUserId?: IntNullableFilter<"Product"> | number | null
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Marka?: XOR<MarkaNullableScalarRelationFilter, MarkaWhereInput> | null
    Model?: XOR<ModelNullableScalarRelationFilter, ModelWhereInput> | null
    BayiUser?: XOR<BayiUserNullableScalarRelationFilter, BayiUserWhereInput> | null
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    desc?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    storage?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    inprice?: SortOrderInput | SortOrder
    indirimsize?: SortOrderInput | SortOrder
    indirim?: SortOrderInput | SortOrder
    haftaurun?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    onclick?: SortOrderInput | SortOrder
    sells?: SortOrderInput | SortOrder
    aksesuar?: SortOrderInput | SortOrder
    kargoTime?: SortOrderInput | SortOrder
    imei?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    markaId?: SortOrderInput | SortOrder
    modelId?: SortOrderInput | SortOrder
    bayiUserId?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    desc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    color?: StringNullableWithAggregatesFilter<"Product"> | string | null
    storage?: StringNullableWithAggregatesFilter<"Product"> | string | null
    condition?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    inprice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    indirimsize?: StringNullableWithAggregatesFilter<"Product"> | string | null
    indirim?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    haftaurun?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    stock?: IntNullableWithAggregatesFilter<"Product"> | number | null
    images?: JsonNullableWithAggregatesFilter<"Product">
    onclick?: IntNullableWithAggregatesFilter<"Product"> | number | null
    sells?: IntNullableWithAggregatesFilter<"Product"> | number | null
    aksesuar?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    kargoTime?: StringNullableWithAggregatesFilter<"Product"> | string | null
    imei?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    categoryId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    markaId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    modelId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    bayiUserId?: IntNullableWithAggregatesFilter<"Product"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringNullableFilter<"Category"> | string | null
    slug?: StringNullableFilter<"Category"> | string | null
    is_active?: BoolNullableFilter<"Category"> | boolean | null
    Product?: ProductListRelationFilter
    Marka?: MarkaListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    Product?: ProductOrderByRelationAggregateInput
    Marka?: MarkaOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringNullableFilter<"Category"> | string | null
    is_active?: BoolNullableFilter<"Category"> | boolean | null
    Product?: ProductListRelationFilter
    Marka?: MarkaListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringNullableWithAggregatesFilter<"Category"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Category"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"Category"> | boolean | null
  }

  export type MarkaWhereInput = {
    AND?: MarkaWhereInput | MarkaWhereInput[]
    OR?: MarkaWhereInput[]
    NOT?: MarkaWhereInput | MarkaWhereInput[]
    id?: IntFilter<"Marka"> | number
    name?: StringNullableFilter<"Marka"> | string | null
    label?: StringNullableFilter<"Marka"> | string | null
    slug?: StringNullableFilter<"Marka"> | string | null
    categoryId?: IntNullableFilter<"Marka"> | number | null
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Product?: ProductListRelationFilter
    Model?: ModelListRelationFilter
  }

  export type MarkaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    Category?: CategoryOrderByWithRelationInput
    Product?: ProductOrderByRelationAggregateInput
    Model?: ModelOrderByRelationAggregateInput
  }

  export type MarkaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarkaWhereInput | MarkaWhereInput[]
    OR?: MarkaWhereInput[]
    NOT?: MarkaWhereInput | MarkaWhereInput[]
    name?: StringNullableFilter<"Marka"> | string | null
    label?: StringNullableFilter<"Marka"> | string | null
    slug?: StringNullableFilter<"Marka"> | string | null
    categoryId?: IntNullableFilter<"Marka"> | number | null
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Product?: ProductListRelationFilter
    Model?: ModelListRelationFilter
  }, "id">

  export type MarkaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: MarkaCountOrderByAggregateInput
    _avg?: MarkaAvgOrderByAggregateInput
    _max?: MarkaMaxOrderByAggregateInput
    _min?: MarkaMinOrderByAggregateInput
    _sum?: MarkaSumOrderByAggregateInput
  }

  export type MarkaScalarWhereWithAggregatesInput = {
    AND?: MarkaScalarWhereWithAggregatesInput | MarkaScalarWhereWithAggregatesInput[]
    OR?: MarkaScalarWhereWithAggregatesInput[]
    NOT?: MarkaScalarWhereWithAggregatesInput | MarkaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Marka"> | number
    name?: StringNullableWithAggregatesFilter<"Marka"> | string | null
    label?: StringNullableWithAggregatesFilter<"Marka"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Marka"> | string | null
    categoryId?: IntNullableWithAggregatesFilter<"Marka"> | number | null
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: IntFilter<"Model"> | number
    name?: StringNullableFilter<"Model"> | string | null
    slug?: StringNullableFilter<"Model"> | string | null
    bazFiyat?: FloatNullableFilter<"Model"> | number | null
    color?: JsonNullableFilter<"Model">
    storage?: JsonNullableFilter<"Model">
    markaId?: IntNullableFilter<"Model"> | number | null
    products?: ProductListRelationFilter
    Marka?: XOR<MarkaNullableScalarRelationFilter, MarkaWhereInput> | null
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    bazFiyat?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    storage?: SortOrderInput | SortOrder
    markaId?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
    Marka?: MarkaOrderByWithRelationInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    name?: StringNullableFilter<"Model"> | string | null
    bazFiyat?: FloatNullableFilter<"Model"> | number | null
    color?: JsonNullableFilter<"Model">
    storage?: JsonNullableFilter<"Model">
    markaId?: IntNullableFilter<"Model"> | number | null
    products?: ProductListRelationFilter
    Marka?: XOR<MarkaNullableScalarRelationFilter, MarkaWhereInput> | null
  }, "id" | "slug">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    bazFiyat?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    storage?: SortOrderInput | SortOrder
    markaId?: SortOrderInput | SortOrder
    _count?: ModelCountOrderByAggregateInput
    _avg?: ModelAvgOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
    _sum?: ModelSumOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Model"> | number
    name?: StringNullableWithAggregatesFilter<"Model"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Model"> | string | null
    bazFiyat?: FloatNullableWithAggregatesFilter<"Model"> | number | null
    color?: JsonNullableWithAggregatesFilter<"Model">
    storage?: JsonNullableWithAggregatesFilter<"Model">
    markaId?: IntNullableWithAggregatesFilter<"Model"> | number | null
  }

  export type AdressWhereInput = {
    AND?: AdressWhereInput | AdressWhereInput[]
    OR?: AdressWhereInput[]
    NOT?: AdressWhereInput | AdressWhereInput[]
    id?: IntFilter<"Adress"> | number
    adressName?: StringNullableFilter<"Adress"> | string | null
    name?: StringNullableFilter<"Adress"> | string | null
    lastname?: StringNullableFilter<"Adress"> | string | null
    identityNumber?: StringNullableFilter<"Adress"> | string | null
    tel?: StringNullableFilter<"Adress"> | string | null
    adres?: StringNullableFilter<"Adress"> | string | null
    postalCode?: StringNullableFilter<"Adress"> | string | null
    city?: StringNullableFilter<"Adress"> | string | null
    district?: StringNullableFilter<"Adress"> | string | null
    category?: StringNullableFilter<"Adress"> | string | null
    firmaName?: StringNullableFilter<"Adress"> | string | null
    vergiDairesi?: StringNullableFilter<"Adress"> | string | null
    vergiNo?: StringNullableFilter<"Adress"> | string | null
    efatura?: BoolNullableFilter<"Adress"> | boolean | null
    userId?: IntNullableFilter<"Adress"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AdressOrderByWithRelationInput = {
    id?: SortOrder
    adressName?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    identityNumber?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    adres?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    firmaName?: SortOrderInput | SortOrder
    vergiDairesi?: SortOrderInput | SortOrder
    vergiNo?: SortOrderInput | SortOrder
    efatura?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AdressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdressWhereInput | AdressWhereInput[]
    OR?: AdressWhereInput[]
    NOT?: AdressWhereInput | AdressWhereInput[]
    adressName?: StringNullableFilter<"Adress"> | string | null
    name?: StringNullableFilter<"Adress"> | string | null
    lastname?: StringNullableFilter<"Adress"> | string | null
    identityNumber?: StringNullableFilter<"Adress"> | string | null
    tel?: StringNullableFilter<"Adress"> | string | null
    adres?: StringNullableFilter<"Adress"> | string | null
    postalCode?: StringNullableFilter<"Adress"> | string | null
    city?: StringNullableFilter<"Adress"> | string | null
    district?: StringNullableFilter<"Adress"> | string | null
    category?: StringNullableFilter<"Adress"> | string | null
    firmaName?: StringNullableFilter<"Adress"> | string | null
    vergiDairesi?: StringNullableFilter<"Adress"> | string | null
    vergiNo?: StringNullableFilter<"Adress"> | string | null
    efatura?: BoolNullableFilter<"Adress"> | boolean | null
    userId?: IntNullableFilter<"Adress"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AdressOrderByWithAggregationInput = {
    id?: SortOrder
    adressName?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    identityNumber?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    adres?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    firmaName?: SortOrderInput | SortOrder
    vergiDairesi?: SortOrderInput | SortOrder
    vergiNo?: SortOrderInput | SortOrder
    efatura?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AdressCountOrderByAggregateInput
    _avg?: AdressAvgOrderByAggregateInput
    _max?: AdressMaxOrderByAggregateInput
    _min?: AdressMinOrderByAggregateInput
    _sum?: AdressSumOrderByAggregateInput
  }

  export type AdressScalarWhereWithAggregatesInput = {
    AND?: AdressScalarWhereWithAggregatesInput | AdressScalarWhereWithAggregatesInput[]
    OR?: AdressScalarWhereWithAggregatesInput[]
    NOT?: AdressScalarWhereWithAggregatesInput | AdressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Adress"> | number
    adressName?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    name?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    identityNumber?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    tel?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    adres?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    city?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    district?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    category?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    firmaName?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    vergiDairesi?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    vergiNo?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    efatura?: BoolNullableWithAggregatesFilter<"Adress"> | boolean | null
    userId?: IntNullableWithAggregatesFilter<"Adress"> | number | null
  }

  export type PhoneSellWhereInput = {
    AND?: PhoneSellWhereInput | PhoneSellWhereInput[]
    OR?: PhoneSellWhereInput[]
    NOT?: PhoneSellWhereInput | PhoneSellWhereInput[]
    id?: IntFilter<"PhoneSell"> | number
    marka?: StringNullableFilter<"PhoneSell"> | string | null
    model?: StringNullableFilter<"PhoneSell"> | string | null
    storage?: StringNullableFilter<"PhoneSell"> | string | null
    yurtici?: StringNullableFilter<"PhoneSell"> | string | null
    passport?: StringNullableFilter<"PhoneSell"> | string | null
    answers?: JsonNullableFilter<"PhoneSell">
    price?: FloatNullableFilter<"PhoneSell"> | number | null
    firstName?: StringNullableFilter<"PhoneSell"> | string | null
    lastName?: StringNullableFilter<"PhoneSell"> | string | null
    email?: StringNullableFilter<"PhoneSell"> | string | null
    phoneNumber?: StringNullableFilter<"PhoneSell"> | string | null
    tcNumber?: StringNullableFilter<"PhoneSell"> | string | null
    city?: StringNullableFilter<"PhoneSell"> | string | null
    district?: StringNullableFilter<"PhoneSell"> | string | null
    address?: StringNullableFilter<"PhoneSell"> | string | null
    ibanName?: StringNullableFilter<"PhoneSell"> | string | null
    ibanSurname?: StringNullableFilter<"PhoneSell"> | string | null
    ibanNumber?: StringNullableFilter<"PhoneSell"> | string | null
    status?: StringNullableFilter<"PhoneSell"> | string | null
    createdAt?: DateTimeNullableFilter<"PhoneSell"> | Date | string | null
  }

  export type PhoneSellOrderByWithRelationInput = {
    id?: SortOrder
    marka?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    storage?: SortOrderInput | SortOrder
    yurtici?: SortOrderInput | SortOrder
    passport?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    tcNumber?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    ibanName?: SortOrderInput | SortOrder
    ibanSurname?: SortOrderInput | SortOrder
    ibanNumber?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
  }

  export type PhoneSellWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhoneSellWhereInput | PhoneSellWhereInput[]
    OR?: PhoneSellWhereInput[]
    NOT?: PhoneSellWhereInput | PhoneSellWhereInput[]
    marka?: StringNullableFilter<"PhoneSell"> | string | null
    model?: StringNullableFilter<"PhoneSell"> | string | null
    storage?: StringNullableFilter<"PhoneSell"> | string | null
    yurtici?: StringNullableFilter<"PhoneSell"> | string | null
    passport?: StringNullableFilter<"PhoneSell"> | string | null
    answers?: JsonNullableFilter<"PhoneSell">
    price?: FloatNullableFilter<"PhoneSell"> | number | null
    firstName?: StringNullableFilter<"PhoneSell"> | string | null
    lastName?: StringNullableFilter<"PhoneSell"> | string | null
    email?: StringNullableFilter<"PhoneSell"> | string | null
    phoneNumber?: StringNullableFilter<"PhoneSell"> | string | null
    tcNumber?: StringNullableFilter<"PhoneSell"> | string | null
    city?: StringNullableFilter<"PhoneSell"> | string | null
    district?: StringNullableFilter<"PhoneSell"> | string | null
    address?: StringNullableFilter<"PhoneSell"> | string | null
    ibanName?: StringNullableFilter<"PhoneSell"> | string | null
    ibanSurname?: StringNullableFilter<"PhoneSell"> | string | null
    ibanNumber?: StringNullableFilter<"PhoneSell"> | string | null
    status?: StringNullableFilter<"PhoneSell"> | string | null
    createdAt?: DateTimeNullableFilter<"PhoneSell"> | Date | string | null
  }, "id">

  export type PhoneSellOrderByWithAggregationInput = {
    id?: SortOrder
    marka?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    storage?: SortOrderInput | SortOrder
    yurtici?: SortOrderInput | SortOrder
    passport?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    tcNumber?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    ibanName?: SortOrderInput | SortOrder
    ibanSurname?: SortOrderInput | SortOrder
    ibanNumber?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: PhoneSellCountOrderByAggregateInput
    _avg?: PhoneSellAvgOrderByAggregateInput
    _max?: PhoneSellMaxOrderByAggregateInput
    _min?: PhoneSellMinOrderByAggregateInput
    _sum?: PhoneSellSumOrderByAggregateInput
  }

  export type PhoneSellScalarWhereWithAggregatesInput = {
    AND?: PhoneSellScalarWhereWithAggregatesInput | PhoneSellScalarWhereWithAggregatesInput[]
    OR?: PhoneSellScalarWhereWithAggregatesInput[]
    NOT?: PhoneSellScalarWhereWithAggregatesInput | PhoneSellScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhoneSell"> | number
    marka?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    model?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    storage?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    yurtici?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    passport?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    answers?: JsonNullableWithAggregatesFilter<"PhoneSell">
    price?: FloatNullableWithAggregatesFilter<"PhoneSell"> | number | null
    firstName?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    email?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    tcNumber?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    city?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    district?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    address?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    ibanName?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    ibanSurname?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    ibanNumber?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    status?: StringNullableWithAggregatesFilter<"PhoneSell"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"PhoneSell"> | Date | string | null
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    name?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    konu?: StringNullableFilter<"Contact"> | string | null
    not?: StringNullableFilter<"Contact"> | string | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    konu?: SortOrderInput | SortOrder
    not?: SortOrderInput | SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    konu?: StringNullableFilter<"Contact"> | string | null
    not?: StringNullableFilter<"Contact"> | string | null
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    konu?: SortOrderInput | SortOrder
    not?: SortOrderInput | SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    name?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    konu?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    not?: StringNullableWithAggregatesFilter<"Contact"> | string | null
  }

  export type AyarlarWhereInput = {
    AND?: AyarlarWhereInput | AyarlarWhereInput[]
    OR?: AyarlarWhereInput[]
    NOT?: AyarlarWhereInput | AyarlarWhereInput[]
    id?: IntFilter<"Ayarlar"> | number
    taksit?: IntNullableFilter<"Ayarlar"> | number | null
    banner?: JsonNullableFilter<"Ayarlar">
    settings?: JsonNullableFilter<"Ayarlar">
  }

  export type AyarlarOrderByWithRelationInput = {
    id?: SortOrder
    taksit?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
  }

  export type AyarlarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AyarlarWhereInput | AyarlarWhereInput[]
    OR?: AyarlarWhereInput[]
    NOT?: AyarlarWhereInput | AyarlarWhereInput[]
    taksit?: IntNullableFilter<"Ayarlar"> | number | null
    banner?: JsonNullableFilter<"Ayarlar">
    settings?: JsonNullableFilter<"Ayarlar">
  }, "id">

  export type AyarlarOrderByWithAggregationInput = {
    id?: SortOrder
    taksit?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    _count?: AyarlarCountOrderByAggregateInput
    _avg?: AyarlarAvgOrderByAggregateInput
    _max?: AyarlarMaxOrderByAggregateInput
    _min?: AyarlarMinOrderByAggregateInput
    _sum?: AyarlarSumOrderByAggregateInput
  }

  export type AyarlarScalarWhereWithAggregatesInput = {
    AND?: AyarlarScalarWhereWithAggregatesInput | AyarlarScalarWhereWithAggregatesInput[]
    OR?: AyarlarScalarWhereWithAggregatesInput[]
    NOT?: AyarlarScalarWhereWithAggregatesInput | AyarlarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ayarlar"> | number
    taksit?: IntNullableWithAggregatesFilter<"Ayarlar"> | number | null
    banner?: JsonNullableWithAggregatesFilter<"Ayarlar">
    settings?: JsonNullableWithAggregatesFilter<"Ayarlar">
  }

  export type UserCreateInput = {
    name?: string | null
    lastname?: string | null
    email: string
    password: string
    code?: string | null
    emailVerified?: boolean | null
    tel?: string | null
    identityNumber?: string | null
    Role?: $Enums.Role
    Adress?: AdressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    lastname?: string | null
    email: string
    password: string
    code?: string | null
    emailVerified?: boolean | null
    tel?: string | null
    identityNumber?: string | null
    Role?: $Enums.Role
    Adress?: AdressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Adress?: AdressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Adress?: AdressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    lastname?: string | null
    email: string
    password: string
    code?: string | null
    emailVerified?: boolean | null
    tel?: string | null
    identityNumber?: string | null
    Role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type BayiUserCreateInput = {
    name?: string | null
    lastname?: string | null
    email: string
    tel?: string | null
    password: string
    code?: string | null
    emailVerified?: boolean | null
    firstTimeLogin?: boolean | null
    identityNumber?: string | null
    magazaName?: string | null
    sirketName?: string | null
    sirketAdres?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    iban?: string | null
    ibanName?: string | null
    adminOnay?: boolean | null
    vergiUrl?: string | null
    ticaretSicilUrl?: string | null
    sozlesmeUrl?: string | null
    imzaUrl?: string | null
    kimlikUrl?: string | null
    score?: number | null
    products?: ProductCreateNestedManyWithoutBayiUserInput
  }

  export type BayiUserUncheckedCreateInput = {
    id?: number
    name?: string | null
    lastname?: string | null
    email: string
    tel?: string | null
    password: string
    code?: string | null
    emailVerified?: boolean | null
    firstTimeLogin?: boolean | null
    identityNumber?: string | null
    magazaName?: string | null
    sirketName?: string | null
    sirketAdres?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    iban?: string | null
    ibanName?: string | null
    adminOnay?: boolean | null
    vergiUrl?: string | null
    ticaretSicilUrl?: string | null
    sozlesmeUrl?: string | null
    imzaUrl?: string | null
    kimlikUrl?: string | null
    score?: number | null
    products?: ProductUncheckedCreateNestedManyWithoutBayiUserInput
  }

  export type BayiUserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstTimeLogin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    magazaName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketAdres?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    adminOnay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vergiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticaretSicilUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sozlesmeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imzaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kimlikUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    products?: ProductUpdateManyWithoutBayiUserNestedInput
  }

  export type BayiUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstTimeLogin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    magazaName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketAdres?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    adminOnay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vergiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticaretSicilUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sozlesmeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imzaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kimlikUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    products?: ProductUncheckedUpdateManyWithoutBayiUserNestedInput
  }

  export type BayiUserCreateManyInput = {
    id?: number
    name?: string | null
    lastname?: string | null
    email: string
    tel?: string | null
    password: string
    code?: string | null
    emailVerified?: boolean | null
    firstTimeLogin?: boolean | null
    identityNumber?: string | null
    magazaName?: string | null
    sirketName?: string | null
    sirketAdres?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    iban?: string | null
    ibanName?: string | null
    adminOnay?: boolean | null
    vergiUrl?: string | null
    ticaretSicilUrl?: string | null
    sozlesmeUrl?: string | null
    imzaUrl?: string | null
    kimlikUrl?: string | null
    score?: number | null
  }

  export type BayiUserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstTimeLogin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    magazaName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketAdres?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    adminOnay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vergiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticaretSicilUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sozlesmeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imzaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kimlikUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BayiUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstTimeLogin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    magazaName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketAdres?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    adminOnay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vergiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticaretSicilUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sozlesmeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imzaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kimlikUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateInput = {
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    Category?: CategoryCreateNestedOneWithoutProductInput
    Marka?: MarkaCreateNestedOneWithoutProductInput
    Model?: ModelCreateNestedOneWithoutProductsInput
    BayiUser?: BayiUserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    categoryId?: number | null
    markaId?: number | null
    modelId?: number | null
    bayiUserId?: number | null
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Marka?: MarkaUpdateOneWithoutProductNestedInput
    Model?: ModelUpdateOneWithoutProductsNestedInput
    BayiUser?: BayiUserUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableIntFieldUpdateOperationsInput | number | null
    bayiUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    categoryId?: number | null
    markaId?: number | null
    modelId?: number | null
    bayiUserId?: number | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableIntFieldUpdateOperationsInput | number | null
    bayiUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    name?: string | null
    slug?: string | null
    is_active?: boolean | null
    Product?: ProductCreateNestedManyWithoutCategoryInput
    Marka?: MarkaCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name?: string | null
    slug?: string | null
    is_active?: boolean | null
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    Marka?: MarkaUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Product?: ProductUpdateManyWithoutCategoryNestedInput
    Marka?: MarkaUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    Marka?: MarkaUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name?: string | null
    slug?: string | null
    is_active?: boolean | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MarkaCreateInput = {
    name?: string | null
    label?: string | null
    slug?: string | null
    Category?: CategoryCreateNestedOneWithoutMarkaInput
    Product?: ProductCreateNestedManyWithoutMarkaInput
    Model?: ModelCreateNestedManyWithoutMarkaInput
  }

  export type MarkaUncheckedCreateInput = {
    id?: number
    name?: string | null
    label?: string | null
    slug?: string | null
    categoryId?: number | null
    Product?: ProductUncheckedCreateNestedManyWithoutMarkaInput
    Model?: ModelUncheckedCreateNestedManyWithoutMarkaInput
  }

  export type MarkaUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoryUpdateOneWithoutMarkaNestedInput
    Product?: ProductUpdateManyWithoutMarkaNestedInput
    Model?: ModelUpdateManyWithoutMarkaNestedInput
  }

  export type MarkaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    Product?: ProductUncheckedUpdateManyWithoutMarkaNestedInput
    Model?: ModelUncheckedUpdateManyWithoutMarkaNestedInput
  }

  export type MarkaCreateManyInput = {
    id?: number
    name?: string | null
    label?: string | null
    slug?: string | null
    categoryId?: number | null
  }

  export type MarkaUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarkaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ModelCreateInput = {
    name?: string | null
    slug?: string | null
    bazFiyat?: number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    products?: ProductCreateNestedManyWithoutModelInput
    Marka?: MarkaCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: number
    name?: string | null
    slug?: string | null
    bazFiyat?: number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    markaId?: number | null
    products?: ProductUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    products?: ProductUpdateManyWithoutModelNestedInput
    Marka?: MarkaUpdateOneWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    products?: ProductUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelCreateManyInput = {
    id?: number
    name?: string | null
    slug?: string | null
    bazFiyat?: number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    markaId?: number | null
  }

  export type ModelUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdressCreateInput = {
    adressName?: string | null
    name?: string | null
    lastname?: string | null
    identityNumber?: string | null
    tel?: string | null
    adres?: string | null
    postalCode?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    firmaName?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    efatura?: boolean | null
    User?: UserCreateNestedOneWithoutAdressInput
  }

  export type AdressUncheckedCreateInput = {
    id?: number
    adressName?: string | null
    name?: string | null
    lastname?: string | null
    identityNumber?: string | null
    tel?: string | null
    adres?: string | null
    postalCode?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    firmaName?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    efatura?: boolean | null
    userId?: number | null
  }

  export type AdressUpdateInput = {
    adressName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    adres?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    firmaName?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    efatura?: NullableBoolFieldUpdateOperationsInput | boolean | null
    User?: UserUpdateOneWithoutAdressNestedInput
  }

  export type AdressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adressName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    adres?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    firmaName?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    efatura?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdressCreateManyInput = {
    id?: number
    adressName?: string | null
    name?: string | null
    lastname?: string | null
    identityNumber?: string | null
    tel?: string | null
    adres?: string | null
    postalCode?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    firmaName?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    efatura?: boolean | null
    userId?: number | null
  }

  export type AdressUpdateManyMutationInput = {
    adressName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    adres?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    firmaName?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    efatura?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AdressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adressName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    adres?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    firmaName?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    efatura?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PhoneSellCreateInput = {
    marka?: string | null
    model?: string | null
    storage?: string | null
    yurtici?: string | null
    passport?: string | null
    answers?: NullableJsonNullValueInput | InputJsonValue
    price?: number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phoneNumber?: string | null
    tcNumber?: string | null
    city?: string | null
    district?: string | null
    address?: string | null
    ibanName?: string | null
    ibanSurname?: string | null
    ibanNumber?: string | null
    status?: string | null
    createdAt?: Date | string | null
  }

  export type PhoneSellUncheckedCreateInput = {
    id?: number
    marka?: string | null
    model?: string | null
    storage?: string | null
    yurtici?: string | null
    passport?: string | null
    answers?: NullableJsonNullValueInput | InputJsonValue
    price?: number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phoneNumber?: string | null
    tcNumber?: string | null
    city?: string | null
    district?: string | null
    address?: string | null
    ibanName?: string | null
    ibanSurname?: string | null
    ibanNumber?: string | null
    status?: string | null
    createdAt?: Date | string | null
  }

  export type PhoneSellUpdateInput = {
    marka?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    yurtici?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableJsonNullValueInput | InputJsonValue
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    ibanSurname?: NullableStringFieldUpdateOperationsInput | string | null
    ibanNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhoneSellUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marka?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    yurtici?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableJsonNullValueInput | InputJsonValue
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    ibanSurname?: NullableStringFieldUpdateOperationsInput | string | null
    ibanNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhoneSellCreateManyInput = {
    id?: number
    marka?: string | null
    model?: string | null
    storage?: string | null
    yurtici?: string | null
    passport?: string | null
    answers?: NullableJsonNullValueInput | InputJsonValue
    price?: number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phoneNumber?: string | null
    tcNumber?: string | null
    city?: string | null
    district?: string | null
    address?: string | null
    ibanName?: string | null
    ibanSurname?: string | null
    ibanNumber?: string | null
    status?: string | null
    createdAt?: Date | string | null
  }

  export type PhoneSellUpdateManyMutationInput = {
    marka?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    yurtici?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableJsonNullValueInput | InputJsonValue
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    ibanSurname?: NullableStringFieldUpdateOperationsInput | string | null
    ibanNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhoneSellUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marka?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    yurtici?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableJsonNullValueInput | InputJsonValue
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    ibanSurname?: NullableStringFieldUpdateOperationsInput | string | null
    ibanNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactCreateInput = {
    name?: string | null
    email?: string | null
    konu?: string | null
    not?: string | null
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    konu?: string | null
    not?: string | null
  }

  export type ContactUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    konu?: NullableStringFieldUpdateOperationsInput | string | null
    not?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    konu?: NullableStringFieldUpdateOperationsInput | string | null
    not?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    konu?: string | null
    not?: string | null
  }

  export type ContactUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    konu?: NullableStringFieldUpdateOperationsInput | string | null
    not?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    konu?: NullableStringFieldUpdateOperationsInput | string | null
    not?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AyarlarCreateInput = {
    id: number
    taksit?: number | null
    banner?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AyarlarUncheckedCreateInput = {
    id: number
    taksit?: number | null
    banner?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AyarlarUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taksit?: NullableIntFieldUpdateOperationsInput | number | null
    banner?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AyarlarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taksit?: NullableIntFieldUpdateOperationsInput | number | null
    banner?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AyarlarCreateManyInput = {
    id: number
    taksit?: number | null
    banner?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AyarlarUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    taksit?: NullableIntFieldUpdateOperationsInput | number | null
    banner?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AyarlarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taksit?: NullableIntFieldUpdateOperationsInput | number | null
    banner?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AdressListRelationFilter = {
    every?: AdressWhereInput
    some?: AdressWhereInput
    none?: AdressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    code?: SortOrder
    emailVerified?: SortOrder
    tel?: SortOrder
    identityNumber?: SortOrder
    Role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    code?: SortOrder
    emailVerified?: SortOrder
    tel?: SortOrder
    identityNumber?: SortOrder
    Role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    code?: SortOrder
    emailVerified?: SortOrder
    tel?: SortOrder
    identityNumber?: SortOrder
    Role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BayiUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    code?: SortOrder
    emailVerified?: SortOrder
    firstTimeLogin?: SortOrder
    identityNumber?: SortOrder
    magazaName?: SortOrder
    sirketName?: SortOrder
    sirketAdres?: SortOrder
    vergiDairesi?: SortOrder
    vergiNo?: SortOrder
    iban?: SortOrder
    ibanName?: SortOrder
    adminOnay?: SortOrder
    vergiUrl?: SortOrder
    ticaretSicilUrl?: SortOrder
    sozlesmeUrl?: SortOrder
    imzaUrl?: SortOrder
    kimlikUrl?: SortOrder
    score?: SortOrder
  }

  export type BayiUserAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type BayiUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    code?: SortOrder
    emailVerified?: SortOrder
    firstTimeLogin?: SortOrder
    identityNumber?: SortOrder
    magazaName?: SortOrder
    sirketName?: SortOrder
    sirketAdres?: SortOrder
    vergiDairesi?: SortOrder
    vergiNo?: SortOrder
    iban?: SortOrder
    ibanName?: SortOrder
    adminOnay?: SortOrder
    vergiUrl?: SortOrder
    ticaretSicilUrl?: SortOrder
    sozlesmeUrl?: SortOrder
    imzaUrl?: SortOrder
    kimlikUrl?: SortOrder
    score?: SortOrder
  }

  export type BayiUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    code?: SortOrder
    emailVerified?: SortOrder
    firstTimeLogin?: SortOrder
    identityNumber?: SortOrder
    magazaName?: SortOrder
    sirketName?: SortOrder
    sirketAdres?: SortOrder
    vergiDairesi?: SortOrder
    vergiNo?: SortOrder
    iban?: SortOrder
    ibanName?: SortOrder
    adminOnay?: SortOrder
    vergiUrl?: SortOrder
    ticaretSicilUrl?: SortOrder
    sozlesmeUrl?: SortOrder
    imzaUrl?: SortOrder
    kimlikUrl?: SortOrder
    score?: SortOrder
  }

  export type BayiUserSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MarkaNullableScalarRelationFilter = {
    is?: MarkaWhereInput | null
    isNot?: MarkaWhereInput | null
  }

  export type ModelNullableScalarRelationFilter = {
    is?: ModelWhereInput | null
    isNot?: ModelWhereInput | null
  }

  export type BayiUserNullableScalarRelationFilter = {
    is?: BayiUserWhereInput | null
    isNot?: BayiUserWhereInput | null
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    desc?: SortOrder
    color?: SortOrder
    storage?: SortOrder
    condition?: SortOrder
    price?: SortOrder
    inprice?: SortOrder
    indirimsize?: SortOrder
    indirim?: SortOrder
    haftaurun?: SortOrder
    stock?: SortOrder
    images?: SortOrder
    onclick?: SortOrder
    sells?: SortOrder
    aksesuar?: SortOrder
    kargoTime?: SortOrder
    imei?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    markaId?: SortOrder
    modelId?: SortOrder
    bayiUserId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    inprice?: SortOrder
    stock?: SortOrder
    onclick?: SortOrder
    sells?: SortOrder
    categoryId?: SortOrder
    markaId?: SortOrder
    modelId?: SortOrder
    bayiUserId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    desc?: SortOrder
    color?: SortOrder
    storage?: SortOrder
    condition?: SortOrder
    price?: SortOrder
    inprice?: SortOrder
    indirimsize?: SortOrder
    indirim?: SortOrder
    haftaurun?: SortOrder
    stock?: SortOrder
    onclick?: SortOrder
    sells?: SortOrder
    aksesuar?: SortOrder
    kargoTime?: SortOrder
    imei?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    markaId?: SortOrder
    modelId?: SortOrder
    bayiUserId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    desc?: SortOrder
    color?: SortOrder
    storage?: SortOrder
    condition?: SortOrder
    price?: SortOrder
    inprice?: SortOrder
    indirimsize?: SortOrder
    indirim?: SortOrder
    haftaurun?: SortOrder
    stock?: SortOrder
    onclick?: SortOrder
    sells?: SortOrder
    aksesuar?: SortOrder
    kargoTime?: SortOrder
    imei?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    markaId?: SortOrder
    modelId?: SortOrder
    bayiUserId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    inprice?: SortOrder
    stock?: SortOrder
    onclick?: SortOrder
    sells?: SortOrder
    categoryId?: SortOrder
    markaId?: SortOrder
    modelId?: SortOrder
    bayiUserId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MarkaListRelationFilter = {
    every?: MarkaWhereInput
    some?: MarkaWhereInput
    none?: MarkaWhereInput
  }

  export type MarkaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModelListRelationFilter = {
    every?: ModelWhereInput
    some?: ModelWhereInput
    none?: ModelWhereInput
  }

  export type ModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarkaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
  }

  export type MarkaAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type MarkaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
  }

  export type MarkaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
  }

  export type MarkaSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bazFiyat?: SortOrder
    color?: SortOrder
    storage?: SortOrder
    markaId?: SortOrder
  }

  export type ModelAvgOrderByAggregateInput = {
    id?: SortOrder
    bazFiyat?: SortOrder
    markaId?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bazFiyat?: SortOrder
    markaId?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bazFiyat?: SortOrder
    markaId?: SortOrder
  }

  export type ModelSumOrderByAggregateInput = {
    id?: SortOrder
    bazFiyat?: SortOrder
    markaId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AdressCountOrderByAggregateInput = {
    id?: SortOrder
    adressName?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    identityNumber?: SortOrder
    tel?: SortOrder
    adres?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    district?: SortOrder
    category?: SortOrder
    firmaName?: SortOrder
    vergiDairesi?: SortOrder
    vergiNo?: SortOrder
    efatura?: SortOrder
    userId?: SortOrder
  }

  export type AdressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdressMaxOrderByAggregateInput = {
    id?: SortOrder
    adressName?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    identityNumber?: SortOrder
    tel?: SortOrder
    adres?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    district?: SortOrder
    category?: SortOrder
    firmaName?: SortOrder
    vergiDairesi?: SortOrder
    vergiNo?: SortOrder
    efatura?: SortOrder
    userId?: SortOrder
  }

  export type AdressMinOrderByAggregateInput = {
    id?: SortOrder
    adressName?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    identityNumber?: SortOrder
    tel?: SortOrder
    adres?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    district?: SortOrder
    category?: SortOrder
    firmaName?: SortOrder
    vergiDairesi?: SortOrder
    vergiNo?: SortOrder
    efatura?: SortOrder
    userId?: SortOrder
  }

  export type AdressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PhoneSellCountOrderByAggregateInput = {
    id?: SortOrder
    marka?: SortOrder
    model?: SortOrder
    storage?: SortOrder
    yurtici?: SortOrder
    passport?: SortOrder
    answers?: SortOrder
    price?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    tcNumber?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    ibanName?: SortOrder
    ibanSurname?: SortOrder
    ibanNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneSellAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PhoneSellMaxOrderByAggregateInput = {
    id?: SortOrder
    marka?: SortOrder
    model?: SortOrder
    storage?: SortOrder
    yurtici?: SortOrder
    passport?: SortOrder
    price?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    tcNumber?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    ibanName?: SortOrder
    ibanSurname?: SortOrder
    ibanNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneSellMinOrderByAggregateInput = {
    id?: SortOrder
    marka?: SortOrder
    model?: SortOrder
    storage?: SortOrder
    yurtici?: SortOrder
    passport?: SortOrder
    price?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    tcNumber?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    ibanName?: SortOrder
    ibanSurname?: SortOrder
    ibanNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneSellSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    konu?: SortOrder
    not?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    konu?: SortOrder
    not?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    konu?: SortOrder
    not?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AyarlarCountOrderByAggregateInput = {
    id?: SortOrder
    taksit?: SortOrder
    banner?: SortOrder
    settings?: SortOrder
  }

  export type AyarlarAvgOrderByAggregateInput = {
    id?: SortOrder
    taksit?: SortOrder
  }

  export type AyarlarMaxOrderByAggregateInput = {
    id?: SortOrder
    taksit?: SortOrder
  }

  export type AyarlarMinOrderByAggregateInput = {
    id?: SortOrder
    taksit?: SortOrder
  }

  export type AyarlarSumOrderByAggregateInput = {
    id?: SortOrder
    taksit?: SortOrder
  }

  export type AdressCreateNestedManyWithoutUserInput = {
    create?: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput> | AdressCreateWithoutUserInput[] | AdressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutUserInput | AdressCreateOrConnectWithoutUserInput[]
    createMany?: AdressCreateManyUserInputEnvelope
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
  }

  export type AdressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput> | AdressCreateWithoutUserInput[] | AdressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutUserInput | AdressCreateOrConnectWithoutUserInput[]
    createMany?: AdressCreateManyUserInputEnvelope
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AdressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput> | AdressCreateWithoutUserInput[] | AdressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutUserInput | AdressCreateOrConnectWithoutUserInput[]
    upsert?: AdressUpsertWithWhereUniqueWithoutUserInput | AdressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdressCreateManyUserInputEnvelope
    set?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    disconnect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    delete?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    update?: AdressUpdateWithWhereUniqueWithoutUserInput | AdressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdressUpdateManyWithWhereWithoutUserInput | AdressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdressScalarWhereInput | AdressScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput> | AdressCreateWithoutUserInput[] | AdressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutUserInput | AdressCreateOrConnectWithoutUserInput[]
    upsert?: AdressUpsertWithWhereUniqueWithoutUserInput | AdressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdressCreateManyUserInputEnvelope
    set?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    disconnect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    delete?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    update?: AdressUpdateWithWhereUniqueWithoutUserInput | AdressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdressUpdateManyWithWhereWithoutUserInput | AdressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdressScalarWhereInput | AdressScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBayiUserInput = {
    create?: XOR<ProductCreateWithoutBayiUserInput, ProductUncheckedCreateWithoutBayiUserInput> | ProductCreateWithoutBayiUserInput[] | ProductUncheckedCreateWithoutBayiUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBayiUserInput | ProductCreateOrConnectWithoutBayiUserInput[]
    createMany?: ProductCreateManyBayiUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBayiUserInput = {
    create?: XOR<ProductCreateWithoutBayiUserInput, ProductUncheckedCreateWithoutBayiUserInput> | ProductCreateWithoutBayiUserInput[] | ProductUncheckedCreateWithoutBayiUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBayiUserInput | ProductCreateOrConnectWithoutBayiUserInput[]
    createMany?: ProductCreateManyBayiUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateManyWithoutBayiUserNestedInput = {
    create?: XOR<ProductCreateWithoutBayiUserInput, ProductUncheckedCreateWithoutBayiUserInput> | ProductCreateWithoutBayiUserInput[] | ProductUncheckedCreateWithoutBayiUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBayiUserInput | ProductCreateOrConnectWithoutBayiUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBayiUserInput | ProductUpsertWithWhereUniqueWithoutBayiUserInput[]
    createMany?: ProductCreateManyBayiUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBayiUserInput | ProductUpdateWithWhereUniqueWithoutBayiUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBayiUserInput | ProductUpdateManyWithWhereWithoutBayiUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBayiUserNestedInput = {
    create?: XOR<ProductCreateWithoutBayiUserInput, ProductUncheckedCreateWithoutBayiUserInput> | ProductCreateWithoutBayiUserInput[] | ProductUncheckedCreateWithoutBayiUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBayiUserInput | ProductCreateOrConnectWithoutBayiUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBayiUserInput | ProductUpsertWithWhereUniqueWithoutBayiUserInput[]
    createMany?: ProductCreateManyBayiUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBayiUserInput | ProductUpdateWithWhereUniqueWithoutBayiUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBayiUserInput | ProductUpdateManyWithWhereWithoutBayiUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type MarkaCreateNestedOneWithoutProductInput = {
    create?: XOR<MarkaCreateWithoutProductInput, MarkaUncheckedCreateWithoutProductInput>
    connectOrCreate?: MarkaCreateOrConnectWithoutProductInput
    connect?: MarkaWhereUniqueInput
  }

  export type ModelCreateNestedOneWithoutProductsInput = {
    create?: XOR<ModelCreateWithoutProductsInput, ModelUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ModelCreateOrConnectWithoutProductsInput
    connect?: ModelWhereUniqueInput
  }

  export type BayiUserCreateNestedOneWithoutProductsInput = {
    create?: XOR<BayiUserCreateWithoutProductsInput, BayiUserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BayiUserCreateOrConnectWithoutProductsInput
    connect?: BayiUserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CategoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type MarkaUpdateOneWithoutProductNestedInput = {
    create?: XOR<MarkaCreateWithoutProductInput, MarkaUncheckedCreateWithoutProductInput>
    connectOrCreate?: MarkaCreateOrConnectWithoutProductInput
    upsert?: MarkaUpsertWithoutProductInput
    disconnect?: MarkaWhereInput | boolean
    delete?: MarkaWhereInput | boolean
    connect?: MarkaWhereUniqueInput
    update?: XOR<XOR<MarkaUpdateToOneWithWhereWithoutProductInput, MarkaUpdateWithoutProductInput>, MarkaUncheckedUpdateWithoutProductInput>
  }

  export type ModelUpdateOneWithoutProductsNestedInput = {
    create?: XOR<ModelCreateWithoutProductsInput, ModelUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ModelCreateOrConnectWithoutProductsInput
    upsert?: ModelUpsertWithoutProductsInput
    disconnect?: ModelWhereInput | boolean
    delete?: ModelWhereInput | boolean
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutProductsInput, ModelUpdateWithoutProductsInput>, ModelUncheckedUpdateWithoutProductsInput>
  }

  export type BayiUserUpdateOneWithoutProductsNestedInput = {
    create?: XOR<BayiUserCreateWithoutProductsInput, BayiUserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BayiUserCreateOrConnectWithoutProductsInput
    upsert?: BayiUserUpsertWithoutProductsInput
    disconnect?: BayiUserWhereInput | boolean
    delete?: BayiUserWhereInput | boolean
    connect?: BayiUserWhereUniqueInput
    update?: XOR<XOR<BayiUserUpdateToOneWithWhereWithoutProductsInput, BayiUserUpdateWithoutProductsInput>, BayiUserUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type MarkaCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MarkaCreateWithoutCategoryInput, MarkaUncheckedCreateWithoutCategoryInput> | MarkaCreateWithoutCategoryInput[] | MarkaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MarkaCreateOrConnectWithoutCategoryInput | MarkaCreateOrConnectWithoutCategoryInput[]
    createMany?: MarkaCreateManyCategoryInputEnvelope
    connect?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type MarkaUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MarkaCreateWithoutCategoryInput, MarkaUncheckedCreateWithoutCategoryInput> | MarkaCreateWithoutCategoryInput[] | MarkaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MarkaCreateOrConnectWithoutCategoryInput | MarkaCreateOrConnectWithoutCategoryInput[]
    createMany?: MarkaCreateManyCategoryInputEnvelope
    connect?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type MarkaUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MarkaCreateWithoutCategoryInput, MarkaUncheckedCreateWithoutCategoryInput> | MarkaCreateWithoutCategoryInput[] | MarkaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MarkaCreateOrConnectWithoutCategoryInput | MarkaCreateOrConnectWithoutCategoryInput[]
    upsert?: MarkaUpsertWithWhereUniqueWithoutCategoryInput | MarkaUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MarkaCreateManyCategoryInputEnvelope
    set?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
    disconnect?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
    delete?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
    connect?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
    update?: MarkaUpdateWithWhereUniqueWithoutCategoryInput | MarkaUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MarkaUpdateManyWithWhereWithoutCategoryInput | MarkaUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MarkaScalarWhereInput | MarkaScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type MarkaUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MarkaCreateWithoutCategoryInput, MarkaUncheckedCreateWithoutCategoryInput> | MarkaCreateWithoutCategoryInput[] | MarkaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MarkaCreateOrConnectWithoutCategoryInput | MarkaCreateOrConnectWithoutCategoryInput[]
    upsert?: MarkaUpsertWithWhereUniqueWithoutCategoryInput | MarkaUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MarkaCreateManyCategoryInputEnvelope
    set?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
    disconnect?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
    delete?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
    connect?: MarkaWhereUniqueInput | MarkaWhereUniqueInput[]
    update?: MarkaUpdateWithWhereUniqueWithoutCategoryInput | MarkaUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MarkaUpdateManyWithWhereWithoutCategoryInput | MarkaUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MarkaScalarWhereInput | MarkaScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutMarkaInput = {
    create?: XOR<CategoryCreateWithoutMarkaInput, CategoryUncheckedCreateWithoutMarkaInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMarkaInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutMarkaInput = {
    create?: XOR<ProductCreateWithoutMarkaInput, ProductUncheckedCreateWithoutMarkaInput> | ProductCreateWithoutMarkaInput[] | ProductUncheckedCreateWithoutMarkaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMarkaInput | ProductCreateOrConnectWithoutMarkaInput[]
    createMany?: ProductCreateManyMarkaInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ModelCreateNestedManyWithoutMarkaInput = {
    create?: XOR<ModelCreateWithoutMarkaInput, ModelUncheckedCreateWithoutMarkaInput> | ModelCreateWithoutMarkaInput[] | ModelUncheckedCreateWithoutMarkaInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutMarkaInput | ModelCreateOrConnectWithoutMarkaInput[]
    createMany?: ModelCreateManyMarkaInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutMarkaInput = {
    create?: XOR<ProductCreateWithoutMarkaInput, ProductUncheckedCreateWithoutMarkaInput> | ProductCreateWithoutMarkaInput[] | ProductUncheckedCreateWithoutMarkaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMarkaInput | ProductCreateOrConnectWithoutMarkaInput[]
    createMany?: ProductCreateManyMarkaInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ModelUncheckedCreateNestedManyWithoutMarkaInput = {
    create?: XOR<ModelCreateWithoutMarkaInput, ModelUncheckedCreateWithoutMarkaInput> | ModelCreateWithoutMarkaInput[] | ModelUncheckedCreateWithoutMarkaInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutMarkaInput | ModelCreateOrConnectWithoutMarkaInput[]
    createMany?: ModelCreateManyMarkaInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutMarkaNestedInput = {
    create?: XOR<CategoryCreateWithoutMarkaInput, CategoryUncheckedCreateWithoutMarkaInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMarkaInput
    upsert?: CategoryUpsertWithoutMarkaInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMarkaInput, CategoryUpdateWithoutMarkaInput>, CategoryUncheckedUpdateWithoutMarkaInput>
  }

  export type ProductUpdateManyWithoutMarkaNestedInput = {
    create?: XOR<ProductCreateWithoutMarkaInput, ProductUncheckedCreateWithoutMarkaInput> | ProductCreateWithoutMarkaInput[] | ProductUncheckedCreateWithoutMarkaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMarkaInput | ProductCreateOrConnectWithoutMarkaInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMarkaInput | ProductUpsertWithWhereUniqueWithoutMarkaInput[]
    createMany?: ProductCreateManyMarkaInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMarkaInput | ProductUpdateWithWhereUniqueWithoutMarkaInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMarkaInput | ProductUpdateManyWithWhereWithoutMarkaInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ModelUpdateManyWithoutMarkaNestedInput = {
    create?: XOR<ModelCreateWithoutMarkaInput, ModelUncheckedCreateWithoutMarkaInput> | ModelCreateWithoutMarkaInput[] | ModelUncheckedCreateWithoutMarkaInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutMarkaInput | ModelCreateOrConnectWithoutMarkaInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutMarkaInput | ModelUpsertWithWhereUniqueWithoutMarkaInput[]
    createMany?: ModelCreateManyMarkaInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutMarkaInput | ModelUpdateWithWhereUniqueWithoutMarkaInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutMarkaInput | ModelUpdateManyWithWhereWithoutMarkaInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutMarkaNestedInput = {
    create?: XOR<ProductCreateWithoutMarkaInput, ProductUncheckedCreateWithoutMarkaInput> | ProductCreateWithoutMarkaInput[] | ProductUncheckedCreateWithoutMarkaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMarkaInput | ProductCreateOrConnectWithoutMarkaInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMarkaInput | ProductUpsertWithWhereUniqueWithoutMarkaInput[]
    createMany?: ProductCreateManyMarkaInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMarkaInput | ProductUpdateWithWhereUniqueWithoutMarkaInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMarkaInput | ProductUpdateManyWithWhereWithoutMarkaInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ModelUncheckedUpdateManyWithoutMarkaNestedInput = {
    create?: XOR<ModelCreateWithoutMarkaInput, ModelUncheckedCreateWithoutMarkaInput> | ModelCreateWithoutMarkaInput[] | ModelUncheckedCreateWithoutMarkaInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutMarkaInput | ModelCreateOrConnectWithoutMarkaInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutMarkaInput | ModelUpsertWithWhereUniqueWithoutMarkaInput[]
    createMany?: ModelCreateManyMarkaInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutMarkaInput | ModelUpdateWithWhereUniqueWithoutMarkaInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutMarkaInput | ModelUpdateManyWithWhereWithoutMarkaInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutModelInput = {
    create?: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput> | ProductCreateWithoutModelInput[] | ProductUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutModelInput | ProductCreateOrConnectWithoutModelInput[]
    createMany?: ProductCreateManyModelInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type MarkaCreateNestedOneWithoutModelInput = {
    create?: XOR<MarkaCreateWithoutModelInput, MarkaUncheckedCreateWithoutModelInput>
    connectOrCreate?: MarkaCreateOrConnectWithoutModelInput
    connect?: MarkaWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput> | ProductCreateWithoutModelInput[] | ProductUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutModelInput | ProductCreateOrConnectWithoutModelInput[]
    createMany?: ProductCreateManyModelInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutModelNestedInput = {
    create?: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput> | ProductCreateWithoutModelInput[] | ProductUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutModelInput | ProductCreateOrConnectWithoutModelInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutModelInput | ProductUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ProductCreateManyModelInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutModelInput | ProductUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutModelInput | ProductUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type MarkaUpdateOneWithoutModelNestedInput = {
    create?: XOR<MarkaCreateWithoutModelInput, MarkaUncheckedCreateWithoutModelInput>
    connectOrCreate?: MarkaCreateOrConnectWithoutModelInput
    upsert?: MarkaUpsertWithoutModelInput
    disconnect?: MarkaWhereInput | boolean
    delete?: MarkaWhereInput | boolean
    connect?: MarkaWhereUniqueInput
    update?: XOR<XOR<MarkaUpdateToOneWithWhereWithoutModelInput, MarkaUpdateWithoutModelInput>, MarkaUncheckedUpdateWithoutModelInput>
  }

  export type ProductUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput> | ProductCreateWithoutModelInput[] | ProductUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutModelInput | ProductCreateOrConnectWithoutModelInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutModelInput | ProductUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ProductCreateManyModelInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutModelInput | ProductUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutModelInput | ProductUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdressInput = {
    create?: XOR<UserCreateWithoutAdressInput, UserUncheckedCreateWithoutAdressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAdressNestedInput = {
    create?: XOR<UserCreateWithoutAdressInput, UserUncheckedCreateWithoutAdressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdressInput
    upsert?: UserUpsertWithoutAdressInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdressInput, UserUpdateWithoutAdressInput>, UserUncheckedUpdateWithoutAdressInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AdressCreateWithoutUserInput = {
    adressName?: string | null
    name?: string | null
    lastname?: string | null
    identityNumber?: string | null
    tel?: string | null
    adres?: string | null
    postalCode?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    firmaName?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    efatura?: boolean | null
  }

  export type AdressUncheckedCreateWithoutUserInput = {
    id?: number
    adressName?: string | null
    name?: string | null
    lastname?: string | null
    identityNumber?: string | null
    tel?: string | null
    adres?: string | null
    postalCode?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    firmaName?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    efatura?: boolean | null
  }

  export type AdressCreateOrConnectWithoutUserInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput>
  }

  export type AdressCreateManyUserInputEnvelope = {
    data: AdressCreateManyUserInput | AdressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdressUpsertWithWhereUniqueWithoutUserInput = {
    where: AdressWhereUniqueInput
    update: XOR<AdressUpdateWithoutUserInput, AdressUncheckedUpdateWithoutUserInput>
    create: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput>
  }

  export type AdressUpdateWithWhereUniqueWithoutUserInput = {
    where: AdressWhereUniqueInput
    data: XOR<AdressUpdateWithoutUserInput, AdressUncheckedUpdateWithoutUserInput>
  }

  export type AdressUpdateManyWithWhereWithoutUserInput = {
    where: AdressScalarWhereInput
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyWithoutUserInput>
  }

  export type AdressScalarWhereInput = {
    AND?: AdressScalarWhereInput | AdressScalarWhereInput[]
    OR?: AdressScalarWhereInput[]
    NOT?: AdressScalarWhereInput | AdressScalarWhereInput[]
    id?: IntFilter<"Adress"> | number
    adressName?: StringNullableFilter<"Adress"> | string | null
    name?: StringNullableFilter<"Adress"> | string | null
    lastname?: StringNullableFilter<"Adress"> | string | null
    identityNumber?: StringNullableFilter<"Adress"> | string | null
    tel?: StringNullableFilter<"Adress"> | string | null
    adres?: StringNullableFilter<"Adress"> | string | null
    postalCode?: StringNullableFilter<"Adress"> | string | null
    city?: StringNullableFilter<"Adress"> | string | null
    district?: StringNullableFilter<"Adress"> | string | null
    category?: StringNullableFilter<"Adress"> | string | null
    firmaName?: StringNullableFilter<"Adress"> | string | null
    vergiDairesi?: StringNullableFilter<"Adress"> | string | null
    vergiNo?: StringNullableFilter<"Adress"> | string | null
    efatura?: BoolNullableFilter<"Adress"> | boolean | null
    userId?: IntNullableFilter<"Adress"> | number | null
  }

  export type ProductCreateWithoutBayiUserInput = {
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    Category?: CategoryCreateNestedOneWithoutProductInput
    Marka?: MarkaCreateNestedOneWithoutProductInput
    Model?: ModelCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutBayiUserInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    categoryId?: number | null
    markaId?: number | null
    modelId?: number | null
  }

  export type ProductCreateOrConnectWithoutBayiUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBayiUserInput, ProductUncheckedCreateWithoutBayiUserInput>
  }

  export type ProductCreateManyBayiUserInputEnvelope = {
    data: ProductCreateManyBayiUserInput | ProductCreateManyBayiUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBayiUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBayiUserInput, ProductUncheckedUpdateWithoutBayiUserInput>
    create: XOR<ProductCreateWithoutBayiUserInput, ProductUncheckedCreateWithoutBayiUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBayiUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBayiUserInput, ProductUncheckedUpdateWithoutBayiUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutBayiUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBayiUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    desc?: StringNullableFilter<"Product"> | string | null
    color?: StringNullableFilter<"Product"> | string | null
    storage?: StringNullableFilter<"Product"> | string | null
    condition?: StringNullableFilter<"Product"> | string | null
    price?: FloatNullableFilter<"Product"> | number | null
    inprice?: FloatNullableFilter<"Product"> | number | null
    indirimsize?: StringNullableFilter<"Product"> | string | null
    indirim?: BoolNullableFilter<"Product"> | boolean | null
    haftaurun?: BoolNullableFilter<"Product"> | boolean | null
    stock?: IntNullableFilter<"Product"> | number | null
    images?: JsonNullableFilter<"Product">
    onclick?: IntNullableFilter<"Product"> | number | null
    sells?: IntNullableFilter<"Product"> | number | null
    aksesuar?: BoolNullableFilter<"Product"> | boolean | null
    kargoTime?: StringNullableFilter<"Product"> | string | null
    imei?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    markaId?: IntNullableFilter<"Product"> | number | null
    modelId?: IntNullableFilter<"Product"> | number | null
    bayiUserId?: IntNullableFilter<"Product"> | number | null
  }

  export type CategoryCreateWithoutProductInput = {
    name?: string | null
    slug?: string | null
    is_active?: boolean | null
    Marka?: MarkaCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number
    name?: string | null
    slug?: string | null
    is_active?: boolean | null
    Marka?: MarkaUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type MarkaCreateWithoutProductInput = {
    name?: string | null
    label?: string | null
    slug?: string | null
    Category?: CategoryCreateNestedOneWithoutMarkaInput
    Model?: ModelCreateNestedManyWithoutMarkaInput
  }

  export type MarkaUncheckedCreateWithoutProductInput = {
    id?: number
    name?: string | null
    label?: string | null
    slug?: string | null
    categoryId?: number | null
    Model?: ModelUncheckedCreateNestedManyWithoutMarkaInput
  }

  export type MarkaCreateOrConnectWithoutProductInput = {
    where: MarkaWhereUniqueInput
    create: XOR<MarkaCreateWithoutProductInput, MarkaUncheckedCreateWithoutProductInput>
  }

  export type ModelCreateWithoutProductsInput = {
    name?: string | null
    slug?: string | null
    bazFiyat?: number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    Marka?: MarkaCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutProductsInput = {
    id?: number
    name?: string | null
    slug?: string | null
    bazFiyat?: number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    markaId?: number | null
  }

  export type ModelCreateOrConnectWithoutProductsInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutProductsInput, ModelUncheckedCreateWithoutProductsInput>
  }

  export type BayiUserCreateWithoutProductsInput = {
    name?: string | null
    lastname?: string | null
    email: string
    tel?: string | null
    password: string
    code?: string | null
    emailVerified?: boolean | null
    firstTimeLogin?: boolean | null
    identityNumber?: string | null
    magazaName?: string | null
    sirketName?: string | null
    sirketAdres?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    iban?: string | null
    ibanName?: string | null
    adminOnay?: boolean | null
    vergiUrl?: string | null
    ticaretSicilUrl?: string | null
    sozlesmeUrl?: string | null
    imzaUrl?: string | null
    kimlikUrl?: string | null
    score?: number | null
  }

  export type BayiUserUncheckedCreateWithoutProductsInput = {
    id?: number
    name?: string | null
    lastname?: string | null
    email: string
    tel?: string | null
    password: string
    code?: string | null
    emailVerified?: boolean | null
    firstTimeLogin?: boolean | null
    identityNumber?: string | null
    magazaName?: string | null
    sirketName?: string | null
    sirketAdres?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    iban?: string | null
    ibanName?: string | null
    adminOnay?: boolean | null
    vergiUrl?: string | null
    ticaretSicilUrl?: string | null
    sozlesmeUrl?: string | null
    imzaUrl?: string | null
    kimlikUrl?: string | null
    score?: number | null
  }

  export type BayiUserCreateOrConnectWithoutProductsInput = {
    where: BayiUserWhereUniqueInput
    create: XOR<BayiUserCreateWithoutProductsInput, BayiUserUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Marka?: MarkaUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Marka?: MarkaUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MarkaUpsertWithoutProductInput = {
    update: XOR<MarkaUpdateWithoutProductInput, MarkaUncheckedUpdateWithoutProductInput>
    create: XOR<MarkaCreateWithoutProductInput, MarkaUncheckedCreateWithoutProductInput>
    where?: MarkaWhereInput
  }

  export type MarkaUpdateToOneWithWhereWithoutProductInput = {
    where?: MarkaWhereInput
    data: XOR<MarkaUpdateWithoutProductInput, MarkaUncheckedUpdateWithoutProductInput>
  }

  export type MarkaUpdateWithoutProductInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoryUpdateOneWithoutMarkaNestedInput
    Model?: ModelUpdateManyWithoutMarkaNestedInput
  }

  export type MarkaUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    Model?: ModelUncheckedUpdateManyWithoutMarkaNestedInput
  }

  export type ModelUpsertWithoutProductsInput = {
    update: XOR<ModelUpdateWithoutProductsInput, ModelUncheckedUpdateWithoutProductsInput>
    create: XOR<ModelCreateWithoutProductsInput, ModelUncheckedCreateWithoutProductsInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutProductsInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutProductsInput, ModelUncheckedUpdateWithoutProductsInput>
  }

  export type ModelUpdateWithoutProductsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    Marka?: MarkaUpdateOneWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BayiUserUpsertWithoutProductsInput = {
    update: XOR<BayiUserUpdateWithoutProductsInput, BayiUserUncheckedUpdateWithoutProductsInput>
    create: XOR<BayiUserCreateWithoutProductsInput, BayiUserUncheckedCreateWithoutProductsInput>
    where?: BayiUserWhereInput
  }

  export type BayiUserUpdateToOneWithWhereWithoutProductsInput = {
    where?: BayiUserWhereInput
    data: XOR<BayiUserUpdateWithoutProductsInput, BayiUserUncheckedUpdateWithoutProductsInput>
  }

  export type BayiUserUpdateWithoutProductsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstTimeLogin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    magazaName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketAdres?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    adminOnay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vergiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticaretSicilUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sozlesmeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imzaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kimlikUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BayiUserUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstTimeLogin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    magazaName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketName?: NullableStringFieldUpdateOperationsInput | string | null
    sirketAdres?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    ibanName?: NullableStringFieldUpdateOperationsInput | string | null
    adminOnay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vergiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticaretSicilUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sozlesmeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imzaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kimlikUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    Marka?: MarkaCreateNestedOneWithoutProductInput
    Model?: ModelCreateNestedOneWithoutProductsInput
    BayiUser?: BayiUserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    markaId?: number | null
    modelId?: number | null
    bayiUserId?: number | null
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MarkaCreateWithoutCategoryInput = {
    name?: string | null
    label?: string | null
    slug?: string | null
    Product?: ProductCreateNestedManyWithoutMarkaInput
    Model?: ModelCreateNestedManyWithoutMarkaInput
  }

  export type MarkaUncheckedCreateWithoutCategoryInput = {
    id?: number
    name?: string | null
    label?: string | null
    slug?: string | null
    Product?: ProductUncheckedCreateNestedManyWithoutMarkaInput
    Model?: ModelUncheckedCreateNestedManyWithoutMarkaInput
  }

  export type MarkaCreateOrConnectWithoutCategoryInput = {
    where: MarkaWhereUniqueInput
    create: XOR<MarkaCreateWithoutCategoryInput, MarkaUncheckedCreateWithoutCategoryInput>
  }

  export type MarkaCreateManyCategoryInputEnvelope = {
    data: MarkaCreateManyCategoryInput | MarkaCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MarkaUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MarkaWhereUniqueInput
    update: XOR<MarkaUpdateWithoutCategoryInput, MarkaUncheckedUpdateWithoutCategoryInput>
    create: XOR<MarkaCreateWithoutCategoryInput, MarkaUncheckedCreateWithoutCategoryInput>
  }

  export type MarkaUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MarkaWhereUniqueInput
    data: XOR<MarkaUpdateWithoutCategoryInput, MarkaUncheckedUpdateWithoutCategoryInput>
  }

  export type MarkaUpdateManyWithWhereWithoutCategoryInput = {
    where: MarkaScalarWhereInput
    data: XOR<MarkaUpdateManyMutationInput, MarkaUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MarkaScalarWhereInput = {
    AND?: MarkaScalarWhereInput | MarkaScalarWhereInput[]
    OR?: MarkaScalarWhereInput[]
    NOT?: MarkaScalarWhereInput | MarkaScalarWhereInput[]
    id?: IntFilter<"Marka"> | number
    name?: StringNullableFilter<"Marka"> | string | null
    label?: StringNullableFilter<"Marka"> | string | null
    slug?: StringNullableFilter<"Marka"> | string | null
    categoryId?: IntNullableFilter<"Marka"> | number | null
  }

  export type CategoryCreateWithoutMarkaInput = {
    name?: string | null
    slug?: string | null
    is_active?: boolean | null
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutMarkaInput = {
    id?: number
    name?: string | null
    slug?: string | null
    is_active?: boolean | null
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutMarkaInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMarkaInput, CategoryUncheckedCreateWithoutMarkaInput>
  }

  export type ProductCreateWithoutMarkaInput = {
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    Category?: CategoryCreateNestedOneWithoutProductInput
    Model?: ModelCreateNestedOneWithoutProductsInput
    BayiUser?: BayiUserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutMarkaInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    categoryId?: number | null
    modelId?: number | null
    bayiUserId?: number | null
  }

  export type ProductCreateOrConnectWithoutMarkaInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMarkaInput, ProductUncheckedCreateWithoutMarkaInput>
  }

  export type ProductCreateManyMarkaInputEnvelope = {
    data: ProductCreateManyMarkaInput | ProductCreateManyMarkaInput[]
    skipDuplicates?: boolean
  }

  export type ModelCreateWithoutMarkaInput = {
    name?: string | null
    slug?: string | null
    bazFiyat?: number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    products?: ProductCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutMarkaInput = {
    id?: number
    name?: string | null
    slug?: string | null
    bazFiyat?: number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    products?: ProductUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutMarkaInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutMarkaInput, ModelUncheckedCreateWithoutMarkaInput>
  }

  export type ModelCreateManyMarkaInputEnvelope = {
    data: ModelCreateManyMarkaInput | ModelCreateManyMarkaInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutMarkaInput = {
    update: XOR<CategoryUpdateWithoutMarkaInput, CategoryUncheckedUpdateWithoutMarkaInput>
    create: XOR<CategoryCreateWithoutMarkaInput, CategoryUncheckedCreateWithoutMarkaInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMarkaInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMarkaInput, CategoryUncheckedUpdateWithoutMarkaInput>
  }

  export type CategoryUpdateWithoutMarkaInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMarkaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutMarkaInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutMarkaInput, ProductUncheckedUpdateWithoutMarkaInput>
    create: XOR<ProductCreateWithoutMarkaInput, ProductUncheckedCreateWithoutMarkaInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutMarkaInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutMarkaInput, ProductUncheckedUpdateWithoutMarkaInput>
  }

  export type ProductUpdateManyWithWhereWithoutMarkaInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutMarkaInput>
  }

  export type ModelUpsertWithWhereUniqueWithoutMarkaInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutMarkaInput, ModelUncheckedUpdateWithoutMarkaInput>
    create: XOR<ModelCreateWithoutMarkaInput, ModelUncheckedCreateWithoutMarkaInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutMarkaInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutMarkaInput, ModelUncheckedUpdateWithoutMarkaInput>
  }

  export type ModelUpdateManyWithWhereWithoutMarkaInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutMarkaInput>
  }

  export type ModelScalarWhereInput = {
    AND?: ModelScalarWhereInput | ModelScalarWhereInput[]
    OR?: ModelScalarWhereInput[]
    NOT?: ModelScalarWhereInput | ModelScalarWhereInput[]
    id?: IntFilter<"Model"> | number
    name?: StringNullableFilter<"Model"> | string | null
    slug?: StringNullableFilter<"Model"> | string | null
    bazFiyat?: FloatNullableFilter<"Model"> | number | null
    color?: JsonNullableFilter<"Model">
    storage?: JsonNullableFilter<"Model">
    markaId?: IntNullableFilter<"Model"> | number | null
  }

  export type ProductCreateWithoutModelInput = {
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    Category?: CategoryCreateNestedOneWithoutProductInput
    Marka?: MarkaCreateNestedOneWithoutProductInput
    BayiUser?: BayiUserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutModelInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    categoryId?: number | null
    markaId?: number | null
    bayiUserId?: number | null
  }

  export type ProductCreateOrConnectWithoutModelInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput>
  }

  export type ProductCreateManyModelInputEnvelope = {
    data: ProductCreateManyModelInput | ProductCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type MarkaCreateWithoutModelInput = {
    name?: string | null
    label?: string | null
    slug?: string | null
    Category?: CategoryCreateNestedOneWithoutMarkaInput
    Product?: ProductCreateNestedManyWithoutMarkaInput
  }

  export type MarkaUncheckedCreateWithoutModelInput = {
    id?: number
    name?: string | null
    label?: string | null
    slug?: string | null
    categoryId?: number | null
    Product?: ProductUncheckedCreateNestedManyWithoutMarkaInput
  }

  export type MarkaCreateOrConnectWithoutModelInput = {
    where: MarkaWhereUniqueInput
    create: XOR<MarkaCreateWithoutModelInput, MarkaUncheckedCreateWithoutModelInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutModelInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutModelInput, ProductUncheckedUpdateWithoutModelInput>
    create: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutModelInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutModelInput, ProductUncheckedUpdateWithoutModelInput>
  }

  export type ProductUpdateManyWithWhereWithoutModelInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutModelInput>
  }

  export type MarkaUpsertWithoutModelInput = {
    update: XOR<MarkaUpdateWithoutModelInput, MarkaUncheckedUpdateWithoutModelInput>
    create: XOR<MarkaCreateWithoutModelInput, MarkaUncheckedCreateWithoutModelInput>
    where?: MarkaWhereInput
  }

  export type MarkaUpdateToOneWithWhereWithoutModelInput = {
    where?: MarkaWhereInput
    data: XOR<MarkaUpdateWithoutModelInput, MarkaUncheckedUpdateWithoutModelInput>
  }

  export type MarkaUpdateWithoutModelInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoryUpdateOneWithoutMarkaNestedInput
    Product?: ProductUpdateManyWithoutMarkaNestedInput
  }

  export type MarkaUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    Product?: ProductUncheckedUpdateManyWithoutMarkaNestedInput
  }

  export type UserCreateWithoutAdressInput = {
    name?: string | null
    lastname?: string | null
    email: string
    password: string
    code?: string | null
    emailVerified?: boolean | null
    tel?: string | null
    identityNumber?: string | null
    Role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutAdressInput = {
    id?: number
    name?: string | null
    lastname?: string | null
    email: string
    password: string
    code?: string | null
    emailVerified?: boolean | null
    tel?: string | null
    identityNumber?: string | null
    Role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutAdressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdressInput, UserUncheckedCreateWithoutAdressInput>
  }

  export type UserUpsertWithoutAdressInput = {
    update: XOR<UserUpdateWithoutAdressInput, UserUncheckedUpdateWithoutAdressInput>
    create: XOR<UserCreateWithoutAdressInput, UserUncheckedCreateWithoutAdressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdressInput, UserUncheckedUpdateWithoutAdressInput>
  }

  export type UserUpdateWithoutAdressInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AdressCreateManyUserInput = {
    id?: number
    adressName?: string | null
    name?: string | null
    lastname?: string | null
    identityNumber?: string | null
    tel?: string | null
    adres?: string | null
    postalCode?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    firmaName?: string | null
    vergiDairesi?: string | null
    vergiNo?: string | null
    efatura?: boolean | null
  }

  export type AdressUpdateWithoutUserInput = {
    adressName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    adres?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    firmaName?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    efatura?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AdressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adressName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    adres?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    firmaName?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    efatura?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AdressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adressName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    adres?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    firmaName?: NullableStringFieldUpdateOperationsInput | string | null
    vergiDairesi?: NullableStringFieldUpdateOperationsInput | string | null
    vergiNo?: NullableStringFieldUpdateOperationsInput | string | null
    efatura?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductCreateManyBayiUserInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    categoryId?: number | null
    markaId?: number | null
    modelId?: number | null
  }

  export type ProductUpdateWithoutBayiUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Marka?: MarkaUpdateOneWithoutProductNestedInput
    Model?: ModelUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutBayiUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyWithoutBayiUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    markaId?: number | null
    modelId?: number | null
    bayiUserId?: number | null
  }

  export type MarkaCreateManyCategoryInput = {
    id?: number
    name?: string | null
    label?: string | null
    slug?: string | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Marka?: MarkaUpdateOneWithoutProductNestedInput
    Model?: ModelUpdateOneWithoutProductsNestedInput
    BayiUser?: BayiUserUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableIntFieldUpdateOperationsInput | number | null
    bayiUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableIntFieldUpdateOperationsInput | number | null
    bayiUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkaUpdateWithoutCategoryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    Product?: ProductUpdateManyWithoutMarkaNestedInput
    Model?: ModelUpdateManyWithoutMarkaNestedInput
  }

  export type MarkaUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    Product?: ProductUncheckedUpdateManyWithoutMarkaNestedInput
    Model?: ModelUncheckedUpdateManyWithoutMarkaNestedInput
  }

  export type MarkaUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateManyMarkaInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    categoryId?: number | null
    modelId?: number | null
    bayiUserId?: number | null
  }

  export type ModelCreateManyMarkaInput = {
    id?: number
    name?: string | null
    slug?: string | null
    bazFiyat?: number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductUpdateWithoutMarkaInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Model?: ModelUpdateOneWithoutProductsNestedInput
    BayiUser?: BayiUserUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutMarkaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableIntFieldUpdateOperationsInput | number | null
    bayiUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyWithoutMarkaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableIntFieldUpdateOperationsInput | number | null
    bayiUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ModelUpdateWithoutMarkaInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    products?: ProductUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutMarkaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
    products?: ProductUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateManyWithoutMarkaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bazFiyat?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableJsonNullValueInput | InputJsonValue
    storage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductCreateManyModelInput = {
    id?: number
    name: string
    slug: string
    desc?: string | null
    color?: string | null
    storage?: string | null
    condition?: string | null
    price?: number | null
    inprice?: number | null
    indirimsize?: string | null
    indirim?: boolean | null
    haftaurun?: boolean | null
    stock?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: number | null
    sells?: number | null
    aksesuar?: boolean | null
    kargoTime?: string | null
    imei?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    categoryId?: number | null
    markaId?: number | null
    bayiUserId?: number | null
  }

  export type ProductUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Marka?: MarkaUpdateOneWithoutProductNestedInput
    BayiUser?: BayiUserUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    bayiUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    inprice?: NullableFloatFieldUpdateOperationsInput | number | null
    indirimsize?: NullableStringFieldUpdateOperationsInput | string | null
    indirim?: NullableBoolFieldUpdateOperationsInput | boolean | null
    haftaurun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    onclick?: NullableIntFieldUpdateOperationsInput | number | null
    sells?: NullableIntFieldUpdateOperationsInput | number | null
    aksesuar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kargoTime?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    markaId?: NullableIntFieldUpdateOperationsInput | number | null
    bayiUserId?: NullableIntFieldUpdateOperationsInput | number | null
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