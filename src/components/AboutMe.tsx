import Balance from "react-wrap-balancer";

export function AboutMe() {
  return (
    <section className="max-w-[786px] mx-auto p-6 py-32">
      <h2 className="text-3xl text-secondary font-semibold mb-10 tracking-wide">
        <Balance>
          Olá! Sou o Gusta Oliveira, Desenvolvedor Web e Designer de UX
        </Balance>
      </h2>
      <div className="text-black/80 text-xl space-y-6">
        <p>
          Sou um entusiasta da tecnologia desde muito cedo e, atualmente, aos 19
          anos, estou cursando Análise e Desenvolvimento de Sistemas. No
          entanto, minha paixão vai além disso! Também atuo como Desenvolvedor
          Fullstack e Designer de Experiências Digitais.
        </p>
        <p>
          Desde a infância, fui fascinado pela tecnologia e a curiosidade em
          entender como as coisas funcionam nunca me abandonou. Hoje, meu
          principal objetivo é aprimorar meus conhecimentos em programação,
          desenvolvimento de sistemas e design de interfaces.
        </p>
        <p>
          Como Desenvolvedor Fullstack e Designer de UX, tenho a habilidade de
          transformar ideias em experiências digitais incríveis. Minha expertise
          em design me permite criar interfaces elegantes e usáveis. Meu
          trabalho resulta em produtos digitais que cativam, simplificam e
          conectam pessoas, proporcionando uma experiência inesquecível!
        </p>
        <p>
          Sinto-me entusiasmado com as oportunidades que surgem para
          compartilhar meus conhecimentos e contribuir em projetos empolgantes.
          Estou em constante jornada de aprendizado e evolução, buscando
          aperfeiçoar minhas habilidades técnicas e expandir meu conhecimento
          pessoal na área em constante desenvolvimento da tecnologia.
        </p>
      </div>
    </section>
  );
}
