import heroImage from "@/assets/hero-fashion.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            About LUXE
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Redefining modern luxury fashion
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="animate-fade-in">
              <span className="text-4xl font-serif font-bold text-accent">L</span>UXE was founded with a singular vision: to bring together the world's finest fashion in one carefully curated collection. We believe that true luxury lies not just in the quality of materials, but in the perfect marriage of craftsmanship, design, and timeless elegance.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Our journey began with a simple question: Why should exceptional fashion be complicated? We set out to create a destination where discerning customers could discover premium pieces that speak to their personal style, without compromise.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Every item in our collection is selected with meticulous attention to detail. We partner with established designers and emerging talents who share our commitment to excellence, sustainability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 luxury-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-serif font-bold text-foreground">Q</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every piece is crafted to last, using only the finest materials.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 luxury-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-serif font-bold text-foreground">S</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to ethical fashion practices and supporting sustainable production methods.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 luxury-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-serif font-bold text-foreground">E</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                From selection to delivery, we strive for excellence in every aspect of your experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
