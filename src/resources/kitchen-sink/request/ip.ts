// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class IP extends APIResource {
  /**
   * This API endpoint is designed to provide the current client's IP (Internet
   * Protocol) address.
   *
   * It allows users to retrieve the IP address from which the client is making the
   * request to the API.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<IPRetrieveResponse> {
    return this._client.get('/kitchen-sink/request/ip', options);
  }
}

export interface IPRetrieveResponse {
  data?: IPRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace IPRetrieveResponse {
  export interface Data {
    ip?: string;

    ipv?: string;
  }
}

export declare namespace IP {
  export { type IPRetrieveResponse as IPRetrieveResponse };
}
