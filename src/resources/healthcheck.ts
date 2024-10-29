// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as HealthcheckAPI from './healthcheck';

export class Healthcheck extends APIResource {
  /**
   * This API endpoint is commonly used to determine the health status or
   * availability of a system or service.
   *
   * It is a simple and lightweight endpoint designed to perform a quick health check
   * of the application or infrastructure.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<HealthcheckRetrieveResponse> {
    return this._client.get('/healthcheck', options);
  }
}

export interface HealthcheckRetrieveResponse {
  data?: string;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace Healthcheck {
  export import HealthcheckRetrieveResponse = HealthcheckAPI.HealthcheckRetrieveResponse;
}
