import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const activeTabBtnBgColor = {
  backgroundColor: COLORS.primary,
};

const activeTabBtnTxtColor = {
  color: COLORS.white,
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  activeTabBtnBgColor,
  btnText: {
    fontFamily: 'DMMedium',
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  activeTabBtnTxtColor,
});

export default styles;
