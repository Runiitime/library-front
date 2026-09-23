import { Container } from "@radix-ui/themes";

import { Books, Header, Filters } from "@views/layout";

const App = () => {

  return (
    <Container>
        <Header/>
        <Filters/>
        <Books/>
    </Container>
  )
}

export default App
