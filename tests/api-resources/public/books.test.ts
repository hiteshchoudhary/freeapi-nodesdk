// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Freeapiapp from 'freeapiapp';
import { Response } from 'node-fetch';

const client = new Freeapiapp({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource books', () => {
  test('retrieve', async () => {
    const responsePromise = client.public.books.retrieve('39');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.public.books.retrieve('39', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Freeapiapp.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.public.books.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.public.books.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Freeapiapp.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.public.books.list(
        { inc: 'kind,id,etag,volumeInfo', limit: '10', page: '1', query: 'tech' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Freeapiapp.NotFoundError);
  });

  test('random', async () => {
    const responsePromise = client.public.books.random();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('random: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.public.books.random({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Freeapiapp.NotFoundError,
    );
  });
});
