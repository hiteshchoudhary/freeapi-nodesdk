// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as FollowersAPI from './followers';
import * as FollowingAPI from './following';

export class Follow extends APIResource {
  followers: FollowersAPI.Followers = new FollowersAPI.Followers(this._client);
  following: FollowingAPI.Following = new FollowingAPI.Following(this._client);
}

export namespace Follow {
  export import Followers = FollowersAPI.Followers;
  export import FollowerListResponse = FollowersAPI.FollowerListResponse;
  export import FollowerListParams = FollowersAPI.FollowerListParams;
  export import Following = FollowingAPI.Following;
  export import FollowingListResponse = FollowingAPI.FollowingListResponse;
  export import FollowingListParams = FollowingAPI.FollowingListParams;
}
