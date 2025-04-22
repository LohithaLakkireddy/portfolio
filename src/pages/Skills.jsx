import SectionTitle from '../components/SectionTitle'
import SkillBadge from '../components/SkillBadge'
import { skillCategories } from '../data/skills'
import { behavioralSkills } from '../data/behavioral'
import BehavioralCircle from '../components/BehavioralCircle'

const Skills = () => {
  return (
    <section>
      <SectionTitle title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Technical Skills - Left */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <SkillBadge key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Behavioral Skills - Right */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-6">Behavioral Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {behavioralSkills.map((skill, index) => (
                <BehavioralCircle key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
