import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Portfolio } from '@/components/portfolio';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}