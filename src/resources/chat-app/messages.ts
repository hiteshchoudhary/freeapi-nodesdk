// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Messages extends APIResource {
  /**
   * This API endpoint empowers logged-in users to seamlessly delete a message in the
   * chat that is sent by them.
   *
   * By sending a `DELETE` request to this endpoint with the relevant `chatId` and
   * `messageId`, users can effectively remove the specified message, thereby
   * enhancing their control over their chat interactions and facilitating a
   * streamlined and personalized messaging experience.
   */
  delete(
    chatId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageDeleteResponse> {
    return this._client.delete(`/chat-app/messages/${chatId}/${messageId}`, options);
  }
}

export interface MessageDeleteResponse {
  data?: MessageDeleteResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace MessageDeleteResponse {
  export interface Data {
    _id?: string;
  }
}

export declare namespace Messages {
  export { type MessageDeleteResponse as MessageDeleteResponse };
}
