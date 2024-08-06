import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/google";
import "react-social-icons/github";

const SocialIcons = ({ icon }: any) => {
  return (
    <div>
      <SocialIcon url={`www.${icon}.com`} />
    </div>
  );
};

export default SocialIcons;
