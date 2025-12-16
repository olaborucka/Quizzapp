export const questions = [
    // --- INFORMATYKA & TECHNOLOGIA ---
    {
        id: 1,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'easy',
        question: "Co oznacza skrót HTML?",
        image: null,
        answers: ["HyperText Markup Language", "HighText Machine Learning", "Home Tool Markup Language", "Hyperlinks and Text Management"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        id: 2,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'easy',
        question: "Ile bitów mieści się w jednym bajcie?",
        image: null,
        answers: ["4", "8", "16", "32"],
        correctAnswer: "8"
    },
    {
        id: 3,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'medium',
        question: "Który język programowania jest używany przez React?",
        image: null,
        answers: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        id: 4,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'medium',
        question: "Co to jest 'bug' w informatyce?",
        image: null,
        answers: ["Rodzaj wirusa", "Błąd w oprogramowaniu", "Część komputera", "Narzędzie do testowania"],
        correctAnswer: "Błąd w oprogramowaniu"
    },
    {
        id: 5,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'hard',
        question: "Kto jest uważany za ojca informatyki?",
        image: null,
        answers: ["Bill Gates", "Alan Turing", "Steve Jobs", "Ada Lovelace"],
        correctAnswer: "Alan Turing"
    },
    {
        id: 6,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'easy',
        question: "Jaki skrót klawiszowy służy do kopiowania?",
        image: null,
        answers: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Alt + F4"],
        correctAnswer: "Ctrl + C"
    },
    {
        id: 7,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'medium',
        question: "Co oznacza skrót CPU?",
        image: null,
        answers: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Computer Processing User"],
        correctAnswer: "Central Processing Unit"
    },
    {
        id: 8,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'hard',
        question: "W którym roku powstała firma Google?",
        image: null,
        answers: ["1990", "1995", "1998", "2001"],
        correctAnswer: "1998"
    },
    {
        id: 9,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'medium',
        question: "Jaki system operacyjny ma pingwina w logo?",
        image: null,
        answers: ["Windows", "macOS", "Linux", "Android"],
        correctAnswer: "Linux"
    },
    {
        id: 10,
        type: 'text',
        category: 'Informatyka',
        difficulty: 'easy',
        question: "Urządzenie do wprowadzania tekstu do komputera to:",
        image: null,
        answers: ["Monitor", "Drukarka", "Klawiatura", "Głośniki"],
        correctAnswer: "Klawiatura"
    },

    // --- GEOGRAFIA ---
    {
        id: 11,
        type: 'text',
        category: 'Geografia',
        difficulty: 'easy',
        question: "Stolicą Francji jest:",
        image: null,
        answers: ["Berlin", "Madryt", "Rzym", "Paryż"],
        correctAnswer: "Paryż"
    },
    {
        id: 12,
        type: 'text',
        category: 'Geografia',
        difficulty: 'medium',
        question: "Najdłuższa rzeka w Polsce to:",
        image: null,
        answers: ["Odra", "Wisła", "Warta", "Bug"],
        correctAnswer: "Wisła"
    },
    {
        id: 13,
        type: 'text',
        category: 'Geografia',
        difficulty: 'medium',
        question: "Na jakim kontynencie leży Egipt?",
        image: null,
        answers: ["Azja", "Europa", "Afryka", "Ameryka Południowa"],
        correctAnswer: "Afryka"
    },
    {
        id: 14,
        type: 'text',
        category: 'Geografia',
        difficulty: 'hard',
        question: "Największe jezioro na świecie to:",
        image: null,
        answers: ["Jezioro Górne", "Jezioro Wiktorii", "Morze Kaspijskie", "Bajkał"],
        correctAnswer: "Morze Kaspijskie"
    },
    {
        id: 15,
        type: 'text',
        category: 'Geografia',
        difficulty: 'easy',
        question: "Ile jest kontynentów na Ziemi (według najczęstszego podziału)?",
        image: null,
        answers: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        id: 16,
        type: 'text',
        category: 'Geografia',
        difficulty: 'medium',
        question: "Stolicą Japonii jest:",
        image: null,
        answers: ["Pekin", "Seul", "Tokio", "Bangkok"],
        correctAnswer: "Tokio"
    },
    {
        id: 17,
        type: 'text',
        category: 'Geografia',
        difficulty: 'hard',
        question: "Które państwo ma najwięcej ludności na świecie (2024)?",
        image: null,
        answers: ["Chiny", "Indie", "USA", "Indonezja"],
        correctAnswer: "Indie"
    },
    {
        id: 18,
        type: 'text',
        category: 'Geografia',
        difficulty: 'easy',
        question: "Ocean leżący między Ameryką a Europą to:",
        image: null,
        answers: ["Ocean Spokojny", "Ocean Indyjski", "Ocean Arktyczny", "Ocean Atlantycki"],
        correctAnswer: "Ocean Atlantycki"
    },
    {
        id: 19,
        type: 'text',
        category: 'Geografia',
        difficulty: 'medium',
        question: "Góry Skaliste znajdują się w:",
        image: null,
        answers: ["Europie", "Ameryce Północnej", "Azji", "Australii"],
        correctAnswer: "Ameryce Północnej"
    },
    {
        id: 20,
        type: 'text',
        category: 'Geografia',
        difficulty: 'hard',
        question: "Najmniejsze państwo świata to:",
        image: null,
        answers: ["Monako", "San Marino", "Watykan", "Liechtenstein"],
        correctAnswer: "Watykan"
    },

    // --- HISTORIA ---
    {
        id: 21,
        type: 'text',
        category: 'Historia',
        difficulty: 'easy',
        question: "W którym roku wybuchła II wojna światowa?",
        image: null,
        answers: ["1914", "1918", "1939", "1945"],
        correctAnswer: "1939"
    },
    {
        id: 22,
        type: 'text',
        category: 'Historia',
        difficulty: 'medium',
        question: "Kto był pierwszym królem Polski?",
        image: null,
        answers: ["Mieszko I", "Bolesław Chrobry", "Kazimierz Wielki", "Władysław Jagiełło"],
        correctAnswer: "Bolesław Chrobry"
    },
    {
        id: 23,
        type: 'text',
        category: 'Historia',
        difficulty: 'easy',
        question: "Bitwa pod Grunwaldem odbyła się w roku:",
        image: null,
        answers: ["1410", "1525", "1683", "1333"],
        correctAnswer: "1410"
    },
    {
        id: 24,
        type: 'text',
        category: 'Historia',
        difficulty: 'hard',
        question: "W którym roku Polska wstąpiła do Unii Europejskiej?",
        image: null,
        answers: ["1999", "2002", "2004", "2010"],
        correctAnswer: "2004"
    },
    {
        id: 25,
        type: 'text',
        category: 'Historia',
        difficulty: 'medium',
        question: "Kto odkrył Amerykę w 1492 roku?",
        image: null,
        answers: ["Vasco da Gama", "Ferdynand Magellan", "Krzysztof Kolumb", "Marco Polo"],
        correctAnswer: "Krzysztof Kolumb"
    },
    {
        id: 26,
        type: 'text',
        category: 'Historia',
        difficulty: 'medium',
        question: "Bogini mądrości w mitologii greckiej to:",
        image: null,
        answers: ["Afrodyta", "Hera", "Atena", "Demeter"],
        correctAnswer: "Atena"
    },
    {
        id: 27,
        type: 'text',
        category: 'Historia',
        difficulty: 'hard',
        question: "Jak nazywał się statek, który zatonął w 1912 roku?",
        image: null,
        answers: ["Titanic", "Lusitania", "Britannic", "Olympic"],
        correctAnswer: "Titanic"
    },
    {
        id: 28,
        type: 'text',
        category: 'Historia',
        difficulty: 'medium',
        question: "Ostatni król Polski to:",
        image: null,
        answers: ["Stanisław August Poniatowski", "August III Sas", "Jan III Sobieski", "Zygmunt III Waza"],
        correctAnswer: "Stanisław August Poniatowski"
    },
    {
        id: 29,
        type: 'text',
        category: 'Historia',
        difficulty: 'easy',
        question: "Słynny polski astronom, który 'wstrzymał Słońce, ruszył Ziemię':",
        image: null,
        answers: ["Jan Heweliusz", "Mikołaj Kopernik", "Galileusz", "Isaac Newton"],
        correctAnswer: "Mikołaj Kopernik"
    },
    {
        id: 30,
        type: 'text',
        category: 'Historia',
        difficulty: 'hard',
        question: "Rewolucja Francuska wybuchła w roku:",
        image: null,
        answers: ["1776", "1789", "1815", "1848"],
        correctAnswer: "1789"
    },

    // --- NAUKA ---
    {
        id: 31,
        type: 'text',
        category: 'Nauka',
        difficulty: 'easy',
        question: "Jaka planeta jest nazywana Czerwoną Planetą?",
        image: null,
        answers: ["Wenus", "Mars", "Jowisz", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        id: 32,
        type: 'text',
        category: 'Nauka',
        difficulty: 'easy',
        question: "Wzór chemiczny wody to:",
        image: null,
        answers: ["CO2", "H2O", "O2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        id: 33,
        type: 'text',
        category: 'Nauka',
        difficulty: 'medium',
        question: "Który gaz jest niezbędny do oddychania dla ludzi?",
        image: null,
        answers: ["Azot", "Wodór", "Tlen", "Hel"],
        correctAnswer: "Tlen"
    },
    {
        id: 34,
        type: 'text',
        category: 'Nauka',
        difficulty: 'medium',
        question: "Najszybsze zwierzę lądowe to:",
        image: null,
        answers: ["Lew", "Antylopa", "Gepard", "Koń"],
        correctAnswer: "Gepard"
    },
    {
        id: 35,
        type: 'text',
        category: 'Nauka',
        difficulty: 'hard',
        question: "Jaki pierwiastek ma symbol 'Au'?",
        image: null,
        answers: ["Srebro", "Złoto", "Glin", "Argon"],
        correctAnswer: "Złoto"
    },
    {
        id: 36,
        type: 'text',
        category: 'Nauka',
        difficulty: 'easy',
        question: "Co krąży wokół Ziemi?",
        image: null,
        answers: ["Słońce", "Mars", "Księżyc", "Kometa Halleya"],
        correctAnswer: "Księżyc"
    },
    {
        id: 37,
        type: 'text',
        category: 'Nauka',
        difficulty: 'medium',
        question: "Ile nóg ma pająk?",
        image: null,
        answers: ["4", "6", "8", "10"],
        correctAnswer: "8"
    },
    {
        id: 38,
        type: 'text',
        category: 'Nauka',
        difficulty: 'hard',
        question: "Jednostką siły w fizyce jest:",
        image: null,
        answers: ["Wat", "Dżul", "Niuton", "Wolt"],
        correctAnswer: "Niuton"
    },
    {
        id: 39,
        type: 'text',
        category: 'Nauka',
        difficulty: 'medium',
        question: "Proces, w którym rośliny wytwarzają pokarm ze słońca, to:",
        image: null,
        answers: ["Oddychanie", "Fotosynteza", "Fermentacja", "Transpiracja"],
        correctAnswer: "Fotosynteza"
    },
    {
        id: 40,
        type: 'text',
        category: 'Nauka',
        difficulty: 'easy',
        question: "Największy ssak na świecie to:",
        image: null,
        answers: ["Słoń afrykański", "Płetwal błękitny", "Żyrafa", "Orka"],
        correctAnswer: "Płetwal błękitny"
    },

    // --- KULTURA I ROZRYWKA ---
    {
        id: 41,
        type: 'text',
        category: 'Kultura',
        difficulty: 'easy',
        question: "Kto napisał 'Pana Tadeusza'?",
        image: null,
        answers: ["Juliusz Słowacki", "Adam Mickiewicz", "Henryk Sienkiewicz", "Czesław Miłosz"],
        correctAnswer: "Adam Mickiewicz"
    },
    {
        id: 42,
        type: 'text',
        category: 'Kultura',
        difficulty: 'medium',
        question: "Jak nazywa się agent 007?",
        image: null,
        answers: ["Ethan Hunt", "Jason Bourne", "James Bond", "Jack Bauer"],
        correctAnswer: "James Bond"
    },
    {
        id: 43,
        type: 'text',
        category: 'Kultura',
        difficulty: 'easy',
        question: "W którym mieście odbywa się Festiwal Piosenki Polskiej?",
        image: null,
        answers: ["W Sopocie", "W Opolu", "W Krakowie", "W Warszawie"],
        correctAnswer: "W Opolu"
    },
    {
        id: 44,
        type: 'text',
        category: 'Kultura',
        difficulty: 'medium',
        question: "Kto namalował 'Mona Lisę'?",
        image: null,
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        id: 45,
        type: 'text',
        category: 'Kultura',
        difficulty: 'hard',
        question: "Reżyserem filmu 'Lista Schindlera' jest:",
        image: null,
        answers: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese", "Roman Polański"],
        correctAnswer: "Steven Spielberg"
    },
    {
        id: 46,
        type: 'text',
        category: 'Kultura',
        difficulty: 'medium',
        question: "Główny bohater serii gier 'Wiedźmin' to:",
        image: null,
        answers: ["Vesemir", "Jaskier", "Yennefer", "Geralt"],
        correctAnswer: "Geralt"
    },
    {
        id: 47,
        type: 'text',
        category: 'Kultura',
        difficulty: 'easy',
        question: "Harry Potter uczęszczał do szkoły magii:",
        image: null,
        answers: ["Durmstrang", "Hogwart", "Beauxbatons", "Ilvermorny"],
        correctAnswer: "Hogwart"
    },
    {
        id: 48,
        type: 'text',
        category: 'Kultura',
        difficulty: 'hard',
        question: "Kto jest autorem obrazu 'Krzyk'?",
        image: null,
        answers: ["Edvard Munch", "Salvador Dali", "Gustav Klimt", "Andy Warhol"],
        correctAnswer: "Edvard Munch"
    },
    {
        id: 49,
        type: 'text',
        category: 'Kultura',
        difficulty: 'medium',
        question: "Nagroda filmowa przyznawana w USA to:",
        image: null,
        answers: ["Złota Palma", "Niedźwiedź", "Oscar", "Lew"],
        correctAnswer: "Oscar"
    },
    {
        id: 50,
        type: 'text',
        category: 'Kultura',
        difficulty: 'easy',
        question: "Polski hymn narodowy to:",
        image: null,
        answers: ["Rota", "Mazurek Dąbrowskiego", "Bogurodzica", "Pierwsza Brygada"],
        correctAnswer: "Mazurek Dąbrowskiego"
    },

    // --- Pytania obrazkowe ---

    {
        id: 51,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'medium',
        question: "Co to za zwierzę?",
        image: "/images/kot.jpg",
        answers: ["Pies", "Kot", "Chomik", "Rybka"],
        correctAnswer: "Kot"
    },
    // --- GEOGRAFIA ---
    {
        id: 52,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'easy',
        question: "Jakiego kraju to flaga?",
        image: "/images/flaga_polska.jpg",
        answers: ["Polska", "Indonezja", "Monako", "Singapur"],
        correctAnswer: "Polska"
    },
    {
        id: 53,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'easy',
        question: "Co to za budowla?",
        image: "/images/wieza_eiffla.jpg",
        answers: ["Wieża Eiffla", "Statua Wolności", "Big Ben", "Krzywa Wieża"],
        correctAnswer: "Wieża Eiffla"
    },
    {
        id: 54,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'medium',
        question: "Gdzie znajduje się ten zabytek (Koloseum)?",
        image: "/images/koloseum.jpg",
        answers: ["W Atenach", "W Rzymie", "W Paryżu", "W Madrycie"],
        correctAnswer: "W Rzymie"
    },
    {
        id: 55,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'easy',
        question: "Jakiego kraju to flaga?",
        image: "/images/flaga_usa.jpg",
        answers: ["Wielka Brytania", "USA", "Australia", "Kanada"],
        correctAnswer: "USA"
    },
    {
        id: 56,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'medium',
        question: "Co to za słynny most?",
        image: "/images/tower_bridge.jpg",
        answers: ["Golden Gate", "Tower Bridge", "Most Brookliński", "Most Karola"],
        correctAnswer: "Tower Bridge"
    },
    {
        id: 57,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'hard',
        question: "Jak nazywa się ten budynek?",
        image: "/images/taj_mahal.jpg",
        answers: ["Hagia Sophia", "Taj Mahal", "Błękitny Meczet", "Alhambra"],
        correctAnswer: "Taj Mahal"
    },
    {
        id: 58,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'medium',
        question: "Z jakiego kraju pochodzi ta flaga?",
        image: "/images/flaga_niemiec.jpg",
        answers: ["Belgia", "Niemcy", "Holandia", "Austria"],
        correctAnswer: "Niemcy"
    },
    {
        id: 59,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'easy',
        question: "Co to za posąg?",
        image: "/images/statua_wolnosci.jpg",
        answers: ["Wenus z Milo", "Statua Wolności", "Chrystus Odkupiciel", "Nike z Samotraki"],
        correctAnswer: "Statua Wolności"
    },
    {
        id: 60,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'hard',
        question: "Co to za góra?",
        image: "/images/mount_everest.jpg",
        answers: ["K2", "Mont Blanc", "Kilimandżaro", "Mount Everest"],
        correctAnswer: "Mount Everest"
    },
    {
        id: 61,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'medium',
        question: "Z jakiego kraju jest ta flaga?",
        image: "/images/flaga_japonii.jpg",
        answers: ["Chiny", "Japonia", "Korea Południowa", "Wietnam"],
        correctAnswer: "Japonia"
    },

    // --- BIOLOGIA ---
    {
        id: 62,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'easy',
        question: "Co to za zwierzę?",
        image: "/images/pies.jpg",
        answers: ["Wilk", "Lis", "Pies", "Szakal"],
        correctAnswer: "Pies"
    },
    {
        id: 63,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'medium',
        question: "Jak nazywa się ten ptak?",
        image: "/images/pingwin.jpg",
        answers: ["Struś", "Pingwin", "Maskonur", "Albatros"],
        correctAnswer: "Pingwin"
    },
    {
        id: 64,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'medium',
        question: "Co to za owoc?",
        image: "/images/ananas.jpg",
        answers: ["Kokos", "Ananas", "Mango", "Papaja"],
        correctAnswer: "Ananas"
    },
    {
        id: 65,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'easy',
        question: "Król zwierząt to:",
        image: "/images/lew.jpg",
        answers: ["Tygrys", "Lew", "Jaguar", "Gepard"],
        correctAnswer: "Lew"
    },
    {
        id: 66,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'hard',
        question: "Jaki to gatunek drzewa (liść)?",
        image: "/images/lisc_debu.jpg",
        answers: ["Klon", "Dąb", "Brzoza", "Kasztanowiec"],
        correctAnswer: "Dąb"
    },
    {
        id: 67,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'medium',
        question: "Co to za zwierzę morskie?",
        image: "/images/delfin.jpg",
        answers: ["Rekin", "Delfin", "Orka", "Wieloryb"],
        correctAnswer: "Delfin"
    },
    {
        id: 68,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'easy',
        question: "Co to za kwiat?",
        image: "/images/roza.jpg",
        answers: ["Tulipan", "Róża", "Goździk", "Stokrotka"],
        correctAnswer: "Róża"
    },
    {
        id: 69,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'hard',
        question: "Co to za owad?",
        image: "/images/biedronka.jpg",
        answers: ["Stonka", "Biedronka", "Kowal", "Chrząszcz"],
        correctAnswer: "Biedronka"
    },
    {
        id: 70,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'medium',
        question: "Jakie to warzywo?",
        image: "/images/brokul.jpg",
        answers: ["Kalafior", "Brokuł", "Szpinak", "Sałata"],
        correctAnswer: "Brokuł"
    },

    // --- KULTURA I SZTUKA ---
    {
        id: 71,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'medium',
        question: "Jak nazywa się ten obraz?",
        image: "/images/mona_lisa.jpg",
        answers: ["Dama z gronostajem", "Mona Lisa", "Dziewczyna z perłą", "Wenus"],
        correctAnswer: "Mona Lisa"
    },
    {
        id: 72,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'hard',
        question: "Kto namalował ten obraz (Gwiaździsta noc)?",
        image: "/images/gwiazdzista_noc.jpg",
        answers: ["Picasso", "Van Gogh", "Monet", "Dali"],
        correctAnswer: "Van Gogh"
    },
    {
        id: 73,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'easy',
        question: "Z jakiego filmu pochodzi ta postać?",
        image: "/images/darth_vader.jpg",
        answers: ["Star Trek", "Gwiezdne Wojny", "Avatar", "Strażnicy Galaktyki"],
        correctAnswer: "Gwiezdne Wojny"
    },
    {
        id: 74,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'medium',
        question: "Co to za instrument?",
        image: "/images/skrzypce.jpg",
        answers: ["Gitara", "Wiolonczela", "Skrzypce", "Kontrabas"],
        correctAnswer: "Skrzypce"
    },
    {
        id: 75,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'easy',
        question: "Jak nazywa się ten superbohater?",
        image: "/images/spiderman.jpg",
        answers: ["Superman", "Batman", "Spider-Man", "Iron Man"],
        correctAnswer: "Spider-Man"
    },
    {
        id: 76,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'medium',
        question: "Z jakiego kraju pochodzą te lalki (Matrioszki)?",
        image: "/images/matrioszka.jpg",
        answers: ["Ukraina", "Rosja", "Czechy", "Polska"],
        correctAnswer: "Rosja"
    },
    {
        id: 77,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'hard',
        question: "Jak nazywa się ten słynny fizyk?",
        image: "/images/einstein.jpg",
        answers: ["Newton", "Tesla", "Einstein", "Bohr"],
        correctAnswer: "Einstein"
    },
    {
        id: 78,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'medium',
        question: "Z jakiej bajki pochodzi ten zamek?",
        image: "/images/zamek_disney.jpg",
        answers: ["Shrek", "Disney (Intro)", "Harry Potter", "Gra o Tron"],
        correctAnswer: "Disney (Intro)"
    },

    // --- TECHNOLOGIA I MOTORYZACJA ---
    {
        id: 79,
        type: 'visual',
        category: 'Technologia i Motoryzacja',
        difficulty: 'easy',
        question: "Jakiej firmy to logo?",
        image: "/images/logo_apple.jpg",
        answers: ["Microsoft", "Samsung", "Apple", "Xiaomi"],
        correctAnswer: "Apple"
    },
    {
        id: 80,
        type: 'visual',
        category: 'Technologia i Motoryzacja',
        difficulty: 'medium',
        question: "Co to za część komputera?",
        image: "/images/myszka.jpg",
        answers: ["Dysk", "Myszka", "Procesor", "Karta graficzna"],
        correctAnswer: "Myszka"
    },
    {
        id: 81,
        type: 'visual',
        category: 'Technologia i Motoryzacja',
        difficulty: 'medium',
        question: "Jakiej marki jest to auto (logo z koniem)?",
        image: "/images/ferrari.jpg",
        answers: ["Lamborghini", "Ferrari", "Porsche", "Mustang"],
        correctAnswer: "Ferrari"
    },
    {
        id: 82,
        type: 'visual',
        category: 'Technologia i Motoryzacja',
        difficulty: 'easy',
        question: "Co to za ikona?",
        image: "/images/ikona_wifi.jpg",
        answers: ["Bluetooth", "Wi-Fi", "NFC", "GPS"],
        correctAnswer: "Wi-Fi"
    },
    {
        id: 83,
        type: 'visual',
        category: 'Technologia i Motoryzacja',
        difficulty: 'hard',
        question: "Jak nazywa się ten robot (z Gwiezdnych Wojen)?",
        image: "/images/r2d2.jpg",
        answers: ["C-3PO", "R2-D2", "BB-8", "Wall-E"],
        correctAnswer: "R2-D2"
    },
    {
        id: 84,
        type: 'visual',
        category: 'Technologia i Motoryzacja',
        difficulty: 'easy',
        question: "Co to za znak drogowy?",
        image: "/images/znak_stop.jpg",
        answers: ["Ustąp pierwszeństwa", "Stop", "Zakaz wjazdu", "Uwaga"],
        correctAnswer: "Stop"
    },

    // --- JEDZENIE I PRZEDMIOTY ---
    {
        id: 85,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'easy',
        question: "Co to za potrawa?",
        image: "/images/pizza.jpg",
        answers: ["Lasagne", "Pizza", "Spaghetti", "Burger"],
        correctAnswer: "Pizza"
    },
    {
        id: 86,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'medium',
        question: "Z czego robi się Sushi?",
        image: "/images/sushi.jpg",
        answers: ["Z ryżu i ryby", "Z makaronu", "Z ziemniaków", "Z chleba"],
        correctAnswer: "Z ryżu i ryby"
    },
    {
        id: 87,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'easy',
        question: "Do jakiego sportu służy ta piłka?",
        image: "/images/pilka_nozna.jpg",
        answers: ["Koszykówka", "Siatkówka", "Piłka nożna", "Tenis"],
        correctAnswer: "Piłka nożna"
    },
    {
        id: 88,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'medium',
        question: "Jak nazywa się ta figura szachowa?",
        image: "/images/skoczek.jpg",
        answers: ["Wieża", "Skoczek (Koń)", "Goniec", "Pionek"],
        correctAnswer: "Skoczek (Koń)"
    },
    {
        id: 89,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'easy',
        question: "Co to za napój?",
        image: "/images/kawa.jpg",
        answers: ["Herbata", "Kawa", "Sok", "Woda"],
        correctAnswer: "Kawa"
    },
    {
        id: 90,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'medium',
        question: "Do czego służy ten przedmiot?",
        image: "/images/kompas.jpg",
        answers: ["Do mierzenia czasu", "Do wyznaczania kierunku", "Do ważenia", "Do pisania"],
        correctAnswer: "Do wyznaczania kierunku"
    },
    {
        id: 91,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'hard',
        question: "Jaki to sprzęt sportowy?",
        image: "/images/rakieta_tenisowa.jpg",
        answers: ["Kij golfowy", "Rakieta tenisowa", "Paletka", "Kij bejsbolowy"],
        correctAnswer: "Rakieta tenisowa"
    },
    {
        id: 92,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'easy',
        question: "Co to jest?",
        image: "/images/okulary.jpg",
        answers: ["Lupa", "Okulary", "Lornetka", "Mikroskop"],
        correctAnswer: "Okulary"
    },
    {
        id: 93,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'hard',
        question: "Jak nazywa się to francuskie pieczywo?",
        image: "/images/croissant.jpg",
        answers: ["Bagietka", "Croissant", "Chałka", "Precel"],
        correctAnswer: "Croissant"
    },
    {
        id: 94,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'medium',
        question: "Co to za narzędzie?",
        image: "/images/mlotek.jpg",
        answers: ["Śrubokręt", "Klucz", "Młotek", "Piła"],
        correctAnswer: "Młotek"
    },
    {
        id: 95,
        type: 'visual',
        category: 'Biologia',
        difficulty: 'medium',
        question: "Co to za owad?",
        image: "/images/motyl.jpg",
        answers: ["Ćma", "Mucha", "Motyl", "Pszczoła"],
        correctAnswer: "Motyl"
    },
    {
        id: 96,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'easy',
        question: "Co to za ciało niebieskie?",
        image: "/images/ksiezyc.jpg",
        answers: ["Słońce", "Mars", "Księżyc", "Ziemia"],
        correctAnswer: "Księżyc"
    },
    {
        id: 97,
        type: 'visual',
        category: 'Technologia i Motoryzacja',
        difficulty: 'easy',
        question: "Co to za urządzenie?",
        image: "/images/laptop.jpg",
        answers: ["Tablet", "Laptop", "Telefon", "Telewizor"],
        correctAnswer: "Laptop"
    },
    {
        id: 98,
        type: 'visual',
        category: 'Kultura i Sztuka',
        difficulty: 'medium',
        question: "Jakie to farby?",
        image: "/images/paleta_farb.jpg",
        answers: ["Ołówki", "Farby", "Kredki", "Węgle"],
        correctAnswer: "Farby"
    },
    {
        id: 99,
        type: 'visual',
        category: 'Jedzenie i Przedmioty',
        difficulty: 'medium',
        question: "Co to za dyscyplina?",
        image: "/images/plywanie.jpg",
        answers: ["Bieganie", "Pływanie", "Skok w dal", "Kolarstwo"],
        correctAnswer: "Pływanie"
    },
    {
        id: 100,
        type: 'visual',
        category: 'Geografia',
        difficulty: 'hard',
        question: "Jaki to kontynent (na mapie)?",
        image: "/images/mapa_afryki.jpg",
        answers: ["Europa", "Azja", "Afryka", "Ameryka"],
        correctAnswer: "Afryka"
    }
    

];

