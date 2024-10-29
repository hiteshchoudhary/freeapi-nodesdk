// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ProductAPI from './product';

export class Product extends APIResource {
  /**
   * The API endpoint allows you to retrieve a randomly generated dummy product.
   *
   * When accessing this endpoint, you will receive a response containing the details
   * of a randomly generated product.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<ProductRandomResponse> {
    return this._client.get('/public/randomproducts/product/random', options);
  }
}

export interface ProductRandomResponse {
  data?: ProductRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProductRandomResponse {
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

export namespace Product {
  export import ProductRandomResponse = ProductAPI.ProductRandomResponse;
}
