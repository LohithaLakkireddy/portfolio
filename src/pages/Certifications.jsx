import SectionTitle from '../components/SectionTitle'
import CertificationCard from '../components/CertificationCard'
import { certifications } from '../data/certifications'

const Certifications = () => {
  return (
    <section>
      <SectionTitle title="Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  )
}

export default Certifications
