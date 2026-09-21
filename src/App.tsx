import { Heading, Box, Container, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { Books } from "./views/layout/books";

const App = () => {

  return (
    <Container>
        <Box>
            <Heading>My Library Front</Heading>
        </Box>
        <Box>
        <TextField.Root placeholder="Find book by author">
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
        </TextField.Root>
        </Box>

        <Books/>
    </Container>
  )
}

export default App
