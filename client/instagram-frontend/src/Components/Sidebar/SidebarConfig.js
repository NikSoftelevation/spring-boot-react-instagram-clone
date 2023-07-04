import {
  AiFillCompass,
  AiFillHeart,
  AiFillHome,
  AiFillMessage,
  AiFillPlusCircle,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { RiVideoLine, RiVideoFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const menu = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch />,
    activeIcon: <AiOutlineSearch />,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass />,
    activeicon: <AiFillCompass />,
  },

  {
    title: "Reels",
    icon: <RiVideoLine />,
    activeIcon: <RiVideoFill />,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage />,
    activeIcon: <AiFillMessage />,
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart />,
    activeIcon: <AiFillHeart />,
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle />,
    activeIcon: <AiFillPlusCircle />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    activeIcon: <CgProfile />,
  },
];
