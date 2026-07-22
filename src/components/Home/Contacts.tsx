import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../Container";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="w-full py-20 md:py-28 bg-background border-t border-brand-gold/5"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-7 flex flex-col space-y-8 sm:space-y-10 text-left">
            <div className="space-y-3">
              <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-[0.2em] font-serif block">
                Контакти та бронювання
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-gold leading-tight">
                Записатися на <br /> прийом
              </h2>

              <div className="w-16 h-px bg-brand-gold/30 pt-1"></div>
            </div>

            <div className="space-y-6">
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

                  <span className="text-[10px] sm:text-xs text-brand-gold/40 font-serif italic group-hover:text-brand-gold/60 transition-colors">
                    Відкрити на Google Картах
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="tel:+380956586855"
                className="px-8 py-3.5 rounded-md border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-background text-xs sm:text-sm uppercase tracking-[0.15em] font-serif transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg inline-block"
              >
                Записатися на консультацію
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="bg-brand-card border border-brand-gold/15 rounded-3xl p-8 sm:p-10 text-left space-y-6 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-serif text-brand-gold italic">
                Мій підхід
              </h3>

              {/* Збільшено розмір тексту: text-base sm:text-lg lg:text-xl */}
              <div className="space-y-4 text-base sm:text-lg lg:text-xl text-foreground/90 font-serif italic font-light leading-relaxed">
                <p>
                  Кожна людина унікальна. <br />
                  Саме тому я працюю враховуючи вік, особливості розвитку,
                  спосіб життя та потреби кожного.
                </p>
                <p>
                  Я прагну знайти не лише прояв проблеми, а й її причину, адже
                  саме це допомагає досягти стійкого результату.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
