// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChatAppAPI from './chat-app';
import { ChatApp, ChatAppCreateResponse } from './chat-app';
import * as EcommerceAPI from './ecommerce';
import { Ecommerce, EcommerceCreateResponse } from './ecommerce';
import * as GeneratedCredentialsAPI from './generated-credentials';
import { GeneratedCredentialListResponse, GeneratedCredentials } from './generated-credentials';
import * as SocialMediaAPI from './social-media';
import { SocialMedia, SocialMediaCreateResponse } from './social-media';
import * as TodosAPI from './todos';
import { TodoCreateResponse, Todos } from './todos';

export class Seed extends APIResource {
  generatedCredentials: GeneratedCredentialsAPI.GeneratedCredentials =
    new GeneratedCredentialsAPI.GeneratedCredentials(this._client);
  todos: TodosAPI.Todos = new TodosAPI.Todos(this._client);
  ecommerce: EcommerceAPI.Ecommerce = new EcommerceAPI.Ecommerce(this._client);
  socialMedia: SocialMediaAPI.SocialMedia = new SocialMediaAPI.SocialMedia(this._client);
  chatApp: ChatAppAPI.ChatApp = new ChatAppAPI.ChatApp(this._client);
}

Seed.GeneratedCredentials = GeneratedCredentials;
Seed.Todos = Todos;
Seed.Ecommerce = Ecommerce;
Seed.SocialMedia = SocialMedia;
Seed.ChatApp = ChatApp;

export declare namespace Seed {
  export {
    GeneratedCredentials as GeneratedCredentials,
    type GeneratedCredentialListResponse as GeneratedCredentialListResponse,
  };

  export { Todos as Todos, type TodoCreateResponse as TodoCreateResponse };

  export { Ecommerce as Ecommerce, type EcommerceCreateResponse as EcommerceCreateResponse };

  export { SocialMedia as SocialMedia, type SocialMediaCreateResponse as SocialMediaCreateResponse };

  export { ChatApp as ChatApp, type ChatAppCreateResponse as ChatAppCreateResponse };
}
