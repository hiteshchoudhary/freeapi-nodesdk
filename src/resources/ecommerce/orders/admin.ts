// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AdminAPI from './admin';

export class Admin extends APIResource {
  /**
   * The API allows users with the `ADMIN` role to fetch orders placed by users on an
   * ecommerce site.
   *
   * The API endpoint provides the ability to filter orders based on their status as
   * well.
   *
   * To filter by status, the client can pass an `order` query parameter in the URL,
   * which can have one of the following values: `PENDING`, `DELIVERED`, or
   * `CANCELLED`. This allows the admin user to retrieve specific sets of orders
   * based on their status.
   *
   * **NOTE:** This api returns data which is useful to show list view of the item.
   *
   * This api does not contain complete details of the products ordered instead the
   * count of the ordered products as generally UI will show the product details in
   * the list format.
   *
   * To get complete details of the order call `Get order by id` api.
   */
  list(query?: AdminListParams, options?: Core.RequestOptions): Core.APIPromise<AdminListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AdminListResponse>;
  list(
    query: AdminListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ecommerce/orders/list/admin', { query, ...options });
  }
}

export interface AdminListResponse {
  data?: AdminListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AdminListResponse {
  export interface Data {
    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: unknown | null;

    orders?: Array<Data.Order>;

    page?: number;

    prevPage?: number;

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

export interface AdminListParams {
  limit?: string;

  page?: string;

  /**
   * PENDING | DELIVERED | CENCELLED
   */
  status?: string;
}

export namespace Admin {
  export import AdminListResponse = AdminAPI.AdminListResponse;
  export import AdminListParams = AdminAPI.AdminListParams;
}
