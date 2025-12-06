// src/components/Benefits/BenefitsSection.tsx

import BenefitCard from "./BenefitCard";
import { benefitsData } from "./benefitsData";

const BenefitsSection = () => {
  return (
    <section 
      className="w-full py-24 bg-bg-white"
    >
      <div className="section flex flex-col gap-14">

        {/* Заголовок */}
        
          <h2 className="sr-only text-3xl md:text-4xl font-bold tracking-tight">
            Наші переваги
          </h2>

          <p className="sr-only text-gray-600 mt-4 leading-relaxed">
            Ми поєднали натуральність, безпеку та домашній затишок, 
            щоб створити продукти, які хочеться використовувати щодня.
          </p>

        {/* Сітка карток */}
        <div className="
          grid gap-8
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4
        ">
          {benefitsData.map((item, i) => (
            <BenefitCard
              key={i}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
