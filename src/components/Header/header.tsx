// import { useState } from 'react';
// import Modal from '../ui/Modal/Modal';
// import BookModal from '../BookModal/BookModal';
// import BurgerToggle from '../BurgerToggle/BurgerToggle';
import SmartButton from '@/components/ui/Button/SmartButton';
// import HeaderNav from '../HeaderNav/HeaderNav';

type HeaderProps = {
  setActiveIndex?: (index: number) => void;
  onShowHome?: () => void;
  isPrivacy?: boolean;
};

const Header = ({
//   setActiveIndex,
//   isPrivacy = false,
//   onShowHome,
}: HeaderProps) => {
//   const [openBookModal, setOpenBookModal] = useState(false);
//   const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-masala-light lg:bg-trend-200/40 relative z-100 w-full">
        <div className="section flex gap-20 py-3.5 1xl:py-4 min-h-17 h-full items-center justify-end">
          {/* <a href="/" className="w-1/3">
            <span className="sr-only">Повернутись на головну</span>
            <svg className="w-9.5 h-12.5 1xl:h-13 4xl:w-12 4xl:h-16.5 fill-tangerine">
              <use href="/images/svg/icons.svg#icon-logo" />
            </svg>
          </a> */}          
          <nav className="hidden lg:flex lg:gap-10 xl:gap-8 4xl:gap-11 lg:w-1/3 justify-center">
            <SmartButton
                className="flex text-xl"
                variant="secondary"
                label="Про нас"
                href="#contact-form"
            >
            </SmartButton>
            <SmartButton
                className="flex text-xl"
                variant="secondary"
                label="До товарів"
                href="#contact-form"
            >
            </SmartButton>
            <SmartButton
                className="flex text-xl"
                variant="secondary"
                label="Контакти"
                href="#contact-form"
            >
            </SmartButton>
          </nav>
          
          <SmartButton
              className="flex items-end text-xl"
              variant="primary"
              label="Отримати консультацію"
              href="#contact-form"
          >            
          </SmartButton>

          {/* {isPrivacy ? (
            // Якщо сторінка політики — лише кнопка "На головну"
            <SmartButton
              onClick={() => onShowHome?.()}
              className="flex"
              variant="primary"
              label="На головну"
              href="/"
            />
          ) : ( */}
            <>
              {/* {setActiveIndex && (
                <HeaderNav
                  setActiveIndex={setActiveIndex}
                  className="w-1/3 mx-auto"
                />
              )} */}

              
                {/* {!isBurgerMenuOpen && (
                  <SmartButton
                    type="button"
                    onClick={() => setOpenBookModal(true)}
                    label="Отримати консультацію"
                    variant="primary"
                    className="hidden xs:flex text-star-dust border-star-dust text-base/[100%] 1xl:text-[18px]/[1] font-semibold px-3 py-[15px] 1xl:py-4.5 1xl:px-5 bg-woodsmoke-black/50 backdrop-blur-[5px]"
                  />
                )} */}

                {/* {setActiveIndex && (
                  <BurgerToggle
                    isOpen={isBurgerMenuOpen}
                    setIsOpen={setIsBurgerMenuOpen}
                    setActiveIndex={setActiveIndex}
                  />
                )} */}
              
            </>
          {/* )} */}
        </div>
      </header>

      {/* <Modal isOpen={openBookModal} onClose={() => setOpenBookModal(false)}>
        <BookModal onClose={() => setOpenBookModal(false)} />
      </Modal> */}
    </>
  );
};

export default Header;