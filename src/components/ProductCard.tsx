interface ProductCardProps {
  produs: { id: number; name: string; price: number; image: string };
  addToCart: (produs: any) => void;
}

const ProductCard = ({ produs, addToCart }: ProductCardProps) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={produs.image} alt={produs.name} className="mb-4 w-full h-48 object-cover rounded"/>
      <h3 className="text-lg font-semibold">{produs.name}</h3>
      <p className="mb-4">{produs.price} RON</p>
      <button
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
        onClick={() => addToCart(produs)}
      >
        Adaugă în coș
      </button>
    </div>
  );
};

export default ProductCard;
