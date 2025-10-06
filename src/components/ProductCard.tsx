import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
    });
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-card subtle-shadow smooth-transition hover:luxury-shadow">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover smooth-transition group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">{formatPrice(product.price)}</span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="smooth-transition"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
