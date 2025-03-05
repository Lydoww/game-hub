import { Game } from "@/hooks/useGames";
import { Card, Image, Heading, HStack, Text } from "@chakra-ui/react";
import PlateformIconList from "./PlateformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageURL(game.background_image)} alt={game.name} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlateformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
      <Heading fontSize="2xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
