// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BookmarksAPI from './bookmarks';
import {
  BookmarkCreateResponse,
  BookmarkRetrieveParams,
  BookmarkRetrieveResponse,
  Bookmarks,
} from './bookmarks';
import * as CommentsAPI from './comments';
import {
  CommentCreateParams,
  CommentCreateResponse,
  CommentDeleteResponse,
  CommentLikeResponse,
  CommentListParams,
  CommentListResponse,
  CommentUpdateParams,
  CommentUpdateResponse,
  Comments,
} from './comments';
import * as FollowAPI from './follow/follow';
import { Follow } from './follow/follow';
import * as PostsAPI from './posts/posts';
import {
  PostCreateParams,
  PostCreateResponse,
  PostDeleteResponse,
  PostLikeResponse,
  PostListParams,
  PostListResponse,
  PostRetrieveResponse,
  PostUpdateParams,
  PostUpdateResponse,
  Posts,
} from './posts/posts';
import * as ProfileAPI from './profile/profile';
import {
  Profile,
  ProfileRetrieveResponse,
  ProfileUpdateParams,
  ProfileUpdateResponse,
} from './profile/profile';

export class SocialMedia extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  bookmarks: BookmarksAPI.Bookmarks = new BookmarksAPI.Bookmarks(this._client);
  follow: FollowAPI.Follow = new FollowAPI.Follow(this._client);
}

SocialMedia.Profile = Profile;
SocialMedia.Posts = Posts;
SocialMedia.Comments = Comments;
SocialMedia.Bookmarks = Bookmarks;
SocialMedia.Follow = Follow;

export declare namespace SocialMedia {
  export {
    Profile as Profile,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export {
    Posts as Posts,
    type PostCreateResponse as PostCreateResponse,
    type PostRetrieveResponse as PostRetrieveResponse,
    type PostUpdateResponse as PostUpdateResponse,
    type PostListResponse as PostListResponse,
    type PostDeleteResponse as PostDeleteResponse,
    type PostLikeResponse as PostLikeResponse,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
  };

  export {
    Comments as Comments,
    type CommentCreateResponse as CommentCreateResponse,
    type CommentUpdateResponse as CommentUpdateResponse,
    type CommentListResponse as CommentListResponse,
    type CommentDeleteResponse as CommentDeleteResponse,
    type CommentLikeResponse as CommentLikeResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentUpdateParams as CommentUpdateParams,
    type CommentListParams as CommentListParams,
  };

  export {
    Bookmarks as Bookmarks,
    type BookmarkCreateResponse as BookmarkCreateResponse,
    type BookmarkRetrieveResponse as BookmarkRetrieveResponse,
    type BookmarkRetrieveParams as BookmarkRetrieveParams,
  };

  export { Follow as Follow };
}
