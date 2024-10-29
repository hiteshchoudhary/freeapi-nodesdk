// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GeneratedCredentialsAPI from './generated-credentials';

export class GeneratedCredentials extends APIResource {
  /**
   * This API serves a JSON file containing a collection of dummy usernames and their
   * corresponding raw passwords.
   *
   * It is primarily designed to assist developers during the database seeding
   * process and provide a convenient way to access the raw passwords for testing or
   * development purposes.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<GeneratedCredentialListResponse> {
    return this._client.get('/seed/generated-credentials', options);
  }
}

export interface GeneratedCredentialListResponse {
  data?: Array<GeneratedCredentialListResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace GeneratedCredentialListResponse {
  export interface Data {
    password?: string;

    role?: string;

    username?: string;
  }
}

export namespace GeneratedCredentials {
  export import GeneratedCredentialListResponse = GeneratedCredentialsAPI.GeneratedCredentialListResponse;
}
