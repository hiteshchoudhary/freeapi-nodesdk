// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ProductAPI from './product';
import { Product, ProductRandomResponse } from './product';

export class RandomProducts extends APIResource {
  product: ProductAPI.Product = new ProductAPI.Product(this._client);

  /**
   * The API endpoint allows you to retrieve a product based on the specified product
   * ID.
   *
   * When accessing this endpoint and providing a valid product ID as a parameter,
   * you will receive a response containing the details of the product matching the
   * provided ID.
   */
  retrieve(productId: string, options?: Core.RequestOptions): Core.APIPromise<RandomProductRetrieveResponse> {
    return this._client.get(`/public/randomproducts/${productId}`, options);
  }

  /**
   * The API endpoint returns a list of dummy products.
   *
   * When accessing this endpoint, you will receive a response containing a
   * collection of dummy product information.
   */
  list(
    query?: RandomProductListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RandomProductListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RandomProductListResponse>;
  list(
    query: RandomProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RandomProductListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/randomproducts', { query, ...options });
  }
}

export interface RandomProductRetrieveResponse {
  data?: RandomProductRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RandomProductRetrieveResponse {
  export interface Data {
    id?: number;

    brand?: string;

    category?: string;

    description?: string;

    discountPercentage?: number;

    images?: Array<string>;

    price?: number;

    rating?: number;

    stock?: number;

    thumbnail?: string;

    title?: string;
  }
}

export interface RandomProductListResponse {
  data?: RandomProductListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RandomProductListResponse {
  export interface Data {
    currentPageItems?: number;

    data?: Array<Data.Data>;

    limit?: number;

    nextPage?: boolean;

    page?: number;

    previousPage?: boolean;

    totalItems?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Data {
      id?: number;

      category?: string;

      images?: Array<string>;

      price?: number;

      thumbnail?: string;

      title?: string;
    }
  }
}

export interface RandomProductListParams {
  inc?: string;

  limit?: string;

  page?: string;

  query?: string;
}

RandomProducts.Product = Product;

export declare namespace RandomProducts {
  export {
    type RandomProductRetrieveResponse as RandomProductRetrieveResponse,
    type RandomProductListResponse as RandomProductListResponse,
    type RandomProductListParams as RandomProductListParams,
  };

  export { Product as Product, type ProductRandomResponse as ProductRandomResponse };
}
