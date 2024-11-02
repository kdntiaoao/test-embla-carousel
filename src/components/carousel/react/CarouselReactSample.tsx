import type { EmblaOptionsType } from 'embla-carousel';
import { useDotButton } from './EmblaCarouselDotButton';
import { usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './CarouselReactSample.module.css';
import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';

const OPTIONS: EmblaOptionsType = { loop: true };
const PLUGINS = [Autoplay({ delay: 3000 })];
const SLIDES = [
  { image: 'https://picsum.photos/id/237/400/300', text: 'Slide 1', href: '/' },
  { image: 'https://picsum.photos/id/238/400/300', text: 'Slide 2' },
  { image: 'https://picsum.photos/id/239/400/300', text: 'Slide 3', href: '/' },
  { image: 'https://picsum.photos/id/237/400/300', text: 'Slide 4' },
  { image: 'https://picsum.photos/id/238/400/300', text: 'Slide 5', href: '/' },
  { image: 'https://picsum.photos/id/239/400/300', text: 'Slide 6' },
  { image: 'https://picsum.photos/id/237/400/300', text: 'Slide 7', href: '/' },
  { image: 'https://picsum.photos/id/238/400/300', text: 'Slide 8' },
  { image: 'https://picsum.photos/id/239/400/300', text: 'Slide 9', href: '/' },
];

const CarouselReactSample = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, PLUGINS);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={styles.embla}>
      <div ref={emblaRef}>
        <div className={styles.container}>
          {SLIDES.map((slide, index) =>
            slide.href ? (
              <a
                key={index}
                href={slide.href}
                target="_blank"
                className={styles.slide}
              >
                <div className={styles.slideImageWrapper}>
                  <img
                    src={slide.image}
                    alt=""
                    width="400"
                    height="300"
                    className={styles.slideImage}
                  />
                </div>
                <p className={styles.slideText}>{slide.text}</p>
              </a>
            ) : (
              <div key={index} className={styles.slide}>
                <div className={styles.slideImageWrapper}>
                  <img
                    src={slide.image}
                    alt=""
                    width="400"
                    height="300"
                    className={styles.slideImage}
                  />
                </div>
                <p className={styles.slideText}>{slide.text}</p>
              </div>
            ),
          )}
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className={styles.button}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className={styles.button}
        >
          Next
        </button>
      </div>

      <div className={styles.dots}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            className={clsx(
              styles.dot,
              index === selectedIndex && styles.selected,
            )}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselReactSample;
