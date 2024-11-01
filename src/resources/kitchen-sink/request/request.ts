// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HeadersAPI from './headers';
import { HeaderRetrieveResponse, Headers } from './headers';
import * as IPAPI from './ip';
import { IP, IPRetrieveResponse } from './ip';
import * as PathVariableAPI from './path-variable';
import { PathVariable, PathVariableRetrieveResponse } from './path-variable';
import * as QueryParameterAPI from './query-parameter';
import {
  QueryParameter,
  QueryParameterRetrieveParams,
  QueryParameterRetrieveResponse,
} from './query-parameter';
import * as UserAgentAPI from './user-agent';
import { UserAgent, UserAgentRetrieveResponse } from './user-agent';

export class Request extends APIResource {
  headers: HeadersAPI.Headers = new HeadersAPI.Headers(this._client);
  ip: IPAPI.IP = new IPAPI.IP(this._client);
  userAgent: UserAgentAPI.UserAgent = new UserAgentAPI.UserAgent(this._client);
  pathVariable: PathVariableAPI.PathVariable = new PathVariableAPI.PathVariable(this._client);
  queryParameter: QueryParameterAPI.QueryParameter = new QueryParameterAPI.QueryParameter(this._client);
}

Request.Headers = Headers;
Request.IP = IP;
Request.UserAgent = UserAgent;
Request.PathVariable = PathVariable;
Request.QueryParameter = QueryParameter;

export declare namespace Request {
  export { Headers as Headers, type HeaderRetrieveResponse as HeaderRetrieveResponse };

  export { IP as IP, type IPRetrieveResponse as IPRetrieveResponse };

  export { UserAgent as UserAgent, type UserAgentRetrieveResponse as UserAgentRetrieveResponse };

  export { PathVariable as PathVariable, type PathVariableRetrieveResponse as PathVariableRetrieveResponse };

  export {
    QueryParameter as QueryParameter,
    type QueryParameterRetrieveResponse as QueryParameterRetrieveResponse,
    type QueryParameterRetrieveParams as QueryParameterRetrieveParams,
  };
}
