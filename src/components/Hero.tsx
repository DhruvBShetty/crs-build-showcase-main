import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-roca.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Transformăm cimentul în
            <span className="text-primary-red"> Rocă & Lemn</span> decorativ
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Creăm rocă și lemn artificial din ciment, cu aspect natural, pentru orice tip de decor sau amenajare,
            atât interioară, cât și exterioară. Peste ani de experiență în industrie.
          </p>

          <Link
            to="/magazin"
            className="inline-block px-8 py-3 mb-6 bg-primary-red text-white rounded-lg font-semibold hover:bg-red-700 transition animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Vezi produsele noastre
          </Link>

          <div
            className="flex flex-row gap-3 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              variant="hero"
              size="sm"
              className="h-10 px-4 text-sm md:h-12 md:px-6 md:text-base"
            >
              Începe Proiectul
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white hover:text-primary-dark h-10 px-4 text-sm md:h-12 md:px-6 md:text-base"
            >
              <a href="tel:+40752615942">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Sună Acum
              </a>
            </Button>
          </div>



          <div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red">5+</div>
              <div className="text-gray-300">Ani Experiență</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red">150+</div>
              <div className="text-gray-300">Proiecte Finalizate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red">100%</div>
              <div className="text-gray-300">Clienți Mulțumiți</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
