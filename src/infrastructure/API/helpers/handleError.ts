import { type RequestError } from '@data/API';

export const handleError = (message: string, error: RequestError) => {
  if ('status' in error) {
    console.error({ message: `${message}: ${error.status}` });
  } else {
    console.error({ message: `${message}: ${error.message}` });
  }
};
