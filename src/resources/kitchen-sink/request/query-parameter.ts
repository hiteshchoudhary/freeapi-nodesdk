// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as QueryParameterAPI from './query-parameter';

export class QueryParameter extends APIResource {
  /**
   * The API endpoint provides the capability to retrieve the query parameters being
   * supplied in the URL.
   *
   * When accessing this endpoint, you can retrieve and access the values of the
   * query parameters included in the URL.
   *
   * This functionality allows you to extract and utilize the information provided as
   * query parameters for further processing or customization within your
   * application.
   */
  retrieve(
    query?: QueryParameterRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryParameterRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<QueryParameterRetrieveResponse>;
  retrieve(
    query: QueryParameterRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryParameterRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/kitchen-sink/request/query-parameter', { query, ...options });
  }
}

export interface QueryParameterRetrieveResponse {
  data?: QueryParameterRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace QueryParameterRetrieveResponse {
  export interface Data {
    query1?: string;

    query2?: string;

    query3?: string;
  }
}

export interface QueryParameterRetrieveParams {
  query1?: string;

  query2?: string;

  query3?: string;
}

export namespace QueryParameter {
  export import QueryParameterRetrieveResponse = QueryParameterAPI.QueryParameterRetrieveResponse;
  export import QueryParameterRetrieveParams = QueryParameterAPI.QueryParameterRetrieveParams;
}
