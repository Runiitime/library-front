import { useEffect } from 'react';
import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { handleError } from '@infrastructure/API/helpers';

export const useHandleError = (errorMessage: string, error: FetchBaseQueryError | SerializedError | undefined): void => {
  useEffect(() => {
    if (error) {
      handleError(errorMessage, error);
    }
  }, [error, errorMessage]);
};
