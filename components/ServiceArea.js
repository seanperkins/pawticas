import serviceArea from '../constants/serviceArea'

export default function ServiceArea() {
  return (
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
  )
}
