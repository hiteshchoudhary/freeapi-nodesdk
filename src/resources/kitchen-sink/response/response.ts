// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CacheAPI from './cache';
import * as HeadersAPI from './headers';
import * as HTMLAPI from './html';
import * as XmlAPI from './xml';

export class Response extends APIResource {
  headers: HeadersAPI.Headers = new HeadersAPI.Headers(this._client);
  cache: CacheAPI.Cache = new CacheAPI.Cache(this._client);
  html: HTMLAPI.HTML = new HTMLAPI.HTML(this._client);
  xml: XmlAPI.Xml = new XmlAPI.Xml(this._client);
}

export namespace Response {
  export import Headers = HeadersAPI.Headers;
  export import HeaderRetrieveResponse = HeadersAPI.HeaderRetrieveResponse;
  export import Cache = CacheAPI.Cache;
  export import CacheRetrieveResponse = CacheAPI.CacheRetrieveResponse;
  export import HTML = HTMLAPI.HTML;
  export import Xml = XmlAPI.Xml;
}
