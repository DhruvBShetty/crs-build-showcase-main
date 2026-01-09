import { Button } from '@/components/ui/button';
import { Award, Clock, Shield, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelență',
      description: 'Menținem standardele cele mai înalte în fiecare proiect pe care îl realizăm.'
    },
    {
      icon: Clock,
      title: 'Fiabilitate',
      description: 'Livrare la timp și servicii de încredere pe care te poți baza.'
    },
    {
      icon: Shield,
      title: 'Siguranță',
      description: 'Abordare cu siguranța pe primul loc și protocoale comprehensive.'
    },
    {
      icon: Target,
      title: 'Precizie',
      description: 'Atenție la detalii și execuție precisă în fiecare realizare.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark">
              Despre <span className="text-primary-red">CONinex Group</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
              Cu peste 5 ani de experiență în România, CRS Construct s-a afirmat ca lider în crearea de rocă și lemn artificial din ciment, oferind soluții pentru decor și amenajări interioare și exterioare.
            </p>
            <p>
              Echipa noastră de profesioniști calificați se angajează să livreze produse de calitate superioară, soluții inovatoare și servicii excelente pentru clienți. Punem accent nu doar pe realizarea produselor, ci și pe construirea unor relații durabile cu clienții noștri.
            </p>
            <p>
              De la proiecte mici de decor la realizări la scară mare, abordăm fiecare lucrare cu același nivel de dedicare, expertiză și atenție la detalii, care ne-au consacrat ca alegerea preferată pentru roca și lemnul artificial din ciment.
            </p>

            </div>
            <Button variant="cta" size="lg">
              Află Mai Multe Despre Noi
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-red to-primary-red/80 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;