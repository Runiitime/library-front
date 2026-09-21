import { Flex, Heading, Button, Box, Container, TextField, Card, } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
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
      <Flex direction="row" gap="4">
          <Card>
              <Button>Let's go</Button>
          </Card>
          <Card>
              <Button>Let's go</Button>
          </Card>
          <Card>
              <Button>Let's go</Button>
          </Card>
      </Flex>
    </Container>
  )
}

export default App
