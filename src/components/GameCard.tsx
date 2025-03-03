import { Game } from "@/hooks/useGames";
import { Card, Image, Heading } from "@chakra-ui/react";
import PlateformIconList from "./PlateformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  if (!game) {
    return null;
  }

  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlateformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
