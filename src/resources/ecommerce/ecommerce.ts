// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AddressesAPI from './addresses';
import {
  AddressCreateParams,
  AddressCreateResponse,
  AddressDeleteResponse,
  AddressListParams,
  AddressListResponse,
  AddressRetrieveResponse,
  AddressUpdateParams,
  AddressUpdateResponse,
  Addresses,
} from './addresses';
import * as CartAPI from './cart';
import { Cart, CartClearResponse } from './cart';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryCreateParams,
  CategoryCreateResponse,
  CategoryDeleteResponse,
  CategoryListParams,
  CategoryListResponse,
  CategoryRetrieveResponse,
  CategoryUpdateParams,
  CategoryUpdateResponse,
} from './categories';
import * as CouponsAPI from './coupons/coupons';
import {
  CouponApplyParams,
  CouponApplyResponse,
  CouponCreateParams,
  CouponCreateResponse,
  CouponDeleteResponse,
  CouponListParams,
  CouponListResponse,
  CouponRemoveParams,
  CouponRemoveResponse,
  CouponRetrieveResponse,
  CouponUpdateParams,
  CouponUpdateResponse,
  Coupons,
} from './coupons/coupons';
import * as OrdersAPI from './orders/orders';
import { OrderRetrieveResponse, Orders } from './orders/orders';
import * as ProfileAPI from './profile/profile';
import {
  Profile,
  ProfileRetrieveResponse,
  ProfileUpdateParams,
  ProfileUpdateResponse,
} from './profile/profile';

export class Ecommerce extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  cart: CartAPI.Cart = new CartAPI.Cart(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
}

Ecommerce.Profile = Profile;
Ecommerce.Cart = Cart;
Ecommerce.Categories = Categories;
Ecommerce.Coupons = Coupons;
Ecommerce.Addresses = Addresses;
Ecommerce.Orders = Orders;

export declare namespace Ecommerce {
  export {
    Profile as Profile,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export { Cart as Cart, type CartClearResponse as CartClearResponse };

  export {
    Categories as Categories,
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryRetrieveResponse as CategoryRetrieveResponse,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
  };

  export {
    Coupons as Coupons,
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
    Addresses as Addresses,
    type AddressCreateResponse as AddressCreateResponse,
    type AddressRetrieveResponse as AddressRetrieveResponse,
    type AddressUpdateResponse as AddressUpdateResponse,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };

  export { Orders as Orders, type OrderRetrieveResponse as OrderRetrieveResponse };
}
