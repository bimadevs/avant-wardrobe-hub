import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">LUXE</h3>
            <p className="text-sm opacity-80">
              Premium fashion for the modern lifestyle. Curated collections that define elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/products?category=men" className="text-sm opacity-80 hover:opacity-100 smooth-transition">
                Men's Collection
              </Link>
              <Link to="/products?category=women" className="text-sm opacity-80 hover:opacity-100 smooth-transition">
                Women's Collection
              </Link>
              <Link to="/products" className="text-sm opacity-80 hover:opacity-100 smooth-transition">
                All Products
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 smooth-transition">
                About Us
              </Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 smooth-transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 smooth-transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 smooth-transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 smooth-transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} LUXE Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
