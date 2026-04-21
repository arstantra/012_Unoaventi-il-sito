/* ================================================================
   UNOAVENTI — js/progetti.js
   Lista centralizzata di tutti i progetti del portfolio.

   Questo è l'UNICO posto dove gestire i progetti.
   La home (index.html) e il portfolio (portfolio.html)
   leggono entrambi da qui — aggiorna solo questo file.

   ── COME AGGIUNGERE UN PROGETTO ─────────────────────────────────
   1. Copia un blocco { ... } esistente
   2. Incollalo in fondo alla lista (prima del ] finale)
   3. Compila i campi — vedi guida sotto
   4. Salva e carica su GitHub

   ── CAMPI ───────────────────────────────────────────────────────
   href      → nome del file HTML del progetto
               es. 'progetto-sana-2023.html'

   img       → percorso immagine cover (da root del sito)
               es. 'img/progetti/sana-2023/cover.webp'
               Lascia '' se non hai ancora l'immagine

   pat       → pattern sfondo quando non c'è immagine:
               'pat-dots' / 'pat-lines' / 'pat-grid'

   bar       → colore barretta colorata in cima alla card:
               'var(--cmyk-c)'      → ciano
               'var(--cmyk-m)'      → magenta
               'var(--c-yel-dark)'  → giallo/oro
               'var(--inchiostro)'  → nero

   year      → anno del progetto  es. '2023'

   title     → titolo del progetto

   desc      → descrizione breve (1-2 righe max)

   cat       → categoria — usata dai filtri nel portfolio:
               'effimera'    → Architettura effimera
               'interni'  → Interior design
               'urbano'   → Arredo urbano
               'prodotto' → Design di prodotto
               'grafica'  → Grafica & Comunicazione  (viola Pantone)

   catLabel  → etichetta visibile sulla card
               es. 'Grafica & Comunicazione'

   catClass  → classe CSS per il colore dell'etichetta:
               'cat-effimera' / 'cat-interni' / 'cat-urbano' / 'cat-prodotto' / 'cat-grafica'

   ── ORDINE ──────────────────────────────────────────────────────
   I progetti vengono mostrati nell'ordine in cui li scrivi.
   Nel portfolio appaiono tutti in questo ordine.
   Nella home vengono pescati 6 a caso tra tutti.
   Metti i più recenti in cima.
   ================================================================ */

