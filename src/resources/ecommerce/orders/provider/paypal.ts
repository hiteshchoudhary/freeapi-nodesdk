// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class Paypal extends APIResource {
  /**
   * The API allows a user to generate a **PayPal** order instance, facilitating the
   * creation of an order and initiating the checkout flow before the payment.
   *
   * The API accepts the `addressId` of the user's address as input to associate it
   * with the order.
   *
   * This functionality enables users to seamlessly generate an order and proceed to
   * the checkout process, providing a smooth and efficient payment experience using
   * PayPal integration.
   */
  create(body?: PaypalCreateParams, options?: Core.RequestOptions): Core.APIPromise<PaypalCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<PaypalCreateResponse>;
  create(
    body: PaypalCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaypalCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/ecommerce/orders/provider/paypal', { body, ...options });
  }

  /**
   * The API handles the verification of a **PayPal** payment by integrating with
   * PayPal's order capture API.
   *
   * Once a user completes a payment on PayPal, this API receives the
   * PayPal-generated order ID which will be passed by the client on payment success.
   *
   * It then makes an API call to PayPal's order capture API to retrieve the payment
   * status.
   *
   * The backend utilizes this payment status information to verify the payment and
   * mark the corresponding order as paid in the system.
   */
  verifyPayment(body?: PaypalVerifyPaymentParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  verifyPayment(options?: Core.RequestOptions): Core.APIPromise<void>;
  verifyPayment(
    body: PaypalVerifyPaymentParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.verifyPayment({}, body);
    }
    return this._client.post('/ecommerce/orders/provider/paypal/verify-payment', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PaypalCreateResponse {
  data?: PaypalCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PaypalCreateResponse {
  export interface Data {
    id?: string;

    links?: Array<Data.Link>;

    status?: string;
  }

  export namespace Data {
    export interface Link {
      href?: string;

      method?: string;

      rel?: string;
    }
  }
}

export interface PaypalCreateParams {
  addressId?: string;
}

export interface PaypalVerifyPaymentParams {
  orderId?: string;
}

export declare namespace Paypal {
  export {
    type PaypalCreateResponse as PaypalCreateResponse,
    type PaypalCreateParams as PaypalCreateParams,
    type PaypalVerifyPaymentParams as PaypalVerifyPaymentParams,
  };
}
