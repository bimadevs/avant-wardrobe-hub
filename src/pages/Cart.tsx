import { Link } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = subtotal + shipping;

  const handleCheckout = () => {
    toast.success("Checkout feature coming soon!");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Start adding some amazing products to your cart
          </p>
          <Link to="/products">
            <Button size="lg">Shop Now</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-sm mb-8 hover:text-accent smooth-transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-card rounded-lg subtle-shadow animate-fade-in"
              >
                <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  {item.size && (
                    <p className="text-sm text-muted-foreground mb-2">Size: {item.size}</p>
                  )}
                  <p className="text-lg font-bold mb-3">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => {
                    removeItem(item.id);
                    toast.success("Item removed from cart");
                  }}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 subtle-shadow sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-accent">FREE</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold">{formatPrice(total)}</span>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full luxury-gradient text-foreground font-semibold"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
