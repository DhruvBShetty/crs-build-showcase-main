import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactInfo = [
    { icon: Phone, title: 'Telefon', details: '+40 (752) 615-942', subtitle: 'Sună-ne oricând' },
    { icon: Mail, title: 'Email', details: 'ovidiu.crisann00@gmail.com', subtitle: 'Contactează-ne' },
    { icon: MapPin, title: 'Locația', details: 'Bdl. 1 Decembrie 1918, Nr. 261, Ap B2', subtitle: 'Vizitează-ne' },
    { icon: Clock, title: 'Program', details: 'Lun-Vin: 08:00-18:00', subtitle: 'Suntem aici să te ajutăm' }
  ];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    emailjs.sendForm(
      'service_pkv0d9b',  
      'template_dwwnxfp', 
      form.current,
      'LvuTc3BXymSf1Al-h'   
    )
    .then(() => {
      setSending(false);
      setSuccess(true);
      form.current?.reset();
    })
    .catch(() => {
      setSending(false);
      alert('Eroare la trimiterea mesajului, încearcă din nou.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark">
            Intră în <span className="text-primary-red">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gata să îți începi proiectul tau unicat cu roca sau lemn artificial? Contactează-ne astăzi pentru o consultație gratuită 
            și o ofertă personalizată. Suntem aici să îți transformăm viziunea în realitate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary-dark">Trimite-ne un Mesaj</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prenume</Label>
                    <Input id="firstName" name="firstName" placeholder="Ion" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nume</Label>
                    <Input id="lastName" name="lastName" placeholder="Popescu" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="ion@exemplu.ro" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+40 (723) 456-789" />
                </div>
                <div>
                  <Label htmlFor="project">Tipul Proiectului</Label>
                  <Input id="project" name="project" placeholder="Interior, Exterior, Fațadă, Luna etc." />
                </div>
                <div>
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea id="message" name="message" placeholder="Spune-ne despre proiectul tău..." rows={4} />
                </div>
                <Button variant="hero" size="lg" className="w-full" disabled={sending}>
                  {sending ? 'Se trimite...' : 'Trimite Mesajul'}
                </Button>
                {success && <p className="text-green-500 mt-2">Mesajul a fost trimis cu succes!</p>}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-red transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-red to-primary-red/80 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-dark mb-1">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
            
            <Card className="p-6 dark-gradient text-white">
              <h3 className="text-xl font-bold mb-4">Gata să îți Începi Proiectul?</h3>
              <p className="mb-4 text-gray-200">
                Obține o consultație gratuită și o ofertă pentru proiectul tău cu pietre decorative. 
                Echipa noastră este gata să te ajute la fiecare pas.
              </p>
              <Button variant="hero" size="lg">
                Programează Consultația
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
