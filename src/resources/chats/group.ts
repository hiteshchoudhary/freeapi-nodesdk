// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Group extends APIResource {
  /**
   * This API endpoint enables a logged-in user to initiate the creation of a group
   * chat, bringing together multiple participants to engage in collaborative
   * discussions.
   *
   * To establish a group, a minimum of three participants is required.
   *
   * This endpoint streamlines the process of forming dynamic group conversations,
   * fostering enriched interactions among users within the chat application.
   */
  create(body?: GroupCreateParams, options?: Core.RequestOptions): Core.APIPromise<GroupCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<GroupCreateResponse>;
  create(
    body: GroupCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/chat-app/chats/group', { body, ...options });
  }

  /**
   * This API endpoint allows developers to retrieve comprehensive information about
   * a specific group chat.
   *
   * This includes essential details such as the group's name, the total number of
   * participants, and a detailed list of member profiles, providing a holistic
   * overview of the group's composition.
   *
   * By utilizing this endpoint, developers can seamlessly access and display key
   * insights into group interactions.
   */
  retrieve(chatId: string, options?: Core.RequestOptions): Core.APIPromise<GroupRetrieveResponse> {
    return this._client.get(`/chat-app/chats/group/${chatId}`, options);
  }

  /**
   * This API endpoint empowers group administrators to seamlessly update the name of
   * a group chat.
   *
   * Group administrators can utilize this endpoint to enhance the clarity and
   * context of their group conversations by modifying the group's name as needed.
   */
  update(
    chatId: string,
    body?: GroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupUpdateResponse>;
  update(chatId: string, options?: Core.RequestOptions): Core.APIPromise<GroupUpdateResponse>;
  update(
    chatId: string,
    body: GroupUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(chatId, {}, body);
    }
    return this._client.patch(`/chat-app/chats/group/${chatId}`, { body, ...options });
  }

  /**
   * This API endpoint empowers group administrators to seamlessly delete a specific
   * group chat identified by its unique `chatId`.
   *
   * By accessing this endpoint, group admins can initiate the removal process,
   * ensuring efficient management of group interactions and maintaining a
   * streamlined chat environment.
   */
  delete(chatId: string, options?: Core.RequestOptions): Core.APIPromise<GroupDeleteResponse> {
    return this._client.delete(`/chat-app/chats/group/${chatId}`, options);
  }

  /**
   * This API endpoint enables logged in user to leave a specific group by passing
   * the `chatId` as a path variable.
   *
   * This endpoint gives user privilege to decide whether to be a part of a specific
   * group.
   */
  leave(chatId: string, options?: Core.RequestOptions): Core.APIPromise<GroupLeaveResponse> {
    return this._client.delete(`/chat-app/chats/leave/group/${chatId}`, options);
  }

  /**
   * This API endpoint enables group administrators to effortlessly expand the
   * participant roster of a specific group chat.
   *
   * With this endpoint, administrators can seamlessly add new members to the group,
   * fostering inclusivity and enabling enriched collaborative discussions among
   * participants.
   *
   * This functionality streamlines group management, empowering administrators to
   * create vibrant and engaging group dynamics within the chat application.
   */
  participantAdd(
    chatId: string,
    participantId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupParticipantAddResponse> {
    return this._client.post(`/chat-app/chats/group/${chatId}/${participantId}`, options);
  }

  /**
   * This API endpoint enables group administrators to efficiently manage group
   * dynamics by removing participants from a specific group chat.
   *
   * This endpoint empowers administrators to maintain the composition and relevance
   * of the group by seamlessly detaching selected participants, ensuring a
   * streamlined and controlled group conversation environment.
   */
  participantRemove(
    chatId: string,
    participantId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupParticipantRemoveResponse> {
    return this._client.delete(`/chat-app/chats/group/${chatId}/${participantId}`, options);
  }
}

export interface GroupCreateResponse {
  data?: GroupCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace GroupCreateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    admin?: string;

    createdAt?: string;

    isGroupChat?: boolean;

    name?: string;

    participants?: Array<Data.Participant>;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Participant {
      __v?: number;

      _id?: string;

      avatar?: Participant.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace Participant {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface GroupRetrieveResponse {
  data?: GroupRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace GroupRetrieveResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    admin?: string;

    createdAt?: string;

    isGroupChat?: boolean;

    name?: string;

    participants?: Array<Data.Participant>;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Participant {
      __v?: number;

      _id?: string;

      avatar?: Participant.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace Participant {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface GroupUpdateResponse {
  data?: GroupUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace GroupUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    admin?: string;

    createdAt?: string;

    isGroupChat?: boolean;

    name?: string;

    participants?: Array<Data.Participant>;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Participant {
      __v?: number;

      _id?: string;

      avatar?: Participant.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace Participant {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface GroupDeleteResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface GroupLeaveResponse {
  data?: GroupLeaveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace GroupLeaveResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    admin?: string;

    createdAt?: string;

    isGroupChat?: boolean;

    lastMessage?: Data.LastMessage;

    name?: string;

    participants?: Array<Data.Participant>;

    updatedAt?: string;
  }

  export namespace Data {
    export interface LastMessage {
      __v?: number;

      _id?: string;

      attachments?: Array<LastMessage.Attachment>;

      chat?: string;

      content?: string;

      createdAt?: string;

      sender?: LastMessage.Sender;

      updatedAt?: string;
    }

    export namespace LastMessage {
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

    export interface Participant {
      __v?: number;

      _id?: string;

      avatar?: Participant.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace Participant {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface GroupParticipantAddResponse {
  data?: GroupParticipantAddResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace GroupParticipantAddResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    admin?: string;

    createdAt?: string;

    isGroupChat?: boolean;

    name?: string;

    participants?: Array<Data.Participant>;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Participant {
      __v?: number;

      _id?: string;

      avatar?: Participant.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace Participant {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface GroupParticipantRemoveResponse {
  data?: GroupParticipantRemoveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace GroupParticipantRemoveResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    admin?: string;

    createdAt?: string;

    isGroupChat?: boolean;

    name?: string;

    participants?: Array<Data.Participant>;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Participant {
      __v?: number;

      _id?: string;

      avatar?: Participant.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace Participant {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface GroupCreateParams {
  name?: string;

  participants?: Array<string>;
}

export interface GroupUpdateParams {
  name?: string;
}

export declare namespace Group {
  export {
    type GroupCreateResponse as GroupCreateResponse,
    type GroupRetrieveResponse as GroupRetrieveResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupLeaveResponse as GroupLeaveResponse,
    type GroupParticipantAddResponse as GroupParticipantAddResponse,
    type GroupParticipantRemoveResponse as GroupParticipantRemoveResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
  };
}
