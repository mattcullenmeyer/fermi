interface WriteSelectors {
  [key: string]: { 'data-testid': string };
}

export const writeSelectorGenerator = (testids: string[]): WriteSelectors =>
  testids
    .map((testid) => ({
      [testid]: { 'data-testid': testid },
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    }));

interface QuerySelectors {
  [key: string]: string;
}

export const querySelectorGenerator = (testids: string[]): QuerySelectors =>
  testids
    .map((testid) => ({
      [testid]: testid,
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    }));
