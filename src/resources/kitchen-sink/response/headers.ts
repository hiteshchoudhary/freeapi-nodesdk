// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as HeadersAPI from './headers';

export class Headers extends APIResource {
  /**
   * The API endpoint enables you to retrieve the response headers.
   *
   * By accessing this endpoint, you can obtain the headers included in the response
   * of an HTTP request.
   *
   * This functionality is useful for inspecting and retrieving important metadata
   * and information associated with the response, such as content type, cache
   * control, and authentication-related headers.
   *
   * It allows you to access and utilize the response headers for further processing
   * or to gather relevant information from the API response.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<HeaderRetrieveResponse> {
    return this._client.get('/kitchen-sink/response/headers', options);
  }
}

export interface HeaderRetrieveResponse {
  data?: HeaderRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace HeaderRetrieveResponse {
  export interface Data {
    headers?: Data.Headers;
  }

  export namespace Data {
    export interface Headers {
      'access-control-allow-credentials'?: string;

      'access-control-allow-origin'?: string;

      'content-length'?: string;

      'content-type'?: string;

      etag?: string;

      'x-powered-by'?: string;
    }
  }
}

export namespace Headers {
  export import HeaderRetrieveResponse = HeadersAPI.HeaderRetrieveResponse;
}
