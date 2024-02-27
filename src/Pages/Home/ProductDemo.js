import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './ProductDemo.module.css';

function ProductDemo() {
    const controls = useAnimation();
    const [isInView, setIsInView] = useState(false);

    const fadeInVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        const handleScroll = () => {
            const imageElement = document.querySelector('.tilted-image');

            if (imageElement) {
                let imagePosition = imageElement.getBoundingClientRect();
                if (imagePosition.top <= window.innerHeight / 2 && imagePosition.bottom >= window.innerHeight / 2) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start({
                rotateX: 0,
                transition: { duration: 1.2, ease: "easeInOut" } // Smooth transition
            });
        } else {
            controls.start({
                rotateX: 20,
                transition: { duration: 1.2, ease: "easeInOut" } // Smooth transition
            });
        }
    }, [isInView, controls]);
    

    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 0.8 }}
            className={`relative flex items-end justify-center ${styles.hHalfscreen}`}
        >
            <motion.div 
    animate={controls}
    className="flex justify-center box-1 tilted-image"
>
    <img src="/images/productDemo.png" alt="Demo" className="px-8 rounded-lg border shadow-lg" />
</motion.div>

        </motion.section>
    );
}

export default ProductDemo;