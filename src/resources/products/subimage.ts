// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Subimage extends APIResource {
  /**
   * The API enables an `ADMIN` user to remove sub-images associated with a product
   * by providing `productId` and `subImageId`.
   *
   * It provides functionality for the frontend to offer the `ADMIN` user an option
   * to manage the sub-images of a product.
   *
   * Using this API, the `ADMIN` user can remove specific sub-images from the
   * product, thereby allowing them to effectively control and update the visual
   * representation of the product.
   */
  remove(
    productId: string,
    subImageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubimageRemoveResponse> {
    return this._client.patch(`/ecommerce/products/remove/subimage/${productId}/${subImageId}`, options);
  }
}

export interface SubimageRemoveResponse {
  data?: SubimageRemoveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace SubimageRemoveResponse {
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

    subImages?: Array<unknown>;

    updatedAt?: string;
  }

  export namespace Data {
    export interface MainImage {
      _id?: string;

      localPath?: string;

      url?: string;
    }
  }
}

export declare namespace Subimage {
  export { type SubimageRemoveResponse as SubimageRemoveResponse };
}
