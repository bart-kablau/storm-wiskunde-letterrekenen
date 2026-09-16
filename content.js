/* =========================================================================
   content.js — Wiskunde H1: Rekenen met letters (Getal & Ruimte, blz. 10-47)
   Inhoud volgt 02-verwerkt/brontekst.md en 02-verwerkt/leerplan.md.
   Engine = tools/oefen-engine (canoniek); dit bestand is de vak-inhoud.

   Regel: elke vraag heeft w + meer, elke mc heeft per-optie fout-uitleg.
   Check met: node tools/checks/audit-feedback.mjs <dit bestand>
   ========================================================================= */

window.VAK = {
  id: "wiskunde_h1",
  titel: "Wiskunde met Storm, H1 Rekenen met letters",
  brand: "Wiskunde met Storm",
  badge: "∑",
  mascotEmoji: "🦦",
  spiekTitel: "Wiskunde H1, Rekenen met letters",
  wiskunde: true,
  spraak: { vraagLang: "nl-NL", antwoordLang: "nl-NL" },
  matching: { stripInfinitief: false, accentTolerant: true, lidwoordTolerant: false },
  masteryHits: 2,
  tegels: ["leerstof", "begrippen", "proeftoets", "spiekblad"],
  proefTitel: "Hoofdstuktoets",
  tegelProef: { em: "📝", h: "Hoofdstuktoets", p: "Alle stof door elkaar, net als op het proefwerk" }
};

/* =========================================================================
   LEERSTOF, 9 onderwerpen x 3 niveaus (Brons, Zilver, Goud)
   ========================================================================= */
window.LEERSTOF = [

/* ---------------------------------------------------------------- 1.1 A */
{
  id: "haakjes", emoji: "🔓", titel: "1.1 Haakjes wegwerken",
  kort: "Wat vóór de haakjes staat gaat langs élk stukje erbinnen.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Stel je een rechthoek voor met hoogte <b>a</b>. De onderkant bestaat uit twee stukken: <b>b</b> en <b>c</b>.",
        "De hele oppervlakte is <b>a(b + c)</b>. Maar je kunt ook de twee stukken apart nemen: <b>ab</b> en <b>ac</b>.",
        "Zelfde rechthoek, dus: <b>a(b + c) = ab + ac</b>.",
        "In gewone taal: wat vóór de haakjes staat, gaat langs <b>élk</b> stukje binnen de haakjes."
      ],
      regel: "a(b + c) = ab + ac. De voorste gaat langs allebei, niet alleen langs de eerste.",
      voorbeelden: [
        { en: "3(a + 2b) = 3a + 6b", let: "De 3 gaat langs de a én langs de 2b. 3 · 2b = 6b." },
        { en: "4(6a − 9) = 24a − 36", let: "Ook langs de 9, en het minteken blijft staan." }
      ],
      vragen: [
        { t: "vb", opgave: "5(x + 3)",
          stappen: [
            { toon: "5(x + 3)", uitleg: "De 5 moet langs beide stukjes binnen de haak." },
            { toon: "= 5 · x + 5 · 3", uitleg: "Schrijf allebei de vermenigvuldigingen op." },
            { toon: "= 5x + 15", uitleg: "Uitrekenen: 5 · 3 = 15." }
          ],
          waarom: { q: "Waarom is 5(x + 3) niet gewoon 5x + 3?",
            o: ["Omdat de 5 óók langs de 3 moet", "Omdat je altijd alles keer 5 doet", "Omdat 3 een getal is en x een letter"],
            a: "Omdat de 5 óók langs de 3 moet" },
          fout: {
            "Omdat je altijd alles keer 5 doet": "je bent er bijna, maar het gaat om wat er ín de haakjes staat. De 5 gaat langs élk stukje binnen de haak, niet langs alles wat er in de som staat.",
            "Omdat 3 een getal is en x een letter": "dat maakt hier niets uit. Ook als er 5(x + y) stond, moest de 5 langs allebei. Het gaat erom dat er twee stukjes binnen de haak staan."
          },
          w: "De 5 gaat langs de x én langs de 3.",
          meer: "5(x + 3) = 5 · x + 5 · 3 = 5x + 15. Vergeet nooit het tweede stukje." },

        { t: "mc", q: "Wat is 3(a + 2b) herleid?",
          o: ["3a + 6b", "3a + 2b", "5a + 6b", "6ab"],
          a: "3a + 6b",
          fout: {
            "3a + 2b": "je bent de 2b vergeten keer 3 te doen. De 3 gaat langs béide stukjes: 3 · 2b = 6b.",
            "5a + 6b": "je hebt 3 + 2 gedaan bij de a. Maar er staat 3 kéér a, dus 3a. Alleen de b-term wordt 6b.",
            "6ab": "je hebt alles aan elkaar geplakt. a en 2b zijn niet gelijksoortig, die kun je niet samennemen. Het blijven twee losse termen."
          },
          w: "3 · a = 3a en 3 · 2b = 6b.",
          meer: "3(a + 2b) = 3 · a + 3 · 2b = 3a + 6b. Twee stukjes in de haak, dus twee termen in het antwoord." },

        { t: "stap", opgave: "4(2x + 5)", vars: ["x"],
          stappen: [{ prompt: "Werk de haakjes weg", a: "8x + 20",
            hints: ["4 · 2x = 8x", "4 · 5 = 20, dus 8x + 20"] }],
          w: "De 4 gaat langs 2x en langs 5.",
          meer: "4(2x + 5) = 4 · 2x + 4 · 5 = 8x + 20." },

        { t: "bouw", q: "Werk de haakjes weg: 2p(5p − 1)", a: "10p^2 - 2p", vars: ["p"],
          w: "2p gaat langs 5p en langs -1.",
          meer: "2p · 5p = 10p² (want p · p = p²) en 2p · -1 = -2p. Samen: 10p² − 2p." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Er kan ook een <b>letter</b> vóór de haakjes staan: <b>2b(5a − 7) = 10ab − 14b</b>.",
        "Staat er alleen een <b>min</b> vóór de haakjes? Dan betekent dat <b>-1 ·</b>.",
        "Gevolg: <b>élk teken binnen de haak draait om</b>. Dus -(3p − 2q) = -3p + 2q.",
        "Dat is de plek waar de meeste fouten worden gemaakt, dus kijk daar extra goed."
      ],
      regel: "Een min vóór de haakjes draait élk teken binnen de haak om.",
      voorbeelden: [
        { en: "-(4x − y) = -4x + y", let: "Allebei de tekens draaien om: + wordt -, en - wordt +." },
        { en: "8 − 3(2a − b) = 8 − 6a + 3b", let: "De -3 gaat langs 2a (geeft -6a) en langs -b (geeft +3b)." }
      ],
      vragen: [
        { t: "mc", q: "Wat is -(4x − y) herleid?",
          o: ["-4x + y", "-4x − y", "4x − y", "-4x − 1y"],
          a: "-4x + y",
          fout: {
            "-4x − y": "je hebt alleen het eerste teken omgedraaid. De min vóór de haak is -1 en die gaat langs álles: -1 · -y = +y.",
            "4x − y": "je hebt de min helemaal laten vallen. Een min vóór de haakjes verdwijnt niet, hij draait juist alle tekens om.",
            "-4x − 1y": "de -1 is geen antwoord maar de rekenstap. En het teken bij y klopt niet: -1 · -y geeft +y."
          },
          w: "De min is -1 en gaat langs beide stukjes.",
          meer: "-(4x − y) = -1 · 4x + -1 · -y = -4x + y. Min keer min is plus." },

        { t: "stap", opgave: "-3(2a − 5b)", vars: ["a", "b"],
          stappen: [{ prompt: "Werk de haakjes weg", a: "-6a + 15b",
            hints: ["-3 · 2a = -6a", "-3 · -5b = +15b, want min keer min is plus"] }],
          w: "-3 gaat langs 2a en langs -5b.",
          meer: "-3 · 2a = -6a en -3 · -5b = +15b. Samen: -6a + 15b." },

        { t: "bouw", q: "Werk de haakjes weg: 5x(4x + 2)", a: "20x^2 + 10x", vars: ["x"],
          w: "5x gaat langs 4x en langs 2.",
          meer: "5x · 4x = 20x² (x · x = x²) en 5x · 2 = 10x. Samen: 20x² + 10x." },

        { t: "bouw", q: "Herleid: 7 − (3a − 4)", a: "11 - 3a", vars: ["a"],
          w: "De min vóór de haak draait beide tekens om.",
          meer: "7 − (3a − 4) = 7 − 3a + 4 = 11 − 3a. Let op: de -4 wordt +4." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu twee haakjes achter elkaar, en daarna nog <b>samennemen</b>.",
        "Bij de opdracht <b>Herleid</b> horen altijd twee dingen: eerst de haakjes weg, dán de gelijksoortige termen samennemen.",
        "<b>3(a + 2b) + 2(a − 3b) = 3a + 6b + 2a − 6b = 5a</b>. De b's vallen hier helemaal weg.",
        "Werk rustig van links naar rechts en schrijf de tussenstap op. Dat scheelt de meeste fouten."
      ],
      regel: "Eerst alle haakjes weg, daarna pas samennemen.",
      voorbeelden: [
        { en: "-8(a − 3) + 6a = -8a + 24 + 6a = -2a + 24", let: "Eerst uitwerken, dan de a's bij elkaar: -8a + 6a = -2a." },
        { en: "-5(a + 2b) − 3(6a − b) = -5a − 10b − 18a + 3b = -23a − 7b", let: "Twee keer uitwerken, dan per letter samennemen." }
      ],
      vragen: [
        { t: "stap", opgave: "3(a + 2b) + 5(a + b)", vars: ["a", "b"],
          stappen: [
            { prompt: "Werk eerst beide haakjes weg", a: "3a + 6b + 5a + 5b",
              hints: ["3(a + 2b) = 3a + 6b", "5(a + b) = 5a + 5b"] },
            { prompt: "Neem nu de gelijksoortige termen samen", a: "8a + 11b",
              hints: ["De a's: 3a + 5a = 8a", "De b's: 6b + 5b = 11b"] }
          ],
          w: "Eerst de haakjes, dan per letter samennemen.",
          meer: "3(a + 2b) + 5(a + b) = 3a + 6b + 5a + 5b = 8a + 11b." },

        { t: "bouw", q: "Herleid: 5(2x − 3) − 4(x − 7)", a: "6x + 13", vars: ["x"],
          w: "Pas op met de min vóór de tweede haak.",
          meer: "5(2x − 3) = 10x − 15 en -4(x − 7) = -4x + 28. Samen: 10x − 15 − 4x + 28 = 6x + 13." },

        { t: "mc", q: "Wat is -2(x + 5) + 8 + x herleid?",
          o: ["-x − 2", "-x + 18", "-3x − 2", "-x + 2"],
          a: "-x − 2",
          fout: {
            "-x + 18": "je hebt -2 · 5 als +10 gerekend. Min keer plus is min, dus -2 · 5 = -10. Dan wordt het -10 + 8 = -2.",
            "-3x − 2": "je hebt de losse x er verkeerd bij geteld. Er staat -2x en +x, dat is samen -1x, dus -x.",
            "-x + 2": "het getal klopt niet: -10 + 8 = -2, niet +2."
          },
          w: "-2 gaat langs x en langs 5, daarna samennemen.",
          meer: "-2(x + 5) + 8 + x = -2x − 10 + 8 + x. De x'en: -2x + x = -x. De getallen: -10 + 8 = -2. Samen: -x − 2." },

        { t: "bouw", q: "Herleid: 2p − 5q − (p + 4q)", a: "p - 9q", vars: ["p", "q"],
          w: "De min vóór de haak draait beide tekens binnen de haak om.",
          meer: "2p − 5q − (p + 4q) = 2p − 5q − p − 4q. De p's: 2p − p = p. De q's: -5q − 4q = -9q. Samen: p − 9q." }
      ]
    }
  ]
},

/* ---------------------------------------------------------------- 1.1 B */
{
  id: "dubbelhaakjes", emoji: "🔗", titel: "1.1 Dubbele haakjes",
  kort: "Elk stukje uit de eerste haak gaat langs elk stukje uit de tweede.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Twee haakjes achter elkaar: <b>(a + 3)(b + 2)</b>. De maalpunt ertussen mag je weglaten.",
        "Ook dit kun je als oppervlakte zien: een rechthoek met zijden a + 3 en b + 2 valt uiteen in <b>vier</b> vakjes.",
        "Die vier vakjes zijn: <b>ab</b>, <b>2a</b>, <b>3b</b> en <b>6</b>. Samen: ab + 2a + 3b + 6.",
        "Een <b>product van twee factoren</b> wordt dus een <b>som van vier termen</b>. Vier keer vermenigvuldigen, altijd."
      ],
      regel: "(a + b)(c + d) = ac + ad + bc + bd. Vier keer keer doen, geen enkele overslaan.",
      voorbeelden: [
        { en: "(a + 2)(b + 3) = ab + 3a + 2b + 6", let: "a·b, a·3, 2·b en 2·3. Vier stuks." },
        { en: "(p − 4)(q + 5) = pq + 5p − 4q − 20", let: "Neem het minteken mee: -4 · q = -4q en -4 · 5 = -20." }
      ],
      vragen: [
        { t: "vb", opgave: "(a + 2)(b + 3)",
          stappen: [
            { toon: "(a + 2)(b + 3)", uitleg: "Elk stukje links gaat langs elk stukje rechts. Dat zijn 2 × 2 = 4 vermenigvuldigingen." },
            { toon: "= a·b + a·3 + 2·b + 2·3", uitleg: "Eerst de a langs beide, dan de 2 langs beide." },
            { toon: "= ab + 3a + 2b + 6", uitleg: "Netjes opschrijven. Er blijven vier losse termen staan." }
          ],
          waarom: { q: "Waarom blijven het hier vier termen?",
            o: ["Omdat geen van de termen gelijksoortig is", "Omdat er vier haakjes zijn", "Omdat je altijd vier termen krijgt"],
            a: "Omdat geen van de termen gelijksoortig is" },
          fout: {
            "Omdat er vier haakjes zijn": "er staan twee haakjes, niet vier. Het getal vier komt van de vier vermenigvuldigingen, niet van de haakjes.",
            "Omdat je altijd vier termen krijgt": "je krijgt altijd vier termen ná het uitwerken, maar daarna kun je ze soms nog samennemen. Bij (p + 6)(p + 7) worden 7p en 6p samen 13p, dan houd je er drie over."
          },
          w: "ab, 3a, 2b en 6 hebben allemaal andere letters.",
          meer: "(a + 2)(b + 3) = ab + 3a + 2b + 6. Niets is gelijksoortig, dus alle vier de termen blijven staan." },

        { t: "mc", q: "Wat is (a + 7)(b + 9) herleid?",
          o: ["ab + 9a + 7b + 63", "ab + 63", "ab + 16ab + 63", "16ab + 63"],
          a: "ab + 9a + 7b + 63",
          fout: {
            "ab + 63": "je hebt alleen de buitenste en de binnenste twee vermenigvuldigd. De kruislingse ook: a · 9 = 9a en 7 · b = 7b. Er horen vier termen te staan.",
            "ab + 16ab + 63": "je hebt 9a en 7b samengenomen tot 16ab. Dat mag niet: 9a en 7b zijn niet gelijksoortig, want ze hebben verschillende letters.",
            "16ab + 63": "hier zijn 9 en 7 opgeteld én de letters aan elkaar geplakt. Beide mag niet. Het blijven losse termen 9a en 7b."
          },
          w: "Vier vermenigvuldigingen: a·b, a·9, 7·b, 7·9.",
          meer: "(a + 7)(b + 9) = ab + 9a + 7b + 63. Verschillende letters, dus niets is samen te nemen." },

        { t: "stap", opgave: "(p − 4)(q + 5)", vars: ["p", "q"],
          stappen: [{ prompt: "Werk de haakjes weg", a: "pq + 5p - 4q - 20",
            hints: ["p · q = pq en p · 5 = 5p", "-4 · q = -4q en -4 · 5 = -20"] }],
          w: "Neem de mintekens mee bij het vermenigvuldigen.",
          meer: "(p − 4)(q + 5) = pq + 5p − 4q − 20. De -4 gaat langs beide stukjes rechts." },

        { t: "bouw", q: "Herleid: (x + 2)(y + 6)", a: "xy + 6x + 2y + 12", vars: ["x", "y"],
          w: "Vier keer vermenigvuldigen.",
          meer: "x·y = xy, x·6 = 6x, 2·y = 2y, 2·6 = 12. Samen: xy + 6x + 2y + 12." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Staat er <b>twee keer dezelfde letter</b>? Dan kun je na het uitwerken nog samennemen.",
        "<b>(p + 6)(p + 7) = p² + 7p + 6p + 42 = p² + 13p + 42</b>. De twee middelste termen worden één.",
        "Let op: <b>p · p = p²</b>. Dezelfde letter keer zichzelf geeft een kwadraat.",
        "Bij een min gaat het net zo, maar reken de tekens rustig uit: <b>(x − 5)(x + 4) = x² + 4x − 5x − 20 = x² − x − 20</b>."
      ],
      regel: "Eerst alle vier de termen opschrijven, pas daarna samennemen.",
      voorbeelden: [
        { en: "(x + 3)(x + 7) = x² + 7x + 3x + 21 = x² + 10x + 21", let: "De middelste twee: 7x + 3x = 10x." },
        { en: "(a + 3)(a − 3) = a² − 3a + 3a − 9 = a² − 9", let: "Hier vallen de middelste termen tegen elkaar weg." }
      ],
      vragen: [
        { t: "stap", opgave: "(x + 3)(x + 7)", vars: ["x"],
          stappen: [
            { prompt: "Werk eerst alle vier de vermenigvuldigingen uit", a: "x^2 + 7x + 3x + 21",
              hints: ["x · x = x² en x · 7 = 7x", "3 · x = 3x en 3 · 7 = 21"] },
            { prompt: "Neem nu de gelijksoortige termen samen", a: "x^2 + 10x + 21",
              hints: ["7x en 3x zijn gelijksoortig", "7x + 3x = 10x"] }
          ],
          w: "x · x = x², en de twee losse x-termen kun je samennemen.",
          meer: "(x + 3)(x + 7) = x² + 7x + 3x + 21 = x² + 10x + 21." },

        { t: "mc", q: "Wat is (a + 3)(a − 3) herleid?",
          o: ["a² − 9", "a² + 9", "a² − 6a − 9", "a² − 9a"],
          a: "a² − 9",
          fout: {
            "a² + 9": "het laatste stukje is 3 · -3 = -9, niet +9. Plus keer min geeft min.",
            "a² − 6a − 9": "je hebt -3a en +3a bij elkaar opgeteld als -6a. Maar -3a + 3a = 0, die vallen juist tegen elkaar weg.",
            "a² − 9a": "je hebt de 9 aan de a geplakt. Het laatste stukje is 3 · -3 = -9, een kaal getal zonder letter."
          },
          w: "De middelste termen vallen tegen elkaar weg.",
          meer: "(a + 3)(a − 3) = a² − 3a + 3a − 9 = a² − 9. Omdat -3a + 3a = 0 blijft alleen a² − 9 over." },

        { t: "bouw", q: "Herleid: (q + 4)(q − 5)", a: "q^2 - q - 20", vars: ["q"],
          w: "q · q = q², daarna de twee q-termen samennemen.",
          meer: "(q + 4)(q − 5) = q² − 5q + 4q − 20 = q² − q − 20. Want -5q + 4q = -q." },

        { t: "bouw", q: "Herleid: (x − 1)(x − 9)", a: "x^2 - 10x + 9", vars: ["x"],
          w: "Let op: min keer min is plus.",
          meer: "(x − 1)(x − 9) = x² − 9x − x + 9 = x² − 10x + 9. Het laatste stukje: -1 · -9 = +9." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu het <b>kwadraat van een haakje</b>: <b>(a + 5)²</b>.",
        "Dat betekent <b>(a + 5)(a + 5)</b>. Eerst uitschrijven, daarna gewoon uitwerken:",
        "<b>(a + 5)² = (a + 5)(a + 5) = a² + 5a + 5a + 25 = a² + 10a + 25</b>.",
        "⚠️ <b>Dit is de grootste valkuil van het hoofdstuk.</b> (a + 5)² is <b>niet</b> a² + 25. Er komt altijd een middelste term bij.",
        "Check het met getallen: (2 + 3)² = 5² = 25, maar 2² + 3² = 4 + 9 = 13. Niet hetzelfde."
      ],
      regel: "Een kwadraat van een haakje schrijf je eerst uit als twee haakjes. Nooit zomaar beide termen kwadrateren.",
      voorbeelden: [
        { en: "(a + 1)² = a² + 2a + 1", let: "Uitschrijven: (a+1)(a+1) = a² + a + a + 1." },
        { en: "(x − 3)² = x² − 6x + 9", let: "Let op de tekens: -3x − 3x = -6x, en -3 · -3 = +9." }
      ],
      vragen: [
        { t: "mc", q: "Wat is (a + 5)² herleid?",
          o: ["a² + 10a + 25", "a² + 25", "a² + 5a + 25", "2a + 10"],
          a: "a² + 10a + 25",
          fout: {
            "a² + 25": "dit is dé klassieke fout. Een kwadraat verdeelt zich niet over een plus. Check met getallen: (2 + 3)² = 25, maar 2² + 3² = 13. Schrijf altijd eerst uit: (a + 5)(a + 5).",
            "a² + 5a + 25": "je hebt maar één middelste term meegenomen. Er zijn er twee: a · 5 = 5a én 5 · a = 5a. Samen 10a.",
            "2a + 10": "je hebt kwadrateren verward met keer 2 doen. (a + 5)² betekent (a + 5) kéér (a + 5), niet 2 · (a + 5)."
          },
          w: "Eerst uitschrijven als (a + 5)(a + 5).",
          meer: "(a + 5)² = (a + 5)(a + 5) = a² + 5a + 5a + 25 = a² + 10a + 25. De middelste term vergeten is de meestgemaakte fout van dit hoofdstuk." },

        { t: "stap", opgave: "(x − 3)²", vars: ["x"],
          stappen: [
            { prompt: "Schrijf het kwadraat eerst uit als twee haakjes", a: "(x - 3)(x - 3)",
              hints: ["Kwadraat = twee keer hetzelfde keer elkaar", "(x − 3)(x − 3)"] },
            { prompt: "Werk nu de haakjes weg en neem samen", a: "x^2 - 6x + 9",
              hints: ["x·x = x², x·-3 = -3x, -3·x = -3x, -3·-3 = +9", "-3x − 3x = -6x, dus x² − 6x + 9"] }
          ],
          w: "Uitschrijven, dan vier termen, dan samennemen.",
          meer: "(x − 3)² = (x − 3)(x − 3) = x² − 3x − 3x + 9 = x² − 6x + 9." },

        { t: "bouw", q: "Herleid: (b − 5)²", a: "b^2 - 10b + 25", vars: ["b"],
          w: "Eerst uitschrijven als (b − 5)(b − 5).",
          meer: "(b − 5)(b − 5) = b² − 5b − 5b + 25 = b² − 10b + 25. Het laatste stukje: -5 · -5 = +25." },

        { t: "bouw", q: "Herleid: (2r − 1)(r + 2)", a: "2r^2 + 3r - 2", vars: ["r"],
          w: "2r · r = 2r², daarna de r-termen samennemen.",
          meer: "(2r − 1)(r + 2) = 2r² + 4r − r − 2 = 2r² + 3r − 2. Want 4r − r = 3r." }
      ]
    }
  ]
},

