import { Suspense } from 'react';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import Blog from '@/components/sections/blog';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export const runtime = 'edge';
export const preferredRegion = 'auto';
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </div>
  );
}