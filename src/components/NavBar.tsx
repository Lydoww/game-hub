import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import Button from "./Button";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
      <Button />
    </HStack>
  );
};

export default NavBar;
