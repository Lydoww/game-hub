import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/rawg-like.svg";
import Button from "./Button";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Link href="/">
        <Image
          src={logo}
          boxSize="60px"
          _hover={{ scale: 1.1, transition: "0.3s ease" }}
        ></Image>
      </Link>
      <SearchInput />
      <Button />
    </HStack>
  );
};

export default NavBar;
