
const GradientBlur = ({position}) => {
  return (
    <div className={`bg-transparent absolute  flex  justify-center w-3/4 blur-3xl z-10 ${position}-0`}>
      <div className="sphere-1 w-32 h-16 flex bg-cyan-400"></div>
      <div className="sphere-1 w-44 h-20 flex bg-blue-400"></div>
      <div className="sphere-1 w-44 h-20 flex bg-fuchsia-400"></div>
      <div className="sphere-1 w-32 h-16 flex bg-orange-400"></div>
      <div className="sphere-1"></div>
    </div>
  );
}

export default GradientBlur