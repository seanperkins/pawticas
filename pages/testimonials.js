import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial'
import testimonials from '../constants/testimonials'

export default function TestimonialsPage() {
  return (
    <Layout>
      <h1>Testimonials</h1>
      <p>Our clients love us and so will you.</p>
      {testimonials.map((testimonial, index) => (
        <Testimonial
          position={index % 2 === 0 ? 'left' : 'right'}
          {...testimonial}
        />
      ))}
    </Layout>
  )
}