/* ---------------------------------------------------------------- 1.1 C */
{
  id: "haakjescombi", emoji: "🧩", titel: "1.1 Haakjes combineren",
  kort: "Allebei de haakjesregels in één som, daarna samennemen.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Nu komen beide regels samen in één opgave.",
        "Je kent ze allebei: <b>a(b + c) = ab + ac</b> en <b>(a + b)(c + d) = ac + ad + bc + bd</b>.",
        "De aanpak blijft altijd hetzelfde: <b>werk elk haakje apart uit</b>, schrijf alles onder elkaar, en neem <b>pas op het eind</b> samen.",
        "Rustig aan en de tussenstap opschrijven. Wie stappen overslaat, verliest een teken."
      ],
      regel: "Elk haakje apart uitwerken, daarna alles samennemen.",
      voorbeelden: [
        { en: "3(a − 6) − 2(5a − 8) = 3a − 18 − 10a + 16 = -7a − 2", let: "De -2 gaat langs 5a en langs -8." },
        { en: "12 − 3(x + 1) + 12x = 12 − 3x − 3 + 12x = 9x + 9", let: "De x'en: -3x + 12x = 9x. De getallen: 12 − 3 = 9." }
      ],
      vragen: [
        { t: "stap", opgave: "3(a − 6) − 2(5a − 8)", vars: ["a"],
          stappen: [
            { prompt: "Werk beide haakjes weg", a: "3a - 18 - 10a + 16",
              hints: ["3(a − 6) = 3a − 18", "-2(5a − 8) = -10a + 16, want -2 · -8 = +16"] },
            { prompt: "Neem nu samen", a: "-7a - 2",
              hints: ["De a's: 3a − 10a = -7a", "De getallen: -18 + 16 = -2"] }
          ],
          w: "Let op de min vóór de tweede haak.",
          meer: "3(a − 6) − 2(5a − 8) = 3a − 18 − 10a + 16 = -7a − 2." },

        { t: "mc", q: "Wat is 12 − 3(x + 1) + 12x herleid?",
          o: ["9x + 9", "9x + 15", "15x + 9", "9x − 9"],
          a: "9x + 9",
          fout: {
            "9x + 15": "je hebt -3 · 1 als +3 gerekend. Er staat -3(x + 1), dus -3 · 1 = -3. Dan is 12 − 3 = 9.",
            "15x + 9": "je hebt +3x gerekend in plaats van -3x. De min vóór de 3 hoort erbij: -3x + 12x = 9x.",
            "9x − 9": "het losse getal klopt niet: 12 − 3 = 9, dus +9."
          },
          w: "-3 gaat langs x en langs 1.",
          meer: "12 − 3(x + 1) + 12x = 12 − 3x − 3 + 12x. De x'en: -3x + 12x = 9x. De getallen: 12 − 3 = 9. Samen: 9x + 9." },

        { t: "bouw", q: "Herleid: 5a − 4(2a − 8)", a: "-3a + 32", vars: ["a"],
          w: "-4 gaat langs 2a en langs -8.",
          meer: "5a − 4(2a − 8) = 5a − 8a + 32 = -3a + 32. Let op: -4 · -8 = +32." },

        { t: "bouw", q: "Herleid: -(4a − 2b) + 5a − 3b", a: "a - b", vars: ["a", "b"],
          w: "De min vóór de haak draait beide tekens om.",
          meer: "-(4a − 2b) + 5a − 3b = -4a + 2b + 5a − 3b. De a's: -4a + 5a = a. De b's: 2b − 3b = -b. Samen: a − b." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Nu een <b>dubbel haakje</b> en een <b>enkel haakje</b> in dezelfde som.",
        "<b>(a + 2)(a − 7) − 2(a + 3)</b>. Werk ze allebei apart uit en zet alles achter elkaar:",
        "= a² − 7a + 2a − 14 − 2a − 6 = <b>a² − 7a − 20</b>.",
        "Tel de a-termen rustig op: -7a + 2a − 2a = -7a. En de getallen: -14 − 6 = -20."
      ],
      regel: "Dubbel haakje geeft vier termen, enkel haakje twee. Zet ze allemaal op een rij en neem dan pas samen.",
      voorbeelden: [
        { en: "(a + 1)(a + 4) − 5a = a² + 5a + 4 − 5a = a² + 4", let: "De 5a's vallen tegen elkaar weg." },
        { en: "(x − 2)(x + 8) − 6(x − 2) = x² + 6x − 16 − 6x + 12 = x² − 4", let: "Ook hier vallen de x-termen weg." }
      ],
      vragen: [
        { t: "stap", opgave: "(a + 2)(a − 7) − 2(a + 3)", vars: ["a"],
          stappen: [
            { prompt: "Werk beide haakjes uit", a: "a^2 - 7a + 2a - 14 - 2a - 6",
              hints: ["(a + 2)(a − 7) = a² − 7a + 2a − 14", "-2(a + 3) = -2a − 6"] },
            { prompt: "Neem nu alles samen", a: "a^2 - 7a - 20",
              hints: ["De a's: -7a + 2a − 2a = -7a", "De getallen: -14 − 6 = -20"] }
          ],
          w: "Eerst allebei uitwerken, dan alle a-termen bij elkaar.",
          meer: "(a + 2)(a − 7) − 2(a + 3) = a² − 7a + 2a − 14 − 2a − 6 = a² − 7a − 20." },

        { t: "bouw", q: "Herleid: (a + 1)(a + 4) − 5a", a: "a^2 + 4", vars: ["a"],
          w: "Kijk wat er met de a-termen gebeurt.",
          meer: "(a + 1)(a + 4) = a² + 4a + a + 4 = a² + 5a + 4. Dan − 5a: a² + 5a + 4 − 5a = a² + 4." },

        { t: "bouw", q: "Herleid: (x − 2)(x + 8) − 6(x − 2)", a: "x^2 - 4", vars: ["x"],
          w: "Werk allebei uit en let op het teken bij -6 · -2.",
          meer: "(x − 2)(x + 8) = x² + 6x − 16. En -6(x − 2) = -6x + 12. Samen: x² + 6x − 16 − 6x + 12 = x² − 4." },

        { t: "mc", q: "Wat is (2x + 1)(x − 3) + 5x + 4 herleid?",
          o: ["2x² + 1", "2x² − 5x + 1", "2x² + 10x + 1", "2x² − 5x − 3"],
          a: "2x² + 1",
          fout: {
            "2x² − 5x + 1": "je bent de + 5x aan het eind vergeten mee te tellen. De x-termen zijn -6x + x + 5x = 0, die vallen helemaal weg.",
            "2x² + 10x + 1": "je hebt de tekens van de x-termen verkeerd: 2x · -3 = -6x, niet +6x.",
            "2x² − 5x − 3": "hier is het losse getal fout én de 5x vergeten. 1 · -3 = -3, en -3 + 4 = +1."
          },
          w: "Alle x-termen vallen tegen elkaar weg.",
          meer: "(2x + 1)(x − 3) = 2x² − 6x + x − 3 = 2x² − 5x − 3. Dan + 5x + 4: 2x² − 5x − 3 + 5x + 4 = 2x² + 1." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Het zwaarste type: een <b>kwadraat</b> plus nog een haakje, soms met <b>twee letters</b>.",
        "<b>(3a − 5)² − 10a</b>. Eerst het kwadraat uitschrijven, dan alles uitwerken:",
        "= (3a − 5)(3a − 5) − 10a = 9a² − 15a − 15a + 25 − 10a = <b>9a² − 40a + 25</b>.",
        "Tel de a-termen voorzichtig: -15a − 15a − 10a = -40a. Dit is precies het soort som waar je op het proefwerk punten kunt pakken door netjes te werken."
      ],
      regel: "Kwadraat eerst uitschrijven, dan pas de rest. Tel de middelste termen rustig op.",
      voorbeelden: [
        { en: "(a + 2b)² = a² + 4ab + 4b²", let: "Uitschrijven: a·a, a·2b, 2b·a, 2b·2b. De middelste twee zijn samen 4ab." },
        { en: "(a − 3b)(a + 5b) = a² + 2ab − 15b²", let: "Twee letters: a·5b = 5ab en -3b·a = -3ab, samen 2ab." }
      ],
      vragen: [
        { t: "stap", opgave: "(3a − 5)² − 10a", vars: ["a"],
          stappen: [
            { prompt: "Schrijf het kwadraat uit en werk het uit", a: "9a^2 - 30a + 25",
              hints: ["(3a − 5)(3a − 5)", "3a·3a = 9a², 3a·-5 = -15a (twee keer), -5·-5 = +25"] },
            { prompt: "Trek nu 10a eraf en neem samen", a: "9a^2 - 40a + 25",
              hints: ["-30a − 10a", "-30a − 10a = -40a"] }
          ],
          w: "Eerst het kwadraat, dan pas de -10a.",
          meer: "(3a − 5)² = 9a² − 30a + 25. Dan − 10a geeft 9a² − 40a + 25." },

        { t: "bouw", q: "Herleid: (a + 3)(a − 5) − a − 3", a: "a^2 - 3a - 18", vars: ["a"],
          w: "Werk de haakjes uit en trek dan a en 3 eraf.",
          meer: "(a + 3)(a − 5) = a² − 5a + 3a − 15 = a² − 2a − 15. Dan − a − 3: a² − 2a − 15 − a − 3 = a² − 3a − 18." },

        { t: "bouw", q: "Herleid: (a + 3b)(a − 5b) + 16ab", a: "a^2 + 14ab - 15b^2", vars: ["a", "b"],
          w: "Twee letters: let op dat b · b = b².",
          meer: "(a + 3b)(a − 5b) = a² − 5ab + 3ab − 15b² = a² − 2ab − 15b². Dan + 16ab: a² + 14ab − 15b²." },

        { t: "bouw", q: "Herleid: (3x + y)² + (3x − y)²", a: "18x^2 + 2y^2", vars: ["x", "y"],
          w: "Werk beide kwadraten uit; de middelste termen vallen tegen elkaar weg.",
          meer: "(3x + y)² = 9x² + 6xy + y² en (3x − y)² = 9x² − 6xy + y². Samen: 18x² + 2y², want +6xy en -6xy heffen elkaar op." }
      ]
    }
  ]
},

