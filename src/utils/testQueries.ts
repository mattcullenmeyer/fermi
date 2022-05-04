type WriteSelectors<T> = {
  [P in keyof T]: { 'data-testid': string };
};

export const writeSelectorGenerator = <T extends Record<string, null>>(
  testSelectors: T
) =>
  Object.keys(testSelectors)
    .map((testSelector) => ({
      [testSelector]: { 'data-testid': testSelector },
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    })) as WriteSelectors<T>;

type QuerySelectors<T> = {
  [P in keyof T]: string;
};

export const querySelectorGenerator = <T extends Record<string, null>>(
  testSelectors: T
) =>
  Object.keys(testSelectors)
    .map((testSelector) => ({
      [testSelector]: testSelector,
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    })) as QuerySelectors<T>;
