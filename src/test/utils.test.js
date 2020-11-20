import { Storage, getClassName } from 'utils';
import classNamesMock from './__mocks__/class-names';

const TEST_KEY = 'TEST__KEY';
const TEST_VALUE = 'TEST';

describe('utils was workly corrected', () => {
  test('Storage.storeData', () => {
    Storage.storeData(TEST_KEY, TEST_VALUE);
    expect(JSON.parse(localStorage.getItem(TEST_KEY))).toBe(TEST_VALUE);
  });

  test('Storage.retrieveData', () => {
    Storage.storeData(TEST_KEY, TEST_VALUE);
    const storagedValue = Storage.retrieveData(TEST_KEY);
    expect(storagedValue).toBe(TEST_VALUE);
  });
  test('getClassName(obj)', () => {
    const value = getClassName(classNamesMock.classNameObject);
    expect(classNamesMock.expectedValue).toBe(value);
  });
  test('getClassName(array)', () => {
    const value = getClassName(classNamesMock.classNameArray);
    expect(classNamesMock.expectedValue).toBe(value);
  });
});
