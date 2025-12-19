'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

type AutoplayConfig = {
  delay: number;
  disableOnInteraction?: boolean;
};

type PaginationConfig = {
  clickable?: boolean;
};

type SwiperProps = {
  children: React.ReactNode;
  loop?: boolean;
  autoplay?: AutoplayConfig;
  navigation?: boolean;
  pagination?: PaginationConfig;
  className?: string;
};

export function Swiper({
  children,
  loop = true,
  autoplay,
  navigation = false,
  pagination,
  className,
}: SwiperProps) {
  const slides = useMemo(() => React.Children.toArray(children), [children]);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (totalSlides === 0) return;
      if (loop) {
        const nextIndex = (index + totalSlides) % totalSlides;
        setActiveIndex(nextIndex);
      } else {
        const nextIndex = Math.min(Math.max(index, 0), totalSlides - 1);
        setActiveIndex(nextIndex);
      }
    },
    [loop, totalSlides],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoplay?.delay || totalSlides <= 1) return undefined;

    autoplayRef.current = setInterval(() => {
      goNext();
    }, autoplay.delay);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay?.delay, goNext, totalSlides]);

  const handleManualNav = useCallback(
    (action: () => void) => {
      if (autoplayRef.current && autoplay?.disableOnInteraction !== false) {
        clearInterval(autoplayRef.current);
      }
      action();
    },
    [autoplay?.disableOnInteraction],
  );

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {navigation && totalSlides > 1 && (
        <>
          <button
            type="button"
            aria-label="Slide anterior"
            className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => handleManualNav(goPrev)}
          />
          <button
            type="button"
            aria-label="Siguiente slide"
            className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => handleManualNav(goNext)}
          />
        </>
      )}

      {pagination && totalSlides > 1 && (
        <div className="swiper-pagination flex gap-2 absolute bottom-6 left-1/2 -translate-x-1/2">
          {slides.map((_, idx) => (
            <button
              key={`bullet-${idx}`}
              type="button"
              className={clsx('swiper-pagination-bullet rounded-full', {
                'swiper-pagination-bullet-active': idx === activeIndex,
              })}
              aria-label={`Ir al slide ${idx + 1}`}
              onClick={() => handleManualNav(() => goTo(idx))}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function SwiperSlide({ children }: { children: React.ReactNode }) {
  return <div className="swiper-slide h-full w-full">{children}</div>;
}
