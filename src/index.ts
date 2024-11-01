// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AuthenticationCurrentUserResponse,
  AuthenticationLoginParams,
  AuthenticationLoginResponse,
  AuthenticationLogoutResponse,
  AuthenticationRegisterParams,
  AuthenticationRegisterResponse,
  AuthenticationVerifyEmailResponse,
  Authentications,
} from './resources/authentications';
import { Healthcheck, HealthcheckRetrieveResponse } from './resources/healthcheck';
import { MessageListResponse, MessageSendParams, MessageSendResponse, Messages } from './resources/messages';
import { ResetDB, ResetDBDeleteResponse } from './resources/reset-db';
import {
  TodoCreateParams,
  TodoCreateResponse,
  TodoDeleteResponse,
  TodoListParams,
  TodoListResponse,
  TodoRetrieveResponse,
  TodoToggleStatusResponse,
  TodoUpdateParams,
  TodoUpdateResponse,
  Todos,
} from './resources/todos';
import { Cart, CartRetrieveResponse } from './resources/cart/cart';
import { ChatApp } from './resources/chat-app/chat-app';
import { ChatRemoveResponse, Chats } from './resources/chats/chats';
import { Ecommerce } from './resources/ecommerce/ecommerce';
import { KitchenSink } from './resources/kitchen-sink/kitchen-sink';
import {
  KitchenSinkRedirectToParams,
  KitchenSinkResponseBrotliResponse,
  KitchenSinkResponseGzipResponse,
  KitchenSinks,
} from './resources/kitchen-sinks/kitchen-sinks';
import {
  ProductCreateParams,
  ProductCreateResponse,
  ProductDeleteResponse,
  ProductListParams,
  ProductListResponse,
  ProductRetrieveResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
  Products,
} from './resources/products/products';
import { Public } from './resources/public/public';
import { Seed } from './resources/seed/seed';
import { SocialMedia } from './resources/social-media/social-media';
import {
  UserAssignRoleParams,
  UserAssignRoleResponse,
  UserChangePasswordParams,
  UserChangePasswordResponse,
  UserForgotPasswordParams,
  UserForgotPasswordResponse,
  UserRefreshTokenResponse,
  UserResendEmailVerificationResponse,
  UserResetPasswordParams,
  UserResetPasswordResponse,
  Users,
} from './resources/users/users';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['FREEAPIAPP_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Freeapiapp API.
 */
export class Freeapiapp extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Freeapiapp API.
   *
   * @param {string} [opts.baseURL=process.env['FREEAPIAPP_BASE_URL'] ?? https://api.freeapi.app/api/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('FREEAPIAPP_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `https://api.freeapi.app/api/v1`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  public: API.Public = new API.Public(this);
  kitchenSink: API.KitchenSink = new API.KitchenSink(this);
  kitchenSinks: API.KitchenSinks = new API.KitchenSinks(this);
  authentications: API.Authentications = new API.Authentications(this);
  users: API.Users = new API.Users(this);
  ecommerce: API.Ecommerce = new API.Ecommerce(this);
  products: API.Products = new API.Products(this);
  cart: API.Cart = new API.Cart(this);
  todos: API.Todos = new API.Todos(this);
  socialMedia: API.SocialMedia = new API.SocialMedia(this);
  chatApp: API.ChatApp = new API.ChatApp(this);
  chats: API.Chats = new API.Chats(this);
  messages: API.Messages = new API.Messages(this);
  seed: API.Seed = new API.Seed(this);
  resetDB: API.ResetDB = new API.ResetDB(this);
  healthcheck: API.Healthcheck = new API.Healthcheck(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static Freeapiapp = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static FreeapiappError = Errors.FreeapiappError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export {
  FreeapiappError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Freeapiapp.Public = Public;
Freeapiapp.KitchenSink = KitchenSink;
Freeapiapp.KitchenSinks = KitchenSinks;
Freeapiapp.Authentications = Authentications;
Freeapiapp.Users = Users;
Freeapiapp.Ecommerce = Ecommerce;
Freeapiapp.Products = Products;
Freeapiapp.Cart = Cart;
Freeapiapp.Todos = Todos;
Freeapiapp.SocialMedia = SocialMedia;
Freeapiapp.ChatApp = ChatApp;
Freeapiapp.Chats = Chats;
Freeapiapp.Messages = Messages;
Freeapiapp.Seed = Seed;
Freeapiapp.ResetDB = ResetDB;
Freeapiapp.Healthcheck = Healthcheck;

export declare namespace Freeapiapp {
  export type RequestOptions = Core.RequestOptions;

  export { Public as Public };

  export { KitchenSink as KitchenSink };

  export {
    KitchenSinks as KitchenSinks,
    type KitchenSinkResponseBrotliResponse as KitchenSinkResponseBrotliResponse,
    type KitchenSinkResponseGzipResponse as KitchenSinkResponseGzipResponse,
    type KitchenSinkRedirectToParams as KitchenSinkRedirectToParams,
  };

  export {
    Authentications as Authentications,
    type AuthenticationCurrentUserResponse as AuthenticationCurrentUserResponse,
    type AuthenticationLoginResponse as AuthenticationLoginResponse,
    type AuthenticationLogoutResponse as AuthenticationLogoutResponse,
    type AuthenticationRegisterResponse as AuthenticationRegisterResponse,
    type AuthenticationVerifyEmailResponse as AuthenticationVerifyEmailResponse,
    type AuthenticationLoginParams as AuthenticationLoginParams,
    type AuthenticationRegisterParams as AuthenticationRegisterParams,
  };

  export {
    Users as Users,
    type UserAssignRoleResponse as UserAssignRoleResponse,
    type UserChangePasswordResponse as UserChangePasswordResponse,
    type UserForgotPasswordResponse as UserForgotPasswordResponse,
    type UserRefreshTokenResponse as UserRefreshTokenResponse,
    type UserResendEmailVerificationResponse as UserResendEmailVerificationResponse,
    type UserResetPasswordResponse as UserResetPasswordResponse,
    type UserAssignRoleParams as UserAssignRoleParams,
    type UserChangePasswordParams as UserChangePasswordParams,
    type UserForgotPasswordParams as UserForgotPasswordParams,
    type UserResetPasswordParams as UserResetPasswordParams,
  };

  export { Ecommerce as Ecommerce };

  export {
    Products as Products,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export { Cart as Cart, type CartRetrieveResponse as CartRetrieveResponse };

  export {
    Todos as Todos,
    type TodoCreateResponse as TodoCreateResponse,
    type TodoRetrieveResponse as TodoRetrieveResponse,
    type TodoUpdateResponse as TodoUpdateResponse,
    type TodoListResponse as TodoListResponse,
    type TodoDeleteResponse as TodoDeleteResponse,
    type TodoToggleStatusResponse as TodoToggleStatusResponse,
    type TodoCreateParams as TodoCreateParams,
    type TodoUpdateParams as TodoUpdateParams,
    type TodoListParams as TodoListParams,
  };

  export { SocialMedia as SocialMedia };

  export { ChatApp as ChatApp };

  export { Chats as Chats, type ChatRemoveResponse as ChatRemoveResponse };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageSendParams as MessageSendParams,
  };

  export { Seed as Seed };

  export { ResetDB as ResetDB, type ResetDBDeleteResponse as ResetDBDeleteResponse };

  export { Healthcheck as Healthcheck, type HealthcheckRetrieveResponse as HealthcheckRetrieveResponse };
}

export default Freeapiapp;