/* ---------------------------------------------------------------- 1.2 A */
{
  id: "breukvereenvoudigen", emoji: "✂️", titel: "1.2 Breuken vereenvoudigen",
  kort: "Teller en noemer door hetzelfde delen. Alleen als het in élke term zit.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Vereenvoudigen betekent: <b>teller en noemer door hetzelfde delen</b>.",
        "Met getallen ken je het al: <b>6/15 = 2/5</b>, want je deelt boven en onder door 3.",
        "Met letters gaat het precies zo: <b>3a/4a = 3/4</b>, je deelt boven en onder door a.",
        "Let op het verschil: <b>3x/x = 3</b> maar <b>x/3x = 1/3</b>. Kijk goed waar de 3 staat."
      ],
      regel: "Deel teller en noemer door hetzelfde. Het antwoord is een nieuwe breuk.",
      voorbeelden: [
        { en: "3a/7a = 3/7", let: "Boven en onder door a delen. De a's worden samen 1." },
        { en: "5x/9x = 5/9", let: "Zelfde idee: de x verdwijnt boven én onder." }
      ],
      vragen: [
        { t: "velden", q: "Vereenvoudig 7b/7c. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "b" }, { label: "noemer", a: "c" }],
          w: "Boven en onder door 7 delen.",
          meer: "7b/7c: deel teller en noemer door 7, dan houd je b/c over. De letters b en c zijn verschillend, die kun je niet wegdelen." },

        { t: "velden", q: "Vereenvoudig 2p/14p. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "1" }, { label: "noemer", a: "7" }],
          w: "Door p én door 2 delen.",
          meer: "2p/14p: de p's vallen weg, dan blijft 2/14 over. Deel nog eens door 2: 1/7. Let op dat er boven een 1 blijft staan, niet niets." },

        { t: "mc", q: "Wat is x/3x vereenvoudigd?",
          o: ["1/3", "3", "x/3", "3x"],
          a: "1/3",
          fout: {
            "3": "je hebt de breuk omgekeerd gelezen. 3x/x is 3, maar hier staat de 3 onderaan: x/3x = 1/3.",
            "x/3": "je hebt alleen de onderste x weggedeeld. Als je door x deelt, verdwijnt hij boven én onder. Boven blijft dan 1 staan.",
            "3x": "hier is de breuk helemaal verdwenen. Delen door 3x maakt iets kleiner, niet groter."
          },
          w: "Boven en onder door x delen, dan blijft 1/3 over.",
          meer: "x/3x = (1 · x)/(3 · x). De x'en vallen weg, boven blijft 1 staan: 1/3. Vergelijk met 3x/x = 3." },

        { t: "velden", q: "Vereenvoudig 21ab/7a. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "3b" }, { label: "noemer", a: "1" }],
          w: "Door 7 en door a delen.",
          meer: "21ab/7a: 21/7 = 3 en de a's vallen weg. Er blijft 3b over, dus 3b/1 oftewel gewoon 3b." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Je kunt door een <b>getal én een letter tegelijk</b> delen: <b>12x/18xy = 2/3y</b>.",
        "Hier deel je boven en onder door 6 (12 : 6 = 2, 18 : 6 = 3) én door x.",
        "Mag ook <b>in stappen</b>, dat is vaak makkelijker: 16b/28ab, eerst door 4, dan door b.",
        "Staat er een <b>minteken</b>? Zet dat netjes vóór de breuk: <b>-20c/32bc = -(5/8b)</b>."
      ],
      regel: "Deel in stappen als dat makkelijker is. Een minteken zet je vóór de breuk.",
      voorbeelden: [
        { en: "12x/18xy = 2/3y", let: "Door 6 en door x delen." },
        { en: "16b/28ab = 4/7a", let: "In stappen: eerst door 4, daarna door b." }
      ],
      vragen: [
        { t: "velden", q: "Vereenvoudig 12a/20ab. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "3" }, { label: "noemer", a: "5b" }],
          w: "Door 4 en door a delen.",
          meer: "12a/20ab: 12 en 20 kunnen allebei door 4 (geeft 3 en 5), en de a's vallen weg. Blijft over: 3/5b." },

        { t: "velden", q: "Vereenvoudig 16ab/4bc. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "4a" }, { label: "noemer", a: "c" }],
          w: "Door 4 en door b delen.",
          meer: "16ab/4bc: 16/4 = 4, de b's vallen weg, de a en de c blijven staan. Antwoord: 4a/c." },

        { t: "mc", q: "Wat is 9m/3mn vereenvoudigd?",
          o: ["3/n", "3n", "3/mn", "6/n"],
          a: "3/n",
          fout: {
            "3n": "de n staat in de nóémer, dus hij blijft onder de streep staan: 3/n, niet 3n.",
            "3/mn": "je hebt de m alleen boven weggedeeld. Delen door m haalt hem boven én onder weg, dus de m verdwijnt helemaal.",
            "6/n": "9 gedeeld door 3 is 3, niet 6. Je hebt afgetrokken in plaats van gedeeld."
          },
          w: "Door 3 en door m delen.",
          meer: "9m/3mn: 9/3 = 3, de m's vallen weg, de n blijft in de noemer. Antwoord: 3/n." },

        { t: "velden", q: "Vereenvoudig -12pq/42qr. Zet het minteken bij de teller.",
          velden: [{ label: "teller", a: "-2p" }, { label: "noemer", a: "7r" }],
          w: "Door 6 en door q delen; het minteken blijft staan.",
          meer: "-12pq/42qr: 12 en 42 kunnen door 6 (geeft 2 en 7), de q's vallen weg. Antwoord: -2p/7r." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "⚠️ <b>De belangrijkste regel van deze paragraaf.</b> Delen mag <b>alleen</b> als het in <b>élke term</b> zit.",
        "Sytse zegt: <b>(2 − 3a)/a = (2 − 3)/1 = -1</b>. Hij haalt de a's weg. <b>Dat mag niet.</b>",
        "Waarom niet? In de teller <b>2 − 3a</b> zit de a alleen in de tweede term. In de 2 zit geen a.",
        "Test het met een getal: neem a = 2. Dan is (2 − 6)/2 = -2. Maar Sytse zegt -1. Fout dus.",
        "<b>De vraag die je altijd stelt: zit het in élke term?</b> Zo niet, dan kun je niet delen."
      ],
      regel: "Delen mag alleen als het in élke term van de teller én de noemer zit.",
      voorbeelden: [
        { en: "5ab/a − 9b = 5b − 9b = -4b", let: "Hier mág het wel: in 5ab zit een a, en die deel je weg. Daarna gewoon samennemen." },
        { en: "(2 − 3a)/a kan niet verder", let: "In de 2 zit geen a, dus je kunt niet door a delen." }
      ],
      vragen: [
        { t: "mc", q: "Sytse zegt: (2 − 3a)/a = -1, want de a's vallen tegen elkaar weg. Klopt dat?",
          o: ["Nee, want in de 2 zit geen a", "Ja, want a gedeeld door a is 1", "Nee, want je moet eerst 2 − 3 doen", "Ja, maar het antwoord is +1"],
          a: "Nee, want in de 2 zit geen a",
          fout: {
            "Ja, want a gedeeld door a is 1": "a/a is inderdaad 1, maar je mag pas delen als er in élke term van de teller een a zit. In 2 − 3a zit de a alleen in de tweede term. Test met a = 2: (2 − 6)/2 = -2, niet -1.",
            "Nee, want je moet eerst 2 − 3 doen": "2 en 3a zijn niet gelijksoortig, die kun je helemaal niet samennemen. De echte reden is dat de 2 geen a bevat.",
            "Ja, maar het antwoord is +1": "het antwoord klopt sowieso niet, want de stap zelf mag niet. Vul a = 2 in en je krijgt -2."
          },
          w: "Delen mag alleen als het in élke term zit.",
          meer: "In 2 − 3a zit de a alleen in 3a, niet in de 2. Dus je kunt niet door a delen. Vul a = 2 in: (2 − 6)/2 = -2, terwijl Sytse -1 zegt." },

        { t: "mc", q: "Bij welke breuk mág je wél door a delen?",
          o: ["(4a + 6a)/a", "(4 + 6a)/a", "(4a − 6)/a", "(4 + 6)/a"],
          a: "(4a + 6a)/a",
          fout: {
            "(4 + 6a)/a": "in de 4 zit geen a. Delen mag alleen als élke term er een heeft.",
            "(4a − 6)/a": "in de 6 zit geen a, dus hier mag het niet.",
            "(4 + 6)/a": "hier zit in geen van beide termen een a. Er valt niets weg te delen."
          },
          w: "Alleen als élke term in de teller een a heeft.",
          meer: "In (4a + 6a)/a hebben beide termen een a. Je kunt zelfs eerst samennemen: 10a/a = 10." },

        { t: "bouw", q: "Herleid: 12a/3 + 5a", a: "9a", vars: ["a"],
          w: "Werk eerst de breuk uit, dan samennemen.",
          meer: "12a/3 = 4a. Dan 4a + 5a = 9a." },

        { t: "bouw", q: "Herleid: 6xy/3y − 2x", a: "0", vars: ["x", "y"],
          w: "Vereenvoudig eerst de breuk.",
          meer: "6xy/3y = 2x (want 6/3 = 2 en de y's vallen weg). Dan 2x − 2x = 0." }
      ]
    }
  ]
},

/* ---------------------------------------------------------------- 1.2 B */
{
  id: "breukoptellen", emoji: "➕", titel: "1.2 Breuken optellen",
  kort: "Gelijke noemer? Tellers samen. Anders eerst gelijknamig maken.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "<b>Gelijknamig</b> betekent: dezelfde noemer (hetzelfde getal onder de streep).",
        "Gelijknamige breuken kun je <b>direct</b> optellen: je neemt de <b>tellers</b> samen en de <b>noemer blijft gelijk</b>.",
        "Met getallen: <b>2/9 + 5/9 = 7/9</b>. Met letters precies zo: <b>2/x + 5/x = 7/x</b>.",
        "De noemer verandert dus <b>niet</b>. Dat is het enige wat je hier moet onthouden."
      ],
      regel: "Gelijke noemer: tellers optellen, noemer laten staan.",
      voorbeelden: [
        { en: "2/x + 5/x = 7/x", let: "2 + 5 = 7, de x blijft gewoon onder de streep staan." },
        { en: "11x/y − 4x/y = 7x/y", let: "11x − 4x = 7x, de y blijft staan." }
      ],
      vragen: [
        { t: "velden", q: "Herleid 4/3a + 7/3a. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "11" }, { label: "noemer", a: "3a" }],
          w: "Tellers optellen, noemer blijft 3a.",
          meer: "4/3a + 7/3a: de noemers zijn gelijk, dus 4 + 7 = 11. Antwoord: 11/3a." },

        { t: "mc", q: "Wat is 2/x + 5/x?",
          o: ["7/x", "7/2x", "7/x²", "10/x"],
          a: "7/x",
          fout: {
            "7/2x": "je hebt de noemers ook opgeteld. Bij gelijknamige breuken blijft de noemer juist staan, alleen de tellers gaan samen.",
            "7/x²": "je hebt de noemers vermenigvuldigd. Dat hoeft niet: ze zijn al gelijk, dus de noemer blijft gewoon x.",
            "10/x": "je hebt 2 en 5 vermenigvuldigd in plaats van opgeteld. Er staat een plusteken."
          },
          w: "De noemers zijn al gelijk, dus alleen de tellers samennemen.",
          meer: "2/x + 5/x = (2 + 5)/x = 7/x. De noemer blijft ongemoeid." },

        { t: "velden", q: "Herleid 5/2x − 7/2x. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "-2" }, { label: "noemer", a: "2x" }],
          w: "5 − 7 = -2, de noemer blijft 2x.",
          meer: "5/2x − 7/2x = (5 − 7)/2x = -2/2x. Dat kun je nog vereenvoudigen tot -1/x, maar -2/2x is ook goed gerekend." },

        { t: "velden", q: "Herleid 7b/2c + 3b/2c. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "10b" }, { label: "noemer", a: "2c" }],
          w: "7b + 3b = 10b, noemer blijft 2c.",
          meer: "7b/2c + 3b/2c = 10b/2c. Je kunt nog door 2 delen: 5b/c." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Zijn de noemers <b>niet</b> gelijk? Dan maak je ze eerst <b>gelijknamig</b>.",
        "De nieuwe noemer is het <b>product</b> van de twee noemers.",
        "Met getallen: <b>3/4 + 1/5 = 15/20 + 4/20 = 19/20</b>. De nieuwe noemer is 4 · 5 = 20.",
        "Met letters: <b>3/x + 1/y = 3y/xy + x/xy = (3y + x)/xy</b>. De nieuwe noemer is xy.",
        "Let op: <b>3y + x</b> kun je niet verder herleiden, want die zijn niet gelijksoortig."
      ],
      regel: "Nieuwe noemer = de twee noemers keer elkaar. Vermenigvuldig de teller met hetzelfde als de noemer.",
      voorbeelden: [
        { en: "3/x + 1/y = (3y + x)/xy", let: "Boven en onder van de eerste keer y, van de tweede keer x." },
        { en: "a/3 + 2/b = (ab + 6)/3b", let: "Nieuwe noemer 3b. Eerste keer b, tweede keer 3." }
      ],
      vragen: [
        { t: "stap", opgave: "3/a + 5/b", vars: ["a", "b"],
          stappen: [
            { prompt: "Wat wordt de nieuwe noemer?", a: "ab",
              hints: ["De twee noemers keer elkaar", "a · b = ab"] },
            { prompt: "Schrijf nu de hele herleiding als één breuk (gebruik haakjes om de teller)", a: "(3b + 5a)/(ab)",
              hints: ["3/a wordt 3b/ab, want boven en onder keer b", "5/b wordt 5a/ab, want boven en onder keer a"] }
          ],
          w: "Nieuwe noemer ab, dan beide tellers aanpassen.",
          meer: "3/a + 5/b = 3b/ab + 5a/ab = (3b + 5a)/ab. De teller kun je niet verder herleiden." },

        { t: "velden", q: "Herleid 1/x + 3/y. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "y + 3x" }, { label: "noemer", a: "xy" }],
          w: "Nieuwe noemer xy.",
          meer: "1/x wordt y/xy en 3/y wordt 3x/xy. Samen: (y + 3x)/xy." },

        { t: "mc", q: "Wat is de nieuwe noemer bij 5/a − 2/b?",
          o: ["ab", "a + b", "a − b", "2ab"],
          a: "ab",
          fout: {
            "a + b": "je hebt de noemers opgeteld. Om gelijknamig te maken vermenigvuldig je ze juist.",
            "a − b": "er staat een minteken tussen de breuken, maar de noemers vermenigvuldig je gewoon: a · b.",
            "2ab": "waar komt de 2 vandaan? De 2 uit de teller blijft in de teller; de noemer wordt a · b."
          },
          w: "De noemers keer elkaar.",
          meer: "5/a − 2/b = 5b/ab − 2a/ab = (5b − 2a)/ab. De nieuwe noemer is a · b = ab." },

        { t: "velden", q: "Herleid 6/a − 3/2a. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "9" }, { label: "noemer", a: "2a" }],
          w: "2a is al een veelvoud van a, dus je hoeft alleen de eerste aan te passen.",
          meer: "6/a = 12/2a (boven en onder keer 2). Dan 12/2a − 3/2a = 9/2a. De noemer hoefde hier niet a · 2a te worden." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Een <b>heel getal</b> is ook een breuk: <b>3 = 3/1</b>. En als je noemer a moet worden: <b>3 = 3a/a</b>.",
        "Daarmee kun je ook <b>2/a − 3</b> optellen: <b>2/a − 3a/a = (2 − 3a)/a</b>.",
        "Staat er een <b>haakje in de teller</b>? Denk aan de haakjes bij het gelijknamig maken:",
        "<b>3a/5 − (a − 4)/3 = 9a/15 − 5(a − 4)/15 = (9a − 5a + 20)/15 = (4a + 20)/15</b>.",
        "De 5 gaat langs de hele teller (a − 4), dus ook langs de -4. Dat geeft +20."
      ],
      regel: "Een heel getal maak je een breuk met dezelfde noemer. Haakjes in de teller: alles keer.",
      voorbeelden: [
        { en: "2/a − 3 = (2 − 3a)/a", let: "3 wordt 3a/a, want de noemer moet a worden." },
        { en: "3a/5 − (a − 4)/3 = (4a + 20)/15", let: "De 5 gaat langs a én langs -4: -5(a − 4) = -5a + 20." }
      ],
      vragen: [
        { t: "velden", q: "Herleid 2/a − 3. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "2 - 3a" }, { label: "noemer", a: "a" }],
          w: "Schrijf 3 als 3a/a.",
          meer: "2/a − 3 = 2/a − 3a/a = (2 − 3a)/a. Verder herleiden kan niet: in de 2 zit geen a." },

        { t: "velden", q: "Herleid 4 + 3/p. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "4p + 3" }, { label: "noemer", a: "p" }],
          w: "Schrijf 4 als 4p/p.",
          meer: "4 + 3/p = 4p/p + 3/p = (4p + 3)/p." },

        { t: "mc", q: "Bij 3a/5 − (a − 4)/3 wordt de tweede teller keer 5. Wat krijg je?",
          o: ["-5a + 20", "-5a − 20", "5a − 20", "-5a − 4"],
          a: "-5a + 20",
          fout: {
            "-5a − 20": "de 5 gaat langs de -4, en -5 · -4 = +20, niet -20. Min keer min is plus.",
            "5a − 20": "de min vóór de breuk hoort erbij: het wordt -5(a − 4), dus de eerste term is -5a.",
            "-5a − 4": "je hebt de 5 niet langs de -4 gedaan. De 5 gaat langs élk stukje in de haak."
          },
          w: "-5 gaat langs a en langs -4.",
          meer: "-5(a − 4) = -5a + 20. Denk aan de haakjes: de 5 gaat langs beide stukjes." },

        { t: "velden", q: "Herleid x/2 + (x + 4)/3. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "5x + 8" }, { label: "noemer", a: "6" }],
          w: "Nieuwe noemer 6, dan beide tellers aanpassen.",
          meer: "x/2 = 3x/6 en (x + 4)/3 = (2x + 8)/6. Samen: (3x + 2x + 8)/6 = (5x + 8)/6." }
      ]
    }
  ]
},

