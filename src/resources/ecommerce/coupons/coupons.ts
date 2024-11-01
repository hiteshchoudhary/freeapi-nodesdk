// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as CustomerAvailableAPI from './customer-available';
import {
  CustomerAvailable,
  CustomerAvailableListParams,
  CustomerAvailableListResponse,
} from './customer-available';
import * as StatusAPI from './status';
import { Status, StatusUpdateParams, StatusUpdateResponse } from './status';

export class Coupons extends APIResource {
  customerAvailable: CustomerAvailableAPI.CustomerAvailable = new CustomerAvailableAPI.CustomerAvailable(
    this._client,
  );
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * The API allows users with an `ADMIN` role to create a coupon.
   *
   * This API endpoint accepts the necessary information for creating a coupon, such
   * as the coupon code, discount amount, expiration date, and any additional
   * conditions.
   *
   * The endpoint performs authentication and authorization checks to ensure that
   * only users with the `ADMIN` role can access it.
   */
  create(body?: CouponCreateParams, options?: Core.RequestOptions): Core.APIPromise<CouponCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<CouponCreateResponse>;
  create(
    body: CouponCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CouponCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/ecommerce/coupons', { body, ...options });
  }

  /**
   * The API endpoint allows a logged-in user to retrieve a coupon by providing the
   * `couponId` as a path variable.
   *
   * By making a request to the API with the appropriate `couponId`, the server will
   * return the corresponding coupon details, such as its code, discount amount,
   * expiration date, or any other relevant information associated with that specific
   * coupon.
   */
  retrieve(couponId: string, options?: Core.RequestOptions): Core.APIPromise<CouponRetrieveResponse> {
    return this._client.get(`/ecommerce/coupons/${couponId}`, options);
  }

  /**
   * The API allows an `ADMIN` role user to update a coupon by sending the required
   * data in the request body and specifying the `couponId` in the path variable.
   *
   * This endpoint grants authorized users the ability to modify existing coupon
   * details, such as its code, discount amount, expiration date, or any other
   * relevant attributes.
   */
  update(
    couponId: string,
    body?: CouponUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CouponUpdateResponse>;
  update(couponId: string, options?: Core.RequestOptions): Core.APIPromise<CouponUpdateResponse>;
  update(
    couponId: string,
    body: CouponUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CouponUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(couponId, {}, body);
    }
    return this._client.patch(`/ecommerce/coupons/${couponId}`, { body, ...options });
  }

  /**
   * The API endpoint allows a logged-in user to retrieve all the available coupons
   * in an ecommerce app before proceeding with the checkout process.
   *
   * This API provides a list of coupons that users can apply to their purchase,
   * potentially offering discounts or special offers.
   */
  list(query?: CouponListParams, options?: Core.RequestOptions): Core.APIPromise<CouponListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CouponListResponse>;
  list(
    query: CouponListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CouponListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ecommerce/coupons', { query, ...options });
  }

  /**
   * The API allows users with an `ADMIN` role to delete a coupon by providing the
   * `couponId` as a path variable.
   *
   * The API verifies the user's role before processing the request and deletes the
   * coupon associated with the provided `couponId`.
   */
  delete(couponId: string, options?: Core.RequestOptions): Core.APIPromise<CouponDeleteResponse> {
    return this._client.delete(`/ecommerce/coupons/${couponId}`, options);
  }

