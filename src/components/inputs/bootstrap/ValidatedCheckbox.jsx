import React from 'react';
import { FormGroup, Checkbox, HelpBlock } from 'react-bootstrap';

export default ({ className, controlId, validationState, label, linkUrl, linkText, checked, onChange, onBlur, disabled, value, help }) => {
  return (
    <FormGroup
      className={className}
      controlId={controlId}
      validationState={validationState}
    >
      <label className="checkbox" >
        <Checkbox
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          value={value}
        >
          {label}
          {
            linkUrl &&
            <a href={linkUrl}> {linkText} </a>
          }
        </Checkbox>

      </label>
      <HelpBlock>{help}</HelpBlock>
    </FormGroup>
  );
}
