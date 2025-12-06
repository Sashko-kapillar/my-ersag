import SmartButton from "@/components/ui/Button/SmartButton";

const HeroTitle = () => {
  return (    
      <div className="flex gap-5.5 flex-col max-h-full h-full 1xl:pl-10 lg:max-w-[800px]">
        {/* <VideoPlayer /> */}
        <h1 className="font-second text-master-600">Природна турбота, що працює щодня</h1>
        <p className="max-w-100 text-xl">М’який і природний догляд, створений для щоденного комфорту та гармонії</p>
        <SmartButton
            className="flex items-end text-xl lg:bg-master-500 lg:text-white hover:lg:bg-transparent hover:lg:text-chilean-fire hover:lg:border-chilean-fire transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
            variant="primary"
            label="Дізнатися більше"
            href="#contact-form"
            >            
        </SmartButton>
      </div>
  );
};

export default HeroTitle;