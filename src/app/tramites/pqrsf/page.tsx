import Link from 'next/link';
import { MessageCircle, FileText, Send, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    title: 'Diligencia el formulario',
    text: 'Incluye tus datos de contacto y describe tu solicitud con el mayor detalle.',
    icon: FileText,
  },
  {
    title: 'Asignamos un asesor',
    text: 'Un especialista revisará tu caso y se comunicará contigo para dar respuesta.',
    icon: HeartHandshake,
  },
  {
    title: 'Respuesta clara y seguimiento',
    text: 'Te mantendremos informado hasta resolver tu PQRSF de manera satisfactoria.',
    icon: Send,
  },
];

export default function PQRSFPage() {
  return (
    <div className="bg-funeral-cream">
      <section className="bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <MessageCircle className="h-4 w-4" />
            <span>PQRSF</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold">Escuchamos tus peticiones y reconocemos tus comentarios</h1>
          <p className="text-lg text-funeral-cream/90 max-w-3xl mx-auto">
            Déjanos tus Peticiones, Quejas, Reclamos, Sugerencias o Felicitaciones. Nuestro equipo dará respuesta oportuna y transparente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light">
              <Link href="https://forms.gle/">Diligenciar formulario</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-funeral-green">
              <a href="mailto:servicio@losolivos.com">Escribir al correo</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Proceso</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Respuesta ágil y acompañada</h2>
            <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
              Garantizamos trazabilidad de cada PQRSF. Recibirás número de radicado y seguimiento personalizado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-funeral-green/10 bg-funeral-cream p-6 space-y-3 shadow-sm">
                <step.icon className="h-8 w-8 text-funeral-green" />
                <h3 className="text-xl font-semibold text-funeral-green">{step.title}</h3>
                <p className="text-funeral-gray">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-funeral-yellow/20 border border-funeral-yellow/50 p-6 text-center text-funeral-green space-y-3">
            <p className="text-xl font-semibold">Atención prioritaria</p>
            <p>Si necesitas una respuesta inmediata, comunícate con nuestra línea 24/7: +57 500 000 0000</p>
            <Button asChild variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
              <a href="tel:+575000000000">Llamar ahora</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
