import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial'
import testimonials from '../constants/testimonials'

export default function TestimonialsPage() {
  return (
    <Layout className="container py-5">
      <div className="row justify-content-center pb-3">
        <div className="col-md-6 col-12">
          <h1 className="text-center mb-3">Testimonials</h1>
          <p className="text-center">
            Our clients love us. So will you and your pet. <br />
            Here are some nice things folks have said about us.
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
