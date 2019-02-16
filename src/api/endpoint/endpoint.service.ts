import { isUndefined } from 'lodash';

export function endpoint<T>(urlTemplate: string, params: { [key: string]: string | number | boolean | T }) {
  let output = urlTemplate;
  let queryIndex = 0;

  Object.keys(params).map(key => {
    const keyMatch = `:${key}`;

    if (urlTemplate.includes(keyMatch)) {
      const paramValue = isUndefined(params[key]) ? '' : String(params[key]);
      output = output.replace(keyMatch, paramValue);
      return delete params[key];
    }

    if (!isUndefined(params[key])) {
      const querySymbol = (queryIndex === 0) ? '?' : '&';
      queryIndex++;
      output += querySymbol + key + '=' + params[key];
    }
  });

  return output;
}
