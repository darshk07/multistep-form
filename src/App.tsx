import { useEffect, useState } from "react";
import "./App.css";
import State1 from "./components/Form/State1";
import State2 from "./components/Form/State2";
import State3 from "./components/Form/State3";
import State4 from "./components/Form/State4";
import State5 from "./components/Form/State5";
import ProgressBar from "./components/ProgressBar";
import useForm from "./hooks/useForm";
import { Data } from "./types";
import State6 from "./components/Form/State6";
import State7 from "./components/Form/State7";
import { Helmet } from "react-helmet";
import { description, interest, mathLevel } from "./constants/formConstants";

function App() {
  const { stage, next, progress, back } = useForm();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [data, setData] = useState<Data>({
    description: null,
    interest: null,
    mathLevel: null,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (isFormComplete) {
      const result = {
        description: description.find((item) => item.id === data.description),
        interest: interest.find((item) => item.id === data.interest),
        mathLevel: mathLevel.find((item) => item.id === data.mathLevel),
      };
      console.log(result);
    }
  }, [isFormComplete, data]);

  return (
    <div className="flex items-center relative justify-center min-h-[100dvh] flex-col p-8 lg:p-12 gap-8">
      <Helmet
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689642.jpg?t=st=1712663435~exp=1712667035~hmac=f77bcb68d8ead4e041b186c3ed58f5ff1d68048a67efe2bd5d1446cf1c6c6aa6&w=740",
          },
        ]}
      >
        <title>Brilliant | Onboard</title>
      </Helmet>
      {!isFormComplete ? (
        <>
          <ProgressBar progress={progress} back={back} stage={stage} />
          <div className="w-full lg:px-36">
            {stage == 1 && <State1 data={data} setData={setData} />}
            {stage == 2 && <State2 data={data} setData={setData} />}
            {stage == 3 && <State3 />}
            {stage == 4 && <State4 data={data} setData={setData} />}
            {stage == 5 && <State5 />}
            {stage == 6 && (
              <State6
                callback={() => {
                  next();
                  setIsFormComplete(true);
                }}
              />
            )}
          </div>
          <button
            disabled={
              (stage === 1 && !data.description) ||
              (stage === 2 && !data.interest) ||
              (stage === 4 && !data.mathLevel)
            }
            className="text-white bg-black disabled:bg-dark-60 rounded-md px-8 py-2"
            onClick={() => {
              next();
            }}
          >
            Continue
          </button>
        </>
      ) : null}
      {isFormComplete ? <State7 /> : null}
    </div>
  );
}

export default App;
