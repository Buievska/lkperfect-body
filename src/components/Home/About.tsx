import Image from "next/image";
import Container from "../Container";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-brand-card overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">
          {/* Фото */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start order-1 lg:order-1 lg:sticky lg:top-8">
            <div className="relative w-full max-w-95 sm:max-w-105 p-3 sm:p-4 rounded-2xl border border-brand-gold/30 bg-background">
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

          {/* Текстовий блок */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left space-y-8 order-2 lg:order-2">
            {/* Вітання та інформація про Perfect Body LK */}
            <div className="space-y-4 w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight">
                Ласкаво запрошую до <br />
                <span className="italic font-light">Perfect Body LK</span>
              </h2>

              <div className="w-20 h-px bg-brand-gold/60 my-4"></div>

              {/* Збільшено розмір тексту: text-base sm:text-lg lg:text-xl */}
              <div className="space-y-4 text-base sm:text-lg lg:text-xl text-foreground/95 font-serif italic font-light leading-relaxed">
                <p>
                  Вітаю! Я рада бачити вас на моїй сторінці. <br />Я створила
                  Perfect Body LK для людей, які хочуть краще зрозуміти своє
                  тіло, відновити природний рух і навчитися піклуватися про себе
                  свідомо.
                </p>

                <p className="text-brand-gold/90">
                  Тут ви знайдете: зрозумілі пояснення про роботу тіла,
                  практичні рекомендації, засновані на сучасних знаннях і
                  багаторічному досвіді, інформацію про фізичний розвиток дітей,
                  поради щодо відновлення після травм і функціональних порушень,
                  а також матеріали про профілактику та турботу про
                  здоров&apos;я.
                </p>
              </div>
            </div>

            {/* Секція "Про мене" */}
            <div className="space-y-4 w-full pt-4 border-t border-brand-gold/15">
              <span className="text-xs sm:text-sm text-brand-gold/60 uppercase tracking-[0.2em] font-serif">
                Про мене
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif text-brand-gold">
                Лілія Каревич
              </h3>

              {/* Збільшено розмір тексту: text-base sm:text-lg lg:text-xl */}
              <div className="space-y-4 text-base sm:text-lg lg:text-xl text-foreground/95 font-serif italic font-light leading-relaxed">
                <p>
                  Я спеціаліст із фізичної терапії та реабілітації. Але перш за
                  все я людина, яка щиро вірить у можливості людського тіла. Моя
                  професія для мене — це не просто робота. Це покликання, яке
                  стало частиною мого життя.
                </p>

                <p>
                  Протягом багатьох років я працювала з дітьми, дорослими та
                  людьми, які потребували особливої підтримки. Мій професійний
                  досвід охоплює роботу в медичних і реабілітаційних закладах,
                  зокрема в хоспісі, де я ще глибше усвідомила цінність людської
                  гідності, уважності та індивідуального підходу.
                </p>

                {/* Збільшено цитату: text-lg sm:text-xl lg:text-2xl */}
                <blockquote className="p-4 sm:p-6 my-4 rounded-xl bg-background/50 border-l-2 border-brand-gold/60 text-brand-gold/90 text-lg sm:text-xl lg:text-2xl font-serif italic">
                  «Саме там я зрозуміла одну важливу річ: за кожним діагнозом
                  стоїть людина. Людина зі своїми мріями, страхами, надіями та
                  бажанням жити без болю й обмежень».
                </blockquote>

                <p>
                  Цей досвід навчив мене не поспішати з висновками, уважно
                  слухати, бачити не лише симптоми, а й причини. Адже тіло
                  завжди говорить з нами — потрібно лише навчитися його
                  розуміти.
                </p>

                <p>
                  Сьогодні я допомагаю дітям і дорослим відновлювати природний
                  рух, покращувати поставу, розвивати правильні рухові навички
                  та знаходити рішення, які підходять саме ім.
                </p>

                <p>
                  Я переконана, що фізична терапія — це не лише комплекс вправ.
                  Це шлях до кращої якості життя, свободи та впевненості. У
                  своїй роботі я поєдную професійні знання, практичний досвід i
                  постійне навчання. Та найважливішим завжди залишається людина,
                  яка приходить до мене за допомогою.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
