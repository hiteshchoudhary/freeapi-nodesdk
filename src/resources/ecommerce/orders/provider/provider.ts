// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as PaypalAPI from './paypal';
import { Paypal, PaypalCreateParams, PaypalCreateResponse, PaypalVerifyPaymentParams } from './paypal';
import * as RazorpayAPI from './razorpay';
import {
  Razorpay,
  RazorpayCreateParams,
  RazorpayCreateResponse,
  RazorpayVerifyPaymentParams,
  RazorpayVerifyPaymentResponse,
} from './razorpay';

export class Provider extends APIResource {
  razorpay: RazorpayAPI.Razorpay = new RazorpayAPI.Razorpay(this._client);
  paypal: PaypalAPI.Paypal = new PaypalAPI.Paypal(this._client);
}

Provider.Razorpay = Razorpay;
Provider.Paypal = Paypal;

export declare namespace Provider {
  export {
    Razorpay as Razorpay,
    type RazorpayCreateResponse as RazorpayCreateResponse,
    type RazorpayVerifyPaymentResponse as RazorpayVerifyPaymentResponse,
    type RazorpayCreateParams as RazorpayCreateParams,
    type RazorpayVerifyPaymentParams as RazorpayVerifyPaymentParams,
  };

  export {
    Paypal as Paypal,
    type PaypalCreateResponse as PaypalCreateResponse,
    type PaypalCreateParams as PaypalCreateParams,
    type PaypalVerifyPaymentParams as PaypalVerifyPaymentParams,
  };
}
