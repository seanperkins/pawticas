import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import MultiPhotos from '../components/MultiPhotos'
import Polaroid from '../components/Polaroid'
import serviceArea from '../constants/serviceArea'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-center py-3">Services & Prices</h1>
      <div className="row py-3" id="how-i-work">
        <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-12">
          <h2>How I work</h2>
          <p>
            Whether its for cat sitting, photos, or walks, I take the time to
            get to know you and your little fury friend(s). Before we start, we
            can meet in a place your pet is comfortable so that I may learn more
            about how they behave outside and around others. Together we can
            create a plan for how our time together will be spent.
          </p>
        </div>
      </div>
      <div className="row py-3" id="walks">
        <div className="col-md-6 col-12 min-height-500">
          <MultiPhotos
            type="polaroid"
            photos={[
              {
                src: '/images/walking-2.jpg',
                className: 'tilt-left',
                text: (
                  <span className="fst-italic text-muted">
                    Louie, Olive, and Bertie posing after having fun at the park
                  </span>
                ),
              },
              {
                src: '/images/in_the_hall.jpeg',
                className: 'tilt-right',
                text: (
                  <span className="fst-italic text-muted">
                    Chilling in the hall, picking up another friend
                  </span>
                ),
              },
              {
                src: '/images/the_park.jpeg',
                className: 'tilt-left',
                text: (
                  <span className="fst-italic text-muted">
                    At the park, having all the fun
                  </span>
                ),
              },
            ]}
          />
        </div>
        <div className="col-md-6 col-12 center-vertical content-box">
          <h2 className="text-plum">Group & Solo Walks</h2>
          <p>
            I love walks almost as much as your furry friend so I guarantee we
            will have fun together. I can do mid day walks or walks around the
            block for potty breaks. At the end of our walk, I will send you
            pictures and a summary of our how they did.
          </p>
          <ul>
            <li>
              30min group walk / <span className="fw-bold">$20</span>
            </li>
            <li>
              1hr group walk / <span className="fw-bold">$37</span>
            </li>
          </ul>
          <p>
            Not all pups are ready to walk with others so I offer solo walks.
            They might not have all their shots, be too old, or just not
            comfortable around other dogs.
          </p>
          <ul>
            <li>
              30min solo walk / <span className="fw-bold">$30</span>
            </li>
            <li>
              1hr solo walk / <span className="fw-bold">$45</span>
            </li>
          </ul>
          <a href="/contact?subject=walks" className="btn btn-plum btn-lg">
            Schedule an intro
          </a>
        </div>
      </div>
      <div className="row py-3" id="cat-sitting">
        <div className="col-md-6 col-12 order-md-2 min-height-500">
          <MultiPhotos
            type="polaroid"
            className="multi-photos-right"
            photos={[
              {
                src: '/images/tululas-sister.jpeg',
                className: 'tilt-right',
                text: (
                  <span className="fst-italic text-muted">
                    She comes running everytime I come in
                  </span>
                ),
              },
              {
                src: '/images/rafiki.jpeg',
                className: 'tilt-left',
                text: (
                  <span className="fst-italic text-muted">
                    Rafiki is so happy to see Laura
                  </span>
                ),
              },
              {
                src: '/images/tulula2.jpeg',
                className: 'tilt-right',
                text: (
                  <span className="fst-italic text-muted">
                    Tulula really wants those treats
                  </span>
                ),
              },
            ]}
          />
        </div>
        <div className="col-md-6 col-12 center-vertical order-md-1 content-box">
          <h2 className="text-plum">Cat sitting</h2>
          <p>
            While you are away, you can trust that I will take care of your
            little one. During each visit, I can: give food & water, take care
            of the litter box, play, groom, and give treats. If they need
            medications, I can administer them. I am also happy to turn on or
            off lights plus bring in any packages/mail.
          </p>
          <ul>
            <li>
              30 min visit / <span className="fw-bold">$30</span>
            </li>
          </ul>
          <a
            href="/contact?subject=cat-sitting"
            className="btn btn-plum btn-lg"
          >
            Reserve your dates
          </a>
        </div>
      </div>
      <div className="row py-3" id="photo-sessions">
        <div className="col-md-6 col-12 min-height-500">
          <MultiPhotos
            photos={[
              {
                src: '/images/theo3.jpeg',
                className: 'tilt-left',
                text: (
                  <span className="fst-italic text-muted">
                    Jungle or flower bed, you decide
                  </span>
                ),
              },
              {
                src: '/images/theo2.jpeg',
                className: 'tilt-right',
                text: (
                  <span className="fst-italic text-muted">
                    Take a picture of my toy too
                  </span>
                ),
              },
              {
                src: '/images/theo.jpeg',
                className: 'tilt-left',
                text: (
                  <span className="fst-italic text-muted">
                    Theo looking like a prince
                  </span>
                ),
              },
            ]}
          />
        </div>
        <div className="col-md-6 col-12 center-vertical content-box">
          <h2 className="text-plum">Photo sessions</h2>
          <p>
            Let me capture the best side of you and your furry friend. We will
            work together to come up with the type of photos you want.
          </p>
          <ul>
            <li>
              Starting at <span className="fw-bold">$55</span>
            </li>
          </ul>
          <a
            href="/contact?subject=photo-session"
            className="btn btn-plum btn-lg"
          >
            Contact me for a quote
          </a>
        </div>
      </div>
    </Layout>
  )
}
