import _ from 'lodash';
import parse from './parse.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const lines = keys.map((key) => {
    const inFile1 = Object.hasOwn(data1, key);
    const inFile2 = Object.hasOwn(data2, key);

    if (inFile1 && inFile2) {
      if (data1[key] === data2[key]) {
        return `  ${key}: ${data1[key]}`;
      }
      return ` - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }

    if (inFile1) {
      return ` - ${key}: ${data1[key]}`;
    }

    return ` + ${key}: ${data2[key]}`;
  });

  return `{\n${lines.join('\n')}\n}`;
};
export default genDiff;
