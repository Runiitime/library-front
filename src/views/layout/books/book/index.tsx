import React from "react";
import { Heading, Card } from "@radix-ui/themes";
import type { Book } from "@data/book";

interface Props {
    data: Book
}

export const Item: React.FC<Props> = ({ data }: Props) => {
    const {
        id,
        author,
        completed,
        completed_at,
        created_at,
        pages,
        published_year,
        review,
        title,
    } = data

    return (
        <Card>
            <Heading size="4">{title}, {author}</Heading>

        </Card>
    )
}