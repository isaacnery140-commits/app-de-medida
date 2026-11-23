// Banco de casos clínicos (conteúdo educativo — não substitui avaliação médica).
// dif: 1 = fácil, 2 = médio, 3 = difícil
// c = índice da alternativa correta (começa em 0)
const CASES = [
  {
    id: "iam-supra", esp: "Cardiologia", dif: 2,
    titulo: "Dor no peito no fim da tarde",
    paciente: "Homem, 58 anos, hipertenso e fumante",
    historia: "Dor em aperto no peito há 40 minutos, que vai para o braço esquerdo, com suor frio e náusea.",
    sinais: { PA: "150/90", FC: "98", FR: "20", Temp: "36,5 °C", SatO2: "95%" },
    exames: ["ECG: supradesnivelamento do segmento ST em V1–V4"],
    perguntas: [
      { p: "Qual é o diagnóstico mais provável?",
        op: ["Angina estável", "Infarto agudo do miocárdio com supra de ST (parede anterior)", "Pericardite aguda", "Dissecção de aorta"],
        c: 1, exp: "Dor típica há menos de 12 h com supra de ST em derivações contíguas (V1–V4) indica IAM com supra de ST de parede anterior." },
      { p: "Qual a conduta prioritária?",
        op: ["Agendar teste ergométrico", "Reperfusão imediata: angioplastia primária (ou trombólise se a angioplastia não for possível a tempo)", "Observar e repetir ECG em 6 horas", "Alta com analgésico"],
        c: 1, exp: "No IAM com supra, tempo é músculo: reperfusão o mais rápido possível, de preferência angioplastia primária; se não disponível em tempo hábil, trombolítico." },
      { p: "Qual medicação deve ser dada logo no início, se não houver contraindicação?",
        op: ["AAS (ácido acetilsalicílico) mastigado", "Ibuprofeno", "Furosemida", "Dipirona isolada"],
        c: 0, exp: "AAS mastigado (dose de ataque) reduz mortalidade e deve ser dado precocemente, junto com um segundo antiagregante conforme a estratégia de reperfusão." }
    ]
  },
  {
    id: "cad", esp: "Endocrinologia", dif: 2,
    titulo: "Jovem com vômitos e respiração rápida",
    paciente: "Mulher, 19 anos, diabetes tipo 1",
    historia: "Há 2 dias com muita sede, urinando muito, vômitos e dor abdominal. Parou a insulina porque não estava comendo.",
    sinais: { PA: "100/60", FC: "118", FR: "28 (respiração profunda)", Temp: "36,8 °C", SatO2: "98%" },
    exames: ["Glicemia: 480 mg/dL", "Gasometria: pH 7,12; bicarbonato 10 mEq/L", "Cetonas positivas"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Estado hiperosmolar hiperglicêmico", "Cetoacidose diabética", "Gastroenterite simples", "Acidose lática por sepse"],
        c: 1, exp: "Hiperglicemia + acidose metabólica (pH < 7,3, bicarbonato baixo) + cetonas = cetoacidose diabética. A respiração profunda é a respiração de Kussmaul." },
      { p: "Qual a primeira medida terapêutica?",
        op: ["Bicarbonato de sódio em bolus", "Hidratação venosa com soro fisiológico 0,9%", "Insulina subcutânea e alta", "Restrição de líquidos"],
        c: 1, exp: "A primeira medida é repor volume com soro fisiológico. A insulina vem em seguida, por via venosa contínua." },
      { p: "Qual exame precisa ser conferido antes de iniciar a insulina?",
        op: ["Potássio", "TSH", "Colesterol", "Amilase"],
        c: 0, exp: "A insulina joga o potássio para dentro das células. Se o potássio estiver baixo (< 3,3 mEq/L), é preciso repor antes de iniciar a insulina." }
    ]
  },
  {
    id: "pac", esp: "Pneumologia", dif: 1,
    titulo: "Febre e tosse com catarro",
    paciente: "Homem, 45 anos, sem doenças prévias",
    historia: "Febre de 38,7 °C há 3 dias, tosse com catarro amarelado e dor ao respirar do lado direito. Está lúcido.",
    sinais: { PA: "125/80", FC: "96", FR: "20", Temp: "38,7 °C", SatO2: "96%" },
    exames: ["Ausculta: estertores crepitantes na base direita"],
    perguntas: [
      { p: "Qual exame de imagem confirma a suspeita?",
        op: ["Radiografia de tórax", "Ressonância de crânio", "Ecocardiograma", "Densitometria óssea"],
        c: 0, exp: "A radiografia de tórax mostra a consolidação e confirma a pneumonia." },
      { p: "Radiografia com consolidação na base direita, CURB-65 = 0. Qual a conduta?",
        op: ["Internação em UTI", "Tratamento ambulatorial com antibiótico oral (ex.: amoxicilina)", "Apenas sintomáticos, sem antibiótico", "Antibiótico venoso de amplo espectro por 21 dias"],
        c: 1, exp: "CURB-65 baixo (0–1) em paciente sem comorbidades permite tratamento em casa com antibiótico oral e retorno se piorar." }
    ]
  },
  {
    id: "avc", esp: "Neurologia", dif: 2,
    titulo: "Fraqueza súbita de um lado do corpo",
    paciente: "Mulher, 67 anos, hipertensa",
    historia: "Há 1 hora começou de repente com fraqueza no braço e na perna direitos e dificuldade para falar.",
    sinais: { PA: "170/95", FC: "84", FR: "16", Temp: "36,4 °C", SatO2: "97%" },
    exames: ["Glicemia capilar: 110 mg/dL"],
    perguntas: [
      { p: "Qual o primeiro exame de imagem a pedir?",
        op: ["Tomografia de crânio sem contraste", "Radiografia de crânio", "Eletroencefalograma", "Punção lombar"],
        c: 0, exp: "A tomografia sem contraste, feita com urgência, diferencia AVC hemorrágico de isquêmico, o que decide o tratamento." },
      { p: "A tomografia não mostra sangramento. Qual tratamento deve ser considerado?",
        op: ["Trombólise venosa (dentro da janela de até 4,5 h, sem contraindicações)", "Anticoagulação plena imediata", "Corticoide em alta dose", "Esperar 24 h para decidir"],
        c: 0, exp: "No AVC isquêmico dentro da janela terapêutica e sem contraindicações, a trombólise venosa melhora o prognóstico. Trombectomia pode ser indicada em oclusão de grande vaso." }
    ]
  },
  {
    id: "meningite", esp: "Infectologia", dif: 3,
    titulo: "Febre, dor de cabeça e manchas na pele",
    paciente: "Homem, 22 anos, universitário",
    historia: "Febre alta, dor de cabeça forte e vômitos há 12 horas. Surgiram manchinhas roxas nas pernas.",
    sinais: { PA: "105/65", FC: "120", FR: "22", Temp: "39,5 °C", SatO2: "97%" },
    exames: ["Rigidez de nuca", "Petéquias em membros inferiores"],
    perguntas: [
      { p: "Qual a hipótese principal?",
        op: ["Enxaqueca", "Meningite bacteriana (provável meningococo)", "Dengue clássica", "Sinusite"],
        c: 1, exp: "Febre + cefaleia + rigidez de nuca sugerem meningite; as petéquias levantam suspeita de doença meningocócica." },
      { p: "Qual a atitude mais importante?",
        op: ["Esperar o resultado do líquor para iniciar antibiótico", "Colher hemoculturas e iniciar antibiótico empírico (ex.: ceftriaxona) sem atrasar", "Prescrever analgésico e reavaliar amanhã", "Iniciar antiviral oral"],
        c: 1, exp: "Antibiótico não pode atrasar. Colhe-se hemocultura e líquor se possível, mas o antibiótico começa imediatamente." },
      { p: "Qual padrão do líquor é típico da meningite bacteriana?",
        op: ["Linfócitos, glicose normal, proteína normal", "Neutrófilos, glicose baixa, proteína alta", "Líquor totalmente normal", "Hemácias e xantocromia"],
        c: 1, exp: "Na meningite bacteriana há predomínio de neutrófilos, glicose baixa e proteína elevada." }
    ]
  },
  {
    id: "apendicite", esp: "Cirurgia", dif: 1,
    titulo: "Dor que mudou de lugar",
    paciente: "Homem, 20 anos",
    historia: "Dor em volta do umbigo que, depois de algumas horas, foi para a parte de baixo e à direita da barriga. Perdeu o apetite.",
    sinais: { PA: "120/80", FC: "100", FR: "18", Temp: "37,9 °C", SatO2: "98%" },
    exames: ["Dor à descompressão no ponto de McBurney (Blumberg positivo)", "Leucocitose"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Apendicite aguda", "Cólica renal", "Gastrite", "Colecistite"],
        c: 0, exp: "Dor periumbilical que migra para a fossa ilíaca direita, anorexia, febre baixa e Blumberg positivo são clássicos de apendicite." },
      { p: "Qual o tratamento definitivo?",
        op: ["Apendicectomia", "Laxante", "Dieta e observação em casa", "Antiácido"],
        c: 0, exp: "O tratamento padrão é a retirada cirúrgica do apêndice (apendicectomia), em geral por videolaparoscopia." }
    ]
  },
  {
    id: "hda-varizes", esp: "Gastroenterologia", dif: 3,
    titulo: "Vômito com sangue",
    paciente: "Homem, 55 anos, etilista, com cirrose",
    historia: "Vomitou grande quantidade de sangue vivo há 1 hora. Está pálido e tonto.",
    sinais: { PA: "90/55", FC: "124", FR: "22", Temp: "36,2 °C", SatO2: "96%" },
    exames: ["Ascite e circulação colateral no abdome"],
    perguntas: [
      { p: "Qual a causa mais provável do sangramento?",
        op: ["Úlcera duodenal", "Ruptura de varizes de esôfago", "Câncer de cólon", "Hemorroida"],
        c: 1, exp: "Cirrose com hipertensão portal (ascite, circulação colateral) e hematemese volumosa sugerem varizes esofágicas." },
      { p: "Além de acesso venoso e estabilização, qual medicação está indicada antes da endoscopia?",
        op: ["Vasoconstritor esplâncnico (terlipressina ou octreotide) + antibiótico profilático", "AAS", "Heparina", "Diurético em dose alta"],
        c: 0, exp: "Na suspeita de sangramento varicoso: droga vasoativa (terlipressina/octreotide) e antibiótico profilático (ex.: ceftriaxona), seguidos de endoscopia em até 12 h." }
    ]
  },
  {
    id: "bronquiolite", esp: "Pediatria", dif: 1,
    titulo: "Bebê com chiado no inverno",
    paciente: "Lactente, 4 meses",
    historia: "Começou com coriza há 3 dias; agora tem chiado e cansaço para mamar. Irmão com resfriado.",
    sinais: { PA: "—", FC: "150", FR: "56", Temp: "37,8 °C", SatO2: "93%" },
    exames: ["Sibilos e estertores difusos, tiragem subcostal leve"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Asma", "Bronquiolite viral aguda", "Corpo estranho", "Coqueluche"],
        c: 1, exp: "Primeiro episódio de sibilância em lactente menor de 2 anos, após quadro de vias aéreas superiores, no inverno: bronquiolite." },
      { p: "Qual o principal agente causador?",
        op: ["Vírus sincicial respiratório (VSR)", "Streptococcus pneumoniae", "Mycoplasma", "Influenza B"],
        c: 0, exp: "O VSR é o principal causador de bronquiolite." },
      { p: "Qual é a base do tratamento?",
        op: ["Corticoide oral de rotina", "Medidas de suporte: hidratação, desobstrução nasal e oxigênio se necessário", "Antibiótico", "Broncodilatador de rotina"],
        c: 1, exp: "O tratamento é de suporte. Corticoide, antibiótico e broncodilatador não são recomendados de rotina." }
    ]
  },
  {
    id: "pre-eclampsia", esp: "Obstetrícia", dif: 3,
    titulo: "Gestante com dor de cabeça e pontos brilhantes",
    paciente: "Gestante, 28 anos, 32 semanas",
    historia: "Dor de cabeça forte e vê pontos brilhantes. Pés e mãos muito inchados.",
    sinais: { PA: "170/112", FC: "92", FR: "18", Temp: "36,6 °C", SatO2: "98%" },
    exames: ["Proteinúria significativa"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Hipertensão crônica leve", "Pré-eclâmpsia com sinais de gravidade", "Enxaqueca da gestação", "Gestação normal"],
        c: 1, exp: "PA ≥ 160/110 + proteinúria após 20 semanas + sintomas visuais e cefaleia = pré-eclâmpsia grave (iminência de eclâmpsia)." },
      { p: "Qual medicação previne a convulsão (eclâmpsia)?",
        op: ["Diazepam", "Sulfato de magnésio", "Fenitoína", "Paracetamol"],
        c: 1, exp: "O sulfato de magnésio é a droga de escolha para prevenir e tratar a eclâmpsia." },
      { p: "Qual opção é adequada para baixar a pressão nessa urgência?",
        op: ["Hidralazina venosa ou nifedipina oral", "Enalapril (IECA)", "Losartana", "Nenhuma, pressão alta é normal na gravidez"],
        c: 0, exp: "Hidralazina IV, nifedipina VO ou labetalol são as opções. IECA e BRA são contraindicados na gestação." }
    ]
  },
  {
    id: "hipercalemia", esp: "Nefrologia", dif: 3,
    titulo: "Fraqueza em paciente renal",
    paciente: "Homem, 64 anos, doença renal crônica",
    historia: "Fraqueza muscular há 1 dia. Faltou à última sessão de diálise.",
    sinais: { PA: "150/90", FC: "58", FR: "18", Temp: "36,4 °C", SatO2: "96%" },
    exames: ["Potássio: 7,0 mEq/L", "ECG: ondas T apiculadas"],
    perguntas: [
      { p: "Qual medida deve ser a primeira, para proteger o coração?",
        op: ["Gluconato de cálcio venoso", "Furosemida", "Resina de troca oral", "Soro com potássio"],
        c: 0, exp: "Com alteração no ECG, o gluconato de cálcio estabiliza a membrana do músculo cardíaco imediatamente (não baixa o potássio)." },
      { p: "Qual medida desloca o potássio para dentro das células?",
        op: ["Insulina regular com glicose", "Cálcio", "Soro fisiológico", "Espironolactona"],
        c: 0, exp: "Insulina + glicose (e também beta-2 agonista inalatório) puxam o potássio para dentro das células. A remoção definitiva é por diálise neste caso." }
    ]
  },
  {
    id: "hipotireoidismo", esp: "Endocrinologia", dif: 1,
    titulo: "Cansaço, frio e ganho de peso",
    paciente: "Mulher, 45 anos",
    historia: "Há meses sente cansaço, sonolência, frio, intestino preso, pele seca e ganhou 6 kg.",
    sinais: { PA: "130/85", FC: "58", FR: "16", Temp: "36,0 °C", SatO2: "98%" },
    exames: ["TSH elevado", "T4 livre baixo"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Hipertireoidismo", "Hipotireoidismo primário", "Depressão isolada", "Anemia"],
        c: 1, exp: "TSH alto com T4 livre baixo indica hipotireoidismo primário (o problema é na tireoide)." },
      { p: "Qual a causa mais comum em áreas com iodo suficiente?",
        op: ["Tireoidite de Hashimoto", "Câncer de tireoide", "Doença de Graves", "Falta de iodo"],
        c: 0, exp: "A tireoidite autoimune de Hashimoto é a causa mais comum." },
      { p: "Qual o tratamento?",
        op: ["Levotiroxina", "Metimazol", "Iodo radioativo", "Propranolol"],
        c: 0, exp: "Reposição hormonal com levotiroxina, em jejum, ajustando a dose pelo TSH." }
    ]
  },
  {
    id: "anafilaxia", esp: "Emergência", dif: 2,
    titulo: "Reação depois de comer amendoim",
    paciente: "Homem, 30 anos, alérgico a amendoim",
    historia: "Comeu um doce com amendoim há 15 minutos. Surgiram placas vermelhas pelo corpo, chiado e tontura.",
    sinais: { PA: "80/50", FC: "130", FR: "28", Temp: "36,7 °C", SatO2: "91%" },
    exames: ["Urticária generalizada, sibilos, edema de lábios"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Urticária simples", "Anafilaxia", "Crise de ansiedade", "Asma leve"],
        c: 1, exp: "Pele + respiratório + pressão baixa logo após exposição a alérgeno = anafilaxia." },
      { p: "Qual o tratamento de primeira linha?",
        op: ["Adrenalina intramuscular na coxa", "Anti-histamínico oral apenas", "Corticoide oral apenas", "Observar em casa"],
        c: 0, exp: "Adrenalina IM (face lateral da coxa) é o tratamento principal e não deve ser atrasada. Anti-histamínico e corticoide são adjuvantes." }
    ]
  },
  {
    id: "fa", esp: "Cardiologia", dif: 2,
    titulo: "Coração acelerado e irregular",
    paciente: "Mulher, 72 anos, hipertensa",
    historia: "Palpitações há 2 dias. Nunca teve AVC, não é diabética e não tem insuficiência cardíaca.",
    sinais: { PA: "140/85", FC: "110 (irregular)", FR: "18", Temp: "36,5 °C", SatO2: "97%" },
    exames: ["ECG: ritmo irregularmente irregular, sem ondas P"],
    perguntas: [
      { p: "Qual o ritmo?",
        op: ["Flutter atrial", "Fibrilação atrial", "Taquicardia sinusal", "Taquicardia ventricular"],
        c: 1, exp: "Ritmo irregularmente irregular sem ondas P é fibrilação atrial." },
      { p: "Qual o escore CHA₂DS₂-VASc desta paciente?",
        op: ["1", "2", "3", "5"],
        c: 2, exp: "Idade 65–74 anos (1) + sexo feminino (1) + hipertensão (1) = 3." },
      { p: "Com esse escore, qual a conduta em relação ao AVC?",
        op: ["Nada, risco baixo", "Anticoagulação oral", "Apenas AAS", "Apenas betabloqueador"],
        c: 1, exp: "Mulheres com escore ≥ 3 (homens ≥ 2) têm indicação de anticoagulação oral, avaliando o risco de sangramento." }
    ]
  },
  {
    id: "tep", esp: "Pneumologia", dif: 3,
    titulo: "Falta de ar após cirurgia",
    paciente: "Mulher, 50 anos, 5º dia após cirurgia de quadril",
    historia: "Falta de ar súbita e dor no peito que piora ao respirar. Perna esquerda inchada.",
    sinais: { PA: "110/70", FC: "118", FR: "26", Temp: "37,2 °C", SatO2: "89%" },
    exames: ["ECG: taquicardia sinusal", "Radiografia de tórax sem alterações importantes"],
    perguntas: [
      { p: "Qual a hipótese principal?",
        op: ["Pneumonia", "Tromboembolismo pulmonar", "Crise de asma", "Refluxo"],
        c: 1, exp: "Pós-operatório ortopédico + perna inchada (TVP) + dispneia súbita, dor pleurítica e hipoxemia sugerem TEP." },
      { p: "Qual exame confirma o diagnóstico com alta probabilidade clínica?",
        op: ["Angiotomografia de tórax", "Espirometria", "Endoscopia", "Ultrassom de abdome"],
        c: 0, exp: "Com probabilidade clínica alta, vai-se direto à angiotomografia de tórax (o D-dímero serve para excluir quando a probabilidade é baixa)." },
      { p: "Paciente estável hemodinamicamente. Qual o tratamento?",
        op: ["Anticoagulação", "Antibiótico", "Broncodilatador", "Diurético"],
        c: 0, exp: "Anticoagulação é a base do tratamento. Trombólise fica reservada para TEP com instabilidade hemodinâmica." }
    ]
  },
  {
    id: "dengue", esp: "Infectologia", dif: 2,
    titulo: "Febre que baixou e a dor piorou",
    paciente: "Homem, 34 anos",
    historia: "Febre alta por 4 dias. Hoje a febre passou, mas tem dor abdominal forte, vômitos repetidos e sangramento na gengiva.",
    sinais: { PA: "100/70", FC: "110", FR: "20", Temp: "36,8 °C", SatO2: "97%" },
    exames: ["Hematócrito subindo", "Plaquetas: 60.000"],
    perguntas: [
      { p: "Como classificar este caso de dengue?",
        op: ["Dengue sem sinais de alarme", "Dengue com sinais de alarme", "Não é dengue", "Resfriado"],
        c: 1, exp: "Dor abdominal intensa, vômitos persistentes, sangramento de mucosa e hematócrito subindo são sinais de alarme." },
      { p: "Qual a conduta?",
        op: ["Hidratação venosa e internação para observação", "Ibuprofeno e repouso em casa", "AAS para a dor", "Apenas soro oral em casa"],
        c: 0, exp: "Com sinais de alarme: internar e hidratar por via venosa, reavaliando. Evitar AINEs e AAS pelo risco de sangramento." }
    ]
  },
  {
    id: "paracetamol", esp: "Toxicologia", dif: 2,
    titulo: "Muitos comprimidos de paracetamol",
    paciente: "Mulher, 24 anos",
    historia: "Tomou cerca de 30 comprimidos de paracetamol 500 mg há 4 horas. Está com náusea, sem outros sintomas.",
    sinais: { PA: "118/76", FC: "92", FR: "16", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Nível sérico de paracetamol colhido"],
    perguntas: [
      { p: "Qual órgão é o principal alvo da intoxicação?",
        op: ["Fígado", "Pulmão", "Coração", "Pele"],
        c: 0, exp: "O paracetamol em excesso gera um metabólito tóxico que causa necrose hepática." },
      { p: "Qual é o antídoto?",
        op: ["N-acetilcisteína", "Naloxona", "Flumazenil", "Atropina"],
        c: 0, exp: "N-acetilcisteína repõe glutationa e é mais eficaz quando iniciada nas primeiras 8 horas. Lembre também da avaliação psiquiátrica." }
    ]
  },
  {
    id: "ferropriva", esp: "Hematologia", dif: 1,
    titulo: "Cansaço e menstruação intensa",
    paciente: "Mulher, 32 anos",
    historia: "Menstruação muito volumosa há 1 ano, cansaço e vontade de comer gelo.",
    sinais: { PA: "110/70", FC: "96", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Hemoglobina: 9,0 g/dL", "VCM baixo (anemia microcítica)", "Ferritina baixa"],
    perguntas: [
      { p: "Qual o tipo de anemia?",
        op: ["Anemia ferropriva", "Anemia por falta de B12", "Anemia hemolítica", "Talassemia maior"],
        c: 0, exp: "Microcitose com ferritina baixa e perda crônica de sangue = anemia por deficiência de ferro." },
      { p: "Qual o tratamento inicial?",
        op: ["Ferro por via oral e investigar/tratar a causa", "Transfusão de sangue imediata", "Vitamina B12 injetável", "Ácido fólico apenas"],
        c: 0, exp: "Ferro oral é a primeira escolha, e é obrigatório tratar a causa (aqui, o sangramento menstrual)." }
    ]
  },
  {
    id: "hipoglicemia", esp: "Emergência", dif: 1,
    titulo: "Idoso confuso e suado",
    paciente: "Homem, 78 anos, diabético, usa glibenclamida",
    historia: "Família o encontrou confuso e suando. Comeu pouco ontem.",
    sinais: { PA: "140/80", FC: "104", FR: "18", Temp: "36,3 °C", SatO2: "97%" },
    exames: ["Glicemia capilar: 40 mg/dL"],
    perguntas: [
      { p: "Qual a conduta imediata, já que ele não consegue engolir com segurança?",
        op: ["Glicose hipertônica venosa", "Insulina", "Esperar ele acordar", "Dar água com açúcar à força"],
        c: 0, exp: "Com rebaixamento de consciência, dar glicose venosa (ou glucagon IM se não houver acesso). Nunca forçar líquidos pela boca." },
      { p: "Por que ele deve ficar em observação por mais tempo?",
        op: ["Sulfonilureias têm efeito prolongado e a hipoglicemia pode voltar", "Para fazer ressonância", "Porque precisa de antibiótico", "Não precisa observar"],
        c: 0, exp: "A glibenclamida tem ação longa, especialmente em idosos e renais crônicos; a hipoglicemia pode recorrer por horas." }
    ]
  },
  {
    id: "icc", esp: "Cardiologia", dif: 2,
    titulo: "Falta de ar ao deitar",
    paciente: "Homem, 70 anos, infarto prévio",
    historia: "Falta de ar progressiva, precisa de 3 travesseiros para dormir e acorda sufocado. Pernas inchadas.",
    sinais: { PA: "150/95", FC: "104", FR: "26", Temp: "36,4 °C", SatO2: "90%" },
    exames: ["Estertores em ambas as bases, terceira bulha (B3)", "Edema de membros inferiores"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Insuficiência cardíaca descompensada (congestão)", "Pneumonia", "DPOC", "Ansiedade"],
        c: 0, exp: "Ortopneia, dispneia paroxística noturna, B3, estertores e edema indicam IC descompensada com congestão." },
      { p: "Qual medicação alivia a congestão rapidamente?",
        op: ["Diurético de alça venoso (furosemida)", "Soro fisiológico em bolus", "Antibiótico", "Corticoide"],
        c: 0, exp: "Furosemida venosa retira o excesso de líquido. Oxigênio/ventilação não invasiva se hipoxemia, e vasodilatador se pressão alta." }
    ]
  },
  {
    id: "colecistite", esp: "Cirurgia", dif: 2,
    titulo: "Dor do lado direito depois do almoço",
    paciente: "Mulher, 46 anos, com cálculos na vesícula",
    historia: "Dor no lado direito alto da barriga há 10 horas, que não passa, com febre e vômitos.",
    sinais: { PA: "130/80", FC: "102", FR: "18", Temp: "38,3 °C", SatO2: "98%" },
    exames: ["Sinal de Murphy positivo", "Ultrassom: cálculo e parede da vesícula espessada"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Cólica biliar simples", "Colecistite aguda calculosa", "Pancreatite", "Úlcera"],
        c: 1, exp: "Dor persistente > 6 h + febre + Murphy positivo + parede espessada com cálculo = colecistite aguda." },
      { p: "Qual o tratamento recomendado?",
        op: ["Antibiótico e colecistectomia (de preferência precoce, por vídeo)", "Apenas analgésico e alta", "Dissolver o cálculo com remédio", "Esperar 6 meses para operar sempre"],
        c: 0, exp: "Antibiótico, jejum, analgesia e colecistectomia laparoscópica precoce na maioria dos pacientes." }
    ]
  },
  {
    id: "pielonefrite", esp: "Nefrologia", dif: 1,
    titulo: "Ardência para urinar e dor nas costas",
    paciente: "Mulher, 27 anos",
    historia: "Ardência ao urinar há 3 dias. Hoje tem febre de 39 °C, calafrios e dor nas costas do lado direito.",
    sinais: { PA: "115/75", FC: "105", FR: "18", Temp: "39,0 °C", SatO2: "98%" },
    exames: ["Punho-percussão lombar dolorosa à direita (Giordano positivo)", "Urina com leucócitos e nitrito"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Cistite simples", "Pielonefrite aguda", "Cólica renal sem infecção", "Apendicite"],
        c: 1, exp: "Sintomas urinários + febre + dor lombar = infecção do rim (pielonefrite)." },
      { p: "Qual a conduta adequada?",
        op: ["Colher urocultura e iniciar antibiótico sistêmico (ex.: ceftriaxona ou fluoroquinolona)", "Apenas beber água", "Antibiótico em dose única", "Antifúngico"],
        c: 0, exp: "Pielonefrite exige antibiótico sistêmico por 7–14 dias, guiado depois pela urocultura." }
    ]
  },
  {
    id: "desidratacao", esp: "Pediatria", dif: 2,
    titulo: "Criança com diarreia",
    paciente: "Criança, 2 anos",
    historia: "Diarreia há 2 dias. Está irritada, com olhos fundos e bebe água com muita sede. Consegue beber.",
    sinais: { PA: "—", FC: "130", FR: "30", Temp: "37,5 °C", SatO2: "99%" },
    exames: ["Prega cutânea desaparece lentamente", "Sem letargia"],
    perguntas: [
      { p: "Qual o grau de hidratação?",
        op: ["Sem desidratação", "Com desidratação (sem gravidade)", "Desidratação grave", "Choque"],
        c: 1, exp: "Irritada, olhos fundos, sede intensa e prega lenta = desidratação; como bebe e não está letárgica, não é grave." },
      { p: "Qual plano de tratamento?",
        op: ["Plano A: tratar em casa", "Plano B: reidratação oral na unidade de saúde", "Plano C: hidratação venosa imediata", "Antibiótico"],
        c: 1, exp: "Desidratação sem gravidade = Plano B: soro de reidratação oral supervisionado na unidade, reavaliando a criança." }
    ]
  },
  {
    id: "estado-mal", esp: "Neurologia", dif: 2,
    titulo: "Convulsão que não para",
    paciente: "Homem, 35 anos, epiléptico",
    historia: "Está convulsionando há 7 minutos, sem recuperar a consciência.",
    sinais: { PA: "160/90", FC: "130", FR: "—", Temp: "37,8 °C", SatO2: "90%" },
    exames: ["Glicemia capilar: 98 mg/dL"],
    perguntas: [
      { p: "Qual a primeira medicação para interromper a crise?",
        op: ["Benzodiazepínico (diazepam IV ou midazolam IM)", "Paracetamol", "Haloperidol", "Insulina"],
        c: 0, exp: "Crise > 5 min deve ser tratada como estado de mal: benzodiazepínico é a primeira linha, junto com via aérea e oxigênio." },
      { p: "Se a crise persistir após benzodiazepínico, qual o próximo passo?",
        op: ["Anticonvulsivante venoso (ex.: fenitoína, levetiracetam ou valproato)", "Esperar mais 1 hora", "Dar alta", "Antibiótico"],
        c: 0, exp: "Segunda linha: fenitoína/fosfenitoína, levetiracetam ou valproato por via venosa. Se persistir, anestesia em UTI." }
    ]
  },
  {
    id: "pcr-fv", esp: "Emergência", dif: 3,
    titulo: "Caiu no corredor do hospital",
    paciente: "Homem, 60 anos",
    historia: "Caiu de repente, não responde e não respira normalmente. Sem pulso.",
    sinais: { PA: "—", FC: "sem pulso", FR: "gasping", Temp: "—", SatO2: "—" },
    exames: ["Monitor: fibrilação ventricular"],
    perguntas: [
      { p: "Qual a ação mais importante neste ritmo?",
        op: ["Desfibrilação o mais rápido possível, com RCP de alta qualidade", "Atropina", "Esperar o cardiologista", "Fazer ECG de 12 derivações primeiro"],
        c: 0, exp: "FV é ritmo chocável: choque imediato e RCP de alta qualidade entre os choques." },
      { p: "Qual a frequência correta das compressões torácicas em adultos?",
        op: ["60–80 por minuto", "100–120 por minuto", "150–180 por minuto", "Não importa"],
        c: 1, exp: "Compressões de 100–120/min, com profundidade de 5–6 cm, deixando o tórax voltar e minimizando pausas." }
    ]
  },
  {
    id: "gota", esp: "Reumatologia", dif: 1,
    titulo: "Dedão inchado de madrugada",
    paciente: "Homem, 50 anos, consome cerveja e carne vermelha",
    historia: "Acordou com dor muito forte, vermelhidão e inchaço na base do dedão do pé.",
    sinais: { PA: "145/90", FC: "88", FR: "16", Temp: "37,4 °C", SatO2: "98%" },
    exames: ["1ª articulação metatarsofalangiana quente e edemaciada"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Crise de gota (podagra)", "Fratura", "Artrite reumatoide", "Unha encravada"],
        c: 0, exp: "Monoartrite aguda da 1ª metatarsofalangiana em homem com fatores de risco é a apresentação clássica da gota (podagra)." },
      { p: "O que se vê na análise do líquido articular?",
        op: ["Cristais de urato monossódico em agulha, com birrefringência negativa", "Cristais romboides com birrefringência positiva", "Pus com bactérias", "Sangue"],
        c: 0, exp: "Gota: cristais de urato em agulha com birrefringência negativa. Os romboides positivos são de pirofosfato de cálcio (pseudogota)." },
      { p: "Qual tratamento para a crise aguda?",
        op: ["Anti-inflamatório, colchicina ou corticoide", "Antibiótico", "Gesso", "Nenhum tratamento"],
        c: 0, exp: "Na crise: AINE, colchicina ou corticoide. Remédios para baixar o ácido úrico (como alopurinol) entram no tratamento de longo prazo." }
    ]
  }
];
