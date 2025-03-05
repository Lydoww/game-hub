import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/rawg-like.svg";
import Button from "./Button";
import SearchInput from "./Filter/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Link href="/">
        <Image
          src={logo}
          boxSize="60px"
          _hover={{ scale: 1.1, transition: "0.3s ease" }}
        ></Image>
      </Link>
      <SearchInput onSearch={onSearch}/>
      <Button />
    </HStack>
  );
};

export default NavBar;
