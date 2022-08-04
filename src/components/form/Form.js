import React from 'react';
import '../../styles/form.css';

const Form = ({ form, formResponse, setFormResponse }) => {
  return (
    <div className='form'>
      <h1 className='form-heading'>{form.heading}</h1>
      <h2 className='form-subheading'>{form.subHeading}</h2>
      {form.formInputs.map((formInput, formInputIndex) =>
        formInput.inputType === 'radio' ? (
          <div className='form-option-container' key={formInputIndex}>
            {formInput.options.map((option, index) => (
              <div
                key={index}
                className={`form-option ${
                  formResponse[formInput.inputName] === option.name
                    ? 'form-option-selected'
                    : ''
                }`}
                data-name={option.name}
                onClick={(e) => {
                  const nearestOptionNode = e.target.closest('.form-option');
                  setFormResponse((prev) => ({
                    ...prev,
                    [formInput.inputName]: nearestOptionNode.dataset.name
                  }));
                }}
              >
                {option.icon}
                <div className='option-heading'>{option.heading}</div>
                <div className='option-body'>{option.body}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className='form-input'>
            <label className='input-label'>{formInput.inputLabel}</label>
            {formInput.inputType === 'url' && (
              <div className='url-container'>
                <div className='prefix-url'>{formInput.prefixUrl}</div>
                <input
                  className='form-input-url'
                  name={formInput.inputName}
                  placeholder={formInput.inputPlaceHolder}
                  value={formResponse[formInput.inputName]}
                  onChange={(e) => {
                    setFormResponse((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value
                    }));
                  }}
                />
              </div>
            )}
            {formInput.inputType === 'text' && (
              <input
                className='form-input-text'
                name={formInput.inputName}
                placeholder={formInput.inputPlaceHolder}
                value={formResponse[formInput.inputName]}
                onChange={(e) => {
                  setFormResponse((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value
                  }));
                }}
              />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Form;
