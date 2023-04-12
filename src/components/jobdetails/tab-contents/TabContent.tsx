import React from 'react';
import { JobAbout } from '../../../components';
import { Job } from '../../../types/custom';
import Specifics from '../specifics/Specifics';

interface Props {
  activeTab: string;
  job: Job;
}

const TabContent: React.FC<Props> = ({ activeTab, job }: Props): JSX.Element | null => {
  switch (activeTab) {
    case 'About':
      return <JobAbout info={job.job_description ?? 'No data provided'} />;

    case 'Qualifications':
      return (
        <Specifics title="Qualifications" points={job.job_highlights?.Qualifications ?? ['N/A']} />
      );

    case 'Responsibilities':
      return (
        <Specifics
          title="Responsibilities"
          points={job.job_highlights?.Responsibilities ?? ['N/A']}
        />
      );

    default:
      return null;
  }
};

export default TabContent;
