import React, { useState } from 'react';
import '../../styles/form.css';
const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className='form-container'>
      <div className='company-logo'>
        <h1 className='company-name'>Eden</h1>
      </div>

      {/* Stepper */}
      <div className='stepper-container'>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              className={`stepper-item ${
                currentStep === index + 1 ? 'stepper-item-active' : null
              } ${currentStep > index + 1 ? 'stepper-item-passed' : null}`}
            >
              <span className='stepper-value'>{index + 1}</span>
            </div>
          ))}
      </div>
      <div className='form'>
        <button
          className='btn'
          onClick={() => {
            setCurrentStep(currentStep + 1);
          }}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default FormContainer;
