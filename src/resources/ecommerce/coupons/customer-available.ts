// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as CustomerAvailableAPI from './customer-available';

export class CustomerAvailable extends APIResource {
  /**
   * The API allows a logged-in user to retrieve a list of coupons based on their
   * total shopping cart amount.
   *
   * The API takes into account the user's current cart total and returns a list of
   * valid coupon codes that the user is eligible to apply.
   *
   * This functionality helps users find applicable discounts for their purchases,
   * enhancing their shopping experience.
   */
  list(
    query?: CustomerAvailableListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerAvailableListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CustomerAvailableListResponse>;
  list(
    query: CustomerAvailableListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerAvailableListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ecommerce/coupons/customer/available', { query, ...options });
  }
}

export interface CustomerAvailableListResponse {
  data?: CustomerAvailableListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CustomerAvailableListResponse {
  export interface Data {
    coupons?: Array<Data.Coupon>;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: number;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalCoupons?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Coupon {
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
}

export interface CustomerAvailableListParams {
  limit?: string;

  page?: string;
}

export namespace CustomerAvailable {
  export import CustomerAvailableListResponse = CustomerAvailableAPI.CustomerAvailableListResponse;
  export import CustomerAvailableListParams = CustomerAvailableAPI.CustomerAvailableListParams;
}
