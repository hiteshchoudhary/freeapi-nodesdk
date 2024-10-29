// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as RazorpayAPI from './razorpay';

export class Razorpay extends APIResource {
  /**
   * The API allows a user to generate a **Razorpay** order instance, facilitating
   * the creation of an order and initiating the checkout flow before the payment.
   *
   * The API accepts the `addressId` of the user's address as input to associate it
   * with the order.
   *
   * This functionality enables users to seamlessly generate an order and proceed to
   * the checkout process, providing a smooth and efficient payment experience using
   * Razorpay integration.
   */
  create(body?: RazorpayCreateParams, options?: Core.RequestOptions): Core.APIPromise<RazorpayCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<RazorpayCreateResponse>;
  create(
    body: RazorpayCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RazorpayCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/ecommerce/orders/provider/razorpay', { body, ...options });
  }

  /**
   * The API handles the verification of a Razorpay payment.
   *
   * Once a user completes the payment, this API receives the Razorpay generated
   * order credentials after payment (`razorpay_payment_id`, `razorpay_order_id`,
   * `razorpay_signature`).
   *
   * It then verifies the payment using the provided credentials and marks the
   * corresponding order as paid if the received credentials are valid.
   *
   * This API ensures secure and reliable payment processing, enabling the system to
   * accurately track and manage paid orders.
   */
  verifyPayment(
    body?: RazorpayVerifyPaymentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RazorpayVerifyPaymentResponse>;
  verifyPayment(options?: Core.RequestOptions): Core.APIPromise<RazorpayVerifyPaymentResponse>;
  verifyPayment(
    body: RazorpayVerifyPaymentParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RazorpayVerifyPaymentResponse> {
    if (isRequestOptions(body)) {
      return this.verifyPayment({}, body);
    }
    return this._client.post('/ecommerce/orders/provider/razorpay/verify-payment', { body, ...options });
  }
}

export interface RazorpayCreateResponse {
  data?: RazorpayCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RazorpayCreateResponse {
  export interface Data {
    id?: string;

    amount?: number;

    amount_due?: number;

    amount_paid?: number;

    attempts?: number;

    created_at?: number;

    currency?: string;

    entity?: string;

    notes?: Array<unknown>;

    offer_id?: unknown | null;

    receipt?: string;

    status?: string;
  }
}

export interface RazorpayVerifyPaymentResponse {
  data?: RazorpayVerifyPaymentResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RazorpayVerifyPaymentResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    address?: string;

    createdAt?: string;

    customer?: string;

    isPaymentDone?: boolean;

    items?: Array<Data.Item>;

    orderPrice?: number;

    paymentId?: string;

    paymentProvider?: string;

    status?: string;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Item {
      _id?: string;

      productId?: string;

      quantity?: number;
    }
  }
}

export interface RazorpayCreateParams {
  addressId?: string;
}

export interface RazorpayVerifyPaymentParams {
  razorpay_order_id?: string;

  razorpay_payment_id?: string;

  razorpay_signature?: string;
}

export namespace Razorpay {
  export import RazorpayCreateResponse = RazorpayAPI.RazorpayCreateResponse;
  export import RazorpayVerifyPaymentResponse = RazorpayAPI.RazorpayVerifyPaymentResponse;
  export import RazorpayCreateParams = RazorpayAPI.RazorpayCreateParams;
  export import RazorpayVerifyPaymentParams = RazorpayAPI.RazorpayVerifyPaymentParams;
}
