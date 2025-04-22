import SectionTitle from '../components/SectionTitle'
import TimelineItem from '../components/TimelineItem'
import { educationData } from '../data/education'

const Education = () => {
  return (
    <section>
      <SectionTitle title="Education" />
      <div className="relative border-l-2 border-accent pl-6 space-y-8">
        {educationData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Education
