export default function Polaroid({
  src,
  text,
  alt,
  className,
  style,
  wrapperClassName,
}) {
  return (
    <div
      className={`polaroid-wrapper ${wrapperClassName ? wrapperClassName : ''}`}
      style={style ? style : {}}
    >
      <div className={`polaroid ${className}`}>
        <img className="polaroid-img" src={src} alt={alt} />
        <div className="polaroid-caption">{text}</div>
      </div>
    </div>
  )
}
