import { ImageSourcePropType } from 'react-native';

interface Sizes {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
}

interface Shadow {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

interface Shadows {
  small: Shadow;
  medium: Shadow;
}

interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  gray: string;
  gray2: string;
  gray3: string;
  white: string;
  white2: string;
  lightWhite: string;
}

interface Font {
  regular: string;
  medium: string;
  bold: string;
}

interface IconObject {
  heart: string;
  menu: ImageSourcePropType;
  search: string;
  filter: string;
  left: string;
  heartOutline: string;
  share: string;
  location: string;
  chevronLeft: string;
  chevronRight: string;
}

interface Job {
  employer_name: string;
  employer_logo?: string;
  job_employment_type?: string;
  job_id?: string;
  job_title?: string;
  job_country?: string;
}

export { Sizes, Shadow, Shadows, Colors, Font, IconObject, Job };
