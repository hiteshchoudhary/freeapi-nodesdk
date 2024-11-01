// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ChannelAPI from './channel';
import { Channel, ChannelListResponse } from './channel';
import * as CommentsAPI from './comments';
import { CommentRetrieveResponse, Comments } from './comments';
import * as PlaylistsAPI from './playlists';
import { PlaylistListParams, PlaylistListResponse, PlaylistRetrieveResponse, Playlists } from './playlists';
import * as RelatedAPI from './related';
import { Related, RelatedListParams, RelatedListResponse } from './related';
import * as VideosAPI from './videos';
import { VideoListParams, VideoListResponse, VideoRetrieveResponse, Videos } from './videos';

export class Youtube extends APIResource {
  channel: ChannelAPI.Channel = new ChannelAPI.Channel(this._client);
  videos: VideosAPI.Videos = new VideosAPI.Videos(this._client);
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  related: RelatedAPI.Related = new RelatedAPI.Related(this._client);
  playlists: PlaylistsAPI.Playlists = new PlaylistsAPI.Playlists(this._client);
}

Youtube.Channel = Channel;
Youtube.Videos = Videos;
Youtube.Comments = Comments;
Youtube.Related = Related;
Youtube.Playlists = Playlists;

export declare namespace Youtube {
  export { Channel as Channel, type ChannelListResponse as ChannelListResponse };

  export {
    Videos as Videos,
    type VideoRetrieveResponse as VideoRetrieveResponse,
    type VideoListResponse as VideoListResponse,
    type VideoListParams as VideoListParams,
  };

  export { Comments as Comments, type CommentRetrieveResponse as CommentRetrieveResponse };

  export {
    Related as Related,
    type RelatedListResponse as RelatedListResponse,
    type RelatedListParams as RelatedListParams,
  };

  export {
    Playlists as Playlists,
    type PlaylistRetrieveResponse as PlaylistRetrieveResponse,
    type PlaylistListResponse as PlaylistListResponse,
    type PlaylistListParams as PlaylistListParams,
  };
}
