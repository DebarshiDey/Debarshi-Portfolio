import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import TaskButton from "./TaskButton";

interface props {
  handleClick: (newState: string) => void;
}

const NavBar = ({ handleClick }: props) => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      padding="10px"
      justifyContent="space-between"
      top="0"
      backgroundColor={colorMode === "dark" ? "black" : "aliceblue"}
      opacity={0.9}
      zIndex={100}
    >
      <Image src={logo} boxSize="60px" />
      <div>
        <TaskButton name="About Debarshi" onClick={handleClick}></TaskButton>
        <TaskButton name="Contact" onClick={handleClick}></TaskButton>
        <TaskButton name="Experiences" onClick={handleClick}></TaskButton>
        <TaskButton name="What I'm Up To" onClick={handleClick}></TaskButton>
      </div>
      <div className="colorSwitch">
        <ColorModeSwitch />
      </div>
    </HStack>
  );
};

export default NavBar;
