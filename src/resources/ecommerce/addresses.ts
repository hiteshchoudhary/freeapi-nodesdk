// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Addresses extends APIResource {
  /**
   * The API endpoint allows a logged-in user to create a new address in an
   * e-commerce application.
   *
   * By accessing this endpoint and providing the necessary information, the user can
   * add a new address to their profile for shipping or billing purposes.
   *
   * This functionality enables users to conveniently manage their address book
   * within the e-commerce app, ensuring accurate and efficient order processing and
   * delivery.
   */
  create(body?: AddressCreateParams, options?: Core.RequestOptions): Core.APIPromise<AddressCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<AddressCreateResponse>;
  create(
    body: AddressCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/ecommerce/addresses', { body, ...options });
  }

  /**
   * The API endpoint allows users to fetch an address based on the `addressId`
   * provided in the URL path variable.
   *
   * By accessing this endpoint and specifying a valid `addressId` in the URL, users
   * will receive a response containing the details of the corresponding address.
   *
   * User can only be able to fetch addresses if they are logged in and the address
   * that they are fetching is added by them.
   */
  retrieve(addressId: string, options?: Core.RequestOptions): Core.APIPromise<AddressRetrieveResponse> {
    return this._client.get(`/ecommerce/addresses/${addressId}`, options);
  }

  /**
   * The API endpoint allows a logged-in user to update their address based on the
   * `addressId` provided.
   *
   * This functionality ensures that users can only update their own addresses within
   * the context of an ecommerce application.
   *
   * By accessing this endpoint and providing the `addressId` of the address to be
   * updated and necessary fields, the logged-in user can modify the address details
   * such as street, city, state, or postal code etc.
   */
  update(
    addressId: string,
    body?: AddressUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressUpdateResponse>;
  update(addressId: string, options?: Core.RequestOptions): Core.APIPromise<AddressUpdateResponse>;
  update(
    addressId: string,
    body: AddressUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(addressId, {}, body);
    }
    return this._client.patch(`/ecommerce/addresses/${addressId}`, { body, ...options });
  }

  /**
   * The API endpoint allows a logged-in user to retrieve all the addresses saved in
   * their profile within an e-commerce application.
   *
   * By accessing this endpoint, the user can retrieve a list of their saved
   * addresses, that have been previously stored in their account.
   *
   * This functionality enables users to conveniently access and manage their saved
   * addresses for a seamless checkout experience, eliminating the need to repeatedly
   * enter address information for each transaction.
   */
  list(query?: AddressListParams, options?: Core.RequestOptions): Core.APIPromise<AddressListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AddressListResponse>;
  list(
    query: AddressListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ecommerce/addresses', { query, ...options });
  }

  /**
   * The API endpoint allows a logged-in user to delete their own address based on
   * the provided `addressId` in the URL.
   *
   * When accessing this endpoint, the user can specify the `addressId` of the
   * address they wish to delete.
   *
   * This functionality ensures that users can manage their address book by removing
   * unwanted or outdated addresses from their profile within the ecommerce
   * application.
   */
  delete(addressId: string, options?: Core.RequestOptions): Core.APIPromise<AddressDeleteResponse> {
    return this._client.delete(`/ecommerce/addresses/${addressId}`, options);
  }
}

export interface AddressCreateResponse {
  data?: AddressCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AddressCreateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    addressLine1?: string;

    addressLine2?: string;

    city?: string;

    country?: string;

    createdAt?: string;

    owner?: string;

    pincode?: string;

    state?: string;

    updatedAt?: string;
  }
}

export interface AddressRetrieveResponse {
  data?: AddressRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AddressRetrieveResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    addressLine1?: string;

    addressLine2?: string;

    city?: string;

    country?: string;

    createdAt?: string;

    owner?: string;

    pincode?: string;

    state?: string;

    updatedAt?: string;
  }
}

export interface AddressUpdateResponse {
  data?: AddressUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AddressUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    addressLine1?: string;

    addressLine2?: string;

    city?: string;

    country?: string;

    createdAt?: string;

    owner?: string;

    pincode?: string;

    state?: string;

    updatedAt?: string;
  }
}

export interface AddressListResponse {
  data?: AddressListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AddressListResponse {
  export interface Data {
    addresses?: Array<Data.Address>;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: unknown | null;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalAddresses?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Address {
      __v?: number;

      _id?: string;

      addressLine1?: string;

      addressLine2?: string;

      city?: string;

      country?: string;

      createdAt?: string;

      owner?: string;

      pincode?: string;

      state?: string;

      updatedAt?: string;
    }
  }
}

export interface AddressDeleteResponse {
  data?: AddressDeleteResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AddressDeleteResponse {
  export interface Data {
    deletedAddress?: Data.DeletedAddress;
  }

  export namespace Data {
    export interface DeletedAddress {
      __v?: number;

      _id?: string;

      addressLine1?: string;

      addressLine2?: string;

      city?: string;

      country?: string;

      createdAt?: string;

      owner?: string;

      pincode?: string;

      state?: string;

      updatedAt?: string;
    }
  }
}

export interface AddressCreateParams {
  addressLine1?: string;

  addressLine2?: string;

  city?: string;

  country?: string;

  pincode?: string;

  state?: string;
}

export interface AddressUpdateParams {
  addressLine1?: string;

  addressLine2?: string;

  city?: string;

  country?: string;

  pincode?: string;

  state?: string;
}

export interface AddressListParams {
  limit?: string;

  page?: string;
}

export declare namespace Addresses {
  export {
    type AddressCreateResponse as AddressCreateResponse,
    type AddressRetrieveResponse as AddressRetrieveResponse,
    type AddressUpdateResponse as AddressUpdateResponse,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };
}
