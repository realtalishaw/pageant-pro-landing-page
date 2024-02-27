import React from 'react';
import { motion } from 'framer-motion';
import GetAccess from '../../Components/GetAccess';

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

function HeroBlock() {
  return (
    <section className=" flex flex-col justify-center items-center py-12">
         <motion.h1 initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 1.4 }} className="text-7xl   max-w-4xl text-center font-bold mb-6">
        Empower Your Pageant Journey with <span className="text-pink-400 ">Pageant Pro</span>
      </motion.h1>
      <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 1.2 }} className="text-xl max-w-lg mb-8 text-center">
        We provide you with all the tools you need to excel in your pageant performance.
      </motion.p>
  
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 1.4 }} >
        <GetAccess />
      </motion.div>
    </section>
  );
}

export default HeroBlock;