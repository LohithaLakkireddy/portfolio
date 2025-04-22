import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section>
      <SectionTitle title="About Me" />
      <motion.div
        className="text-gray-300 leading-7 space-y-4 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          I'm an enthusiastic and detail-oriented B.Tech graduate from <strong>NIT Surat</strong> with a CGPA of 8.29 in Electronics and Communication Engineering.
        </p>
        <p>
          With a strong foundation in <strong>software development, data analytics, React and Java backend technologies</strong>, I enjoy building scalable web apps and solving real-world problems through technology.
        </p>
        <p>
          I’m constantly learning and adapting, and have experience working in <strong>Agile teams</strong>, collaborating on both research and industry-level projects.
        </p>
        <p>
          I've completed internships at <strong>Infosys Springboard</strong> and <strong>SV-NIT</strong>, and actively contributed to the <strong>IEEE Student Committee</strong> as a coordinator.
        </p>
      </motion.div>
    </section>
  )
}

export default About
