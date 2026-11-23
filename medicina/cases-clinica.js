// Casos extras — Clínica médica (conteúdo educativo — não substitui avaliação médica)
CASES.push(
  // ---------- Cardiologia ----------
  {
    id: "disseccao-aorta", esp: "Cardiologia", dif: 3,
    titulo: "Dor que rasga até as costas",
    paciente: "Homem, 62 anos, hipertenso mal controlado",
    historia: "Dor no peito súbita, muito forte, 'como se rasgasse', que vai para as costas entre as escápulas.",
    sinais: { PA: "190/110 (braço D) e 150/90 (braço E)", FC: "104", FR: "22", Temp: "36,6 °C", SatO2: "96%" },
    exames: ["Diferença de pressão entre os braços", "Radiografia: alargamento do mediastino"],
    perguntas: [
      { p: "Qual a principal hipótese?",
        op: ["Dissecção aguda de aorta", "Pneumonia", "Refluxo", "Costocondrite"],
        c: 0, exp: "Dor súbita lancinante irradiada para o dorso, diferença de PA entre membros e mediastino alargado sugerem dissecção de aorta." },
      { p: "Qual exame confirma rapidamente no paciente estável?",
        op: ["Angiotomografia de aorta", "Teste ergométrico", "Endoscopia", "Cintilografia óssea"],
        c: 0, exp: "Angiotomografia é o exame de escolha no estável. Ecocardiograma transesofágico é alternativa no instável." },
      { p: "Qual a medida clínica inicial?",
        op: ["Controlar FC e PA com betabloqueador venoso", "Trombolítico", "Heparina plena", "Hidratação vigorosa"],
        c: 0, exp: "Reduz-se a FC (alvo ~60) e a PA com betabloqueador IV. Dissecção tipo A (aorta ascendente) é cirúrgica. Trombolítico e anticoagulação são contraindicados." }
    ]
  },
  {
    id: "pericardite", esp: "Cardiologia", dif: 2,
    titulo: "Dor no peito que melhora inclinado",
    paciente: "Homem, 28 anos, gripado há 1 semana",
    historia: "Dor no peito em pontada, que piora ao deitar e ao respirar fundo e melhora ao sentar inclinado para frente.",
    sinais: { PA: "120/80", FC: "96", FR: "18", Temp: "37,8 °C", SatO2: "98%" },
    exames: ["Atrito pericárdico à ausculta", "ECG: supra de ST difuso, côncavo, com infra de PR"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Pericardite aguda", "Infarto com supra de ST", "Embolia pulmonar", "Pneumotórax"],
        c: 0, exp: "Dor pleurítica que melhora inclinado, atrito pericárdico e supra de ST difuso com infra de PR são típicos de pericardite, em geral viral." },
      { p: "Qual o tratamento de primeira linha?",
        op: ["Anti-inflamatório (ex.: ibuprofeno ou AAS) + colchicina", "Trombólise", "Antibiótico venoso", "Cateterismo de urgência"],
        c: 0, exp: "AINE/AAS associado à colchicina alivia a dor e reduz recorrência." }
    ]
  },
  {
    id: "tamponamento", esp: "Cardiologia", dif: 3,
    titulo: "Pressão caindo e pescoço com veias saltadas",
    paciente: "Mulher, 55 anos, em tratamento de câncer de pulmão",
    historia: "Falta de ar progressiva há 3 dias, agora tonta e muito cansada.",
    sinais: { PA: "82/60", FC: "126", FR: "26", Temp: "36,7 °C", SatO2: "93%" },
    exames: ["Turgência jugular", "Bulhas abafadas", "Pulso paradoxal (queda > 10 mmHg da PA na inspiração)"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Tamponamento cardíaco", "Choque séptico", "Asma grave", "Hipoglicemia"],
        c: 0, exp: "Hipotensão + turgência jugular + bulhas abafadas (tríade de Beck) e pulso paradoxal indicam tamponamento — aqui, provável derrame neoplásico." },
      { p: "Qual o tratamento definitivo de urgência?",
        op: ["Pericardiocentese (drenagem do pericárdio)", "Diurético venoso", "Nitroglicerina", "Betabloqueador"],
        c: 0, exp: "Drenar o líquido pericárdico restaura o enchimento do coração. Diuréticos e vasodilatadores pioram o quadro." }
    ]
  },
  {
    id: "endocardite", esp: "Cardiologia", dif: 3,
    titulo: "Febre que não passa e sopro novo",
    paciente: "Homem, 31 anos, usuário de drogas injetáveis",
    historia: "Febre há 2 semanas, cansaço e perda de apetite.",
    sinais: { PA: "110/70", FC: "108", FR: "20", Temp: "38,9 °C", SatO2: "95%" },
    exames: ["Sopro cardíaco novo", "Hemorragias em lasca nas unhas"],
    perguntas: [
      { p: "Qual a hipótese principal?",
        op: ["Endocardite infecciosa", "Gripe prolongada", "Febre reumática", "Mononucleose"],
        c: 0, exp: "Febre persistente + sopro novo + fator de risco (droga injetável) = endocardite até prova em contrário." },
      { p: "Quais exames são essenciais para o diagnóstico?",
        op: ["Hemoculturas seriadas e ecocardiograma", "Apenas hemograma", "Radiografia de tórax isolada", "Teste rápido de gripe"],
        c: 0, exp: "Os critérios de Duke se baseiam em hemoculturas positivas e achados do ecocardiograma (vegetação)." },
      { p: "Em usuários de drogas injetáveis, qual válvula é tipicamente acometida?",
        op: ["Tricúspide", "Aórtica", "Pulmonar", "Nenhuma"],
        c: 0, exp: "A tricúspide é a mais afetada em usuários de drogas IV, com o S. aureus como principal agente." }
    ]
  },
  {
    id: "estenose-aortica", esp: "Cardiologia", dif: 2,
    titulo: "Desmaio ao subir escada",
    paciente: "Homem, 78 anos",
    historia: "Desmaiou ao subir a escada. Também sente aperto no peito e falta de ar aos esforços.",
    sinais: { PA: "120/90", FC: "76", FR: "18", Temp: "36,4 °C", SatO2: "96%" },
    exames: ["Sopro sistólico ejetivo em foco aórtico que irradia para as carótidas", "Pulso carotídeo fraco e lento"],
    perguntas: [
      { p: "Qual valvopatia é mais provável?",
        op: ["Estenose aórtica", "Insuficiência mitral", "Estenose mitral", "Prolapso mitral"],
        c: 0, exp: "Idoso com angina, síncope e dispneia aos esforços e sopro sistólico ejetivo em foco aórtico irradiando para carótidas = estenose aórtica." },
      { p: "Estenose aórtica grave e com sintomas. Qual o tratamento?",
        op: ["Troca valvar (cirúrgica ou por cateter — TAVI)", "Apenas diurético", "Vasodilatador em dose alta", "Observação"],
        c: 0, exp: "Com sintomas, a sobrevida cai muito: está indicada a troca da válvula." }
    ]
  },
  {
    id: "bavt", esp: "Cardiologia", dif: 2,
    titulo: "Coração muito lento",
    paciente: "Mulher, 80 anos",
    historia: "Tonturas e dois quase-desmaios hoje.",
    sinais: { PA: "88/50", FC: "34", FR: "18", Temp: "36,2 °C", SatO2: "95%" },
    exames: ["ECG: ondas P e QRS sem relação entre si (dissociação atrioventricular)"],
    perguntas: [
      { p: "Qual o ritmo?",
        op: ["Bloqueio atrioventricular total (3º grau)", "Bradicardia sinusal", "Fibrilação atrial", "BAV de 1º grau"],
        c: 0, exp: "Átrios e ventrículos batem de forma independente: BAV total." },
      { p: "Paciente instável. Qual a conduta?",
        op: ["Marcapasso (transcutâneo de imediato e depois definitivo)", "Betabloqueador", "Digoxina", "Alta com retorno"],
        c: 0, exp: "Bradicardia instável: atropina pode ser tentada, mas no BAV total costuma falhar; usa-se marcapasso transcutâneo e depois implante definitivo." }
    ]
  },

  // ---------- Pneumologia ----------
  {
    id: "asma-crise", esp: "Pneumologia", dif: 1,
    titulo: "Chiado forte depois da poeira",
    paciente: "Mulher, 24 anos, asmática",
    historia: "Começou com falta de ar e chiado após limpar um armário empoeirado. Fala frases curtas.",
    sinais: { PA: "125/80", FC: "112", FR: "28", Temp: "36,6 °C", SatO2: "92%" },
    exames: ["Sibilos difusos", "Uso de musculatura acessória"],
    perguntas: [
      { p: "Qual o tratamento inicial?",
        op: ["Broncodilatador de curta ação inalatório (ex.: salbutamol) repetido", "Antibiótico", "Antitussígeno", "Sedativo"],
        c: 0, exp: "Beta-2 agonista de curta ação inalatório é a base, repetido na primeira hora; ipratrópio ajuda nas crises graves." },
      { p: "O que deve ser associado precocemente na crise moderada/grave?",
        op: ["Corticoide sistêmico", "Antibiótico", "Anti-histamínico", "Mucolítico"],
        c: 0, exp: "Corticoide oral ou venoso reduz inflamação, risco de internação e recaída." }
    ]
  },
  {
    id: "dpoc-exacerbada", esp: "Pneumologia", dif: 2,
    titulo: "Fumante com mais catarro e falta de ar",
    paciente: "Homem, 68 anos, fumou 50 maços-ano, DPOC",
    historia: "Há 3 dias piorou a falta de ar, aumentou a quantidade de catarro, que ficou esverdeado.",
    sinais: { PA: "140/85", FC: "102", FR: "26", Temp: "37,4 °C", SatO2: "86%" },
    exames: ["Sibilos e roncos difusos", "Tórax em tonel"],
    perguntas: [
      { p: "Qual a meta de saturação de oxigênio para este paciente?",
        op: ["88–92%", "100%", "75–80%", "Não precisa de oxigênio"],
        c: 0, exp: "Na DPOC com retenção de CO₂, oxigênio demais pode piorar a hipercapnia; mira-se 88–92%." },
      { p: "Além de broncodilatadores e corticoide, o que está indicado?",
        op: ["Antibiótico, pois o catarro ficou purulento", "Nada mais", "Anticoagulação", "Diurético"],
        c: 0, exp: "Aumento de dispneia, volume e purulência do escarro indicam antibiótico na exacerbação. Ventilação não invasiva se acidose respiratória." }
    ]
  },
  {
    id: "pneumotorax-hipertensivo", esp: "Pneumologia", dif: 3,
    titulo: "Batida de moto e falta de ar",
    paciente: "Homem, 25 anos, vítima de acidente de moto",
    historia: "Dor no tórax esquerdo e falta de ar que piora rapidamente.",
    sinais: { PA: "78/40", FC: "138", FR: "36", Temp: "36,3 °C", SatO2: "82%" },
    exames: ["Murmúrio vesicular abolido à esquerda", "Hipertimpanismo à percussão", "Traqueia desviada para a direita", "Veias do pescoço distendidas"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Pneumotórax hipertensivo", "Contusão leve", "Crise de ansiedade", "Asma"],
        c: 0, exp: "Trauma + MV abolido + hipertimpanismo + desvio de traqueia + choque = pneumotórax hipertensivo." },
      { p: "Qual a conduta imediata?",
        op: ["Descompressão imediata com agulha, sem esperar radiografia, e depois drenagem torácica", "Fazer radiografia antes de qualquer coisa", "Intubar e observar", "Analgesia e reavaliar"],
        c: 0, exp: "É diagnóstico clínico: descomprime-se na hora e depois coloca-se dreno de tórax." }
    ]
  },
  {
    id: "tuberculose", esp: "Pneumologia", dif: 2,
    titulo: "Tosse há um mês e emagrecimento",
    paciente: "Homem, 40 anos, morador de abrigo",
    historia: "Tosse há 5 semanas, febre no fim da tarde, suor à noite e perdeu 7 kg.",
    sinais: { PA: "110/70", FC: "92", FR: "20", Temp: "37,9 °C", SatO2: "96%" },
    exames: ["Radiografia: cavitação no ápice do pulmão direito"],
    perguntas: [
      { p: "Qual a hipótese principal?",
        op: ["Tuberculose pulmonar", "Asma", "Refluxo", "Sinusite"],
        c: 0, exp: "Tosse > 3 semanas, febre vespertina, sudorese noturna, emagrecimento e cavitação apical sugerem tuberculose." },
      { p: "Qual exame confirma o diagnóstico?",
        op: ["Pesquisa do bacilo no escarro (baciloscopia ou teste rápido molecular)", "Hemograma", "Espirometria", "PCR (proteína C reativa)"],
        c: 0, exp: "Escarro para baciloscopia ou teste rápido molecular (TRM-TB), com cultura." },
      { p: "Qual o esquema básico de tratamento no adulto?",
        op: ["Rifampicina, isoniazida, pirazinamida e etambutol por 2 meses, depois rifampicina e isoniazida por 4 meses", "Amoxicilina por 7 dias", "Azitromicina por 5 dias", "Só isoniazida por 1 mês"],
        c: 0, exp: "Esquema básico: 2 meses de RIPE e 4 meses de RI, total de 6 meses." }
    ]
  },
  {
    id: "derrame-pleural", esp: "Pneumologia", dif: 3,
    titulo: "Líquido no pulmão",
    paciente: "Mulher, 60 anos",
    historia: "Falta de ar progressiva. Radiografia mostra derrame pleural à direita. Foi feita punção.",
    sinais: { PA: "130/80", FC: "90", FR: "22", Temp: "37,2 °C", SatO2: "94%" },
    exames: ["Proteína do líquido / proteína do sangue = 0,7", "LDH do líquido / LDH do sangue = 0,8"],
    perguntas: [
      { p: "Pelos critérios de Light, esse derrame é:",
        op: ["Exsudato", "Transudato", "Normal", "Sangue puro"],
        c: 0, exp: "Basta um critério: proteína pleural/sérica > 0,5 ou LDH pleural/sérica > 0,6 (ou LDH pleural > 2/3 do limite superior do sangue) = exsudato." },
      { p: "Qual causa combina com exsudato?",
        op: ["Pneumonia, câncer ou tuberculose", "Insuficiência cardíaca", "Cirrose", "Síndrome nefrótica"],
        c: 0, exp: "Exsudatos vêm de inflamação/infecção/câncer. Insuficiência cardíaca, cirrose e nefrótica causam transudatos." }
    ]
  },

  // ---------- Neurologia ----------
  {
    id: "hsa", esp: "Neurologia", dif: 3,
    titulo: "A pior dor de cabeça da vida",
    paciente: "Mulher, 45 anos",
    historia: "Dor de cabeça súbita, explosiva, a pior que já sentiu, enquanto fazia força. Vomitou.",
    sinais: { PA: "170/100", FC: "88", FR: "18", Temp: "36,8 °C", SatO2: "98%" },
    exames: ["Rigidez de nuca leve", "Sem déficit focal"],
    perguntas: [
      { p: "Qual a hipótese que não pode ser perdida?",
        op: ["Hemorragia subaracnoide (ruptura de aneurisma)", "Enxaqueca", "Cefaleia tensional", "Sinusite"],
        c: 0, exp: "Cefaleia em trovoada (máxima em segundos) é hemorragia subaracnoide até prova em contrário." },
      { p: "Tomografia sem contraste normal. Qual o próximo passo?",
        op: ["Punção lombar (buscar sangue/xantocromia)", "Alta com analgésico", "Ressonância eletiva em 3 meses", "Eletroencefalograma"],
        c: 0, exp: "A TC pode ser normal, especialmente após 6 horas. A punção lombar mostra sangue ou xantocromia. Depois, angiografia para achar o aneurisma." }
    ]
  },
  {
    id: "enxaqueca", esp: "Neurologia", dif: 1,
    titulo: "Dor latejante de um lado da cabeça",
    paciente: "Mulher, 26 anos",
    historia: "Crises de dor latejante de um lado, com náusea, incômodo com luz e barulho, que duram cerca de 12 horas. Piora com atividade.",
    sinais: { PA: "115/75", FC: "80", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Exame neurológico normal"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Enxaqueca (migrânea)", "Cefaleia em salvas", "Hemorragia cerebral", "Meningite"],
        c: 0, exp: "Dor unilateral, pulsátil, moderada a forte, com náusea, foto e fonofobia, de 4 a 72 h, com exame normal = enxaqueca." },
      { p: "Qual tratamento é adequado na crise?",
        op: ["Anti-inflamatório e/ou triptano", "Opioide de rotina", "Antibiótico", "Corticoide por 30 dias"],
        c: 0, exp: "AINE, dipirona ou triptanos na crise (com antiemético se náusea). Crises frequentes pedem tratamento preventivo." }
    ]
  },
  {
    id: "guillain-barre", esp: "Neurologia", dif: 2,
    titulo: "Fraqueza que sobe pelas pernas",
    paciente: "Homem, 34 anos",
    historia: "Teve diarreia há 2 semanas. Há 3 dias as pernas estão fracas e agora a fraqueza chegou aos braços.",
    sinais: { PA: "130/80", FC: "96", FR: "20", Temp: "36,6 °C", SatO2: "97%" },
    exames: ["Fraqueza simétrica ascendente", "Reflexos abolidos"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Síndrome de Guillain-Barré", "AVC", "Miastenia gravis", "Hipoglicemia"],
        c: 0, exp: "Fraqueza ascendente, simétrica, com arreflexia após infecção (ex.: Campylobacter) = Guillain-Barré." },
      { p: "Qual achado no líquor é típico?",
        op: ["Proteína alta com poucas células (dissociação proteíno-citológica)", "Muitos neutrófilos", "Glicose muito baixa", "Sangue"],
        c: 0, exp: "Proteína elevada com celularidade normal é o achado clássico." },
      { p: "Qual o tratamento?",
        op: ["Imunoglobulina venosa ou plasmaférese, monitorando a respiração", "Corticoide oral isolado", "Antibiótico", "Só fisioterapia"],
        c: 0, exp: "Imunoglobulina ou plasmaférese aceleram a recuperação. A capacidade vital deve ser acompanhada pelo risco de insuficiência respiratória. Corticoide não ajuda." }
    ]
  },
  {
    id: "miastenia", esp: "Neurologia", dif: 2,
    titulo: "Pálpebra caída no fim do dia",
    paciente: "Mulher, 32 anos",
    historia: "No fim do dia a pálpebra cai e vê dobrado. Melhora com repouso. Cansa ao mastigar.",
    sinais: { PA: "120/75", FC: "78", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Ptose que piora ao olhar para cima por 1 minuto"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Miastenia gravis", "Paralisia de Bell", "AVC", "Esclerose múltipla"],
        c: 0, exp: "Fraqueza flutuante que piora com uso e melhora com repouso, com ptose e diplopia, sugere miastenia gravis." },
      { p: "Qual exame de sangue ajuda a confirmar?",
        op: ["Anticorpo antirreceptor de acetilcolina", "TSH", "Ferritina", "CPK"],
        c: 0, exp: "O anticorpo antirreceptor de acetilcolina é positivo na maioria. Deve-se fazer também TC de tórax para buscar timoma." },
      { p: "Qual remédio melhora os sintomas?",
        op: ["Piridostigmina", "Haloperidol", "Morfina", "Aminoglicosídeo"],
        c: 0, exp: "A piridostigmina (anticolinesterásico) melhora a força. Aminoglicosídeos podem piorar a miastenia." }
    ]
  },
  {
    id: "bell", esp: "Neurologia", dif: 1,
    titulo: "Rosto torto ao acordar",
    paciente: "Homem, 40 anos",
    historia: "Acordou com o lado direito do rosto paralisado. Não consegue fechar o olho nem franzir a testa desse lado.",
    sinais: { PA: "125/80", FC: "76", FR: "16", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Paralisia de toda a hemiface direita, incluindo a testa", "Força dos braços e pernas normal"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Paralisia facial periférica (de Bell)", "AVC", "Tumor cerebral", "Enxaqueca"],
        c: 0, exp: "Paralisia periférica pega a testa. No AVC (central) a testa costuma ser poupada e há outros déficits." },
      { p: "Qual o tratamento?",
        op: ["Corticoide oral nas primeiras 72 h e proteção do olho", "Trombólise", "Cirurgia imediata", "Antibiótico"],
        c: 0, exp: "Prednisona precoce melhora a recuperação. Colírio lubrificante e oclusão noturna protegem a córnea." }
    ]
  },

  // ---------- Infectologia ----------
  {
    id: "sepse", esp: "Infectologia", dif: 3,
    titulo: "Febre, confusão e pressão baixa",
    paciente: "Mulher, 70 anos, com infecção urinária",
    historia: "Febre há 2 dias, hoje está confusa e quase não urinou.",
    sinais: { PA: "80/45", FC: "124", FR: "28", Temp: "39,2 °C", SatO2: "93%" },
    exames: ["Lactato: 4,5 mmol/L"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Sepse com choque provável (foco urinário)", "Desidratação simples", "AVC", "Ansiedade"],
        c: 0, exp: "Infecção + disfunção orgânica (confusão, hipotensão, oligúria, lactato alto) = sepse, com provável choque séptico." },
      { p: "O que fazer na primeira hora?",
        op: ["Colher hemoculturas, iniciar antibiótico de amplo espectro e dar cristaloide (30 mL/kg)", "Esperar a urocultura para escolher o antibiótico", "Dar só antitérmico", "Diurético"],
        c: 0, exp: "O pacote da primeira hora: lactato, hemoculturas, antibiótico precoce e volume em hipotensão ou lactato ≥ 4." },
      { p: "Se a pressão continuar baixa após o volume, qual o vasopressor de escolha?",
        op: ["Noradrenalina", "Dopamina sempre", "Furosemida", "Nitroprussiato"],
        c: 0, exp: "Noradrenalina é o vasopressor de primeira escolha, com meta de PAM ≥ 65 mmHg." }
    ]
  },
  {
    id: "pneumocistose", esp: "Infectologia", dif: 3,
    titulo: "Falta de ar progressiva em paciente com HIV",
    paciente: "Homem, 36 anos, HIV sem tratamento",
    historia: "Há 3 semanas com tosse seca, febre e falta de ar que vem piorando.",
    sinais: { PA: "110/70", FC: "110", FR: "30", Temp: "38,2 °C", SatO2: "86%" },
    exames: ["CD4: 80 células/mm³", "Radiografia: infiltrado intersticial bilateral", "PaO₂: 58 mmHg"],
    perguntas: [
      { p: "Qual a hipótese mais provável?",
        op: ["Pneumocistose (Pneumocystis jirovecii)", "Asma", "Pneumotórax", "Insuficiência cardíaca"],
        c: 0, exp: "HIV com CD4 < 200, tosse seca, hipoxemia e infiltrado intersticial bilateral = pneumocistose." },
      { p: "Qual o tratamento?",
        op: ["Sulfametoxazol-trimetoprima, com corticoide porque a PaO₂ está < 70 mmHg", "Amoxicilina", "Fluconazol", "Aciclovir"],
        c: 0, exp: "SMX-TMP é a escolha. Corticoide reduz mortalidade quando PaO₂ < 70 mmHg." }
    ]
  },
  {
    id: "malaria", esp: "Infectologia", dif: 2,
    titulo: "Febre depois de viagem à Amazônia",
    paciente: "Homem, 29 anos, voltou do garimpo no Pará",
    historia: "Febre alta com calafrios e muito suor, em picos, há 4 dias.",
    sinais: { PA: "115/70", FC: "104", FR: "18", Temp: "39,6 °C", SatO2: "98%" },
    exames: ["Baço palpável", "Plaquetas: 90.000"],
    perguntas: [
      { p: "Qual exame confirma o diagnóstico?",
        op: ["Gota espessa (ou teste rápido para malária)", "Hemocultura", "Raio-X", "Urina"],
        c: 0, exp: "A gota espessa identifica o plasmódio e a espécie. Testes rápidos também podem ser usados." },
      { p: "Gota espessa: Plasmodium vivax. Qual o tratamento no Brasil?",
        op: ["Cloroquina e primaquina", "Só dipirona", "Amoxicilina", "Oseltamivir"],
        c: 0, exp: "Cloroquina trata a fase do sangue e primaquina elimina as formas que ficam no fígado (hipnozoítos), evitando recaídas." }
    ]
  },
  {
    id: "leptospirose", esp: "Infectologia", dif: 2,
    titulo: "Febre e dor na batata da perna após enchente",
    paciente: "Homem, 38 anos",
    historia: "Limpou a casa após enchente há 10 dias. Agora tem febre, dor forte nas panturrilhas e olhos vermelhos.",
    sinais: { PA: "100/60", FC: "106", FR: "22", Temp: "38,8 °C", SatO2: "95%" },
    exames: ["Icterícia", "Creatinina elevada", "Sufusão conjuntival"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Leptospirose (forma grave — síndrome de Weil)", "Dengue clássica", "Gripe", "Hepatite A"],
        c: 0, exp: "Exposição a água de enchente + mialgia em panturrilhas + sufusão conjuntival + icterícia e lesão renal = leptospirose grave." },
      { p: "Qual o tratamento da forma grave?",
        op: ["Antibiótico venoso (penicilina cristalina ou ceftriaxona) e suporte", "Antiviral", "Só hidratação oral em casa", "Corticoide isolado"],
        c: 0, exp: "Formas graves recebem penicilina ou ceftriaxona IV, com suporte renal se preciso. Formas leves: doxiciclina ou amoxicilina." }
    ]
  },
  {
    id: "sifilis", esp: "Infectologia", dif: 1,
    titulo: "Ferida no pênis que não dói",
    paciente: "Homem, 23 anos",
    historia: "Apareceu uma ferida no pênis há 10 dias, que não dói. Relação sem preservativo há 1 mês.",
    sinais: { PA: "120/80", FC: "76", FR: "16", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Úlcera única, de bordas endurecidas, fundo limpo e indolor", "Gânglio na virilha"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Sífilis primária (cancro duro)", "Herpes genital", "Cancro mole", "Alergia"],
        c: 0, exp: "Úlcera única, indolor, de base endurecida = cancro duro da sífilis primária. Herpes dá vesículas dolorosas." },
      { p: "Qual o tratamento?",
        op: ["Penicilina benzatina 2,4 milhões UI intramuscular, dose única", "Aciclovir", "Pomada antibiótica", "Fluconazol"],
        c: 0, exp: "Na sífilis recente, penicilina benzatina 2,4 milhões UI IM. Tratar parcerias e testar HIV e hepatites." }
    ]
  },

  // ---------- Endocrinologia ----------
  {
    id: "graves", esp: "Endocrinologia", dif: 2,
    titulo: "Emagrecendo comendo muito",
    paciente: "Mulher, 30 anos",
    historia: "Perdeu 8 kg comendo bem, sente calor, palpitações, tremores e está ansiosa. Olhos mais saltados.",
    sinais: { PA: "140/70", FC: "118", FR: "18", Temp: "37,3 °C", SatO2: "99%" },
    exames: ["Bócio difuso", "TSH suprimido", "T4 livre alto"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Doença de Graves (hipertireoidismo)", "Hipotireoidismo", "Ansiedade apenas", "Diabetes"],
        c: 0, exp: "Hipertireoidismo com bócio difuso e oftalmopatia (exoftalmia) = Graves." },
      { p: "Qual tratamento inicial é adequado?",
        op: ["Metimazol + betabloqueador para os sintomas", "Levotiroxina", "Insulina", "Corticoide isolado"],
        c: 0, exp: "Metimazol bloqueia a produção do hormônio e o betabloqueador (ex.: propranolol) controla palpitações e tremor. Iodo radioativo e cirurgia são outras opções." }
    ]
  },
  {
    id: "ehh", esp: "Endocrinologia", dif: 3,
    titulo: "Idoso sonolento com açúcar altíssimo",
    paciente: "Homem, 79 anos, diabetes tipo 2",
    historia: "Há 1 semana bebendo pouco, urinando muito. Hoje está sonolento.",
    sinais: { PA: "95/60", FC: "112", FR: "18", Temp: "37,0 °C", SatO2: "96%" },
    exames: ["Glicemia: 950 mg/dL", "Osmolaridade: 350 mOsm/kg", "pH 7,36, sem cetose relevante"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Estado hiperglicêmico hiperosmolar", "Cetoacidose diabética", "Hipoglicemia", "AVC"],
        c: 0, exp: "Glicemia muito alta, osmolaridade alta e alteração de consciência, sem acidose ou cetose importantes = estado hiperosmolar, típico do DM2 idoso." },
      { p: "Qual a medida principal?",
        op: ["Hidratação venosa vigorosa (com atenção ao sódio), depois insulina", "Bicarbonato", "Restringir líquidos", "Insulina sem hidratar"],
        c: 0, exp: "A grande perda é de água: hidratação venosa é a medida central, seguida de insulina em infusão e reposição de potássio conforme exames." }
    ]
  },
  {
    id: "crise-adrenal", esp: "Endocrinologia", dif: 3,
    titulo: "Pressão baixa que não sobe",
    paciente: "Mulher, 50 anos, usava prednisona há meses e parou de repente",
    historia: "Fraqueza, vômitos, dor abdominal e tontura.",
    sinais: { PA: "75/40", FC: "120", FR: "22", Temp: "37,6 °C", SatO2: "97%" },
    exames: ["Sódio: 126 mEq/L", "Glicemia: 58 mg/dL", "Não melhora com soro e noradrenalina"],
    perguntas: [
      { p: "Qual a hipótese?",
        op: ["Insuficiência adrenal aguda (crise adrenal)", "Gastroenterite simples", "Infarto", "Anafilaxia"],
        c: 0, exp: "Suspensão abrupta de corticoide crônico + hipotensão refratária, hiponatremia e hipoglicemia = crise adrenal." },
      { p: "Qual o tratamento imediato?",
        op: ["Hidrocortisona venosa + soro fisiológico (e glicose se hipoglicemia)", "Levotiroxina", "Insulina", "Esperar exames de cortisol"],
        c: 0, exp: "Não se espera exame: hidrocortisona IV em dose alta e reposição volêmica salvam a vida." }
    ]
  },
  {
    id: "dm2", esp: "Endocrinologia", dif: 1,
    titulo: "Exame de rotina alterado",
    paciente: "Homem, 52 anos, com sobrepeso",
    historia: "Sem queixas. Veio trazer exames do check-up.",
    sinais: { PA: "135/85", FC: "78", FR: "16", Temp: "36,5 °C", SatO2: "98%" },
    exames: ["Glicemia de jejum: 140 e 138 mg/dL (dois dias diferentes)", "Hemoglobina glicada: 7,1%"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Diabetes mellitus tipo 2", "Pré-diabetes", "Normal", "Diabetes tipo 1"],
        c: 0, exp: "Glicemia de jejum ≥ 126 mg/dL confirmada ou hemoglobina glicada ≥ 6,5% fecham o diagnóstico de diabetes." },
      { p: "Além de dieta e atividade física, qual o remédio de primeira linha habitual?",
        op: ["Metformina", "Insulina NPH em dose alta", "Glibenclamida obrigatória", "Corticoide"],
        c: 0, exp: "Metformina é a primeira escolha na maioria. Em quem tem doença cardiovascular ou renal, iSGLT2 ou agonistas de GLP-1 ganham espaço." }
    ]
  },

  // ---------- Gastroenterologia ----------
  {
    id: "pancreatite", esp: "Gastroenterologia", dif: 2,
    titulo: "Dor em faixa depois da festa",
    paciente: "Homem, 44 anos, bebeu muito no fim de semana",
    historia: "Dor forte no alto da barriga, que vai para as costas como uma faixa, com vômitos.",
    sinais: { PA: "110/70", FC: "112", FR: "22", Temp: "37,8 °C", SatO2: "96%" },
    exames: ["Lipase: 6 vezes o limite normal"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Pancreatite aguda", "Úlcera perfurada", "Apendicite", "Infarto"],
        c: 0, exp: "Dor epigástrica em faixa irradiando para o dorso + lipase > 3 vezes o normal = pancreatite aguda." },
      { p: "Quais as duas causas mais comuns?",
        op: ["Cálculo biliar e álcool", "Vírus e estresse", "Café e cigarro", "Gordura e açúcar"],
        c: 0, exp: "Litíase biliar e álcool respondem pela maioria dos casos." },
      { p: "Qual a base do tratamento?",
        op: ["Hidratação venosa, analgesia e dieta assim que tolerar", "Cirurgia imediata", "Antibiótico de rotina", "Jejum prolongado por 2 semanas"],
        c: 0, exp: "Hidratação, analgesia e realimentação precoce. Antibiótico só se houver necrose infectada ou outra infecção." }
    ]
  },
  {
    id: "h-pylori", esp: "Gastroenterologia", dif: 1,
    titulo: "Queimação no estômago",
    paciente: "Mulher, 38 anos",
    historia: "Queimação no estômago há meses, que melhora ao comer. Endoscopia mostrou úlcera duodenal.",
    sinais: { PA: "120/80", FC: "72", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Teste da urease: positivo para Helicobacter pylori"],
    perguntas: [
      { p: "Qual o tratamento?",
        op: ["Inibidor de bomba de prótons + amoxicilina + claritromicina", "Só antiácido quando doer", "Corticoide", "Cirurgia"],
        c: 0, exp: "Erradicar o H. pylori cura a úlcera e evita recidiva: IBP + dois antibióticos (ex.: amoxicilina e claritromicina), geralmente por 14 dias." },
      { p: "Qual remédio comum deve ser evitado por piorar úlceras?",
        op: ["Anti-inflamatórios (AINEs)", "Paracetamol", "Vitamina C", "Probiótico"],
        c: 0, exp: "AINEs e AAS são a segunda grande causa de úlcera péptica." }
    ]
  },
  {
    id: "encefalopatia-hepatica", esp: "Gastroenterologia", dif: 2,
    titulo: "Cirrótico confuso",
    paciente: "Homem, 60 anos, com cirrose",
    historia: "Há 2 dias está sonolento e confuso. Está com intestino preso.",
    sinais: { PA: "105/65", FC: "88", FR: "18", Temp: "36,8 °C", SatO2: "96%" },
    exames: ["Asterixis (tremor em 'bater de asas')", "Icterícia leve"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Encefalopatia hepática", "AVC", "Demência", "Hipotireoidismo"],
        c: 0, exp: "Cirrose + confusão + asterixis = encefalopatia hepática." },
      { p: "Qual o tratamento principal, além de corrigir o fator desencadeante?",
        op: ["Lactulose", "Benzodiazepínico", "Dieta sem nenhuma proteína", "Diurético em dose alta"],
        c: 0, exp: "Lactulose reduz a absorção de amônia. Busca-se o gatilho: constipação, infecção, sangramento, distúrbio eletrolítico ou sedativos. Rifaximina é adjuvante." }
    ]
  },
  {
    id: "celiaca", esp: "Gastroenterologia", dif: 2,
    titulo: "Diarreia crônica e anemia",
    paciente: "Mulher, 27 anos",
    historia: "Diarreia e barriga estufada há anos, perdeu peso. Tem anemia que não melhora com ferro oral.",
    sinais: { PA: "110/70", FC: "84", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Anticorpo antitransglutaminase IgA positivo"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Doença celíaca", "Síndrome do intestino irritável", "Apendicite", "Gastrite"],
        c: 0, exp: "Má absorção (diarreia, perda de peso, anemia ferropriva refratária) com antitransglutaminase positivo sugere doença celíaca." },
      { p: "Como se confirma e trata?",
        op: ["Biópsia de duodeno (atrofia das vilosidades) e dieta sem glúten para sempre", "Antibiótico por 7 dias", "Corticoide", "Cirurgia"],
        c: 0, exp: "Confirma-se com biópsia, ainda comendo glúten. O tratamento é retirar o glúten da dieta por toda a vida." }
    ]
  },
  {
    id: "hepatite-a", esp: "Gastroenterologia", dif: 1,
    titulo: "Olhos amarelos depois de acampar",
    paciente: "Rapaz, 17 anos",
    historia: "Febre, enjoo e cansaço por uma semana; agora olhos amarelos e urina escura. Acampou e bebeu água de riacho.",
    sinais: { PA: "115/70", FC: "84", FR: "16", Temp: "37,4 °C", SatO2: "99%" },
    exames: ["Transaminases muito altas", "Anti-HAV IgM positivo"],
    perguntas: [
      { p: "Como a hepatite A é transmitida?",
        op: ["Via fecal-oral (água e alimentos contaminados)", "Sangue", "Relação sexual apenas", "Picada de mosquito"],
        c: 0, exp: "Hepatite A é transmitida por água e alimentos contaminados." },
      { p: "Qual o tratamento?",
        op: ["Suporte (repouso, hidratação, evitar álcool e remédios tóxicos ao fígado)", "Antiviral por 1 ano", "Interferon", "Transplante"],
        c: 0, exp: "Costuma ser autolimitada e não cronifica. Existe vacina para prevenir." }
    ]
  },

  // ---------- Hematologia ----------
  {
    id: "b12", esp: "Hematologia", dif: 2,
    titulo: "Formigamento nos pés e anemia",
    paciente: "Mulher, 66 anos, vegana há 10 anos",
    historia: "Cansaço, formigamento nos pés e esquecimento.",
    sinais: { PA: "120/75", FC: "92", FR: "16", Temp: "36,4 °C", SatO2: "98%" },
    exames: ["Hemoglobina: 9 g/dL", "VCM alto (macrocitose)", "Neutrófilos hipersegmentados"],
    perguntas: [
      { p: "Qual deficiência é mais provável?",
        op: ["Vitamina B12", "Ferro", "Vitamina C", "Vitamina D"],
        c: 0, exp: "Anemia macrocítica com neutrófilos hipersegmentados e sintomas neurológicos = deficiência de B12 (dieta vegana ou anemia perniciosa)." },
      { p: "Qual o tratamento?",
        op: ["Reposição de vitamina B12 (injetável ou oral em dose alta)", "Só ácido fólico", "Transfusão sempre", "Ferro venoso"],
        c: 0, exp: "Repor B12. Dar só ácido fólico pode corrigir a anemia mas deixar piorar a lesão neurológica." }
    ]
  },
  {
    id: "falciforme", esp: "Hematologia", dif: 2,
    titulo: "Dor forte nos ossos",
    paciente: "Rapaz, 16 anos, com anemia falciforme",
    historia: "Dor intensa nas pernas e nas costas desde ontem, depois de um dia muito quente.",
    sinais: { PA: "120/70", FC: "108", FR: "20", Temp: "37,5 °C", SatO2: "95%" },
    exames: ["Hemoglobina: 7,5 g/dL (habitual 8)"],
    perguntas: [
      { p: "O que está acontecendo?",
        op: ["Crise vaso-oclusiva (dolorosa)", "Fratura", "Crise de ansiedade", "Artrite reumatoide"],
        c: 0, exp: "Na anemia falciforme, as hemácias em foice obstruem pequenos vasos e causam crises de dor, muitas vezes após desidratação, frio ou infecção." },
      { p: "Qual a base do tratamento?",
        op: ["Hidratação e analgesia potente (incluindo opioides se necessário)", "Só observar", "Anticoagulação", "Ferro oral"],
        c: 0, exp: "Hidratação e analgesia rápida e adequada. Oxigênio se hipoxemia. Atenção à síndrome torácica aguda." }
    ]
  },
  {
    id: "pti", esp: "Hematologia", dif: 2,
    titulo: "Manchinhas roxas depois de uma virose",
    paciente: "Menino, 5 anos",
    historia: "Teve virose há 3 semanas. Hoje apareceram muitos pontinhos roxos pelo corpo. Está bem, brincando.",
    sinais: { PA: "—", FC: "96", FR: "22", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Plaquetas: 15.000", "Hemoglobina e leucócitos normais", "Sem fígado ou baço aumentados"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Púrpura trombocitopênica imune (PTI)", "Leucemia", "Hemofilia", "Meningococcemia"],
        c: 0, exp: "Criança bem, após virose, com plaquetas baixas isoladas e resto do hemograma normal = PTI." },
      { p: "Sem sangramento importante, qual a conduta?",
        op: ["Observação, pois costuma melhorar sozinha", "Transfusão de plaquetas", "Retirar o baço", "Quimioterapia"],
        c: 0, exp: "Na criança, a PTI costuma ser autolimitada. Corticoide ou imunoglobulina se sangramento relevante." }
    ]
  },
  {
    id: "leucemia", esp: "Hematologia", dif: 3,
    titulo: "Criança pálida com febre e manchas",
    paciente: "Menina, 4 anos",
    historia: "Há 3 semanas pálida, cansada, com febre e dor nos ossos. Surgiram manchas roxas.",
    sinais: { PA: "—", FC: "128", FR: "24", Temp: "38,1 °C", SatO2: "98%" },
    exames: ["Fígado e baço aumentados", "Hemograma: anemia, plaquetas baixas e presença de blastos"],
    perguntas: [
      { p: "Qual a principal hipótese?",
        op: ["Leucemia aguda", "PTI", "Anemia ferropriva", "Gripe"],
        c: 0, exp: "Queda das três linhagens, blastos, dor óssea e visceromegalia sugerem leucemia aguda. Na criança, a mais comum é a linfoide (LLA)." },
      { p: "Qual exame confirma?",
        op: ["Mielograma (exame da medula óssea)", "Raio-X", "Urina", "Ultrassom"],
        c: 0, exp: "O mielograma com imunofenotipagem confirma e classifica a leucemia." }
    ]
  },
  {
    id: "hemofilia", esp: "Hematologia", dif: 2,
    titulo: "Joelho inchado sem trauma importante",
    paciente: "Menino, 8 anos",
    historia: "Joelho inchado e dolorido depois de uma queda leve. Já teve sangramentos grandes ao tirar dente. Tio com problema parecido.",
    sinais: { PA: "—", FC: "92", FR: "20", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["TTPa prolongado", "TP e plaquetas normais"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Hemofilia A (deficiência de fator VIII)", "PTI", "Leucemia", "Artrite séptica"],
        c: 0, exp: "Menino com hemartrose, história familiar ligada ao X e TTPa alto isolado = hemofilia (A é a mais comum)." },
      { p: "Qual o tratamento do sangramento?",
        op: ["Reposição do fator VIII", "Plaquetas", "Vitamina K", "AAS para a dor"],
        c: 0, exp: "Repor o fator deficiente. Evitar AAS e AINEs." }
    ]
  },
  {
    id: "tvp", esp: "Hematologia", dif: 1,
    titulo: "Perna inchada após viagem longa",
    paciente: "Mulher, 42 anos, usa anticoncepcional",
    historia: "Voltou de viagem de ônibus de 20 horas. A perna esquerda está inchada, dolorida e mais quente.",
    sinais: { PA: "125/80", FC: "88", FR: "16", Temp: "37,1 °C", SatO2: "98%" },
    exames: ["Panturrilha esquerda 3 cm mais grossa que a direita"],
    perguntas: [
      { p: "Qual exame confirma a suspeita?",
        op: ["Ultrassom Doppler venoso da perna", "Raio-X da perna", "Eletrocardiograma", "Hemograma"],
        c: 0, exp: "O Doppler venoso mostra o trombo na veia profunda." },
      { p: "Confirmada a trombose venosa profunda, qual o tratamento?",
        op: ["Anticoagulação", "Massagem na perna", "Antibiótico", "Repouso absoluto sem remédio"],
        c: 0, exp: "Anticoagulação por pelo menos 3 meses. Rever o anticoncepcional com estrogênio." }
    ]
  },

  // ---------- Nefrologia ----------
  {
    id: "colica-renal", esp: "Nefrologia", dif: 1,
    titulo: "Dor nas costas que vai para a virilha",
    paciente: "Homem, 35 anos",
    historia: "Dor muito forte em cólica no lado esquerdo das costas, que desce para a virilha. Não acha posição.",
    sinais: { PA: "150/90", FC: "100", FR: "20", Temp: "36,8 °C", SatO2: "99%" },
    exames: ["Urina: sangue microscópico (hematúria)"],
    perguntas: [
      { p: "Qual o diagnóstico mais provável?",
        op: ["Cólica renal por cálculo", "Apendicite", "Hérnia de disco", "Pielonefrite"],
        c: 0, exp: "Dor lombar em cólica irradiando para a virilha, inquietação e hematúria = cálculo urinário." },
      { p: "Qual o melhor exame para ver o cálculo?",
        op: ["Tomografia de abdome sem contraste", "Raio-X de tórax", "Endoscopia", "Ressonância de crânio"],
        c: 0, exp: "TC sem contraste é o exame mais sensível. Ultrassom é alternativa em gestantes e crianças." },
      { p: "Cálculo de 4 mm, sem infecção, dor controlada. Conduta?",
        op: ["Analgesia (AINE) e aguardar eliminação espontânea, podendo usar tansulosina", "Cirurgia aberta", "Antibiótico", "Nefrectomia"],
        c: 0, exp: "Cálculos ≤ 5 mm costumam sair sozinhos. Febre com obstrução é urgência para desobstruir." }
    ]
  },
  {
    id: "nefrotica", esp: "Nefrologia", dif: 2,
    titulo: "Criança inchada e urina espumosa",
    paciente: "Menino, 4 anos",
    historia: "Inchaço em volta dos olhos ao acordar, que se espalhou pelo corpo. Urina com espuma.",
    sinais: { PA: "100/60", FC: "100", FR: "22", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Proteinúria maciça", "Albumina: 1,8 g/dL", "Colesterol alto", "Sem sangue na urina"],
    perguntas: [
      { p: "Qual a síndrome?",
        op: ["Síndrome nefrótica", "Síndrome nefrítica", "Infecção urinária", "Insuficiência cardíaca"],
        c: 0, exp: "Proteinúria maciça + albumina baixa + edema + dislipidemia = síndrome nefrótica." },
      { p: "Na criança, qual a causa mais comum e o tratamento?",
        op: ["Lesão mínima, tratada com corticoide", "Câncer renal, com cirurgia", "Infecção, com antibiótico", "Cálculo, com litotripsia"],
        c: 0, exp: "Doença de lesões mínimas responde muito bem à prednisona." }
    ]
  },
  {
    id: "gnpe", esp: "Nefrologia", dif: 2,
    titulo: "Urina cor de coca-cola",
    paciente: "Menino, 8 anos",
    historia: "Teve dor de garganta há 2 semanas. Agora tem urina escura, rosto inchado e pressão alta.",
    sinais: { PA: "140/95", FC: "90", FR: "20", Temp: "36,7 °C", SatO2: "98%" },
    exames: ["Hematúria com cilindros hemáticos", "Complemento C3 baixo", "ASLO elevado"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Glomerulonefrite pós-estreptocócica (síndrome nefrítica)", "Síndrome nefrótica", "Cálculo renal", "Infecção urinária"],
        c: 0, exp: "Hematúria, edema e hipertensão 1 a 3 semanas após faringite, com C3 baixo = GNPE." },
      { p: "Qual o tratamento?",
        op: ["Suporte: restrição de sal e água e diurético para edema e pressão", "Corticoide em pulso", "Quimioterapia", "Transplante"],
        c: 0, exp: "É autolimitada: controla-se volume e pressão. O C3 normaliza em até 8 semanas." }
    ]
  },
  {
    id: "hiponatremia", esp: "Nefrologia", dif: 3,
    titulo: "Sódio baixo em idosa",
    paciente: "Mulher, 74 anos, usa hidroclorotiazida",
    historia: "Náusea, confusão leve e fraqueza há 3 dias.",
    sinais: { PA: "120/70", FC: "80", FR: "16", Temp: "36,4 °C", SatO2: "97%" },
    exames: ["Sódio: 118 mEq/L (instalado há dias)"],
    perguntas: [
      { p: "Qual o principal cuidado ao corrigir uma hiponatremia crônica?",
        op: ["Corrigir devagar (no máximo cerca de 8–10 mEq/L em 24 h)", "Corrigir o mais rápido possível", "Não corrigir nunca", "Dar muita água"],
        c: 0, exp: "Correção rápida pode causar desmielinização osmótica (mielinólise pontina), com sequelas graves." },
      { p: "Qual remédio dela pode ter contribuído?",
        op: ["Hidroclorotiazida (diurético tiazídico)", "Paracetamol", "Vitamina D", "Omeprazol"],
        c: 0, exp: "Tiazídicos são causa frequente de hiponatremia, especialmente em idosas." }
    ]
  },
  {
    id: "ira-prerrenal", esp: "Nefrologia", dif: 2,
    titulo: "Rim parando após diarreia",
    paciente: "Homem, 70 anos",
    historia: "Diarreia há 4 dias, bebendo pouco. Urinando muito pouco.",
    sinais: { PA: "95/60", FC: "108", FR: "18", Temp: "36,8 °C", SatO2: "97%" },
    exames: ["Creatinina: 2,4 (habitual 1,0)", "Ureia muito alta em relação à creatinina", "Fração de excreção de sódio < 1%"],
    perguntas: [
      { p: "Qual o tipo de lesão renal aguda?",
        op: ["Pré-renal (falta de volume)", "Pós-renal (obstrução)", "Renal intrínseca por necrose tubular", "Glomerulonefrite"],
        c: 0, exp: "Hipovolemia + FeNa < 1% (rim segurando sódio) indica causa pré-renal." },
      { p: "Qual a conduta principal?",
        op: ["Hidratação venosa e suspender remédios que pioram o rim (ex.: AINEs, IECA)", "Diálise imediata", "Diurético", "Biópsia renal"],
        c: 0, exp: "Repor volume costuma reverter. Suspender nefrotóxicos e anti-hipertensivos temporariamente." }
    ]
  },

  // ---------- Reumatologia ----------
  {
    id: "artrite-reumatoide", esp: "Reumatologia", dif: 2,
    titulo: "Mãos rígidas pela manhã",
    paciente: "Mulher, 45 anos",
    historia: "Dor e inchaço nas articulações das duas mãos há 4 meses. De manhã fica mais de 1 hora com as mãos duras.",
    sinais: { PA: "120/80", FC: "78", FR: "16", Temp: "36,6 °C", SatO2: "99%" },
    exames: ["Artrite simétrica das metacarpofalângicas e interfalângicas proximais", "Anti-CCP positivo"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Artrite reumatoide", "Artrose", "Gota", "Lúpus"],
        c: 0, exp: "Poliartrite simétrica de pequenas articulações, rigidez matinal prolongada e anti-CCP positivo = artrite reumatoide." },
      { p: "Qual o remédio de base (modificador de doença) de primeira linha?",
        op: ["Metotrexato", "Alopurinol", "Antibiótico", "Só analgésico"],
        c: 0, exp: "Metotrexato é a âncora do tratamento e deve começar cedo para evitar destruição articular." }
    ]
  },
  {
    id: "lupus", esp: "Reumatologia", dif: 2,
    titulo: "Manchas no rosto e dor nas juntas",
    paciente: "Mulher, 24 anos",
    historia: "Manchas vermelhas no rosto que pioram com sol, dores nas articulações, queda de cabelo e aftas.",
    sinais: { PA: "140/90", FC: "88", FR: "16", Temp: "37,6 °C", SatO2: "98%" },
    exames: ["Eritema malar em asa de borboleta", "FAN positivo", "Anti-DNA positivo", "Proteína na urina"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Lúpus eritematoso sistêmico", "Rosácea", "Artrite reumatoide", "Alergia"],
        c: 0, exp: "Mulher jovem com eritema malar, fotossensibilidade, artrite, úlceras orais, FAN e anti-DNA positivos = lúpus." },
      { p: "Qual remédio é indicado para praticamente todos os pacientes com lúpus?",
        op: ["Hidroxicloroquina", "Penicilina", "Alopurinol", "Insulina"],
        c: 0, exp: "A hidroxicloroquina reduz atividade e mortalidade. A proteinúria pede investigação de nefrite lúpica." }
    ]
  },
  {
    id: "espondilite", esp: "Reumatologia", dif: 2,
    titulo: "Dor nas costas que melhora com exercício",
    paciente: "Homem, 26 anos",
    historia: "Dor lombar há 1 ano, pior de madrugada e ao acordar, que melhora com movimento e piora com repouso.",
    sinais: { PA: "120/80", FC: "72", FR: "16", Temp: "36,5 °C", SatO2: "99%" },
    exames: ["Sacroileíte na radiografia/ressonância", "HLA-B27 positivo"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Espondilite anquilosante", "Hérnia de disco", "Lombalgia mecânica", "Osteoporose"],
        c: 0, exp: "Dor lombar inflamatória em homem jovem, com sacroileíte e HLA-B27 = espondilite anquilosante." },
      { p: "Qual o tratamento de primeira linha?",
        op: ["Anti-inflamatórios (AINEs) e exercício", "Repouso absoluto", "Cirurgia", "Antibiótico"],
        c: 0, exp: "AINEs e atividade física. Biológicos (anti-TNF) se não responder." }
    ]
  },
  {
    id: "artrite-septica", esp: "Reumatologia", dif: 2,
    titulo: "Joelho quente com febre",
    paciente: "Homem, 58 anos, diabético",
    historia: "Joelho direito inchado, vermelho, muito dolorido e sem conseguir mexer, com febre, há 2 dias.",
    sinais: { PA: "130/80", FC: "104", FR: "18", Temp: "38,8 °C", SatO2: "98%" },
    exames: ["Derrame articular volumoso"],
    perguntas: [
      { p: "Qual exame deve ser feito com urgência?",
        op: ["Punção da articulação (artrocentese) com análise e cultura do líquido", "Raio-X em 1 mês", "Ressonância eletiva", "Densitometria"],
        c: 0, exp: "Monoartrite aguda com febre é artrite séptica até prova em contrário: puncionar a articulação." },
      { p: "Confirmada a infecção, qual a conduta?",
        op: ["Antibiótico venoso e drenagem/lavagem da articulação", "Corticoide na articulação", "Só gelo", "Colchicina"],
        c: 0, exp: "Antibiótico (cobrindo S. aureus) e drenagem articular. Infiltrar corticoide seria perigoso." }
    ]
  },
  {
    id: "arterite-temporal", esp: "Reumatologia", dif: 3,
    titulo: "Dor na têmpora e dor ao mastigar",
    paciente: "Mulher, 74 anos",
    historia: "Dor de cabeça nova na têmpora, dor no maxilar ao mastigar e ontem perdeu a visão de um olho por alguns minutos.",
    sinais: { PA: "130/80", FC: "82", FR: "16", Temp: "37,4 °C", SatO2: "97%" },
    exames: ["Artéria temporal endurecida e dolorosa", "VHS: 90 mm/h"],
    perguntas: [
      { p: "Qual o diagnóstico?",
        op: ["Arterite de células gigantes (temporal)", "Enxaqueca", "Sinusite", "Glaucoma"],
        c: 0, exp: "Idosa com cefaleia temporal nova, claudicação de mandíbula, alteração visual e VHS alto = arterite temporal." },
      { p: "Qual a conduta?",
        op: ["Corticoide imediatamente, sem esperar a biópsia", "Esperar a biópsia para tratar", "Só analgésico", "Antibiótico"],
        c: 0, exp: "O risco de cegueira definitiva exige corticoide em dose alta logo. A biópsia da artéria temporal pode ser feita nos dias seguintes." }
    ]
  }
);
