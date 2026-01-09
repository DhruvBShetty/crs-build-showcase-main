import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Building2, Factory, Wrench, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Pietre Decorative Interior',
      description: 'Pietre artificiale din beton pentru amenajări interioare elegante și durabile.',
      features: ['Pereți Decorativi', 'Șeminee din Piatră', 'Coloane Decorative', 'Elemente Arhitecturale']
    },
    {
      icon: Building2,
      title: 'Pietre Decorative Exterior',
      description: 'Soluții pentru fațade și amenajări exterioare cu aspect natural perfect.',
      features: ['Fațade din Piatră', 'Garduri Decorative', 'Alei și Pavaje', 'Ziduri de Sprijin']
    },
    {
      icon: Factory,
      title: 'Producție la Comandă',
      description: 'Pietre artificiale personalizate după specificațiile și designul dumneavoastră.',
      features: ['Forme Personalizate', 'Culori la Alegere', 'Texturi Variate', 'Dimensiuni Custom']
    },
    {
      icon: Wrench,
      title: 'Montaj Profesional',
      description: 'Servicii complete de montaj și instalare cu garanție extinsă.',
      features: ['Montaj Specializat', 'Consultanță Tehnică', 'Garanție Extinsă', 'Service Post-Vânzare']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark">
            Serviciile <span className="text-primary-red">Noastre</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferim servicii complete de producție și montaj pietre decorative din beton. 
            Fiecare proiect este realizat cu cea mai înaltă calitate și atenție la detalii.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-smooth">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-red to-primary-red/80 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary-dark">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary-red mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            <Users className="mr-2 h-5 w-5" />
            Discută Proiectul Tău
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;