import Logo from '../../assets/pngegg.png'
import Avatar from '../../assets/WhoAm.png'
import GradientBlur from '../gradientBlur/GradientBlur';

const Loader = () => {
  return (
    <div className='w-full h-screen relative flex  flex-col justify-center items-center  '>
    <GradientBlur position={'top'}/>
      <div className="loader transform animate-pulse"></div>
      <img src={Avatar} alt="brand-logo"  className='absolute w-[150px] h-[150px] md:w-[180px] md:h-[180px] top-[36%] md:top-[calc(34%)] filter:invert(90%)' />
      <img src={Logo} alt="brand-logo"  className='absolute w-[80px]  h-[80px] animate-pulse duration-[3000ms] top-[54%] md:top-[calc(60%)] filter:invert(90%)' />
      <GradientBlur position={'bottom'}/>
    </div>
  );
}

export default Loader