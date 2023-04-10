import { ImageSourcePropType } from 'react-native';

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

interface SWRDataFetchResult<T> {
  data: T | undefined;
  isLoading: boolean;
  isValidating: boolean;
  error: Error | undefined;
}

export { Shadow, Shadows, IconObject, Job, SWRDataFetchResult };
