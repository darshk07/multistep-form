const State3 = () => {
  const imgURL =
    "https://img.freepik.com/free-vector/science-experiment-force-motion-with-pulley_1308-77030.jpg?w=740&t=st=1712571940~exp=1712572540~hmac=d841d427a58332043fb37cf3c8bad6436d3880afdb416535fd73afa2c48ee64b";

  return (
    <div className="flex flex-col lg:flex-row items-center my-12">
      <div className="flex-1 items-center flex justify-center">
        <img className="max-w-60 lg:max-w-80" src={imgURL} alt="" />
      </div>
      <div className="flex flex-1 gap-6 flex-col">
        <h2 className="font-bold text-3xl">You're in the right place</h2>
        <p className="font-medium">
          Brilliant gets you hands-on to help improve your professional skills
          and knowledge. You'll interact with concepts and solve fun problems in
          math, science, and computer science.
        </p>
      </div>
    </div>
  );
};

export default State3;
