// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ProductsAPI from './products';
import * as CategoryAPI from './category';
import * as SubimageAPI from './subimage';

export class Products extends APIResource {
  category: CategoryAPI.Category = new CategoryAPI.Category(this._client);
  subimage: SubimageAPI.Subimage = new SubimageAPI.Subimage(this._client);

  /**
   * The API enables an authenticated user with the role of `ADMIN` to create a
   * product by providing various details in the request body using form data.
   *
   * The required fields for creating a product includes:
   *
   * - name
   * - description
   * - price
   * - stock quantity
   * - category (referenced by the category ID),
   * - mainImage (representing the main product image),
   * - subImages (up to **4** additional images that can be viewed in a carousel on
   *   the frontend).
   *
   * By submitting this information via form data, the API allows administrators to
   * efficiently add new products to the system, ensuring accurate and comprehensive
   * product listings for users.
   */
  create(body?: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProductCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<ProductCreateResponse>;
  create(
    body: ProductCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/ecommerce/products', Core.multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * The API retrieves a product based on the provided `productId` passed as a path
   * variable.
   *
   * This API serves as a means to fetch specific product information from the
   * backend based on a unique identifier.
   *
   * By passing the `productId` in the URL, the API searches and retrieves the
   * corresponding product details, including attributes such as name, price,
   * description, stock, images and any other relevant information associated with
   * the product.
   */
  retrieve(productId: string, options?: Core.RequestOptions): Core.APIPromise<ProductRetrieveResponse> {
    return this._client.get(`/ecommerce/products/${productId}`, options);
  }

  /**
   * The API enables an authenticated user with the role of `ADMIN` to update a
   * product's information.
   *
   * By passing the `productId` as a path variable, the API allows the user to modify
   * the product's attributes such as name, description, price, stock, category
   * (referenced by categoryId), mainImage (the primary image), and subImages (up to
   * four additional images displayed in a carousel on the frontend).
   *
   * All of these fields can be included in the request body as form data, and they
   * are optional, meaning that only the provided fields will be updated.
   */
  update(
    productId: string,
    body?: ProductUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductUpdateResponse>;
  update(productId: string, options?: Core.RequestOptions): Core.APIPromise<ProductUpdateResponse>;
  update(
    productId: string,
    body: ProductUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(productId, {}, body);
    }
    return this._client.patch(
      `/ecommerce/products/${productId}`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * The API returns all the products available in an e-commerce application.
   *
   * When invoked, this API fetches and retrieves the complete list of products
   * offered by the e-commerce platform.
   *
   * The response typically includes details such as the product name, description,
   * price, stock, and other relevant information.
   *
   * This API allows users or other systems to access and display the entire catalog
   * of products, facilitating browsing and purchasing decisions within the
   * e-commerce application.
   */
  list(query?: ProductListParams, options?: Core.RequestOptions): Core.APIPromise<ProductListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ProductListResponse>;
  list(
    query: ProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ecommerce/products', { query, ...options });
  }

  /**
   * The API allows an authenticated user with the role of `ADMIN` to delete a
   * product from the system.
   *
   * It expects the `productId` to be passed as a path variable.
   *
   * By utilizing this API, administrators can easily remove products from the
   * inventory or catalog.
   */
  delete(productId: string, options?: Core.RequestOptions): Core.APIPromise<ProductDeleteResponse> {
    return this._client.delete(`/ecommerce/products/${productId}`, options);
  }
}

export interface ProductCreateResponse {
  data?: ProductCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProductCreateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    category?: string;

    createdAt?: string;

    description?: string;

    mainImage?: string;

    name?: string;

    owner?: string;

    price?: number;

    stock?: number;

    subImages?: Array<string>;

    updatedAt?: string;
  }
}

export interface ProductRetrieveResponse {
  data?: ProductRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProductRetrieveResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    category?: string;

    createdAt?: string;

    description?: string;

    mainImage?: Data.MainImage;

    name?: string;

    owner?: string;

    price?: number;

    stock?: number;

    subImages?: Array<Data.SubImage>;

    updatedAt?: string;
  }

  export namespace Data {
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

export interface ProductUpdateResponse {
  data?: ProductUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProductUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    category?: string;

    createdAt?: string;

    description?: string;

    mainImage?: Data.MainImage;

    name?: string;

    owner?: string;

    price?: number;

    stock?: number;

    subImages?: Array<Data.SubImage>;

    updatedAt?: string;
  }

  export namespace Data {
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

export interface ProductListResponse {
  data?: ProductListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProductListResponse {
  export interface Data {
    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: number;

    page?: number;

    prevPage?: unknown | null;

    products?: Array<Data.Product>;

    serialNumberStartFrom?: number;

    totalPages?: number;

    totalProducts?: number;
  }

  export namespace Data {
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

export interface ProductDeleteResponse {
  data?: ProductDeleteResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProductDeleteResponse {
  export interface Data {
    deletedProduct?: Data.DeletedProduct;
  }

  export namespace Data {
    export interface DeletedProduct {
      __v?: number;

      _id?: string;

      category?: string;

      createdAt?: string;

      description?: string;

      mainImage?: string;

      name?: string;

      owner?: string;

      price?: number;

      stock?: number;

      subImages?: Array<string>;

      updatedAt?: string;
    }
  }
}

export interface ProductCreateParams {
  category?: string;

  description?: string;

  /**
   * FIle
   */
  mainImage?: Core.Uploadable;

  name?: string;

  price?: string;

  stock?: string;

  /**
   * subImages is a multiple images field having 4 as a maximum number of images
   * limit
   */
  subImages?: Core.Uploadable;
}

export interface ProductUpdateParams {
  category?: string;

  description?: string;

  /**
   * File
   */
  mainImage?: Core.Uploadable;

  name?: string;

  price?: string;

  stock?: string;

  /**
   * subImages is a multiple images field having 4 as a maximum number of images
   * limit
   */
  subImages?: Core.Uploadable;
}

export interface ProductListParams {
  limit?: string;

  page?: string;
}

export namespace Products {
  export import ProductCreateResponse = ProductsAPI.ProductCreateResponse;
  export import ProductRetrieveResponse = ProductsAPI.ProductRetrieveResponse;
  export import ProductUpdateResponse = ProductsAPI.ProductUpdateResponse;
  export import ProductListResponse = ProductsAPI.ProductListResponse;
  export import ProductDeleteResponse = ProductsAPI.ProductDeleteResponse;
  export import ProductCreateParams = ProductsAPI.ProductCreateParams;
  export import ProductUpdateParams = ProductsAPI.ProductUpdateParams;
  export import ProductListParams = ProductsAPI.ProductListParams;
  export import Category = CategoryAPI.Category;
  export import CategoryRetrieveResponse = CategoryAPI.CategoryRetrieveResponse;
  export import CategoryRetrieveParams = CategoryAPI.CategoryRetrieveParams;
  export import Subimage = SubimageAPI.Subimage;
  export import SubimageRemoveResponse = SubimageAPI.SubimageRemoveResponse;
}
