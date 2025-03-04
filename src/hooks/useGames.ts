import useData from "./useData";
import { Genre } from "./useGenres";

export interface Plateform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Plateform;
  }[];
  metacritic: number;
}

const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Plateform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGame;
