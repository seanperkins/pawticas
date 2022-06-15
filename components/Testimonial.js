import Polaroid from './Polaroid'

export default function Testimonial({
  owner,
  name,
  age,
  text,
  breed,
  image,
  position,
}) {
  return (
    <div className="row testimonial">
      <div
        className={`col-md-6 col-12 ${
          position === 'left' ? 'order-md-1 order-0' : 'order-md-0 order-0'
        }`}
      >
        <Polaroid
          src={image}
          text={
            <span>
              <span className="fw-bold">{name}</span>,{' '}
              <span className="fw-light text-muted">{breed}</span>,{' '}
              <span className="fw-light text-muted">{age}yrs</span>
            </span>
          }
          className={position === 'left' ? 'tilt-left' : 'tilt-right'}
        />
      </div>
      <div
        className={`center-vertical col-md-6 col-12 ${
          position === 'left' ? 'order-md-0 order-1' : 'order-md-1 order-0'
        }`}
      >
        <div>
          <p className="fst-italic fs-4">"{text}"</p>
          <span className="h5 ms-3 mt-3">-{owner}</span>
        </div>
      </div>
    </div>
  )
}
