import React from 'react';
import BootstrapInput from '../bootstrap/Input';
import { computeClassName, computeValidationStateAndHelp } from  './_processProps.es6';

export const RfsInput = (props) => {

  // using HOCs to compute these props
  //   className, help, validationState

  const {
    className,
    label,
    help,
    validationState,
    formState, // consume
    fieldState, // consume
    handleValueChange, // consume
    handleBlur, // consume
    required, // consume
    showMessage, // consume
    ...other
  } = props;

  return (
    <BootstrapInput
      className={className}
      controlId={fieldState.getKey()}
      label={label}
      value={fieldState.getValue()}
      help={help}
      validationState={validationState}
      onChange={e => handleValueChange(e.target.value)}
      onBlur={handleBlur}
      {...other}
      />
  );
};

export default computeValidationStateAndHelp(computeClassName(RfsInput));
