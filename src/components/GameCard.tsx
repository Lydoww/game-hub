import { Game } from "@/hooks/useGames";
import { Card, Image, Heading } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" >
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Card.Description>{}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
