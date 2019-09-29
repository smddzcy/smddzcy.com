import React from 'react';
import styles from './Carousel.module.css';

function Carousel({
  children,
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);

  const next = () => {
    if (activeIdx === children.length - 1) {
      setActiveIdx(0)
    } else {
      setActiveIdx(activeIdx + 1)
    }
  }

  const prev = () => {
    if (activeIdx === 0) {
      setActiveIdx(children.length - 1)
    } else {
      setActiveIdx(activeIdx - 1)
    } 
  }

  return (
    <div className={styles.CarouselContainer}>
      <button
        className={styles.absBtn + " " + styles.prevBtn}
        onClick={prev}
      >
        <label className={styles.prev}>&lang;</label>
      </button>

      <div className={styles.CarouselList} style={{ width: '100%' }}>
        <div className={styles.CarouselTrack}>
          <ul
            className={styles.CarouselAnimated}
            style={{
              transform:`translate3d(-${activeIdx * 100}%, 0rem, 0rem)`,
            }}
          >
            {children.map((child, idx) => (
              <li
                key={idx}
                className={styles.CarouselSlide}
              >
                {child}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.CarouselDotWrapper}>
        <ul className={styles.CarouselDotContainer}>
          {children.map((el, idx) => (
            <li
              key={idx}
              className={styles.CarouselDot}
              onClick={() => setActiveIdx(idx)}
              style={{
                color: `rgba(102, 125, 255, ${activeIdx === idx ? 1 : 0.25})`,
              }}
            >&bull;</li>
          ))}
        </ul>
      </div>
      <button
        className={styles.absBtn + " " + styles.nextBtn}
        onClick={next}
      >
        <label className={styles.prev}>&rang;</label>
      </button>
    </div>
  )
}

export default Carousel;