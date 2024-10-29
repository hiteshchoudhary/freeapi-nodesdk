// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HTTPMethodsAPI from './http-methods';
import * as StatusCodesAPI from './status-codes';
import * as RequestAPI from './request/request';
import * as ResponseAPI from './response/response';

export class KitchenSink extends APIResource {
  httpMethods: HTTPMethodsAPI.HTTPMethods = new HTTPMethodsAPI.HTTPMethods(this._client);
  statusCodes: StatusCodesAPI.StatusCodes = new StatusCodesAPI.StatusCodes(this._client);
  request: RequestAPI.Request = new RequestAPI.Request(this._client);
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);
}

export namespace KitchenSink {
  export import HTTPMethods = HTTPMethodsAPI.HTTPMethods;
  export import HTTPMethodCreateResponse = HTTPMethodsAPI.HTTPMethodCreateResponse;
  export import HTTPMethodUpdateResponse = HTTPMethodsAPI.HTTPMethodUpdateResponse;
  export import HTTPMethodDeleteResponse = HTTPMethodsAPI.HTTPMethodDeleteResponse;
  export import HTTPMethodGetResponse = HTTPMethodsAPI.HTTPMethodGetResponse;
  export import HTTPMethodPutResponse = HTTPMethodsAPI.HTTPMethodPutResponse;
  export import StatusCodes = StatusCodesAPI.StatusCodes;
  export import StatusCodeListResponse = StatusCodesAPI.StatusCodeListResponse;
  export import Request = RequestAPI.Request;
  export import Response = ResponseAPI.Response;
}
