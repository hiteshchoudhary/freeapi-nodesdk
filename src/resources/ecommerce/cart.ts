// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CartAPI from './cart';

export class Cart extends APIResource {
  /**
   * The API endpoint allows a logged-in user to clear their entire shopping cart.
   *
   * By invoking this API, the user can remove all items from their cart, effectively
   * clearing it and starting afresh.
   *
   * This feature provides a convenient way for users to manage their shopping carts
   * and begin a new shopping session.
   */
  clear(options?: Core.RequestOptions): Core.APIPromise<CartClearResponse> {
    return this._client.delete('/ecommerce/cart/clear', options);
  }
}

export interface CartClearResponse {
  data?: Array<unknown>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace Cart {
  export import CartClearResponse = CartAPI.CartClearResponse;
}
