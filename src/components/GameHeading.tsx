import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading
      as={"h1"}
      marginX={10}
      marginBottom={10}
      marginTop={10}
      fontSize={{ base: "2xl", lg: "5xl" }}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
