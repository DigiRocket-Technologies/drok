// // BackgroundAnimation.tsx

import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-100">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </div>
  );
};

export default BackgroundAnimation;
// BackgroundAnimation.tsx

// import { motion } from "framer-motion";

// const BackgroundAnimation = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-gray-100">
//       <motion.div
//         className="absolute inset-0 bg-gradient-animation"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//       />
//     </div>
//   );
// };

// export default BackgroundAnimation;
