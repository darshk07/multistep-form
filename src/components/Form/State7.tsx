import Item from "./Item";
import { paths } from "../../constants/formConstants";
import foundational from "../../assets/foundational.png";
import { Item as ItemType } from "../../types";

const State7 = () => {
  const mapping: {
    [key: number]: string;
  } = {
    1: foundational,
    2: foundational,
  };

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold text-3xl">
        Learning paths based on your answers
      </h1>
      <h4 className="font-medium">
        Choose one to get started. You can switch anytime.
      </h4>
      <div className="w-[70%] mt-4 flex flex-col lg:flex-row gap-4">
        {paths.map((item: ItemType, index: number) => (
          <Item
            type="card"
            key={item.id}
            item={{ ...item, img: mapping[index + 1] }}
          />
        ))}
      </div>
    </div>
  );
};

export default State7;
