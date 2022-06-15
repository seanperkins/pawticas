export default function Photo({
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
      <div className={`photo ${className}`}>
        <img className="photo-img" src={src} alt={alt} />
        <div className="photo-caption">{text}</div>
      </div>
    </div>
  )
}
