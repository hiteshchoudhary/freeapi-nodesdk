// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AdminAPI from './admin';
import { Admin, AdminListParams, AdminListResponse } from './admin';
import * as StatusAPI from './status';
import { Status, StatusUpdateParams, StatusUpdateResponse } from './status';
import * as ProviderAPI from './provider/provider';
import { Provider } from './provider/provider';

export class Orders extends APIResource {
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);
  provider: ProviderAPI.Provider = new ProviderAPI.Provider(this._client);
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * The API allows users to retrieve information about an order placed by a user by
   * specifying the `orderId` as a path variable.
   *
   * This can be used to get complete details of the order for admin or user who has
   * placed the order.
   */
  retrieve(orderId: string, options?: Core.RequestOptions): Core.APIPromise<OrderRetrieveResponse> {
    return this._client.get(`/ecommerce/orders/${orderId}`, options);
  }
}

export interface OrderRetrieveResponse {
  data?: OrderRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace OrderRetrieveResponse {
  export interface Data {
    _id?: string;

    order?: Data.Order;
  }

  export namespace Data {
    export interface Order {
      __v?: number;

      _id?: string;

      address?: Order.Address;

      coupon?: Order.Coupon;

      createdAt?: string;

      customer?: Order.Customer;

      discountedOrderPrice?: number;

      isPaymentDone?: boolean;

      items?: Array<Order.Item>;

      orderPrice?: number;

      paymentId?: string;

      paymentProvider?: string;

      status?: string;

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

      export interface Coupon {
        _id?: string;

        couponCode?: string;

        name?: string;
      }

      export interface Customer {
        _id?: string;

        email?: string;

        username?: string;
      }

      export interface Item {
        _id?: string;

        product?: Item.Product;

        quantity?: number;
      }

      export namespace Item {
        export interface Product {
          __v?: number;

          _id?: string;

          category?: string;

          createdAt?: string;

          description?: string;

          mainImage?: Product.MainImage;

          name?: string;

          owner?: string;

          price?: number;

          stock?: number;

          subImages?: Array<Product.SubImage>;

          updatedAt?: string;
        }

        export namespace Product {
          export interface MainImage {
            _id?: string;

            localPath?: string;

            url?: string;
          }

          export interface SubImage {
            _id?: string;

            localPath?: string;

            url?: string;
          }
        }
      }
    }
  }
}

Orders.Admin = Admin;
Orders.Provider = Provider;
Orders.Status = Status;

export declare namespace Orders {
  export { type OrderRetrieveResponse as OrderRetrieveResponse };

  export {
    Admin as Admin,
    type AdminListResponse as AdminListResponse,
    type AdminListParams as AdminListParams,
  };

  export { Provider as Provider };

  export {
    Status as Status,
    type StatusUpdateResponse as StatusUpdateResponse,
    type StatusUpdateParams as StatusUpdateParams,
  };
}
