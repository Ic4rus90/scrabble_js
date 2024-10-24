const letterScores = {
    A: 1, E: 1, I: 1, O: 1, U:1, L:1, N:1, R:1, S:1, T:1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  };
  
  class Scrabble {
    constructor(word) {
      this.word = word;
    }
  
    score() {
      if (!this.word) return 0;
      let word = this.word.trim();
  
      if (!word) return 0;
  
      let wordMultiplier = 1;
  
      if ((word.startsWith('{') && word.endsWith('}')) ||
          (word.startsWith('[') && word.endsWith(']'))) {
  
        if (word.startsWith('{') && word.endsWith('}')) {
          wordMultiplier = 2;
        } else if (word.startsWith('[') && word.endsWith(']')) {
          wordMultiplier = 3;
        }
  
        word = word.substring(1, word.length - 1);
      }
  
      let totalScore = 0;
      let index = 0;
  
      while (index < word.length) {
        let char = word[index];
  
        if (char === '{' || char === '[') {
          let closingBracket = char === '{' ? '}' : ']';
          let letterMultiplier = char === '{' ? 2 : 3;
  
          index++;
          if (index >= word.length) break;
          let letter = word[index];
          index++;
          if (index >= word.length || word[index] !== closingBracket) {
            break;
          }
          let score = letterScores[letter.toUpperCase()] || 0;
          totalScore += score * letterMultiplier;
  
          index++;
        } else if (/[A-Za-z]/.test(char)) {
          let score = letterScores[char.toUpperCase()] || 0;
          totalScore += score;
          index++;
        } else {
          index++;
        }
      }
  
      return totalScore * wordMultiplier;
    }
  }
  
  module.exports = Scrabble;
  