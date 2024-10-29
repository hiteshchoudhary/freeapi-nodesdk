// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ItemAPI from './item';

export class Item extends APIResource {
  /**
   * The API allows users to add a product to their cart or update the quantity of an
   * already added product.
   *
   * The frontend can send a request to this API, passing the `productId` as a path
   * variable and the desired `quantity` as a number in the request body.
   *
   * This API handles both adding new products to the cart and updating the quantity
   * of existing products, providing a convenient way for users to manage their
   * shopping cart. E.g. If user has `4` products already in cart and if user click
   * on `add more` button frontend should send quantity as `5` in the same api.
   *
   * _**NOTES:**_
   *
   * _Quanity that is passed in the request body will be assigned directly and will
   * be treated as a new quantity for the respective product._
   *
   * _Minimum quantity should be 1. Once user decrements it from 1, instead of
   * sending 0 call remove item from cart api._
   */
  create(
    productId: string,
    body?: ItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemCreateResponse>;
  create(productId: string, options?: Core.RequestOptions): Core.APIPromise<ItemCreateResponse>;
  create(
    productId: string,
    body: ItemCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create(productId, {}, body);
    }
    return this._client.post(`/ecommerce/cart/item/${productId}`, { body, ...options });
  }

  /**
   * The API allows users to remove/discard a complete product from their shopping
   * cart, regardless of its quantity.
   *
   * The `productId` is passed as a path variable in the URL.
   *
   * **This API endpoint is designed to remove the specified product entirely** from
   * the user's shopping cart, disregarding any quantity that may have been added
   * previously.
   */
  delete(productId: string, options?: Core.RequestOptions): Core.APIPromise<ItemDeleteResponse> {
    return this._client.delete(`/ecommerce/cart/item/${productId}`, options);
  }
}

export interface ItemCreateResponse {
  data?: ItemCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ItemCreateResponse {
  export interface Data {
    _id?: string;

    cartTotal?: number;

    discountedTotal?: number;

    items?: Array<Data.Item>;
  }

  export namespace Data {
    export interface Item {
      _id?: string;

      coupon?: unknown | null;

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

export interface ItemDeleteResponse {
  data?: Array<ItemDeleteResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ItemDeleteResponse {
  export interface Data {
    _id?: string;

    product?: Data.Product;

    quantity?: number;
  }

  export namespace Data {
    export interface Product {
      _id?: string;

      description?: string;

      mainImage?: Product.MainImage;

      name?: string;

      price?: number;

      stock?: number;
    }

    export namespace Product {
      export interface MainImage {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface ItemCreateParams {
  quantity?: string;
}

export namespace Item {
  export import ItemCreateResponse = ItemAPI.ItemCreateResponse;
  export import ItemDeleteResponse = ItemAPI.ItemDeleteResponse;
  export import ItemCreateParams = ItemAPI.ItemCreateParams;
}
