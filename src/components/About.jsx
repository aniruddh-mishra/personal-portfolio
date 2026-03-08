import profile from '../data/profile.json'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function About() {
  const [photoHighlights, setPhotoHighlights] = useState([])
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)
  const [selectedPhotoSource, setSelectedPhotoSource] = useState('highlights')
  const carouselRef = useRef(null)

  useEffect(() => {
    // Dynamically import all images from src/assets/photography
    const loadPhotos = async () => {
      try {
        const photoModules = import.meta.glob('../assets/photography/*.{jpg,jpeg,png,gif,webp,heic,JPG,JPEG,PNG,GIF,WEBP,HEIC}', { eager: true, query: '?url', import: 'default' })
        const photoUrls = Object.entries(photoModules).map(([path, url]) => {
          const filename = path.split('/').pop()
          return {
            src: url,
            alt: filename.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ')
          }
        })
        setPhotoHighlights(photoUrls)
      } catch (error) {
        console.log('No photos found in src/assets/photography/')
      }
    }
    loadPhotos()
  }, [])

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 376 // card width (360px) + gap (16px)
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const photoSlots = profile.photos?.gallery?.length
    ? profile.photos.gallery
    : [
        { src: '', alt: 'Running photo' },
        { src: '', alt: 'Project/lab photo' },
        { src: '', alt: 'Campus photo' },
        { src: '', alt: 'Coffee/lifestyle photo' }
      ]

  const galleryPhotos = photoSlots.reduce((acc, photo, originalIndex) => {
    if (photo.src) {
      acc.push({ ...photo, originalIndex })
    }
    return acc
  }, [])

  const activePhotos = selectedPhotoSource === 'gallery' ? galleryPhotos : photoHighlights

  const openPhoto = (index, source = 'highlights') => {
    setSelectedPhotoSource(source)
    setSelectedPhotoIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closePhoto = () => {
    setSelectedPhotoIndex(null)
    document.body.style.overflow = ''
  }

  const showNextPhoto = () => {
    if (!activePhotos.length) return
    setSelectedPhotoIndex((prev) => (prev === null ? 0 : (prev + 1) % activePhotos.length))
  }

  const showPreviousPhoto = () => {
    if (!activePhotos.length) return
    setSelectedPhotoIndex((prev) => (prev === null ? 0 : (prev - 1 + activePhotos.length) % activePhotos.length))
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedPhotoIndex !== null) {
        closePhoto()
      }

      if (e.key === 'ArrowRight' && selectedPhotoIndex !== null) {
        showNextPhoto()
      }

      if (e.key === 'ArrowLeft' && selectedPhotoIndex !== null) {
        showPreviousPhoto()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [selectedPhotoIndex, activePhotos.length])

  const selectedPhoto = selectedPhotoIndex !== null ? activePhotos[selectedPhotoIndex] : null

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-label">01 / About</div>
        <h2 className="section-title">Building at the intersection of hardware and software</h2>
        
        {/* First row: Text and Profile Photo */}
        <div className="about-row about-row--center">
          <div className="about-text">
            {profile.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="about-profile-photo">
            {profile.photos?.hero ? (
              <img src={profile.photos.hero} alt={`${profile.name} profile`} />
            ) : (
              <div className="about-photo-placeholder profile-placeholder">
                <span>Profile Photo</span>
              </div>
            )}
          </div>
        </div>

        {/* Second row: Gallery and Education (reversed order) */}
        <div className="about-row about-row--center">
          <div className="about-gallery">
            {photoSlots.map((photo, index) => (
              <figure
                key={index}
                className={`about-photo-slot ${photo.src ? 'about-photo-slot--interactive' : ''}`}
                onClick={() => {
                  if (!photo.src) return
                  const galleryIndex = galleryPhotos.findIndex((item) => item.originalIndex === index)
                  if (galleryIndex >= 0) {
                    openPhoto(galleryIndex, 'gallery')
                  }
                }}
              >
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt || `Photo ${index + 1}`} />
                ) : (
                  <div className="about-photo-placeholder">
                    <span>{photo.alt || `Photo ${index + 1}`}</span>
                  </div>
                )}
              </figure>
            ))}
          </div>
          <div className="about-education about-education--centered">
            <div className="about-education-content">
              <h3>Education</h3>
              {profile.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="edu-school">{edu.school}</p>
                  <p className="edu-date">{edu.date}{edu.gpa && ` · GPA: ${edu.gpa}`}</p>
                </div>
              ))}
              <div className="education-item">
                <h4>Honors & Awards</h4>
                <ul className="honors-list">
                  {profile.honors.map((honor, index) => (
                    <li key={index}>{honor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third row: Photography highlights */}
        {photoHighlights.length > 0 && (
          <div className="photo-carousel-section">
            <div className="photo-carousel-intro">
              <h3>Photo Highlights</h3>
              <p>A few snapshots from where I've been recently.</p>
            </div>

            <div className="photo-carousel-wrapper">
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              ←
            </button>
            <div className="about-photography" ref={carouselRef}>
              {photoHighlights.map((photo, index) => (
                <div 
                  key={index} 
                  className="about-photo-highlight"
                  onClick={() => openPhoto(index)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="photo-highlight-image"
                  />
                </div>
              ))}
            </div>
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              →
            </button>
            </div>
          </div>
        )}
      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && createPortal(
        <div className="photo-lightbox-overlay" onClick={closePhoto}>
          <button className="lightbox-close" onClick={closePhoto} aria-label="Close">
            ✕
          </button>
          {activePhotos.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-nav-prev"
                onClick={(e) => {
                  e.stopPropagation()
                  showPreviousPhoto()
                }}
                aria-label="Previous photo"
              >
                ←
              </button>
              <button
                className="lightbox-nav lightbox-nav-next"
                onClick={(e) => {
                  e.stopPropagation()
                  showNextPhoto()
                }}
                aria-label="Next photo"
              >
                →
              </button>
            </>
          )}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt}
              className="lightbox-image"
            />
            {activePhotos.length > 1 && (
              <div className="lightbox-counter">
                {selectedPhotoIndex + 1} / {activePhotos.length}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default About
