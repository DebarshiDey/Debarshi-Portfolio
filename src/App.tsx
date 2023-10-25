import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Upto from "./components/Upto";
import Contact from "./components/Contact";
import Sticky from "react-stickynode";

function App() {
  const [pageState, setPageState] = useState<String>("Home");

  const handleClick = (newState: String) => {
    setPageState(newState);
    console.log(pageState);
  };
  let content;
  switch (pageState) {
    case "About Debarshi":
      content = <About></About>;
      break;
    case "Contact":
      content = <Contact></Contact>;
      break;
    case "Experiences":
      content = <Experiences></Experiences>;
      break;
    case "What I'm Up To":
      content = <Upto></Upto>;
      break;
    default:
      content = <About></About>;
      break;
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Sticky>
          <NavBar handleClick={handleClick} />
        </Sticky>
      </GridItem>
      <GridItem area="main">{content}</GridItem>
    </Grid>
  );
}

export default App;
