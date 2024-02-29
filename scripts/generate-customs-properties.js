import { choices, decisions } from '../tokens.js';

import fs from 'fs';

function toKebabCase(name) {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/*function transformToken(parentKey, object) {
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
}*/

const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n');

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((transformedTokens, objectKey) => {
    const value = object[objectKey];
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`);

    if (Array.isArray(value)) {
      return `${transformedTokens}\n  --${customProperty}: ${value.join(', ')};`;
    } else if (typeof value === 'object') {
      return `${transformedTokens}\n${transformTokens(customProperty, value)}`;
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`;
    return `${transformedTokens}\n  ${label}: ${value};`;
  }, '');
}

function buildTokens() {
  const transformedChoices = transformTokens(null, choices);
  const transformedDecisions = transformTokens(null, decisions);
  const customProperties = `${transformedChoices}${transformedDecisions}`;

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`;

  fs.writeFile('./tokens.css', data, 'utf8', (error) => {
    if (error) throw error;
    console.log('🎨 Custom properties created!');
  });
}

buildTokens();
console.log('script execute');
