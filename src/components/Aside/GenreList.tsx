import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/image-url";
import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              alt={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Link onClick={() => onSelectGenre(genre)} fontSize="lg">
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
