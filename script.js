// Dataset for A–Z
const data = {
  A: {
    Name: ["Aman", "Anita", "Arjun"],
    Place: ["Agra", "America", "Ahmedabad"],
    Animal: ["Ant", "Alligator", "Armadillo"],
    Thing: ["Apple", "Arrow", "Axe"]
  },
  B: {
    Name: ["Bina", "Bharat", "Bhavna"],
    Place: ["Bangalore", "Berlin", "Brazil"],
    Animal: ["Bear", "Bat", "Buffalo"],
    Thing: ["Ball", "Book", "Bottle"]
  },
  C: {
    Name: ["Chetan", "Chitra", "Charan"],
    Place: ["Chennai", "Canada", "China"],
    Animal: ["Cat", "Camel", "Cheetah"],
    Thing: ["Car", "Chair", "Cup"]
  },
  D: {
    Name: ["Deepak", "Divya", "Dhruv"],
    Place: ["Delhi", "Denmark", "Dubai"],
    Animal: ["Dog", "Deer", "Dolphin"],
    Thing: ["Drum", "Desk", "Door"]
  },
  E: {
    Name: ["Ekta", "Esha", "Eshan"],
    Place: ["England", "Egypt", "Europe"],
    Animal: ["Elephant", "Eagle", "Emu"],
    Thing: ["Engine", "Envelope", "Eraser"]
  },
  F: {
    Name: ["Farhan", "Fatima", "Firoz"],
    Place: ["France", "Finland", "Fiji"],
    Animal: ["Fox", "Frog", "Falcon"],
    Thing: ["Fan", "Fork", "Flag"]
  },
  G: {
    Name: ["Gaurav", "Geeta", "Gopal"],
    Place: ["Goa", "Greece", "Germany"],
    Animal: ["Goat", "Giraffe", "Goose"],
    Thing: ["Guitar", "Glove", "Glass"]
  },
  H: {
    Name: ["Harsh", "Heena", "Himanshu"],
    Place: ["Hyderabad", "Holland", "Haryana"],
    Animal: ["Horse", "Hen", "Hawk"],
    Thing: ["Hat", "Hammer", "Hose"]
  },
  I: {
    Name: ["Ira", "Ishan", "Imran"],
    Place: ["India", "Indonesia", "Ireland"],
    Animal: ["Iguana", "Impala", "Insect"],
    Thing: ["Ink", "Iron", "Ice"]
  },
  J: {
    Name: ["Jyoti", "Jatin", "Jaya"],
    Place: ["Japan", "Jakarta", "Jammu"],
    Animal: ["Jaguar", "Jackal", "Jellyfish"],
    Thing: ["Jar", "Jacket", "Jeans"]
  },
  K: {
    Name: ["Karan", "Komal", "Kabir"],
    Place: ["Kenya", "Kolkata", "Kuwait"],
    Animal: ["Kangaroo", "Koala", "Kingfisher"],
    Thing: ["Kite", "Key", "Knife"]
  },
  L: {
    Name: ["Lakshmi", "Lata", "Lokesh"],
    Place: ["London", "Lucknow", "Ladakh"],
    Animal: ["Lion", "Leopard", "Llama"],
    Thing: ["Lamp", "Laptop", "Leaf"]
  },
  M: {
    Name: ["Meena", "Manoj", "Mohan"],
    Place: ["Mumbai", "Mexico", "Malaysia"],
    Animal: ["Monkey", "Moose", "Macaw"],
    Thing: ["Mirror", "Mat", "Mug"]
  },
  N: {
    Name: ["Nisha", "Neha", "Nitin"],
    Place: ["Nagpur", "Nepal", "Norway"],
    Animal: ["Newt", "Nightingale", "Narwhal"],
    Thing: ["Needle", "Notebook", "Net"]
  },
  O: {
    Name: ["Om", "Ojas", "Olivia"],
    Place: ["Oslo", "Oman", "Ottawa"],
    Animal: ["Owl", "Ox", "Otter"],
    Thing: ["Orange", "Oven", "Oil"]
  },
  P: {
    Name: ["Priya", "Pooja", "Pranav"],
    Place: ["Pune", "Paris", "Pakistan"],
    Animal: ["Panda", "Parrot", "Peacock"],
    Thing: ["Pen", "Pencil", "Phone"]
  },
  Q: {
    Name: ["Quincy", "Quinn", "Qadir"],
    Place: ["Qatar", "Quebec", "Quito"],
    Animal: ["Quail", "Quokka", "Quetzal"],
    Thing: ["Quilt", "Quartz", "Quill"]
  },
  R: {
    Name: ["Ravi", "Ritu", "Rahul"],
    Place: ["Rome", "Ranchi", "Russia"],
    Animal: ["Rabbit", "Rat", "Rhinoceros"],
    Thing: ["Ring", "Radio", "Rope"]
  },
  S: {
    Name: ["Sita", "Sonia", "Suresh"],
    Place: ["Singapore", "Sydney", "Shimla"],
    Animal: ["Snake", "Sheep", "Swan"],
    Thing: ["Spoon", "Shoes", "Shirt"]
  },
  T: {
    Name: ["Tina", "Tarun", "Tanvi"],
    Place: ["Tokyo", "Toronto", "Turkey"],
    Animal: ["Tiger", "Turtle", "Toucan"],
    Thing: ["Table", "Torch", "Train"]
  },
  U: {
    Name: ["Uma", "Usha", "Udit"],
    Place: ["Udaipur", "Uganda", "Ukraine"],
    Animal: ["Unicorn", "Urial", "Uakari"],
    Thing: ["Umbrella", "Urn", "Uniform"]
  },
  V: {
    Name: ["Varun", "Vikas", "Vidya"],
    Place: ["Varanasi", "Vietnam", "Venice"],
    Animal: ["Vulture", "Viper", "Vicuna"],
    Thing: ["Vase", "Violin", "Van"]
  },
  W: {
    Name: ["Waseem", "William", "Wendy"],
    Place: ["Washington", "Wales", "Warsaw"],
    Animal: ["Wolf", "Whale", "Walrus"],
    Thing: ["Watch", "Wheel", "Window"]
  },
  X: {
    Name: ["Xander", "Xavier", "Xenia"],
    Place: ["Xiamen", "Xian", "Xalapa"],
    Animal: ["Xerus", "X-ray fish"],
    Thing: ["Xylophone", "Xerox", "Xylograph"]
  },
  Y: {
    Name: ["Yash", "Yogesh", "Yamini"],
    Place: ["Yemen", "Yokohama", "Yangon"],
    Animal: ["Yak", "Yellowfin Tuna"],
    Thing: ["Yarn", "Yo-yo", "Yacht"]
  },
  Z: {
    Name: ["Zara", "Zain", "Zoya"],
    Place: ["Zurich", "Zambia", "Zimbabwe"],
    Animal: ["Zebra", "Zebu"],
    Thing: ["Zip", "Zigzag", "Zipper"]
  }
};

// Game Logic
document.getElementById("playBtn").onclick = () => {
  const letter = document.getElementById("letterInput").value.toUpperCase();
  const output = document.getElementById("output");

  if (!letter || !data[letter]) {
    output.innerHTML = "❌ Sorry, no data for that letter yet!";
    return;
  }

  const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];

  output.innerHTML = `
    <p><b>Name:</b> ${pickRandom(data[letter].Name)}</p>
    <p><b>Place:</b> ${pickRandom(data[letter].Place)}</p>
    <p><b>Animal:</b> ${pickRandom(data[letter].Animal)}</p>
    <p><b>Thing:</b> ${pickRandom(data[letter].Thing)}</p>
  `;
};
