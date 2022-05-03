import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import Polaroid from '../components/Polaroid'
import serviceArea from '../constants/serviceArea'

export default function Home() {
  return (
    <Layout>
      <div className="row py-3">
        <div className="col-md-6 col-12">
          <Polaroid
            src="/images/bella.jpg"
            text="Bella"
            alt="Bella"
            className="tilt-left"
          />
        </div>
        <div className="col-md-6 col-12 center-vertical">
          <h2 className="text-plum">We treat your little one like family</h2>
          <p>Lorem ipsum ...</p>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-6 col-12 center-vertical order-2 order-md-1">
          <h2 className="text-plum">Services</h2>
          <ul className="list-group">
            <li className="list-item">
              <h3>Walks</h3>
              <p>
                Quick walks around the block, longer walks through the
                neighborhood, solo walks, pack walks.
              </p>
            </li>
            <li className="list-item">
              <h3>Photo sessions</h3>
              <p>
                Capture the best side of your pup through a photo shoot. Laura
                has the patience and experience to get the most out of your
                little one.
              </p>
            </li>
            <li className="list-item">
              <h3>Cat Sitting</h3>
              <p>Lorem ipsum ...</p>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-12 order-1 order-md-2">
          <Polaroid
            src="/images/lau_and_dogs.jpg"
            text="Laura and the pups"
            alt="Laura and the pups"
            className="tilt-right"
          />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-6 col-12 mb-3">
          <img
            src="/images/map.png"
            alt="Richmond Map"
            style={{width: '100%', height: 'auto'}}
          />
        </div>
        <div className="col-md-6 col-12 center-vertical">
          <h2 className="text-plum">Service Area</h2>
          <ul>
            {serviceArea.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-12">
          <h2 className="text-plum">Contact</h2>
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
