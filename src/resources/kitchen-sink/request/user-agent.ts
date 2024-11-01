// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class UserAgent extends APIResource {
  /**
   * This API endpoint is designed to provide information about the user agent string
   * associated with the client making the request.
   *
   * It allows users to retrieve details about the user agent, which typically
   * includes the name and version of the client's software or web browser.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<UserAgentRetrieveResponse> {
    return this._client.get('/kitchen-sink/request/user-agent', options);
  }
}

export interface UserAgentRetrieveResponse {
  data?: UserAgentRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace UserAgentRetrieveResponse {
  export interface Data {
    userAgent?: string;
  }
}

export declare namespace UserAgent {
  export { type UserAgentRetrieveResponse as UserAgentRetrieveResponse };
}
