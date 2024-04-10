import { useEffect } from "react";

type Props = {
  callback: () => void;
};

const State6 = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      props.callback();
    }, 3000);
  }, [props]);

  return (
    <div className="w-screen bg-white z-10 h-screen absolute top-0 left-0 flex items-center flex-col justify-center gap-4 lg:px-[410px]">
      <div className="loader"></div>
      <div className="font-bold text-center text-2xl">
        Finding learning path recommendations for you based on your responses
      </div>
    </div>
  );
};

export default State6;
