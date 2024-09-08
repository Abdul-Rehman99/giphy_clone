import {FaInstagram, FaXTwitter, FaYoutube, FaLinkedin, FaGithub} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/abdulxxrehman">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/Abdul-Rehman99">
          <FaGithub size={20} />
        </a>
        <a href="https://x.com/AbdulxRehma">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;