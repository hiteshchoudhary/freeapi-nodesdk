// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Status extends APIResource {
  /**
   * The API endpoint allows an administrator role user to update the activity status
   * of a coupon.
   *
   * It expects a request with a path variable `couponId` indicating the specific
   * coupon to update. In the request body, there should be a `isActive` key, which
   * is a boolean value indicating the desired status of the coupon.
   *
   * When this API is called, it toggles the active status of the coupon. This
   * functionality allows the administrator to enable or disable the use of certain
   * coupon codes in the application.
   */
  update(
    couponId: string,
    body?: StatusUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusUpdateResponse>;
  update(couponId: string, options?: Core.RequestOptions): Core.APIPromise<StatusUpdateResponse>;
  update(
    couponId: string,
    body: StatusUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(couponId, {}, body);
    }
    return this._client.patch(`/ecommerce/coupons/status/${couponId}`, { body, ...options });
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
    __v?: number;

    _id?: string;

    couponCode?: string;

    createdAt?: string;

    discountValue?: number;

    expiryDate?: string;

    isActive?: boolean;

    minimumCartValue?: number;

    name?: string;

    owner?: string;

    startDate?: string;

    type?: string;

    updatedAt?: string;
  }
}

export interface StatusUpdateParams {
  isActive?: boolean;
}

export declare namespace Status {
  export { type StatusUpdateResponse as StatusUpdateResponse, type StatusUpdateParams as StatusUpdateParams };
}
