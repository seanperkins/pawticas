export default function Polaroid({src, text, alt, className}) {
  return (
    <div className="polaroid-wrapper">
      <div className={`polaroid ${className}`}>
        <img className="polaroid-img" src={src} alt={alt} />
        <div className="polaroid-caption">{text}</div>
      </div>
    </div>
  )
}
