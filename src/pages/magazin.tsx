import { useMemo, useState } from 'react';

type Produs = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Produs & {
  qty: number;
};

const produseDemo: Produs[] = [
  { id: 1, name: 'Logo', price: 65, image: '/produse/crs-logo.png' },
  { id: 2, name: 'Hanorac Albastru', price: 150, image: '/produse/hanorac-albastru.jpg' },
  { id: 3, name: 'Șapcă Albă', price: 40, image: '/produse/sapca-alba.jpg' },
  { id: 4, name: 'Geantă Sport', price: 85, image: '/produse/geanta-sport.jpg' },
];

function ProductCard({
  produs,
  addToCart,
}: {
  produs: Produs;
  addToCart: (p: Produs) => void;
}) {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center">
      <img
        src={produs.image}
        alt={produs.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{produs.name}</h3>
      <p className="text-primary font-bold mb-2">{produs.price} RON</p>
      <button
        onClick={() => addToCart(produs)}
        className="mt-auto px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
      >
        Adaugă în coș
      </button>
    </div>
  );
}

export default function Magazin() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (produs: Produs) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === produs.id);
      if (exist) {
        return prev.map((item) =>
          item.id === produs.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...produs, qty: 1 }];
    });
  };

  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Magazin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produseDemo.map((produs) => (
          <ProductCard key={produs.id} produs={produs} addToCart={addToCart} />
        ))}
      </div>

      {cart.length > 0 && (
        <section className="mt-10 border-t pt-4">
          <h2 className="text-2xl font-semibold mb-4">Coș de cumpărături</h2>

          <div className="space-y-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.qty}
                </span>
                <span>{item.price * item.qty} RON</span>
              </div>
            ))}
          </div>

          <div className="mt-3 font-bold">Total: {total} RON</div>

          <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
            Finalizare comandă
          </button>
        </section>
      )}
    </main>
  );
}
