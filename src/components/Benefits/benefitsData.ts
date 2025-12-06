// src/components/Benefits/benefitsData.ts

export interface BenefitItem {
  icon: "Leaf" | "FlaskConical" | "Flower2" | "HandHeart";
  title: string;
  text: string;
}

export const benefitsData: BenefitItem[] = [
  {
    icon: "Leaf",
    title: "Натуральний склад",
    text: "Тільки природні рослинні компоненти, створені з турботою та увагою до вашого добробуту."
  },
  {
    icon: "FlaskConical",
    title: "Дбайливе виробництво",
    text: "Малі партії, ручний контроль якості та тепле ставлення в кожній краплині продукту."
  },
  {
    icon: "Flower2",
    title: "Ніжний аромат",
    text: "Квіткові та рослинні ноти часом заспокоюють, часом надихають — але завжди дарують затишок."
  },
  {
    icon: "HandHeart",
    title: "Турбота та безпека",
    text: "Гіпоалергенні формули та м’яка дія, що підходять для всієї родини."
  }
];
