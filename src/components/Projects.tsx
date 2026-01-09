import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import semineu_vila from '@/assets/semineu_vila.png';
import casa_din_piatra from '@/assets/casa_din_piatra.png';
import moon from '@/assets/moon.png';

const Projects = () => {
  const projects = [
    {
      title: 'Şemineu din Piatră Decorativă',
      category: 'Rezidențial',
      images: [semineu_vila, semineu_vila, semineu_vila],
      description:
        'Şemineu elegant cu fațadă din pietre decorative din beton, combinând stilul clasic cu aspectul natural.',
      details: ['5.4 mp Şemineu', '3 Zile', '2.700 Lei'],
    },
    {
      title: 'Restructurare fațadă casă',
      category: 'Rezidential',
      images: [casa_din_piatra, casa_din_piatra, casa_din_piatra],
      description:
        'Fațadă din rocă artificială, oferind un aspect premium, natural și durabilitate maximă.',
      details: ['30 mp', '6 Zile ', '15.000 Lei'],
    },
    {
      title: 'Luna',
      category: 'Special',
      images: [moon, moon, moon],
      description:
        'Lucrare speciala realizată pe comandă, cu atenție la detalii și finisaj de calitate.',
      details: ['1.5 m diametru', '2 Zile', '3.000 Lei'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark">
            Proiecte <span className="text-primary-red">Realizate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aruncați o privire la câteva dintre proiectele noastre recente care demonstrează
            expertiza și angajamentul nostru pentru pietre decorative de calitate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const sliderRef = useRef<HTMLDivElement | null>(null);

            const scroll = (direction: 'left' | 'right') => {
              if (!sliderRef.current) return;
              const width = sliderRef.current.clientWidth;
              sliderRef.current.scrollBy({
                left: direction === 'left' ? -width : width,
                behavior: 'smooth',
              });
            };

            return (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-smooth">
                {/* GALERIE */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* SĂGEȚI */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                                   bg-black/30 hover:bg-black/50 text-white
                                   rounded-full p-1 transition"
                        aria-label="Imaginea anterioară"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                                   bg-black/30 hover:bg-black/50 text-white
                                   rounded-full p-1 transition"
                        aria-label="Imaginea următoare"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* IMAGINI */}
                  <div
                    ref={sliderRef}
                    className="flex overflow-x-hidden scroll-smooth"
                  >
                    {project.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="min-w-full">
                        <img
                          src={img}
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-64 object-cover"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.details.map((detail, detailIndex) => (
                      <span
                        key={detailIndex}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            Vezi Toate Proiectele
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
