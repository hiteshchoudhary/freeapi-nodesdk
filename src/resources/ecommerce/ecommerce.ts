// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AddressesAPI from './addresses';
import * as CartAPI from './cart';
import * as CategoriesAPI from './categories';
import * as CouponsAPI from './coupons/coupons';
import * as OrdersAPI from './orders/orders';
import * as ProfileAPI from './profile/profile';

export class Ecommerce extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  cart: CartAPI.Cart = new CartAPI.Cart(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
}

export namespace Ecommerce {
  export import Profile = ProfileAPI.Profile;
  export import ProfileRetrieveResponse = ProfileAPI.ProfileRetrieveResponse;
  export import ProfileUpdateResponse = ProfileAPI.ProfileUpdateResponse;
  export import ProfileUpdateParams = ProfileAPI.ProfileUpdateParams;
  export import Cart = CartAPI.Cart;
  export import CartClearResponse = CartAPI.CartClearResponse;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryCreateResponse = CategoriesAPI.CategoryCreateResponse;
  export import CategoryRetrieveResponse = CategoriesAPI.CategoryRetrieveResponse;
  export import CategoryUpdateResponse = CategoriesAPI.CategoryUpdateResponse;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
  export import CategoryDeleteResponse = CategoriesAPI.CategoryDeleteResponse;
  export import CategoryCreateParams = CategoriesAPI.CategoryCreateParams;
  export import CategoryUpdateParams = CategoriesAPI.CategoryUpdateParams;
  export import CategoryListParams = CategoriesAPI.CategoryListParams;
  export import Coupons = CouponsAPI.Coupons;
  export import CouponCreateResponse = CouponsAPI.CouponCreateResponse;
  export import CouponRetrieveResponse = CouponsAPI.CouponRetrieveResponse;
  export import CouponUpdateResponse = CouponsAPI.CouponUpdateResponse;
  export import CouponListResponse = CouponsAPI.CouponListResponse;
  export import CouponDeleteResponse = CouponsAPI.CouponDeleteResponse;
  export import CouponApplyResponse = CouponsAPI.CouponApplyResponse;
  export import CouponRemoveResponse = CouponsAPI.CouponRemoveResponse;
  export import CouponCreateParams = CouponsAPI.CouponCreateParams;
  export import CouponUpdateParams = CouponsAPI.CouponUpdateParams;
  export import CouponListParams = CouponsAPI.CouponListParams;
  export import CouponApplyParams = CouponsAPI.CouponApplyParams;
  export import CouponRemoveParams = CouponsAPI.CouponRemoveParams;
  export import Addresses = AddressesAPI.Addresses;
  export import AddressCreateResponse = AddressesAPI.AddressCreateResponse;
  export import AddressRetrieveResponse = AddressesAPI.AddressRetrieveResponse;
  export import AddressUpdateResponse = AddressesAPI.AddressUpdateResponse;
  export import AddressListResponse = AddressesAPI.AddressListResponse;
  export import AddressDeleteResponse = AddressesAPI.AddressDeleteResponse;
  export import AddressCreateParams = AddressesAPI.AddressCreateParams;
  export import AddressUpdateParams = AddressesAPI.AddressUpdateParams;
  export import AddressListParams = AddressesAPI.AddressListParams;
  export import Orders = OrdersAPI.Orders;
  export import OrderRetrieveResponse = OrdersAPI.OrderRetrieveResponse;
}
