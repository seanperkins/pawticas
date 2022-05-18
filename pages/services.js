import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import Polaroid from '../components/Polaroid'
import serviceArea from '../constants/serviceArea'

export default function Home() {
  return (
    <Layout>
      <h1>Services</h1>
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
          <h2 className="text-plum">Walks</h2>
          <p>Lorem ipsum ...</p>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-6 col-12 center-vertical">
          <h2 className="text-plum">Photo sessions</h2>
          <p>Lorem ipsum ...</p>
        </div>
        <div className="col-md-6 col-12">
          <Polaroid
            src="/images/bella.jpg"
            text="Bella"
            alt="Bella"
            className="tilt-left"
          />
        </div>
      </div>
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
          <h2 className="text-plum">Cat sitting</h2>
          <p>Lorem ipsum ...</p>
        </div>
      </div>
    </Layout>
  )
}
