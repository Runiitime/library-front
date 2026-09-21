import {type GetBooksApiArg, type ModelsBook, useGetBooksQuery} from '@infrastructure/API/rtkQueryApi/booksApi'
import { useHandleError } from '@infrastructure/API/hooks';

export const useQueryGetBooksList = (args?: GetBooksApiArg) => {
    const { data, error, ...rest} = useGetBooksQuery(args ?? {});

    useHandleError('', error);

    const booksList: ModelsBook[] = data ?? []

    return { booksList, error, ...rest}
}