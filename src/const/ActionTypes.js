function generateConst(name) {
  return {
    LOADING: `${name}.LOADING`,
    ERROR: `${name}.ERROR`,
    DONE: `${name}.DONE`,
    DELETE: `${name}.DELETE`,
    ADD: `${name}.ADD`,
  };
}
export const PHOTOS = generateConst('PHOTOS');
