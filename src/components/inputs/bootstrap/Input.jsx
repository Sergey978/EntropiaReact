import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default ({className, controlId, validationState, type, label, value, help, onChange, onBlur, placeholder, disabled, autoFocus, autoComplete, showFeedback}) => {

  return (
    <FormGroup
      className={className}
      controlId={controlId}
      validationState={validationState}
      >
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        type={type || 'text'}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        />
      {showFeedback === false ? null : <FormControl.Feedback />}
      <HelpBlock>{help}</HelpBlock>
    </FormGroup>
  );
};
