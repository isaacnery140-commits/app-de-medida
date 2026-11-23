// Casos extras — Cirurgia, Emergência, Toxicologia, Pediatria, Obstetrícia e Ginecologia
// (conteúdo educativo — não substitui avaliação médica)
CASES.push(
  // ---------- Cirurgia ----------
  {
    id: "obstrucao-intestinal", esp: "Cirurgia", dif: 2,
    titulo: "Barriga estufada e sem soltar gases",
    paciente: "Mulher, 60 anos, operou o útero há 10 anos",
    historia: "Cólicas na barriga, vômitos e não evacua nem solta gases há 2 dias.",
    sinais: { PA: "120/75", FC: "104", FR: "20", Temp: "37,2 °C", SatO2: "97%" },
    exames: ["Abdome distendido e timpânico", "Radiografia: alças dilatadas com níveis hidroaéreos"],
    perguntas: [
      { p: "Qual a causa mais provável?",
        op: ["Obstrução do intestino delgado por bridas (aderências)", "Gastrite", "Apendicite", "Pedra na vesícula"],
        c: 0, exp: "Cirurgia abdominal prévia + cólica, vômitos, distensão e parada de gases = obstrução por bridas, a causa mais comum." },
      { p: "Sem sinais de sofrimento de alça, qual o tratamento inicial?",
        op: ["Jejum, sonda nasogástrica aberta e hidratação venosa", "Laxante forte", "Alta com dieta leve", "Antibiótico oral"],
        c: 0, exp: "Descompressão e hidratação resolvem muitos casos. Febre, dor contínua ou peritonite indicam cirurgia." }
    ]
  },
  {
    id: "ulcera-perfurada", esp: "Cirurgia", dif: 2,
    titulo: "Dor de repente, barriga dura como tábua",
    paciente: "Homem, 50 anos, toma anti-inflamatório todo dia para dor nas costas",
    historia: "Dor muito forte e súbita no alto da barriga, que se espalhou. Não consegue se mexer.",
    sinais: { PA: "100/60", FC: "116", FR: "24", Temp: "37,6 °C", SatO2: "96%" },
    exames: ["Abdome em tábua", "Radiografia em pé: ar embaixo do diafragma (pneumoperitônio)"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Úlcera péptica perfurada", "Pancreatite", "Infarto", "Cólica renal"],
        c: 0, exp: "Dor súbita, abdome em tábua (peritonite) e pneumoperitônio em usuário de AINE = úlcera perfurada." },
      { p: "Qual o tratamento?",
        op: ["Cirurgia de urgência, antibiótico e IBP", "Antiácido e alta", "Endoscopia eletiva", "Só observação"],
        c: 0, exp: "Perfuração com peritonite é cirúrgica: fecha-se a úlcera e lava-se a cavidade." }
    ]
  },
  {
    id: "hernia-estrangulada", esp: "Cirurgia", dif: 2,
    titulo: "Caroço na virilha que não volta",
    paciente: "Homem, 66 anos, com hérnia inguinal conhecida",
    historia: "A hérnia saiu ao fazer força e não volta mais. Dor forte há 8 horas, vômitos.",
    sinais: { PA: "130/85", FC: "110", FR: "20", Temp: "37,9 °C", SatO2: "97%" },
    exames: ["Abaulamento inguinal tenso, vermelho e muito doloroso, irredutível"],
    perguntas: [
      { p: "Qual a situação?",
        op: ["Hérnia encarcerada com sinais de estrangulamento", "Hérnia simples", "Linfonodo inflamado", "Distensão muscular"],
        c: 0, exp: "Hérnia irredutível, com dor intensa, hiperemia, febre e vômitos sugere estrangulamento (sofrimento da alça)." },
      { p: "Qual a conduta?",
        op: ["Cirurgia de urgência", "Forçar a redução repetidamente", "Agendar cirurgia em 3 meses", "Usar cinta"],
        c: 0, exp: "Estrangulamento é emergência: cirurgia para avaliar a alça e corrigir a hérnia." }
    ]
  },
  {
    id: "diverticulite", esp: "Cirurgia", dif: 2,
    titulo: "Dor do lado esquerdo baixo",
    paciente: "Mulher, 68 anos",
    historia: "Dor no lado esquerdo e baixo da barriga há 3 dias, com febre baixa.",
    sinais: { PA: "130/80", FC: "96", FR: "18", Temp: "38,0 °C", SatO2: "98%" },
    exames: ["Dor à palpação na fossa ilíaca esquerda", "Leucocitose"],
    perguntas: [
      { p: "Qual a hipótese principal?",
        op: ["Diverticulite aguda", "Apendicite", "Gastrite", "Pedra na vesícula"],
        c: 0, exp: "Idoso com dor em fossa ilíaca esquerda e febre: diverticulite (a 'apendicite do lado esquerdo')." },
      { p: "Qual exame confirma e avalia complicações?",
        op: ["Tomografia de abdome", "Colonoscopia imediata", "Endoscopia alta", "Raio-X de tórax"],
        c: 0, exp: "A TC confirma e mostra abscesso ou perfuração. Colonoscopia é evitada na fase aguda e feita depois." }
    ]
  },
  {
    id: "isquemia-mesenterica", esp: "Cirurgia", dif: 3,
    titulo: "Dor forte com barriga mole",
    paciente: "Homem, 75 anos, com fibrilação atrial sem anticoagulante",
    historia: "Dor abdominal fortíssima há 4 horas.",
    sinais: { PA: "140/85", FC: "112 (irregular)", FR: "22", Temp: "36,9 °C", SatO2: "95%" },
    exames: ["Abdome mole e pouco doloroso à palpação", "Lactato elevado"],
    perguntas: [
      { p: "Qual a hipótese?",
        op: ["Isquemia mesentérica aguda (embolia)", "Gastrite", "Constipação", "Cólica renal"],
        c: 0, exp: "Dor desproporcional ao exame físico em paciente com fibrilação atrial = embolia mesentérica até prova em contrário." },
      { p: "Qual exame fazer com urgência?",
        op: ["Angiotomografia de abdome", "Ultrassom eletivo", "Endoscopia", "Colonoscopia"],
        c: 0, exp: "Angiotomografia confirma. O tratamento (revascularização e retirada de alça morta) é urgente." }
    ]
  },

  // ---------- Emergência ----------
  {
    id: "trauma-abcde", esp: "Emergência", dif: 1,
    titulo: "Chegou o politraumatizado",
    paciente: "Homem, 30 anos, capotou o carro",
    historia: "Chegou na maca, gemendo, com sangue no rosto.",
    sinais: { PA: "110/70", FC: "110", FR: "24", Temp: "36,2 °C", SatO2: "93%" },
    exames: ["Ainda sem exame detalhado"],
    perguntas: [
      { p: "Qual a primeira prioridade no atendimento ao trauma?",
        op: ["Via aérea com proteção da coluna cervical", "Raio-X das pernas", "Sutura do rosto", "Colher exames de sangue"],
        c: 0, exp: "Pelo ABCDE: A (via aérea + coluna cervical), B (respiração), C (circulação e hemorragia), D (neurológico), E (exposição)." },
      { p: "Glasgow = 7. Qual a conduta para a via aérea?",
        op: ["Intubação orotraqueal (via aérea definitiva)", "Só oxigênio por cateter", "Esperar acordar", "Dar sedativo e observar"],
        c: 0, exp: "Glasgow ≤ 8 indica via aérea definitiva pelo risco de perder a proteção da via aérea." }
    ]
  },
  {
    id: "queimadura", esp: "Emergência", dif: 2,
    titulo: "Queimadura com álcool",
    paciente: "Homem adulto, 70 kg",
    historia: "Queimou-se ao acender churrasqueira com álcool. Queimaduras de 2º e 3º grau no braço direito inteiro e na frente do tronco.",
    sinais: { PA: "120/80", FC: "112", FR: "22", Temp: "36,6 °C", SatO2: "97%" },
    exames: ["Bolhas e áreas brancas e indolores"],
    perguntas: [
      { p: "Pela regra dos 9, qual a superfície queimada?",
        op: ["27% (braço 9% + frente do tronco 18%)", "9%", "18%", "45%"],
        c: 0, exp: "No adulto: cada membro superior 9%, frente do tronco 18%, costas 18%, cada membro inferior 18%, cabeça 9%, períneo 1%." },
      { p: "Qual medida é essencial nas primeiras horas em queimadura extensa?",
        op: ["Reposição volêmica venosa guiada por fórmula (ex.: Parkland) e pela diurese", "Pasta de dente nas lesões", "Gelo direto por 1 hora", "Antibiótico oral de rotina"],
        c: 0, exp: "Grandes queimados perdem muito líquido: hidratação venosa com cristaloide, ajustada pela diurese. Nada de gelo ou receitas caseiras." }
    ]
  },
  {
    id: "pcr-assistolia", esp: "Emergência", dif: 2,
    titulo: "Parada com linha reta no monitor",
    paciente: "Mulher, 80 anos, internada",
    historia: "Encontrada sem responder, sem respirar e sem pulso.",
    sinais: { PA: "—", FC: "sem pulso", FR: "ausente", Temp: "—", SatO2: "—" },
    exames: ["Monitor: assistolia (confirmada em mais de uma derivação)"],
    perguntas: [
      { p: "Deve-se dar choque (desfibrilar)?",
        op: ["Não — assistolia não é ritmo chocável", "Sim, imediatamente", "Sim, com carga baixa", "Só se for idoso"],
        c: 0, exp: "Assistolia e atividade elétrica sem pulso não são chocáveis. A conduta é RCP de qualidade." },
      { p: "Qual medicação deve ser dada o quanto antes?",
        op: ["Adrenalina 1 mg a cada 3–5 minutos", "Amiodarona", "Atropina", "Bicarbonato de rotina"],
        c: 0, exp: "Adrenalina precoce nos ritmos não chocáveis e busca das causas reversíveis (5 Hs e 5 Ts)." }
    ]
  },
  {
    id: "tce", esp: "Emergência", dif: 2,
    titulo: "Bateu a cabeça e piorou depois",
    paciente: "Homem, 22 anos",
    historia: "Bateu a cabeça numa briga, desmaiou, acordou e ficou bem. Horas depois ficou sonolento e com dor de cabeça forte.",
    sinais: { PA: "170/90", FC: "56", FR: "12", Temp: "36,6 °C", SatO2: "96%" },
    exames: ["Pupila direita dilatada", "Tomografia: coleção em forma de lente biconvexa"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Hematoma extradural (epidural)", "Concussão leve", "Hematoma subdural crônico", "Enxaqueca"],
        c: 0, exp: "Desmaio, intervalo lúcido e piora, com imagem biconvexa (geralmente por lesão da artéria meníngea média) = hematoma extradural." },
      { p: "PA alta, FC baixa e respiração lenta indicam:",
        op: ["Hipertensão intracraniana grave (tríade de Cushing)", "Ansiedade", "Hipoglicemia", "Bom prognóstico"],
        c: 0, exp: "A tríade de Cushing indica risco de herniação: cirurgia neurocirúrgica de urgência." }
    ]
  },

  // ---------- Toxicologia ----------
  {
    id: "organofosforado", esp: "Toxicologia", dif: 2,
    titulo: "Trabalhador rural babando e com pupilas pequenas",
    paciente: "Homem, 40 anos, aplicava agrotóxico",
    historia: "Começou com muita salivação, suor, vômitos, diarreia e falta de ar.",
    sinais: { PA: "100/60", FC: "48", FR: "28", Temp: "36,5 °C", SatO2: "88%" },
    exames: ["Pupilas puntiformes (miose)", "Secreção abundante nos pulmões", "Fasciculações musculares"],
    perguntas: [
      { p: "Qual a intoxicação?",
        op: ["Organofosforado (síndrome colinérgica)", "Opioide", "Anfetamina", "Paracetamol"],
        c: 0, exp: "Salivação, lacrimejamento, suor, diarreia, broncorreia, bradicardia e miose = excesso de acetilcolina por inibidor da colinesterase." },
      { p: "Qual o antídoto principal?",
        op: ["Atropina em doses repetidas até secar as secreções", "Naloxona", "Flumazenil", "N-acetilcisteína"],
        c: 0, exp: "Atropina, ajustada até secar as secreções brônquicas, e pralidoxima quando disponível. Retirar roupas e lavar a pele." }
    ]
  },
  {
    id: "opioide", esp: "Toxicologia", dif: 1,
    titulo: "Jovem desacordado respirando pouco",
    paciente: "Homem, 27 anos",
    historia: "Encontrado desacordado em festa, com seringa ao lado.",
    sinais: { PA: "100/60", FC: "58", FR: "6", Temp: "36,0 °C", SatO2: "80%" },
    exames: ["Pupilas puntiformes"],
    perguntas: [
      { p: "Qual a intoxicação mais provável?",
        op: ["Opioide", "Cocaína", "Álcool isolado", "Organofosforado"],
        c: 0, exp: "Coma + respiração muito lenta + miose = tríade da intoxicação por opioide." },
      { p: "Qual o antídoto?",
        op: ["Naloxona", "Atropina", "Flumazenil", "Glicose"],
        c: 0, exp: "Ventilar com bolsa-válvula-máscara e dar naloxona. Como ela dura menos que muitos opioides, o paciente precisa ficar em observação." }
    ]
  },
  {
    id: "monoxido", esp: "Toxicologia", dif: 2,
    titulo: "Família toda com dor de cabeça no inverno",
    paciente: "Mulher, 35 anos, e os dois filhos",
    historia: "Acordaram com dor de cabeça, tontura e enjoo. Usaram aquecedor a gás com a janela fechada.",
    sinais: { PA: "120/80", FC: "104", FR: "20", Temp: "36,6 °C", SatO2: "99% (no oxímetro)" },
    exames: ["Carboxi-hemoglobina: 25%"],
    perguntas: [
      { p: "Qual a intoxicação?",
        op: ["Monóxido de carbono", "Gripe na família", "Intoxicação alimentar", "Enxaqueca"],
        c: 0, exp: "Vários da mesma casa com cefaleia e náusea, ligados a aquecedor ou combustão em local fechado = monóxido de carbono." },
      { p: "Por que o oxímetro mostra 99%?",
        op: ["O oxímetro comum não diferencia carboxi-hemoglobina de oxi-hemoglobina", "Porque ela está bem", "Defeito do aparelho", "Porque a intoxicação é leve"],
        c: 0, exp: "A saturação aparece falsamente normal. O tratamento é oxigênio a 100% (e câmara hiperbárica em casos graves)." }
    ]
  },
  {
    id: "triciclico", esp: "Toxicologia", dif: 3,
    titulo: "Intoxicação com antidepressivo",
    paciente: "Mulher, 33 anos",
    historia: "Tomou uma cartela de amitriptilina há 2 horas. Está sonolenta e teve uma convulsão.",
    sinais: { PA: "85/50", FC: "128", FR: "18", Temp: "37,8 °C", SatO2: "95%" },
    exames: ["Pupilas dilatadas, pele seca, retenção urinária", "ECG: QRS alargado (> 100 ms)"],
    perguntas: [
      { p: "Qual achado indica maior risco de arritmia?",
        op: ["QRS alargado no ECG", "Pupila dilatada", "Pele seca", "Febre baixa"],
        c: 0, exp: "Antidepressivos tricíclicos bloqueiam canais de sódio. QRS > 100 ms prevê convulsões e arritmias." },
      { p: "Qual o tratamento específico para o QRS alargado?",
        op: ["Bicarbonato de sódio venoso", "Flumazenil", "Naloxona", "Atropina"],
        c: 0, exp: "Bicarbonato de sódio estreita o QRS e protege o coração. Avaliação psiquiátrica após estabilizar." }
    ]
  },

  // ---------- Pediatria ----------
  {
    id: "crupe", esp: "Pediatria", dif: 1,
    titulo: "Tosse de cachorro de madrugada",
    paciente: "Menino, 2 anos",
    historia: "Resfriado há 2 dias. Acordou de madrugada com tosse rouca 'de cachorro' e barulho ao inspirar.",
    sinais: { PA: "—", FC: "130", FR: "36", Temp: "38,0 °C", SatO2: "96%" },
    exames: ["Estridor inspiratório ao chorar, rouquidão"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Laringotraqueíte viral (crupe)", "Asma", "Pneumonia", "Corpo estranho"],
        c: 0, exp: "Tosse ladrante, rouquidão e estridor após resfriado = crupe, geralmente por parainfluenza." },
      { p: "Qual o tratamento principal?",
        op: ["Dexametasona (corticoide) em dose única; adrenalina inalatória se estridor em repouso", "Antibiótico", "Xarope para tosse", "Broncodilatador salbutamol"],
        c: 0, exp: "Corticoide reduz o edema da laringe. Nos casos moderados a graves, adrenalina nebulizada e observação." }
    ]
  },
  {
    id: "sarampo", esp: "Pediatria", dif: 2,
    titulo: "Febre, olhos vermelhos e manchas no corpo",
    paciente: "Menina, 3 anos, vacinação atrasada",
    historia: "Febre alta, tosse, coriza e olhos vermelhos há 4 dias. Hoje surgiram manchas vermelhas que começaram atrás das orelhas e desceram.",
    sinais: { PA: "—", FC: "130", FR: "30", Temp: "39,4 °C", SatO2: "96%" },
    exames: ["Pontos brancos na mucosa da bochecha (manchas de Koplik)"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Sarampo", "Rubéola", "Roséola", "Escarlatina"],
        c: 0, exp: "Tosse, coriza e conjuntivite + exantema que desce da cabeça para o corpo + manchas de Koplik = sarampo." },
      { p: "Qual medida é recomendada para a criança, além de notificar?",
        op: ["Vitamina A e cuidados de suporte", "Antibiótico de rotina", "Corticoide", "Antiviral específico"],
        c: 0, exp: "Vitamina A reduz complicações e mortalidade. É doença de notificação imediata, com vacinação de bloqueio dos contatos." }
    ]
  },
  {
    id: "kawasaki", esp: "Pediatria", dif: 3,
    titulo: "Febre há 6 dias e lábios rachados",
    paciente: "Menino, 2 anos",
    historia: "Febre alta há 6 dias que não passa com antitérmico.",
    sinais: { PA: "—", FC: "150", FR: "28", Temp: "39,5 °C", SatO2: "98%" },
    exames: ["Olhos vermelhos sem secreção", "Lábios vermelhos e rachados, língua em framboesa", "Mãos e pés inchados", "Manchas no corpo e gânglio no pescoço"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Doença de Kawasaki", "Sarampo", "Escarlatina", "Virose comum"],
        c: 0, exp: "Febre ≥ 5 dias + conjuntivite, alterações de lábios/boca, exantema, alterações de extremidades e linfonodo cervical = Kawasaki." },
      { p: "Qual a complicação mais temida?",
        op: ["Aneurisma das artérias coronárias", "Surdez", "Diabetes", "Asma"],
        c: 0, exp: "Por isso se faz ecocardiograma e trata-se cedo." },
      { p: "Qual o tratamento?",
        op: ["Imunoglobulina venosa + AAS", "Antibiótico", "Só antitérmico", "Vacina"],
        c: 0, exp: "Imunoglobulina nos primeiros 10 dias reduz muito o risco de aneurisma, junto com AAS." }
    ]
  },
  {
    id: "convulsao-febril", esp: "Pediatria", dif: 1,
    titulo: "Convulsão durante a febre",
    paciente: "Menina, 18 meses",
    historia: "Teve febre e convulsionou o corpo todo por 2 minutos. Agora está acordada e bem.",
    sinais: { PA: "—", FC: "130", FR: "28", Temp: "38,9 °C", SatO2: "99%" },
    exames: ["Exame neurológico normal", "Sem sinais de meningite", "Otite à direita"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Crise febril simples", "Epilepsia", "Meningite", "Tumor cerebral"],
        c: 0, exp: "Criança de 6 meses a 5 anos, crise generalizada curta (< 15 min), única em 24 h, com febre e sem infecção do sistema nervoso = crise febril simples." },
      { p: "Qual a conduta?",
        op: ["Tratar a causa da febre e orientar a família; não precisa de anticonvulsivante contínuo", "Iniciar anticonvulsivante por 2 anos", "Ressonância e eletroencefalograma de urgência", "Internar em UTI"],
        c: 0, exp: "É benigna. Antitérmico não previne novas crises, mas a família deve saber como agir." }
    ]
  },
  {
    id: "invaginacao", esp: "Pediatria", dif: 2,
    titulo: "Bebê com crises de choro e fezes com sangue",
    paciente: "Menino, 8 meses",
    historia: "Crises de choro forte, encolhendo as pernas, a cada 15–20 minutos, com vômitos. Fez fezes com muco e sangue.",
    sinais: { PA: "—", FC: "150", FR: "32", Temp: "37,4 °C", SatO2: "98%" },
    exames: ["Massa em forma de salsicha na barriga", "Fezes em 'geleia de framboesa'"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Invaginação intestinal", "Cólica do lactente", "Gastroenterite", "Apendicite"],
        c: 0, exp: "Lactente com dor em cólica intermitente, massa em salsicha e fezes em geleia de framboesa = invaginação." },
      { p: "Qual o exame e o tratamento habituais?",
        op: ["Ultrassom (imagem em alvo) e redução com enema de ar ou contraste", "Endoscopia e antibiótico", "Raio-X e laxante", "Observar em casa"],
        c: 0, exp: "Ultrassom confirma. A redução por enema resolve a maioria. Cirurgia se falhar ou houver perfuração." }
    ]
  },
  {
    id: "estenose-piloro", esp: "Pediatria", dif: 2,
    titulo: "Bebê que vomita em jato",
    paciente: "Menino, 4 semanas",
    historia: "Vômitos em jato logo depois das mamadas, sem bile, e quer mamar de novo. Está perdendo peso.",
    sinais: { PA: "—", FC: "160", FR: "40", Temp: "36,8 °C", SatO2: "98%" },
    exames: ["'Oliva' palpável no epigástrio", "Gasometria: alcalose metabólica com cloro e potássio baixos"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Estenose hipertrófica do piloro", "Refluxo fisiológico", "Alergia ao leite", "Invaginação"],
        c: 0, exp: "Vômitos não biliosos em jato em lactente de 3 a 6 semanas, com oliva palpável e alcalose hipoclorêmica = estenose do piloro." },
      { p: "Qual o tratamento?",
        op: ["Corrigir hidratação e eletrólitos e depois cirurgia (piloromiotomia)", "Trocar o leite", "Antiácido", "Antibiótico"],
        c: 0, exp: "Primeiro corrige-se a desidratação e a alcalose, depois a piloromiotomia." }
    ]
  },
  {
    id: "ictericia-neonatal", esp: "Pediatria", dif: 2,
    titulo: "Recém-nascido amarelo no primeiro dia",
    paciente: "Recém-nascido, 18 horas de vida",
    historia: "A mãe é O positivo e o bebê A positivo. Ele está amarelo até a barriga.",
    sinais: { PA: "—", FC: "140", FR: "44", Temp: "36,8 °C", SatO2: "98%" },
    exames: ["Bilirrubina indireta elevada", "Coombs direto positivo"],
    perguntas: [
      { p: "Icterícia nas primeiras 24 horas de vida é:",
        op: ["Sempre patológica e precisa de investigação", "Fisiológica e normal", "Causada pelo leite materno", "Sem importância"],
        c: 0, exp: "A icterícia fisiológica aparece depois de 24 horas. Antes disso, pensar em hemólise (como incompatibilidade ABO ou Rh)." },
      { p: "Qual o tratamento inicial habitual?",
        op: ["Fototerapia", "Suspender amamentação para sempre", "Antibiótico", "Banho de sol prolongado"],
        c: 0, exp: "Fototerapia conforme as curvas de bilirrubina. Exsanguineotransfusão em níveis muito altos." }
    ]
  },
  {
    id: "otite-media", esp: "Pediatria", dif: 1,
    titulo: "Criança puxando a orelha",
    paciente: "Menino, 3 anos",
    historia: "Resfriado há 4 dias, agora com febre e dor de ouvido, chorando muito.",
    sinais: { PA: "—", FC: "120", FR: "26", Temp: "38,6 °C", SatO2: "98%" },
    exames: ["Otoscopia: tímpano abaulado e vermelho"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Otite média aguda", "Otite externa", "Cera no ouvido", "Caxumba"],
        c: 0, exp: "Tímpano abaulado com sinais inflamatórios e dor/febre = otite média aguda." },
      { p: "Quando indicado antibiótico, qual a primeira escolha?",
        op: ["Amoxicilina", "Ciprofloxacino", "Vancomicina", "Azitromicina sempre"],
        c: 0, exp: "Amoxicilina é a primeira linha. Analgesia é sempre parte do tratamento." }
    ]
  },

  // ---------- Obstetrícia ----------
  {
    id: "ectopica", esp: "Obstetrícia", dif: 2,
    titulo: "Atraso menstrual, dor e sangramento",
    paciente: "Mulher, 29 anos",
    historia: "Menstruação atrasada há 7 semanas, dor forte no lado direito da barriga e pequeno sangramento vaginal.",
    sinais: { PA: "88/55", FC: "120", FR: "22", Temp: "36,7 °C", SatO2: "98%" },
    exames: ["Beta-hCG positivo", "Ultrassom transvaginal: útero vazio, líquido livre na pelve"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Gravidez ectópica rota", "Aborto completo", "Apendicite", "Cisto de ovário simples"],
        c: 0, exp: "Beta-hCG positivo + útero vazio + dor e líquido livre, com choque = gravidez ectópica rota." },
      { p: "Paciente instável. Qual a conduta?",
        op: ["Cirurgia de urgência", "Metotrexato e alta", "Repetir beta-hCG em 48 h", "Repouso"],
        c: 0, exp: "Com instabilidade, a ectópica rota é cirúrgica. Metotrexato só em casos estáveis e selecionados." }
    ]
  },
  {
    id: "dpp", esp: "Obstetrícia", dif: 3,
    titulo: "Gestante com dor forte e sangramento escuro",
    paciente: "Gestante, 34 anos, 35 semanas, hipertensa",
    historia: "Dor abdominal forte e súbita, com sangramento vaginal escuro.",
    sinais: { PA: "160/100", FC: "116", FR: "22", Temp: "36,7 °C", SatO2: "98%" },
    exames: ["Útero endurecido, sem relaxar (hipertonia)", "Batimentos do bebê alterados"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Descolamento prematuro de placenta", "Placenta prévia", "Trabalho de parto normal", "Cólica renal"],
        c: 0, exp: "Dor súbita, útero hipertônico, sangramento escuro e hipertensão = DPP. Placenta prévia sangra sem dor." },
      { p: "Qual a conduta com feto vivo e sofrimento?",
        op: ["Interromper a gestação pela via mais rápida (em geral cesárea)", "Repouso e alta", "Inibir as contrações", "Esperar 1 semana"],
        c: 0, exp: "DPP com feto vivo exige parto imediato pela via mais rápida, com suporte à mãe." }
    ]
  },
  {
    id: "placenta-previa", esp: "Obstetrícia", dif: 2,
    titulo: "Sangramento vermelho vivo sem dor",
    paciente: "Gestante, 31 anos, 32 semanas, duas cesáreas anteriores",
    historia: "Sangramento vaginal vermelho vivo, sem dor, que começou do nada.",
    sinais: { PA: "115/70", FC: "96", FR: "18", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Útero relaxado", "Batimentos do bebê normais"],
    perguntas: [
      { p: "Qual a hipótese mais provável?",
        op: ["Placenta prévia", "Descolamento de placenta", "Ruptura uterina", "Trabalho de parto"],
        c: 0, exp: "Sangramento vermelho vivo, indolor, com útero relaxado no 3º trimestre e cesáreas prévias = placenta prévia." },
      { p: "O que NÃO se deve fazer antes de confirmar a localização da placenta?",
        op: ["Toque vaginal", "Ultrassom", "Verificar sinais vitais", "Ouvir os batimentos do bebê"],
        c: 0, exp: "O toque pode provocar hemorragia grave. Confirma-se com ultrassom." }
    ]
  },
  {
    id: "hemorragia-pos-parto", esp: "Obstetrícia", dif: 2,
    titulo: "Sangrando muito depois do parto",
    paciente: "Puérpera, 26 anos, parto normal de bebê grande há 30 minutos",
    historia: "Sangramento vaginal intenso após a saída da placenta.",
    sinais: { PA: "90/55", FC: "120", FR: "22", Temp: "36,8 °C", SatO2: "97%" },
    exames: ["Útero amolecido, acima do umbigo", "Placenta saiu completa"],
    perguntas: [
      { p: "Qual a causa mais provável?",
        op: ["Atonia uterina", "Coagulopatia", "Ruptura uterina", "Inversão uterina"],
        c: 0, exp: "Útero mole e aumentado após o parto = atonia, a causa mais comum de hemorragia pós-parto." },
      { p: "Quais as primeiras medidas?",
        op: ["Massagem uterina e ocitocina (mais ácido tranexâmico), com acesso venoso e volume", "Esperar parar sozinho", "Gelo na barriga apenas", "Antibiótico"],
        c: 0, exp: "Massagem bimanual e uterotônicos (ocitocina primeiro), ácido tranexâmico nas primeiras 3 horas e reposição de volume." }
    ]
  },
  {
    id: "dmg", esp: "Obstetrícia", dif: 1,
    titulo: "Açúcar alto na gravidez",
    paciente: "Gestante, 33 anos, 26 semanas",
    historia: "Sem queixas. Fez o teste de tolerância à glicose.",
    sinais: { PA: "115/70", FC: "84", FR: "16", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Curva glicêmica 75 g: jejum 96, 1 h 175, 2 h 150 mg/dL"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Diabetes mellitus gestacional", "Normal", "Diabetes tipo 1", "Hipoglicemia"],
        c: 0, exp: "Basta um valor alterado (jejum ≥ 92, 1 h ≥ 180 ou 2 h ≥ 153). Aqui, o jejum de 96 já fecha o diagnóstico." },
      { p: "Qual o tratamento inicial?",
        op: ["Dieta orientada e atividade física, com insulina se não atingir as metas", "Metformina obrigatória", "Interromper a gestação", "Nada"],
        c: 0, exp: "Mudança de estilo de vida primeiro; insulina é a medicação de escolha se as metas não forem atingidas." }
    ]
  },

  // ---------- Ginecologia ----------
  {
    id: "dip", esp: "Ginecologia", dif: 2,
    titulo: "Dor no pé da barriga e corrimento",
    paciente: "Mulher, 22 anos, nova parceria sexual",
    historia: "Dor no baixo ventre há 4 dias, corrimento amarelado e febre.",
    sinais: { PA: "115/75", FC: "98", FR: "18", Temp: "38,2 °C", SatO2: "99%" },
    exames: ["Dor à mobilização do colo do útero e dos anexos", "Beta-hCG negativo"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Doença inflamatória pélvica", "Gravidez ectópica", "Apendicite", "Infecção urinária"],
        c: 0, exp: "Dor pélvica + dor à mobilização do colo/anexos + corrimento e febre em mulher sexualmente ativa = DIP." },
      { p: "Qual esquema ambulatorial é adequado?",
        op: ["Ceftriaxona IM + doxiciclina + metronidazol", "Só fluconazol", "Só analgésico", "Amoxicilina por 3 dias"],
        c: 0, exp: "Cobre gonococo, clamídia e anaeróbios. Tratar a parceria e testar outras ISTs." }
    ]
  },
  {
    id: "vaginose", esp: "Ginecologia", dif: 1,
    titulo: "Corrimento com cheiro de peixe",
    paciente: "Mulher, 30 anos",
    historia: "Corrimento acinzentado, fino, com cheiro forte de peixe, pior depois da relação.",
    sinais: { PA: "118/76", FC: "72", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["pH vaginal > 4,5", "Teste das aminas positivo", "Clue cells no exame a fresco"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Vaginose bacteriana", "Candidíase", "Tricomoníase", "Gonorreia"],
        c: 0, exp: "Corrimento acinzentado com odor de peixe, pH > 4,5, aminas positivas e clue cells = vaginose bacteriana (Gardnerella)." },
      { p: "Qual o tratamento?",
        op: ["Metronidazol", "Fluconazol", "Penicilina benzatina", "Aciclovir"],
        c: 0, exp: "Metronidazol oral ou vaginal. Não é considerada IST, e a parceria não precisa ser tratada de rotina." }
    ]
  },
  {
    id: "candidiase", esp: "Ginecologia", dif: 1,
    titulo: "Coceira e corrimento branco",
    paciente: "Mulher, 28 anos, terminou antibiótico há 1 semana",
    historia: "Muita coceira vaginal e corrimento branco, grumoso, 'como leite coalhado'.",
    sinais: { PA: "120/80", FC: "74", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Vulva avermelhada", "pH vaginal normal (< 4,5)"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Candidíase vulvovaginal", "Vaginose bacteriana", "Tricomoníase", "Herpes"],
        c: 0, exp: "Prurido intenso e corrimento branco grumoso com pH normal, após antibiótico = candidíase." },
      { p: "Qual o tratamento?",
        op: ["Antifúngico (fluconazol oral ou creme vaginal azólico)", "Metronidazol", "Penicilina", "Corticoide isolado"],
        c: 0, exp: "Antifúngico tópico ou fluconazol oral em dose única." }
    ]
  },
  {
    id: "sop", esp: "Ginecologia", dif: 2,
    titulo: "Menstruação irregular e pelos a mais",
    paciente: "Mulher, 23 anos, com sobrepeso",
    historia: "Menstrua a cada 2–3 meses, tem acne e pelos no rosto e na barriga.",
    sinais: { PA: "125/80", FC: "76", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Ultrassom: ovários com múltiplos folículos pequenos", "Beta-hCG negativo, TSH e prolactina normais"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Síndrome dos ovários policísticos", "Gravidez", "Menopausa precoce", "Hipotireoidismo"],
        c: 0, exp: "Pelos critérios de Rotterdam (2 de 3): ciclos irregulares, hiperandrogenismo e ovários policísticos, excluídas outras causas." },
      { p: "Sem desejo de engravidar, qual tratamento é comum?",
        op: ["Perda de peso + anticoncepcional combinado", "Cirurgia nos ovários", "Antibiótico", "Nada"],
        c: 0, exp: "Mudança de estilo de vida e anticoncepcional combinado regulam ciclos e reduzem pelos e acne. Atenção à resistência insulínica." }
    ]
  }
);
