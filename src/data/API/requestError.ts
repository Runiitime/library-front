import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

export type RequestError = FetchBaseQueryError | SerializedError;
