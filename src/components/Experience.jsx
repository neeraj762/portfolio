import { motion } from "framer-motion"

const experienceData = [
  {
    role: "Packaged App Development Associate",
    place: "Accenture Solutions Pvt Ltd - Gurugram",
    time: "Nov 2024 – Present",
    points: [
      "Developed a Hotel Property Management System (PMS) using React.js, Redux, Node.js, Express.js, MongoDB, and REST APIs to support end-to-end hotel operations.",
      " Built key modules including reservation, check-in/check-out, payment, room management, housekeeping, maintenance, and reporting, with dynamic guest lifecycle workflows for Booked, In-House, and Departure statuses.",
      "Implemented authentication, authorization, Role-Based Access Control (RBAC), and user management with role-based permissions, along with Night Audit and room-status workflows for business-date transitions and housekeeping operations.",
      "Developed reusable React/Redux components and Node.js/Express REST APIs with MongoDB operations. Used Git, GitHub, and CI/CD for collaborative development, debugging, and deployments."
    ]
  },
  {
    role: "Software Engineer",
    place: "Anzo Controls Pvt Ltd - Gurugram",
    time: "Jan 2024 – Nov 2024",
    points: [
      "Developed Autonomous Mobile Robot (AMR) applications using React.js, Node.js, Express.js, and MongoDB, including responsive control interfaces.",
      "Built RESTful APIs using Node.js and Express.js and developed frontend functionality for a Warehouse Management System (WMS).",
      "Contributed to WMS backend development and MS SQL database operations while participating in the Software Development Life Cycle (SDLC), from requirements gathering to deployment."
    ]
  }
  
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 py-12 sm:py-16 md:py-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-10 sm:mb-12 text-center"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-yellow-400/40 max-w-3xl w-full mx-auto">
        {experienceData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="mb-8 sm:mb-10 ml-6 sm:ml-8 relative"
          >
            {/* Circle */}
            <span className="absolute -left-8 sm:-left-11 top-2 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full ring-2 sm:ring-3 md:ring-4 ring-yellow-400/30"></span>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-400">
                {item.role}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                {item.place} • {item.time}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {item.points.map((point, j) => (
                  <li
                    key={j}
                    className="marker:text-yellow-400 text-xs sm:text-sm md:text-base"
                  >{point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
