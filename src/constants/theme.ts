import { Colors, Font, Sizes, Shadows } from 'custom';

const COLORS: Colors = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',
  gray: '#83829A',
  gray2: '#C1C0C8',
  gray3: '#B3AEC6',
  white: '#F3F4F8',
  white2: '#FFF',
  lightWhite: '#FAFAFC',
};

const FONT: Font = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const SIZES: Sizes = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS: Shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };