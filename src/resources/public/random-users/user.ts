// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as UserAPI from './user';

export class User extends APIResource {
  /**
   * The API endpoint retrieves a single random user. When accessing this endpoint,
   * you will receive a response containing the details of one randomly selected
   * user.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<UserRandomResponse> {
    return this._client.get('/public/randomusers/user/random', options);
  }
}

export interface UserRandomResponse {
  data?: UserRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace UserRandomResponse {
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

      postcode?: number;

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

export namespace User {
  export import UserRandomResponse = UserAPI.UserRandomResponse;
}
