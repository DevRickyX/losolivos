import Link from 'next/link';
import { Gem, Ruler, Palette, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const options = [
  {
    title: 'Diseño personalizado',
    text: 'Tipografías, íconos religiosos o laicos, y mensajes especiales grabados con precisión.',
    icon: Palette,
  },
  {
    title: 'Medidas y materiales',
    text: 'Granito, mármol o placas metálicas con acabados resistentes a la intemperie.',
    icon: Ruler,
  },
  {
    title: 'Instalación segura',
    text: 'Coordinamos permisos, transporte y fijación en nuestros parques o camposantos aliados.',
    icon: Gem,
  },
];

export default function SolicitudLapidasPage() {
  return (
    <div className="bg-funeral-cream">
      <section className="bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <Gem className="h-4 w-4" />
            <span>Solicitud de lápidas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold">Placas conmemorativas hechas con cuidado</h1>
          <p className="text-lg text-funeral-cream/90 max-w-3xl mx-auto">
            Elige diseños, materiales y mensajes que honren la memoria de tus seres queridos. Te acompañamos en todo el proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light">
              <Link href="https://forms.gle/">Solicitar diseño</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-funeral-green">
              <a href="mailto:diseno@losolivos.com">Enviar especificaciones</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Opciones</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Diseños que honran su legado</h2>
            <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
              Personalizamos medidas, acabados y grabados para reflejar la esencia de quienes permanecen en tu recuerdo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map((option) => (
              <div key={option.title} className="rounded-3xl border border-funeral-green/10 bg-funeral-cream p-6 space-y-3 shadow-sm">
                <option.icon className="h-8 w-8 text-funeral-green" />
                <h3 className="text-xl font-semibold text-funeral-green">{option.title}</h3>
                <p className="text-funeral-gray">{option.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-funeral-yellow/20 border border-funeral-yellow/50 p-6 text-center text-funeral-green space-y-3">
            <p className="text-xl font-semibold">Documentación requerida</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-left sm:text-center sm:items-center sm:justify-center">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-funeral-green mt-0.5" />
                <span>Datos del titular y número de contrato</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-funeral-green mt-0.5" />
                <span>Texto y símbolos a grabar</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-funeral-green mt-0.5" />
                <span>Ubicación o parque cementerio de destino</span>
              </div>
            </div>
            <Button asChild variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
              <Link href="https://forms.gle/">Enviar solicitud</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
