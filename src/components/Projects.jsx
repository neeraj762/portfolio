
import { motion } from "framer-motion"

const projects = [
  {
    title: "Hotel Property Management System",
    description:
      "Developed a hotel management application to handle reservations, check-in/check-out, payments, room management, housekeeping, maintenance, and reporting with role-based access control.",
    image: "/images/HotelPMS.png",
    skills: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/neeraj762/hotelpms",
  },
  {
    title: "Social Media Application",
    description:
      "Built a social media platform featuring user authentication, profile management, posts, image uploads, likes, comments, follow/unfollow functionality, and dark/light mode.",
    image: "/images/SocialMedia.png",
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "React Query"],
    github: "https://github.com/neeraj762/social-media",
  },
  {
    title: "Wanderlust",
    description:
      "Developed a travel listing web application where users can explore destinations, create listings, manage properties, and share reviews with authentication and CRUD functionality.",
    image: "/images/wanderlust.png",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/neeraj762/wanderlust",
  },
  {
    title: "E-Commerce Application",
    description:
      "Created an e-commerce frontend with product browsing, shopping cart functionality, dynamic cart management, and reusable React components.",
    image: "/images/ecommerce.png",
    skills: ["React.js", "JavaScript", "Context API", "CSS"],
    github: "https://github.com/neeraj762/e-commerce",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 py-12 sm:py-16"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-10 sm:mb-12 text-center"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
          >
            {/* Project Image */}
            <div className="overflow-hidden h-48 sm:h-56 bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-5 sm:p-6 flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-300 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium text-cyan-200 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors mt-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.47.12-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.59.24 2.76.12 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
