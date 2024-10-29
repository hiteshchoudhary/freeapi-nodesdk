// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as MessagesAPI from './messages';

export class Messages extends APIResource {
  /**
   * This API endpoint enables logged-in users to retrieve a comprehensive list of
   * messages by providing the unique `chatId` as a parameter.
   *
   * This API empowers developers to efficiently access and display all messages
   * associated with a specific chat, facilitating seamless communication history
   * exploration within their applications.
   */
  list(chatId: string, options?: Core.RequestOptions): Core.APIPromise<MessageListResponse> {
    return this._client.get(`/chat-app/messages/${chatId}`, options);
  }

  /**
   * This API endpoint enables logged-in users to send messages to a specific chat
   * identified by the provided `chatId` in the path variable.
   *
   * By making a `POST` request to this endpoint, developers can seamlessly integrate
   * message transmission functionality into their applications, allowing users to
   * engage in real-time conversations within the designated chat. User can send
   * image files as `attachments` as well (maximum 5 attachments are allowed)
   */
  send(
    chatId: string,
    body?: MessageSendParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageSendResponse>;
  send(chatId: string, options?: Core.RequestOptions): Core.APIPromise<MessageSendResponse>;
  send(
    chatId: string,
    body: MessageSendParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageSendResponse> {
    if (isRequestOptions(body)) {
      return this.send(chatId, {}, body);
    }
    return this._client.post(
      `/chat-app/messages/${chatId}`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface MessageListResponse {
  data?: Array<MessageListResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace MessageListResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    chat?: string;

    content?: string;

    createdAt?: string;

    file?: unknown | null;

    files?: Array<Data.File>;

    sender?: Data.Sender;

    updatedAt?: string;
  }

  export namespace Data {
    export interface File {
      _id?: string;

      localPath?: string;

      url?: string;
    }

    export interface Sender {
      _id?: string;

      avatar?: Sender.Avatar;

      email?: string;

      username?: string;
    }

    export namespace Sender {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface MessageSendResponse {
  data?: MessageSendResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace MessageSendResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    attachments?: Array<Data.Attachment>;

    chat?: string;

    content?: string;

    createdAt?: string;

    sender?: Data.Sender;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Attachment {
      _id?: string;

      localPath?: string;

      url?: string;
    }

    export interface Sender {
      _id?: string;

      avatar?: Sender.Avatar;

      email?: string;

      username?: string;
    }

    export namespace Sender {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface MessageSendParams {
  /**
   * Image file maximum 5 images allowed. Pass multiple `attachments` keys to send
   * multiple images.
   */
  attachments?: Core.Uploadable;

  content?: string;
}

export namespace Messages {
  export import MessageListResponse = MessagesAPI.MessageListResponse;
  export import MessageSendResponse = MessagesAPI.MessageSendResponse;
  export import MessageSendParams = MessagesAPI.MessageSendParams;
}