/* ---------------------------------------------------------------- 1.3   */
{
  id: "breukkeerdelen", emoji: "✖️", titel: "1.3 Breuken keer en delen",
  kort: "Keer: recht door. Delen: keer het omgekeerde.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "<b>Vermenigvuldigen</b> van breuken is het makkelijkst: <b>teller keer teller, noemer keer noemer</b>.",
        "Dus 3/4 · 5/7 = 15/28. Recht naar beneden, geen gedoe.",
        "Voor delen heb je het <b>omgekeerde</b> nodig. Twee getallen zijn elkaars omgekeerde als hun <b>product 1</b> is.",
        "<b>3/7</b> en <b>7/3</b> zijn elkaars omgekeerde, want 3/7 · 7/3 = 21/21 = 1. Je draait de breuk dus gewoon om.",
        "Het omgekeerde van <b>-3</b> is <b>-1/3</b>, want -3 · -1/3 = 1."
      ],
      regel: "Omgekeerde = breuk omdraaien. Het product is dan 1.",
      voorbeelden: [
        { en: "3/4 · 5/7 = 15/28", let: "3 · 5 = 15 boven, 4 · 7 = 28 onder." },
        { en: "Het omgekeerde van 3/8 is 8/3", let: "Omdraaien. Check: 3/8 · 8/3 = 24/24 = 1." }
      ],
      vragen: [
        { t: "velden", q: "Bereken 3/4 · 5/7. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "15" }, { label: "noemer", a: "28" }],
          w: "Teller keer teller, noemer keer noemer.",
          meer: "3/4 · 5/7 = (3 · 5)/(4 · 7) = 15/28." },

        { t: "mc", q: "Wat is het omgekeerde van 2/3?",
          o: ["3/2", "-2/3", "2/3", "-3/2"],
          a: "3/2",
          fout: {
            "-2/3": "dat is het tegengestelde (het minteken erbij), niet het omgekeerde. Bij het omgekeerde is het product 1, niet 0.",
            "2/3": "dan is het product 4/9 en niet 1. Je moet de breuk omdraaien.",
            "-3/2": "je hebt omgedraaid én een minteken toegevoegd. Het minteken hoort er niet bij: 2/3 · 3/2 = 1."
          },
          w: "Omdraaien: teller en noemer wisselen.",
          meer: "Het omgekeerde van 2/3 is 3/2, want 2/3 · 3/2 = 6/6 = 1." },

        { t: "mc", q: "Wat is het omgekeerde van 7?",
          o: ["1/7", "-7", "7/1", "0,7"],
          a: "1/7",
          fout: {
            "-7": "dat is het tegengestelde. 7 · -7 = -49, niet 1.",
            "7/1": "dat is 7 zelf, alleen anders geschreven. 7 · 7 = 49, niet 1.",
            "0,7": "7 · 0,7 = 4,9, niet 1. Je moet 1 delen door 7."
          },
          w: "Schrijf 7 als 7/1 en draai om.",
          meer: "7 = 7/1, omgedraaid is dat 1/7. Check: 7 · 1/7 = 1." },

        { t: "velden", q: "Bereken 2/3 : 1/6. Vul teller en noemer in (vereenvoudig).",
          velden: [{ label: "teller", a: "4" }, { label: "noemer", a: "1" }],
          w: "Delen door 1/6 is keer 6/1.",
          meer: "2/3 : 1/6 = 2/3 · 6/1 = 12/3 = 4. Dus 4/1, oftewel gewoon 4." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "<b>De regel: delen door een breuk is hetzelfde als vermenigvuldigen met het omgekeerde.</b>",
        "Waarom werkt dat? Een machine maakt 2000 kg wasmiddel. In dozen van <b>1/4</b> kg passen er <b>2000 : 1/4 = 8000</b>.",
        "En 2000 · 4 = 8000. Delen door 1/4 is dus hetzelfde als keer 4, en 4 is het omgekeerde van 1/4.",
        "Met letters werkt het identiek: <b>5/a : 3/b = 5/a · b/3 = 5b/3a</b>.",
        "Deel je door een <b>losse letter</b>? Schrijf hem als breuk: <b>5/a : b = 5/a · 1/b = 5/ab</b>."
      ],
      regel: "Delen door een breuk = keer het omgekeerde. Draai de tweede breuk om.",
      voorbeelden: [
        { en: "5/a : 3/b = 5b/3a", let: "Tweede breuk omdraaien, dan gewoon keer doen." },
        { en: "2 : 6/a = 2 · a/6 = a/3", let: "Omdraaien geeft a/6, dan 2a/6 en dat is a/3." }
      ],
      vragen: [
        { t: "velden", q: "Herleid 5/a : 3/b. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "5b" }, { label: "noemer", a: "3a" }],
          w: "Draai 3/b om naar b/3 en doe keer.",
          meer: "5/a : 3/b = 5/a · b/3 = 5b/3a." },

        { t: "mc", q: "Wat is 5/a : b?",
          o: ["5/ab", "5b/a", "5a/b", "5/(a + b)"],
          a: "5/ab",
          fout: {
            "5b/a": "je hebt keer b gedaan in plaats van gedeeld door b. Delen door b is keer 1/b, dus de b komt in de noemer.",
            "5a/b": "hier zijn a en b van plaats gewisseld. De a stond al in de noemer en blijft daar.",
            "5/(a + b)": "bij vermenigvuldigen van noemers doe je keer, niet plus: a · b = ab."
          },
          w: "b = b/1, omgedraaid 1/b.",
          meer: "5/a : b = 5/a · 1/b = 5/ab. De b komt onder de streep erbij." },

        { t: "velden", q: "Herleid 3/p : 9/q. Vul teller en noemer in (vereenvoudig).",
          velden: [{ label: "teller", a: "q" }, { label: "noemer", a: "3p" }],
          w: "Omdraaien geeft q/9, dan vereenvoudigen.",
          meer: "3/p : 9/q = 3/p · q/9 = 3q/9p. Deel boven en onder door 3: q/3p." },

        { t: "velden", q: "Herleid a/6b · 3/c. Vul teller en noemer in (vereenvoudig).",
          velden: [{ label: "teller", a: "a" }, { label: "noemer", a: "2bc" }],
          w: "Teller keer teller, noemer keer noemer, dan vereenvoudigen.",
          meer: "a/6b · 3/c = 3a/6bc. Deel boven en onder door 3: a/2bc." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "<b>Gemengde getallen eerst omzetten</b> naar een gewone breuk, anders gaat het mis.",
        "<b>2½ : 1⅔ = 5/2 : 5/3 = 5/2 · 3/5 = 15/10 = 1½</b>.",
        "Let op de <b>volgorde bij delen</b>: die maakt wél uit. Net als bij gewone getallen is 6 : 2 niet hetzelfde als 2 : 6.",
        "Bij <b>keer</b> maakt de volgorde niet uit: 3/c · a/6b geeft hetzelfde als a/6b · 3/c.",
        "Staat er een <b>haakje</b> in teller of noemer? Laat het gewoon staan en draai de hele breuk om."
      ],
      regel: "Gemengd getal eerst omzetten. Bij delen maakt de volgorde uit, bij keer niet.",
      voorbeelden: [
        { en: "2½ : 1⅔ = 5/2 · 3/5 = 1½", let: "Eerst 2½ = 5/2 en 1⅔ = 5/3, dan pas delen." },
        { en: "(a − 1)/5 : (a + 3)/3 = 3(a − 1)/(5(a + 3))", let: "De haakjes blijven gewoon staan." }
      ],
      vragen: [
        { t: "mc", q: "Dorien zegt: 9/q : 3/p geeft hetzelfde als 3/p : 9/q. Klopt dat?",
          o: ["Nee, bij delen maakt de volgorde uit", "Ja, bij breuken mag je altijd wisselen", "Ja, want delen is keer het omgekeerde", "Nee, want de letters verschillen"],
          a: "Nee, bij delen maakt de volgorde uit",
          fout: {
            "Ja, bij breuken mag je altijd wisselen": "bij kéér mag dat, bij delen niet. Vergelijk met gewone getallen: 6 : 2 = 3 maar 2 : 6 = 1/3.",
            "Ja, want delen is keer het omgekeerde": "dat klopt als regel, maar je draait dan wél een ándere breuk om. 9/q : 3/p = 9p/3q en 3/p : 9/q = 3q/9p. Dat is niet hetzelfde.",
            "Nee, want de letters verschillen": "de letters zijn niet de reden. Ook met dezelfde letters zou de volgorde bij delen uitmaken."
          },
          w: "Delen is niet omwisselbaar, vermenigvuldigen wel.",
          meer: "9/q : 3/p = 9p/3q = 3p/q, maar 3/p : 9/q = 3q/9p = q/3p. Verschillend. Net als 6 : 2 en 2 : 6." },

        { t: "velden", q: "Bereken 2½ : 1⅔. Zet eerst om naar gewone breuken. Vul teller en noemer in.",
          velden: [{ label: "teller", a: "3" }, { label: "noemer", a: "2" }],
          w: "2½ = 5/2 en 1⅔ = 5/3.",
          meer: "5/2 : 5/3 = 5/2 · 3/5 = 15/10 = 3/2, oftewel 1½." },

        { t: "velden", q: "Herleid 12/a : 4/b. Vul teller en noemer in (vereenvoudig).",
          velden: [{ label: "teller", a: "3b" }, { label: "noemer", a: "a" }],
          w: "Omdraaien geeft b/4, dan vereenvoudigen.",
          meer: "12/a : 4/b = 12/a · b/4 = 12b/4a. Deel boven en onder door 4: 3b/a." },

        { t: "velden", q: "Herleid 5x/2y : 6x/y. Vul teller en noemer in (vereenvoudig).",
          velden: [{ label: "teller", a: "5" }, { label: "noemer", a: "12" }],
          w: "Omdraaien geeft y/6x; daarna vallen x en y weg.",
          meer: "5x/2y · y/6x = 5xy/12xy. De x'en en y's vallen weg: 5/12." }
      ]
    }
  ]
},

/* ---------------------------------------------------------------- 1.4   */
{
  id: "machtenproduct", emoji: "⚡", titel: "1.4 Machten keer en plus",
  kort: "Keer: exponenten optellen. Plus: exponenten blijven staan.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "In de macht <b>a⁶</b> heet a het <b>grondtal</b> en 6 de <b>exponent</b>.",
        "Waarom werkt de regel? <b>x² · x⁴ = (x·x) · (x·x·x·x) = x⁶</b>. Je telt gewoon het aantal x'en op.",
        "<b>De regel: a<sup>p</sup> · a<sup>q</sup> = a<sup>p+q</sup></b>. Bij keer <b>tel je de exponenten op</b>.",
        "Bedenk dat <b>a = a¹</b>. Dus p · p⁹ = p¹⁰.",
        "Zijn de grondtallen <b>verschillend</b>? Dan mag je niet optellen: 2a³ · 5b⁴ = 10a³b⁴."
      ],
      regel: "Keer met hetzelfde grondtal: exponenten optellen. Het grondtal blijft gelijk.",
      voorbeelden: [
        { en: "a³ · a² = a⁵", let: "3 + 2 = 5. De a blijft gewoon a." },
        { en: "3a⁵ · 4a³ = 12a⁸", let: "Getallen keer elkaar (3·4=12), exponenten optellen (5+3=8)." }
      ],
      vragen: [
        { t: "vb", opgave: "2x³ · 4x²",
          stappen: [
            { toon: "2x³ · 4x²", uitleg: "Twee dingen apart: de getallen, en de machten." },
            { toon: "= (2 · 4) · (x³ · x²)", uitleg: "Zet de getallen bij elkaar en de machten bij elkaar." },
            { toon: "= 8 · x^(3+2)", uitleg: "2 · 4 = 8, en bij keer tel je de exponenten op." },
            { toon: "= 8x⁵", uitleg: "3 + 2 = 5, dus x⁵." }
          ],
          waarom: { q: "Waarom tel je bij x³ · x² de exponenten op?",
            o: ["Omdat je 3 x'en en 2 x'en samen 5 x'en hebt", "Omdat 3 + 2 makkelijker is dan 3 · 2", "Omdat de grondtallen gelijk zijn en dat altijd zo is"],
            a: "Omdat je 3 x'en en 2 x'en samen 5 x'en hebt" },
          fout: {
            "Omdat 3 + 2 makkelijker is dan 3 · 2": "makkelijker is geen reden in de wiskunde. De echte reden is dat je het aantal factoren x optelt: (x·x·x)·(x·x) = vijf x'en.",
            "Omdat de grondtallen gelijk zijn en dat altijd zo is": "gelijke grondtallen zijn wel voorwaarde, maar het is niet 'altijd zo'. Bij delen trek je juist af, en bij een macht van een macht vermenigvuldig je."
          },
          w: "x³ · x² is 3 x'en keer 2 x'en, samen 5.",
          meer: "2x³ · 4x² = 8x⁵. Schrijf het desnoods uit: (x·x·x)·(x·x) = x⁵." },

        { t: "bouw", q: "Herleid: 3p⁶ · 4p⁸", a: "12p^14", vars: ["p"],
          w: "3 · 4 = 12 en 6 + 8 = 14.",
          meer: "3p⁶ · 4p⁸ = 12p¹⁴. Getallen keer elkaar, exponenten optellen." },

        { t: "bouw", q: "Herleid: 5q · 2q²", a: "10q^3", vars: ["q"],
          w: "Bedenk dat q = q¹.",
          meer: "5q · 2q² = 10q³, want 5 · 2 = 10 en 1 + 2 = 3." },

        { t: "mc", q: "Wat is 4x³ · 7y² herleid?",
          o: ["28x³y²", "28x⁵", "28(xy)⁵", "11x³y²"],
          a: "28x³y²",
          fout: {
            "28x⁵": "je hebt de exponenten opgeteld, maar dat mag alleen bij hetzelfde grondtal. x en y zijn verschillend, dus ze blijven apart staan.",
            "28(xy)⁵": "hier zijn de grondtallen samengevoegd én de exponenten opgeteld. Allebei mag niet: x³ en y² blijven los.",
            "11x³y²": "je hebt 4 en 7 opgeteld. De getallen moet je juist vermenigvuldigen: 4 · 7 = 28."
          },
          w: "Verschillende grondtallen, dus exponenten blijven apart.",
          meer: "4x³ · 7y² = 28x³y². Alleen de getallen gaan keer elkaar; x³ en y² blijven staan zoals ze zijn." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Nu <b>optellen</b> van machten. Dat werkt heel anders dan keer.",
        "Termen zijn <b>gelijksoortig</b> als ze <b>dezelfde letter(s) met dezelfde exponent(en)</b> hebben.",
        "Alleen dán mag je ze samennemen, en de exponent <b>blijft gewoon staan</b>: <b>2a³ + 4a³ = 6a³</b>.",
        "<b>2a³ + 4a⁵ kan niet</b>, want de exponenten verschillen. Antwoord: k.n.",
        "<b>4a³b + 3ab³ kan ook niet</b>: de exponenten zitten bij andere letters.",
        "⚠️ Vergelijk: <b>a⁵ · a⁵ = a¹⁰</b> maar <b>a⁵ + a⁵ = 2a⁵</b>. Dat is de grote valkuil."
      ],
      regel: "Bij plus blijft de exponent staan, en alleen gelijksoortige termen mogen samen.",
      voorbeelden: [
        { en: "4p⁶ + 3p⁶ = 7p⁶", let: "4 + 3 = 7, de exponent 6 blijft staan." },
        { en: "5x²y³ − 6x²y³ = -x²y³", let: "5 − 6 = -1, dus -1x²y³ oftewel -x²y³." }
      ],
      vragen: [
        { t: "sleep", opgave: "Welke termen kun je samennemen met 3a⁵?",
          chips: [
            { t: "7a⁵", bak: "wel" }, { t: "2a³", bak: "niet" },
            { t: "-a⁵", bak: "wel" }, { t: "4b⁵", bak: "niet" }
          ],
          bakjes: [
            { id: "wel", label: "Kan samen met 3a⁵", som: "gelijksoortig" },
            { id: "niet", label: "Kan niet samen (k.n.)", som: "niet gelijksoortig" }
          ],
          resultaat: "Alleen dezelfde letter mét dezelfde exponent is gelijksoortig",
          w: "Gelijksoortig = zelfde letter én zelfde exponent." },

        { t: "mc", q: "Wat is a⁵ + a⁵?",
          o: ["2a⁵", "a¹⁰", "2a¹⁰", "a²⁵"],
          a: "2a⁵",
          fout: {
            "a¹⁰": "je hebt de exponenten opgeteld, maar dat doe je alleen bij kéér. Hier staat plus: je hebt één a⁵ plus nog één a⁵, samen 2 stuks a⁵.",
            "2a¹⁰": "je hebt allebei gedaan: geteld én de exponenten opgeteld. Bij plus blijft de exponent gewoon 5 staan.",
            "a²⁵": "hier zijn de exponenten vermenigvuldigd. Dat hoort bij een macht van een macht, zoals (a⁵)⁵."
          },
          w: "Bij plus blijft de exponent staan; je telt het aantal.",
          meer: "a⁵ + a⁵ = 2a⁵. Vergelijk met a⁵ · a⁵ = a¹⁰. Plus en keer doen echt iets anders." },

        { t: "bouw", q: "Herleid: 7a⁴ + 6a⁴", a: "13a^4", vars: ["a"],
          w: "7 + 6 = 13, exponent blijft 4.",
          meer: "7a⁴ + 6a⁴ = 13a⁴. Gelijksoortig, dus samennemen mag." },

        { t: "mc", q: "Wat is 5x²y³ − 6x²y³ herleid?",
          o: ["-x²y³", "x²y³", "-1", "-11x²y³"],
          a: "-x²y³",
          fout: {
            "x²y³": "let op het teken: 5 − 6 = -1, niet +1. Dit staat zelfs fout in het boek, dus je bent in goed gezelschap. Het juiste antwoord is -x²y³.",
            "-1": "de letters verdwijnen niet. Er blijft -1 keer x²y³ over, en dat schrijf je als -x²y³.",
            "-11x²y³": "je hebt 5 en 6 opgeteld in plaats van afgetrokken. Er staat een minteken tussen."
          },
          w: "5 − 6 = -1, dus -1x²y³.",
          meer: "5x²y³ − 6x²y³ = -x²y³. Let op: in het boek staat hier per ongeluk x²y³ zonder minteken, maar dat is een zetfout." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu keer en plus <b>door elkaar</b>. Dan geldt de <b>rekenvolgorde</b>: eerst keer, dan plus.",
        "<b>2x³ · 5x² + 3x⁴ · 4x = 10x⁵ + 12x⁵ = 22x⁵</b>.",
        "Doe de twee producten eerst apart, en kijk dan pas of je ze kunt samennemen.",
        "Ook haakjes komen terug: <b>3a⁵(a² + 5a⁴) = 3a⁷ + 15a⁹</b>. De 3a⁵ gaat langs beide stukjes.",
        "En met twee letters: <b>3x²y⁴ · 2xy⁵ = 6x³y⁹</b>, want 3·2 = 6, x²·x = x³ en y⁴·y⁵ = y⁹."
      ],
      regel: "Eerst alle vermenigvuldigingen, daarna pas samennemen.",
      voorbeelden: [
        { en: "3a²b³ · 5ab⁴ = 15a³b⁷", let: "Per letter apart: a²·a = a³ en b³·b⁴ = b⁷." },
        { en: "a³(a² + 2a) = a⁵ + 2a⁴", let: "a³·a² = a⁵ en a³·2a = 2a⁴." }
      ],
      vragen: [
        { t: "stap", opgave: "5x² · 2x + 4x · 3x²", vars: ["x"],
          stappen: [
            { prompt: "Reken eerst de twee producten uit", a: "10x^3 + 12x^3",
              hints: ["5x² · 2x = 10x³", "4x · 3x² = 12x³"] },
            { prompt: "Neem nu samen", a: "22x^3",
              hints: ["Beide zijn x³, dus gelijksoortig", "10 + 12 = 22"] }
          ],
          w: "Eerst keer, dan plus.",
          meer: "5x² · 2x = 10x³ en 4x · 3x² = 12x³. Samen: 22x³." },

        { t: "bouw", q: "Herleid: 3a²b³ · 5ab⁴", a: "15a^3b^7", vars: ["a", "b"],
          w: "Per letter de exponenten optellen.",
          meer: "3 · 5 = 15, a² · a = a³, b³ · b⁴ = b⁷. Samen: 15a³b⁷." },

        { t: "bouw", q: "Herleid: a³(a² + 2a)", a: "a^5 + 2a^4", vars: ["a"],
          w: "a³ gaat langs beide stukjes in de haak.",
          meer: "a³ · a² = a⁵ en a³ · 2a = 2a⁴. Samen: a⁵ + 2a⁴. Verder samennemen kan niet, de exponenten verschillen." },

        { t: "bouw", q: "Herleid: 8a⁴ · 3a⁶ − 2a⁵ · 4a⁵", a: "16a^10", vars: ["a"],
          w: "Eerst beide producten, dan aftrekken.",
          meer: "8a⁴ · 3a⁶ = 24a¹⁰ en 2a⁵ · 4a⁵ = 8a¹⁰. Dan 24a¹⁰ − 8a¹⁰ = 16a¹⁰." }
      ]
    }
  ]
},

