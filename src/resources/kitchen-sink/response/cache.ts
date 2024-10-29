// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CacheAPI from './cache';

export class Cache extends APIResource {
  /**
   * - `Cache-control` is an HTTP header used to specify browser caching policies in
   *   both client requests and server responses.
   *
   * - Policies include how a resource is cached, where it’s cached and its maximum
   *   age before expiring (i.e., time to live)
   *
   * _For example,_
   *
   * `cache-control: max-age=120` means that the returned resource is valid for
   * **120** seconds, after which the browser has to request a newer version.
   *
   * - The `public` (cacheResponseDirective) response directive indicates that a
   *   resource can be cached by any cache.
   *
   * - The `private` (cacheResponseDirective) response directive indicates that a
   *   resource is user specific - it can still be cached, but only on a client
   *   device. For example, a web page response marked as private can be cached by a
   *   desktop browser, but not a content delivery network (CDN).
   */
  retrieve(
    timeToLive: string,
    cacheResponseDirective: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheRetrieveResponse> {
    return this._client.get(`/kitchen-sink/response/cache/${timeToLive}/${cacheResponseDirective}`, options);
  }
}

export interface CacheRetrieveResponse {
  data?: CacheRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CacheRetrieveResponse {
  export interface Data {
    headers?: Data.Headers;
  }

  export namespace Data {
    export interface Headers {
      'access-control-allow-credentials'?: string;

      'access-control-allow-origin'?: string;

      'cache-control'?: string;

      'x-powered-by'?: string;
    }
  }
}

export namespace Cache {
  export import CacheRetrieveResponse = CacheAPI.CacheRetrieveResponse;
}
