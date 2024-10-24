const Scrabble = require('./scrabble'); // Assuming the class is in scrabble.js

describe("Scrabble score calculator", () => {
  test("should return 0 for an empty string", () => {
    const s = new Scrabble("");
    expect(s.score()).toBe(0);
  });

  test("should return 0 for whitespace characters", () => {
    const s = new Scrabble(" \t\n");
    expect(s.score()).toBe(0);
  });

  test("should return 1 for the letter 'a'", () => {
    const s = new Scrabble("a");
    expect(s.score()).toBe(1);
  });

  test("should return 4 for the letter 'f'", () => {
    const s = new Scrabble("f");
    expect(s.score()).toBe(4);
  });

  test("should return 6 for the word 'street'", () => {
    const s = new Scrabble("street");
    expect(s.score()).toBe(6);
  });

  test("should return 22 for the word 'quirky'", () => {
    const s = new Scrabble("quirky");
    expect(s.score()).toBe(22);
  });

  test("should return 41 for the word 'OXyPHEnBUTaZoNE'", () => {
    const s = new Scrabble("OXyPHEnBUTaZoNE");
    expect(s.score()).toBe(41);
  });

  // Extended Criteria Tests
  test("should handle double letter score", () => {
    const s = new Scrabble("d{o}g");
    expect(s.score()).toBe(6); // 2 (d) + 2*1 (o double) + 2 (g)
  });

  test("should handle triple letter score", () => {
    const s = new Scrabble("d[o]g");
    expect(s.score()).toBe(7); // 2 (d) + 3*1 (o triple) + 2 (g)
  });

  test("should handle double word score", () => {
    const s = new Scrabble("{dog}");
    expect(s.score()).toBe(10); // 2*(2 (d) + 1 (o) + 2 (g))
  });

  test("should handle triple word score", () => {
    const s = new Scrabble("[dog]");
    expect(s.score()).toBe(15); // 3*(2 (d) + 1 (o) + 2 (g))
  });

  test("should handle combined double letter and double word score", () => {
    const s = new Scrabble("{d{o}g}");
    expect(s.score()).toBe(12); // 2*(2 (d) + 2*1 (o double) + 2 (g))
  });

  test("should handle combined triple letter and triple word score", () => {
    const s = new Scrabble("[d[o]g]");
    expect(s.score()).toBe(21); // 3*(2 (d) + 3*1 (o triple) + 2 (g))
  });
});
