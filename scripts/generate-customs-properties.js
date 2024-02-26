import { choices, decisions } from '../tokens.js';

import fs from 'fs';

function toKebabCase(name) {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function transformToken(parentKey, object) {
  const keys = Object.keys(object);

  return keys.reduce((tokenTransformed, objectKey) => {
    const value = object[objectKey];

    if (typeof value === 'object') {
      const tokenCustomProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`;

      return `${tokenTransformed}${transformToken(toKebabCase(tokenCustomProperty), value)}\n`.replace(
        /\n{3}(?=\n*$)/,
        '',
      );
    }

    return `${tokenTransformed}\t--${parentKey}-${toKebabCase(objectKey)}: ${value};\n`.replace(
      /\n{3}(?=\n*$)/,
      '',
    );
  }, '');
}

function buildTokens() {
  const choiceStr = transformToken('', choices);
  const decisionStr = transformToken('', decisions);

  const data = `:root {
${choiceStr}
${decisionStr}
}`.replace(/\n{3}(?=\n*$)/, '');
  fs.writeFile('./tokens.css', data, 'utf8', (error) => {
    if (error) {
      return console.error(error.message);
    }
  });
}

buildTokens();
console.log('script execute');
