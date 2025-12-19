import Link from 'next/link';
import {
  ShieldCheck,
  CalendarClock,
  HeartHandshake,
  Lifebuoy,
  Users,
  Clock4,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OrganicImage } from '@/components/OrganicImage';

const planHighlights = [
  {
    title: 'Cobertura inmediata',
    description: 'Activamos la asistencia desde el primer mes, sin periodos de espera extensos.',
    icon: Clock4,
  },
  {
    title: 'Asistencia integral',
    description: 'Traslado, tanatopraxia, sala de velación y acompañamiento jurídico 24/7.',
    icon: Lifebuoy,
  },
  {
    title: 'Apoyo a la familia',
    description: 'Orientación psicológica, ceremonias significativas y gestión de trámites.',
    icon: HeartHandshake,
  },
];

const plans = [
  {
    name: 'Plan Tranquilidad',
    price: 'Desde $45.000/mes',
    features: [
      'Cobertura para titular + núcleo familiar',
      'Traslados nacionales e internacionales',
      'Sala de velación premium o en casa',
      'Ceremonia personalizada y floristería',
    ],
  },
  {
    name: 'Plan Serenidad',
    price: 'Desde $35.000/mes',
    features: [
      'Cobertura para titular + 1 beneficiario',
      'Capilla, cremación o inhumación incluida',
      'Gestión de documentación completa',
      'Acompañamiento emocional y jurídico',
    ],
  },
  {
    name: 'Plan Esencial',
    price: 'Desde $25.000/mes',
    features: [
      'Cobertura para titular',
      'Traslado urbano y tanatopraxia',
      'Sala de velación estándar',
      'Asistencia 24/7 y línea prioritaria',
    ],
  },
];

export default function PrevisionExequialPage() {
  return (
    <div className="bg-funeral-cream">
      <section className="relative overflow-hidden bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -right-32 -top-10 h-72 w-72 rounded-full bg-funeral-yellow/60 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <ShieldCheck className="h-4 w-4" />
            <span>Previsión exequial — Un acto de amor</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.25em] text-funeral-yellow/90">Planea con tranquilidad</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                La mejor manera de cuidar a quienes amas es anticiparte
              </h1>
              <p className="text-lg text-funeral-cream/90">
                Nuestros planes de previsión exequial aseguran acompañamiento humano, cobertura inmediata y ceremonias
                que honran la vida con respeto y calidez.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light text-base">
                  <a href="tel:+575000000000">Línea prioritaria 24/7</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-funeral-green text-base"
                >
                  <Link href="/contacto">Solicitar asesoría</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {planHighlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-2xl bg-white/10 backdrop-blur p-4 space-y-3">
                    <highlight.icon className="h-7 w-7 text-funeral-yellow" />
                    <h3 className="text-lg font-semibold">{highlight.title}</h3>
                    <p className="text-funeral-cream/90 text-sm">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col gap-4">
              <OrganicImage
                src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1400&q=80"
                alt="Familia sonriendo mientras conversa con un asesor"
                variant="center"
                className="max-w-xl ml-auto"
                caption="Coberturas que protegen y acompañan"
              />
              <div className="relative rounded-3xl bg-white text-funeral-green shadow-2xl p-8 space-y-6 border border-funeral-green/10">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-10 w-10 text-funeral-green" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-funeral-green">Planes flexibles</p>
                    <p className="text-2xl font-semibold">Adapta la cobertura a tu familia</p>
                  </div>
                </div>
                <ul className="space-y-3 text-funeral-gray">
                  {["Sin exámenes médicos extensos", 'Cuotas que se ajustan a tu presupuesto', 'Beneficios adicionales en vida'].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-funeral-green mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button asChild className="w-full bg-funeral-green text-white hover:bg-funeral-green-light" size="lg">
                  <Link href="/prevision-exequial#planes">Ver opciones de plan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planes" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Opciones pensadas en ti</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Elige el plan que mejor acompaña a tu familia</h2>
            <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
              Beneficios escalables, cuotas accesibles y coberturas que se adaptan a diferentes momentos de la vida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-3xl border border-funeral-green/10 bg-funeral-cream p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-funeral-green">{plan.name}</h3>
                  <span className="rounded-full bg-funeral-yellow/30 px-3 py-1 text-sm font-semibold text-funeral-green">
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-3 text-funeral-gray">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-funeral-green mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <Link href="/contacto">Cotizar este plan</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-funeral-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Acompañamiento humano</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Un equipo que responde en minutos</h2>
            <p className="text-lg text-funeral-gray">
              Asesores especializados en previsión, psicólogos y tanatólogos listos para atenderte con empatía. Coordinamos
              logística, ceremonias y trámites legales para que tu familia se concentre en despedir y recordar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{
                title: 'Orientación familiar',
                text: 'Cubrimos dudas financieras, legales y emocionales con respuestas claras.',
              },
              {
                title: 'Red de sedes',
                text: 'Salas de velación y capillas en Montería, Sincelejo y municipios aledaños.',
              }].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm border border-funeral-green/10">
                  <h3 className="text-xl font-semibold text-funeral-green mb-2">{item.title}</h3>
                  <p className="text-funeral-gray">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-funeral-green text-white hover:bg-funeral-green-light">
                <Link href="/nosotros">Conoce a nuestro equipo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                <a href="tel:+575000000000">Llamar ahora</a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-2xl p-6 border border-funeral-green/10">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-funeral-green" />
              <p className="text-sm font-semibold text-funeral-green">Pasos rápidos</p>
            </div>
            <ol className="space-y-4 text-funeral-gray">
              {[{
                title: '1. Agenda una conversación',
                text: 'Cuéntanos tu situación y necesidades familiares.',
              },
              {
                title: '2. Elige el plan ideal',
                text: 'Te mostramos coberturas, beneficios y cuotas según tu presupuesto.',
              },
              {
                title: '3. Firma y activa tu cobertura',
                text: 'Digital o presencial, con acompañamiento de nuestros asesores.',
              }].map((step) => (
                <li key={step.title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-funeral-green mt-0.5" />
                  <div>
                    <p className="font-semibold text-funeral-green">{step.title}</p>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-2xl bg-funeral-yellow/20 border border-funeral-yellow/50 p-4 text-funeral-green">
              <p className="font-semibold">Atención inmediata</p>
              <p>Línea 24/7: +57 500 000 0000 • Whatsapp empresarial</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
