import Photo from './Photo'
import Polaroid from './Polaroid'

export default function MultiPhoto({className, photos, type}) {
  let PhotoComponent = type === 'photo' ? Photo : Polaroid
  const mainPhoto = photos[photos.length - 1]
  return (
    <>
      <PhotoComponent
        src={mainPhoto.src}
        text={mainPhoto.text}
        alt={mainPhoto.alt}
        wrapperClassName={' d-md-none'}
        className={mainPhoto.className}
        style={mainPhoto.style}
      />

      <div
        className={`multi-photos d-md-flex d-none ${
          className ? className : ''
        }`}
      >
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
    </>
  )
}
