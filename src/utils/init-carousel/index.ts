import EmblaCarousel, { type EmblaOptionsType } from 'embla-carousel';
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons';
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton';

const OPTIONS: EmblaOptionsType = { loop: true };

export const initCarousel = (
  emblaNode: HTMLElement,
  prevButtonNode: HTMLElement,
  nextButtonNode: HTMLElement,
  dotsNode: HTMLElement,
) => {
  const emblaApi = EmblaCarousel(emblaNode, OPTIONS);

  const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevButtonNode,
    nextButtonNode,
  );
  const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
    emblaApi,
    dotsNode,
  );

  emblaApi.on('destroy', removePrevNextBtnsClickHandlers);
  emblaApi.on('destroy', removeDotBtnsAndClickHandlers);
};
