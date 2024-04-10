import { IoChevronBackSharp } from "react-icons/io5";

const ProgressBar = ({ progress, back, stage }: { progress: number, back: () => void, stage: number }) => {
  return (
    <div className="self-center w-full lg:w-[80%] relative">
      <div
        onClick={() => {
          back();
        }}
        className={`${
          stage === 1 ? "hidden" : "absolute"
        } -left-6 -top-2 text-xl cursor-pointer font-bold`}
      >
        <IoChevronBackSharp />
      </div>
      <div className="bg-[#e4e4e4] w-full progress-bar rounded-lg"></div>
      <div
        style={{ width: `${progress}%` }}
        className={`bg-primary z-10 progress-bar rounded-lg ${
          progress === 100 ? "" : "rounded-e-none"
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
