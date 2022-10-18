const variantFilled = {
  field: {
    bg: "inputBg",
  },
};
const variantOutline = {};
const variantFlushed = {};
const variantUnstyled = {};

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled,
};

export const inputTheme = {
  variants,
  defaultProps: {
    variant: "filled",
    focusBorderColor: "focusBorder",
  },
};
