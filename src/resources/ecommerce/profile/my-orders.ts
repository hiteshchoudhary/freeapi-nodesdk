// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class MyOrders extends APIResource {
  /**
   * The API endpoint allows you to retrieve the placed orders of the logged-in user
   * in an ecommerce application.
   *
   * When accessing this endpoint, you will receive a response containing the list of
   * orders that have been placed by the currently authenticated user.
   */
  list(query?: MyOrderListParams, options?: Core.RequestOptions): Core.APIPromise<MyOrderListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MyOrderListResponse>;
  list(
    query: MyOrderListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MyOrderListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ecommerce/profile/my-orders', { query, ...options });
  }
}

export interface MyOrderListResponse {
  data?: MyOrderListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace MyOrderListResponse {
  export interface Data {
    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: unknown | null;

    orders?: Array<Data.Order>;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalOrders?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Order {
      __v?: number;

      _id?: string;

      address?: Order.Address;

      coupon?: unknown | null;

      createdAt?: string;

      customer?: Order.Customer;

      discountedOrderPrice?: number;

      isPaymentDone?: boolean;

      orderPrice?: number;

      paymentId?: string;

      paymentProvider?: string;

      status?: string;

      totalOrderItems?: number;

      updatedAt?: string;
    }

    export namespace Order {
      export interface Address {
        __v?: number;

        _id?: string;

        addressLine1?: string;

        addressLine2?: string;

        city?: string;

        country?: string;

        createdAt?: string;

        owner?: string;

        pincode?: string;

        state?: string;

        updatedAt?: string;
      }

      export interface Customer {
        _id?: string;

        email?: string;

        username?: string;
      }
    }
  }
}

export interface MyOrderListParams {
  limit?: string;

  page?: string;
}

export declare namespace MyOrders {
  export { type MyOrderListResponse as MyOrderListResponse, type MyOrderListParams as MyOrderListParams };
}
