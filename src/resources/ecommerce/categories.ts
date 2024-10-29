// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CategoriesAPI from './categories';

export class Categories extends APIResource {
  /**
   * The API endpoint allows an administrator user with the appropriate role to
   * create a new category.
   *
   * By sending a request to this endpoint with the desired category `name` provided
   * in the request body, the API will create a new category in the system.
   *
   * This functionality is restricted to users with an `ADMIN` role to ensure proper
   * access control and authorization.
   */
  create(body?: CategoryCreateParams, options?: Core.RequestOptions): Core.APIPromise<CategoryCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<CategoryCreateResponse>;
  create(
    body: CategoryCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/ecommerce/categories', { body, ...options });
  }

  /**
   * The API endpoint allows users to fetch a category based on the `categoryId`
   * provided as a path variable in the URL.
   *
   * When accessing this endpoint and providing a valid `categoryId`, the response
   * will contain the details and information associated with the specified category.
   */
  retrieve(categoryId: string, options?: Core.RequestOptions): Core.APIPromise<CategoryRetrieveResponse> {
    return this._client.get(`/ecommerce/categories/${categoryId}`, options);
  }

  /**
   * The API endpoint allows users with an `ADMIN` role to update a category by
   * providing the category `name` key in the request body and the `categoryId` in
   * the URL path variable.
   *
   * This functionality enables administrators to modify and manage category
   * information within the system.
   *
   * By accessing this endpoint, authorized administrators can update the specified
   * category's name key to reflect any necessary changes or updates.
   */
  update(
    categoryId: string,
    body?: CategoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateResponse>;
  update(categoryId: string, options?: Core.RequestOptions): Core.APIPromise<CategoryUpdateResponse>;
  update(
    categoryId: string,
    body: CategoryUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(categoryId, {}, body);
    }
    return this._client.patch(`/ecommerce/categories/${categoryId}`, { body, ...options });
  }

  /**
   * The API endpoint allows users to fetch all the available categories in an
   * e-commerce application.
   *
   * When accessing this endpoint, users will receive a response containing a list of
   * categories that exist within the e-commerce app.
   */
  list(query?: CategoryListParams, options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse>;
  list(
    query: CategoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ecommerce/categories', { query, ...options });
  }

  /**
   * The API endpoint allows an administrator to delete a category by providing the
   * `categoryId` as a path variable in the URL.
   *
   * This functionality is specific to users with an `ADMIN` role and is designed to
   * facilitate category management tasks.
   *
   * By accessing this endpoint and specifying the `categoryId`, the category
   * associated with that ID will be permanently deleted from the system.
   */
  delete(categoryId: string, options?: Core.RequestOptions): Core.APIPromise<CategoryDeleteResponse> {
    return this._client.delete(`/ecommerce/categories/${categoryId}`, options);
  }
}

export interface CategoryCreateResponse {
  data?: CategoryCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CategoryCreateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    createdAt?: string;

    name?: string;

    owner?: string;

    updatedAt?: string;
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
    __v?: number;

    _id?: string;

    createdAt?: string;

    name?: string;

    owner?: string;

    updatedAt?: string;
  }
}

export interface CategoryUpdateResponse {
  data?: CategoryUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CategoryUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    createdAt?: string;

    name?: string;

    owner?: string;

    updatedAt?: string;
  }
}

export interface CategoryListResponse {
  data?: CategoryListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CategoryListResponse {
  export interface Data {
    categories?: Array<Data.Category>;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: number;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalCategories?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Category {
      __v?: number;

      _id?: string;

      createdAt?: string;

      name?: string;

      owner?: string;

      updatedAt?: string;
    }
  }
}

export interface CategoryDeleteResponse {
  data?: CategoryDeleteResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CategoryDeleteResponse {
  export interface Data {
    deletedCategory?: Data.DeletedCategory;
  }

  export namespace Data {
    export interface DeletedCategory {
      __v?: number;

      _id?: string;

      createdAt?: string;

      name?: string;

      owner?: string;

      updatedAt?: string;
    }
  }
}

export interface CategoryCreateParams {
  name?: string;
}

export interface CategoryUpdateParams {
  name?: string;
}

export interface CategoryListParams {
  limit?: string;

  page?: string;
}

export namespace Categories {
  export import CategoryCreateResponse = CategoriesAPI.CategoryCreateResponse;
  export import CategoryRetrieveResponse = CategoriesAPI.CategoryRetrieveResponse;
  export import CategoryUpdateResponse = CategoriesAPI.CategoryUpdateResponse;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
  export import CategoryDeleteResponse = CategoriesAPI.CategoryDeleteResponse;
  export import CategoryCreateParams = CategoriesAPI.CategoryCreateParams;
  export import CategoryUpdateParams = CategoriesAPI.CategoryUpdateParams;
  export import CategoryListParams = CategoriesAPI.CategoryListParams;
}
