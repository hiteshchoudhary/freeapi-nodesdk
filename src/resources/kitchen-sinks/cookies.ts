// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Cookies extends APIResource {
  /**
   * The API endpoint allows you to set cookies on the client's browser as part of
   * the response.
   *
   * When accessing this endpoint, you can include specific cookie information in the
   * response headers, which will be stored by the client's browser for future
   * requests.
   *
   * This functionality enables you to set and manage cookies on the client side,
   * which can be used for various purposes such as session management, user
   * authentication, personalization, or tracking user preferences within your
   * application.
   */
  create(body?: CookieCreateParams, options?: Core.RequestOptions): Core.APIPromise<CookieCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<CookieCreateResponse>;
  create(
    body: CookieCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CookieCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/kitchen-sink/cookies/set', { body, ...options });
  }

  /**
   * The API endpoint allows you to retrieve the cookies sent by the client as part
   * of the request.
   *
   * When accessing this endpoint, you will receive the cookies that were included in
   * the request headers from the client.
   *
   * This functionality enables you to access and utilize the cookie data sent by the
   * client for various purposes, such as session management, authentication, or
   * personalization within your application.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<CookieRetrieveResponse> {
    return this._client.get('/kitchen-sink/cookies/get', options);
  }

  /**
   * The API endpoint facilitates the deletion of cookies from the client's browser.
   *
   * By accessing this endpoint, you can send a response that instructs the client's
   * browser to remove specific cookies associated with your application.
   *
   * This functionality allows you to manage and revoke cookies on the client side,
   * enabling tasks such as clearing session data, implementing logouts, or removing
   * user preferences stored in cookies.
   */
  remove(params?: CookieRemoveParams, options?: Core.RequestOptions): Core.APIPromise<CookieRemoveResponse>;
  remove(options?: Core.RequestOptions): Core.APIPromise<CookieRemoveResponse>;
  remove(
    params: CookieRemoveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CookieRemoveResponse> {
    if (isRequestOptions(params)) {
      return this.remove({}, params);
    }
    const { cookieKey } = params;
    return this._client.delete('/kitchen-sink/cookies/remove', { query: { cookieKey }, ...options });
  }
}

export interface CookieCreateResponse {
  data?: CookieCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CookieCreateResponse {
  export interface Data {
    cookies?: Data.Cookies;
  }

  export namespace Data {
    export interface Cookies {
      foo?: string;
    }
  }
}

export interface CookieRetrieveResponse {
  data?: CookieRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CookieRetrieveResponse {
  export interface Data {
    cookies?: Data.Cookies;
  }

  export namespace Data {
    export interface Cookies {
      foo?: string;
    }
  }
}

export interface CookieRemoveResponse {
  data?: CookieRemoveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CookieRemoveResponse {
  export interface Data {
    cookies?: unknown;
  }
}

export interface CookieCreateParams {
  foo?: string;
}

export interface CookieRemoveParams {
  cookieKey?: string;
}

export declare namespace Cookies {
  export {
    type CookieCreateResponse as CookieCreateResponse,
    type CookieRetrieveResponse as CookieRetrieveResponse,
    type CookieRemoveResponse as CookieRemoveResponse,
    type CookieCreateParams as CookieCreateParams,
    type CookieRemoveParams as CookieRemoveParams,
  };
}
