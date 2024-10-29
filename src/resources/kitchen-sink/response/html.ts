// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class HTML extends APIResource {
  /**
   * The API endpoint provides the ability to retrieve an HTML template as a
   * response.
   *
   * When accessing this endpoint, you will receive an HTML template that can be
   * rendered and displayed in a web browser or used for further manipulation.
   *
   * This functionality is useful when you need to dynamically generate or retrieve
   * HTML templates from your application's backend and deliver them to clients for
   * rendering user interfaces or displaying structured content.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/kitchen-sink/response/html', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
