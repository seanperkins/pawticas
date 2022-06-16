import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import Polaroid from '../components/Polaroid'
import serviceArea from '../constants/serviceArea'

export default function Home() {
  return (
    <Layout>
      <section className="hero text-white">
        <div className="container-fluid">
          <div className="row py-3">
            <div className="col-md-6 col-12">
              <Polaroid
                src="/images/bella.jpg"
                text="Our mascot Bella, living her best life"
                alt="Bella living her best life"
                className="tilt-left"
              />
            </div>
            <div className="col-md-6 col-12 center-vertical order-md-1">
              <h2 className="display-4">Your little friend is in good hands</h2>
              <p className="fs-4 lh-5 mt-4">
                We are great at taking care of your furry friends for the same
                reason you are, we treat them like family.
              </p>
              <Link href="/contact">
                <a className="btn btn-lg btn-primary align-self-start mt-3">
                  Schedule time with us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row py-3 text-center">
          <h2 className="text-plum">Services</h2>
          <div className="col-12 col-lg-4 text-center">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-12">
                <Polaroid
                  src="/images/in_the_hall.jpeg"
                  text="Posing before we go to the park"
                  alt="Picking up more friends"
                  className="tilt-left"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-12 center-vertical">
                <h3 className="text-start">Group & Solo Walks</h3>
                <p className="text-start">
                  They get a fun walk around the block, playtime at the park, or
                  a quick bathroom break. You get peace of mind and great
                  photos.
                </p>
                <Link href="/services-and-prices#walks">
                  <a className="btn btn-outline-primary">See walk prices</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-12 order-md-1 order-lg-0">
                <Polaroid
                  src="/images/tululas-sister.jpeg"
                  text="Purrseus coming for more love"
                  alt="Purrseus the cat coming for more love"
                  className="tilt-left"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-12 center-vertical order-md-0 order-lg-0">
                <h3 className="text-start">Cat Sitting</h3>
                <p className="text-start">
                  Its hard to be away from the ones we love. Let us take care of
                  them so you can enjoy your travel.
                </p>
                <p className="text-start">
                  Litter box maintenance, feeding, playtime, and cuddles
                  included.
                </p>
                <Link href="/services-and-prices#cat-sitting">
                  <a className="btn btn-outline-primary">See sitting prices</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-12">
                <Polaroid
                  src="/images/louie.jpeg"
                  text="How long do I need to look cute for a treat?"
                  alt="Dog looking ridiculously cute"
                  className="tilt-left"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-12 center-vertical">
                <h3 className="text-start">Photo sessions</h3>
                <p className="text-start">
                  Capture the best side of your pup through a photo shoot. Laura
                  has the patience and experience to get the most out of your
                  little one.
                </p>
                <Link href="/services-and-prices#photo-sessions">
                  <a className="btn btn-outline-primary">
                    Sessions starting at $50
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
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
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
