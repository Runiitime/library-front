import { type GetBooksByIdApiArg, useGetBooksByIdQuery } from '@infrastructure/API/rtkQueryApi/booksApi'
import { useHandleError } from '@infrastructure/API/hooks';
import { skipToken } from "@reduxjs/toolkit/query";

export const useQueryGetBookByID = (args: GetBooksByIdApiArg) => {
    const { data, error, ...rest} = useGetBooksByIdQuery(args ? args : skipToken);

    useHandleError('', error);
    const book = data

    return { book, error, ...rest}
}