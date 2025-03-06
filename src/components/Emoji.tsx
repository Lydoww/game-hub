import bullsEye from "../assets/bulls-eye.svg";
import thumbsUp from "../assets/thumbs-up.svg";
import meh from "../assets/meh.svg";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh" },
  4: { src: thumbsUp, alt: "recommended" },
  5: { src: bullsEye, alt: "exceptional" },
};

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} boxSize={"25px"} marginTop={2} />;
};

export default Emoji;
