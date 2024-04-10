import Item from "./Item";
import { paths } from "../../constants/formConstants";

const State7 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold text-3xl">
        Learning paths based on your answers
      </h1>
      <h4 className="font-medium">
        Choose one to get started. You can switch anytime.
      </h4>
      <div className="w-[70%] mt-4 flex flex-col lg:flex-row gap-4">
        {paths.map((item) => (
          <Item type="card" key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default State7;
