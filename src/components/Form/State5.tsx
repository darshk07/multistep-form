import inspi from "../../assets/inspiration.png";

const State5 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center my-12">
      <div className="flex-1 items-center flex justify-center">
        <img className="max-w-80" src={inspi} alt="" />
      </div>
      <div className="flex flex-1 gap-6 flex-col">
        <h2 className="font-bold text-3xl">You're on your way!</h2>
        <p className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          inventore quos vero molestiae minus doloremque eos autem, animi error
          qui provident fugit dolore repellendus velit culpa at recusandae natus
          quaerat!
        </p>
        <p className="mt-4 font-medium">- Jacob S.</p>
      </div>
    </div>
  );
};

export default State5;
