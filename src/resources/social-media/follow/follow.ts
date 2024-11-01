// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as FollowersAPI from './followers';
import { FollowerListParams, FollowerListResponse, Followers } from './followers';
import * as FollowingAPI from './following';
import { Following, FollowingListParams, FollowingListResponse } from './following';

export class Follow extends APIResource {
  followers: FollowersAPI.Followers = new FollowersAPI.Followers(this._client);
  following: FollowingAPI.Following = new FollowingAPI.Following(this._client);
}

Follow.Followers = Followers;
Follow.Following = Following;

export declare namespace Follow {
  export {
    Followers as Followers,
    type FollowerListResponse as FollowerListResponse,
    type FollowerListParams as FollowerListParams,
  };

  export {
    Following as Following,
    type FollowingListResponse as FollowingListResponse,
    type FollowingListParams as FollowingListParams,
  };
}
