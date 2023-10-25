import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
interface props {
  name: string;
  onClick: (name: string) => void;
}

const TaskButton = ({ name, onClick }: props) => {
  const handleClick = () => {
    onClick(name);
  };

  const buttonStyle = {
    fontSize: "20px",
    margin: "20px",
  };

  return (
    <Button colorScheme="gray" style={buttonStyle} onClick={handleClick}>
      {name}
    </Button>
  );
};

export default TaskButton;
