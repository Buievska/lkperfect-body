import Container from "../Container";

export default function Manifesto() {
  return (
    <section className="w-full py-20 md:py-32 bg-brand-card border-t border-brand-gold/5">
      <Container className="flex flex-col items-center text-center">
        {/* Маленький надзаголовок */}
        <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-[0.2em] mb-3 font-serif">
          Мій маніфест спеціаліста
        </span>

        {/* Головний заголовок блоку */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight max-w-2xl mb-10 md:mb-14">
          Більше, ніж просто вправи
        </h2>

        {/* Контейнер для цитати маніфесту */}
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Текст для мобільних та планшетів (з лапками) */}
          <p className="block lg:hidden text-lg sm:text-xl text-brand-gold/90 font-serif italic font-light leading-relaxed mb-6">
            «Я вірю, що кожне тіло має здатність до відновлення, якщо його
            зрозуміти. У своїй роботі я допомагаю дітям і дорослим не просто
            виконувати вправи, а навчитися розуміти свої потреби. Для мене
            важливо не лише покращити рух, а й допомогти людині змінити своє
            життя — показати, що тіло має можливості.»
          </p>

          {/* Текст для десктопів (великий, без лапок, відповідно до макета) */}
          <p className="hidden lg:block text-2xl lg:text-3xl lg:leading-[1.6] text-brand-gold/90 font-serif italic font-light">
            Я вірю, що кожне тіло має здатність до відновлення, якщо його
            зрозуміти.
            <br />
            У своїй роботі я допомагаю дітям і дорослим не просто виконувати
            вправи, а навчитися розуміти свої потреби.
            <br />
            Для мене важливо не лише покращити рух, а й допомогти людині змінити
            своє життя — показати, що тіло має можливості.
          </p>

          {/* Підпис автора — показуємо тільки на мобільних та планшетах, як на твоїх скриншотах */}
          <div className="lg:hidden mt-8">
            <span className="text-base sm:text-lg text-brand-gold/60 font-serif italic font-light">
              — Лілія Каревич
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
