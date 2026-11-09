
import { motion } from "framer-motion"

const skills = [
  // Frontend
  { name: "HTML5", level: 90, gradient: "from-orange-400 to-orange-600" },
  { name: "CSS3", level: 85, gradient: "from-blue-400 to-blue-600" },
  { name: "JavaScript (ES6+)", level: 85, gradient: "from-yellow-400 to-yellow-600" },
  { name: "Tailwind CSS", level: 80, gradient: "from-cyan-400 to-blue-500" },
  { name: "React.js", level: 85, gradient: "from-cyan-400 to-blue-500" },
  { name: "Redux Toolkit", level: 80, gradient: "from-purple-400 to-purple-600" },
  { name: "DOM Manipulation", level: 80, gradient: "from-yellow-400 to-orange-500" },

  // Backend
  { name: "Node.js", level: 80, gradient: "from-green-400 to-green-600" },
  { name: "Express.js", level: 80, gradient: "from-gray-400 to-gray-600" },
  { name: "REST APIs", level: 85, gradient: "from-indigo-400 to-blue-600" },
  { name: "Microservices", level: 65, gradient: "from-teal-400 to-cyan-600" },
  { name: "Third-Party API Integration", level: 75, gradient: "from-pink-400 to-purple-500" },

  // Databases
  { name: "MongoDB", level: 75, gradient: "from-green-400 to-emerald-600" },
  { name: "MySQL", level: 75, gradient: "from-blue-400 to-indigo-600" },

  // Tools & DevOps
  { name: "Git", level: 85, gradient: "from-orange-400 to-red-500" },
  { name: "GitHub", level: 85, gradient: "from-gray-400 to-gray-700" },
  { name: "Postman", level: 85, gradient: "from-orange-400 to-orange-600" },
  { name: "Docker", level: 60, gradient: "from-blue-400 to-cyan-600" },
  { name: "CI/CD", level: 60, gradient: "from-purple-400 to-indigo-600" },
  { name: "Generative AI", level: 65, gradient: "from-pink-400 to-purple-600" },

  // Core Concepts
  { name: "Data Structures & Algorithms", level: 80, gradient: "from-red-400 to-pink-600" },
  { name: "Object-Oriented Programming", level: 80, gradient: "from-violet-400 to-purple-600" },
  { name: "Operating Systems", level: 75, gradient: "from-teal-400 to-green-600" },
]

export default function SkillsBars() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-teal-400 mb-8 sm:mb-12 text-center"
      >
        Skills
      </motion.h2>

      <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto w-full">
        {skills.map((skill, i) => (
          <div key={i} className="group">
            {/* Skill Name */}
            <div className="mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
              <span className="text-gray-300 group-hover:text-white transition">
                {skill.name}
              </span>
            </div>

            {/* Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 md:h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                className={`h-2 sm:h-3 md:h-4 rounded-full bg-gradient-to-r ${skill.gradient} shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
