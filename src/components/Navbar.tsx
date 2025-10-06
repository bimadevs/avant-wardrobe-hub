import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCartStore();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-sm font-medium hover:text-accent smooth-transition">
              Shop
            </Link>
            <Link to="/products?category=men" className="text-sm font-medium hover:text-accent smooth-transition">
              Men
            </Link>
            <Link to="/products?category=women" className="text-sm font-medium hover:text-accent smooth-transition">
              Women
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent smooth-transition">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-accent smooth-transition">
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-sm font-medium hover:text-accent smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/products?category=men"
                className="text-sm font-medium hover:text-accent smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/products?category=women"
                className="text-sm font-medium hover:text-accent smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-accent smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-accent smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
