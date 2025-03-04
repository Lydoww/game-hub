import "./App.css";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./components/PlatFormSelector";
import { Plateform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Plateform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Stack hideBelow={"lg"}>
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <PlatFormSelector 
         selectedPlatform={selectedPlatform}  onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  );
}

export default App;
