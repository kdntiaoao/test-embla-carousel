import EmblaCarousel from 'embla-carousel';

type Params = {
  emblaNode: HTMLElement;
  prevButtonNode: HTMLElement;
  nextButtonNode: HTMLElement;
};

export const initCarousel = ({
  emblaNode,
  prevButtonNode,
  nextButtonNode,
}: Params) => {
  const options = { loop: true };
  const emblaApi = EmblaCarousel(emblaNode, options);
  const slidePrev = () => emblaApi.scrollPrev();
  const slideNext = () => emblaApi.scrollNext();
  prevButtonNode.addEventListener('click', slidePrev, false);
  nextButtonNode.addEventListener('click', slideNext, false);
  console.log(emblaApi.slideNodes());
};
