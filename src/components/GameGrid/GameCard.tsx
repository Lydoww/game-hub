import { Game } from "@/hooks/useGames";
import { Card, Image, Heading, HStack } from "@chakra-ui/react";
import PlateformIconList from "./PlateformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  if (!game) {
    return null;
  }

  return (
    <Card.Root>
      <Image src={getCroppedImageURL(game.background_image)} alt={game.name} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlateformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
