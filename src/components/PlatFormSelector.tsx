import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";

const PlatFormSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  console.log(data);
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm" marginX={10} paddingX={8}>
          Platforms
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatFormSelector;
