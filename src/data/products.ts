import productCoat from "@/assets/product-coat.jpg";
import productDress from "@/assets/product-dress.jpg";
import productShirt from "@/assets/product-shirt.jpg";
import productJeans from "@/assets/product-jeans.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'men' | 'women';
  sizes: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Black Coat',
    price: 2499000,
    description: 'Premium wool blend coat with elegant tailoring and timeless design.',
    image: productCoat,
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: '2',
    name: 'Designer Evening Dress',
    price: 3499000,
    description: 'Sophisticated evening dress crafted from luxurious fabric.',
    image: productDress,
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    featured: true,
  },
  {
    id: '3',
    name: 'Premium White Shirt',
    price: 899000,
    description: 'Classic white shirt with modern cut and premium cotton fabric.',
    image: productShirt,
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: '4',
    name: 'Designer Denim',
    price: 1599000,
    description: 'Premium Japanese denim with perfect fit and exceptional comfort.',
    image: productJeans,
    category: 'men',
    sizes: ['28', '30', '32', '34', '36'],
    featured: true,
  },
  {
    id: '5',
    name: 'Cashmere Sweater',
    price: 1899000,
    description: 'Luxurious cashmere sweater for ultimate comfort and style.',
    image: productCoat,
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '6',
    name: 'Silk Blouse',
    price: 1299000,
    description: 'Elegant silk blouse with delicate detailing.',
    image: productShirt,
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
  },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};
