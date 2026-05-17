import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

import { performanceImages, performanceImgPositions } from '../constants';

const Performance = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      const centerImageEl = sectionEl?.querySelector('.p5');

      if (!sectionEl) return;

      gsap.fromTo(
        '.content p',
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.content p',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      if (isTablet) return;

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'power1.inOut', overwrite: 'auto' },
        scrollTrigger: {
          trigger: centerImageEl ?? sectionEl,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const outerTargets: Record<string, { left?: string; right?: string; bottom?: string }> = {
        p1: { left: '0%', bottom: '72%' },
        p2: { right: '2%', bottom: '69%' },
        p3: { right: '-10%', bottom: '50%' },
        p4: { right: '-15%', bottom: '7%' },
        p6: { left: '4%', bottom: '38%' },
        p7: { left: '-8%', bottom: '5%' },
      };

      performanceImgPositions.forEach((item) => {
        if (item.id === 'p5') return;

        const selector = `.${item.id}`;
        tl.to(selector, outerTargets[item.id] ?? {}, 0);
      });
    },
    { scope: sectionRef, dependencies: [isTablet] },
  );

  return (
    <section ref={sectionRef} id="performance">
      <h2>Next-level graphics performance, Game on</h2>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={item.id}
            className={item.id}
            src={item.src}
            alt={`Performance Image #${index + 1}`}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of
          chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images
          faster, so <span className="text-white">gaming feels more immersive and realistic than ever.</span>
          <br />
          <br />
          And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a
          huge performance boost for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