/* ---------------------------------------------------------------- 1.5   */
{
  id: "machtherleiden", emoji: "🏗️", titel: "1.5 Machten herleiden",
  kort: "Macht van een macht, macht van een product, en delen.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "<b>Een macht van een macht</b>: <b>(x⁴)³</b> betekent x⁴ · x⁴ · x⁴.",
        "Dat is x<sup>4+4+4</sup> = x<sup>3·4</sup> = <b>x¹²</b>. Je <b>vermenigvuldigt</b> de exponenten.",
        "<b>De regel: (a<sup>p</sup>)<sup>q</sup> = a<sup>pq</sup></b>.",
        "<b>Delen van machten</b>: <b>a⁷/a³</b>. Van de zeven a'tjes vallen er drie weg, blijven er 4 over.",
        "<b>De regel: a<sup>p</sup> / a<sup>q</sup> = a<sup>p−q</sup></b>. Je <b>trekt</b> de exponenten af.",
        "Handig om te weten: <b>a³/a³ = 1</b>, net zoals 8/8 = 1."
      ],
      regel: "Macht van een macht: exponenten keer elkaar. Delen: exponenten aftrekken.",
      voorbeelden: [
        { en: "(a⁴)⁵ = a²⁰", let: "4 · 5 = 20." },
        { en: "a¹²/a⁷ = a⁵", let: "12 − 7 = 5." }
      ],
      vragen: [
        { t: "mc", q: "Wat is (a³)⁶?",
          o: ["a¹⁸", "a⁹", "a²¹⁶", "3a⁶"],
          a: "a¹⁸",
          fout: {
            "a⁹": "je hebt de exponenten opgeteld. Optellen hoort bij kéér (a³ · a⁶), maar hier staat een macht óm een macht, en dan vermenigvuldig je: 3 · 6 = 18.",
            "a²¹⁶": "je hebt 6³ of iets dergelijks uitgerekend. Alleen de exponenten gaan keer elkaar: 3 · 6 = 18.",
            "3a⁶": "de 3 is een exponent, geen getal vóór de a. (a³)⁶ betekent a³ zes keer keer zichzelf."
          },
          w: "3 · 6 = 18.",
          meer: "(a³)⁶ = a¹⁸. Uitgeschreven: a³ · a³ · a³ · a³ · a³ · a³, dat zijn 6 × 3 = 18 a'tjes." },

        { t: "bouw", q: "Herleid: (x⁵)⁶", a: "x^30", vars: ["x"],
          w: "5 · 6 = 30.",
          meer: "(x⁵)⁶ = x³⁰. Bij een macht van een macht vermenigvuldig je de exponenten." },

        { t: "bouw", q: "Herleid: x⁹/x⁵", a: "x^4", vars: ["x"],
          w: "9 − 5 = 4.",
          meer: "x⁹/x⁵ = x⁴. Er vallen vijf x'en weg, er blijven er vier over." },

        { t: "mc", q: "Wat is b¹¹/b¹¹?",
          o: ["1", "0", "b", "b²²"],
          a: "1",
          fout: {
            "0": "aftrekken van de exponenten geeft b⁰, en dat is 1, niet 0. Denk aan 8/8 = 1.",
            "b": "11 − 11 = 0, dus b⁰. En b⁰ = 1, niet b.",
            "b²²": "je hebt de exponenten opgeteld. Bij delen trek je juist af."
          },
          w: "Alles valt tegen elkaar weg, net als 8/8 = 1.",
          meer: "b¹¹/b¹¹ = b⁰ = 1. Iets gedeeld door zichzelf is altijd 1." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "<b>Een macht van een product</b>: <b>(ab)³ = ab · ab · ab = a³b³</b>.",
        "<b>De regel: (ab)<sup>p</sup> = a<sup>p</sup>b<sup>p</sup></b>. <b>Elke factor</b> gaat tot die macht.",
        "⚠️ <b>Ook het getal!</b> <b>(2x)⁴ = 2⁴ · x⁴ = 16x⁴</b>. De 2 wordt 16, niet 2.",
        "Dat vergeten is een klassieke fout. Reken het getal altijd apart uit.",
        "Staan er getallen vóór? Die doen gewoon mee: <b>12a¹⁰/4a² = 3a⁸</b>, want 12/4 = 3 en a¹⁰/a² = a⁸."
      ],
      regel: "Elke factor binnen de haak gaat tot die macht, het getal ook.",
      voorbeelden: [
        { en: "(2x)⁴ = 16x⁴", let: "2⁴ = 16. Het getal gaat mee tot de macht." },
        { en: "(6x⁶)² = 36x¹²", let: "6² = 36 en (x⁶)² = x¹²." }
      ],
      vragen: [
        { t: "mc", q: "Wat is (5x)³?",
          o: ["125x³", "5x³", "15x³", "125x"],
          a: "125x³",
          fout: {
            "5x³": "je hebt alleen de x tot de macht gedaan. De 5 staat óók binnen de haakjes, dus die gaat ook tot de macht: 5³ = 125.",
            "15x³": "je hebt 5 · 3 gedaan. Maar de 5 moet tot de macht 3: 5 · 5 · 5 = 125.",
            "125x": "de x moet ook tot de macht 3. Elke factor binnen de haak gaat tot die macht."
          },
          w: "Élke factor tot de macht, dus ook de 5.",
          meer: "(5x)³ = 5³ · x³ = 125x³. Uitgeschreven: 5x · 5x · 5x." },

        { t: "bouw", q: "Herleid: (2ab)⁴", a: "16a^4b^4", vars: ["a", "b"],
          w: "2⁴ = 16, en a en b allebei tot de macht 4.",
          meer: "(2ab)⁴ = 2⁴ · a⁴ · b⁴ = 16a⁴b⁴." },

        { t: "bouw", q: "Herleid: 24x¹⁰/8x⁵", a: "3x^5", vars: ["x"],
          w: "24/8 = 3 en 10 − 5 = 5.",
          meer: "24x¹⁰/8x⁵ = 3x⁵. De getallen delen en de exponenten aftrekken." },

        { t: "bouw", q: "Herleid: (p²q)⁶", a: "p^12q^6", vars: ["p", "q"],
          w: "Elke factor tot de macht 6.",
          meer: "(p²q)⁶ = (p²)⁶ · q⁶ = p¹²q⁶. Let op dat (p²)⁶ = p¹², want 2 · 6 = 12." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu de <b>mintekens</b>, en dat luistert nauw. Let op <b>waar</b> de min staat.",
        "<b>(-3a)⁴ = (-3)⁴ · a⁴ = 81a⁴</b>. De min staat <b>binnen</b> de haak, dus hij doet mee. Even macht, dus plus.",
        "<b>-(3a)⁴ = -1 · 3⁴ · a⁴ = -81a⁴</b>. De min staat <b>buiten</b> de haak, dus hij blijft gewoon min.",
        "Bij een <b>oneven</b> macht blijft een min binnen de haak ook min: <b>(-xy⁴)³ = -x³y¹²</b>.",
        "En met meer letters tegelijk: <b>15a⁵b⁸/3ab² = 5a⁴b⁶</b>, want 15/3 = 5, a⁵/a = a⁴ en b⁸/b² = b⁶."
      ],
      regel: "Min binnen de haak doet mee met de macht. Min buiten de haak blijft altijd min.",
      voorbeelden: [
        { en: "(-5a)³ = -125a³", let: "(-5)³ = -125, want oneven macht houdt de min." },
        { en: "(-xy⁴)⁴ = x⁴y¹⁶", let: "(-1)⁴ = +1, dus de min verdwijnt bij een even macht." }
      ],
      vragen: [
        { t: "mc", q: "Wat is het verschil tussen (-3a)⁴ en -(3a)⁴?",
          o: ["(-3a)⁴ = 81a⁴ en -(3a)⁴ = -81a⁴", "Ze zijn allebei 81a⁴", "Ze zijn allebei -81a⁴", "(-3a)⁴ = -81a⁴ en -(3a)⁴ = 81a⁴"],
          a: "(-3a)⁴ = 81a⁴ en -(3a)⁴ = -81a⁴",
          fout: {
            "Ze zijn allebei 81a⁴": "bij -(3a)⁴ staat de min búiten de haak, dus die doet niet mee met de macht. Hij blijft er gewoon voor staan: -81a⁴.",
            "Ze zijn allebei -81a⁴": "bij (-3a)⁴ staat de min bínnen de haak en gaat dus mee tot de macht 4. Een even macht maakt dat plus: (-3)⁴ = +81.",
            "(-3a)⁴ = -81a⁴ en -(3a)⁴ = 81a⁴": "precies andersom. Binnen de haak plus een even macht geeft plus; buiten de haak blijft de min staan."
          },
          w: "Binnen de haak doet de min mee, buiten de haak niet.",
          meer: "(-3a)⁴ = (-3)⁴ · a⁴ = 81a⁴, want -3 · -3 · -3 · -3 = +81. Maar -(3a)⁴ = -1 · 81a⁴ = -81a⁴." },

        { t: "bouw", q: "Herleid: (-2x)³", a: "-8x^3", vars: ["x"],
          w: "(-2)³ = -8, want oneven macht houdt de min.",
          meer: "(-2x)³ = (-2)³ · x³ = -8x³. Bij een oneven macht blijft het minteken staan." },

        { t: "bouw", q: "Herleid: (-5x³y)²", a: "25x^6y^2", vars: ["x", "y"],
          w: "Even macht, dus de min verdwijnt.",
          meer: "(-5x³y)² = (-5)² · (x³)² · y² = 25x⁶y². Want (-5)² = +25 en 3 · 2 = 6." },

        { t: "bouw", q: "Herleid: 20a⁸b³/10a⁴b²", a: "2a^4b", vars: ["a", "b"],
          w: "Per onderdeel: getallen delen, exponenten aftrekken.",
          meer: "20/10 = 2, a⁸/a⁴ = a⁴, b³/b² = b. Samen: 2a⁴b." }
      ]
    }
  ]
},

/* ---------------------------------------------------------------- 1.6   */
{
  id: "wetenschappelijk", emoji: "🔬", titel: "1.6 Wetenschappelijke notatie",
  kort: "Een getal van 1 tot 10, keer een macht van 10.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Hele grote en hele kleine getallen schrijf je korter met een <b>macht van 10</b>.",
        "<b>De afspraak</b>: een getal dat <b>groter dan of gelijk aan 1 en kleiner dan 10</b> is, gevolgd door een macht van 10.",
        "Dus <b>8,62 · 10⁵</b> mag. <b>86,2 · 10⁴</b> is dezelfde waarde, maar <b>niet</b> de wetenschappelijke notatie, want 86,2 is groter dan 10.",
        "<b>De truc</b>: zet de komma achter het eerste cijfer en tel hoeveel plaatsen hij is verschoven. Dat aantal is de exponent.",
        "862 000 wordt 8,62 en de komma is 5 plaatsen opgeschoven, dus <b>8,62 · 10⁵</b>."
      ],
      regel: "Eerste getal tussen 1 en 10, daarna keer een macht van 10.",
      voorbeelden: [
        { en: "21 830 000 = 2,183 · 10⁷", let: "Komma achter de 2, dat is 7 plaatsen opgeschoven." },
        { en: "3 216 000 000 000 = 3,216 · 10¹²", let: "Twaalf plaatsen." }
      ],
      vragen: [
        { t: "velden", q: "Schrijf 350 000 000 in de wetenschappelijke notatie.",
          velden: [{ label: "getal", a: "3,5" }, { label: "exponent van 10", a: "8" }],
          w: "Komma achter de 3, dat is 8 plaatsen.",
          meer: "350 000 000 = 3,5 · 10⁸. Tel de plaatsen: van 350000000 naar 3,5 schuift de komma 8 plaatsen naar links." },

        { t: "velden", q: "Schrijf 820 in de wetenschappelijke notatie.",
          velden: [{ label: "getal", a: "8,2" }, { label: "exponent van 10", a: "2" }],
          w: "Komma achter de 8, dat is 2 plaatsen.",
          meer: "820 = 8,2 · 10². Ook kleine getallen mogen in deze notatie." },

        { t: "mc", q: "Welke schrijfwijze is de échte wetenschappelijke notatie van 47 000?",
          o: ["4,7 · 10⁴", "47 · 10³", "0,47 · 10⁵", "4,7 · 10³"],
          a: "4,7 · 10⁴",
          fout: {
            "47 · 10³": "de waarde klopt, maar 47 is groter dan 10. Het eerste getal moet tussen 1 en 10 liggen.",
            "0,47 · 10⁵": "de waarde klopt, maar 0,47 is kleiner dan 1. Ook dat mag niet volgens de afspraak.",
            "4,7 · 10³": "het eerste getal is goed, maar de exponent niet: 4,7 · 10³ = 4700, en dat is tien keer te klein."
          },
          w: "Het eerste getal moet tussen 1 en 10 liggen.",
          meer: "47 000 = 4,7 · 10⁴. Het getal 4,7 ligt tussen 1 en 10, dus dit is de juiste vorm." },

        { t: "velden", q: "Schrijf 5,29 · 10⁵ in de gewone notatie. (Geen spaties of punten.)",
          velden: [{ label: "gewoon getal", a: "529000" }],
          w: "Komma 5 plaatsen naar rechts.",
          meer: "5,29 · 10⁵ = 529 000. De komma schuift 5 plaatsen naar rechts, aanvullen met nullen." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Voor <b>kleine</b> getallen gebruik je een <b>negatieve exponent</b>.",
        "<b>10⁻³ = 1/10³ = 0,001</b> en <b>10⁻⁵ = 0,000 01</b>.",
        "Dus: <b>0,000 000 5 = 5 · 10⁻⁷</b>. Tel de nullen na de komma vóór het eerste cijfer: dat zijn er 7.",
        "<b>De truc</b>: tel hoeveel plaatsen de komma naar <b>rechts</b> moet tot je één cijfer vóór de komma hebt. Dat aantal wordt de exponent, met een <b>minteken</b>.",
        "Onthoud: <b>klein getal geeft negatieve exponent</b>, groot getal geeft positieve exponent."
      ],
      regel: "Kleiner dan 1: negatieve exponent. Tel de plaatsen die de komma naar rechts schuift.",
      voorbeelden: [
        { en: "0,000 071 2 = 7,12 · 10⁻⁵", let: "De komma schuift 5 plaatsen naar rechts." },
        { en: "0,0351 = 3,51 · 10⁻²", let: "Twee plaatsen, dus 10⁻²." }
      ],
      vragen: [
        { t: "velden", q: "Schrijf 0,000 86 in de wetenschappelijke notatie.",
          velden: [{ label: "getal", a: "8,6" }, { label: "exponent van 10", a: "-4" }],
          w: "De komma schuift 4 plaatsen naar rechts.",
          meer: "0,00086 = 8,6 · 10⁻⁴. Van 0,00086 naar 8,6 zijn 4 plaatsen, en omdat het getal klein is wordt de exponent negatief." },

        { t: "mc", q: "Wat is 0,000 007 3 in de wetenschappelijke notatie?",
          o: ["7,3 · 10⁻⁶", "7,3 · 10⁶", "7,3 · 10⁻⁷", "73 · 10⁻⁷"],
          a: "7,3 · 10⁻⁶",
          fout: {
            "7,3 · 10⁶": "de exponent moet negatief zijn. Dit getal is veel kleiner dan 1, en 7,3 · 10⁶ is 7 300 000.",
            "7,3 · 10⁻⁷": "je hebt een plaats te veel geteld. Van 0,0000073 naar 7,3 schuift de komma 6 plaatsen, niet 7.",
            "73 · 10⁻⁷": "de waarde klopt, maar 73 is groter dan 10. Het eerste getal moet tussen 1 en 10 liggen."
          },
          w: "Zes plaatsen naar rechts, dus 10⁻⁶.",
          meer: "0,0000073 = 7,3 · 10⁻⁶. Tel de plaatsen: 0,0000073 → 00,000073 → ... → 7,3, dat zijn er 6." },

        { t: "velden", q: "Schrijf 0,028 91 in de wetenschappelijke notatie.",
          velden: [{ label: "getal", a: "2,891" }, { label: "exponent van 10", a: "-2" }],
          w: "Twee plaatsen naar rechts.",
          meer: "0,02891 = 2,891 · 10⁻². De komma schuift 2 plaatsen." },

        { t: "velden", q: "Schrijf 9,318 · 10⁻² in de gewone notatie. (Gebruik een komma.)",
          velden: [{ label: "gewoon getal", a: "0,09318" }],
          w: "Komma 2 plaatsen naar links.",
          meer: "9,318 · 10⁻² = 0,09318. Een negatieve exponent maakt het getal kleiner." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu <b>rekenen</b> met de wetenschappelijke notatie, en heen en weer schakelen.",
        "De rekenmachine gaat er vanzelf op over als een getal te groot of te klein wordt voor het scherm.",
        "Zo geeft <b>0,32²⁴</b> de uitkomst <b>1,329 · 10⁻¹²</b> (afgerond op drie decimalen).",
        "Bij een som als 5 miljard keer 4,7 reken je eerst het getal uit en zet je het dan om.",
        "<b>Voorvoegsels</b> kom je in biologie en natuurkunde tegen: milli = 10⁻³, micro = 10⁻⁶, nano = 10⁻⁹, pico = 10⁻¹², femto = 10⁻¹⁵."
      ],
      regel: "Reken eerst gewoon uit, zet daarna pas om naar de wetenschappelijke notatie.",
      voorbeelden: [
        { en: "1 393 000 = 1,393 · 10⁶", let: "De diameter van de zon in km." },
        { en: "0,000 000 65 = 6,5 · 10⁻⁷", let: "De golflengte van rood licht in meter." }
      ],
      vragen: [
        { t: "velden", q: "De zon heeft een diameter van 1 393 000 km. Schrijf dat in de wetenschappelijke notatie.",
          velden: [{ label: "getal", a: "1,393" }, { label: "exponent van 10", a: "6" }],
          w: "Zes plaatsen naar links.",
          meer: "1 393 000 = 1,393 · 10⁶ km." },

        { t: "velden", q: "De golflengte van rood licht is ongeveer 0,000 000 65 meter. Schrijf dat in de wetenschappelijke notatie.",
          velden: [{ label: "getal", a: "6,5" }, { label: "exponent van 10", a: "-7" }],
          w: "Zeven plaatsen naar rechts, dus negatieve exponent.",
          meer: "0,00000065 = 6,5 · 10⁻⁷ meter." },

        { t: "mc", q: "1 kubieke cm bloed bevat 5 miljard rode bloedcellen. Hoe schrijf je 5 miljard?",
          o: ["5 · 10⁹", "5 · 10⁶", "5 · 10¹²", "5 · 10⁸"],
          a: "5 · 10⁹",
          fout: {
            "5 · 10⁶": "dat is 5 miljoen, duizend keer te weinig. Een miljard is 10⁹.",
            "5 · 10¹²": "dat is 5 biljoen, duizend keer te veel. Een biljoen is 10¹², een miljard is 10⁹.",
            "5 · 10⁸": "dat is 500 miljoen. Tel de nullen: een miljard heeft er negen."
          },
          w: "Een miljard is 10⁹.",
          meer: "5 miljard = 5 000 000 000 = 5 · 10⁹. Handig rijtje: miljoen 10⁶, miljard 10⁹, biljoen 10¹²." },

        { t: "velden", q: "Een eiwitmolecuul is 0,000 000 005 1 meter. Schrijf dat in de wetenschappelijke notatie.",
          velden: [{ label: "getal", a: "5,1" }, { label: "exponent van 10", a: "-9" }],
          w: "Negen plaatsen naar rechts.",
          meer: "0,0000000051 = 5,1 · 10⁻⁹ meter. Dat is ongeveer 5 nanometer, want nano = 10⁻⁹." }
      ]
    }
  ]
}

];

/* =========================================================================
   OVERZICHT, de machtenkaart (verwarbare categorieen, contrastief)
   ========================================================================= */
