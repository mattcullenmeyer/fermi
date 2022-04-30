type WriteSelectors<T> = {
  [P in keyof T]: { 'data-testid': string };
};

export const writeSelectorGenerator = <T extends Record<string, null>>(
  testIds: T
) =>
  Object.keys(testIds)
    .map((testId) => ({
      [testId]: { 'data-testid': testId },
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    })) as WriteSelectors<T>;

type QuerySelectors<T> = {
  [P in keyof T]: string;
};

export const querySelectorGenerator = <T extends Record<string, null>>(
  testIds: T
) =>
  Object.keys(testIds)
    .map((testId) => ({
      [testId]: testId,
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    })) as QuerySelectors<T>;
