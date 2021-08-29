function randomQoutes() {
  const qoutes = [
    'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
    'The price of anything is the amount of life you exchange for it.',
    'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
    'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
    'The price of anything is the amount of life you exchange for it.',
    'God save me from my friends. I can protect myself from my enemies.',
    'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we"ve got',
  ];

  const qoute = qoutes[Math.floor(Math.random() * qoutes.length)];
  document.getElementById('qouteBox').innerHTML = qoute;
}