window.OVERZICHT = {
  titel: "De machtenkaart",
  tegelTekst: "Keer, delen, plus of een haakje? Zie in één overzicht welke regel je pakt",
  intro: "Je kent de losse regels voor machten wel. Het lastige is: <b>wélke</b> pak je? " +
         "Het antwoord staat niet in de machten zelf, maar in het <b>teken ertussen</b>. " +
         "Kijk dus altijd eerst daarnaar. Deze kaart loopt de vier gevallen langs.",
  kaart: [
    { id: "tussen", label: "WAT STAAT ER TUSSEN DE MACHTEN?", kop: true, kleur: "brand", kinderen: [
      { id: "keer",  label: "KEER  ·", regel: "exponenten OPTELLEN" },
      { id: "delen", label: "DELEN  :", regel: "exponenten AFTREKKEN" },
      { id: "plus",  label: "PLUS of MIN", regel: "exponenten BLIJVEN GELIJK" }
    ]},
    { id: "haak", label: "OF ZIT ER EEN HAAKJE OMHEEN?", kop: true, kleur: "plum", kinderen: [
      { id: "machtmacht", label: "(a⁵)³", regel: "exponenten VERMENIGVULDIGEN" },
      { id: "machtproduct", label: "(2x)⁴", regel: "ELKE factor tot die macht" }
    ]}
  ],
  stappen: [
    { kop: "Kijk eerst naar het teken", pad: ["tussen"],
      uitleg: [
        "Bij machten zie je steeds dezelfde letters, bijvoorbeeld <b>a⁵</b> en <b>a³</b>. Wat je moet doen, staat niet in die machten.",
        "Kijk dus altijd eerst: staat er een <b>keer</b>, een <b>deelteken</b>, een <b>plus</b>, of zit er een <b>haakje</b> omheen?",
        "Die ene blik vooraf scheelt de meeste fouten."
      ],
      vb: [{ en: "Zelfde machten, ander teken, ander antwoord", let: "a⁵ · a³ = a⁸, maar a⁵ + a⁵ = 2a⁵" }] },

    { kop: "Keer: exponenten optellen", pad: ["tussen", "keer"],
      uitleg: [
        "<b>a⁵ · a³ = a⁸</b>. Je telt de exponenten op: 5 + 3 = 8.",
        "Waarom? Schrijf het uit: vijf a'tjes keer drie a'tjes zijn samen acht a'tjes.",
        "Staan er getallen vóór? Die gaan gewoon keer elkaar: <b>3a⁵ · 4a³ = 12a⁸</b>."
      ],
      vb: [{ en: "a⁵ · a³ = a⁸", let: "5 + 3 = 8, het grondtal blijft a" }],
      check: { q: "Wat is x⁴ · x⁶?", o: ["x¹⁰", "x²⁴", "2x¹⁰"], a: "x¹⁰",
        goed: "✅ Precies, bij keer tel je op: 4 + 6 = 10.",
        fout: { "x²⁴": "je hebt vermenigvuldigd. Dat hoort bij een macht van een macht, zoals (x⁴)⁶.",
                "2x¹⁰": "er komt geen 2 bij. Je telt de exponenten op, niet het aantal termen." } } },

    { kop: "Delen: exponenten aftrekken", pad: ["tussen", "delen"],
      uitleg: [
        "<b>a⁵ : a³ = a²</b>. Je trekt de exponenten van elkaar af: 5 − 3 = 2.",
        "Waarom? Van de vijf a'tjes boven vallen er drie weg tegen die onder. Blijven er twee over.",
        "Vallen ze allemaal weg? Dan blijft er <b>1</b> over: a⁵/a⁵ = 1, net als 8/8 = 1."
      ],
      vb: [{ en: "a⁵ / a³ = a²", let: "5 − 3 = 2" }],
      check: { q: "Wat is p⁹ / p⁴?", o: ["p⁵", "p¹³", "p³⁶"], a: "p⁵",
        goed: "✅ Goed, bij delen trek je af: 9 − 4 = 5.",
        fout: { "p¹³": "je hebt opgeteld. Optellen hoort bij keer, niet bij delen.",
                "p³⁶": "je hebt vermenigvuldigd. Dat hoort bij (p⁹)⁴." } } },

    { kop: "Plus of min: exponent blijft staan", pad: ["tussen", "plus"],
      uitleg: [
        "<b>a⁵ + a⁵ = 2a⁵</b>. De exponent verandert <b>niet</b>. Je telt het <b>aantal</b> termen.",
        "Dit is de belangrijkste val van het hoofdstuk: bij plus doe je iets heel anders dan bij keer.",
        "En let op: het mag <b>alleen</b> als de machten al gelijk zijn. <b>a⁵ + a³ kan niet</b>, dat blijft staan als k.n."
      ],
      vb: [{ en: "a⁵ + a⁵ = 2a⁵, maar a⁵ + a³ kan niet", let: "Bij plus blijft de exponent gewoon staan" }],
      check: { q: "Wat is 3a⁴ + 5a⁴?", o: ["8a⁴", "8a⁸", "15a⁴"], a: "8a⁴",
        goed: "✅ Ja, 3 + 5 = 8 en de exponent 4 blijft staan.",
        fout: { "8a⁸": "de exponent blijft 4. Optellen van exponenten hoort bij keer.",
                "15a⁴": "je hebt 3 en 5 vermenigvuldigd. Er staat een plusteken tussen." } } },

    { kop: "Haakje eromheen: vermenigvuldigen", pad: ["haak", "machtmacht"],
      uitleg: [
        "<b>(a⁵)³ = a¹⁵</b>. Hier <b>vermenigvuldig</b> je de exponenten: 5 · 3 = 15.",
        "Waarom? (a⁵)³ betekent a⁵ · a⁵ · a⁵, dus drie keer vijf a'tjes.",
        "Herken je het aan het <b>haakje met een exponent erbuiten</b>."
      ],
      vb: [{ en: "(a⁵)³ = a¹⁵", let: "5 · 3 = 15" }],
      check: { q: "Wat is (x³)⁴?", o: ["x¹²", "x⁷", "x⁸¹"], a: "x¹²",
        goed: "✅ Klopt, 3 · 4 = 12.",
        fout: { "x⁷": "je hebt opgeteld. Optellen hoort bij x³ · x⁴, zonder haakje.",
                "x⁸¹": "je hebt 3⁴ uitgerekend. Alleen de exponenten gaan keer elkaar: 3 · 4." } } },

    { kop: "Haakje om een product: alles mee", pad: ["haak", "machtproduct"],
      uitleg: [
        "<b>(2x)⁴ = 2⁴ · x⁴ = 16x⁴</b>. <b>Élke</b> factor binnen de haak gaat tot die macht.",
        "Het <b>getal dus ook</b>. Dat vergeten is een klassieke fout: 2 wordt 16, niet 2.",
        "En let op waar een minteken staat: <b>(-3a)⁴ = 81a⁴</b> (min doet mee, even macht geeft plus), maar <b>-(3a)⁴ = -81a⁴</b> (min staat buiten en blijft min)."
      ],
      vb: [{ en: "(2x)⁴ = 16x⁴", let: "Het getal gaat óók tot de macht: 2⁴ = 16" }],
      check: { q: "Wat is (3y)²?", o: ["9y²", "3y²", "6y²"], a: "9y²",
        goed: "✅ Precies, 3² = 9 en y² erbij.",
        fout: { "3y²": "de 3 staat binnen de haak, dus die gaat ook tot de macht: 3² = 9.",
                "6y²": "je hebt 3 · 2 gedaan. De 3 moet tot de macht 2: 3 · 3 = 9." } } },

    { kop: "Samenvatting", pad: [],
      samenvatting: [
        "Keer  ·   geeft exponenten OPTELLEN      a⁵ · a³ = a⁸",
        "Delen  :   geeft exponenten AFTREKKEN     a⁵ : a³ = a²",
        "Plus/min  geeft exponent BLIJFT GELIJK    a⁵ + a⁵ = 2a⁵",
        "(a⁵)³     geeft exponenten KEER ELKAAR    = a¹⁵",
        "(2x)⁴     geeft ELKE factor tot die macht = 16x⁴"
      ],
      uitleg: [
        "Vier bewerkingen, vier verschillende dingen die met de exponenten gebeuren.",
        "Kijk altijd éérst naar het teken tussen de machten. Dan weet je welke regel je pakt.",
        "Ga nu oefenen met de hoofdstuktoets, daar komen ze door elkaar."
      ] }
  ]
};

/* =========================================================================
   MIXVRAGEN, interleaved discriminatie (welke regel hoort hier?)
   ========================================================================= */
window.MIXVRAGEN = [
  { t: "mc", q: "Welke regel hoort bij a⁷ · a²?",
    o: ["Exponenten optellen", "Exponenten aftrekken", "Exponenten vermenigvuldigen", "Exponent blijft gelijk"],
    a: "Exponenten optellen",
    fout: {
      "Exponenten aftrekken": "aftrekken hoort bij delen (a⁷ : a²). Hier staat een maalteken.",
      "Exponenten vermenigvuldigen": "vermenigvuldigen hoort bij een macht van een macht, zoals (a⁷)².",
      "Exponent blijft gelijk": "dat hoort bij plus of min, zoals a⁷ + a⁷."
    },
    w: "Bij keer tel je de exponenten op.", meer: "a⁷ · a² = a⁹, want 7 + 2 = 9." },

  { t: "mc", q: "Welke regel hoort bij a⁷ + a⁷?",
    o: ["Exponent blijft gelijk", "Exponenten optellen", "Exponenten aftrekken", "Exponenten vermenigvuldigen"],
    a: "Exponent blijft gelijk",
    fout: {
      "Exponenten optellen": "optellen van exponenten hoort bij keer. Bij plus tel je het aantal termen, niet de exponenten.",
      "Exponenten aftrekken": "aftrekken hoort bij delen.",
      "Exponenten vermenigvuldigen": "dat hoort bij (a⁷)², een macht van een macht."
    },
    w: "Bij plus blijft de exponent staan.", meer: "a⁷ + a⁷ = 2a⁷. Je telt hoeveel stuks a⁷ je hebt." },

  { t: "mc", q: "Welke regel hoort bij (a⁷)²?",
    o: ["Exponenten vermenigvuldigen", "Exponenten optellen", "Exponenten aftrekken", "Exponent blijft gelijk"],
    a: "Exponenten vermenigvuldigen",
    fout: {
      "Exponenten optellen": "optellen hoort bij a⁷ · a², zonder haakje eromheen.",
      "Exponenten aftrekken": "aftrekken hoort bij delen.",
      "Exponent blijft gelijk": "dat hoort bij plus of min."
    },
    w: "Haakje met exponent: exponenten keer elkaar.", meer: "(a⁷)² = a¹⁴, want 7 · 2 = 14." },

  { t: "mc", q: "Welke regel hoort bij a⁷ / a²?",
    o: ["Exponenten aftrekken", "Exponenten optellen", "Exponenten vermenigvuldigen", "Exponent blijft gelijk"],
    a: "Exponenten aftrekken",
    fout: {
      "Exponenten optellen": "optellen hoort bij keer.",
      "Exponenten vermenigvuldigen": "dat hoort bij een macht van een macht.",
      "Exponent blijft gelijk": "dat hoort bij plus of min."
    },
    w: "Bij delen trek je de exponenten af.", meer: "a⁷ / a² = a⁵, want 7 − 2 = 5." },

  { t: "mc", q: "Eén van deze vier kan NIET herleid worden. Welke?",
    o: ["a⁵ + a³", "a⁵ · a³", "a⁵ / a³", "(a⁵)³"],
    a: "a⁵ + a³",
    fout: {
      "a⁵ · a³": "dit kan wel: a⁸. Bij keer tel je de exponenten op, ongeacht of ze gelijk zijn.",
      "a⁵ / a³": "dit kan wel: a². Bij delen trek je af.",
      "(a⁵)³": "dit kan wel: a¹⁵. Bij een macht van een macht vermenigvuldig je."
    },
    w: "Bij plus moeten de exponenten al gelijk zijn.",
    meer: "a⁵ + a³ is k.n., want a⁵ en a³ zijn niet gelijksoortig. Bij keer, delen en machtsverheffen mogen de exponenten wél verschillen." },

  { t: "mc", q: "Wat is 5a + 3a, en wat is 5a · 3a?",
    o: ["8a en 15a²", "8a en 15a", "8a² en 15a²", "15a en 8a²"],
    a: "8a en 15a²",
    fout: {
      "8a en 15a": "bij keer worden de letters ook vermenigvuldigd: a · a = a². Dus 5a · 3a = 15a².",
      "8a² en 15a²": "bij optellen verandert de letter niet: 5a + 3a = 8a, niet 8a².",
      "15a en 8a²": "je hebt de twee bewerkingen omgedraaid. Plus geeft 8a, keer geeft 15a²."
    },
    w: "Bij plus blijft de letter gelijk, bij keer wordt het een kwadraat.",
    meer: "5a + 3a = 8a (tel het aantal a'tjes). 5a · 3a = 15a² (5·3 = 15 en a·a = a²)." },

  { t: "mc", q: "Welke van deze is fout herleid?",
    o: ["(a + 4)² = a² + 16", "(a + 4)(a + 4) = a² + 8a + 16", "3(a + 4) = 3a + 12", "-(a + 4) = -a − 4"],
    a: "(a + 4)² = a² + 16",
    fout: {
      "(a + 4)(a + 4) = a² + 8a + 16": "dit is juist goed. Vier vermenigvuldigingen, en de middelste twee zijn samen 8a.",
      "3(a + 4) = 3a + 12": "dit is goed. De 3 gaat langs a en langs 4.",
      "-(a + 4) = -a − 4": "dit is goed. De min draait beide tekens om."
    },
    w: "Een kwadraat verdeelt zich niet over een plus.",
    meer: "(a + 4)² = (a + 4)(a + 4) = a² + 8a + 16. De middelste term ontbreekt in het foute antwoord. Check met getallen: (2 + 3)² = 25, maar 2² + 3² = 13." },

  { t: "mc", q: "Bij welke mag je teller en noemer door a delen?",
    o: ["(5a + 3a)/a", "(5 + 3a)/a", "(5a − 3)/a", "(5 + 3)/a"],
    a: "(5a + 3a)/a",
    fout: {
      "(5 + 3a)/a": "in de 5 zit geen a. Delen mag alleen als élke term in de teller een a heeft.",
      "(5a − 3)/a": "in de 3 zit geen a, dus hier mag het niet.",
      "(5 + 3)/a": "in geen van beide termen zit een a."
    },
    w: "Delen mag alleen als het in élke term zit.",
    meer: "In (5a + 3a)/a hebben beide termen een a. Je kunt zelfs eerst samennemen: 8a/a = 8." }
];

/* =========================================================================
   BEGRIPPEN
   ========================================================================= */
window.BEGRIPPEN = {
  "Begrippen": {
    emoji: "📐",
    titel: "Begrippen H1",
    items: [
      ["een uitdrukking zo kort mogelijk schrijven", "herleiden"],
      ["de afkorting die je opschrijft als iets niet korter kan", "k.n."],
      ["een los stukje van een som, gescheiden door + of −", "term"],
      ["een los stukje van een product, gescheiden door een maalpunt", "factor"],
      ["termen met precies dezelfde letters én dezelfde exponenten", "gelijksoortig"],
      ["het getal vóór de letter (in 7a is dit de 7)", "coëfficiënt"],
      ["een grondtal met een exponent, zoals a⁵", "macht"],
      ["de letter of het getal onderaan de macht (de a in a⁵)", "grondtal"],
      ["het kleine getal rechtsboven; zegt hoe vaak (de 5 in a⁵)", "exponent"],
      ["tot de macht 2", "kwadraat"],
      ["het bovenste deel van een breuk", "teller"],
      ["het onderste deel van een breuk", "noemer"],
      ["breuken met dezelfde noemer", "gelijknamig"],
      ["teller en noemer door hetzelfde delen", "vereenvoudigen"],
      ["het getal waarmee het product 1 is (3/4 hoort bij 4/3)", "omgekeerde"],
      ["een getal van 1 tot 10 keer een macht van 10", "wetenschappelijke notatie"]
    ]
  }
};

window.OPSTAP = {};
window.PROEFTOETS = [];

window.AANMOEDIGING = {
  goed: ["Top!", "Goed bezig, Storm!", "Yes, gelukt!", "Knap hoor!", "Precies goed!", "Lekker!", "Scherp!"],
  bijna: ["Bijna!", "Net niet, geeft niks.", "Dat hoort erbij, probeer 't nog eens.", "Bijna goed!", "Je zit er dichtbij."],
  levelup: ["Level omhoog! 🚀", "Je gaat naar een hoger niveau!", "Knap, door naar het volgende! ✨"],
  leveldown: ["We pakken het even rustiger aan.", "Even een stapje terug, dan zit het straks vast.", "Geen probleem, we bouwen het opnieuw op."],
  stapelklaar: ["Stapel klaar! 🎉", "Lekker gedaan, Storm! 🌟", "Helemaal af! 💪"]
};

/* =========================================================================
   GENERATORS, parametrische vraag-sjablonen per onderwerp x niveau.
   Elke functie levert een VERS vraagobject met willekeurige getallen binnen
   een vaste moeilijkheidsband, zodat elke ronde anders is. Reken-types
   (stap/bouw/velden) worden numeriek nagekeken door math.js equiv().
   Elk object heeft w + meer, zodat een FOUT antwoord altijd uitleg geeft.
   Verifieer met: node tools/checks/genverify.mjs <app-map>
   ========================================================================= */
