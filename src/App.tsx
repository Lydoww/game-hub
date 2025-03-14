import "./App.css";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./components/Filter/PlatFormSelector";
import { Plateform } from "./hooks/useGames";
import SortSelector from "./components/Filter/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Plateform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText: string) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <Stack hideBelow={"lg"}>
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <Stack direction={{ base: "column", md: "row" }} gap={4}>
          <PlatFormSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Stack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
