enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike; // 0

enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: string) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

askQuestion(Answer.Yes)

