'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Swiper, SwiperSlide } from '@/lib/swiper-react';
import { Button } from './ui/button';

const heroSlides = [
  {
    title: 'Un homenaje al amor en cada detalle',
    subtitle: 'Acompañamiento integral 24/7',
    description:
      'Coordinamos traslados, ceremonias y apoyo emocional para que tu familia se despida con serenidad.',
    primaryLabel: 'Hablar con un asesor',
    primaryHref: 'tel:+575000000000',
    secondaryLabel: 'Planes de previsión',
    secondaryHref: '/prevision-exequial',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Ceremonias que celebran la vida',
    subtitle: 'Homenajes personalizados',
    description:
      'Música, flores y rituales únicos para agradecer la vida de quienes amas, en salas o espacios al aire libre.',
    primaryLabel: 'Explorar homenajes',
    primaryHref: '/homenajes',
    secondaryLabel: 'Ver parque cementerio',
    secondaryHref: '/parque-cementerio',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Tranquilidad anticipada para tu familia',
    subtitle: 'Planes flexibles de previsión',
    description:
      'Cobertura inmediata, asesoría clara y cuotas que se ajustan a tu presupuesto.',
    primaryLabel: 'Cotizar ahora',
    primaryHref: '/prevision-exequial',
    secondaryLabel: 'Línea 24/7',
    secondaryHref: 'tel:+575000000000',
    image:
      'https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function HeroSlider() {
  return (
    <div className="relative">
      <Swiper
        loop
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.title} aria-label={`Diapositiva ${index + 1}: ${slide.title}`}>
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
                    <p className="text-sm uppercase tracking-[0.2em] text-funeral-yellow/90">{slide.subtitle}</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">{slide.title}</h1>
                    <p className="text-lg md:text-xl text-funeral-cream/90 max-w-2xl">{slide.description}</p>
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
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          color: #1b4d3e;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after {
          content: '';
          font-size: 1rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .hero-swiper .swiper-button-next:after {
          content: '›';
        }

        .hero-swiper .swiper-button-prev:after {
          content: '‹';
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: #f4c430;
        }
      `}</style>
    </div>
  );
}
