export const sortAlphabeticallyByObjectKey = (a: any, b: any) => {
  return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
};
