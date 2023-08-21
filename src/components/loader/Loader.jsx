import Logo from '../../assets/pngegg.png'
import Avatar from '../../assets/WhoAm.png'
import GradientBlur from '../gradientBlur/GradientBlur';

const Loader = () => {
  return (
    <div className='w-full h-screen relative flex  flex-col justify-center items-center  '>
    <GradientBlur position={'top'}/>
      <div className="loader transform animate-pulse"></div>
      <img src={Avatar} alt="brand-logo" width={180} height={180} className='absolute  top-[calc(34%)] filter:invert(90%)' />
      <img src={Logo} alt="brand-logo" width={120} height={120} className='absolute  animate-pulse duration-[3000ms] top-[calc(54%)] filter:invert(90%)' />
      <GradientBlur position={'bottom'}/>
    </div>
  );
}

export default Loader