import React from 'react';
import PageContainer from '../../components/PageContainer';
import PageTextBox from '../../components/PageTextBox';

const Schedule = () => {
  return (
    <PageContainer heading={'Schedule'}>
      <PageTextBox>
        The 2023 festival schedule is yet to be announced.
      </PageTextBox>
      <PageTextBox>
        Please look our previous year's schedules to know what to expect.
      </PageTextBox>
    </PageContainer>
  );
};

export default Schedule;
