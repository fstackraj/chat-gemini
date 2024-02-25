import { FaRobot } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function ChatItem({ data }: { data: any }) {
  return (
    <div className="mb-8 space-y-2">
      <p className="flex items-center">
        <BsFillPersonLinesFill className="w-3 h-3 mr-2" /> {data.user}
      </p>
      <p className="flex items-center">
        <FaRobot className="w-3 h-3 mr-2" /> {data.gemini}
      </p>
    </div>
  );
}
