import Photo from './Photo'
import Polaroid from './Polaroid'

export default function MultiPhoto({className, photos, type}) {
  let PhotoComponent = type === 'polaroid' ? Polaroid : Photo
  return (
    <div className={`multi-photos ${className ? className : ''}`}>
      {photos.map((photo, index) => (
        <PhotoComponent
          key={index}
          src={photo.src}
          text={photo.text}
          alt={photo.alt}
          wrapperClassName={'multi-photo'}
          className={photo.className}
          style={photo.style}
        />
      ))}
    </div>
  )
}
