// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Playlists extends APIResource {
  /**
   * This API endpoint provides the details of a playlist, including playlist
   * metadata and the videos included in the playlist, based on the specified
   * playlist ID.
   *
   * When accessing this endpoint and providing a valid playlist ID as a parameter,
   * you will receive a response containing comprehensive information about the
   * playlist, such as its title, description, and other metadata.
   *
   * Additionally, the response will include a list of videos that are part of the
   * playlist, enabling you to access the video details.
   *
   * **Disclaimer:**
   *
   * Data provided by the API is static and not real-time.
   *
   * This simplifies the process of developing a **YouTube clone**, allowing
   * developers to solely focus on UI design and creativity, without worrying about
   * complex API key configuration.
   */
  retrieve(playlistId: string, options?: Core.RequestOptions): Core.APIPromise<PlaylistRetrieveResponse> {
    return this._client.get(`/public/youtube/playlists/${playlistId}`, options);
  }

  /**
   * This API endpoint allows users to retrieve playlists associated with the
   * channel.
   *
   * By accessing this endpoint, users can obtain a collection of playlists that
   * belong to the channel.
   *
   * This functionality is particularly useful for implementing a "Playlists" tab in
   * the channel page UI design, where users can view the playlists conveniently.
   *
   * **Disclaimer:**
   *
   * Data provided by the API is static and not real-time.
   *
   * This simplifies the process of developing a **YouTube clone**, allowing
   * developers to solely focus on UI design and creativity, without worrying about
   * complex API key configuration.
   */
  list(query?: PlaylistListParams, options?: Core.RequestOptions): Core.APIPromise<PlaylistListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PlaylistListResponse>;
  list(
    query: PlaylistListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlaylistListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/youtube/playlists', { query, ...options });
  }
}

export interface PlaylistRetrieveResponse {
  data?: PlaylistRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PlaylistRetrieveResponse {
  export interface Data {
    channel?: Data.Channel;

    playlist?: Data.Playlist;

    playlistItems?: Array<Data.PlaylistItem>;
  }

  export namespace Data {
    export interface Channel {
      info?: Channel.Info;

      statistics?: Channel.Statistics;
    }

    export namespace Channel {
      export interface Info {
        country?: string;

        customUrl?: string;

        description?: string;

        localized?: Info.Localized;

        publishedAt?: string;

        thumbnails?: Info.Thumbnails;

        title?: string;
      }

      export namespace Info {
        export interface Localized {
          description?: string;

          title?: string;
        }

        export interface Thumbnails {
          default?: Thumbnails.Default;

          high?: Thumbnails.High;

          medium?: Thumbnails.Medium;
        }

        export namespace Thumbnails {
          export interface Default {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface High {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Medium {
            height?: number;

            url?: string;

            width?: number;
          }
        }
      }

      export interface Statistics {
        hiddenSubscriberCount?: boolean;

        subscriberCount?: string;

        videoCount?: string;

        viewCount?: string;
      }
    }

    export interface Playlist {
      id?: string;

      kind?: string;

      snippet?: Playlist.Snippet;
    }

    export namespace Playlist {
      export interface Snippet {
        channelId?: string;

        channelTitle?: string;

        description?: string;

        localized?: Snippet.Localized;

        publishedAt?: string;

        thumbnails?: Snippet.Thumbnails;

        title?: string;
      }

      export namespace Snippet {
        export interface Localized {
          description?: string;

          title?: string;
        }

        export interface Thumbnails {
          default?: Thumbnails.Default;

          high?: Thumbnails.High;

          maxres?: Thumbnails.Maxres;

          medium?: Thumbnails.Medium;

          standard?: Thumbnails.Standard;
        }

        export namespace Thumbnails {
          export interface Default {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface High {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Maxres {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Medium {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Standard {
            height?: number;

            url?: string;

            width?: number;
          }
        }
      }
    }

    export interface PlaylistItem {
      id?: string;

      kind?: string;

      snippet?: PlaylistItem.Snippet;
    }

    export namespace PlaylistItem {
      export interface Snippet {
        channelId?: string;

        channelTitle?: string;

        description?: string;

        playlistId?: string;

        position?: number;

        publishedAt?: string;

        resourceId?: Snippet.ResourceID;

        thumbnails?: Snippet.Thumbnails;

        title?: string;

        videoOwnerChannelId?: string;

        videoOwnerChannelTitle?: string;
      }

      export namespace Snippet {
        export interface ResourceID {
          kind?: string;

          videoId?: string;
        }

        export interface Thumbnails {
          default?: Thumbnails.Default;

          high?: Thumbnails.High;

          maxres?: Thumbnails.Maxres;

          medium?: Thumbnails.Medium;

          standard?: Thumbnails.Standard;
        }

        export namespace Thumbnails {
          export interface Default {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface High {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Maxres {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Medium {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Standard {
            height?: number;

            url?: string;

            width?: number;
          }
        }
      }
    }
  }
}

export interface PlaylistListResponse {
  data?: PlaylistListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PlaylistListResponse {
  export interface Data {
    currentPageItems?: number;

    data?: Array<Data.Data>;

    limit?: number;

    nextPage?: boolean;

    page?: number;

    previousPage?: boolean;

    totalItems?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Data {
      id?: string;

      kind?: string;

      snippet?: Data.Snippet;
    }

    export namespace Data {
      export interface Snippet {
        channelId?: string;

        channelTitle?: string;

        description?: string;

        localized?: Snippet.Localized;

        publishedAt?: string;

        thumbnails?: Snippet.Thumbnails;

        title?: string;
      }

      export namespace Snippet {
        export interface Localized {
          description?: string;

          title?: string;
        }

        export interface Thumbnails {
          default?: Thumbnails.Default;

          high?: Thumbnails.High;

          maxres?: Thumbnails.Maxres;

          medium?: Thumbnails.Medium;

          standard?: Thumbnails.Standard;
        }

        export namespace Thumbnails {
          export interface Default {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface High {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Maxres {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Medium {
            height?: number;

            url?: string;

            width?: number;
          }

          export interface Standard {
            height?: number;

            url?: string;

            width?: number;
          }
        }
      }
    }
  }
}

export interface PlaylistListParams {
  limit?: string;

  page?: string;
}

export declare namespace Playlists {
  export {
    type PlaylistRetrieveResponse as PlaylistRetrieveResponse,
    type PlaylistListResponse as PlaylistListResponse,
    type PlaylistListParams as PlaylistListParams,
  };
}
