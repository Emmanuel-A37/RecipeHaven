import { Suspense, lazy } from 'react';
import Image from 'next/image';

const Hero = lazy(() => import('@/components/Hero'));
const Recipes = lazy(() => import('@/components/Recipes'));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Recipes />
      </Suspense>
    </div>
  );
}
