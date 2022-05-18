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
        className={`col-md-6 col-12 ${position === 'left' ? '' : 'order-2'}`}
      >
        <Polaroid
          src={image}
          text={`${name}, ${breed}, ${age}yrs`}
          className={position === 'left' ? 'tilt-left' : 'tilt-right'}
        />
      </div>
      <div
        className={`center-vertical col-md-6 col-12 ${
          position === 'left' ? '' : 'order-1'
        }`}
      >
        <div>
          <p className="fst-italic h2">{text}</p>
          <span className="h3">-{owner}</span>
        </div>
      </div>
    </div>
  )
}
