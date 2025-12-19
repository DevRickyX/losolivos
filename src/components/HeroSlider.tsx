'use client';

import { useCallback, useEffect } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { Button } from './ui/button';

const heroSlides = [
  {
    title: 'Acompañamiento con dignidad y respeto',
    subtitle: 'Cobertura integral en Córdoba y Sucre',
    description:
      'Resolvemos cada detalle para que tu familia pueda despedirse con tranquilidad y calidez humana.',
    primaryLabel: 'Hablar con un asesor',
    primaryHref: 'tel:+571234567890',
    secondaryLabel: 'Planes de previsión',
    secondaryHref: '/prevision-exequial',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Ceremonias personalizadas que honran la vida',
    subtitle: 'Homenajes significativos',
    description:
      'Diseñamos experiencias memorables con música, flores y símbolos que reflejan la esencia de tus seres queridos.',
    primaryLabel: 'Explorar homenajes',
    primaryHref: '/homenajes',
    secondaryLabel: 'Ver nuestras salas',
    secondaryHref: '/parque-cementerio',
    image:
      'https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Tranquilidad anticipada para tu familia',
    subtitle: 'Previsión exequial flexible',
    description:
      'Planes ajustados a tu presupuesto con atención 24/7 y acompañamiento jurídico y emocional.',
    primaryLabel: 'Cotizar ahora',
    primaryHref: '/prevision-exequial',
    secondaryLabel: 'Contacto 24/7',
    secondaryHref: 'tel:+571234567890',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi?.scrollNext();
    }, 6500);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className="relative min-w-full"
              aria-label={`Diapositiva ${index + 1}: ${slide.title}`}
            >
              <div
                className="relative h-[70vh] w-full min-h-[520px]"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(15, 41, 34, 0.75), rgba(27, 77, 62, 0.75)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-funeral-green/70 via-funeral-green/60 to-funeral-green-dark/80" />
                <div className="relative z-10 flex h-full items-center">
                  <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-10 text-white">
                    <div className="inline-flex max-w-max items-center gap-2 rounded-full bg-funeral-yellow/90 px-4 py-2 text-sm font-semibold text-funeral-green">
                      <Phone className="h-4 w-4" />
                      <span>Atención inmediata 24/7</span>
                    </div>
                    <div className="space-y-4 max-w-3xl">
                      <p className="text-sm uppercase tracking-[0.2em] text-funeral-yellow/90">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-funeral-cream/90 max-w-2xl">
                        {slide.description}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        size="lg"
                        className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light text-base md:text-lg"
                      >
                        {slide.primaryHref.startsWith('tel:') ? (
                          <a href={slide.primaryHref}>{slide.primaryLabel}</a>
                        ) : (
                          <Link href={slide.primaryHref}>{slide.primaryLabel}</Link>
                        )}
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-funeral-green text-base md:text-lg"
                      >
                        {slide.secondaryHref.startsWith('tel:') ? (
                          <a href={slide.secondaryHref}>{slide.secondaryLabel}</a>
                        ) : (
                          <Link href={slide.secondaryHref}>{slide.secondaryLabel}</Link>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-6 sm:px-10">
        <button
          type="button"
          onClick={scrollPrev}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-funeral-green shadow-lg transition hover:scale-105"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-funeral-green shadow-lg transition hover:scale-105"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
