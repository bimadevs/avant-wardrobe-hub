import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { ShoppingBag, ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addItem({
      id: product.id + "-" + selectedSize,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
    toast.success("Added to cart", {
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-sm mb-8 hover:text-accent smooth-transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="aspect-[3/4] rounded-lg overflow-hidden subtle-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold mb-6">{formatPrice(product.price)}</p>
            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[60px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              className="w-full sm:w-auto luxury-gradient text-foreground font-semibold"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>

            {/* Product Details */}
            <div className="mt-12 space-y-4">
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Product Details</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Premium quality materials</li>
                  <li>• Expert craftsmanship</li>
                  <li>• Modern and timeless design</li>
                  <li>• Available in multiple sizes</li>
                </ul>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Shipping & Returns</h4>
                <p className="text-sm text-muted-foreground">
                  Free shipping nationwide. 30-day return policy on all items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
