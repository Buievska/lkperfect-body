import Container from "../Container";

export default function Manifesto() {
  return (
    <section className="w-full py-20 md:py-32 bg-brand-card border-t border-brand-gold/5">
      <Container className="flex flex-col items-center text-center">
        <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-[0.2em] mb-3 font-serif">
          Мій маніфест спеціаліста
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight max-w-2xl mb-10 md:mb-14">
          Більше, ніж просто вправи
        </h2>

        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <p className="block lg:hidden text-lg sm:text-xl text-brand-gold/90 font-serif italic font-light leading-relaxed mb-6">
            «Я вірю, що кожне тіло має великий потенціал до відновлення, якщо
            навчитися його слухати й розуміти. Моя робота — не лише про вправи.
            Вона про розвиток і повернення довіри до власного тіла. Я допомагаю
            дітям і дорослим зрозуміти причини труднощів, відновити природні
            можливості та відчути впевненість у своєму тілі. Для мене важливо не
            просто усунути симптом, а допомогти людині жити активніше, легше й
            комфортніше.»
          </p>

          <p className="hidden lg:block text-2xl lg:text-3xl lg:leading-[1.6] text-brand-gold/90 font-serif italic font-light">
            Я вірю, що кожне тіло має великий потенціал до відновлення, якщо
            навчитися його слухати й розуміти.
            <br />
            Моя робота — не лише про вправи. Вона про розвиток і повернення
            довіри до власного тіла.
            <br />Я допомагаю дітям і дорослим зрозуміти причини труднощів,
            відновити природні можливості та відчути впевненість у своєму тілі.
            <br />
            Для мене важливо не просто усунути симптом, а допомогти людині жити
            активніше, легше й комфортніше.
          </p>

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
