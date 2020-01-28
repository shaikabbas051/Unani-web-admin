/**
 * Test the request function
 */

import fileRequest from '../fileRequest';

describe('fileRequest', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    window.fetch = jest.fn();
  });

  describe('stubbing successful response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        headers: {
          'Content-type': 'text/csv',
        },
      });

      window.fetch.mockReturnValue(Promise.resolve(res));
    });
  });

  describe('stubbing 204 response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('', {
        status: 204,
        statusText: 'No Content',
      });

      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    it('should return null on 204 response', (done) => {
        fileRequest('/thisurliscorrect')
        .catch(done)
        .then((blob) => {
          expect(blob).toBeNull();
          done();
        });
    });
  });

  describe('stubbing error response', () => {
    // Before each test, pretend we got an unsuccessful response
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'text/csv',
        },
      });

      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    it('should catch errors', (done) => {
        fileRequest('/thisdoesntexist')
        .catch((err) => {
          expect(err.response.status).toBe(404);
          expect(err.response.statusText).toBe('Not Found');
          done();
        });
    });
  });
});
