export default function Home() {
  const highlights = [
    {
      title: "Crescimento consistente",
      description:
        "Base de usuários ativos cresceu 27% nos últimos 12 meses, impulsionada por parcerias com coletivos de design independentes.",
    },
    {
      title: "Engajamento elevado",
      description:
        "Sessões semanais médias subiram para 4,2, sinalizando valor claro na curadoria de desafios e mentorias em tempo real.",
    },
    {
      title: "Conversão premium",
      description:
        "A taxa de upgrade para planos pagos atingiu 5,8%, refletindo apetite por recursos avançados de colaboração.",
    },
  ];

  const metrics = [
    { label: "Designers cadastrados", value: "12.450" },
    { label: "Estúdios parceiros", value: "86" },
    { label: "Desafios por mês", value: "145" },
    { label: "Taxa de retenção 90d", value: "82%" },
  ];

  const personas = [
    {
      role: "Designer independente",
      pain: "Busca visibilidade e feedback especializado sem depender de plataformas genéricas.",
      opportunity:
        "Design Arena oferece desafios sob demanda com feedback estruturado e mentores certificados.",
    },
    {
      role: "Agência boutique",
      pain: "Dificuldade em validar talentos rapidamente para projetos pontuais.",
      opportunity:
        "Matchmaking baseado em portfólios e avaliações reduz tempo de contratação em até 40%.",
    },
    {
      role: "Marca em lançamento",
      pain: "Necessidade de squads criativos ágeis para campanhas regionais.",
      opportunity:
        "Modelos de squads montados pela plataforma reduzem ramp-up e oferecem métricas centralizadas.",
    },
  ];

  const swot = [
    {
      title: "Forças",
      items: [
        "Curadoria de mentores com certificações reconhecidas",
        "Infraestrutura de sprints colaborativos em tempo real",
        "Comunidade ativa com eventos híbridos recorrentes",
      ],
      tone: "text-emerald-500",
    },
    {
      title: "Fraquezas",
      items: [
        "Dependência alta de moderadores para manter qualidade dos desafios",
        "Biblioteca de recursos avançados ainda limitada em língua portuguesa",
        "Onboarding técnico complexo para novos mentores",
      ],
      tone: "text-rose-500",
    },
    {
      title: "Oportunidades",
      items: [
        "Expansão para mercados hispânicos com conteúdo localizado",
        "Parcerias com universidades para programas de aceleração",
        "Licenciamento de ferramentas white-label para hubs de inovação",
      ],
      tone: "text-sky-500",
    },
    {
      title: "Ameaças",
      items: [
        "Entrada de players globais com capital robusto",
        "Mudanças na política de APIs das principais ferramentas de design",
        "Saturação de comunidades gratuitas oferecendo desafios similares",
      ],
      tone: "text-amber-500",
    },
  ];

  const roadmap = [
    {
      name: "Expansão de conteúdo regional",
      impact: "Alta",
      effort: "Médio",
      details:
        "Traduzir biblioteca e workshops para espanhol e inglês, priorizando módulos de UX Research.",
    },
    {
      name: "Automação de matchmaking",
      impact: "Alta",
      effort: "Alto",
      details:
        "Implementar algoritmo que combina perfis com desafios em tempo real com base em competências verificadas.",
    },
    {
      name: "API para parceiros corporativos",
      impact: "Médio",
      effort: "Médio",
      details:
        "Permitir ingestão de briefs diretamente de plataformas de gestão de projetos, reduzindo atrito operacional.",
    },
    {
      name: "Programa de embaixadores",
      impact: "Médio",
      effort: "Baixo",
      details:
        "Selecionar líderes regionais para ativar eventos locais e atrair novos talentos.",
    },
  ];

  const recommendations = [
    "Priorizar lançamento do módulo de matchmaking inteligente no próximo trimestre para sustentar crescimento premium.",
    "Firmar acordo piloto com duas universidades de design para geração de pipeline de novos talentos.",
    "Investir em conteúdos gravados com especialistas internacionais para ampliar percepção de autoridade.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 lg:px-12 lg:py-20">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Relatório Estratégico
            </span>
            <span className="text-sm text-slate-300/80">Atualização Q2 2024</span>
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Plataforma Design Arena — Diagnóstico e Oportunidades
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-slate-300">
              Avaliação holística da performance, experiência de usuários-chave e
              direcionadores de crescimento para a comunidade colaborativa de
              design Design Arena.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/40"
              >
                <h2 className="text-base font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-slate-300/80">{item.description}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white">Visão Geral</h2>
            <p className="mt-3 text-sm text-slate-300/80">
              Design Arena é uma plataforma latino-americana que conecta designers,
              estúdios e marcas por meio de desafios criativos guiados por mentores.
              A proposta central combina comunidade, formação contínua e geração de
              negócios em um ecossistema único.
            </p>
            <p className="mt-3 text-sm text-slate-300/80">
              O modelo atual se apoia em três pilares: desafios pagos com feedback
              ao vivo, squads customizados para demandas empresariais e assinatura
              premium com recursos avançados de documentação e networking.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center"
              >
                <p className="text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Personas-chave</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {personas.map((persona) => (
              <article
                key={persona.role}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{persona.role}</h3>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-300">
                    Dor
                  </p>
                  <p className="mt-1 text-sm text-slate-300/80">{persona.pain}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    Oportunidade
                  </p>
                  <p className="mt-1 text-sm text-slate-300/80">
                    {persona.opportunity}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Jornada do Usuário</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                step: "1. Descoberta e onboarding",
                detail:
                  "Usuário chega via campanhas em redes criativas, completa onboarding gamificado e acessa trilhas iniciais.",
              },
              {
                step: "2. Engajamento em desafios",
                detail:
                  "Participa de sprints semanais com mentorias ao vivo, recebendo feedback estruturado e pontos de reputação.",
              },
              {
                step: "3. Consolidação de portfólio",
                detail:
                  "Organiza entregáveis dentro da plataforma ou integra com Behance e Figma, gerando histórico validado.",
              },
              {
                step: "4. Monetização e networking",
                detail:
                  "Conecta-se a estúdios e marcas via squads ou briefs diretos, ampliando renda e relacionamentos profissionais.",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <p className="text-sm font-semibold text-emerald-300">
                  {phase.step}
                </p>
                <p className="mt-2 text-sm text-slate-300/80">{phase.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Análise SWOT</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {swot.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <h3 className={`text-lg font-semibold ${block.tone}`}>
                  {block.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300/80">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Roadmap Prioritário</h2>
          <div className="mt-6 grid gap-5">
            {roadmap.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <div className="flex gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    <span>Impacto: {item.impact}</span>
                    <span>Esforço: {item.effort}</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-300/80">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-400/50 bg-emerald-400/10 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">
            Recomendações Finais
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-emerald-50/90">
            {recommendations.map((rec) => (
              <li key={rec} className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-300" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-emerald-200/80">
            Preparado por: Núcleo de Pesquisa e Estratégia • Maio 2024
          </p>
        </section>
      </div>
    </div>
  );
}
