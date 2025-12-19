import Image from 'next/image';
import { cn } from '@/lib/utils';

const clipPaths: Record<'left' | 'right' | 'center', string> = {
  left: 'polygon(70% 0%, 95% 20%, 100% 55%, 85% 85%, 60% 100%, 35% 93%, 10% 75%, 0% 45%, 8% 15%, 35% 0%)',
  right: 'polygon(80% 5%, 100% 35%, 95% 70%, 70% 95%, 45% 100%, 15% 85%, 0% 60%, 5% 30%, 20% 8%, 50% 0%)',
  center:
    'polygon(65% 0%, 85% 15%, 100% 45%, 95% 70%, 75% 95%, 45% 100%, 20% 90%, 5% 60%, 0% 35%, 18% 12%)',
};

interface OrganicImageProps {
  src: string;
  alt: string;
  caption?: string;
  variant?: 'left' | 'right' | 'center';
  className?: string;
}

export function OrganicImage({ src, alt, caption, variant = 'center', className }: OrganicImageProps) {
  const clipPath = clipPaths[variant];

  return (
    <figure className={cn('relative isolate', className)}>
      <div
        className="absolute -inset-6 rounded-[45%] bg-funeral-yellow/25 blur-3xl"
        aria-hidden
        style={{ clipPath }}
      />
      <div
        className="relative overflow-hidden border border-funeral-green/10 bg-white shadow-2xl"
        style={{
          clipPath,
          borderRadius: '48% 52% 46% 54% / 55% 45% 55% 45%',
        }}
      >
        <Image src={src} alt={alt} width={900} height={900} className="h-full w-full object-cover" />
      </div>
      {caption ? (
        <figcaption className="mt-4 flex items-center gap-2 text-sm font-medium text-funeral-green">
          <span className="inline-block h-2 w-2 rounded-full bg-funeral-yellow" aria-hidden />
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
