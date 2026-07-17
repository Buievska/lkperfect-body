import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../Container";

export default function Contacts() {
  return (
    // Додано id="contacts" для плавного переходу з навігаційного меню
    <section
      id="contacts"
      className="w-full py-20 md:py-28 bg-background border-t border-brand-gold/5"
    >
      <Container>
        {/* Головна сітка блоку: 1 стовпчик на мобільних, 2 стовпчики на планшетах та десктопах */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* ЛІВА ЧАСТИНА: Контакти (Займає 7 колонок на великих екранах) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 sm:space-y-10 text-left">
            {/* Надзаголовок та Заголовок */}
            <div className="space-y-3">
              <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-[0.2em] font-serif block">
                Контакти та бронювання
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-gold leading-tight">
                Записатися на <br /> прийом
              </h2>
              {/* Тонка лінія — h-[1px] оптимізовано до h-px */}
              <div className="w-16 h-px bg-brand-gold/30 pt-1"></div>
            </div>

            {/* Списочок контактних даних з круглими іконками */}
            <div className="space-y-6">
              {/* Телефон */}
              <a
                href="tel:+380956586855"
                className="flex items-center gap-4 sm:gap-6 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-background transition-all duration-300">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-base sm:text-lg lg:text-xl text-brand-gold font-serif italic tracking-wide group-hover:text-brand-gold/85 transition-colors">
                  +38 095 658 68 55
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:lilikarevych@gmail.com"
                className="flex items-center gap-4 sm:gap-6 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-background transition-all duration-300">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-base sm:text-lg lg:text-xl text-brand-gold font-serif italic tracking-wide break-all group-hover:text-brand-gold/85 transition-colors">
                  lilikarevych@gmail.com
                </span>
              </a>

              {/* Адреса з посиланням на Google Maps та безпечним екрануванням апострофа */}
              <a
                href="https://maps.app.goo.gl/BoVbmLqWLTDeNdJv8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 sm:gap-6 group transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 mt-1 group-hover:bg-brand-gold group-hover:text-background transition-all duration-300">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base sm:text-lg lg:text-xl text-brand-gold font-serif italic tracking-wide leading-relaxed group-hover:text-brand-gold/85 transition-colors">
                    м. Кам&apos;янець-Подільський, <br />
                    вул. Матросова 6/б
                  </span>
                  {/* Маленька підказка знизу */}
                  <span className="text-[10px] sm:text-xs text-brand-gold/40 font-serif italic group-hover:text-brand-gold/60 transition-colors">
                    Відкрити на Google Картах ↗
                  </span>
                </div>
              </a>
            </div>

            {/* Кнопка запису (Для мобільних по центру, для ПК — зліва) */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="tel:+380956586855"
                className="px-8 py-3.5 rounded-md border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-background text-xs sm:text-sm uppercase tracking-[0.15em] font-serif transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg inline-block"
              >
                Записатися на консультацію
              </a>
            </div>
          </div>

          {/* ПРАВА ЧАСТИНА: Картка "Мій підхід" (Займає 5 колонок на великих екранах) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-brand-card border border-brand-gold/15 rounded-3xl p-8 sm:p-10 text-left space-y-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-serif text-brand-gold italic">
                Мій підхід
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-foreground/80 font-serif italic font-light leading-relaxed">
                <p>
                  Я працюю індивідуально. <br />
                  Кожна людина — це особливість.
                </p>
                <p>
                  Тому важливо не лише бачити симптом, а розуміти причину, яка
                  впливає на рух, поставу та загальний стан організму.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
