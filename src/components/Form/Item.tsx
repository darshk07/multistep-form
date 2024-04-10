import { Item as ItemType } from "../../types";

type Props = {
  item: ItemType;
  selected?: boolean;
  select?: (id: string) => void;
  type?: "text" | "card";
};

const Item = (props: Props) => {
  const { item, selected, select, type } = props;

  if (type === "card") {
    return (
      <div
        onClick={() => {
          if (select) {
            select(item.id);
          }
        }}
        className={`flex flex-1 flex-col gap-1 rounded-md cursor-pointer items-center ${
          selected
            ? "border-secondary shadow-lg"
            : "border-grey hover:border-primary "
        } justify-start border-2 px-8 py-4 transition-none`}
      >
        <span className="w-[150px] aspect-square">
          <img src={item.img} />
        </span>
        <span className="font-semibold text-nowrap">{item.value}</span>
        <span className="text-dark-100">{item.alternate}</span>
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        if (select) select(item.id);
      }}
      className={`flex gap-1 w-full rounded-md cursor-pointer items-center ${
        selected
          ? "border-secondary shadow-lg"
          : "border-grey hover:border-primary "
      } justify-start border-2 px-4 py-4 transition-none`}
    >
      <>
        {item.img && (
          <span className="h-8 overflow-hidden rounded-full aspect-square mr-2">
            <img className="bg-cover" src={item?.img} />
          </span>
        )}

        {item.icon && (
          <span className="text-3xl h-8 overflow-hidden rounded-full flex items-center mr-2 aspect-square">
            {item.icon}
          </span>
        )}
      </>
      <span className="text-sm lg:text-md font-semibold">{item.value}</span>
      <span className="text-sm lg:text-md text-nowrap text-dark-100">
        {item.alternate}
      </span>
    </div>
  );
};

export default Item;
