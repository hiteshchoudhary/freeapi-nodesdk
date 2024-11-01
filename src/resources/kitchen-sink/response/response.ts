// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CacheAPI from './cache';
import { Cache, CacheRetrieveResponse } from './cache';
import * as HeadersAPI from './headers';
import { HeaderRetrieveResponse, Headers } from './headers';
import * as HTMLAPI from './html';
import { HTML } from './html';
import * as XmlAPI from './xml';
import { Xml } from './xml';

export class Response extends APIResource {
  headers: HeadersAPI.Headers = new HeadersAPI.Headers(this._client);
  cache: CacheAPI.Cache = new CacheAPI.Cache(this._client);
  html: HTMLAPI.HTML = new HTMLAPI.HTML(this._client);
  xml: XmlAPI.Xml = new XmlAPI.Xml(this._client);
}

Response.Headers = Headers;
Response.Cache = Cache;
Response.HTML = HTML;
Response.Xml = Xml;

export declare namespace Response {
  export { Headers as Headers, type HeaderRetrieveResponse as HeaderRetrieveResponse };

  export { Cache as Cache, type CacheRetrieveResponse as CacheRetrieveResponse };

  export { HTML as HTML };

  export { Xml as Xml };
}
