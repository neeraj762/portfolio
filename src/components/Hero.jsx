
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-28 md:pt-32"
    >
      {/* Text Section */}
      <div className="w-full flex flex-col items-center text-center space-y-4">

        {/* Welcome Line */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 leading-tight"
        >
          <TypeAnimation
            sequence={["Welcome to my portfolio", 1000]}
            speed={50}
            cursor={false}
            repeat={0}
          />
        </motion.h2>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-500 leading-tight"
        >
          <TypeAnimation
            sequence={["I am Neeraj Kumar", 1500]}
            speed={60}
            cursor={false}
            repeat={0}
          />
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl text-gray-300 text-sm sm:text-base md:text-lg leading-snug"
        >
          <TypeAnimation
            sequence={[
              "a dedicated Software Engineer with 2+ years of experience in full-stack development, specializing in React.js, Node.js, Express.js, MongoDB, and REST APIs.",
              2000,
            ]}
            speed={40}
            cursor={false}
            repeat={0}
          />
        </motion.p>
      </div>
    </section>
  )
}
