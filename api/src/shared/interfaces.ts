export interface IDBResponse {
  _id: { [key: string]: number };
  total: number;
  positive: number;
  negative: number;
  happy: number;
  angry: number;
  sad: number;
  other: number;
  fear: number;
  surprised: number;
}
