export const SCREEN_SIZES = {
  MOBILE: 1039
};

const size = {
  mobile: `(max-width: ${SCREEN_SIZES.MOBILE}px)`
};

const mediaQueryFor = {
  mobile: `@media ${size.mobile}`
};

export default mediaQueryFor;
