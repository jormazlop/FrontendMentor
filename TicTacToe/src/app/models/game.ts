export type Mark = 'x' | 'o';
export type Oponent = 'PLAYER' | 'CPU';
export type GameResults = {
  bluePlayer: 'P1' | 'P2' | 'CPU' | 'YOU' | 'NONE',
  blueTotal: number,
  silverTotal: number
  yellowPlayer: 'P1' | 'P2' | 'CPU' | 'YOU' | 'NONE',
  yellowTotal: number
}

export type GameBox = {
  id: number,
  value: 'x' | 'o' | ''
}

export type GameData = {
  results: GameResults,
  boxes: GameBox[]
}
