// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as PaypalAPI from './paypal';
import * as RazorpayAPI from './razorpay';

export class Provider extends APIResource {
  razorpay: RazorpayAPI.Razorpay = new RazorpayAPI.Razorpay(this._client);
  paypal: PaypalAPI.Paypal = new PaypalAPI.Paypal(this._client);
}

export namespace Provider {
  export import Razorpay = RazorpayAPI.Razorpay;
  export import RazorpayCreateResponse = RazorpayAPI.RazorpayCreateResponse;
  export import RazorpayVerifyPaymentResponse = RazorpayAPI.RazorpayVerifyPaymentResponse;
  export import RazorpayCreateParams = RazorpayAPI.RazorpayCreateParams;
  export import RazorpayVerifyPaymentParams = RazorpayAPI.RazorpayVerifyPaymentParams;
  export import Paypal = PaypalAPI.Paypal;
  export import PaypalCreateResponse = PaypalAPI.PaypalCreateResponse;
  export import PaypalCreateParams = PaypalAPI.PaypalCreateParams;
  export import PaypalVerifyPaymentParams = PaypalAPI.PaypalVerifyPaymentParams;
}
