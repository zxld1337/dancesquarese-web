export type CourseSection = {
  heading?: string;
  body: string;
};

export type Course = {
  slug: string;
  title: string;
  subtitle?: string;
  image: string;
  summary: string;
  emailTag: string;
  sections: CourseSection[];
};

export const courses: Course[] = [
  {
    slug: "latin-lady",
    title: "Latin Lady",
    subtitle: "Kezdő tánc tanfolyam hölgyeknek",
    image: "/images/tanfolyamok/latin_lady.jpg",
    summary: "Kezdő tánc tanfolyam hölgyeknek — bachata, cha-cha-cha, rumba és samba.",
    emailTag: "Latin Lady Kezdő",
    sections: [
      {
        heading: "Próba óra",
        body: "Szeptember 9. (Hétfő) 19:00–20:00. Helyszín: Dance Square Studio, 3000 Hatvan, Erzsébet tér 4/1 (volt Mayo Chix). Az első bemutató óra ára 1.500 Ft, de ha kifizeted a tanfolyamot, ez nem kerül felszámolásra.",
      },
      {
        heading: "Mire számíthatsz?",
        body: "A táncoktatást hétfőnként 19:00-tól 20:00-ig tartjuk, 12 alkalmon keresztül, hogy a nyárig igazán formába hozhasd magad! Táncok amiket tanulni fogunk: bachata, cha-cha-cha, rumba és egy kis samba. Mindig hangsúlyt fektetünk az óra eleji bemelegítésre és a nyújtásra is!",
      },
      {
        body: "A 12 alkalmas tanfolyam ára 28.000 forint. Részletfizetés természetesen lehetséges, ebben az esetben 3 részletben tudod kifizetni (minden részlet 10.000 forint!). Alkalmi díj 3.000 Ft.",
      },
      {
        body: "Minden alkalom anyagát videóra lehet rögzíteni, így otthon is gyakorolhatsz, vagy pótolhatod a hiányzásod.",
      },
      {
        heading: "Hol tudod a tanultakat alkalmazni?",
        body: "Akár az egyesületünk által indított többi tanfolyamon, haladóbb szintű edzéseken! Fellépésekre és versenyekre is készítünk fel, ahol megmutathatod eddig megszerzett tudásodat, és éremmel — oklevéllel térhetsz haza!",
      },
      {
        heading: "Mi vár rád, ha a csapattal maradsz?",
        body: "Az említett tanfolyamok, fellépések/bemutatók, versenyek, tánctáborok, csapatépítők... Innen a további szintek a Te szorgalmadon és kedveden múlnak.",
      },
      {
        heading: "Mit kell tenned, ha érdekel a tánctanfolyam?",
        body: "Jelentkezni az alábbi form kitöltésével tudsz. A kitöltés nem kötelez téged a részvételre, bármikor visszajelezhetsz, ha mégsem tudsz jönni. Amennyiben nem mondod le a részvételed és nem jelensz meg, 6 hónapig nem tudunk más tanfolyamunkon fogadni.",
      },
      {
        body: "Csak előzetes regisztráció esetén tudjuk garantálni a helyed a csoportban. A megadott email címet csak a tanfolyamhoz kapcsolódó információ nyújtáshoz használjuk.",
      },
    ],
  },
  {
    slug: "chair-dance",
    title: "Chair Dance Workshop",
    subtitle: "Valentin napi különleges workshop",
    image: "/images/tanfolyamok/chair-dance.png",
    summary: "Szexi, nőies koreográfia szék segítségével — egyszeri workshop alkalom.",
    emailTag: "Chair Dance Workshop",
    sections: [
      {
        heading: "Időpont",
        body: "Február 13. (péntek) 19:00–20:30 vagy Február 14. (szombat) 09:00–10:30.",
      },
      {
        heading: "Mire számíthatsz?",
        body: "Egy igazán szexi és nőies koreográfiát tanulunk meg Beyoncé — Crazy in Love című zenéjére, egy szék segítségével. A workshop 1,5 órás. Az elején egy kis bemelegítéssel kezdünk, majd megtanuljuk a koreográfiát, és a végén nyújtással zárunk.",
      },
      {
        heading: "A workshop ára",
        body: "6.000 forint, ami előzetesen fizetendő. Átutalással és készpénzben is tudsz nálunk fizetni, amivel kapcsolatban a regisztráció után e-mailt küldünk.",
      },
      {
        body: "A koreográfiát videón is megkapod, hogy még jobban elsajátíthasd és mélyítsd a tudásod!",
      },
      {
        heading: "Mi vár Önre, ha a csapattal marad?",
        body: "Tanfolyamok, fellépések/bemutatók, versenyek, tánctáborok, csapatépítők... Innen a további szintek a Te szorgalmadon és kedveden múlnak.",
      },
      {
        heading: "Mit kell tenned, ha érdekel a workshop?",
        body: "Jelentkezni az alábbi form kitöltésével tudsz. A regisztráció után felvesszük veled a kapcsolatot, és a fizetéssel egyidejűleg a konkrét turnusigényt (02.13. vagy 02.14.) is megbeszéljük.",
      },
      {
        body: "A kitöltés nem kötelez téged a részvételre, bármikor visszajelezhetsz, ha mégsem tudsz jönni. Amennyiben nem mondod le a részvételed és nem jelensz meg, 6 hónapig nem tudunk más tanfolyamunkon fogadni.",
      },
      {
        body: "Csak előzetes regisztráció és fizetés esetén tudjuk garantálni a helyed a csoportban. A megadott email címet csak a workshophoz kapcsolódó információ nyújtáshoz használjuk.",
      },
    ],
  },
  {
    slug: "ovis-csoport",
    title: "Előkészítő / Óvodás csoport",
    image: "/images/tanfolyamok/ovis.jpg",
    summary: "Utánpótlás-nevelés óvodás korosztálynak — koordináció- és kondíciófejlesztés.",
    emailTag: "Ovis csoport",
    sections: [
      {
        heading: "Próba óra",
        body: "Szeptember 9. (Hétfő) 15:00–15:50. Helyszín: Dance Square Studio, 3000 Hatvan, Erzsébet tér 4/1 (volt Mayo Chix). Az első bemutató óra ára 1.500 Ft, de ha kifizeti az egyesületi tagdíjat, ez nem kerül felszámolásra.",
      },
      {
        heading: "Mire számíthat?",
        body: "A táncoktatást hétfőnként 15:00-tól 15:50-ig tartjuk, 10 hónapon keresztül. Mindig hangsúlyt fektetünk az óra eleji bemelegítésre és a nyújtásra is! Az előkészítő csoport célja az utánpótlás, a felzárkóztatás és az egyesületi társastánc/versenytánc órákba való bekapcsolódás megkönnyítése a következő tanévtől. Az óvodás korosztály lefoglalása, fizikai aktivitásra serkentése. Koordináció- és kondíciófejlesztés.",
      },
      {
        body: "A foglalkozások díja egyesületi tagdíjként fizetendő, melynek ára 8.000 forint havonta (átlagosan 4 db óra).",
      },
      {
        heading: "Hol tudja gyermeke a tanultakat alkalmazni?",
        body: "Akár az egyesületünk által indított többi táncórán, haladóbb szintű edzéseken! Fellépésekre és versenyekre is készítünk fel, ahol megmutathatja eddig megszerzett tudását, és éremmel — oklevéllel térhet haza!",
      },
      {
        heading: "Mi vár a gyermekére, ha a csapattal marad?",
        body: "Az említett tánccsoportok, fellépések/bemutatók, versenyek, tánctáborok, csapatépítők... Innen a további szintek a gyermeke szorgalmán és kedvén múlnak.",
      },
      {
        heading: "Mit kell tennie, ha érdekli a tánctanfolyam?",
        body: "Jelentkezni az alábbi form kitöltésével tud. A kitöltés nem kötelez a részvételre, bármikor visszajelezhet, ha mégsem tudna jönni. Amennyiben nem mondja le a részvételt és nem jelenik meg, 6 hónapig nem tudjuk táncóráinkon fogadni.",
      },
      {
        body: "Csak előzetes regisztráció esetén tudjuk garantálni gyermeke helyét a csoportban. A megadott email címet csak a tanfolyamhoz kapcsolódó információ nyújtásához használjuk.",
      },
    ],
  },
  {
    slug: "felnott-tanctanfolyam",
    title: "Felnőtt tánctanfolyam",
    image: "/images/tanfolyamok/felnot.jpg",
    summary: "Latin-amerikai és Standard táncok felnőtteknek, heti egy alkalommal.",
    emailTag: "Felnőtt tánctanfolyam",
    sections: [
      {
        heading: "Próba óra",
        body: "Szeptember 5. (Csütörtök) 18:00–18:50. Helyszín: Dance Square Studio, 3000 Hatvan, Erzsébet tér 4/1 (volt Mayo Chix). Az első bemutató óra ára 1.500 Ft, de ha kifizeti a tanfolyamot, ez nem kerül felszámolásra.",
      },
      {
        heading: "Mire számíthat?",
        body: "A táncoktatást csütörtökönként 18:00-tól 18:50-ig tartjuk, 12 alkalmon keresztül. Táncok, amiket tanulni fogunk: Latin-amerikai (samba, cha-cha-cha, rumba) és Standard (angol- és bécsi keringő, tangó) táncok.",
      },
      {
        body: "A 12 alkalmas tanfolyam ára 28.000 forint. Részletfizetés természetesen lehetséges, ebben az esetben 3 részletben tudja kifizetni (minden részlet 10.000 forint!). Alkalmi díj 3.000 Ft.",
      },
      {
        body: "Minden alkalom anyagát videóra lehet rögzíteni, így otthon is gyakorolhat, vagy pótolhatja a hiányzását.",
      },
      {
        heading: "Hol tudja a tanultakat alkalmazni?",
        body: "Akár az egyesületünk által indított többi tanfolyamon, haladóbb szintű edzéseken! Fellépésekre és versenyekre is készítünk fel, ahol megmutathatja eddig megszerzett tudását, és éremmel — oklevéllel térhet haza!",
      },
      {
        heading: "Mi vár Önre, ha a csapattal marad?",
        body: "Az említett tanfolyamok, fellépések/bemutatók, versenyek, tánctáborok, csapatépítők... Innen a további szintek az Ön szorgalmán és kedvén múlnak.",
      },
      {
        heading: "Mit kell tennie, ha érdekli a tánctanfolyam?",
        body: "Jelentkezni az alábbi form kitöltésével tud. A kitöltés nem kötelez a részvételre, bármikor visszajelezhet, ha mégsem tudna jönni. Amennyiben nem mondja le a részvételt és nem jelenik meg, 6 hónapig nem tudjuk más tanfolyamunkon fogadni.",
      },
      {
        body: "Csak előzetes regisztráció esetén tudjuk garantálni a helyét a csoportban. A megadott email címet csak a tanfolyamhoz kapcsolódó információ nyújtásához használjuk.",
      },
    ],
  },
  {
    slug: "gyermek-kezdo",
    title: "Gyermek kezdő tánccsoport",
    image: "/images/tanfolyamok/gyerek_kezdo.jpg",
    summary: "Latin-amerikai és Standard táncok gyermekeknek, heti rendszerességgel.",
    emailTag: "Gyermek kezdő tánccsoport",
    sections: [
      {
        heading: "Próba óra",
        body: "Szeptember 9. (Hétfő) 17:00–17:50. Helyszín: Dance Square Studio, 3000 Hatvan, Erzsébet tér 4/1 (volt Mayo Chix). Az első bemutató óra ára 1.500 Ft, de ha kifizeti az egyesületi tagdíjat, ez nem kerül felszámolásra.",
      },
      {
        heading: "Mire számíthat?",
        body: "A táncoktatást hétfőnként 17:00-tól 17:50-ig tartjuk, 10 hónapon keresztül. Mindig hangsúlyt fektetünk az óra eleji bemelegítésre és a nyújtásra is! A hónapok során érinteni kívánt táncstílusok: Latin-amerikai (Cha-cha-cha, Jive, Samba, Rumba és Paso doble) és Standard (Angol- és bécsi keringő, Tangó, Quickstep).",
      },
      {
        body: "A foglalkozások díja egyesületi tagdíjként fizetendő, melynek ára 8.000 forint havonta (átlagosan 4 db óra).",
      },
      {
        heading: "Hol tudja gyermeke a tanultakat alkalmazni?",
        body: "Akár az egyesületünk által indított többi táncórán, haladóbb szintű edzéseken! Fellépésekre és versenyekre is készítünk fel, ahol megmutathatja eddig megszerzett tudását, és éremmel — oklevéllel térhet haza!",
      },
      {
        heading: "Mi vár a gyermekére, ha a csapattal marad?",
        body: "Néhány hónap múlva akár csatlakozhat Gyermek haladó csoportjainkhoz, melyek legalább heti 2 órával több edzésidőt biztosítanak. Az említett tánccsoportok, fellépések/bemutatók, versenyek, tánctáborok, csapatépítők... Innen a további szintek a gyermeke szorgalmán és kedvén múlnak.",
      },
      {
        heading: "Mit kell tennie, ha érdekli a tánctanfolyam?",
        body: "Jelentkezni az alábbi form kitöltésével tud. A kitöltés nem kötelez a részvételre, bármikor visszajelezhet, ha mégsem tudna jönni. Amennyiben nem mondja le a részvételt és nem jelenik meg, 6 hónapig nem tudjuk táncóráinkon fogadni.",
      },
      {
        body: "Csak előzetes regisztráció esetén tudjuk garantálni gyermeke helyét a csoportban. A megadott email címet csak a tanfolyamhoz kapcsolódó információ nyújtásához használjuk.",
      },
    ],
  },
  {
    slug: "senior-tancfolyam",
    title: "Senior táncfolyam",
    subtitle: "Kezdő tánc tanfolyam 40+ korosztálynak",
    image: "/images/tanfolyamok/senior.png",
    summary: "Kezdő tánc tanfolyam 40+ korosztálynak — keringő, tangó, rumba, samba.",
    emailTag: "Senior táncfolyam",
    sections: [
      {
        heading: "Próba óra",
        body: "Augusztus 6. (Kedd) 18:00–19:00. Helyszín: Dance Square Studio, 3000 Hatvan, Erzsébet tér 4/1 (volt Mayo Chix). Az első bemutató óra ára 1.500 Ft, de ha kifizeti a tanfolyamot, ez nem kerül felszámolásra.",
      },
      {
        heading: "Mire számíthatsz?",
        body: "A táncoktatást keddenként 18:00-tól 19:00-ig tartjuk, 12 alkalmon keresztül. Táncok amiket tanulni fogunk: angol- és bécsi keringő, tangó, rumba és samba. Mindig hangsúlyt fektetünk az óra eleji bemelegítésre és a nyújtásra is!",
      },
      {
        body: "A 12 alkalmas tanfolyam ára 22.000 forint. Részletfizetés természetesen lehetséges, ebben az esetben 3 részletben tudja kifizetni (minden részlet 8.000 forint!). Alkalmi díj 2.500 Ft.",
      },
      {
        body: "Minden alkalom anyagát videóra lehet rögzíteni, így otthon is gyakorolhat, vagy pótolhatja a hiányzását.",
      },
      {
        heading: "Hol tudja a tanultakat alkalmazni?",
        body: "Akár az egyesületünk által indított többi tanfolyamon, haladóbb szintű edzéseken! Fellépésekre és versenyekre is készítünk fel, ahol megmutathatja eddig megszerzett tudását, és éremmel — oklevéllel térhet haza!",
      },
      {
        heading: "Mi vár Önre, ha a csapattal marad?",
        body: "Az említett tanfolyamok, fellépések/bemutatók, versenyek, tánctáborok, csapatépítők... Innen a további szintek az Ön szorgalmán és kedvén múlnak.",
      },
      {
        heading: "Mit kell tennie, ha érdekli a tánctanfolyam?",
        body: "Jelentkezni az alábbi form kitöltésével tud. A kitöltés nem kötelez a részvételre, bármikor visszajelezhet, ha mégsem tudna jönni. Amennyiben nem mondja le a részvételt és nem jelenik meg, 6 hónapig nem tudjuk más tanfolyamunkon fogadni.",
      },
      {
        body: "Csak előzetes regisztráció esetén tudjuk garantálni a helyét a csoportban. A megadott email címet csak a tanfolyamhoz kapcsolódó információ nyújtáshoz használjuk.",
      },
    ],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
