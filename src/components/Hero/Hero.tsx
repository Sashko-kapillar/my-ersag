import HeroTitle from "@/components/HeroTitle/HeroTitle";

const Hero = () => {
  return (
    <section className=" w-full min-h-[99vh] overflow-hidden flex items-center">
       <div
    className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-center pr-20"
    style={{ backgroundImage: `image-set(
      url('/images/hero-bg.webp') 1x,
      url('/images/hero-bg@2x.webp') 2x,
      url('/images/hero-bg@3x.webp') 3x
    )` }}
  />
      
        <HeroTitle />
    </section>
  );
};

export default Hero;