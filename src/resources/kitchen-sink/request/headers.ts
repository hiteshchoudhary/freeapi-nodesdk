// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as HeadersAPI from './headers';

export class Headers extends APIResource {
  /**
   * This API endpoint is designed to provide information about the headers included
   * in an HTTP request made to the API.
   *
   * It allows users to retrieve the details of the headers sent in the request,
   * including their names, values, and any additional relevant information.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<HeaderRetrieveResponse> {
    return this._client.get('/kitchen-sink/request/headers', options);
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
      accept?: string;

      'accept-encoding'?: string;

      'cache-control'?: string;

      connection?: string;

      cookie?: string;

      host?: string;

      'postman-token'?: string;

      'user-agent'?: string;
    }
  }
}

export namespace Headers {
  export import HeaderRetrieveResponse = HeadersAPI.HeaderRetrieveResponse;
}
