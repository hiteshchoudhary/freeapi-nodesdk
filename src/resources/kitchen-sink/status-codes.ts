// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as StatusCodesAPI from './status-codes';

export class StatusCodes extends APIResource {
  /**
   * This API endpoint allows users to retrieve detailed information about a specific
   * `HTTP` status code.
   *
   * By providing the desired status code as a parameter in the URL, users can obtain
   * relevant information, including the meaning, description, and type associated
   * with that particular status code.
   */
  retrieve(statusCode: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/kitchen-sink/status-codes/${statusCode}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * This API endpoint is designed to provide a comprehensive list of all possible
   * **HTTP** status codes defined by the `HTTP/1.1` specification.
   *
   * It serves as a reference or informational resource to retrieve detailed
   * information about each **HTTP** status code and its corresponding meaning.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<StatusCodeListResponse> {
    return this._client.get('/kitchen-sink/status-codes', options);
  }
}

export interface StatusCodeListResponse {
  data?: StatusCodeListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace StatusCodeListResponse {
  export interface Data {
    '100'?: Data._100;

    '101'?: Data._101;

    '102'?: Data._102;

    '103'?: Data._103;

    '200'?: Data._200;

    '201'?: Data._201;

    '202'?: Data._202;

    '203'?: Data._203;

    '204'?: Data._204;

    '205'?: Data._205;

    '206'?: Data._206;

    '207'?: Data._207;

    '208'?: Data._208;

    '218'?: Data._218;

    '226'?: Data._226;

    '300'?: Data._300;

    '301'?: Data._301;

    '302'?: Data._302;

    '303'?: Data._303;

    '304'?: Data._304;

    '307'?: Data._307;

    '308'?: Data._308;

    '400'?: Data._400;

    '401'?: Data._401;

    '402'?: Data._402;

    '403'?: Data._403;

    '404'?: Data._404;

    '405'?: Data._405;

    '406'?: Data._406;

    '407'?: Data._407;

    '408'?: Data._408;

    '409'?: Data._409;

    '410'?: Data._410;

    '411'?: Data._411;

    '412'?: Data._412;

    '413'?: Data._413;

    '414'?: Data._414;

    '415'?: Data._415;

    '416'?: Data._416;

    '417'?: Data._417;

    '418'?: Data._418;

    '419'?: Data._419;

    '420'?: Data._420;

    '422'?: Data._422;

    '423'?: Data._423;

    '424'?: Data._424;

    '428'?: Data._428;

    '429'?: Data._429;

    '431'?: Data._431;

    '451'?: Data._451;

    '500'?: Data._500;

    '501'?: Data._501;

    '502'?: Data._502;

    '503'?: Data._503;

    '504'?: Data._504;

    '505'?: Data._505;

    '506'?: Data._506;

    '507'?: Data._507;

    '508'?: Data._508;

    '510'?: Data._510;

    '511'?: Data._511;
  }

  export namespace Data {
    export interface _100 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _101 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _102 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _103 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _200 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _201 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _202 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _203 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _204 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _205 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _206 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _207 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _208 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _218 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _226 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _300 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _301 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _302 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _303 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _304 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _307 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _308 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _400 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _401 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _402 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _403 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _404 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _405 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _406 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _407 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _408 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _409 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _410 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _411 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _412 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _413 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _414 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _415 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _416 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _417 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _418 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _419 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _420 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _422 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _423 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _424 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _428 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _429 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _431 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _451 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _500 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _501 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _502 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _503 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _504 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _505 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _506 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _507 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _508 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _510 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }

    export interface _511 {
      category?: string;

      description?: string;

      statusCode?: number;

      statusMessage?: string;
    }
  }
}

export namespace StatusCodes {
  export import StatusCodeListResponse = StatusCodesAPI.StatusCodeListResponse;
}
