import SectionTitle from '../components/SectionTitle'
import TimelineItem from '../components/TimelineItem'
import { experienceData } from '../data/internships'

const Experience = () => {
  return (
    <section>
      <SectionTitle title="Internships" />
      <div className="relative border-l-2 border-accent pl-6 space-y-8">
        {experienceData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Experience
