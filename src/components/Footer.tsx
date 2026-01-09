import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import crsLogo from '@/assets/crs-logo.png';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Servicii', href: '#services' },
    { name: 'Despre Noi', href: '#about' },
    { name: 'Proiecte', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Pietre Decorative Interior',
    'Pietre Decorative Exterior',
    'Producție la Comandă',
    'Montaj Profesional',
  ];

  return (
    <footer className="dark-gradient text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={crsLogo} alt="CRS Construct" className="h-10 w-10" />
              <span className="text-2xl font-bold">CRS Construct</span>
            </div>
            <p className="text-gray-300 mb-4">
              Construim excelența de peste 5 ani. Partenerul tău de încredere pentru 
              lucrari unice din beton atat pentru interior și exterior.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-red transition-smooth"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <h3 className="text-xl font-bold mb-4">Serviciile Noastre</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Informații Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>Bdl. 1 Decembrie 1918, Nr. 261, Ap B2<br />Targu - Mures, România</p>
              <p>Telefon: +40 (752) 615-942</p>
              <p>Email: ovidiu.crisann00@gmail.com</p>
              <p>Program: Lun-Vin 08:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CRS Construct. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-smooth">
              Politica de Confidențialitate
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-smooth">
              Termeni și Condiții
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-smooth">
              Politica Cookie-uri
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;