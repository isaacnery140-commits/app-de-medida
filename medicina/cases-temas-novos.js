// Casos extras — temas novos: Psiquiatria, Dermatologia, Ortopedia, Urologia,
// Oftalmologia, Otorrino e Geriatria (conteúdo educativo — não substitui avaliação médica)
CASES.push(
  // ---------- Psiquiatria ----------
  {
    id: "depressao", esp: "Psiquiatria", dif: 1,
    titulo: "Sem vontade de nada há semanas",
    paciente: "Mulher, 35 anos",
    historia: "Há 6 semanas triste quase todo dia, perdeu o prazer nas coisas, dorme mal, sem energia e se sente culpada.",
    sinais: { PA: "118/76", FC: "72", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["TSH e hemograma normais"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Episódio depressivo maior", "Tristeza normal", "Hipotireoidismo", "Transtorno bipolar em mania"],
        c: 0, exp: "Humor deprimido e/ou perda de prazer por ≥ 2 semanas, com sintomas como sono, energia e culpa = episódio depressivo." },
      { p: "O que é obrigatório perguntar na consulta?",
        op: ["Sobre pensamentos de morte ou suicídio", "Sobre time de futebol", "Nada, só receitar", "Apenas sobre o sono"],
        c: 0, exp: "Perguntar diretamente sobre ideação suicida não aumenta o risco e é essencial para a segurança." },
      { p: "Qual tratamento inicial é adequado em depressão moderada?",
        op: ["Antidepressivo (ex.: ISRS como sertralina) + psicoterapia", "Benzodiazepínico isolado", "Antibiótico", "Só férias"],
        c: 0, exp: "ISRS e psicoterapia são primeira linha. O efeito do antidepressivo leva 2 a 4 semanas." }
    ]
  },
  {
    id: "abstinencia-alcool", esp: "Psiquiatria", dif: 2,
    titulo: "Tremendo e vendo bichos na parede",
    paciente: "Homem, 50 anos, bebe muito há anos",
    historia: "Internado por fratura há 3 dias, sem beber. Agora está agitado, suando, tremendo e diz ver insetos na parede.",
    sinais: { PA: "170/100", FC: "124", FR: "22", Temp: "38,0 °C", SatO2: "96%" },
    exames: ["Desorientado"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Delirium tremens (abstinência alcoólica grave)", "Esquizofrenia", "Ataque de pânico", "Hipoglicemia"],
        c: 0, exp: "48–96 h após parar de beber: agitação, tremor, alucinações, confusão e hiperatividade autonômica = delirium tremens." },
      { p: "Qual o tratamento principal?",
        op: ["Benzodiazepínico (ex.: diazepam)", "Haloperidol isolado", "Mais álcool", "Antibiótico"],
        c: 0, exp: "Benzodiazepínicos controlam a abstinência e previnem convulsões." },
      { p: "Que vitamina deve ser dada, antes da glicose?",
        op: ["Tiamina (vitamina B1)", "Vitamina C", "Vitamina D", "Vitamina K"],
        c: 0, exp: "Tiamina previne a encefalopatia de Wernicke, que pode ser precipitada por glicose." }
    ]
  },
  {
    id: "snm", esp: "Psiquiatria", dif: 3,
    titulo: "Febre e corpo rígido após antipsicótico",
    paciente: "Homem, 30 anos, iniciou haloperidol há 5 dias",
    historia: "Febre alta, músculos muito rígidos e confuso.",
    sinais: { PA: "165/100 (oscilando)", FC: "128", FR: "24", Temp: "40,1 °C", SatO2: "95%" },
    exames: ["CPK muito elevada", "Rigidez em 'cano de chumbo'"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Síndrome neuroléptica maligna", "Meningite", "Insolação", "Crise de ansiedade"],
        c: 0, exp: "Antipsicótico + febre + rigidez + alteração mental + instabilidade autonômica + CPK alta = síndrome neuroléptica maligna." },
      { p: "Qual a primeira medida?",
        op: ["Suspender o antipsicótico e dar suporte intensivo (resfriamento, hidratação)", "Aumentar a dose do haloperidol", "Antibiótico", "Alta"],
        c: 0, exp: "Suspender o agente, suporte em UTI. Dantrolene ou bromocriptina nos casos graves." }
    ]
  },
  {
    id: "panico", esp: "Psiquiatria", dif: 1,
    titulo: "Achou que ia morrer no ônibus",
    paciente: "Mulher, 27 anos",
    historia: "Pela terceira vez este mês teve de repente palpitação, falta de ar, formigamento e medo de morrer. Passa em 20 minutos. Tem medo de ter outra crise.",
    sinais: { PA: "125/80", FC: "88", FR: "18", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["ECG, glicemia e TSH normais"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Transtorno de pânico", "Infarto", "Asma", "Hipertireoidismo"],
        c: 0, exp: "Ataques recorrentes e inesperados, com medo de novos ataques e exames normais = transtorno de pânico." },
      { p: "Qual o tratamento de longo prazo de primeira linha?",
        op: ["ISRS + terapia cognitivo-comportamental", "Benzodiazepínico contínuo por anos", "Betabloqueador isolado", "Nada"],
        c: 0, exp: "ISRS e TCC. Benzodiazepínicos apenas por pouco tempo, pelo risco de dependência." }
    ]
  },

  // ---------- Dermatologia ----------
  {
    id: "melanoma", esp: "Dermatologia", dif: 2,
    titulo: "Pinta que mudou",
    paciente: "Homem, 55 anos, pele clara, trabalhou ao sol",
    historia: "A esposa notou que uma pinta nas costas cresceu e mudou de cor nos últimos meses.",
    sinais: { PA: "130/80", FC: "72", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Lesão assimétrica, bordas irregulares, várias cores, 9 mm"],
    perguntas: [
      { p: "Pela regra ABCDE, essa lesão é:",
        op: ["Suspeita de melanoma", "Pinta comum", "Verruga", "Picada de inseto"],
        c: 0, exp: "Assimetria, Bordas irregulares, Cores variadas, Diâmetro > 6 mm e Evolução são sinais de alerta para melanoma." },
      { p: "Qual a conduta?",
        op: ["Biópsia excisional (retirar a lesão inteira)", "Cauterizar sem biópsia", "Pomada", "Acompanhar em 2 anos"],
        c: 0, exp: "Retirar a lesão inteira com margem pequena permite medir a espessura (Breslow), que guia o tratamento." }
    ]
  },
  {
    id: "erisipela", esp: "Dermatologia", dif: 1,
    titulo: "Perna vermelha e quente",
    paciente: "Mulher, 62 anos, com micose entre os dedos",
    historia: "Febre e calafrios ontem; hoje a perna está vermelha, quente e dolorida, com borda bem marcada.",
    sinais: { PA: "130/80", FC: "100", FR: "18", Temp: "38,4 °C", SatO2: "98%" },
    exames: ["Placa vermelha brilhante, de bordas elevadas e bem definidas", "Fissuras entre os dedos do pé"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Erisipela", "Trombose venosa", "Alergia", "Gota"],
        c: 0, exp: "Placa eritematosa, quente, de bordas bem delimitadas, com febre, a partir de porta de entrada (micose) = erisipela." },
      { p: "Qual o agente e o tratamento?",
        op: ["Estreptococo — penicilina/amoxicilina (ou cefalexina)", "Fungo — fluconazol", "Vírus — aciclovir", "Nenhum — só gelo"],
        c: 0, exp: "Erisipela é causada pelo estreptococo. Tratar também a micose interdigital para evitar recorrência." }
    ]
  },
  {
    id: "escabiose", esp: "Dermatologia", dif: 1,
    titulo: "Coceira que piora à noite",
    paciente: "Menino, 9 anos, e a irmã",
    historia: "Coceira intensa que piora à noite, começou nele e depois na irmã.",
    sinais: { PA: "—", FC: "88", FR: "18", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Pequenos túneis e pápulas entre os dedos, punhos, axilas e cintura"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Escabiose (sarna)", "Dermatite atópica", "Picada de mosquito", "Catapora"],
        c: 0, exp: "Prurido noturno, vários da mesma casa e lesões em dobras e entre os dedos = escabiose." },
      { p: "Qual o tratamento?",
        op: ["Permetrina 5% (ou ivermectina) e tratar todos da casa ao mesmo tempo", "Corticoide em creme", "Antibiótico", "Só banho"],
        c: 0, exp: "Tratar todos os contatos e lavar roupas de cama e de uso em água quente." }
    ]
  },
  {
    id: "herpes-zoster", esp: "Dermatologia", dif: 1,
    titulo: "Bolhinhas em faixa num lado do corpo",
    paciente: "Mulher, 68 anos",
    historia: "Dor em queimação no lado esquerdo do tórax há 3 dias; hoje surgiram bolhinhas na mesma faixa.",
    sinais: { PA: "135/85", FC: "80", FR: "16", Temp: "37,4 °C", SatO2: "98%" },
    exames: ["Vesículas agrupadas em faixa que não passa da linha média"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Herpes-zóster (cobreiro)", "Alergia", "Infarto", "Impetigo"],
        c: 0, exp: "Dor seguida de vesículas em um dermátomo, unilateral = reativação do vírus da catapora (varicela-zóster)." },
      { p: "Qual o tratamento?",
        op: ["Antiviral (aciclovir ou valaciclovir), idealmente nas primeiras 72 h, e analgesia", "Antibiótico", "Corticoide em creme", "Nada"],
        c: 0, exp: "Antiviral precoce acelera a cicatrização e reduz complicações. Existe vacina para idosos." }
    ]
  },
  {
    id: "stevens-johnson", esp: "Dermatologia", dif: 3,
    titulo: "Bolhas e feridas na boca após remédio novo",
    paciente: "Homem, 40 anos, iniciou alopurinol há 2 semanas",
    historia: "Febre, olhos vermelhos, feridas na boca e manchas que viraram bolhas e soltam a pele.",
    sinais: { PA: "105/65", FC: "116", FR: "22", Temp: "38,9 °C", SatO2: "96%" },
    exames: ["Descolamento de pele em menos de 10% do corpo", "Lesões em mucosa oral e ocular"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Síndrome de Stevens-Johnson", "Catapora", "Queimadura solar", "Urticária"],
        c: 0, exp: "Reação grave a medicamento com febre, mucosas acometidas e descolamento de pele < 10% = Stevens-Johnson (> 30% = necrólise epidérmica tóxica)." },
      { p: "Qual a medida mais importante?",
        op: ["Suspender imediatamente o medicamento suspeito e tratar como grande queimado", "Trocar por dose menor", "Antibiótico de rotina", "Pomada de corticoide em casa"],
        c: 0, exp: "Retirar o medicamento é o principal. Cuidados em unidade de queimados ou UTI e avaliação oftalmológica." }
    ]
  },

  // ---------- Ortopedia ----------
  {
    id: "fratura-femur", esp: "Ortopedia", dif: 1,
    titulo: "Idosa caiu e não levanta",
    paciente: "Mulher, 82 anos, com osteoporose",
    historia: "Caiu em casa e não consegue apoiar a perna direita.",
    sinais: { PA: "140/85", FC: "96", FR: "18", Temp: "36,4 °C", SatO2: "96%" },
    exames: ["Perna direita mais curta e virada para fora (rotação externa)"],
    perguntas: [
      { p: "Qual a lesão mais provável?",
        op: ["Fratura do colo do fêmur (quadril)", "Entorse de joelho", "Distensão muscular", "Hérnia de disco"],
        c: 0, exp: "Idosa após queda, com membro encurtado e rodado externamente = fratura do quadril." },
      { p: "Qual a conduta habitual?",
        op: ["Cirurgia precoce (em até 24–48 h)", "Repouso no leito por meses", "Só gesso", "Fisioterapia e alta"],
        c: 0, exp: "Cirurgia precoce reduz complicações e mortalidade. Prevenir trombose e tratar a osteoporose." }
    ]
  },
  {
    id: "sindrome-compartimental", esp: "Ortopedia", dif: 3,
    titulo: "Dor demais depois do gesso",
    paciente: "Homem, 24 anos, fratura da tíbia engessada há 8 horas",
    historia: "Dor muito forte na perna que não melhora com morfina.",
    sinais: { PA: "130/80", FC: "108", FR: "20", Temp: "36,8 °C", SatO2: "98%" },
    exames: ["Dor intensa ao esticar os dedos passivamente", "Panturrilha tensa", "Formigamento no pé"],
    perguntas: [
      { p: "Qual a hipótese?",
        op: ["Síndrome compartimental", "Dor normal da fratura", "Trombose", "Infecção"],
        c: 0, exp: "Dor desproporcional, que piora ao estiramento passivo, com compartimento tenso = síndrome compartimental." },
      { p: "Qual a conduta?",
        op: ["Abrir o gesso e fazer fasciotomia de urgência", "Mais analgésico e esperar", "Elevar muito a perna e observar 24 h", "Antibiótico"],
        c: 0, exp: "Retirar curativos/gesso e fasciotomia urgente evitam necrose muscular. Não esperar o pulso sumir." }
    ]
  },
  {
    id: "cauda-equina", esp: "Ortopedia", dif: 3,
    titulo: "Dor nas costas e não consegue urinar",
    paciente: "Homem, 45 anos",
    historia: "Dor lombar forte há 3 dias. Hoje perdeu a sensibilidade na região entre as pernas e não consegue urinar.",
    sinais: { PA: "140/85", FC: "88", FR: "16", Temp: "36,6 °C", SatO2: "98%" },
    exames: ["Anestesia em sela", "Fraqueza nas duas pernas", "Retenção urinária"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Síndrome da cauda equina", "Lombalgia simples", "Pedra no rim", "Infecção urinária"],
        c: 0, exp: "Anestesia em sela, alteração urinária e fraqueza bilateral são sinais de alarme de compressão da cauda equina (ex.: hérnia volumosa)." },
      { p: "Qual a conduta?",
        op: ["Ressonância urgente e descompressão cirúrgica", "Fisioterapia", "Anti-inflamatório e alta", "Repouso por 1 mês"],
        c: 0, exp: "É emergência: a cirurgia precoce aumenta a chance de recuperar bexiga e força." }
    ]
  },
  {
    id: "ottawa", esp: "Ortopedia", dif: 1,
    titulo: "Torceu o tornozelo no futebol",
    paciente: "Rapaz, 19 anos",
    historia: "Virou o pé jogando bola. Tornozelo inchado.",
    sinais: { PA: "120/75", FC: "80", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Dor ao apertar a borda posterior do maléolo lateral", "Não consegue dar 4 passos"],
    perguntas: [
      { p: "Pelas regras de Ottawa, precisa de raio-X?",
        op: ["Sim — dor na borda posterior do maléolo e incapacidade de apoiar", "Não, nunca", "Só se doer daqui a 1 mês", "Só ressonância"],
        c: 0, exp: "Raio-X se houver dor óssea no maléolo (borda posterior ou ponta) ou incapacidade de dar 4 passos." },
      { p: "Se for só entorse, qual o tratamento inicial?",
        op: ["Proteção, gelo, compressão, elevação e analgesia, voltando a apoiar conforme a dor", "Gesso por 3 meses", "Cirurgia", "Antibiótico"],
        c: 0, exp: "Medidas iniciais e mobilização precoce, com fisioterapia se preciso." }
    ]
  },

  // ---------- Urologia ----------
  {
    id: "torcao-testicular", esp: "Urologia", dif: 2,
    titulo: "Dor súbita no testículo",
    paciente: "Rapaz, 15 anos",
    historia: "Acordou com dor muito forte no testículo esquerdo há 2 horas, com vômitos.",
    sinais: { PA: "125/80", FC: "104", FR: "18", Temp: "36,7 °C", SatO2: "99%" },
    exames: ["Testículo elevado e horizontalizado", "Reflexo cremastérico ausente"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Torção testicular", "Epididimite", "Hérnia", "Caxumba"],
        c: 0, exp: "Dor súbita em adolescente, testículo alto e horizontal e cremastérico ausente = torção." },
      { p: "Qual a conduta?",
        op: ["Cirurgia imediata (destorção e fixação)", "Antibiótico", "Gelo e esperar", "Ultrassom agendado para a semana"],
        c: 0, exp: "O tempo é crítico: até cerca de 6 horas a chance de salvar o testículo é alta. Não atrasar a cirurgia." }
    ]
  },
  {
    id: "hpb", esp: "Urologia", dif: 1,
    titulo: "Levanta muitas vezes para urinar",
    paciente: "Homem, 68 anos",
    historia: "Jato urinário fraco, demora para começar a urinar, sensação de não esvaziar e levanta 3 vezes à noite.",
    sinais: { PA: "135/80", FC: "74", FR: "16", Temp: "36,5 °C", SatO2: "98%" },
    exames: ["Toque retal: próstata aumentada, lisa, fibroelástica", "PSA compatível com o tamanho"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Hiperplasia prostática benigna", "Câncer de bexiga", "Infecção urinária", "Pedra no rim"],
        c: 0, exp: "Sintomas obstrutivos e irritativos com próstata aumentada e lisa no homem idoso = HPB." },
      { p: "Qual remédio alivia rapidamente os sintomas?",
        op: ["Alfabloqueador (ex.: tansulosina)", "Antibiótico", "Diurético", "Corticoide"],
        c: 0, exp: "Alfabloqueadores relaxam o colo vesical. Inibidores da 5-alfa-redutase (finasterida) reduzem a próstata a longo prazo." }
    ]
  },
  {
    id: "retencao-urinaria", esp: "Urologia", dif: 1,
    titulo: "Bexiga cheia e não sai nada",
    paciente: "Homem, 74 anos, tomou antialérgico para gripe",
    historia: "Não urina há 12 horas, com dor e barriga estufada embaixo.",
    sinais: { PA: "160/90", FC: "100", FR: "18", Temp: "36,6 °C", SatO2: "98%" },
    exames: ["Bexiga palpável acima do púbis (bexigoma)"],
    perguntas: [
      { p: "Qual a conduta imediata?",
        op: ["Sondagem vesical de alívio ou de demora", "Diurético", "Mais água", "Analgésico e alta"],
        c: 0, exp: "Esvaziar a bexiga alivia a dor e protege os rins." },
      { p: "Qual remédio pode ter precipitado a retenção?",
        op: ["Anti-histamínico com efeito anticolinérgico", "Vitamina C", "Paracetamol", "Soro nasal"],
        c: 0, exp: "Anticolinérgicos (antialérgicos antigos, tricíclicos) e descongestionantes pioram a retenção em quem tem HPB." }
    ]
  },

  // ---------- Oftalmologia ----------
  {
    id: "glaucoma-agudo", esp: "Oftalmologia", dif: 3,
    titulo: "Olho vermelho, dor forte e vômito",
    paciente: "Mulher, 65 anos, hipermétrope",
    historia: "Ao entrar no cinema escuro, começou dor intensa no olho direito, visão embaçada com halos coloridos e vômitos.",
    sinais: { PA: "160/90", FC: "92", FR: "18", Temp: "36,6 °C", SatO2: "98%" },
    exames: ["Olho vermelho, córnea turva", "Pupila média, sem reação à luz", "Olho duro à palpação"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Glaucoma agudo de ângulo fechado", "Conjuntivite", "Enxaqueca", "Terçol"],
        c: 0, exp: "Dor ocular intensa, olho vermelho, halos, pupila médio-fixa e pressão alta no olho = glaucoma agudo. É emergência." },
      { p: "Qual a conduta?",
        op: ["Baixar a pressão do olho com urgência (colírios e acetazolamida) e iridotomia a laser", "Colírio de antibiótico", "Óculos escuros e alta", "Compressa morna"],
        c: 0, exp: "Reduzir a pressão intraocular rápido e depois iridotomia (também no outro olho, de forma preventiva)." }
    ]
  },
  {
    id: "descolamento-retina", esp: "Oftalmologia", dif: 2,
    titulo: "Flashes de luz e uma cortina na visão",
    paciente: "Homem, 58 anos, míope forte",
    historia: "Começou a ver flashes de luz e muitos pontinhos pretos; agora tem uma 'cortina' escura no lado da visão.",
    sinais: { PA: "130/80", FC: "76", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Olho sem vermelhidão e sem dor"],
    perguntas: [
      { p: "Qual a hipótese?",
        op: ["Descolamento de retina", "Catarata", "Conjuntivite", "Olho seco"],
        c: 0, exp: "Fotopsias, moscas volantes e sombra em cortina, sem dor, são clássicos de descolamento de retina (mais comum em míopes)." },
      { p: "Qual a conduta?",
        op: ["Encaminhar com urgência ao oftalmologista para tratamento (cirurgia/laser)", "Colírio e retorno em 3 meses", "Óculos novos", "Nada"],
        c: 0, exp: "Tratamento rápido preserva a visão, sobretudo antes que a mácula descole." }
    ]
  },
  {
    id: "conjuntivite-viral", esp: "Oftalmologia", dif: 1,
    titulo: "Olho vermelho que passou para o outro",
    paciente: "Mulher, 25 anos, colega de trabalho com o mesmo quadro",
    historia: "Olho vermelho com lacrimejamento e sensação de areia; dois dias depois, o outro olho.",
    sinais: { PA: "115/75", FC: "72", FR: "16", Temp: "36,8 °C", SatO2: "99%" },
    exames: ["Secreção aquosa", "Gânglio na frente da orelha", "Visão normal, sem dor forte"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Conjuntivite viral (adenovírus)", "Glaucoma agudo", "Conjuntivite bacteriana", "Alergia a maquiagem"],
        c: 0, exp: "Secreção aquosa, contágio, bilateralização e linfonodo pré-auricular sugerem conjuntivite viral." },
      { p: "Qual a orientação?",
        op: ["Compressas frias, lágrima artificial e higiene das mãos (muito contagiosa)", "Colírio de corticoide por conta própria", "Antibiótico oral", "Tampão no olho por 1 semana"],
        c: 0, exp: "É autolimitada. Evitar corticoide sem avaliação e reforçar a higiene para não transmitir." }
    ]
  },

  // ---------- Otorrino ----------
  {
    id: "epistaxe", esp: "Otorrino", dif: 1,
    titulo: "Nariz sangrando",
    paciente: "Menino, 10 anos",
    historia: "Sangramento pelo nariz há 10 minutos, depois de mexer no nariz.",
    sinais: { PA: "—", FC: "96", FR: "18", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Sangramento pela narina direita, na parte da frente"],
    perguntas: [
      { p: "Qual a primeira medida?",
        op: ["Apertar a parte mole do nariz por 10–15 minutos, com a cabeça inclinada para frente", "Inclinar a cabeça para trás", "Colocar algodão e deitar", "Assoar com força"],
        c: 0, exp: "Compressão contínua da asa nasal com a cabeça para frente resolve a maioria. Para trás, o sangue escorre para a garganta." },
      { p: "Onde sangra na maioria das epistaxes anteriores?",
        op: ["Plexo de Kiesselbach, no septo anterior", "Artéria carótida", "Seio frontal", "Ouvido"],
        c: 0, exp: "A área de Kiesselbach, no septo anterior, é a fonte da maioria dos sangramentos nasais." }
    ]
  },
  {
    id: "faringite-strepto", esp: "Otorrino", dif: 1,
    titulo: "Garganta com pus e febre",
    paciente: "Menina, 9 anos",
    historia: "Dor de garganta forte e febre há 1 dia, sem tosse nem coriza.",
    sinais: { PA: "—", FC: "110", FR: "20", Temp: "38,9 °C", SatO2: "99%" },
    exames: ["Amígdalas aumentadas com pus", "Gânglios do pescoço doloridos", "Teste rápido para estreptococo positivo"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Faringoamigdalite estreptocócica", "Faringite viral", "Mononucleose", "Difteria"],
        c: 0, exp: "Febre, exsudato, adenomegalia cervical dolorosa e ausência de tosse, com teste rápido positivo = estreptococo do grupo A." },
      { p: "Qual o tratamento e por que tratar?",
        op: ["Penicilina benzatina ou amoxicilina, para prevenir febre reumática", "Só analgésico", "Antiviral", "Corticoide"],
        c: 0, exp: "O antibiótico alivia mais rápido e previne febre reumática." }
    ]
  },
  {
    id: "vppb", esp: "Otorrino", dif: 2,
    titulo: "Tudo gira ao virar na cama",
    paciente: "Mulher, 60 anos",
    historia: "Vertigem forte por menos de 1 minuto sempre que vira na cama ou olha para cima. Sem perda de audição.",
    sinais: { PA: "130/80", FC: "76", FR: "16", Temp: "36,5 °C", SatO2: "98%" },
    exames: ["Manobra de Dix-Hallpike provoca vertigem e nistagmo", "Exame neurológico normal"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Vertigem posicional paroxística benigna", "AVC", "Doença de Ménière", "Labirintite viral"],
        c: 0, exp: "Crises curtas desencadeadas por mudar a posição da cabeça, com Dix-Hallpike positivo = VPPB (cristais soltos no labirinto)." },
      { p: "Qual o tratamento mais eficaz?",
        op: ["Manobra de reposição (Epley)", "Antibiótico", "Cirurgia", "Remédio para vertigem por meses"],
        c: 0, exp: "A manobra de Epley recoloca os cristais no lugar e resolve a maioria dos casos." }
    ]
  },

  // ---------- Geriatria ----------
  {
    id: "delirium", esp: "Geriatria", dif: 2,
    titulo: "Avó confusa no hospital",
    paciente: "Mulher, 84 anos, internada por pneumonia",
    historia: "Desde ontem à noite está confusa, desatenta, ora agitada, ora sonolenta. Antes era lúcida.",
    sinais: { PA: "130/80", FC: "96", FR: "20", Temp: "37,8 °C", SatO2: "93%" },
    exames: ["Alteração de atenção que flutua ao longo do dia"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Delirium", "Demência", "Depressão", "Esquizofrenia"],
        c: 0, exp: "Início agudo, curso flutuante e desatenção em idoso doente = delirium. A demência é lenta e progressiva." },
      { p: "Qual a abordagem principal?",
        op: ["Tratar a causa e usar medidas não farmacológicas (família, óculos, orientação, sono)", "Amarrar a paciente", "Benzodiazepínico de rotina", "Ignorar"],
        c: 0, exp: "Buscar e tratar causas (infecção, hipóxia, remédios, dor, retenção urinária) e reorientar. Antipsicótico só se agitação perigosa." }
    ]
  },
  {
    id: "quedas-idoso", esp: "Geriatria", dif: 1,
    titulo: "Idoso caindo em casa",
    paciente: "Homem, 81 anos",
    historia: "Caiu 3 vezes em 2 meses. Usa diazepam para dormir há anos, mais 9 outros remédios.",
    sinais: { PA: "130/80 deitado e 105/70 em pé", FC: "78", FR: "16", Temp: "36,4 °C", SatO2: "97%" },
    exames: ["Hipotensão postural", "Visão reduzida"],
    perguntas: [
      { p: "Qual remédio é o principal suspeito e deve ser revisto?",
        op: ["Diazepam (benzodiazepínico de longa ação)", "Vitamina D", "Protetor solar", "Colírio lubrificante"],
        c: 0, exp: "Benzodiazepínicos, especialmente de longa ação, aumentam quedas e confusão em idosos (critérios de Beers). Retirar aos poucos." },
      { p: "Qual outra medida reduz quedas?",
        op: ["Rever todos os remédios, exercício de força e equilíbrio e adaptar a casa", "Repouso na cama", "Proibir de andar", "Mais remédios para dormir"],
        c: 0, exp: "Desprescrição, fisioterapia/exercício, correção visual e adaptação do ambiente reduzem quedas." }
    ]
  }
);
