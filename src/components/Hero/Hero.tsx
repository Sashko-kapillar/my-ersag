import HeroTitle from "@/components/HeroTitle/HeroTitle";

const Hero = () => {
  return (
    <section className="w-full h-lvw pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
       <div
    className="absolute inset-0 -z-10 bg-cover bg-center"
    style={{ backgroundImage: `image-set(
      url('/images/hero-bg.webp') 1x,
      url('/images/hero-bg@2x.webp') 2x,
      url('/images/hero-bg@3x.webp') 3x
    )` }}
  />
      <div className="section flex justify-between gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe max-h-full h-full">
        <HeroTitle />
      </div>
    </section>
  );
};

export default Hero;