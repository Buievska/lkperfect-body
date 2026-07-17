import Image from "next/image";
import Container from "../Container";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-brand-card overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative w-full max-w-380px sm:max-w-420px p-3 sm:p-4 rounded-2xl border border-brand-gold/30 bg-background">
              <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden bg-brand-card flex items-center justify-center">
                <Image
                  src="/about-me.jpg"
                  alt="Лілія Каревич"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left space-y-6 order-2 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight">
              Ласкаво запрошую до <br />
              <span className="italic font-light text-white">
                Perfect Body LK
              </span>
            </h2>

            <div className="w-20 h-px bg-brand-gold/60"></div>

            <div className="space-y-4 text-base sm:text-lg text-foreground/90 font-serif italic font-light leading-relaxed">
              <p>
                Вітаю. <br />
                Я рада бачити вас на моїй сторінці. <br />Я створила цей простір
                для тих, хто хоче краще зрозуміти себе, знайти відповіді на
                важливі запитання та навчитися рухатися природно.
              </p>

              <p className="text-brand-gold/90">
                Тут ви знайдете прості пояснення, практичні поради, рекомендації
                та інформацію про здоровий рух, розвиток дітей, відновлення та
                турботу про своє тіло.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
