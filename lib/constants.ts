export const PARTICLES = new Set([
  "DE",
  "LA",
  "LAS",
  "LOS",
  "Y",
  "DEL",
  "MC",
  "MAC",
  "VON",
  "VAN",
  "MI",
  "SAN",
  "SANTA",
]);

export const COMMON_FIRST_NAMES = new Set(["JOSE", "MA", "MARIA", "MA.", "J", "J."]);

export const INCONVENIENT_WORDS = new Set([
  "BUEI","BUEY","CACA","CACO","CAGA","CAGO","CAKA","CAKO","COGE","COGI","COJA","COJE","COJI","COJO","COLA","CULO","FALO","FETO","GETA","GUEI","GUEY","JETA","JOTO","KACA","KACO","KAGA","KAGO","KAKA","KAKO","KOGE","KOJO","KULO","LILO","LOCA","LOCO","LOKA","LOKO","MAME","MAMO","MEAR","MEAS","MEON","MIAR","MION","MOCO","MOKO","MULA","MULO","NACA","NACO","PEDA","PEDO","PENE","PIPI","PITO","POPO","PUTA","PUTO","QULO","RATA","ROBA","ROBE","ROBO","RUIN","SENO","TETA","VACA","VAGA","VAGO","VAKA","VUEI","VUEY","WUEI","WUEY",
]);

export const HOMO_ALPHABET = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";

export const ANEXO_I_MAP: Record<string, string> = {
  " ": "00",
  "&": "10",
  A: "11", B: "12", C: "13", D: "14", E: "15", F: "16", G: "17", H: "18", I: "19",
  J: "21", K: "22", L: "23", M: "24", N: "25", O: "26", P: "27", Q: "28", R: "29",
  S: "32", T: "33", U: "34", V: "35", W: "36", X: "37", Y: "38", Z: "39", "Ñ": "40",
};

for (let i = 0; i <= 9; i += 1) {
  ANEXO_I_MAP[String(i)] = `0${i}`;
}

export const ANEXO_III_MAP: Record<string, number> = {
  "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
  A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, G: 16, H: 17, I: 18, J: 19,
  K: 20, L: 21, M: 22, N: 23, "&": 24, O: 25, P: 26, Q: 27, R: 28, S: 29,
  T: 30, U: 31, V: 32, W: 33, X: 34, Y: 35, Z: 36, " ": 37, "Ñ": 38,
};
