import { Box, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const Filters = () => {

    return (
        <Box>
            <TextField.Root placeholder="Find book by author">
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
        </Box>
    )
}
