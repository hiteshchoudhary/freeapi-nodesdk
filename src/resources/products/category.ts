// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CategoryAPI from './category';

export class Category extends APIResource {
  /**
   * The API retrieves a product based on the category it belongs to.
   *
   * The category is determined by the `categoryId` provided as a path variable.
   *
   * By passing the appropriate `categoryId`, this API returns the product that falls
   * within that specific category.
   *
   * This enables users to easily access and retrieve relevant products based on
   * their desired category.
   */
  retrieve(
    categoryId: string,
    query?: CategoryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryRetrieveResponse>;
  retrieve(categoryId: string, options?: Core.RequestOptions): Core.APIPromise<CategoryRetrieveResponse>;
  retrieve(
    categoryId: string,
    query: CategoryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(categoryId, {}, query);
    }
    return this._client.get(`/ecommerce/products/category/${categoryId}`, { query, ...options });
  }
}

export interface CategoryRetrieveResponse {
  data?: CategoryRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CategoryRetrieveResponse {
  export interface Data {
    category?: Data.Category;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: unknown | null;

    page?: number;

    prevPage?: unknown | null;

    products?: Array<Data.Product>;

    serialNumberStartFrom?: number;

    totalPages?: number;

    totalProducts?: number;
  }

  export namespace Data {
    export interface Category {
      _id?: string;

      name?: string;
    }

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

export interface CategoryRetrieveParams {
  limit?: string;

  page?: string;
}

export namespace Category {
  export import CategoryRetrieveResponse = CategoryAPI.CategoryRetrieveResponse;
  export import CategoryRetrieveParams = CategoryAPI.CategoryRetrieveParams;
}
