// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ResetDBAPI from './reset-db';

export class ResetDB extends APIResource {
  /**
   * ⚠️ DANGER ⚠️
   *
   * This API endpoint is a potentially destructive operation designed to allow users
   * to drop or delete an entire database associated with their account or
   * application.
   *
   * _**It should be used with caution as it permanently deletes all data stored in
   * the specified database.**_
   */
  delete(options?: Core.RequestOptions): Core.APIPromise<ResetDBDeleteResponse> {
    return this._client.delete('/reset-db', options);
  }
}

export interface ResetDBDeleteResponse {
  data?: unknown | null;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ResetDB {
  export import ResetDBDeleteResponse = ResetDBAPI.ResetDBDeleteResponse;
}
