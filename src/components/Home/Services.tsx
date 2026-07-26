import Container from "../Container";

export default function Services() {
  return (
    <section
      id="specialization"
      className="w-full py-16 md:py-24 bg-background"
    >
      <Container className="flex flex-col items-center text-center">
        <span className="text-xs sm:text-sm text-brand-gold uppercase tracking-widest mb-2 font-serif">
          Спеціалізація
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold mb-6">
          Напрями роботи
        </h2>

        <div className="w-20 h-px bg-brand-gold/40 mb-8"></div>

        <div className="max-w-3xl mx-auto mb-16 px-4">
          {/* Збільшено розмір цитати: text-lg sm:text-xl lg:text-2xl */}
          <blockquote className="text-lg sm:text-xl lg:text-2xl text-brand-gold/90 font-serif italic font-light leading-relaxed mb-4">
            «Для мене фізична терапія — це не просто вправи. Це можливість
            допомогти людині зрозуміти своє тіло, його потреби та навчитися
            рухатися природно».
          </blockquote>
          <cite className="text-base sm:text-lg text-brand-gold/60 font-serif not-italic">
            — Лілія Каревич
          </cite>
        </div>

        {/* Grid із 4-ма напрямами */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mb-16 text-left">
          {/* Індивідуальні консультації */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-gold/30 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-gold mb-4">
                Індивідуальні консультації /
                <br />
                Онлайн консультації
              </h3>

              <div className="w-16 h-px bg-brand-gold/30 mb-6"></div>

              {/* Збільшено розмір списку: text-base sm:text-lg lg:text-xl */}
              <ul className="space-y-4 text-base sm:text-lg lg:text-xl text-brand-gold font-serif italic font-light">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Комплексна оцінка руху.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Індивідуальний план відновлення.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Персональний супровід.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Рекомендації для самостійної роботи.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Робота з дітьми */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-gold/30 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-gold mb-4">
                Робота з дітьми
              </h3>

              <div className="w-16 h-px bg-brand-gold/30 mb-6"></div>

              <ul className="space-y-4 text-base sm:text-lg lg:text-xl text-brand-gold font-serif italic font-light">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Оцінка фізичного розвитку.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Корекція постави.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Формування правильних рухових навичок.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Профілактика порушень опорно-рухового апарату.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Підтримка гармонійного розвитку дитини.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Робота з дорослими */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-gold/30 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-gold mb-4">
                Робота з дорослими
              </h3>

              <div className="w-16 h-px bg-brand-gold/30 mb-6"></div>

              <ul className="space-y-4 text-base sm:text-lg lg:text-xl text-brand-gold font-serif italic font-light">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Відновлення природного руху.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Покращення постави, балансу та координації.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Профілактика болю й перевантажень.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>
                    Підтримка функціональності тіла в різні періоди життя.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Турбота про здоров&apos;я стоп.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>
                    Профілактика ускладнень стопи при цукровому діабеті.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Відновлення після травм та оперативних втручань.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-gold/30 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-gold mb-4">
                Відновлення після пологів
              </h3>

              <div className="w-16 h-px bg-brand-gold/30 mb-6"></div>

              <ul className="space-y-4 text-base sm:text-lg lg:text-xl text-brand-gold font-serif italic font-light">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Робота з рубцем після кесаревого розтину.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Відновлення рухливості тканин.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Покращення постави та стабільності корпусу.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Відновлення функції м’язів живота.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold/60">—</span>
                  <span>Повернення до комфортної фізичної активності.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap md:justify-center items-center gap-4 md:gap-8 lg:gap-16 text-brand-gold/90 font-serif italic text-lg sm:text-xl">
          <span className="text-center">Індивідуальний підхід</span>
          <span className="hidden md:inline text-brand-gold/30">|</span>
          <span className="text-center">Персональні програми</span>
          <span className="hidden md:inline text-brand-gold/30">|</span>
          <span className="text-center">Супровід на кожному етапі</span>
        </div>
      </Container>
    </section>
  );
}
