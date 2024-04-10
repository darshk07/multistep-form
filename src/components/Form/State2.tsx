import Item from "./Item";
import { interest } from "../../constants/formConstants";
import { Data } from "../../types";
import { BsGraphUp } from "react-icons/bs";
import { FaEarthAfrica } from "react-icons/fa6";
import { PiMathOperationsFill } from "react-icons/pi";
import { LiaMehRollingEyes } from "react-icons/lia";
import { GiDart } from "react-icons/gi";

const State2 = ({
  data,
  setData,
}: {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}) => {
  const { interest: sd } = data;

  const onSelect = (id: string) => {
    setData({ ...data, interest: id });
  };

  const mapping: {
    [key: number]: React.ReactNode;
  } = {
    1: <BsGraphUp />,
    2: <FaEarthAfrica />,
    3: <PiMathOperationsFill />,
    4: <GiDart />,
    5: <LiaMehRollingEyes />,
  };

  return (
    <div className="w-full flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold text-3xl">Which are you most interested in?</h1>
      <h4 className="">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </h4>
      <div className="w-full lg:w-[48%] mt-4 flex flex-col items-start gap-2">
        {interest.map((item, index: number) => (
          <Item
            key={item.id}
            item={{ ...item, icon: mapping[index + 1] }}
            selected={sd === item.id ? true : false}
            select={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default State2;
