console.log('connected');


const recipes = [
  {
    id: "1",
    image: "images/spaghetti.jpg",
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Parmesan Cheese",
      "Pancetta",
      "Black Pepper"
    ],
    steps: [
      "Cook spaghetti according to package instructions.",
      "In a bowl, whisk eggs and cheese.",
      "Cook pancetta until crispy.",
      "Combine spaghetti, pancetta, and egg mixture.",
      "Serve with extra cheese and pepper."
    ]
  },
  {
    id: "2",
    image: "images/avotoast.jpg",
    title: "Avocado Toast",
    description: "A quick and healthy breakfast option with avocado and toast.",
    ingredients: [
      "Bread",
      "Avocado",
      "Salt",
      "Pepper",
      "Lemon Juice"
    ],
    steps: [
      "Toast the bread to your liking.",
      "Mash avocado with salt, pepper, and lemon juice.",
      "Spread avocado on toast and serve."
    ]
  },
  {
    id: "3",
    image: "images/alfredo.jpeg",
    title: "Chicken Alfredo",
    description: "Creamy Alfredo sauce over tender chicken and fettuccine.",
    ingredients: [
      "Fettuccine",
      "Chicken Breast",
      "Heavy Cream",
      "Parmesan Cheese",
      "Garlic",
      "Butter"
    ],
    steps: [
      "Cook fettuccine and set aside.",
      "Cook chicken until golden brown.",
      "Prepare Alfredo sauce with cream, garlic, butter, and cheese.",
      "Combine sauce with pasta and chicken.",
      "Serve hot with extra cheese."
    ]
  },
  {
    id: "4",
    image: "images/caprese.jpeg",
    title: "Caprese Salad",
    description: "A fresh and simple Italian salad with mozzarella, tomatoes, and basil.",
    ingredients: [
      "Fresh Mozzarella",
      "Tomatoes",
      "Fresh Basil",
      "Olive Oil",
      "Balsamic Glaze",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Slice mozzarella and tomatoes.",
      "Layer slices with basil leaves.",
      "Drizzle with olive oil and balsamic glaze.",
      "Sprinkle with salt and pepper."
    ]
  },
  {
    id: "5",
    image: "images/cookies.jpeg",
    title: "Chocolate Chip Cookies",
    description: "Classic cookies with gooey chocolate chips.",
    ingredients: [
      "All-Purpose Flour",
      "Butter",
      "Brown Sugar",
      "White Sugar",
      "Chocolate Chips",
      "Eggs",
      "Vanilla Extract",
      "Baking Soda",
      "Salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix wet and dry ingredients separately.",
      "Combine ingredients and fold in chocolate chips.",
      "Scoop dough onto baking sheet.",
      "Bake for 10-12 minutes."
    ]
  },
  {
    id: "6",
    image: "images/stirfry.jpeg",
    title: "Vegetable Stir Fry",
    description: "A quick and healthy vegetable stir fry with soy sauce and garlic.",
    ingredients: [
      "Broccoli",
      "Carrots",
      "Bell Peppers",
      "Snap Peas",
      "Soy Sauce",
      "Garlic",
      "Ginger",
      "Sesame Oil"
    ],
    steps: [
      "Heat sesame oil in a wok or skillet.",
      "Add garlic and ginger, sauté briefly.",
      "Add vegetables and stir fry until tender-crisp.",
      "Add soy sauce and toss to coat.",
      "Serve hot over rice or noodles."
    ]
  },
  {
    id: "7",
    image: "images/margherita.jpeg",
    title: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Fresh Mozzarella",
      "Fresh Basil",
      "Olive Oil"
    ],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough.",
      "Spread tomato sauce evenly.",
      "Top with mozzarella slices and basil leaves.",
      "Bake for 10-15 minutes until golden brown."
    ]
  },
  {
    id: "8",
    image: "images/tacos.jpeg",
    title: "Beef Tacos",
    description: "Flavorful beef tacos with fresh toppings.",
    ingredients: [
      "Ground Beef",
      "Taco Seasoning",
      "Taco Shells",
      "Lettuce",
      "Tomatoes",
      "Cheddar Cheese",
      "Sour Cream"
    ],
    steps: [
      "Cook ground beef with taco seasoning.",
      "Warm taco shells in the oven.",
      "Assemble tacos with beef and toppings.",
      "Serve with lime wedges."
    ]
  },
  {
    id: "9",
    image: "images/lemonade.jpeg",
    title: "Lemonade",
    description: "Refreshing homemade lemonade.",
    ingredients: [
      "Lemons",
      "Sugar",
      "Water",
      "Ice"
    ],
    steps: [
      "Juice the lemons.",
      "Dissolve sugar in water to make a syrup.",
      "Mix lemon juice, syrup, and water.",
      "Serve over ice."
    ]
  },
  {
    id: "10",
    image: "images/bananapancakes.jpeg",
    title: "Banana Pancakes",
    description: "Fluffy pancakes with ripe bananas.",
    ingredients: [
      "All-Purpose Flour",
      "Bananas",
      "Eggs",
      "Milk",
      "Butter",
      "Sugar",
      "Baking Powder",
      "Salt"
    ],
    steps: [
      "Mash bananas and mix with wet ingredients.",
      "Combine with dry ingredients to form batter.",
      "Cook pancakes on a griddle.",
      "Serve with syrup and butter."
    ]
  }
];



