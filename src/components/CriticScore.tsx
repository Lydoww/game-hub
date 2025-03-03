import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let bgColor =
    score > 75 ? "green.700" : score > 60 ? "yellow.600" : "red.600";

  return (
    <Badge fontSize="14px" borderRadius="4px" px={2} bg={bgColor} >
      {score}
    </Badge>
  );
};

export default CriticScore;
