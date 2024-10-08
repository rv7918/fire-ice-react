import { rest } from "msw";

const homeResponse = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        url: "https://anapioficeandfire.com/api/houses/1",
        name: "House Algood",
        region: "The Westerlands",
        coatOfArms:
          "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
        words: "",
        titles: [],
        seats: [],
        currentLord: "",
        heir: "",
        overlord: "https://anapioficeandfire.com/api/houses/229",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: [],
        swornMembers: [],
      },
      {
        url: "https://anapioficeandfire.com/api/houses/2",
        name: "House Allyrion of Godsgrace",
        region: "Dorne",
        coatOfArms: "Gyronny Gules and Sable, a hand couped Or",
        words: "No Foe May Pass",
        titles: [],
        seats: ["Godsgrace"],
        currentLord: "https://anapioficeandfire.com/api/characters/298",
        heir: "https://anapioficeandfire.com/api/characters/1922",
        overlord: "https://anapioficeandfire.com/api/houses/285",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: [],
        swornMembers: [
          "https://anapioficeandfire.com/api/characters/298",
          "https://anapioficeandfire.com/api/characters/1129",
          "https://anapioficeandfire.com/api/characters/1301",
          "https://anapioficeandfire.com/api/characters/1922",
        ],
      },
      {
        url: "https://anapioficeandfire.com/api/houses/3",
        name: "House Amber",
        region: "The North",
        coatOfArms: "",
        words: "",
        titles: [],
        seats: [],
        currentLord: "",
        heir: "",
        overlord: "",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: [],
        swornMembers: [],
      },
      {
        url: "https://anapioficeandfire.com/api/houses/4",
        name: "House Ambrose",
        region: "The Reach",
        coatOfArms: "Or, semy of ants gules",
        words: "Never Resting",
        titles: [],
        seats: [],
        currentLord: "https://anapioficeandfire.com/api/characters/141",
        heir: "",
        overlord: "https://anapioficeandfire.com/api/houses/398",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: [],
        swornMembers: [
          "https://anapioficeandfire.com/api/characters/82",
          "https://anapioficeandfire.com/api/characters/102",
          "https://anapioficeandfire.com/api/characters/141",
          "https://anapioficeandfire.com/api/characters/152",
          "https://anapioficeandfire.com/api/characters/344",
        ],
      },
      {
        url: "https://anapioficeandfire.com/api/houses/5",
        name: "House Appleton of Appleton",
        region: "The Reach",
        coatOfArms:
          "Or, an apple tree eradicated proper fructed gules, quartered with argent, a gatehouse cendrée",
        words: "",
        titles: [],
        seats: ["Appleton"],
        currentLord: "",
        heir: "",
        overlord: "https://anapioficeandfire.com/api/houses/398",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: [],
        swornMembers: [],
      },
      {
        url: "https://anapioficeandfire.com/api/houses/6",
        name: "House Arryn of Gulltown",
        region: "The Vale",
        coatOfArms: "",
        words: "",
        titles: [],
        seats: ["Gulltown"],
        currentLord: "",
        heir: "",
        overlord: "https://anapioficeandfire.com/api/houses/7",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: [],
        swornMembers: [],
      },
      {
        url: "https://anapioficeandfire.com/api/houses/7",
        name: "House Arryn of the Eyrie",
        region: "The Vale",
        coatOfArms:
          "A sky-blue falcon soaring against a white moon, on a sky-blue field(Bleu celeste, upon a plate a falcon volant of the field)",
        words: "As High as Honor",
        titles: [
          "King of Mountain and Vale (formerly)",
          "Lord of the Eyrie",
          "Defender of the Vale",
          "Warden of the East",
        ],
        seats: ["The Eyrie (summer)", "Gates of the Moon (winter)"],
        currentLord: "https://anapioficeandfire.com/api/characters/894",
        heir: "https://anapioficeandfire.com/api/characters/477",
        overlord: "https://anapioficeandfire.com/api/houses/16",
        founded: "Coming of the Andals",
        founder: "https://anapioficeandfire.com/api/characters/144",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: ["https://anapioficeandfire.com/api/houses/6"],
        swornMembers: [
          "https://anapioficeandfire.com/api/characters/49",
          "https://anapioficeandfire.com/api/characters/92",
          "https://anapioficeandfire.com/api/characters/93",
          "https://anapioficeandfire.com/api/characters/107",
          "https://anapioficeandfire.com/api/characters/223",
          "https://anapioficeandfire.com/api/characters/265",
          "https://anapioficeandfire.com/api/characters/300",
          "https://anapioficeandfire.com/api/characters/356",
          "https://anapioficeandfire.com/api/characters/477",
          "https://anapioficeandfire.com/api/characters/508",
          "https://anapioficeandfire.com/api/characters/540",
          "https://anapioficeandfire.com/api/characters/548",
          "https://anapioficeandfire.com/api/characters/558",
          "https://anapioficeandfire.com/api/characters/572",
          "https://anapioficeandfire.com/api/characters/688",
          "https://anapioficeandfire.com/api/characters/894",
          "https://anapioficeandfire.com/api/characters/1068",
          "https://anapioficeandfire.com/api/characters/1193",
          "https://anapioficeandfire.com/api/characters/1280",
          "https://anapioficeandfire.com/api/characters/1443",
          "https://anapioficeandfire.com/api/characters/1655",
          "https://anapioficeandfire.com/api/characters/1693",
          "https://anapioficeandfire.com/api/characters/1715",
          "https://anapioficeandfire.com/api/characters/1884",
        ],
      },
      {
        url: "https://anapioficeandfire.com/api/houses/8",
        name: "House Ashford of Ashford",
        region: "The Reach",
        coatOfArms:
          "Tenny, a sun in splendour beneath a chevron inverted argent",
        words: "Our Sun Shines Bright",
        titles: ["Lord of Ashford"],
        seats: ["Ashford"],
        currentLord: "",
        heir: "",
        overlord: "https://anapioficeandfire.com/api/houses/398",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: [],
        swornMembers: [
          "https://anapioficeandfire.com/api/characters/121",
          "https://anapioficeandfire.com/api/characters/641",
          "https://anapioficeandfire.com/api/characters/895",
          "https://anapioficeandfire.com/api/characters/1812",
        ],
      },
      {
        url: "https://anapioficeandfire.com/api/houses/9",
        name: "House of Test",
        region: "The Reach",
        coatOfArms:
          "Tenny, a sun in splendour beneath a chevron inverted argent",
        words: "Our Sun Shines Bright",
        titles: ["Lord of Ashford"],
        seats: ["Ashford"],
        currentLord: "",
        heir: "",
        overlord: "https://anapioficeandfire.com/api/houses/398",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [],
        cadetBranches: [],
        swornMembers: [
          "https://anapioficeandfire.com/api/characters/121",
          "https://anapioficeandfire.com/api/characters/641",
          "https://anapioficeandfire.com/api/characters/895",
          "https://anapioficeandfire.com/api/characters/1812",
        ],
      },
    ])
  );
};

const detailPageResponse = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      url: "https://anapioficeandfire.com/api/houses/1",
      name: "House Algood",
      region: "The Westerlands",
      coatOfArms:
        "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
      words: "",
      titles: [],
      seats: [],
      currentLord: "",
      heir: "",
      overlord: "https://anapioficeandfire.com/api/houses/229",
      founded: "",
      founder: "",
      diedOut: "",
      ancestralWeapons: [],
      cadetBranches: [],
      swornMembers: [],
    })
  );
};

export const handlers = [
  rest.get(`https://anapioficeandfire.com/api/houses`, homeResponse),
  rest.get("https://anapioficeandfire.com/api/houses/1", detailPageResponse),
];
