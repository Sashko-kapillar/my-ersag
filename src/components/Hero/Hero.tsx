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
      <div className="flex justify-between gap-5.5 flex-col max-h-full h-full w-1/2">
        <HeroTitle />
      </div>
    </section>
  );
};

export default Hero;