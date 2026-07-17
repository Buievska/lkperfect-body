import Image from "next/image";
import Container from "../Container";

export default function About() {
  return (
    // Додаємо id="about" для плавного скролу з хедера
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-brand-card overflow-hidden"
    >
      <Container>
        {/* Грід: на мобільних фото зверху (order-1), на десктопі фото зліва (lg:order-1), а текст справа (lg:order-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
          {/* ================= ЛІВА КОЛОНКА: ФОТО ================= */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start order-1 lg:order-1">
            {/* 
              Тонка золота декоративна рамка.
              Використовуємо нові лаконічні класи максимальної ширини v4: max-w-380px та sm:max-w-420px 
            */}
            <div className="relative w-full max-w-380px sm:max-w-420px p-3 sm:p-4 rounded-2xl border border-brand-gold/30 bg-background">
              {/* 
                Внутрішній контейнер під фотографію.
                Клас aspect-[3/4] тепер скорочено до красивого aspect-3/4
              */}
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

          {/* ================= ПРАВА КОЛОНКА: ТЕКСТ ================= */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left space-y-6 order-2 lg:order-2">
            {/* Заголовок секції */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight">
              Ласкаво запрошую до <br />
              <span className="italic font-light text-white">
                Perfect Body LK
              </span>
            </h2>

            {/* Тонка золота лінія під заголовком (клас h-[1px] оптимізовано до h-px) */}
            <div className="w-20 h-px bg-brand-gold/60"></div>

            {/* Опис */}
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
