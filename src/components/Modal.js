import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({selectedImage, setSelectedImage}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null)
        }
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }} 
            transition={{ delay: .25 }}>
            <img src={selectedImage} alt={selectedImage}/>
        </motion.div>
    )
}

export default Modal;
