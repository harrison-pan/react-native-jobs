import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  footerContainer: {
    marginTop: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
  },
  paginationImage: {
    width: '60%',
    height: '60%',
    tintColor: COLORS.white,
  },
  paginationTextBox: {
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  paginationText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  homeSafeAreaView: { flex: 1, backgroundColor: COLORS.lightWhite },
  homeScrollView: { flex: 1, padding: SIZES.medium },
  jobDetailsSafeAreaView: { flex: 1, backgroundColor: COLORS.lightWhite },
  jobDetailsScrollView: { padding: SIZES.medium, paddingBottom: 100 },
});

export default styles;
