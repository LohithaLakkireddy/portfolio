import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Section - Text */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <h2 className="text-accent text-lg mb-2">Hi, I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Lohitha Lakkireddy
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-300 mb-6">
          <span className="typewriter-text">Software Enthusiast</span>
        </h3>
        <p className="text-gray-400 mb-6">
          I'm a B.Tech graduate from NIT Surat, passionate about building scalable applications and solving real-world problems using modern tech stacks.
        </p>
        <div className="flex items-center gap-4 mt-6">
        <a
          href="https://github.com/LohithaLakkireddy"
          target="_blank"
          className="social-icon"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/lohitha-lakkireddy/"
          target="_blank"
          className="social-icon"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/Lohitha_lr/"
          target="_blank"
          className="social-icon"
          title="LeetCode"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.instagram.com/lohitha.lakkireddy/"
          target="_blank"
          className="social-icon"
          title="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      </motion.div>

      {/* Right Section - Avatar */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-64 h-64 md:w-80 md:h-80 object-contain animate-float"
        />
      </motion.div>
    </section>
  )
}

export default Home
