import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm" marginX={10} paddingX={8}>
          order by: Relevance
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="name">Relevance</MenuItem>
        <MenuItem value="name">Date added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="name">Release date</MenuItem>
        <MenuItem value="name">Popularity</MenuItem>
        <MenuItem value="name">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
