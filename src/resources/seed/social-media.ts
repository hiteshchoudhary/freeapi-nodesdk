// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SocialMediaAPI from './social-media';

export class SocialMedia extends APIResource {
  /**
   * This API endpoint is responsible for populating all the essential entities
   * required for a social media app service in the database.
   *
   * It provides a convenient way for developers to initialize the social media app
   * with dummy or sample data for testing or development purposes.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<SocialMediaCreateResponse> {
    return this._client.post('/seed/social-media', options);
  }
}

export interface SocialMediaCreateResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace SocialMedia {
  export import SocialMediaCreateResponse = SocialMediaAPI.SocialMediaCreateResponse;
}
