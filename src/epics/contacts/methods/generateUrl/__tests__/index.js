import generateUrl from '../index';

describe('generateUrl method', () => {
  test('should working correctly with empty params', () => {
    expect(generateUrl('https://abc.com')).toBe('https://abc.com');
  });

  test('should working correctly with random params', () => {
    const params = {
      test: 'test',
      another: 'really++bad++param',
    };

    expect(generateUrl('https://abc.com', params))
      .toBe('https://abc.com?test=test&another=really%2B%2Bbad%2B%2Bparam');
  });

  test('should not add empty params', () => {
    const params = {
      test: null,
      another: 0,
    };

    expect(generateUrl('https://abc.com', params))
      .toBe('https://abc.com');
  });

  test('should properly combine valid and invalid params', () => {
    const params = {
      test: null,
      another: 0,
      valid: 'true',
    };

    expect(generateUrl('https://abc.com', params))
      .toBe('https://abc.com?valid=true');
  });
});
