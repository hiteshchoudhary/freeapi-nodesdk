// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Freeapiapp from 'freeapiapp';
import { Response } from 'node-fetch';

const client = new Freeapiapp({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource randomJokes', () => {
  test('retrieve', async () => {
    const responsePromise = client.public.randomJokes.retrieve('100');
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
    await expect(
      client.public.randomJokes.retrieve('100', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Freeapiapp.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.public.randomJokes.list();
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
    await expect(client.public.randomJokes.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Freeapiapp.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.public.randomJokes.list(
        { inc: 'categories,id,content', limit: '10', page: '1', query: 'science' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Freeapiapp.NotFoundError);
  });
});
