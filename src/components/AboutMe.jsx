
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 py-12 sm:py-16 md:py-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-6 sm:mb-8 text-center"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
          className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-[0_0_25px_#06b6d4] transition-all duration-500 text-center md:text-left"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-3 sm:mb-4">
            I am{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Neeraj Kumar
            </span>
            , a dedicated{" "}
            <span className="font-semibold text-cyan-400">
              Software Engineer
            </span>{" "}
            with{" "}
            <span className="font-semibold text-blue-400">
              2+ years of experience
            </span>{" "}
            in full-stack development, specializing in{" "}
            <span className="font-semibold text-cyan-400">
              React.js, Node.js, Express.js, MongoDB, and REST APIs
            </span>.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-3 sm:mb-4">
            Experienced in building enterprise applications across{" "}
            <span className="font-semibold text-blue-400">
              Hotel Property Management Systems (PMS)
            </span>
            ,{" "}
            <span className="font-semibold text-teal-400">
              Warehouse Management Systems (WMS)
            </span>
            , and{" "}
            <span className="font-semibold text-cyan-400">
              Autonomous Mobile Robot (AMR) solutions
            </span>
            .
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Skilled in developing{" "}
            <span className="font-semibold text-cyan-400">
              scalable web applications
            </span>
            , backend services,{" "}
            <span className="font-semibold text-blue-400">
              authentication and Role-Based Access Control (RBAC)
            </span>
            , database operations, and delivering{" "}
            <span className="font-semibold text-teal-400">
              end-to-end software solutions
            </span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
