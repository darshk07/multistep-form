import Item from "./Item";
import { mathLevel } from "../../constants/formConstants";
import { Data } from "../../types";

const State4 = ({
  data,
  setData,
}: {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}) => {
  const { mathLevel: sd } = data;

  const onSelect = (id: string) => {
    setData({ ...data, mathLevel: id });
  };

  return (
    <div className="w-full flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold text-3xl">What is your math comfort level?</h1>
      <h4 className="font-medium">
        Choose the highest level you feel confident in - you can always adjust
        later.
      </h4>
      <div className="w-[70%] mt-4 flex flex-col lg:flex-row gap-4">
        {mathLevel.map((item) => (
          <Item
            type="card"
            key={item.id}
            item={item}
            selected={sd === item.id ? true : false}
            select={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default State4;
