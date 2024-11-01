// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class PathVariable extends APIResource {
  /**
   * The API endpoint allows you to retrieve the path variable being supplied in the
   * URL.
   *
   * By accessing this endpoint, you can obtain the specific value provided as a path
   * parameter in the URL.
   *
   * This functionality is useful when you need to access and utilize **the dynamic
   * portion of the URL** within your application or for further processing.
   */
  retrieve(
    pathVariable: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PathVariableRetrieveResponse> {
    return this._client.get(`/kitchen-sink/request/path-variable/${pathVariable}`, options);
  }
}

export interface PathVariableRetrieveResponse {
  data?: PathVariableRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PathVariableRetrieveResponse {
  export interface Data {
    pathVariable?: string;
  }
}

export declare namespace PathVariable {
  export { type PathVariableRetrieveResponse as PathVariableRetrieveResponse };
}
