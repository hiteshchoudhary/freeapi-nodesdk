// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class HTTPMethods extends APIResource {
  /**
   * The `POST` method is used to submit data to be processed by the server.
   *
   * It typically results in the creation of a new resource on the server.
   *
   * `POST` requests are **not idempotent** as each request creates a new resource,
   * and subsequent identical requests may result in multiple resources being
   * created.
   *
   * **Typical Usage:**
   *
   * `POST` requests are commonly used for operations that create new resources or
   * trigger specific actions on the server.
   *
   * _**For example,**_
   *
   * creating a new user account, submitting a form, or making a purchase.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<HTTPMethodCreateResponse> {
    return this._client.post('/kitchen-sink/http-methods/post', options);
  }

  /**
   * The `PATCH` method is used to partially update an existing resource on the
   * server.
   *
   * Unlike `PUT`, `PATCH` only includes the changes that need to be made, rather
   * than sending the entire resource representation.
   *
   * It allows for modifying specific fields or properties of a resource.
   *
   * **Typical Usage:**
   *
   * PATCH requests are commonly used to make partial updates to a resource.
   *
   * _**For example,**_
   *
   * updating only the email address of a user, modifying specific attributes of an
   * object, or applying incremental changes to a document.
   */
  update(options?: Core.RequestOptions): Core.APIPromise<HTTPMethodUpdateResponse> {
    return this._client.patch('/kitchen-sink/http-methods/patch', options);
  }

  /**
   * The `DELETE` method is used to remove or delete a specific resource on the
   * server.
   *
   * It instructs the server to remove the identified resource, resulting in its
   * permanent deletion.
   *
   * **Typical Usage:**
   *
   * `DELETE` requests are commonly used to delete a resource from the server.
   *
   * _**For example,**_
   *
   * deleting a user account, removing an item from a cart, or deleting a specific
   * record from a database.
   */
  delete(options?: Core.RequestOptions): Core.APIPromise<HTTPMethodDeleteResponse> {
    return this._client.delete('/kitchen-sink/http-methods/delete', options);
  }

  /**
   * The `GET` method is used to retrieve or fetch a representation of a resource
   * from a server.
   *
   * It is a **safe** and **idempotent** operation, meaning it should not have any
   * side effects on the server's data.
   *
   * `GET` requests are read-only and should not modify the state of the server or
   * its resources.
   *
   * **Typical Usage:** `GET` requests are commonly used to retrieve data from a
   * server.
   *
   * _**For example,**_
   *
   * fetching a user's profile information, retrieving a list of products, or
   * fetching specific data based on query parameters.
   */
  get(options?: Core.RequestOptions): Core.APIPromise<HTTPMethodGetResponse> {
    return this._client.get('/kitchen-sink/http-methods/get', options);
  }

  /**
   * The `PUT` method is used to update or replace an existing resource on the
   * server.
   *
   * It sends the entire representation of the resource in the request payload,
   * replacing the existing resource entirely.
   *
   * If the resource does not exist, `PUT` can also be used to create a new resource
   * with a specific identifier.
   *
   * **Typical Usage:** `PUT` requests are commonly used to update or replace an
   * entire resource on the server.
   *
   * _**For example,**_
   *
   * updating a user's profile information, replacing a document, or modifying an
   * existing record.
   */
  put(options?: Core.RequestOptions): Core.APIPromise<HTTPMethodPutResponse> {
    return this._client.put('/kitchen-sink/http-methods/put', options);
  }
}

export interface HTTPMethodCreateResponse {
  data?: HTTPMethodCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace HTTPMethodCreateResponse {
  export interface Data {
    headers?: Data.Headers;

    method?: string;

    origin?: string;

    url?: string;
  }

  export namespace Data {
    export interface Headers {
      accept?: string;

      'accept-encoding'?: string;

      'cache-control'?: string;

      connection?: string;

      'content-length'?: string;

      cookie?: string;

      host?: string;

      'postman-token'?: string;

      'user-agent'?: string;
    }
  }
}

export interface HTTPMethodUpdateResponse {
  data?: HTTPMethodUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace HTTPMethodUpdateResponse {
  export interface Data {
    headers?: Data.Headers;

    method?: string;

    origin?: string;

    url?: string;
  }

  export namespace Data {
    export interface Headers {
      accept?: string;

      'accept-encoding'?: string;

      'cache-control'?: string;

      connection?: string;

      'content-length'?: string;

      cookie?: string;

      host?: string;

      'postman-token'?: string;

      'user-agent'?: string;
    }
  }
}

export interface HTTPMethodDeleteResponse {
  data?: HTTPMethodDeleteResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace HTTPMethodDeleteResponse {
  export interface Data {
    headers?: Data.Headers;

    method?: string;

    origin?: string;

    url?: string;
  }

  export namespace Data {
    export interface Headers {
      accept?: string;

      'accept-encoding'?: string;

      'cache-control'?: string;

      connection?: string;

      cookie?: string;

      host?: string;

      'postman-token'?: string;

      'user-agent'?: string;
    }
  }
}

export interface HTTPMethodGetResponse {
  data?: HTTPMethodGetResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace HTTPMethodGetResponse {
  export interface Data {
    headers?: Data.Headers;

    method?: string;

    origin?: string;

    url?: string;
  }

  export namespace Data {
    export interface Headers {
      accept?: string;

      'accept-encoding'?: string;

      'cache-control'?: string;

      connection?: string;

      cookie?: string;

      host?: string;

      'postman-token'?: string;

      'user-agent'?: string;
    }
  }
}

export interface HTTPMethodPutResponse {
  data?: HTTPMethodPutResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace HTTPMethodPutResponse {
  export interface Data {
    headers?: Data.Headers;

    method?: string;

    origin?: string;

    url?: string;
  }

  export namespace Data {
    export interface Headers {
      accept?: string;

      'accept-encoding'?: string;

      'cache-control'?: string;

      connection?: string;

      'content-length'?: string;

      cookie?: string;

      host?: string;

      'postman-token'?: string;

      'user-agent'?: string;
    }
  }
}

export declare namespace HTTPMethods {
  export {
    type HTTPMethodCreateResponse as HTTPMethodCreateResponse,
    type HTTPMethodUpdateResponse as HTTPMethodUpdateResponse,
    type HTTPMethodDeleteResponse as HTTPMethodDeleteResponse,
    type HTTPMethodGetResponse as HTTPMethodGetResponse,
    type HTTPMethodPutResponse as HTTPMethodPutResponse,
  };
}
