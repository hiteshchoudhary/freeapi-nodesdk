// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ChannelAPI from './channel';
import * as CommentsAPI from './comments';
import * as PlaylistsAPI from './playlists';
import * as RelatedAPI from './related';
import * as VideosAPI from './videos';

export class Youtube extends APIResource {
  channel: ChannelAPI.Channel = new ChannelAPI.Channel(this._client);
  videos: VideosAPI.Videos = new VideosAPI.Videos(this._client);
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  related: RelatedAPI.Related = new RelatedAPI.Related(this._client);
  playlists: PlaylistsAPI.Playlists = new PlaylistsAPI.Playlists(this._client);
}

export namespace Youtube {
  export import Channel = ChannelAPI.Channel;
  export import ChannelListResponse = ChannelAPI.ChannelListResponse;
  export import Videos = VideosAPI.Videos;
  export import VideoRetrieveResponse = VideosAPI.VideoRetrieveResponse;
  export import VideoListResponse = VideosAPI.VideoListResponse;
  export import VideoListParams = VideosAPI.VideoListParams;
  export import Comments = CommentsAPI.Comments;
  export import CommentRetrieveResponse = CommentsAPI.CommentRetrieveResponse;
  export import Related = RelatedAPI.Related;
  export import RelatedListResponse = RelatedAPI.RelatedListResponse;
  export import RelatedListParams = RelatedAPI.RelatedListParams;
  export import Playlists = PlaylistsAPI.Playlists;
  export import PlaylistRetrieveResponse = PlaylistsAPI.PlaylistRetrieveResponse;
  export import PlaylistListResponse = PlaylistsAPI.PlaylistListResponse;
  export import PlaylistListParams = PlaylistsAPI.PlaylistListParams;
}
