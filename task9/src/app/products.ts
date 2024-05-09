export interface Product {
  id: number;
  name: string;
  time: number;
  description: string;
  image: string;
  rating: number;
  likes: number;
  category: string;
}

export const products = [
    {
      "id": 1,
      "name": "Classic Chicken Noodle Soup",
      "time": 45,
      "description": "A comforting soup made with tender chicken, vegetables, and egg noodles.",
      "image": "/assets/pics/1.jpg",
      "rating": 4.7,
      "likes": 180,
      "category": "Soup"
    },
    {
      "id": 2,
      "name": "Creamy Potato Leek Soup",
      "time": 35,
      "description": "A velvety smooth soup made with potatoes, leeks, and cream.",
      "image": "/assets/pics/2.jpg",
      "rating": 4.6,
      "likes": 150,
      "category": "Soup"
    },
    {
      "id": 3,
      "name": "Spicy Lentil Soup",
      "time": 40,
      "description": "A hearty soup with red lentils, tomatoes, and a kick of spices.",
      "image": "/assets/pics/3.jpg",
      "rating": 4.8,
      "likes": 200,
      "category": "Soup"
    },
    {
      "id": 4,
      "name": "Tom Yum Soup",
      "time": 30,
      "description": "A Thai-inspired soup with shrimp, mushrooms, lemongrass, and chili peppers.",
      "image": "/assets/pics/4.jpg",
      "rating": 4.5,
      "likes": 170,
      "category": "Soup"
    },
    {
      "id": 5,
      "name": "Roasted Butternut Squash Soup",
      "time": 50,
      "description": "A creamy and rich soup made with roasted butternut squash, carrots, and spices.",
      "image": "/assets/pics/5.jpg",
      "rating": 4.9,
      "likes": 220,
      "category": "Soup"
    },
    {
      "id": 6,
      "name": "Avocado Toast",
      "time": 10,
      "description": "Simple yet delicious avocado toast topped with sliced tomatoes and a sprinkle of salt.",
      "image": "/assets/pics/6.jpg",
      "rating": 4.8,
      "likes": 190,
      "category": "Breakfast"
    },
    {
      "id": 7,
      "name": "Egg and Cheese Breakfast Burrito",
      "time": 20,
      "description": "A hearty breakfast burrito filled with scrambled eggs, cheese, and salsa.",
      "image": "/assets/pics/7.jpg",
      "rating": 4.7,
      "likes": 180,
      "category": "Breakfast"
    },
    {
      "id": 8,
      "name": "Blueberry Pancakes",
      "time": 30,
      "description": "Fluffy pancakes studded with juicy blueberries and drizzled with maple syrup.",
      "image": "/assets/pics/8.jpg",
      "rating": 4.9,
      "likes": 220,
      "category": "Breakfast"
    },
    {
      "id": 9,
      "name": "Greek Yogurt Parfait",
      "time": 15,
      "description": "Layers of Greek yogurt, granola, and fresh berries topped with a drizzle of honey.",
      "image": "/assets/pics/9.jpg",
      "rating": 4.6,
      "likes": 160,
      "category": "Breakfast"
    },
    {
      "id": 10,
      "name": "Oatmeal with Banana and Almonds",
      "time": 15,
      "description": "Warm oatmeal topped with sliced bananas, chopped almonds, and a sprinkle of cinnamon.",
      "image": "/assets/pics/10.jpg",
      "rating": 4.7,
      "likes": 170,
      "category": "Breakfast"
    },
    {
      "id": 11,
      "name": "Classic Margarita",
      "time": 10,
      "description": "A refreshing cocktail made with tequila, lime juice, and triple sec.",
      "image": "/assets/pics/11.jpg",
      "rating": 4.8,
      "likes": 200,
      "category": "Drink"
    },
    {
      "id": 12,
      "name": "Mango Smoothie",
      "time": 5,
      "description": "A tropical smoothie made with ripe mangoes, yogurt, and orange juice.",
      "image": "/assets/pics/12.jpg",
      "rating": 4.7,
      "likes": 180,
      "category": "Drink"
    },
    {
      "id": 13,
      "name": "Iced Matcha Latte",
      "time": 15,
      "description": "A refreshing and energizing drink made with matcha green tea and milk over ice.",
      "image": "/assets/pics/13.jpg",
      "rating": 4.6,
      "likes": 160,
      "category": "Drink"
    },
    {
      "id": 14,
      "name": "Hot Chocolate",
      "time": 10,
      "description": "Rich and creamy hot chocolate topped with whipped cream and chocolate shavings.",
      "image": "/assets/pics/14.jpg",
      "rating": 4.9,
      "likes": 220,
      "category": "Drink"
    },
    {
      "id": 15,
      "name": "Sparkling Lemonade",
      "time": 5,
      "description": "A bubbly and refreshing drink made with freshly squeezed lemon juice and sparkling water.",
      "image": "/assets/pics/15.jpg",
      "rating": 4.5,
      "likes": 170,
      "category": "Drink"
    },
    {
      "id": 16,
      "name": "Caprese Salad",
      "time": 5,
      "description": "A simple salad made with ripe tomatoes, fresh mozzarella, basil, and balsamic glaze.",
      "image": "/assets/pics/16.jpg",
      "rating": 4.7,
      "likes": 180,
      "category": "5-min"
    },
    {
      "id": 17,
      "name": "Grilled Cheese Sandwich",
      "time": 10,
      "description": "A classic sandwich with melted cheese between slices of buttery grilled bread.",
      "image": "/assets/pics/17.jpg",
      "rating": 4.6,
      "likes": 160,
      "category": "5-min"
    },
    {
      "id": 18,
      "name": "Peanut Butter and Jelly Sandwich",
      "time": 5,
      "description": "A childhood favorite made with creamy peanut butter and sweet strawberry jelly.",
      "image": "/assets/pics/18.jpg",
      "rating": 4.5,
      "likes": 150,
      "category": "5-min"
    },
    {
      "id": 19,
      "name": "Microwave Mug Cake",
      "time": 5,
      "description": "A quick and easy cake made in a mug and cooked in the microwave.",
      "image": "/assets/pics/19.jpg",
      "rating": 4.8,
      "likes": 200,
      "category": "5-min"
    },
    {
      "id": 20,
      "name": "Avocado Toast with Poached Egg",
      "time": 5,
      "description": "A trendy breakfast dish featuring creamy avocado and a perfectly poached egg on toast.",
      "image": "/assets/pics/20.jpg",
      "rating": 4.9,
      "likes": 220,
      "category": "5-min"
    },
    {
      "id": 21,
      "name": "Classic Chocolate Chip Cookies",
      "time": 30,
      "description": "Traditional chocolate chip cookies made with butter, sugar, flour, and chocolate chips.",
      "image": "/assets/pics/chocolatechipcookies.jpg",
      "rating": 4.8,
      "likes": 200,
      "category": "bake"
    },
    {
      "id": 22,
      "name": "Homemade Banana Bread",
      "time": 60,
      "description": "Moist and flavorful banana bread made with ripe bananas, flour, sugar, and eggs.",
      "image": "/assets/pics/bananabread.jpg",
      "rating": 4.9,
      "likes": 220,
      "category": "bake"
    },
    {
      "id": 23,
      "name": "Blueberry Muffins",
      "time": 40,
      "description": "Delicious muffins packed with juicy blueberries and topped with a crumbly streusel topping.",
      "image": "/assets/pics/blueberrymuffins.jpg",
      "rating": 4.7,
      "likes": 180,
      "category": "bake"
    },
    {
      "id": 24,
      "name": "Apple Pie",
      "time": 75,
      "description": "A classic dessert featuring a flaky pie crust filled with sweet, spiced apples.",
      "image": "/assets/pics/applepie.jpg",
      "rating": 4.6,
      "likes": 160,
      "category": "bake"
    },
    {
      "id": 25,
      "name": "Red Velvet Cupcakes",
      "time": 45,
      "description": "Decadent cupcakes with a rich red color, topped with cream cheese frosting.",
      "image": "/assets/pics/redvelvetcupcakes.jpg",
      "rating": 4.8,
      "likes": 190,
      "category": "bake"
    }
]
