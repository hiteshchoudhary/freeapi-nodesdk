// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Freeapiapp {
  export import RequestOptions = Core.RequestOptions;

  export import Public = API.Public;

  export import KitchenSink = API.KitchenSink;

  export import KitchenSinks = API.KitchenSinks;
  export import KitchenSinkResponseBrotliResponse = API.KitchenSinkResponseBrotliResponse;
  export import KitchenSinkResponseGzipResponse = API.KitchenSinkResponseGzipResponse;
  export import KitchenSinkRedirectToParams = API.KitchenSinkRedirectToParams;

  export import Authentications = API.Authentications;
  export import AuthenticationCurrentUserResponse = API.AuthenticationCurrentUserResponse;
  export import AuthenticationLoginResponse = API.AuthenticationLoginResponse;
  export import AuthenticationLogoutResponse = API.AuthenticationLogoutResponse;
  export import AuthenticationRegisterResponse = API.AuthenticationRegisterResponse;
  export import AuthenticationVerifyEmailResponse = API.AuthenticationVerifyEmailResponse;
  export import AuthenticationLoginParams = API.AuthenticationLoginParams;
  export import AuthenticationRegisterParams = API.AuthenticationRegisterParams;

  export import Users = API.Users;
  export import UserAssignRoleResponse = API.UserAssignRoleResponse;
  export import UserChangePasswordResponse = API.UserChangePasswordResponse;
  export import UserForgotPasswordResponse = API.UserForgotPasswordResponse;
  export import UserRefreshTokenResponse = API.UserRefreshTokenResponse;
  export import UserResendEmailVerificationResponse = API.UserResendEmailVerificationResponse;
  export import UserResetPasswordResponse = API.UserResetPasswordResponse;
  export import UserAssignRoleParams = API.UserAssignRoleParams;
  export import UserChangePasswordParams = API.UserChangePasswordParams;
  export import UserForgotPasswordParams = API.UserForgotPasswordParams;
  export import UserResetPasswordParams = API.UserResetPasswordParams;

  export import Ecommerce = API.Ecommerce;

  export import Products = API.Products;
  export import ProductCreateResponse = API.ProductCreateResponse;
  export import ProductRetrieveResponse = API.ProductRetrieveResponse;
  export import ProductUpdateResponse = API.ProductUpdateResponse;
  export import ProductListResponse = API.ProductListResponse;
  export import ProductDeleteResponse = API.ProductDeleteResponse;
  export import ProductCreateParams = API.ProductCreateParams;
  export import ProductUpdateParams = API.ProductUpdateParams;
  export import ProductListParams = API.ProductListParams;

  export import Cart = API.Cart;
  export import CartRetrieveResponse = API.CartRetrieveResponse;

  export import Todos = API.Todos;
  export import TodoCreateResponse = API.TodoCreateResponse;
  export import TodoRetrieveResponse = API.TodoRetrieveResponse;
  export import TodoUpdateResponse = API.TodoUpdateResponse;
  export import TodoListResponse = API.TodoListResponse;
  export import TodoDeleteResponse = API.TodoDeleteResponse;
  export import TodoToggleStatusResponse = API.TodoToggleStatusResponse;
  export import TodoCreateParams = API.TodoCreateParams;
  export import TodoUpdateParams = API.TodoUpdateParams;
  export import TodoListParams = API.TodoListParams;

  export import SocialMedia = API.SocialMedia;

  export import ChatApp = API.ChatApp;

  export import Chats = API.Chats;
  export import ChatRemoveResponse = API.ChatRemoveResponse;

  export import Messages = API.Messages;
  export import MessageListResponse = API.MessageListResponse;
  export import MessageSendResponse = API.MessageSendResponse;
  export import MessageSendParams = API.MessageSendParams;

  export import Seed = API.Seed;

  export import ResetDB = API.ResetDB;
  export import ResetDBDeleteResponse = API.ResetDBDeleteResponse;

  export import Healthcheck = API.Healthcheck;
  export import HealthcheckRetrieveResponse = API.HealthcheckRetrieveResponse;
}

export default Freeapiapp;
