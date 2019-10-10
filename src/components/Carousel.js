import React, { useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './Carousel.module.css';

function Carousel({
  children,
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [dx, setDx] = React.useState(0);
  const [swiping, setSwiping] = React.useState(false);

  const next = useCallback(() => {
    if (activeIdx === children.length - 1) {
      setActiveIdx(0);
    } else {
      setActiveIdx(activeIdx + 1);
    }
  }, [activeIdx, children.length]);

  const prev = useCallback(e => {
    if (activeIdx === 0) {
      setActiveIdx(children.length - 1);
    } else {
      setActiveIdx(activeIdx - 1);
    }
  }, [activeIdx, children.length]);

  const swipeHandlers = useSwipeable({
    // trackMouse: true, // NOTE: not working so well, click events also fire
    onSwipedLeft: next,
    onSwipedRight: prev,
    onSwiping: e => {
      if (!swiping) {
        setSwiping(true);
      }
      if (Math.floor(e.deltaX) !== Math.floor(dx)) {
        setDx(e.deltaX);
      }
    },
    onSwiped: () => {
      setDx(0);
      setSwiping(false);
    },
  });

  return (
    <div className={styles.CarouselContainer}>
      <button
        className={`${styles.absBtn} ${styles.prevBtn}`}
        onClick={prev}
        type="button"
      >
        <span className={styles.prev}>&lang;</span>
      </button>

      <div className={styles.CarouselList} style={{ width: '100%' }}>
        <div className={styles.CarouselTrack}>
          <ul
            className={`${styles.CarouselAnimated} ${swiping ? styles.CarouselSwiping : ''}`}
            style={{
              transform: `translate3d(-${activeIdx * 100}%, 0rem, 0rem) translateX(${swiping ? -dx : 0}px)`,
            }}
            {...swipeHandlers}
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
            >&bull;
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`${styles.absBtn} ${styles.nextBtn}`}
        onClick={next}
        type="button"
      >
        <span className={styles.prev}>&rang;</span>
      </button>
    </div>
  );
}

export default Carousel;
