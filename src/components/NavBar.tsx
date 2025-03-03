import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import Button from "./Button";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="60px"></Image>
      <Button />
    </HStack>
  );
};

export default NavBar;