(function () {
  const ri = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
  const pick = a => a[Math.floor(Math.random() * a.length)];

  /* coefficient + letter(^exp): 0 -> "0", ±1·x -> ±x, kale constante als L leeg */
  function co(c, L, e) {
    if (c === 0) return "0";
    const pw = (e && e > 1) ? "^" + e : "";
    if (!L) return String(c);
    const mag = (Math.abs(c) === 1) ? "" : Math.abs(c);
    return (c < 0 ? "-" : "") + mag + L + pw;
  }
  /* polynoom uit termen [{c,v,e}], nette tekens, 0-termen weg */
  function poly(terms) {
    const t = terms.filter(x => x && x.c !== 0);
    if (!t.length) return "0";
    let s = co(t[0].c, t[0].v, t[0].e);
    for (let i = 1; i < t.length; i++) {
      const x = t[i];
      s += (x.c < 0 ? " - " : " + ") + co(Math.abs(x.c), x.v, x.e);
    }
    return s;
  }
  const sgn = s => s < 0 ? "-" : "+";
  /* grootste gemene deler, om breuk-antwoorden altijd vereenvoudigd te geven */
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = b; b = a % b; a = t; } return a || 1; }
  /* getal met optionele letters: 1x -> "x", 1 (zonder letter) -> "1" */
  function term(c, L) {
    if (!L) return String(c);
    if (c === 1) return L;
    if (c === -1) return "-" + L;
    return String(c) + L;
  }
  /* letter met exponent: e=1 -> "a", e>1 -> "a^e" */
  const pw = (L, e) => e === 1 ? L : `${L}^${e}`;
  const G = {};

  /* ---------------- 1.1 A  HAAKJES ---------------- */
  G.haakjes_n1 = [
    () => { const L = pick(["a", "x", "p", "y"]), k = ri(2, 7), b = ri(2, 9), s = pick([1, -1]);
      const opg = `${k}(${L} ${sgn(s)} ${b})`, ans = poly([{ c: k, v: L }, { c: s * k * b, v: "" }]);
      return { t: "stap", opgave: opg, vars: [L],
        w: `De ${k} gaat langs de ${L} én langs de ${b}.`,
        meer: `${opg} = ${k}·${L} ${sgn(s)} ${k}·${b} = ${ans}.`,
        stappen: [{ prompt: "Werk de haakjes weg", a: ans,
          hints: [`${k} · ${L} = ${co(k, L)}`, `${k} · ${b} = ${k * b}, teken: ${s < 0 ? "min" : "plus"}`] }] }; },
    () => { const L = pick(["a", "x", "b"]), j = ri(2, 6), k = ri(2, 5), b = ri(2, 9), s = pick([1, -1]);
      const opg = `${j}(${co(k, L)} ${sgn(s)} ${b})`, ans = poly([{ c: j * k, v: L }, { c: s * j * b, v: "" }]);
      return { t: "bouw", q: `Werk de haakjes weg: ${opg}`, a: ans, vars: [L],
        w: `De ${j} gaat langs ${co(k, L)} én langs de ${b}.`,
        meer: `${opg} = ${j}·${k}${L} ${sgn(s)} ${j}·${b} = ${ans}.` }; }
  ];
  G.haakjes_n2 = [
    () => { const L = pick(["x", "a", "p"]), M = pick(["y", "b", "q"]), j = ri(2, 5), k = ri(2, 5), m = ri(2, 8), s = pick([1, -1]);
      const opg = `${j}${L}(${k}${M} ${sgn(s)} ${m})`, ans = `${j * k}${L}${M} ${sgn(s)} ${j * m}${L}`;
      return { t: "bouw", q: `Werk de haakjes weg: ${opg}`, a: ans, vars: [L, M],
        w: `Alles vóór de haak (${j}${L}) gaat langs elk stukje.`,
        meer: `${opg} = ${j}${L}·${k}${M} ${sgn(s)} ${j}${L}·${m} = ${ans}.` }; },
    () => { const L = pick(["a", "x", "p"]), k = ri(2, 6), a = ri(1, 6), b = ri(1, 9);
      const opg = `-${k}(${co(a, L)} - ${b})`, ans = poly([{ c: -k * a, v: L }, { c: k * b, v: "" }]);
      return { t: "stap", opgave: opg, vars: [L],
        w: "Een min vóór de haak draait élk teken binnen de haak om.",
        meer: `${opg} = -${k}·${co(a, L)} + ${k}·${b} = ${ans}. Min keer min is plus.`,
        stappen: [{ prompt: "Werk de haakjes weg", a: ans,
          hints: [`-${k} · ${co(a, L)} = ${co(-k * a, L)}`, `-${k} · -${b} = +${k * b}`] }] }; }
  ];
  G.haakjes_n3 = [
    () => { const L = pick(["a", "x", "p"]), j = ri(2, 5), k = ri(2, 5), b = ri(2, 7), c = ri(2, 7), s = pick([1, -1]);
      const opg = `${j}(${L} + ${b}) ${s < 0 ? "-" : "+"} ${k}(${L} - ${c})`;
      const cf = j + s * k, kn = j * b - s * k * c;
      const ans = poly([{ c: cf, v: L }, { c: kn, v: "" }]);
      return { t: "stap", opgave: opg, vars: [L],
        w: "Eerst beide haakjes weg, daarna samennemen.",
        meer: `${opg} = ${j}${L} + ${j * b} ${s < 0 ? "-" : "+"} ${k}${L} ${s < 0 ? "+" : "-"} ${k * c} = ${ans}.`,
        stappen: [
          { prompt: "Werk beide haakjes weg", a: poly([{ c: j, v: L }, { c: j * b, v: "" }, { c: s * k, v: L }, { c: -s * k * c, v: "" }]),
            hints: [`${j}(${L} + ${b}) = ${j}${L} + ${j * b}`, `${s < 0 ? "-" : "+"}${k}(${L} - ${c}) geeft ${co(s * k, L)} ${sgn(-s * k * c)} ${Math.abs(k * c)}`] },
          { prompt: "Neem nu de gelijksoortige termen samen", a: ans,
            hints: [`De ${L}'en: ${j} ${s < 0 ? "-" : "+"} ${k} = ${cf}`, `De getallen: ${j * b} ${s < 0 ? "+" : "-"} ${k * c} = ${kn}`] }] }; }
  ];

  /* ---------------- 1.1 B  DUBBELE HAAKJES ---------------- */
  G.dubbelhaakjes_n1 = [
    () => { const L = pick(["a", "x", "p"]), M = pick(["b", "y", "q"]), m = ri(2, 9), n = ri(2, 9);
      const opg = `(${L} + ${m})(${M} + ${n})`;
      const ans = `${L}${M} + ${n}${L} + ${m}${M} + ${m * n}`;
      return { t: "bouw", q: `Herleid: ${opg}`, a: ans, vars: [L, M],
        w: "Vier vermenigvuldigingen, geen enkele overslaan.",
        meer: `${opg} = ${L}·${M} + ${L}·${n} + ${m}·${M} + ${m}·${n} = ${ans}. Verschillende letters, dus niets is samen te nemen.` }; },
    () => { const L = pick(["p", "a", "x"]), M = pick(["q", "b", "y"]), m = ri(2, 8), n = ri(2, 8);
      const opg = `(${L} - ${m})(${M} + ${n})`;
      const ans = `${L}${M} + ${n}${L} - ${m}${M} - ${m * n}`;
      return { t: "bouw", q: `Herleid: ${opg}`, a: ans, vars: [L, M],
        w: "Neem het minteken mee bij beide vermenigvuldigingen.",
        meer: `${opg} = ${L}${M} + ${n}${L} - ${m}${M} - ${m * n}. De -${m} gaat langs ${M} én langs ${n}.` }; }
  ];
  G.dubbelhaakjes_n2 = [
    () => { const L = pick(["x", "a", "p", "q"]), m = ri(2, 9), n = ri(2, 9);
      const opg = `(${L} + ${m})(${L} + ${n})`;
      const ans = poly([{ c: 1, v: L, e: 2 }, { c: m + n, v: L }, { c: m * n, v: "" }]);
      return { t: "stap", opgave: opg, vars: [L],
        w: `${L} · ${L} = ${L}², en de twee losse ${L}-termen kun je samennemen.`,
        meer: `${opg} = ${L}² + ${n}${L} + ${m}${L} + ${m * n} = ${ans}.`,
        stappen: [
          { prompt: "Werk alle vier de vermenigvuldigingen uit", a: `${L}^2 + ${n}${L} + ${m}${L} + ${m * n}`,
            hints: [`${L}·${L} = ${L}² en ${L}·${n} = ${n}${L}`, `${m}·${L} = ${m}${L} en ${m}·${n} = ${m * n}`] },
          { prompt: "Neem nu de gelijksoortige termen samen", a: ans,
            hints: [`${n}${L} en ${m}${L} zijn gelijksoortig`, `${n} + ${m} = ${m + n}`] }] }; },
    () => { const L = pick(["x", "a", "q", "b"]), m = ri(2, 9), n = ri(2, 9);
      const opg = `(${L} + ${m})(${L} - ${n})`;
      const ans = poly([{ c: 1, v: L, e: 2 }, { c: m - n, v: L }, { c: -m * n, v: "" }]);
      return { t: "bouw", q: `Herleid: ${opg}`, a: ans, vars: [L],
        w: "Let op de tekens bij de middelste twee termen.",
        meer: `${opg} = ${L}² - ${n}${L} + ${m}${L} - ${m * n} = ${ans}. Want -${n} + ${m} = ${m - n}.` }; }
  ];
  G.dubbelhaakjes_n3 = [
    () => { const L = pick(["a", "x", "b", "p"]), m = ri(2, 9), s = pick([1, -1]);
      const opg = `(${L} ${sgn(s)} ${m})^2`;
      const ans = poly([{ c: 1, v: L, e: 2 }, { c: s * 2 * m, v: L }, { c: m * m, v: "" }]);
      return { t: "stap", opgave: opg, vars: [L],
        w: "Eerst uitschrijven als twee haakjes, nooit beide termen los kwadrateren.",
        meer: `${opg} = (${L} ${sgn(s)} ${m})(${L} ${sgn(s)} ${m}) = ${ans}. De middelste term is 2 · ${m} = ${2 * m}.`,
        stappen: [
          { prompt: "Schrijf het kwadraat uit als twee haakjes", a: `(${L} ${sgn(s)} ${m})(${L} ${sgn(s)} ${m})`,
            hints: ["Kwadraat is twee keer hetzelfde keer elkaar", `(${L} ${sgn(s)} ${m})(${L} ${sgn(s)} ${m})`] },
          { prompt: "Werk uit en neem samen", a: ans,
            hints: [`${L}·${L} = ${L}², twee keer ${L}·${s < 0 ? "-" : ""}${m}, en ${s < 0 ? "-" : ""}${m}·${s < 0 ? "-" : ""}${m} = ${m * m}`,
                    `De middelste termen samen: ${co(s * 2 * m, L)}`] }] }; },
    () => { const L = pick(["r", "x", "a"]), k = ri(2, 4), m = ri(1, 6), n = ri(2, 6), s = pick([1, -1]);
      const opg = `(${k}${L} ${sgn(s)} ${m})(${L} + ${n})`;
      const ans = poly([{ c: k, v: L, e: 2 }, { c: k * n + s * m, v: L }, { c: s * m * n, v: "" }]);
      return { t: "bouw", q: `Herleid: ${opg}`, a: ans, vars: [L],
        w: `${k}${L} · ${L} = ${k}${L}², daarna de ${L}-termen samennemen.`,
        meer: `${opg} = ${k}${L}² + ${k * n}${L} ${sgn(s)} ${m}${L} ${sgn(s)} ${m * n} = ${ans}.` }; }
  ];

  /* ---------------- 1.1 C  HAAKJES COMBINEREN ---------------- */
  G.haakjescombi_n1 = [
    () => { const L = pick(["a", "x", "p"]), j = ri(2, 5), b = ri(2, 8), k = ri(2, 5), c = ri(2, 8);
      const opg = `${j}(${L} - ${b}) - ${k}(${c}${L} - ${b})`;
      const cf = j - k * c, kn = -j * b + k * b;
      const ans = poly([{ c: cf, v: L }, { c: kn, v: "" }]);
      return { t: "stap", opgave: opg, vars: [L],
        w: "Let op de min vóór de tweede haak.",
        meer: `${opg} = ${j}${L} - ${j * b} - ${k * c}${L} + ${k * b} = ${ans}.`,
        stappen: [
          { prompt: "Werk beide haakjes weg", a: poly([{ c: j, v: L }, { c: -j * b, v: "" }, { c: -k * c, v: L }, { c: k * b, v: "" }]),
            hints: [`${j}(${L} - ${b}) = ${j}${L} - ${j * b}`, `-${k}(${c}${L} - ${b}) = -${k * c}${L} + ${k * b}`] },
          { prompt: "Neem nu samen", a: ans,
            hints: [`De ${L}'en: ${j} - ${k * c} = ${cf}`, `De getallen: -${j * b} + ${k * b} = ${kn}`] }] }; }
  ];
  G.haakjescombi_n2 = [
    () => { const L = pick(["a", "x", "p"]), m = ri(2, 6), n = ri(2, 7), k = ri(2, 5), c = ri(1, 6);
      const opg = `(${L} + ${m})(${L} - ${n}) - ${k}(${L} + ${c})`;
      const ans = poly([{ c: 1, v: L, e: 2 }, { c: m - n - k, v: L }, { c: -m * n - k * c, v: "" }]);
      return { t: "bouw", q: `Herleid: ${opg}`, a: ans, vars: [L],
        w: "Eerst beide haakjes apart uitwerken, dan alles samennemen.",
        meer: `(${L} + ${m})(${L} - ${n}) = ${L}² ${sgn(m - n)} ${Math.abs(m - n)}${L} - ${m * n}. En -${k}(${L} + ${c}) = -${k}${L} - ${k * c}. Samen: ${ans}.` }; }
  ];
  G.haakjescombi_n3 = [
    () => { const L = pick(["a", "x"]), k = ri(2, 4), m = ri(2, 6), j = ri(2, 8);
      const opg = `(${k}${L} - ${m})^2 - ${j}${L}`;
      const ans = poly([{ c: k * k, v: L, e: 2 }, { c: -2 * k * m - j, v: L }, { c: m * m, v: "" }]);
      return { t: "stap", opgave: opg, vars: [L],
        w: "Eerst het kwadraat uitschrijven, dan pas de laatste term.",
        meer: `(${k}${L} - ${m})² = ${k * k}${L}² - ${2 * k * m}${L} + ${m * m}. Dan - ${j}${L} geeft ${ans}.`,
        stappen: [
          { prompt: "Werk het kwadraat uit", a: poly([{ c: k * k, v: L, e: 2 }, { c: -2 * k * m, v: L }, { c: m * m, v: "" }]),
            hints: [`(${k}${L} - ${m})(${k}${L} - ${m})`, `${k}${L}·${k}${L} = ${k * k}${L}², twee keer -${k * m}${L}, en -${m}·-${m} = ${m * m}`] },
          { prompt: `Trek nu ${j}${L} eraf en neem samen`, a: ans,
            hints: [`-${2 * k * m}${L} - ${j}${L}`, `-${2 * k * m} - ${j} = ${-2 * k * m - j}`] }] }; }
  ];

  /* ---------------- 1.2 A  BREUKEN VEREENVOUDIGEN ---------------- */
  G.breukvereenvoudigen_n1 = [
    () => { const L = pick(["a", "x", "p", "m"]), t = ri(2, 9); let n = ri(2, 9);
      if (n === t) n = t + 1;
      const g = gcd(t, n), T = t / g, N = n / g;
      return { t: "velden", q: `Vereenvoudig ${t}${L}/${n}${L} zo ver mogelijk. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: String(T) }, { label: "noemer", a: String(N) }],
        w: `Teller en noemer door ${L}${g > 1 ? ` en door ${g}` : ""} delen.`,
        meer: `${t}${L}/${n}${L}: de ${L}'en vallen weg, er blijft ${t}/${n} over.` +
              (g > 1 ? ` Dat kan nog verder: deel boven en onder door ${g}, dan krijg je ${T}/${N}.` : "") }; },
    () => { const L = pick(["b", "y", "q"]), M = pick(["c", "z", "r"]), k = ri(2, 9);
      return { t: "velden", q: `Vereenvoudig ${k}${L}/${k}${M}. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: L }, { label: "noemer", a: M }],
        w: `Teller en noemer door ${k} delen.`,
        meer: `${k}${L}/${k}${M}: de ${k} valt boven en onder weg. ${L} en ${M} zijn verschillend, dus die blijven staan.` }; }
  ];
  G.breukvereenvoudigen_n2 = [
    () => { const L = pick(["a", "x", "p"]), M = pick(["b", "y", "q"]), d = ri(2, 6);
      let t = ri(2, 5), n = ri(2, 5);
      const g0 = gcd(t, n); t /= g0; n /= g0;          // t en n onderling ondeelbaar houden
      return { t: "velden", q: `Vereenvoudig ${d * t}${L}/${d * n}${L}${M} zo ver mogelijk. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: String(t) }, { label: "noemer", a: term(n, M) }],
        w: `Door ${d} en door ${L} delen.`,
        meer: `${d * t}${L}/${d * n}${L}${M}: ${d * t} en ${d * n} kunnen allebei door ${d} (geeft ${t} en ${n}), en de ${L}'en vallen weg. Blijft over: ${t}/${term(n, M)}.` }; }
  ];
  G.breukvereenvoudigen_n3 = [
    () => { const L = pick(["a", "x", "p"]), M = pick(["b", "y", "q"]), k = ri(2, 6), m = ri(2, 9);
      const res = k - m;
      return { t: "bouw", q: `Herleid: ${k}${L}${M}/${L} - ${m}${M}`, a: co(res, M), vars: [L, M],
        w: "Vereenvoudig eerst de breuk, dan pas samennemen.",
        meer: `${k}${L}${M}/${L} = ${k}${M} (de ${L}'en vallen weg). Dan ${k}${M} - ${m}${M} = ${co(res, M)}.` }; }
  ];

  /* ---------------- 1.2 B  BREUKEN OPTELLEN ---------------- */
  G.breukoptellen_n1 = [
    () => { const L = pick(["x", "a", "p"]), k = ri(2, 4), t1 = ri(2, 9), t2 = ri(2, 9);
      const som = t1 + t2, g = gcd(som, k), T = som / g, N = k / g;
      return { t: "velden", q: `Herleid ${t1}/${k}${L} + ${t2}/${k}${L} zo ver mogelijk. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: String(T) }, { label: "noemer", a: term(N, L) }],
        w: "Gelijke noemers, dus alleen de tellers samennemen.",
        meer: `${t1}/${k}${L} + ${t2}/${k}${L} = ${som}/${k}${L}. De noemer blijft staan.` +
              (g > 1 ? ` Dat kan nog verder: deel boven en onder door ${g}, dan krijg je ${T}/${term(N, L)}.` : "") }; },
    () => { const L = pick(["y", "b", "q"]), t1 = ri(4, 12), t2 = ri(2, 9);
      return { t: "velden", q: `Herleid ${t1}/${L} - ${t2}/${L}. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: String(t1 - t2) }, { label: "noemer", a: L }],
        w: "Tellers aftrekken, noemer blijft gelijk.",
        meer: `${t1}/${L} - ${t2}/${L} = ${t1 - t2}/${L}.` }; }
  ];
  G.breukoptellen_n2 = [
    () => { const L = pick(["x", "a", "p"]), M = pick(["y", "b", "q"]), t1 = ri(2, 9), t2 = ri(2, 9);
      return { t: "velden", q: `Herleid ${t1}/${L} + ${t2}/${M}. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: `${t1}${M} + ${t2}${L}` }, { label: "noemer", a: `${L}${M}` }],
        w: `De nieuwe noemer is ${L} · ${M} = ${L}${M}.`,
        meer: `${t1}/${L} wordt ${t1}${M}/${L}${M} en ${t2}/${M} wordt ${t2}${L}/${L}${M}. Samen: (${t1}${M} + ${t2}${L})/${L}${M}.` }; },
    () => { const L = pick(["a", "x"]), M = pick(["b", "y"]), t1 = ri(2, 9), t2 = ri(2, 9);
      return { t: "velden", q: `Herleid ${t1}/${L} - ${t2}/${M}. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: `${t1}${M} - ${t2}${L}` }, { label: "noemer", a: `${L}${M}` }],
        w: `Nieuwe noemer ${L}${M}, dan beide tellers aanpassen.`,
        meer: `${t1}/${L} - ${t2}/${M} = ${t1}${M}/${L}${M} - ${t2}${L}/${L}${M} = (${t1}${M} - ${t2}${L})/${L}${M}.` }; }
  ];
  G.breukoptellen_n3 = [
    () => { const L = pick(["a", "x", "p"]), t = ri(2, 9), k = ri(2, 8);
      return { t: "velden", q: `Herleid ${t}/${L} - ${k}. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: `${t} - ${k}${L}` }, { label: "noemer", a: L }],
        w: `Schrijf ${k} als ${k}${L}/${L}.`,
        meer: `${t}/${L} - ${k} = ${t}/${L} - ${k}${L}/${L} = (${t} - ${k}${L})/${L}. Verder herleiden kan niet: in de ${t} zit geen ${L}.` }; },
    () => { const L = pick(["a", "x", "p"]), k = ri(2, 8), t = ri(2, 9);
      return { t: "velden", q: `Herleid ${k} + ${t}/${L}. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: `${k}${L} + ${t}` }, { label: "noemer", a: L }],
        w: `Schrijf ${k} als ${k}${L}/${L}.`,
        meer: `${k} + ${t}/${L} = ${k}${L}/${L} + ${t}/${L} = (${k}${L} + ${t})/${L}.` }; }
  ];

  /* ---------------- 1.3  BREUKEN KEER EN DELEN ---------------- */
  G.breukkeerdelen_n1 = [
    () => { const t1 = ri(2, 7), t2 = ri(2, 7);
      let n1 = ri(2, 9), n2 = ri(2, 9);
      if (n1 === t1) n1 = t1 + 1;                       // geen breuk die zelf al 1 is
      if (n2 === t2) n2 = t2 + 1;
      const T0 = t1 * t2, N0 = n1 * n2, g = gcd(T0, N0);
      return { t: "velden", q: `Bereken ${t1}/${n1} · ${t2}/${n2} en vereenvoudig. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: String(T0 / g) }, { label: "noemer", a: String(N0 / g) }],
        w: "Teller keer teller, noemer keer noemer.",
        meer: `${t1}/${n1} · ${t2}/${n2} = (${t1}·${t2})/(${n1}·${n2}) = ${T0}/${N0}` +
              (g > 1 ? `, en dat is vereenvoudigd ${T0 / g}/${N0 / g}.` : ".") }; },
    () => { const t = ri(2, 9); let n = ri(2, 9); if (n === t) n = t + 1;
      return { t: "velden", q: `Wat is het omgekeerde van ${t}/${n}? Vul teller en noemer in.`,
        velden: [{ label: "teller", a: String(n) }, { label: "noemer", a: String(t) }],
        w: "Het omgekeerde is de breuk omgedraaid.",
        meer: `Het omgekeerde van ${t}/${n} is ${n}/${t}. Check: ${t}/${n} · ${n}/${t} = 1.` }; }
  ];
  G.breukkeerdelen_n2 = [
    () => { const L = pick(["a", "x", "p"]), M = pick(["b", "y", "q"]);
      let t1 = ri(2, 9), t2 = ri(2, 9);
      const g0 = gcd(t1, t2); t1 /= g0; t2 /= g0;      // noem ze onderling ondeelbaar
      return { t: "velden", q: `Herleid ${t1}/${L} : ${t2}/${M}. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: term(t1, M) }, { label: "noemer", a: term(t2, L) }],
        w: `Draai ${t2}/${M} om naar ${M}/${t2} en doe keer.`,
        meer: `${t1}/${L} : ${t2}/${M} = ${t1}/${L} · ${M}/${t2} = ${term(t1, M)}/${term(t2, L)}.` }; },
    () => { const L = pick(["a", "x", "n"]), M = pick(["b", "y", "m"]), t = ri(2, 9);
      return { t: "velden", q: `Herleid ${t}/${L} : ${M}. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: String(t) }, { label: "noemer", a: `${L}${M}` }],
        w: `${M} = ${M}/1, omgedraaid 1/${M}.`,
        meer: `${t}/${L} : ${M} = ${t}/${L} · 1/${M} = ${t}/${L}${M}. De ${M} komt onder de streep erbij.` }; }
  ];
  G.breukkeerdelen_n3 = [
    () => { const L = pick(["a", "x", "p"]), M = pick(["b", "y", "q"]), d = ri(2, 5);
      let t = ri(2, 6), n = ri(2, 6);
      const g0 = gcd(t, n); t /= g0; n /= g0;          // zo is t/n echt niet verder te delen
      return { t: "velden", q: `Herleid ${d * t}/${L} : ${d * n}/${M} en vereenvoudig. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: term(t, M) }, { label: "noemer", a: term(n, L) }],
        w: "Omdraaien, keer doen, dan vereenvoudigen.",
        meer: `${d * t}/${L} : ${d * n}/${M} = ${d * t}${M}/${d * n}${L}. Deel boven en onder door ${d}: ${term(t, M)}/${term(n, L)}.` }; },
    () => { const L = pick(["x", "a"]), M = pick(["y", "b"]);
      let k = ri(2, 9), m = ri(2, 9);
      const g0 = gcd(k, m); k /= g0; m /= g0;
      if (k === m) m = k + 1;                           // nooit "iets : zichzelf"
      return { t: "velden", q: `Herleid ${term(k, L)}/${M} : ${term(m, L)}/${M} en vereenvoudig. Vul teller en noemer in.`,
        velden: [{ label: "teller", a: String(k) }, { label: "noemer", a: String(m) }],
        w: "Omdraaien; daarna vallen de letters weg.",
        meer: `${term(k, L)}/${M} · ${M}/${term(m, L)} = ${k}${L}${M}/${m}${L}${M}. De ${L}'en en ${M}'s vallen weg: ${k}/${m}.` }; }
  ];

  /* ---------------- 1.4  MACHTEN KEER EN PLUS ---------------- */
  G.machtenproduct_n1 = [
    () => { const L = pick(["a", "x", "p", "q"]), c1 = ri(2, 9), c2 = ri(2, 9), e1 = ri(2, 8), e2 = ri(2, 8);
      return { t: "bouw", q: `Herleid: ${c1}${L}^${e1} · ${c2}${L}^${e2}`, a: `${c1 * c2}${L}^${e1 + e2}`, vars: [L],
        w: `${c1} · ${c2} = ${c1 * c2} en ${e1} + ${e2} = ${e1 + e2}.`,
        meer: `Bij keer met hetzelfde grondtal tel je de exponenten op: ${c1}${L}^${e1} · ${c2}${L}^${e2} = ${c1 * c2}${L}^${e1 + e2}.` }; },
    () => { const L = pick(["a", "x", "b"]), c1 = ri(2, 9), c2 = ri(2, 9), e = ri(2, 7);
      return { t: "bouw", q: `Herleid: ${c1}${L} · ${c2}${L}^${e}`, a: `${c1 * c2}${L}^${e + 1}`, vars: [L],
        w: `Bedenk dat ${L} = ${L}^1.`,
        meer: `${c1}${L} · ${c2}${L}^${e} = ${c1 * c2}${L}^${e + 1}, want ${c1}·${c2} = ${c1 * c2} en 1 + ${e} = ${e + 1}.` }; }
  ];
  G.machtenproduct_n2 = [
    () => { const L = pick(["a", "p", "x", "y"]), c1 = ri(2, 12), c2 = ri(2, 9), e = ri(2, 9);
      return { t: "bouw", q: `Herleid: ${c1}${L}^${e} + ${c2}${L}^${e}`, a: `${c1 + c2}${L}^${e}`, vars: [L],
        w: `Bij plus blijft de exponent ${e} gewoon staan.`,
        meer: `${c1}${L}^${e} + ${c2}${L}^${e} = ${c1 + c2}${L}^${e}. Je telt het aantal, niet de exponenten.` }; },
    () => { const L = pick(["a", "x", "p"]), c1 = ri(2, 9), e = ri(2, 9);
      let c2 = ri(3, 12); if (c2 === c1) c2 = c1 + 1;   // res 0 geeft een flauwe vraag
      const res = c1 - c2;
      return { t: "bouw", q: `Herleid: ${c1}${L}^${e} - ${c2}${L}^${e}`, a: `${res}${L}^${e}`, vars: [L],
        w: `${c1} - ${c2} = ${res}, exponent blijft ${e}.`,
        meer: `${c1}${L}^${e} - ${c2}${L}^${e} = ${res}${L}^${e}. De letters en exponent veranderen niet.` }; }
  ];
  G.machtenproduct_n3 = [
    () => { const L = pick(["x", "a", "p"]), c1 = ri(2, 6), c2 = ri(2, 6), c3 = ri(2, 6), c4 = ri(2, 6);
      const e1 = ri(1, 4), e2 = ri(1, 4);
      const E = e1 + e2;
      const e3 = ri(1, E - 1), e4 = E - e3;   // e3 + e4 = E, allebei minstens 1
      const p1 = c1 * c2, p2 = c3 * c4, tot = p1 + p2;
      return { t: "stap", opgave: `${c1}${L}^${e1} · ${c2}${L}^${e2} + ${c3}${L}^${e3} · ${c4}${L}^${e4}`, vars: [L],
        w: "Eerst de twee producten, dan pas samennemen.",
        meer: `${c1}${L}^${e1} · ${c2}${L}^${e2} = ${p1}${L}^${E} en ${c3}${L}^${e3} · ${c4}${L}^${e4} = ${p2}${L}^${E}. Samen: ${tot}${L}^${E}.`,
        stappen: [
          { prompt: "Reken eerst de twee producten uit", a: `${p1}${L}^${E} + ${p2}${L}^${E}`,
            hints: [`${c1}·${c2} = ${p1} en ${e1}+${e2} = ${E}`, `${c3}·${c4} = ${p2} en ${e3}+${e4} = ${E}`] },
          { prompt: "Neem nu samen", a: `${tot}${L}^${E}`,
            hints: ["Beide termen hebben dezelfde macht, dus gelijksoortig", `${p1} + ${p2} = ${tot}`] }] }; },
    () => { const L = pick(["a", "x"]), M = pick(["b", "y"]), c1 = ri(2, 6), c2 = ri(2, 6);
      const e1 = ri(1, 5), e2 = ri(1, 5), f1 = ri(1, 5), f2 = ri(1, 5);
      return { t: "bouw", q: `Herleid: ${c1}${L}^${e1}${M}^${f1} · ${c2}${L}^${e2}${M}^${f2}`,
        a: `${c1 * c2}${L}^${e1 + e2}${M}^${f1 + f2}`, vars: [L, M],
        w: "Per letter de exponenten optellen.",
        meer: `${c1}·${c2} = ${c1 * c2}, ${L}^${e1}·${L}^${e2} = ${L}^${e1 + e2} en ${M}^${f1}·${M}^${f2} = ${M}^${f1 + f2}.` }; }
  ];

  /* ---------------- 1.5  MACHTEN HERLEIDEN ---------------- */
  G.machtherleiden_n1 = [
    () => { const L = pick(["a", "x", "p", "q"]), e1 = ri(2, 9), e2 = ri(2, 6);
      return { t: "bouw", q: `Herleid: (${L}^${e1})^${e2}`, a: `${L}^${e1 * e2}`, vars: [L],
        w: `${e1} · ${e2} = ${e1 * e2}.`,
        meer: `Bij een macht van een macht vermenigvuldig je de exponenten: (${L}^${e1})^${e2} = ${L}^${e1 * e2}.` }; },
    () => { const L = pick(["a", "x", "b"]), e2 = ri(2, 6), e1 = e2 + ri(1, 9);
      return { t: "bouw", q: `Herleid: ${L}^${e1} / ${L}^${e2}`, a: pw(L, e1 - e2), vars: [L],
        w: `${e1} - ${e2} = ${e1 - e2}.`,
        meer: `Bij delen trek je de exponenten af: ${L}^${e1}/${L}^${e2} = ${L}^${e1 - e2}.` }; }
  ];
  G.machtherleiden_n2 = [
    () => { const L = pick(["x", "a", "y"]), k = ri(2, 5), e = ri(2, 4);
      return { t: "stap", opgave: `(${k}${L})^${e}`, vars: [L],
        w: `Élke factor tot de macht ${e}, dus de ${k} ook.`,
        meer: `(${k}${L})^${e} = ${k}^${e} · ${L}^${e} = ${Math.pow(k, e)}${L}^${e}.`,
        stappen: [
          { prompt: `Wat wordt ${k} tot de macht ${e}?`, a: String(Math.pow(k, e)),
            hints: [`${k}^${e} betekent ${k} ${e} keer keer zichzelf`, `${k}^${e} = ${Math.pow(k, e)}`] },
          { prompt: "Schrijf nu het hele antwoord op", a: `${Math.pow(k, e)}${L}^${e}`,
            hints: [`De ${L} gaat ook tot de macht ${e}`, `${Math.pow(k, e)}${L}^${e}`] }] }; },
    () => { const L = pick(["a", "p", "x"]), M = pick(["b", "q", "y"]), e1 = ri(2, 5), e = ri(2, 4);
      return { t: "bouw", q: `Herleid: (${L}^${e1}${M})^${e}`, a: `${L}^${e1 * e}${M}^${e}`, vars: [L, M],
        w: "Elke factor tot die macht.",
        meer: `(${L}^${e1}${M})^${e} = (${L}^${e1})^${e} · ${M}^${e} = ${L}^${e1 * e}${M}^${e}.` }; },
    () => { const L = pick(["x", "a", "p"]), d = ri(2, 6), c = ri(2, 6), e2 = ri(1, 5), e1 = e2 + ri(1, 8);
      return { t: "bouw", q: `Herleid: ${d * c}${L}^${e1} / ${d}${L}^${e2}`, a: `${c}${pw(L, e1 - e2)}`, vars: [L],
        w: `${d * c} : ${d} = ${c} en ${e1} - ${e2} = ${e1 - e2}.`,
        meer: `Getallen delen en exponenten aftrekken: ${d * c}${L}^${e1}/${d}${L}^${e2} = ${c}${L}^${e1 - e2}.` }; }
  ];
  G.machtherleiden_n3 = [
    () => { const L = pick(["a", "x", "p"]), k = ri(2, 5), e = pick([2, 4]);
      return { t: "bouw", q: `Herleid: (-${k}${L})^${e}`, a: `${Math.pow(k, e)}${L}^${e}`, vars: [L],
        w: `Even macht, dus de min verdwijnt.`,
        meer: `(-${k}${L})^${e} = (-${k})^${e} · ${L}^${e} = ${Math.pow(k, e)}${L}^${e}. Een even macht van een negatief getal is positief.` }; },
    () => { const L = pick(["a", "x", "p"]), k = ri(2, 4), e = pick([3, 5]);
      return { t: "bouw", q: `Herleid: (-${k}${L})^${e}`, a: `-${Math.pow(k, e)}${L}^${e}`, vars: [L],
        w: `Oneven macht, dus de min blijft staan.`,
        meer: `(-${k}${L})^${e} = (-${k})^${e} · ${L}^${e} = -${Math.pow(k, e)}${L}^${e}. Een oneven macht houdt het minteken.` }; },
    () => { const L = pick(["a", "x"]), M = pick(["b", "y"]), d = ri(2, 5), c = ri(2, 5);
      const e2 = ri(1, 4), e1 = e2 + ri(1, 6), f2 = ri(1, 3), f1 = f2 + ri(1, 5);
      return { t: "bouw", q: `Herleid: ${d * c}${L}^${e1}${M}^${f1} / ${d}${L}^${e2}${M}^${f2}`,
        a: `${c}${pw(L, e1 - e2)}${pw(M, f1 - f2)}`, vars: [L, M],
        w: "Per onderdeel: getallen delen, exponenten aftrekken.",
        meer: `${d * c}:${d} = ${c}, ${L}^${e1}/${L}^${e2} = ${L}^${e1 - e2} en ${M}^${f1}/${M}^${f2} = ${M}^${f1 - f2}.` }; }
  ];

  /* ---------------- 1.6  WETENSCHAPPELIJKE NOTATIE ---------------- */
  function mantisse() {
    const d = ri(1, 9), rest = pick(["", String(ri(1, 9)), String(ri(1, 9)) + String(ri(1, 9))]);
    return { tekst: rest ? `${d},${rest}` : `${d}`, cijfers: String(d) + rest };
  }
  G.wetenschappelijk_n1 = [
    () => { const m = mantisse(), e = ri(3, 11);
      const nullen = e - (m.cijfers.length - 1);
      const gewoon = m.cijfers + "0".repeat(Math.max(0, nullen));
      return { t: "velden", q: `Schrijf ${gewoon} in de wetenschappelijke notatie.`,
        velden: [{ label: "getal", a: m.tekst }, { label: "exponent van 10", a: String(e) }],
        w: "Zet de komma achter het eerste cijfer en tel de plaatsen.",
        meer: `${gewoon} = ${m.tekst} · 10^${e}. De komma schuift ${e} plaatsen naar links.` }; },
    () => { const m = mantisse(), e = ri(3, 9);
      const nullen = e - (m.cijfers.length - 1);
      const gewoon = m.cijfers + "0".repeat(Math.max(0, nullen));
      return { t: "velden", q: `Schrijf ${m.tekst} · 10^${e} in de gewone notatie. (Geen spaties.)`,
        velden: [{ label: "gewoon getal", a: gewoon }],
        w: `Komma ${e} plaatsen naar rechts.`,
        meer: `${m.tekst} · 10^${e} = ${gewoon}. Vul aan met nullen.` }; }
  ];
  G.wetenschappelijk_n2 = [
    () => { const m = mantisse(), e = ri(2, 9);
      const nullen = e - 1;
      const gewoon = "0," + "0".repeat(nullen) + m.cijfers;
      return { t: "velden", q: `Schrijf ${gewoon} in de wetenschappelijke notatie.`,
        velden: [{ label: "getal", a: m.tekst }, { label: "exponent van 10", a: String(-e) }],
        w: "Klein getal, dus een negatieve exponent.",
        meer: `${gewoon} = ${m.tekst} · 10^-${e}. De komma schuift ${e} plaatsen naar rechts.` }; },
    () => { const m = mantisse(), e = ri(2, 8);
      const gewoon = "0," + "0".repeat(e - 1) + m.cijfers;
      return { t: "velden", q: `Schrijf ${m.tekst} · 10^-${e} in de gewone notatie. (Gebruik een komma.)`,
        velden: [{ label: "gewoon getal", a: gewoon }],
        w: `Komma ${e} plaatsen naar links.`,
        meer: `${m.tekst} · 10^-${e} = ${gewoon}. Een negatieve exponent maakt het getal kleiner.` }; }
  ];
  G.wetenschappelijk_n3 = [
    () => { const m = mantisse(), e = ri(4, 12), groot = pick([true, false]);
      const exp = groot ? e : -e;
      const nullen = groot ? e - (m.cijfers.length - 1) : e - 1;
      const gewoon = groot ? m.cijfers + "0".repeat(Math.max(0, nullen)) : "0," + "0".repeat(nullen) + m.cijfers;
      const context = groot
        ? pick(["De afstand tot een ster is", "Het aantal cellen is", "De omtrek van de baan is"])
        : pick(["De diameter van een molecuul is", "De dikte van een laagje is", "De massa van een deeltje is"]);
      return { t: "velden", q: `${context} ${gewoon}. Schrijf dat in de wetenschappelijke notatie.`,
        velden: [{ label: "getal", a: m.tekst }, { label: "exponent van 10", a: String(exp) }],
        w: groot ? "Groot getal, dus positieve exponent." : "Klein getal, dus negatieve exponent.",
        meer: `${gewoon} = ${m.tekst} · 10^${exp}.` }; }
  ];

  window.GENERATORS = G;
})();
