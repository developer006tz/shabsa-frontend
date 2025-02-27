import {
    Layout,
    Droplets,
    SlidersHorizontal,
    Building2,
} from "lucide-react";

export const services = [
    {
        title: "Tiles",
        description: "We offer a wide selection of tiles to suit any project, from residential to commercial. Our range includes durable fully body tiles of all sizes, elegant porcelain tiles known for their strength and water resistance, classic ceramic tiles offering a balance of affordability and style, and luxurious marble tiles that add a touch of sophistication. We provide tiles suitable for various applications, including interior and exterior floors, wall coverings, and high-traffic parking areas. Our expert team can assist you in selecting the perfect tiles to meet your specific needs and aesthetic preferences.", 
        icon: Layout,
        subServices: [
            { name: "Fully Body Tiles", description: "Durable and suitable for high-traffic areas." },
            { name: "Porcelain Tiles", description: "Strong, water-resistant, and aesthetically pleasing." },
            { name: "Ceramic Tiles", description: "Affordable and versatile for various applications." },
            { name: "Marble Tiles", description: "Luxurious natural stone for a sophisticated look." },
            { name: "Floor and Wall Tiles", description: "Tiles for all interior and exterior surfaces." },
            { name: "Parking Tiles", description: "Durable tiles designed for outdoor parking areas." },
        ],
    },
    {
        title: "Sanitary Ware",
        description: "We provide high-quality sanitary ware for creating modern and functional bathrooms and restrooms. Our product range includes traditional squatting pans, comfortable and contemporary sitting/European toilets with various flushing mechanisms, efficient and hygienic urinals for commercial and residential spaces, a variety of stylish washing basins to complement any bathroom design, and practical bathroom cabinets for storage and organization. We focus on providing durable, water-efficient, and aesthetically pleasing sanitary ware solutions.",
        icon: Droplets,
        subServices: [
            { name: "Squatting Pan", description: "Traditional and practical sanitary solution." },
            { name: "Sitting/European Toilet", description: "Modern and comfortable toilet designs." },
            { name: "Urinary", description: "Hygienic and efficient urinals for commercial use." },
            { name: "Washing Basin", description: "Variety of basins to suit any bathroom style." },
            { name: "Cabinets", description: "Storage solutions for organized bathrooms." },
        ],
    },
    {
        title: "Chrome Plated Fittings",
        description: "Enhance your bathroom and kitchen with our range of durable and stylish chrome-plated fittings. Our selection includes hygienic and convenient shattafs (hand showers) for personal hygiene, a variety of showerheads and shower systems for a refreshing shower experience, high-quality mixers for precise control of water flow and temperature in both kitchens and basins, and practical and aesthetically pleasing holders for bathroom accessories such as towel rails, soap dishes, and toilet paper holders. We prioritize quality and durability in our fittings to ensure long-lasting performance and a polished look.",
        icon: SlidersHorizontal,
        subServices: [
            { name: "Shattaf", description: "Convenient hand showers for personal hygiene." },
            { name: "Shower", description: "Range of showerheads and systems for a refreshing experience." },
            { name: "Mixers", description: "Precise control of water flow and temperature." },
            { name: "Holders", description: "Practical accessories for bathroom organization." },
        ],
    },
    {
        title: "Elevators",
        description: "We supply and install reliable Jadec elevators for a variety of applications, ensuring smooth, safe, and efficient vertical transportation. Our services cater to diverse needs, including hospitals requiring efficient patient transport, multi-story homes seeking added convenience and accessibility, hotels aiming to provide comfortable and stylish vertical transportation for their guests, and car parking facilities needing specialized car elevators for efficient parking solutions. We offer a comprehensive range of elevator services, including installation, maintenance, and modernization, and we can also provide custom elevator solutions to meet specific project requirements.",
        icon: Building2,
        subServices: [
            { name: "Hospitals", description: "Elevators designed for safe and efficient patient transport." },
            { name: "Homes", description: "Enhance accessibility and convenience in residential buildings." },
            { name: "Hotels", description: "Stylish and comfortable elevators for guest transportation." },
            { name: "Cars", description: "Specialized car elevators for parking solutions." },
        ],
    },
];

export const products = [
    {
      name: "Ella - Multipurpose Shopify Theme OS 2.0",
      author: "halothemes",
      category: "Fashion",
      price: "90, 000",
      image: "/products/white1.png", // Replace with your image paths
      bestSeller: true,
    },
    {
      name: "Kalles - Clean, Versatile, Responsive Shop...",
      author: "The4",
      category: "Fashion",
      price: "34, 000",
      image: "/products/white3.png",
      bestSeller: false,
    },
    {
      name: "Glozin - Multipurpose Shopify Theme OS 2.0",
      author: "Next Sky",
      category: "Fashion",
      price: "45, 000",
      image: "/products/white4.png",
      bestSeller: false,
    },
    {
      name: "Fastor - Multipurpose Shopify Theme",
      author: "roartheme",
      category: "Electronics",
      price: "50, 000",
      image: "/products/white6.png",
      bestSeller: true,
    },
    {
      name: "Wokiee - Ecommerce Shopify Theme",
      author: "p-themes",
      category: "Lifestyle",
      price: "75, 000",
      image: "/products/white5.png",
      bestSeller: true,
    },
    {
      name: "Minimog - Shopify OS 2.0 Theme",
      author: "FoxKit",
      category: "Beauty",
      price: "40, 000",
      image: "/products/white2.png",
      bestSeller: false,
    },
  ];
  
  export const categories = [
    { "id": 1, "name": "Electronics" },
    { "id": 2, "name": "Clothing" },
    { "id": 3, "name": "Books" }
  ];

  export const brands = [
    { "id": 1, "name": "Apple" },
    { "id": 2, "name": "Nike" },
    { "id": 3, "name": "Samsung" }
  ];

  export const localProducts = [
    {
      "id": 1,
      "name": "Common Projects Bball High",
      "color": "White",
      "price": 549,
      "quantity": 2,
      "image": "/common-projects.jpg" // Replace with your actual image path
    },
    {
      "id": 2,
      "name": "Maison Margiela Future Sneakers",
      "color": "White",
      "price": 870,
      "quantity": 1,
      "image": "/maison-margiela.jpg" // Replace with your actual image path
    },
    {
      "id": 3,
      "name": "Our Legacy Brushed Scarf",
      "color": "Brown",
      "price": 349,
      "quantity": 1,
      "image": "/our-legacy.jpg" // Replace with your actual image path
    },
    {
      "id": 4,
      "name": "Another Product Name",
      "color": "Black",
      "price": 199,
      "quantity": 3,
      "image": "/another-product.jpg" // Replace with your actual image path
    },
      {
      "id": 5,
      "name": "Sample Product Name",
      "color": "Blue",
      "price": 299,
      "quantity": 1,
      "image": "/sample-product.jpg" // Replace with your actual image path
    },
      {
      "id": 6,
      "name": "Example Product Name",
      "color": "Red",
      "price": 399,
      "quantity": 2,
      "image": "/example-product.jpg" // Replace with your actual image path
    },
  ];