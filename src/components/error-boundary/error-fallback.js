import * as React from 'react';
import PropTypes from 'prop-types';
import {
  ErrorContainer,
  ResetButton,
  ErrorPreTitle,
  ErrorMessage
} from './components';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <ErrorContainer role="alert">
      <ErrorPreTitle>Something went wrong:</ErrorPreTitle>
      <img src="" height="25%" alt="" />
      <ErrorMessage>{error.message}</ErrorMessage>
      <ResetButton
        onClick={resetErrorBoundary}
      >
        Try again
      </ResetButton>
    </ErrorContainer>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  resetErrorBoundary: PropTypes.func
};

export default ErrorFallback;