import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-fashion.jpg";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            Elevate Your Style
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover premium fashion collections that define modern elegance
          </p>
          <Link to="/products">
            <Button size="lg" className="luxury-gradient text-foreground font-semibold">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full luxury-gradient mb-4">
                <Star className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Curated collections from the world's finest designers
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full luxury-gradient mb-4">
                <Shield className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Shopping</h3>
              <p className="text-sm text-muted-foreground">
                Your transactions are protected with advanced security
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full luxury-gradient mb-4">
                <Truck className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Free shipping on all orders nationwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked pieces that embody timeless elegance and contemporary design
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="smooth-transition">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/products?category=men"
              className="group relative h-96 rounded-lg overflow-hidden subtle-shadow hover:luxury-shadow smooth-transition"
            >
              <img
                src={heroImage}
                alt="Men's Collection"
                className="w-full h-full object-cover smooth-transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-serif font-bold mb-2">Men's Collection</h3>
                  <p className="text-lg opacity-90">Sophisticated style for the modern gentleman</p>
                </div>
              </div>
            </Link>
            <Link
              to="/products?category=women"
              className="group relative h-96 rounded-lg overflow-hidden subtle-shadow hover:luxury-shadow smooth-transition"
            >
              <img
                src={heroImage}
                alt="Women's Collection"
                className="w-full h-full object-cover smooth-transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-serif font-bold mb-2">Women's Collection</h3>
                  <p className="text-lg opacity-90">Elegant pieces for the confident woman</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
