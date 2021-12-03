import React, { FC } from 'react';
import AppLayout from '../components/AppLayout';
import Header from '../components/Header';
import MatchReviewContent from '../components/MatchReviewContent';

const MatchReview: FC = () => {
  return (
    <AppLayout>
      <Header />
      <main className="main">
        <MatchReviewContent />
      </main>
    </AppLayout>
  );
};

export default MatchReview;
