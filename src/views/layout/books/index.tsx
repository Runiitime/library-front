import { useQueryGetBooksList } from "@infrastructure/API/hooks";
import React from "react";
import type { Book } from "@data/book";
import { Item } from './book'
import { Flex } from "@radix-ui/themes";

export const Books = React.memo(() => {
    const { booksList} = useQueryGetBooksList()

    const items = React.useMemo(() => {
        return booksList.map((book: Book) => <Item data={book} key={book.id} />)
    }, [booksList])

    return <Flex direction="row" gap="4" py="6"> { items } </Flex>
})