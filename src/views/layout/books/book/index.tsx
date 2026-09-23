import React from "react";
import { Heading, Card, Flex, Text, Box, Badge } from "@radix-ui/themes";

import type { Book } from "@data/book";

interface Props {
    data: Book
}

export const Item: React.FC<Props> = ({ data }: Props) => {
    const {
        author,
        completed,
        pages,
        published_year,
        review,
        title,
    } = data

    const statusText = completed ? 'Завершено' : 'Не завершено';
    const statusColor = completed ? 'green' : 'yellow';

    return (
        <Card size="2" variant="surface">

            <Heading size="4">{title}, {author}</Heading>
            <Flex direction="column" gap="2">
                <Box>
                    <Text>{"Наименование: "}</Text>
                    <Text weight="bold">{title}</Text>
                </Box>
                <Box>
                    <Text>{"Автор: "}</Text>
                    <Text weight="bold">{author}</Text>
                </Box>
                <Box>
                    <Text>{"Кол-во страниц: "}</Text>
                    <Text weight="bold">{pages}</Text>
                </Box>
                <Box>
                    <Text>{"Год публикации: "}</Text>
                    <Text weight="bold">{published_year}</Text>
                </Box>
                <Box>
                    <Text>{"Статус: "}</Text>
                    <Badge color={statusColor}>{statusText}</Badge>
                </Box>
                <Box>
                    <Text>{"Ревью: "}</Text>
                    <Text weight="bold">{review || "-"}</Text>
                </Box>
            </Flex>
        </Card>
    )
}