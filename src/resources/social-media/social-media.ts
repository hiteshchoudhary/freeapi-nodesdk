// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BookmarksAPI from './bookmarks';
import * as CommentsAPI from './comments';
import * as FollowAPI from './follow/follow';
import * as PostsAPI from './posts/posts';
import * as ProfileAPI from './profile/profile';

export class SocialMedia extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  bookmarks: BookmarksAPI.Bookmarks = new BookmarksAPI.Bookmarks(this._client);
  follow: FollowAPI.Follow = new FollowAPI.Follow(this._client);
}

export namespace SocialMedia {
  export import Profile = ProfileAPI.Profile;
  export import ProfileRetrieveResponse = ProfileAPI.ProfileRetrieveResponse;
  export import ProfileUpdateResponse = ProfileAPI.ProfileUpdateResponse;
  export import ProfileUpdateParams = ProfileAPI.ProfileUpdateParams;
  export import Posts = PostsAPI.Posts;
  export import PostCreateResponse = PostsAPI.PostCreateResponse;
  export import PostRetrieveResponse = PostsAPI.PostRetrieveResponse;
  export import PostUpdateResponse = PostsAPI.PostUpdateResponse;
  export import PostListResponse = PostsAPI.PostListResponse;
  export import PostDeleteResponse = PostsAPI.PostDeleteResponse;
  export import PostLikeResponse = PostsAPI.PostLikeResponse;
  export import PostCreateParams = PostsAPI.PostCreateParams;
  export import PostUpdateParams = PostsAPI.PostUpdateParams;
  export import PostListParams = PostsAPI.PostListParams;
  export import Comments = CommentsAPI.Comments;
  export import CommentCreateResponse = CommentsAPI.CommentCreateResponse;
  export import CommentUpdateResponse = CommentsAPI.CommentUpdateResponse;
  export import CommentListResponse = CommentsAPI.CommentListResponse;
  export import CommentDeleteResponse = CommentsAPI.CommentDeleteResponse;
  export import CommentLikeResponse = CommentsAPI.CommentLikeResponse;
  export import CommentCreateParams = CommentsAPI.CommentCreateParams;
  export import CommentUpdateParams = CommentsAPI.CommentUpdateParams;
  export import CommentListParams = CommentsAPI.CommentListParams;
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export import BookmarkCreateResponse = BookmarksAPI.BookmarkCreateResponse;
  export import BookmarkRetrieveResponse = BookmarksAPI.BookmarkRetrieveResponse;
  export import BookmarkRetrieveParams = BookmarksAPI.BookmarkRetrieveParams;
  export import Follow = FollowAPI.Follow;
}
