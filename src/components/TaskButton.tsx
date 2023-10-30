import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  name: string;
  onClick: (name: string) => void;
  size?: string;
}

const TaskButton: React.FC<Props> = ({ name, onClick, size }) => {
  const handleClick = () => {
    onClick(name);
  };

  const buttonStyle = {
    fontSize: size,
    margin: size,
  };

  return (
    <Button colorScheme="gray" style={buttonStyle} onClick={handleClick}>
      {name}
    </Button>
  );
};

TaskButton.defaultProps = {
  size: "20px",
};

export default TaskButton;
