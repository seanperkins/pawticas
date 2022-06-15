import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial'
import testimonials from '../constants/testimonials'

export default function TestimonialsPage() {
  return (
    <Layout>
      <div className="row py-3">
        <div className="col-md-6 offset-md-3 col-12">
          <h1 className="text-center">Testimonials</h1>
          <p>
            Our clients love us. So will you and your pet. Here are some nice
            things folks have said about us.
          </p>
        </div>
      </div>
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={testimonial.name}
          position={index % 2 === 0 ? 'left' : 'right'}
          {...testimonial}
        />
      ))}
    </Layout>
  )
}
