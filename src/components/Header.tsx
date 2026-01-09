import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import crsLogo from '@/assets/crs-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  const navItems = [
    { name: 'Acasă', to: '/#home' },
    { name: 'Servicii', to: '/#services' },
    { name: 'Despre Noi', to: '/#about' },
    { name: 'Proiecte', to: '/#projects' },
    { name: 'Contact', to: '/#contact' },
    { name: 'Magazin', to: '/magazin' },
  ];

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const delta = currentY - lastYRef.current;

        const THRESHOLD = 8;

        if (Math.abs(delta) > THRESHOLD) {
          if (delta > 0 && currentY > 80) {
            setIsHidden(true);
            setIsMenuOpen(false);
          } else {
            setIsHidden(false);
          }
          lastYRef.current = currentY;
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        
        'sticky top-0 z-50 bg-background/95 backdrop-blur-sm',
        'transition-transform duration-300',
        isHidden ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={crsLogo}
              alt="CRS Construct"
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-primary-dark">
              CRS Construct
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-foreground hover:text-primary transition-smooth"
              >
                {item.name}
              </Link>
            ))}

            
            <Button asChild variant="hero" size="sm">
              <Link to="/#contact">Ofertă Gratuită</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              
              <Button asChild variant="hero" size="sm" className="w-fit">
                <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Ofertă Gratuită
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
