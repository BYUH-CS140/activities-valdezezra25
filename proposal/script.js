const facts = [
  "🏖️ Pagudpud in Ilocos Norte is called the 'Boracay of the North' for its white sand beaches!",
  "🌊 Bangui Windmills were the first power-generating windmills in Southeast Asia!",
  "⛪ Paoay Church is a UNESCO World Heritage Site known for its unique Baroque architecture!",
  "🍲 Ilocos Norte is the home of the delicious Ilocano dish: Bagnet (crispy pork belly)!",
  "🛶 The Kapurpurawan Rock Formation is made of creamy white limestone sculpted by nature!",
  "🏰 The Malacañang of the North was once the official residence of President Marcos in Ilocos Norte.",
  "🎨 Ilocos Norte celebrates the Pamulinawen Festival every February in honor of St. William!",
  "🚴‍♀️ The Patapat Viaduct is a scenic coastal road often compared to the roads of Hawaii!",
  "🏺 Ilocanos are known for 'Burnay' jars—traditional hand-made clay pots used since ancient times.",
  "🌽 Agriculture is big in Ilocos Norte: from tobacco to corn to garlic!"
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("funFact").textContent = facts[randomIndex];
}

document.getElementById('changeColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});