var PROGETTI = [

  {
    href:     'progetto-sana-2023.html',
    img:      'img/progetti/sana-2023/cover.webp',
    pat:      'pat-dots',
    bar:      'var(--cmyk-c)',
    year:     '2023',
    title:    'SANA 2023',
    desc:     'Allestimento per il Salone Internazionale del Biologico e del Naturale. Bologna.',
    cat:      'effimera',
    catLabel: 'Architettura effimera',
    catClass: 'cat-effimera'
  },

  {
    href:     'progetto-sana-2020.html',
    img:      'img/progetti/sana-2020/cover.webp',
    pat:      'pat-lines',
    bar:      'var(--cmyk-m)',
    year:     '2020',
    title:    'SANA 2020',
    desc:     'Allestimento per il Salone Internazionale del Biologico e del Naturale. Bologna.',
    cat:      'effimera',
    catLabel: 'Architettura effimera',
    catClass: 'cat-effimera'
  },

  {
    href:     'progetto-ingresso-libreria-ferrara.html',
    img:      'img/progetti/ingresso-libreria-ferrara/cover.jpg',
    pat:      'pat-grid',
    bar:      'var(--c-yel-dark)',
    year:     '2022',
    title:    'Soluzione di ingresso con libreria',
    desc:     'Interior design per ingresso con libreria in abitazione nel centro storico di Ferrara.',
    cat:      'interni',
    catLabel: 'Interior design',
    catClass: 'cat-interni'
  },

  {
    href:     'progetto-casa-nel-parco-2010.html',
    img:      'img/progetti/casa-nel-parco/cover.webp',
    pat:      'pat-dots',
    bar:      'var(--inchiostro)',
    year:     '2010',
    title:    'Concorso: la Casa nel Parco',
    desc:     'Progetto di concorso per una casa museo per il Parco Adamello Brenta in Trentino.',
    cat:      'interni',
    catLabel: 'Interior design',
    catClass: 'cat-interni'
  },

  {
    href:     'progetto-cosmoprof-2019.html',
    img:      'img/progetti/cosmoprof-2019/cover.webp',
    pat:      'pat-lines',
    bar:      'var(--cmyk-c)',
    year:     '2019',
    title:    'COSMOPROF 2019',
    desc:     'Allestimento per Cosmoprof Worldwide. Bologna.',
    cat:      'effimera',
    catLabel: 'Architettura effimera',
    catClass: 'cat-effimera'
  },

  {
    href:     'progetto-impianti-pubblicità-esterna.html',
    img:      'img/progetti/impianti-pubblicita-esterna/cover.webp',
    pat:      'pat-grid',
    bar:      'var(--inchiostro)',
    year:     '2007',
    title:    'Impianti per Pubblicità Esterna',
    desc:     'Design di prodotto e arredo urbano per il Comune di Ferrara. Brevetto depositato.',
    cat:      'urbano',
    catLabel: 'Arredo urbano',
    catClass: 'cat-urbano'
  },
	
  {
    href:     'progetto-bagno-interno-ferrara.html',
    img:      'img/progetti/bagno-interno-ferrara/cover.webp',
    pat:      'pat-grid',
    bar:      'var(--inchiostro)',
    year:     '2007',
    title:    'Soluzione per un piccolo bagno',
    desc:     'Nel centro di Ferrara uno spazio totalmete fuori standard è diventato un bagno pregiato.',
    cat:      'interni',
    catLabel: 'Interior design',
    catClass: 'cat-interni'
  },
	
  {
    href:     'progetto-saccafisola.html',
    img:      'img/progetti/parco-saccafisola/cover.webp',
    pat:      'pat-grid',
    bar:      'var(--inchiostro)',
    year:     '2007',
    title:    'Progetto visionario per un parco',
    desc:     'Nella laguna di venezia un parco brutalista e visionario che non ti aspetti.',
    cat:      'visioni',
    catLabel: 'Progetto visionario',
    catClass: 'cat-visioni'
  },
	
  {
    href:     'progetto-sana-2007.html',
    img:      'img/progetti/sana-2007/cover.webp',
    pat:      'pat-lines',
    bar:      'var(--cmyk-m)',
    year:     '2007',
    title:    'SANA 2007',
    desc:     'Il primo allestimento 100% riciclabile realizzato per il Salone Internazionale del Biologico e del Naturale. Bologna.',
    cat:      'effimera',
    catLabel: 'Architettura effimera',
    catClass: 'cat-effimera'
  },
	
  {
    href:     'progetto-sana-2018.html',
    img:      'img/progetti/sana-2018/cover.webp',
    pat:      'pat-lines',
    bar:      'var(--cmyk-m)',
    year:     '2018',
    title:    'SANA 2018',
    desc:     'Allestimento realizzato per il Salone Internazionale del Biologico e del Naturale. Bologna.',
    cat:      'effimera',
    catLabel: 'Architettura effimera',
    catClass: 'cat-effimera'
  },
	
  {
    href:     'progetto-vittys-store.html',
    img:      'img/progetti/vittys-store/cover.webp',
    pat:      'pat-grid',
    bar:      'var(--inchiostro)',
    year:     '2007',
    title:    'Negozio di abbigliamento',
    desc:     'Negozio di abbigliamento tra colori classici e soluzioni funzionali.',
    cat:      'interni',
    catLabel: 'Interior design',
    catClass: 'cat-interni'
  },
	
  {
    href:     'progetto-sana-2022.html',
    img:      'img/progetti/sana-2022/cover.webp',
    pat:      'pat-lines',
    bar:      'var(--cmyk-m)',
    year:     '2022',
    title:    'SANA 2022',
    desc:     'La semplicità di comunicare. Salone internazionale del biologico. Bologna.',
    cat:      'effimera',
    catLabel: 'Architettura effimera',
    catClass: 'cat-effimera'
  },

  /* ── AGGIUNGI NUOVI PROGETTI QUI SOPRA ──────────────────────────
     Copia un blocco { ... }, , e compila i campi.
     Ricorda la virgola dopo ogni blocco tranne l'ultimo.
  ─────────────────────────────────────────────────────────────── */

];
