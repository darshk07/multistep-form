import { useState } from "react";

const useForm = () => {
  const [progress, setProgress] = useState(7);
  const [stage, setStage] = useState(1);

  function back() {
    if (progress / 2 < 1) {
      setProgress(1);
    } else {
      setProgress((prev) => prev / 2);
    }
    setStage((prev) => prev - 1);
  }

  function next() {
    if (progress * 2 > 100) {
      setProgress(100);
    } else {
      setProgress((prev) => prev * 2);
    }
    setStage((prev) => prev + 1);
  }

  return { progress, stage, next, back };
};

export default useForm;
