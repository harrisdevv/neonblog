import Image from "next/image";
import { Code, Laptop } from "lucide-react";
import { motion } from "framer-motion";

const ImageAndIcons = () => {
  return (
    <div className="relative animate-float">
      <div className="flex items-start">
        <div className="flex flex-col space-y-2 -mr-20 relative z-20">
          <motion.button
            className="btn btn-sm md:btn-md lg:btn-lg shadow-xl animate-pulse btn-primary btn-circle absolute top-8 md:top-32 md:right-24 right-14 flex items-center transition-transform duration-3000 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <Code />
          </motion.button>
          <motion.button
            className="btn btn-sm md:btn-md lg:btn-lg shadow-xl animate-pulse btn-primary absolute -top-3 md:top-2 lg:top-5 md:right-8 right-4 btn-circle flex items-center transition-transform duration-[5000ms] hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <Laptop />
          </motion.button>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
          >
            <Image
              src="/coporate_shirt_removebg.png"
              alt="Hien The Phan"
              width={500}
              height={500}
              className="rounded-full relative z-10 right-4 md:right-10 p-4 md:p-6"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImageAndIcons;
