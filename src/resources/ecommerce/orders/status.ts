// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as StatusAPI from './status';

export class Status extends APIResource {
  /**
   * The API allows an authenticated user with the role of `ADMIN` to update the
   * status of an order.
   *
   * The API expects the `orderId` to be passed as a path variable and the desired
   * status (`DELIVERED` or `CANCELLED`) to be provided in the request body.
   *
   * This API provides a secure and controlled way for administrators to modify the
   * status of an order, enabling efficient order management within the system.
   */
  update(
    orderId: string,
    body?: StatusUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusUpdateResponse>;
  update(orderId: string, options?: Core.RequestOptions): Core.APIPromise<StatusUpdateResponse>;
  update(
    orderId: string,
    body: StatusUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(orderId, {}, body);
    }
    return this._client.patch(`/ecommerce/orders/status/${orderId}`, { body, ...options });
  }
}

export interface StatusUpdateResponse {
  data?: StatusUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace StatusUpdateResponse {
  export interface Data {
    status?: string;
  }
}

export interface StatusUpdateParams {
  status?: string;
}

export namespace Status {
  export import StatusUpdateResponse = StatusAPI.StatusUpdateResponse;
  export import StatusUpdateParams = StatusAPI.StatusUpdateParams;
}
