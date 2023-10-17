import {motion} from 'framer-motion'

const PotionLoader = () => {
  return (
    <motion.section initial={{x:300}} animate={{x:0}} transition={{duration: 1,type:'tween'}} onTransitionEnd={{display:'none'}} className="scale-50 md:scale-100">
      <div className="shadow "></div>
      <div className="bowl ">
        <div className="liquid "></div>
      </div>
    </motion.section>
  );
}

export default PotionLoader