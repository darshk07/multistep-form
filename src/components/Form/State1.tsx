import Item from "./Item";
import { description } from "../../constants/formConstants";
import { Data } from "../../types";

type Props = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

const State1 = (props: Props) => {
  const { description: sd } = props.data;

  const onSelect = (id: string) => {
    props.setData({ ...props.data, description: id });
  };

  return (
    <div className="w-full flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold text-3xl">What describes you the best?</h1>
      <h4 className="">This will help us personalize your experience.</h4>
      <div className="w-full lg:w-[48%] mt-4 flex flex-col items-start gap-2">
        {description.map((item) => (
          <Item
            key={item.id}
            select={onSelect}
            item={item}
            selected={sd === item.id ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default State1;
