import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const selectedJobStyle = {
  backgroundColor: COLORS.primary,
};

const selectedLogoStyle = {
  backgroundColor: COLORS.white2,
};

const selectedJobNameStyle = {
  color: COLORS.white,
};

const selectedPublisherStyle = {
  color: COLORS.white,
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  selectedJob: selectedJobStyle,
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedLogoStyle,
  logoImage: {
    width: '70%',
    height: '70%',
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray3,
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  selectedJobNameStyle,
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  selectedPublisherStyle,
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: COLORS.gray3,
  },
});

export default styles;
