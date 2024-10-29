// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Xml extends APIResource {
  /**
   * The API endpoint allows you to retrieve an XML template as a response.
   *
   * When accessing this endpoint, you will receive an XML template that can be used
   * for various purposes, such as data interchange, configuration, or structured
   * content representation.
   *
   * This functionality is particularly useful when you need to dynamically generate
   * or retrieve XML templates from your application's backend and deliver them to
   * clients for processing, parsing, or integration with other systems that support
   * XML data formats.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/kitchen-sink/response/xml', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
