// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Freeapiapp from 'freeapiapp';
import { Response } from 'node-fetch';

const client = new Freeapiapp({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource videos', () => {
  test('retrieve', async () => {
    const responsePromise = client.public.youtube.videos.retrieve('EQwmQLU1S6I');
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
      client.public.youtube.videos.retrieve('EQwmQLU1S6I', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Freeapiapp.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.public.youtube.videos.list();
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
    await expect(client.public.youtube.videos.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Freeapiapp.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.public.youtube.videos.list(
        {
          limit: '10',
          page: '1',
          query: 'javascript',
          sortBy: 'keep one: mostLiked | mostViewed | latest | oldest',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Freeapiapp.NotFoundError);
  });
});
