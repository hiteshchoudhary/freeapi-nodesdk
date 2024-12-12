// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Books extends APIResource {
  /**
   * The API endpoint retrieves a book based on the book ID provided as a path
   * variable.
   *
   * By accessing this endpoint and specifying a valid book ID, you will receive a
   * response containing the details of the corresponding book.
   */
  retrieve(bookId: string, options?: Core.RequestOptions): Core.APIPromise<BookRetrieveResponse> {
    return this._client.get(`/public/books/${bookId}`, options);
  }

  /**
   * The API endpoint allows you to retrieve a list of random books.
   *
   * Upon accessing this endpoint, you will receive a response containing a
   * collection of randomly selected books.
   */
  list(query?: BookListParams, options?: Core.RequestOptions): Core.APIPromise<BookListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BookListResponse>;
  list(
    query: BookListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/books', { query, ...options });
  }

  /**
   * The API endpoint returns a single random book from a list of books.
   *
   * Upon accessing this endpoint, you will receive a response containing the details
   * of a randomly selected book.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<BookRandomResponse> {
    return this._client.get('/public/books/book/random', options);
  }
}

export interface BookRetrieveResponse {
  data?: BookRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace BookRetrieveResponse {
  export interface Data {
    id?: number;

    accessInfo?: Data.AccessInfo;

    etag?: string;

    kind?: string;

    saleInfo?: Data.SaleInfo;

    searchInfo?: Data.SearchInfo;

    selfLink?: string;

    volumeInfo?: Data.VolumeInfo;
  }

  export namespace Data {
    export interface AccessInfo {
      accessViewStatus?: string;

      country?: string;

      embeddable?: boolean;

      epub?: AccessInfo.Epub;

      pdf?: AccessInfo.Pdf;

      publicDomain?: boolean;

      quoteSharingAllowed?: boolean;

      textToSpeechPermission?: string;

      viewability?: string;

      webReaderLink?: string;
    }

    export namespace AccessInfo {
      export interface Epub {
        isAvailable?: boolean;
      }

      export interface Pdf {
        acsTokenLink?: string;

        isAvailable?: boolean;
      }
    }

    export interface SaleInfo {
      country?: string;

      isEbook?: boolean;

      saleability?: string;
    }

    export interface SearchInfo {
      textSnippet?: string;
    }

    export interface VolumeInfo {
      allowAnonLogging?: boolean;

      authors?: Array<string>;

      canonicalVolumeLink?: string;

      categories?: Array<string>;

      contentVersion?: string;

      description?: string;

      imageLinks?: VolumeInfo.ImageLinks;

      industryIdentifiers?: Array<VolumeInfo.IndustryIdentifier>;

      infoLink?: string;

      language?: string;

      maturityRating?: string;

      pageCount?: number;

      panelizationSummary?: VolumeInfo.PanelizationSummary;

      previewLink?: string;

      printType?: string;

      publishedDate?: string;

      publisher?: string;

      readingModes?: VolumeInfo.ReadingModes;

      title?: string;
    }

    export namespace VolumeInfo {
      export interface ImageLinks {
        smallThumbnail?: string;

        thumbnail?: string;
      }

      export interface IndustryIdentifier {
        identifier?: string;

        type?: string;
      }

      export interface PanelizationSummary {
        containsEpubBubbles?: boolean;

        containsImageBubbles?: boolean;
      }

      export interface ReadingModes {
        image?: boolean;

        text?: boolean;
      }
    }
  }
}

export interface BookListResponse {
  data?: BookListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace BookListResponse {
  export interface Data {
    currentPageItems?: number;

    data?: Array<Data.Data>;

    limit?: number;

    nextPage?: boolean;

    page?: number;

    previousPage?: boolean;

    totalItems?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Data {
      id?: number;

      etag?: string;

      kind?: string;

      volumeInfo?: Data.VolumeInfo;
    }

    export namespace Data {
      export interface VolumeInfo {
        allowAnonLogging?: boolean;

        authors?: Array<string>;

        averageRating?: number;

        canonicalVolumeLink?: string;

        categories?: Array<string>;

        contentVersion?: string;

        description?: string;

        imageLinks?: VolumeInfo.ImageLinks;

        industryIdentifiers?: Array<VolumeInfo.IndustryIdentifier>;

        infoLink?: string;

        language?: string;

        maturityRating?: string;

        pageCount?: number;

        panelizationSummary?: VolumeInfo.PanelizationSummary;

        previewLink?: string;

        printType?: string;

        publishedDate?: string;

        publisher?: string;

        ratingsCount?: number;

        readingModes?: VolumeInfo.ReadingModes;

        subtitle?: string;

        title?: string;
      }

      export namespace VolumeInfo {
        export interface ImageLinks {
          smallThumbnail?: string;

          thumbnail?: string;
        }

        export interface IndustryIdentifier {
          identifier?: string;

          type?: string;
        }

        export interface PanelizationSummary {
          containsEpubBubbles?: boolean;

          containsImageBubbles?: boolean;
        }

        export interface ReadingModes {
          image?: boolean;

          text?: boolean;
        }
      }
    }
  }
}

export interface BookRandomResponse {
  data?: BookRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace BookRandomResponse {
  export interface Data {
    id?: number;

    accessInfo?: Data.AccessInfo;

    etag?: string;

    kind?: string;

    saleInfo?: Data.SaleInfo;

    searchInfo?: Data.SearchInfo;

    selfLink?: string;

    volumeInfo?: Data.VolumeInfo;
  }

  export namespace Data {
    export interface AccessInfo {
      accessViewStatus?: string;

      country?: string;

      embeddable?: boolean;

      epub?: AccessInfo.Epub;

      pdf?: AccessInfo.Pdf;

      publicDomain?: boolean;

      quoteSharingAllowed?: boolean;

      textToSpeechPermission?: string;

      viewability?: string;

      webReaderLink?: string;
    }

    export namespace AccessInfo {
      export interface Epub {
        downloadLink?: string;

        isAvailable?: boolean;
      }

      export interface Pdf {
        isAvailable?: boolean;
      }
    }

    export interface SaleInfo {
      buyLink?: string;

      country?: string;

      isEbook?: boolean;

      saleability?: string;
    }

    export interface SearchInfo {
      textSnippet?: string;
    }

    export interface VolumeInfo {
      allowAnonLogging?: boolean;

      authors?: Array<string>;

      canonicalVolumeLink?: string;

      categories?: Array<string>;

      contentVersion?: string;

      description?: string;

      imageLinks?: VolumeInfo.ImageLinks;

      industryIdentifiers?: Array<VolumeInfo.IndustryIdentifier>;

      infoLink?: string;

      language?: string;

      maturityRating?: string;

      pageCount?: number;

      panelizationSummary?: VolumeInfo.PanelizationSummary;

      previewLink?: string;

      printType?: string;

      publishedDate?: string;

      readingModes?: VolumeInfo.ReadingModes;

      subtitle?: string;

      title?: string;
    }

    export namespace VolumeInfo {
      export interface ImageLinks {
        smallThumbnail?: string;

        thumbnail?: string;
      }

      export interface IndustryIdentifier {
        identifier?: string;

        type?: string;
      }

      export interface PanelizationSummary {
        containsEpubBubbles?: boolean;

        containsImageBubbles?: boolean;
      }

      export interface ReadingModes {
        image?: boolean;

        text?: boolean;
      }
    }
  }
}

export interface BookListParams {
  inc?: string;

  limit?: string;

  page?: string;

  query?: string;
}

export declare namespace Books {
  export {
    type BookRetrieveResponse as BookRetrieveResponse,
    type BookListResponse as BookListResponse,
    type BookRandomResponse as BookRandomResponse,
    type BookListParams as BookListParams,
  };
}
