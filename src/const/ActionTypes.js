function generateConst(name) {
  return {
    LOADING: `${name}.LOADING`,
    ERROR: `${name}.ERROR`,
    DONE: `${name}.DONE`,
    NOT_FOUND: `${name}.NOT_FOUND`,
  };
}
export const PHOTOS = generateConst('PHOTOS');
