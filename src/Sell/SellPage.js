import React, { useState } from "react";
import { Link } from "react-router-dom";
import Step1ContentPage from './SellSteps/Step1Content';
import Step2ContentPage from './SellSteps/Step2Content';
import Step3ContentPage from './SellSteps/Step3Content';
import Step4ContentPage from './SellSteps/Step4Content';
import Step5ContentPage from './SellSteps/Step5Content';
import Step6ContentPage from './SellSteps/Step6Content';
import Step7ContentPage from './SellSteps/Step7Content';
import Step8ContentPage from './SellSteps/Step8Content';

const SellPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (step) => {
    setCurrentStep(step);
    console.log("tep", currentStep)
  };
  

  return (
    <div className="sell-con">
      <div className="login-contt">

        {currentStep === 0 && <>
          <div className="login-tit">
            <h2 className='hh'>Перед тем как <br /> приступить к продаже:</h2>
          </div>
          <div className="log-form">
            <div className='divsa'>
              <div className='greensel'></div>
              <div className='redsel'></div>
            </div>
            <div>
              <Link to={"/policy"}>
                <p className='p-sel'>Нажимая «Начать продажу», Вы принимаете Условия продажи</p>
              </Link>
              <button type="submit" className='sell-bbu' onClick={() => handleStepChange(currentStep + 1)}>
                Приступить к продаже
              </button>
            </div>
          </div>
        </>}
            <div>


            </div>
        {currentStep === 1 && <Step1ContentPage  handleStepChange={handleStepChange} />}
        {currentStep === 2 && <Step2ContentPage  handleStepChange={handleStepChange} />}
        {currentStep === 3 && <Step3ContentPage  handleStepChange={handleStepChange} />}
        {currentStep === 4 && <Step4ContentPage  handleStepChange={handleStepChange} />}
        {currentStep === 5 && <Step5ContentPage  handleStepChange={handleStepChange} />}
        {currentStep === 6 && <Step6ContentPage  handleStepChange={handleStepChange} />}
        {currentStep === 7 && <Step7ContentPage  handleStepChange={handleStepChange} />}
        {currentStep === 8 && <Step8ContentPage  handleStepChange={handleStepChange} />}
      </div>
    </div>
  );
};

export default SellPage;
