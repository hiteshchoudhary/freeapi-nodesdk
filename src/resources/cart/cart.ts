// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ItemAPI from './item';
import { Item as ItemAPIItem, ItemCreateParams, ItemCreateResponse, ItemDeleteResponse } from './item';

export class Cart extends APIResource {
  item: ItemAPI.Item = new ItemAPI.Item(this._client);

  /**
   * The API endpoint returns the cart of the logged-in user.
   *
   * This API allows authenticated users to retrieve the contents of their shopping
   * cart.
   *
   * The response typically includes information about the products or items added to
   * the cart, such as their names, quantities, prices, and any relevant details.
   *
   * This endpoint ensures that only authorized users can access and view their own
   * cart data.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<CartRetrieveResponse> {
    return this._client.get('/ecommerce/cart', options);
  }
}

export interface CartRetrieveResponse {
  data?: CartRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CartRetrieveResponse {
  export interface Data {
    _id?: string;

    cartTotal?: number;

    coupon?: Data.Coupon;

    discountedTotal?: number;

    items?: Array<Data.Item>;
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

    export interface Item {
      _id?: string;

      coupon?: string;

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

Cart.Item = ItemAPIItem;

export declare namespace Cart {
  export { type CartRetrieveResponse as CartRetrieveResponse };

  export {
    ItemAPIItem as Item,
    type ItemCreateResponse as ItemCreateResponse,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemCreateParams as ItemCreateParams,
  };
}
