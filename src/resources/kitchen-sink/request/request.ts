// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HeadersAPI from './headers';
import * as IPAPI from './ip';
import * as PathVariableAPI from './path-variable';
import * as QueryParameterAPI from './query-parameter';
import * as UserAgentAPI from './user-agent';

export class Request extends APIResource {
  headers: HeadersAPI.Headers = new HeadersAPI.Headers(this._client);
  ip: IPAPI.IP = new IPAPI.IP(this._client);
  userAgent: UserAgentAPI.UserAgent = new UserAgentAPI.UserAgent(this._client);
  pathVariable: PathVariableAPI.PathVariable = new PathVariableAPI.PathVariable(this._client);
  queryParameter: QueryParameterAPI.QueryParameter = new QueryParameterAPI.QueryParameter(this._client);
}

export namespace Request {
  export import Headers = HeadersAPI.Headers;
  export import HeaderRetrieveResponse = HeadersAPI.HeaderRetrieveResponse;
  export import IP = IPAPI.IP;
  export import IPRetrieveResponse = IPAPI.IPRetrieveResponse;
  export import UserAgent = UserAgentAPI.UserAgent;
  export import UserAgentRetrieveResponse = UserAgentAPI.UserAgentRetrieveResponse;
  export import PathVariable = PathVariableAPI.PathVariable;
  export import PathVariableRetrieveResponse = PathVariableAPI.PathVariableRetrieveResponse;
  export import QueryParameter = QueryParameterAPI.QueryParameter;
  export import QueryParameterRetrieveResponse = QueryParameterAPI.QueryParameterRetrieveResponse;
  export import QueryParameterRetrieveParams = QueryParameterAPI.QueryParameterRetrieveParams;
}
