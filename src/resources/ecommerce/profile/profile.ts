// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ProfileAPI from './profile';
import * as MyOrdersAPI from './my-orders';

export class Profile extends APIResource {
  myOrders: MyOrdersAPI.MyOrders = new MyOrdersAPI.MyOrders(this._client);

  /**
   * The API endpoint allows you to retrieve the e-commerce profile of the logged-in
   * user.
   *
   * When accessing this endpoint, you will receive a response containing the basic
   * details of the user's e-commerce profile.
   *
   * This includes information such as the user's name, email address, phone number,
   * and other relevant details.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ProfileRetrieveResponse> {
    return this._client.get('/ecommerce/profile', options);
  }

  /**
   * The API endpoint allows a logged-in user to update their e-commerce profile.
   *
   * With this endpoint, users can make changes and updates to their profile
   * information, such as personal details, contact information, or any other
   * relevant profile attributes.
   */
  update(body?: ProfileUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ProfileUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<ProfileUpdateResponse>;
  update(
    body: ProfileUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.patch('/ecommerce/profile', { body, ...options });
  }
}

export interface ProfileRetrieveResponse {
  data?: ProfileRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProfileRetrieveResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    countryCode?: string;

    createdAt?: string;

    firstName?: string;

    lastName?: string;

    owner?: string;

    phoneNumber?: string;

    updatedAt?: string;
  }
}

export interface ProfileUpdateResponse {
  data?: ProfileUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProfileUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    countryCode?: string;

    createdAt?: string;

    firstName?: string;

    lastName?: string;

    owner?: string;

    phoneNumber?: string;

    updatedAt?: string;
  }
}

export interface ProfileUpdateParams {
  countryCode?: string;

  firstName?: string;

  lastName?: string;

  phoneNumber?: string;
}

export namespace Profile {
  export import ProfileRetrieveResponse = ProfileAPI.ProfileRetrieveResponse;
  export import ProfileUpdateResponse = ProfileAPI.ProfileUpdateResponse;
  export import ProfileUpdateParams = ProfileAPI.ProfileUpdateParams;
  export import MyOrders = MyOrdersAPI.MyOrders;
  export import MyOrderListResponse = MyOrdersAPI.MyOrderListResponse;
  export import MyOrderListParams = MyOrdersAPI.MyOrderListParams;
}
