// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HTTPMethodsAPI from './http-methods';
import {
  HTTPMethodCreateResponse,
  HTTPMethodDeleteResponse,
  HTTPMethodGetResponse,
  HTTPMethodPutResponse,
  HTTPMethodUpdateResponse,
  HTTPMethods,
} from './http-methods';
import * as StatusCodesAPI from './status-codes';
import { StatusCodeListResponse, StatusCodes } from './status-codes';
import * as RequestAPI from './request/request';
import { Request } from './request/request';
import * as ResponseAPI from './response/response';
import { Response } from './response/response';

export class KitchenSink extends APIResource {
  httpMethods: HTTPMethodsAPI.HTTPMethods = new HTTPMethodsAPI.HTTPMethods(this._client);
  statusCodes: StatusCodesAPI.StatusCodes = new StatusCodesAPI.StatusCodes(this._client);
  request: RequestAPI.Request = new RequestAPI.Request(this._client);
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);
}

KitchenSink.HTTPMethods = HTTPMethods;
KitchenSink.StatusCodes = StatusCodes;
KitchenSink.Request = Request;
KitchenSink.Response = Response;

export declare namespace KitchenSink {
  export {
    HTTPMethods as HTTPMethods,
    type HTTPMethodCreateResponse as HTTPMethodCreateResponse,
    type HTTPMethodUpdateResponse as HTTPMethodUpdateResponse,
    type HTTPMethodDeleteResponse as HTTPMethodDeleteResponse,
    type HTTPMethodGetResponse as HTTPMethodGetResponse,
    type HTTPMethodPutResponse as HTTPMethodPutResponse,
  };

  export { StatusCodes as StatusCodes, type StatusCodeListResponse as StatusCodeListResponse };

  export { Request as Request };

  export { Response as Response };
}
