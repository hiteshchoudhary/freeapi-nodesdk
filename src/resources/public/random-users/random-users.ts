// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as RandomUsersAPI from './random-users';
import * as UserAPI from './user';

export class RandomUsers extends APIResource {
  user: UserAPI.User = new UserAPI.User(this._client);

  /**
   * The API endpoint retrieves a user based on the specified ID.
   *
   * When accessing this endpoint and providing a valid user ID as a parameter, you
   * will receive a response containing the details of the user matching the provided
   * ID.
   */
  retrieve(userId: string, options?: Core.RequestOptions): Core.APIPromise<RandomUserRetrieveResponse> {
    return this._client.get(`/public/randomusers/${userId}`, options);
  }

  /**
   * The API endpoint retrieves a random list of users. When accessing this endpoint,
   * you will receive a response containing a randomly generated list of users.
   *
   * This functionality is useful for scenarios such as testing, demo data
   * generation, or populating user interfaces with dummy data.
   *
   * It provides a convenient way to obtain randomized user information for various
   * purposes within your application.
   */
  list(query?: RandomUserListParams, options?: Core.RequestOptions): Core.APIPromise<RandomUserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RandomUserListResponse>;
  list(
    query: RandomUserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RandomUserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/randomusers', { query, ...options });
  }
}

export interface RandomUserRetrieveResponse {
  data?: RandomUserRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RandomUserRetrieveResponse {
  export interface Data {
    id?: number;

    cell?: string;

    dob?: Data.Dob;

    email?: string;

    gender?: string;

    location?: Data.Location;

    login?: Data.Login;

    name?: Data.Name;

    nat?: string;

    phone?: string;

    picture?: Data.Picture;

    registered?: Data.Registered;
  }

  export namespace Data {
    export interface Dob {
      age?: number;

      date?: string;
    }

    export interface Location {
      city?: string;

      coordinates?: Location.Coordinates;

      country?: string;

      postcode?: string;

      state?: string;

      street?: Location.Street;

      timezone?: Location.Timezone;
    }

    export namespace Location {
      export interface Coordinates {
        latitude?: string;

        longitude?: string;
      }

      export interface Street {
        name?: string;

        number?: number;
      }

      export interface Timezone {
        description?: string;

        offset?: string;
      }
    }

    export interface Login {
      md5?: string;

      password?: string;

      salt?: string;

      sha1?: string;

      sha256?: string;

      username?: string;

      uuid?: string;
    }

    export interface Name {
      first?: string;

      last?: string;

      title?: string;
    }

    export interface Picture {
      large?: string;

      medium?: string;

      thumbnail?: string;
    }

    export interface Registered {
      age?: number;

      date?: string;
    }
  }
}

export interface RandomUserListResponse {
  data?: RandomUserListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RandomUserListResponse {
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
      id?: number;

      cell?: string;

      dob?: Data.Dob;

      email?: string;

      gender?: string;

      location?: Data.Location;

      login?: Data.Login;

      name?: Data.Name;

      nat?: string;

      phone?: string;

      picture?: Data.Picture;

      registered?: Data.Registered;
    }

    export namespace Data {
      export interface Dob {
        age?: number;

        date?: string;
      }

      export interface Location {
        city?: string;

        coordinates?: Location.Coordinates;

        country?: string;

        postcode?: number | string | number | number | number | number | number | number;

        state?: string;

        street?: Location.Street;

        timezone?: Location.Timezone;
      }

      export namespace Location {
        export interface Coordinates {
          latitude?: string;

          longitude?: string;
        }

        export interface Street {
          name?: string;

          number?: number;
        }

        export interface Timezone {
          description?: string;

          offset?: string;
        }
      }

      export interface Login {
        md5?: string;

        password?: string;

        salt?: string;

        sha1?: string;

        sha256?: string;

        username?: string;

        uuid?: string;
      }

      export interface Name {
        first?: string;

        last?: string;

        title?: string;
      }

      export interface Picture {
        large?: string;

        medium?: string;

        thumbnail?: string;
      }

      export interface Registered {
        age?: number;

        date?: string;
      }
    }
  }
}

export interface RandomUserListParams {
  limit?: string;

  page?: string;
}

export namespace RandomUsers {
  export import RandomUserRetrieveResponse = RandomUsersAPI.RandomUserRetrieveResponse;
  export import RandomUserListResponse = RandomUsersAPI.RandomUserListResponse;
  export import RandomUserListParams = RandomUsersAPI.RandomUserListParams;
  export import User = UserAPI.User;
  export import UserRandomResponse = UserAPI.UserRandomResponse;
}
