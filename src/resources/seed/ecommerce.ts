// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EcommerceAPI from './ecommerce';

export class Ecommerce extends APIResource {
  /**
   * This API endpoint is responsible for populating all the essential entities
   * required for an ecommerce service in the database.
   *
   * It provides a convenient way for developers to initialize the ecommerce system
   * with dummy or sample data for testing or development purposes.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<EcommerceCreateResponse> {
    return this._client.post('/seed/ecommerce', options);
  }
}

export interface EcommerceCreateResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace Ecommerce {
  export import EcommerceCreateResponse = EcommerceAPI.EcommerceCreateResponse;
}
