import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import { Plateform } from "@/hooks/useGames";
import { CiFilter } from "react-icons/ci";

interface Props {
  onSelectPlatform: (platform: Plateform) => void;
  selectedPlatform: Plateform | null;
}

const PlatFormSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" marginX={10} paddingX={8}>
          {selectedPlatform?.name || "Platforms"}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
            value={platform.id.toString()}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatFormSelector;
