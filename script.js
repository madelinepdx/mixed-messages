// Array of Spanish phrases
const spanishPhrases = [
    {
      phrase: "Tener mala leche",
      literalTranslation: "To have bad milk",
      translation: "To be in a bad mood/grumpy/have a temper",
      asciiArt: `
   _________
  | _______ |
 / |         |
/___|_________|
|   | \       |
|   |  \      |
|   |   \     |
|   | M  \    |
|   |     \   |
|   |\  I  \   |
|   | \     \  |
|   |  \  L   |
|   |   \     |
|   |    \  K |
|   |     \   |
|   |      \  |
|___|_______\_|
`
    },
    {
      phrase: "Tomar el pelo",
      literalTranslation: "To take the hair",
      translation: "To pull someone's leg/to fool someone/to make fun of someone",
      asciiArt: `
            ____________
      ,ad8888888888888888ba,
    ad88888888888888888888888a,
  a88888\"8888888888888888888888,
,8888"\ \ \"P88888888888888888888b,
d88 \ \       \"P888888888888888888,
,8888b               "88888888888888,
d8P'''  ,aa,              \"888888888b
888bbdd888888ba,  ,I         "88888888,
8888888888888888ba8"         ,88888888b
,888888888888888888b,        ,8888888888
(88888888888888888888,      ,88888888888,
d888888888888888888888,    ,8   "8888888b
88888888888888888888888  .;8'"""  (888888
8888888888888I"8888888P ,8" ,aaa,  888888
888888888888I:8888888" ,8"  'b8d'  (88888
(8888888888I'888888P' ,8) \         88888
88888888I"  8888P'  ,8")  \        88888
8888888I'   888"   ,8" (._.)       88888
(8888I"     "88,  ,8"             ,8888P
888I'       "P8 ,8"   ____      ,88888)
(88I'          ",8"  M""""""M   ,888888'
,8I"            ,8(    "aaaa"   ,8888888
,8I'            ,888a           ,8888888)
,8I'            ,888888,       ,888888888
,8I'            ,8888888'-=-'88888888888'
`
    },
    {
      phrase: "Estar como una cabra",
      literalTranslation: "To be like a goat",
      translation: "To be a little strange/bizarre/out of the ordinary/acting crazy or silly",
      asciiArt: `
(_(
/_/'_____/)
"  |      |
   |""""""| 
   `
    },
    {
      phrase: "Ponte las pilas",
      literalTranslation: "Put in your batteries",
      translation: "To get going/look alive/to get your act together/to get work done",
      asciiArt: `
      ╔════════════════╗
      ║████████████████╚╗
      ║█████ Full Battery ███ ║
      ║████████████████╔╝
      ╚════════════════╝
      `
    },
    {
      phrase: "Mandar a alguien a freír espárragos",
      literalTranslation: "Send someone to fry asparagus",
      translation: "To tell someone to go away/to get lost",
      asciiArt: `
                                    ___
                                _-"_-"
                             _-_-"
                         _-_-"
    _______________________-"-"_
    l                      /
     l                    /   
.--_  l__________________/_--.
""--------------------------""
`
    },
  ];
  
  // Function to generate a random phrase
  function generateRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * spanishPhrases.length);
    return spanishPhrases[randomIndex];
  }
  
  // Get a random phrase
  const randomPhrase = generateRandomPhrase();
  
  // Display the random phrase and translations
  console.log("Spanish Phrase: " + randomPhrase.phrase);
  console.log("Literal Translation: " + randomPhrase.literalTranslation);
  console.log("Translation in English: " + randomPhrase.translation);
  console.log("ASCII Art: " + randomPhrase.asciiArt);
