import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SellPage from './SellPage';
import SellStep from './SellStep';

import Step3ContentPage from './SellSteps/Step3Content';
import Step4ContentPage from './SellSteps/Step4Content';
import Step5ContentPage from './SellSteps/Step5Content';
import Step6ContentPage from './SellSteps/Step6Content';
import Step7ContentPage from './SellSteps/Step7Content';
import Step8ContentPage from './SellSteps/Step8Content';

const SellRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SellPage />}>
        <Route path="step1" element={<SellStep stepNumber={1} />}>
          <Route index element={<Step3ContentPage />} />
        </Route>
        <Route path="step2" element={<SellStep stepNumber={2} />}>
          <Route index element={<Step3ContentPage />} />
        </Route>
        <Route path="step3" element={<SellStep stepNumber={3} />}>
          <Route index element={<Step3ContentPage />} />
        </Route>
        <Route path="step4" element={<SellStep stepNumber={4} />}>
          <Route index element={<Step4ContentPage />} />
        </Route>
        <Route path="step5" element={<SellStep stepNumber={5} />}>
          <Route index element={<Step5ContentPage />} />
        </Route>
        <Route path="step6" element={<SellStep stepNumber={6} />}>
          <Route index element={<Step6ContentPage />} />
        </Route>
        <Route path="step7" element={<SellStep stepNumber={7} />}>
          <Route index element={<Step7ContentPage />} />
        </Route>
        <Route path="step8" element={<SellStep stepNumber={8} />}>
          <Route index element={<Step8ContentPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default SellRoutes;
