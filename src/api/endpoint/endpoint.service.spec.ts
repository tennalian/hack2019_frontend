import { endpoint } from './endpoint.service';

beforeAll(() => {
  window.onerror = () => null;
});

describe('[Service] endpoint', () => {
  it('should return formatted url from template', () => {

    expect(endpoint('/api/some/:name/meta/:id', { name: 'value', id: 500 })).toBe('/api/some/value/meta/500');
    expect(endpoint('/api/some/:name/meta/:id', { name: 'value' })).toBe('/api/some/value/meta/:id');
    expect(endpoint('/api/some', { name: 'value' })).toBe('/api/some?name=value');
    expect(endpoint('/api/some', { name: 'value', query: 'search' })).toBe('/api/some?name=value&query=search');
    expect(endpoint('/api/some/:id', { name: 'value', query: 'search', id: 1000 })).toBe('/api/some/1000?name=value&query=search');
    expect(endpoint('/api/some/:id', { name: 'value', query: undefined, id: 1000 })).toBe('/api/some/1000?name=value');
    expect(endpoint('/api/some/:id', { name: 'value', query: undefined, id: 1000, take: 50 })).toBe('/api/some/1000?name=value&take=50');

  });
});
