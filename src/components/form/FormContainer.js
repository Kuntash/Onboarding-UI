import React, { useState } from 'react';
import '../../styles/form.css';

import { formList } from '../../formList';
import Form from './Form';
import { DoneRounded } from '@mui/icons-material';

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formResponse, setFormResponse] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    useType: 'personal'
  });
  return (
    <div className='form-container'>
      <div className='company-container'>
        <img src='images/logo.svg' alt='Company logo' />
        <h1 className='company-name'>Eden</h1>
      </div>

      {/* Stepper */}
      <div className='stepper-container'>
        {formList.map((_, index) => (
          <div
            key={index}
            className={`stepper-item ${
              currentStep === index + 1 ? 'stepper-item-active' : null
            } ${currentStep > index + 1 ? 'stepper-item-passed' : null}`}
          >
            <span className='stepper-value'>{index + 1}</span>
          </div>
        ))}

        {/* One extra step for the form finished UI */}
        <div
          className={`stepper-item ${
            currentStep === formList.length + 1 ? 'stepper-item-active' : null
          } ${
            currentStep > formList.length + 1 ? 'stepper-item-passed' : null
          }`}
        >
          <span className='stepper-value'>{formList.length + 1}</span>
        </div>
      </div>

      {/* Form UIs */}

      {currentStep <= formList.length ? (
        <Form
          form={formList[currentStep - 1]}
          formResponse={formResponse}
          setFormResponse={setFormResponse}
        />
      ) : (
        <div className='form-complete'>
          <div className='complete-icon-container'>
            <DoneRounded className='complete-icon' />
          </div>
          <h1 className='complete-heading'>Congratulations, Eren!</h1>
          <p className='complete-body'>
            You have completed onboarding, you can start using the Eden!
          </p>
        </div>
      )}
      <button
        className='btn'
        onClick={() => {
          // Save form response.

          // Increase the step if step is less than formList's length;
          if (currentStep <= formList.length) {
            setCurrentStep(currentStep + 1);
          } else {
            // Submit the form asynchronously.
            console.log(formResponse);
          }
        }}
      >
        {currentStep <= formList.length ? 'Create Workspace' : 'Launch Eden'}
      </button>
    </div>
  );
};

export default FormContainer;