  /**
   * The API allows a logged-in user to apply a coupon before proceeding to checkout.
   * It performs the following tasks:
   *
   * 1. **Verification of eligibility:** The API checks if the user is eligible to
   *    apply the coupon based on certain criteria, such as the total amount in the
   *    user's shopping cart.
   * 2. **Calculation of discounted cart value:** If the user is eligible, the API
   *    calculates the updated cart value by applying the discount offered by the
   *    coupon. This involves reducing the total cart amount by an amount based on
   *    the coupon details.
   * 3. **Return of updated cart:** Finally, the API returns the updated cart to the
   *    user, reflecting the applied discount. The user can then proceed to checkout
   *    with the discounted cart value.
   *
   * In summary, this API provides a mechanism for users to apply coupons, verifies
   * their eligibility, calculates the discounted cart value, and returns the updated
   * cart for a seamless checkout experience.
   */
  apply(body?: CouponApplyParams, options?: Core.RequestOptions): Core.APIPromise<CouponApplyResponse>;
  apply(options?: Core.RequestOptions): Core.APIPromise<CouponApplyResponse>;
  apply(
    body: CouponApplyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CouponApplyResponse> {
    if (isRequestOptions(body)) {
      return this.apply({}, body);
    }
    return this._client.post('/ecommerce/coupons/c/apply', { body, ...options });
  }

  /**
   * The API for removing an applied coupon allows a logged-in user to remove a
   * coupon code that was previously applied to their cart.
   *
   * Once the coupon is removed, the API recalculates the total value of the cart
   * without considering the discount amount, resulting in a non-discounted cart
   * value.
   *
   * This API essentially resets the cart to its original value before the coupon was
   * applied, removing any discounts that were previously applied.
   */
  remove(body?: CouponRemoveParams, options?: Core.RequestOptions): Core.APIPromise<CouponRemoveResponse>;
  remove(options?: Core.RequestOptions): Core.APIPromise<CouponRemoveResponse>;
  remove(
    body: CouponRemoveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CouponRemoveResponse> {
    if (isRequestOptions(body)) {
      return this.remove({}, body);
    }
    return this._client.post('/ecommerce/coupons/c/remove', { body, ...options });
  }
}

export interface CouponCreateResponse {
  data?: CouponCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CouponCreateResponse {
  export interface Data {
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
}

export interface CouponRetrieveResponse {
  data?: CouponRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CouponRetrieveResponse {
  export interface Data {
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
}

export interface CouponUpdateResponse {
  data?: CouponUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CouponUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    couponCode?: string;

    createdAt?: string;

    discountValue?: number;

    expiryDate?: string;

    minimumCartValue?: number;

    name?: string;

    owner?: string;

    startDate?: string;

    type?: string;

    updatedAt?: string;
  }
}

export interface CouponListResponse {
  data?: CouponListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CouponListResponse {
  export interface Data {
    coupons?: Array<Data.Coupon>;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: number;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalCoupons?: number;

    totalPages?: number;
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
  }
}

export interface CouponDeleteResponse {
  data?: CouponDeleteResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CouponDeleteResponse {
  export interface Data {
    deletedCoupon?: Data.DeletedCoupon;
  }

  export namespace Data {
    export interface DeletedCoupon {
      __v?: number;

      _id?: string;

      couponCode?: string;

      createdAt?: string;

      discountValue?: number;

      expiryDate?: string;

      minimumCartValue?: number;

      name?: string;

      owner?: string;

      startDate?: string;

      type?: string;

      updatedAt?: string;
    }
  }
}

export interface CouponApplyResponse {
  data?: CouponApplyResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CouponApplyResponse {
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

export interface CouponRemoveResponse {
  data?: CouponRemoveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CouponRemoveResponse {
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

export interface CouponCreateParams {
  couponCode?: string;

  discountValue?: number;

  expiryDate?: string;

  minimumCartValue?: number;

  name?: string;

  startDate?: string;

  type?: 'FLAT';
}

export interface CouponUpdateParams {
  couponCode?: string;

  discountValue?: number;

  name?: string;
}

export interface CouponListParams {
  limit?: string;

  page?: string;
}

export interface CouponApplyParams {
  couponCode?: string;
}

export interface CouponRemoveParams {
  couponCode?: string;
}

Coupons.CustomerAvailable = CustomerAvailable;
Coupons.Status = Status;

export declare namespace Coupons {
  export {
    type CouponCreateResponse as CouponCreateResponse,
    type CouponRetrieveResponse as CouponRetrieveResponse,
    type CouponUpdateResponse as CouponUpdateResponse,
    type CouponListResponse as CouponListResponse,
    type CouponDeleteResponse as CouponDeleteResponse,
    type CouponApplyResponse as CouponApplyResponse,
    type CouponRemoveResponse as CouponRemoveResponse,
    type CouponCreateParams as CouponCreateParams,
    type CouponUpdateParams as CouponUpdateParams,
    type CouponListParams as CouponListParams,
    type CouponApplyParams as CouponApplyParams,
    type CouponRemoveParams as CouponRemoveParams,
  };

  export {
    CustomerAvailable as CustomerAvailable,
    type CustomerAvailableListResponse as CustomerAvailableListResponse,
    type CustomerAvailableListParams as CustomerAvailableListParams,
  };

  export {
    Status as Status,
    type StatusUpdateResponse as StatusUpdateResponse,
    type StatusUpdateParams as StatusUpdateParams,
  };
}
