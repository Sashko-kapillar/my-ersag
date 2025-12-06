import type { ReactNode } from "react";
import {
  Leaf,
  FlaskConical,
  Flower2,
  HandHeart,
} from "lucide-react";

interface BenefitCardProps {
  icon: "Leaf" | "FlaskConical" | "Flower2" | "HandHeart";
  title: string;
  text: string;
}

const iconsMap: Record<BenefitCardProps["icon"], ReactNode> = {
  Leaf: <Leaf size={80} strokeWidth={0.6} className="text-icon-wisteria-600" />,
  FlaskConical: <FlaskConical size={80} strokeWidth={0.6} className="text-icon-wisteria-600" />,
  Flower2: <Flower2 size={80} strokeWidth={0.6} className="text-icon-wisteria-600" />,
  HandHeart: <HandHeart size={80} strokeWidth={0.6} className="text-icon-wisteria-600" />,
};

const BenefitCard = ({ icon, title, text }: BenefitCardProps) => {
  return (
    <div className="
      relative flex gap-14 p-12 rounded-3xl
      bg-white 
      shadow-[0_8px_28px_rgba(0,0,0,0.06)]
      border border-white/40
    ">
      <div className="relative z-10 flex items-center justify-center">
        {iconsMap[icon]}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
