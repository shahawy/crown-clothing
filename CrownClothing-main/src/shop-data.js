const SHOP_DATA = [
    {
      title: "Men-Hats",
      items: [
        {
          id: 3,
          name: "Brown Cowboy",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMa-WUA0BNfUZGkvAjo-jzkqMfMJnfcgYR7A&usqp=CAU",
          price: 135,
          sizes: ["S", "L"],
          quantity: 25,
          materialType: "Felt",
          description:
            "Embrace the Wild West with our Brown Cowboy hat. Crafted from durable felt, this hat features a classic cowboy design with a stylish twist. Perfect for country-inspired looks or a bold fashion statement.",
          colors: ["Brown", "Tan", "Dark Brown"],
          suggestedItems: [4, 8],
        },
        {
          id: 4,
          name: "Grey Brim",
          imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
          price: 125,
          sizes: ["S", "M"],
          quantity: 35,
          materialType: "Cotton",
          description:
            "Achieve a casual and cool look with our Grey Brim hat. Made from comfortable cotton, this hat features a grey brim for added style. A versatile accessory for everyday wear.",
          colors: ["Grey", "Charcoal", "White"],
          suggestedItems: [1, 9],
        },
        {
          id: 6,
          name: "Palm Tree Cap",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
          price: 114,
          sizes: ["S", "L"],
          quantity: 20,
          materialType: "Polyester",
          description:
            " Bring a touch of paradise to your style with our Palm Tree Cap. Made from high-quality polyester, this cap not only provides comfort but also adds a trendy and tropical vibe to your look. The palm tree design evokes a sense of relaxation and sunny days, making it the perfect accessory for casual outings, beach trips, or just soaking up the sun. Embrace the laid-back lifestyle with this stylish Palm Tree Cap!...",
          colors: ["Blue", "Green", "Yellow"],
          suggestedItems: [5, 9],
        },
        {
          id: 8,
          name: "Wolf Cap",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aa-oYsVmv_miwF-ftWOTdEM5Rbcy8EFGFA&usqp=CAU",
          price: 114,
          sizes: ["M", "L"],
          quantity: 30,
          materialType: "Cotton",
          description:
            "Unleash your wild side with our Wolf Cap. Featuring a fierce wolf design, this cap is made from comfortable cotton. Ideal for those who want to make a statement with their headwear.",
          colors: ["Black", "Grey", "White"],
          suggestedItems: [3, 7],
        },
        {
          id: 9,
          name: "Blue Snapback",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AdgfuEFZFXkO1Hm1ADpc76TNT8m9fiwgzQ&usqp=CAU",
          price: 116,
          sizes: ["S", "L"],
          quantity: 55,
          materialType: "Polyester",
          description:
            "Top off your casual look with our Blue Snapback. Made from durable polyester, this snapback cap adds a sporty and stylish touch to your outfit. The classic blue color complements various styles.",
          colors: ["Blue", "Navy", "Royal Blue"],
          suggestedItems: [1, 5],
        },
      ],
    },
  
    {
      title: "Women-Hats",
      items: [
        {
          id: 1,
          name: "Brown Brim",
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          price: 125,
          sizes: ["S", "M", "L"],
          quantity: 100,
          materialType: "Wool",
          description:
            "Stay warm and stylish with our Brown Brim hat made from high-quality wool. This classic design features a brown brim for a timeless look. Perfect for any outdoor adventure or casual outing.",
          colors: ["Brown", "Beige", "Charcoal"],
          suggestedItems: [2, 5],
        },
        {
          id: 2,
          name: "Blue Beanie",
          imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
          price: 118,
          sizes: ["M", "L"],
          quantity: 30,
          materialType: "Acrylic",
          description:
            "Add a pop of color to your winter wardrobe with our Blue Beanie. Made from soft acrylic, this beanie offers warmth and style. The vibrant blue hue is sure to brighten up your cold-weather look.",
          colors: ["Blue", "Navy", "Sky Blue"],
          suggestedItems: [1, 5],
        },
        {
          id: 5,
          name: "Green Beanie",
          imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
          price: 118,
          sizes: ["M"],
          quantity: 50,
          materialType: "Wool Blend",
          description:
            "Stay cozy and fashionable with our Green Beanie. The wool blend material provides warmth, and the vibrant green color adds a playful touch to your winter wardrobe. Ideal for a trendy and relaxed style.",
          colors: ["Green", "Forest Green", "Olive"],
          suggestedItems: [2],
        },
        {
          id: 7,
          name: "Red Beanie",
          imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
          price: 118,
          sizes: ["S", "M"],
          quantity: 45,
          materialType: "Acrylic",
          description:
            "Add warmth and a bold pop of color to your winter look with our Red Beanie. Made from soft acrylic, this beanie is perfect for chilly days and adds a stylish accent to your outfit.",
          colors: ["Red", "Burgundy", "Crimson"],
          suggestedItems: [3],
        },
        {
          id: 10,
          name: "Classic Fedora",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFw1Cab7sqpDTzGxg-ICSTP7ecHu3dqkruPA&usqp=CAU",
          price: 30,
          sizes: ["S", "M"],
          quantity: 140,
          materialType: "Wool",
          description:
            "Achieve a timeless and sophisticated look with our Classic Fedora. Made from high-quality wool, this fedora adds a touch of elegance to any outfit. A must-have accessory for both casual and formal occasions.",
          colors: ["Black", "Brown", "Grey"],
          suggestedItems: [4],
        },
      ],
    },
  
    {
      title: "Men-Sneakers",
      items: [
        {
          id: 11,
          name: "Adidas NMD",
          imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
          price: 300,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Mesh",
          color: ["Black", "White", "Red"],
          suggestedItem: [14, 16],
          description:
            "Step into style with Adidas NMD. These sneakers feature a breathable mesh upper for ultimate comfort. The versatile black, white, and red colors make them a perfect choice for any casual outfit.",
        },
  
        {
          id: 13,
          name: "Black Converse",
          imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
          price: 340,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Canvas",
          color: ["Black", "White", "Red"],
          suggestedItem: [12, 19],
          description:
            "Classic and timeless, Black Converse is a wardrobe essential. The canvas material ensures durability, and the black, white, and red colors add a touch of style to your everyday look.",
        },
        {
          id: 14,
          name: "Nike White AirForce",
          imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
          price: 360,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Leather",
          color: ["White", "Blue", "Gray"],
          suggestedItem: [11, 17],
          description:
            "Make a statement with Nike White AirForce. These high-tops feature a leather upper for a premium feel. The white, blue, and gray colors add a clean and modern touch to your sneaker collection.",
        },
        {
          id: 15,
          name: "Nike Red High Tops",
          imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
          price: 380,
          sizes: ["S", "M", "L"],
          quantity: 20,
          materialType: "Synthetic",
          color: ["Red", "Black", "White"],
          suggestedItem: [14, 16],
          description:
            "Stand out from the crowd with Nike Red High Tops. The synthetic material ensures durability, while the vibrant red, black, and white colors add a bold and energetic vibe to your footwear collection.",
        },
        {
          id: 16,
          name: "Nike Brown High Tops",
          imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
          price: 400,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Leather",
          color: ["Brown", "Tan", "White"],
          suggestedItem: [11, 17],
          description:
            "Add a touch of sophistication to your look with Nike Brown High Tops. Crafted from leather, these high-tops offer both style and comfort. The brown, tan, and white colors make them a versatile choice for various outfits.",
        },
        {
          id: 17,
          name: "Air Jordan Limited",
          imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
          price: 420,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Nubuck",
          color: ["Black", "Red", "Gold"],
          suggestedItem: [13, 15],
          description:
            "Own the streets with Air Jordan Limited. These sneakers feature a nubuck upper for a luxurious feel. The black, red, and gold colors add a touch of flair to your streetwear-inspired wardrobe.",
        },
        {
          id: 18,
          name: "Timberlands",
          imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
          price: 440,
          sizes: ["S", "M", "L"],
          quantity: 55,
          materialType: "Leather",
          color: ["Yellow", "Brown", "Black"],
          suggestedItem: [11, 12],
          description:
            "Embrace rugged style with Timberlands. The leather construction ensures durability, and the yellow, brown, and black colors provide a bold and outdoorsy vibe. Perfect for urban adventures and beyond.",
        },
        {
          id: 19,
          name: "Vans Old Skool",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu18_NfMXPlUg06OgguoRhhwXrV6M8ewMHZA&usqp=CAU",
          price: 300,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Suede",
          color: ["Black", "White", "Green"],
          suggestedItem: [13, 15],
          description:
            "Skate into style with Vans Old Skool. These classic sneakers feature a suede upper for a touch of sophistication. The black, white, and green colors add a versatile and trendy element to your casual looks.",
        },
        {
          id: 20,
          name: "Puma RS-X",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3kISUyWRour51CGSV31X6BPkl0gtSoxiFQ&usqp=CAU",
          price: 400,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Mesh",
          color: ["Blue", "Gray", "Pink"],
          suggestedItem: [14, 16],
          description:
            "Experience comfort and style with Puma RS-X. The mesh material provides breathability, while the blue, gray, and pink colors add a playful and sporty touch. Whether you're hitting the gym or the streets, these sneakers have you covered.",
        },
      ],
    },
  
    {
      title: "Women-Sneakers",
      items: [
        {
          id: 12,
          name: "Adidas Yeezy",
          imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
          price: 320,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Primeknit",
          color: ["Gray", "Beige", "Black"],
          suggestedItem: [25],
          description:
            "Elevate your streetwear game with Adidas Yeezy. The Primeknit material offers a snug fit, while the stylish gray, beige, and black colors provide a modern and trendy look.",
        },
        {
          id: 101,
          name: "Classic Black Pumps",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKiSU0KWI6tgtNetMZQ4qm0TckHxuAq1ElA&usqp=CAU",
          price: 120,
          sizes: ["5", "6", "7", "8"],
          quantity: 20,
          materialType: "Patent Leather",
          color: "Black",
          suggestedItem: [38],
          description:
            "Elevate your style with these classic black pumps. Made from glossy patent leather, these heels are perfect for adding a touch of sophistication to your formal or evening ensemble.",
        },
        {
          id: 102,
          name: "Strappy Sandal Heels",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfHrAAFTh0ewuQsWKLIrM6uXj1vh-KR9lDA&usqp=CAU",
          price: 95,
          sizes: ["6", "7", "8"],
          quantity: 25,
          materialType: "Suede",
          color: "Blue",
          suggestedItem: [36],
          description:
            "Make a statement with these strappy sandal heels. Crafted from soft suede, these heels feature a stylish design that adds a trendy and elegant touch to your outfit.",
        },
        {
          id: 103,
          name: "Red Stiletto Heels",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ7hu92uGTtm5P7rKQA8QxpQXz9QVRhZQfA&usqp=CAU",
          price: 150,
          sizes: ["5", "6", "7"],
          quantity: 15,
          materialType: "Faux Leather",
          color: "Red",
          suggestedItem: [37],
          description:
            "Turn heads with these bold red stiletto heels. The faux leather material provides a sleek and polished appearance, making these heels a perfect choice for a night out or special occasion.",
        },
      ],
    },
  
    {
      title: "Men-Jackets",
      items: [
        {
          id: 21,
          name: "Black Jean Shearling",
          imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
          price: 200,
          sizes: ["S", "M", "L"],
          quantity: 50,
          materialType: "Leather",
          color: ["Black", "Blue", "Brown"],
          suggestedItem: [22, 25],
          description:
            "Stay warm and stylish with the Black Jean Shearling jacket. The leather material provides a sleek look, while the shearling lining adds a cozy touch. Available in versatile black, blue, and brown colors.",
        },
        {
          id: 22,
          name: "Blue Jean Jacket",
          imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
          price: 220,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Denim",
          color: ["Blue", "Gray", "Black"],
          suggestedItem: [21, 26],
          description:
            "Add a classic touch to your wardrobe with the Blue Jean Jacket. The denim material ensures durability, and the blue, gray, and black colors make it a versatile layering piece for any casual outfit.",
        },
        {
          id: 23,
          name: "Quilted Puffer Jacket",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-lYLJmXu4DsB23SybncRYyp2Xz5duxAouQ&usqp=CAU",
          price: 500,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Polyester",
          color: ["Red", "Navy Blue", "Grey"],
          suggestedItem: [24, 29],
          description:
            "Stay cozy in the Quilted Puffer Jacket. The polyester material provides warmth, and the quilted design adds a stylish element. Choose from bold red, navy blue, and green colors to make a statement.",
        },
        {
          id: 24,
          name: "Varsity Bomber Jacket",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCU1h0i7hmq2lRA_er6uxytjrJbvjcI3xgA&usqp=CAU",
          price: 410,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Cotton",
          color: ["Black", "White", "Gray"],
          suggestedItem: [23, 26],
          description:
            "Channel a sporty vibe with the Varsity Bomber Jacket. The cotton material ensures comfort, and the varsity-inspired design adds a trendy touch. Available in classic black, white, and gray colors.",
        },
  
        {
          id: 27,
          name: "Military Style Jacket",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS38PdfUAv1OccBI8qLbv-aywMbIDzYZzJWw&usqp=CAU",
          price: 520,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Cotton",
          color: ["Green", "Camouflage", "Brown"],
          suggestedItem: [24, 29],
          description:
            "Command attention in the Military Style Jacket. The cotton construction provides durability, and the military-inspired design adds a rugged and on-trend touch. Choose from green, camouflage, and brown colors.",
        },
        {
          id: 28,
          name: "Brown Shearling",
          imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
          price: 600,
          sizes: ["S", "M", "L"],
          quantity: 20,
          materialType: "Leather",
          color: ["Brown", "Tan", "Grey"],
          suggestedItem: [25, 29],
          description:
            "Stay cozy and stylish with the Brown Shearling jacket. Crafted from leather, this jacket features a shearling lining for added warmth. The brown, tan, and cream colors make it a versatile choice for winter.",
        },
        {
          id: 29,
          name: "Windbreaker",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8cGLSDHCIGSad7mlq9TX2Qb48bh13kmUZA&usqp=CAU",
          price: 550,
          sizes: ["S", "M", "L"],
          quantity: 55,
          materialType: "Polyester",
          color: ["Black", "White", "Blue"],
          suggestedItem: [23, 24],
          description:
            "Brave the elements with the Windbreaker. The polyester material provides protection from the wind, and the versatile black, red, and blue colors make it a practical and stylish choice.",
        },
        {
          id: 30,
          name: "Wool Peacoat",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63R62--TsCAoHNorxa6-iuVG_j5A5OJwIOA&usqp=CAU",
          price: 750,
          sizes: ["S", "M", "L"],
          quantity: 60,
          materialType: "Wool",
          color: ["Charcoal Gray", "Navy Blue", "Oily"],
          suggestedItem: [21, 28],
          description:
            "Stay warm and sophisticated with the Wool Peacoat. Crafted from premium wool, this peacoat features a classic design. The charcoal gray, navy blue, and burgundy colors add a refined touch to your winter wardrobe.",
        },
      ],
    },
  
    {
      title: "Women-Jackets",
      items: [
        {
          id: 25,
          name: "Trench Coat",
          imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
          price: 550,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Wool Blend",
          color: ["Brown", "Beige", "Black"],
          suggestedItem: [10],
          description:
            "Make a statement with the Trench Coat. Crafted from a luxurious wool blend, this coat exudes sophistication. The brown, beige, and black colors add a timeless and elegant touch.",
        },
        {
          id: 26,
          name: "Grey Jean Jacket",
          imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
          price: 360,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Nylon",
          color: ["Grey", "Black", "White"],
          suggestedItem: [5],
          description:
            "Elevate your casual look with the Grey Jean Jacket. The nylon material provides a lightweight feel, and the grey, black, and white colors offer a versatile and modern aesthetic.",
        },
        {
          id: 104,
          name: "Biker Leather Jacket",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhfKrFHUiR_J7DqpN8R-k6aGhIfp8p9CQQQ&usqp=CAU",
          price: 480,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Leather",
          color: ["Black", "Brown", "Tan"],
          suggestedItem: [10],
          description:
            "Add a touch of edge to your wardrobe with the Biker Leather Jacket. Crafted from high-quality leather, this jacket features a stylish design that complements both casual and chic looks. The black, brown, and tan colors provide a versatile and trendy appearance.",
        },
        {
          id: 105,
          name: "Quilted Winter Coat",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3a2lUCOPmKUVgrRDI_ke1BdahWMUUwEIveg&usqp=CAU",
          price: 620,
          sizes: ["S", "M", "L"],
          quantity: 20,
          materialType: "Polyester Blend",
          color: ["Navy Blue", "Burgundy", "Olive Green"],
          suggestedItem: [2],
          description:
            "Stay warm and stylish during the winter months with the Quilted Winter Coat. Made from a cozy polyester blend, this coat features a quilted design that adds a touch of elegance. The navy blue, burgundy, and olive green colors make it a fashionable choice for colder days.",
        },
      ],
    },
  
    {
      title: "Women",
      items: [
        {
          id: 31,
          name: "Blue Tanktop",
          imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
          price: 150,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Rayon",
          color: ["Blue", "White", "Black"],
          suggestedItem: [32, 36],
          description:
            "Stay cool and casual with the Blue Tanktop. The rayon material provides a lightweight feel, and the versatile blue, white, and black colors make it a staple for your wardrobe.",
        },
        {
          id: 32,
          name: "Tailored Floral",
          imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
          price: 270,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Wool Blend",
          color: ["Floral", "Green", "Pink"],
          suggestedItem: [31, 39],
          description:
            "Add a touch of elegance with the Tailored Floral blouse. The wool blend material ensures warmth, and the floral pattern, green, and pink colors create a feminine and sophisticated look.",
        },
        {
          id: 33,
          name: "Casual Jumpsuit",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkm_RQkBqEdM0phyMiWXizk87frR_FDqK9g&usqp=CAU",
          price: 380,
          sizes: ["S", "M", "L"],
          quantity: 50,
          materialType: "Cotton",
          color: ["Gray", "Navy Blue", "Yellow"],
          suggestedItem: [34, 35],
          description:
            "Embrace comfort and style with the Casual Jumpsuit. Made from soft cotton, this jumpsuit features a relaxed fit. Choose from versatile gray, navy blue, and burgundy colors.",
        },
        {
          id: 34,
          name: "Floral Dress",
          imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
          price: 290,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Polyester",
          color: ["Floral", "Yellow", "Purple"],
          suggestedItem: [33, 37],
          description:
            "Step into spring with the Floral Dress. The polyester material provides a flowy silhouette, and the floral pattern, yellow, and purple colors add a vibrant touch to your wardrobe.",
        },
        {
          id: 35,
          name: "Cropped Hoodie",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlugDM_Xzt6HadQBskCa8yUg2dIWinCthFHw&usqp=CAU",
          price: 300,
          sizes: ["S", "M", "L"],
          quantity: 55,
          materialType: "Fleece",
          color: ["Black", "Gray", "Blue"],
          suggestedItem: [33, 40],
          description:
            "Stay cozy and stylish with the Cropped Hoodie. The fleece material provides warmth, and the black, gray, and pink colors offer a trendy and casual look.",
        },
        {
          id: 36,
          name: "Casual Dress",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04F0orBqd1cMx_R_vcbVsQsGRbVhVI4hPdw&usqp=CAU",
          price: 310,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Cotton",
          color: ["White dotted", "Blue", "Black dotted"],
          suggestedItem: [31, 38],
          description:
            "Elevate your feminine style with the Ruffled Skirt. The cotton material ensures comfort, and the white, blue, and red colors add a playful and flirty touch.",
        },
        {
          id: 37,
          name: "Red Dots Dress",
          imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
          price: 320,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Denim",
          color: ["Red", "White", "Navy Blue"],
          suggestedItem: [34, 39],
          description:
            "Make a statement with the Red Dots Dress. The denim material provides a classic look, and the red, white, and navy blue colors create a timeless and charming ensemble.",
        },
        {
          id: 38,
          name: "Flowy Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqDZ_NN2eVo7jBdHtsqirUHWdeGd3LSRJmw&usqp=CAU",
          price: 230,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Chiffon",
          color: ["Pink", "Baige", "Yellow"],
          suggestedItem: [36, 40],
          description:
            "Stay elegant and breezy with the Flowy Blouse. Crafted from chiffon, this blouse features a flowy silhouette. Choose from the pink, black, and yellow colors for a chic and versatile look.",
        },
        {
          id: 39,
          name: "Striped Sweater",
          imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
          price: 240,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Polyester Blend",
          color: ["Striped", "Gray", "Burgundy"],
          suggestedItem: [37, 35],
          description:
            "Add a touch of sophistication with the Striped Sweater. The polyester blend material ensures comfort, and the striped pattern, gray, and burgundy colors create a stylish and cozy look.",
        },
        {
          id: 40,
          name: "Yellow Track Suit",
          imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
          price: 220,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Faux Leather",
          color: ["Yellow", "Black", "White"],
          suggestedItem: [36, 39],
          description:
            "Achieve a sporty and chic look with the Yellow Track Suit. The faux leather material adds an edgy touch, and the yellow, black, and white colors offer a bold and trendy ensemble.",
        },
      ],
    },
    {
      title: "Men",
      items: [
        {
          id: 41,
          name: "Camo Down Vest",
          imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
          price: 750,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Nylon",
          color: ["Camo", "Green", "Brown"],
          suggestedItem: [42, 45],
          description:
            "Stay warm and stylish with the Camo Down Vest. The nylon material provides insulation, and the camo pattern, green, and brown colors add a touch of outdoor-inspired fashion.",
        },
        {
          id: 42,
          name: "Black Classic Suit",
          imageUrl:
            "https://image.similarpng.com/very-thumbnail/2020/12/Classic-black-suit-isolated-on-transparent-background-PNG.png",
          price: 1600,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Cotton",
          color: ["Black", "White", "Gray"],
          suggestedItem: [41, 46],
          description:
            "Achieve a timeless and sophisticated look with the Black Classic Suit. The cotton material ensures comfort, and the black, white, and gray colors create a versatile ensemble for any formal occasion.",
        },
        {
          id: 43,
          name: "Black & White Longsleeve",
          imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
          price: 450,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Flannel",
          color: ["Black", "White", "Gray"],
          suggestedItem: [42, 47],
          description:
            "Elevate your casual style with the Black & White Longsleeve. The flannel material provides warmth, and the black, white, and gray colors create a classic and versatile look.",
        },
        {
          id: 44,
          name: "Jean Long Sleeve",
          imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
          price: 400,
          sizes: ["S", "M", "L"],
          quantity: 50,
          materialType: "Canvas",
          color: ["Blue", "White", "Brown"],
          suggestedItem: [43, 48],
          description:
            "Add a touch of casual elegance with the Jean Long Sleeve. The canvas material ensures a comfortable fit, and the blue, white, and brown colors offer a laid-back and stylish option.",
        },
        {
          id: 45,
          name: "Navy Blue Business Suit",
          imageUrl:
            "https://media.istockphoto.com/id/493249726/photo/young-employer.jpg?s=612x612&w=0&k=20&c=CPEsxGK-vgrnt7h-iOKHSi_i7PuZt_AhnbL0gaWZqhI=",
          price: 1750,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Cotton Blend",
          color: ["Navy Blue", "White", "Black"],
          suggestedItem: [44, 49],
          description:
            "Achieve a professional and polished look with the Navy Blue Business Suit. The cotton blend material ensures a breathable feel, and the navy blue, white, and black colors create a classic ensemble for the office.",
        },
        {
          id: 46,
          name: "Gray Formal Suit",
          imageUrl:
            "https://media.istockphoto.com/id/185287060/photo/smiling-middle-age-man-with-gray-suit-coat.jpg?s=612x612&w=0&k=20&c=n1KFFE0fQG4NRtFyN7zFyFMv_IQ06SgHqUibbFOIBYw=",
          price: 1800,
          sizes: ["S", "M", "L"],
          quantity: 60,
          materialType: "Cotton",
          color: ["Gray", "Black", "White"],
          suggestedItem: [45, 50],
          description:
            "Step into formal occasions with the Gray Formal Suit. The cotton material provides a comfortable fit, and the gray, black, and white colors create a sophisticated and modern look.",
        },
        {
          id: 47,
          name: "Charcoal Gray Suit",
          imageUrl:
            "https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-suit-dark-gray-suit-black-tie-png-image_6677095.png",
          price: 1850,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Denim",
          color: ["Charcoal Gray", "Black", "Blue"],
          suggestedItem: [46, 41],
          description:
            "Make a bold statement with the Charcoal Gray Suit. The denim material adds an edgy touch, and the charcoal gray, black, and blue colors create a standout ensemble for special events.",
        },
        {
          id: 48,
          name: "Dark Brown Suit",
          imageUrl:
            "https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/613997/2022_AW__X2A4477-copia_small.png",
          price: 1900,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Wool Blend",
          color: ["Dark Brown", "Tan", "Black"],
          suggestedItem: [47, 42],
          description:
            "Elevate your style with the Dark Brown Suit. The wool blend material provides a luxurious feel, and the dark brown, tan, and black colors create a refined and timeless ensemble.",
        },
        {
          id: 49,
          name: "White Office Suit",
          imageUrl:
            "https://png.pngtree.com/png-clipart/20230425/original/pngtree-white-formal-suit-png-image_9100285.png",
          price: 1950,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Technical Fabric",
          color: ["White", "Gray", "Blue"],
          suggestedItem: [48, 43],
          description:
            "Achieve a modern and sleek look with the White Office Suit. The technical fabric ensures a structured silhouette, and the white, gray, and blue colors create a sophisticated ensemble for professional settings.",
        },
        {
          id: 50,
          name: "Emerald Green Suit",
          imageUrl:
            "https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/224977/2021_SS_278A0128-1_small.png",
          price: 2000,
          sizes: ["S", "M", "L"],
          quantity: 55,
          materialType: "Cotton",
          color: ["Emerald Green", "Black", "White"],
          suggestedItem: [49, 44],
          description:
            "Make a bold fashion statement with the Emerald Green Suit. The cotton material offers a comfortable fit, and the emerald green, black, and white colors create a vibrant and eye-catching ensemble.",
        },
      ],
    },
    {
      title: "Shirts",
      items: [
        {
          id: 51,
          name: "Button-Up Shirt",
          imageUrl:
            "https://freepngimg.com/thumb/dress_shirt/9-2-dress-shirt-png-image.png",
          price: 250,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Cotton",
          color: ["White", "Blue", "Gray"],
          suggestedItem: [52, 54],
          description:
            "Achieve a polished and versatile look with the Button-Up Shirt. The cotton material ensures comfort, and the white, blue, and gray colors create a timeless ensemble suitable for various occasions.",
        },
        {
          id: 52,
          name: "Oxford Dress Shirt",
          imageUrl:
            "https://e7.pngegg.com/pngimages/177/365/png-clipart-dress-shirt-oxford-blouse-uniform-dress-shirt-blue-white.png",
          price: 260,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Cotton Blend",
          color: ["Blue", "White", "Black"],
          suggestedItem: [51, 55],
          description:
            "Elevate your formal wardrobe with the Oxford Dress Shirt. The cotton blend material offers a sophisticated feel, and the blue, white, and black colors create a classic and refined look.",
        },
        {
          id: 53,
          name: "Flannel Plaid Shirt",
          imageUrl:
            "https://w7.pngwing.com/pngs/82/883/png-transparent-flannel-t-shirt-check-tartan-t-shirt-textile-tartan-top-thumbnail.png",
          price: 245,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Flannel",
          color: ["Plaid", "Red", "Blue"],
          suggestedItem: [54, 56],
          description:
            "Stay cozy and stylish with the Flannel Plaid Shirt. The flannel material provides warmth, and the plaid, red, and blue colors create a trendy and comfortable ensemble.",
        },
        {
          id: 54,
          name: "Chambray Shirt",
          imageUrl:
            "https://w7.pngwing.com/pngs/723/938/png-transparent-t-shirt-denim-jeans-sleeve-women-s-jeans-blue-women-accessories-indian-nude-women.png",
          price: 255,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Cotton",
          color: ["Blue", "Denim", "White"],
          suggestedItem: [53, 57],
          description:
            "Add a touch of casual elegance with the Chambray Shirt. The cotton material ensures a comfortable fit, and the blue, denim, and white colors offer a laid-back and stylish option.",
        },
        {
          id: 55,
          name: "Denim Pink Shirt",
          imageUrl:
            "https://image.similarpng.com/very-thumbnail/2022/06/Pink-shirt-for-men-on-transparent-background-PNG.png",
          price: 270,
          sizes: ["S", "M", "L"],
          quantity: 50,
          materialType: "Denim",
          color: ["Pink", "Denim", "White"],
          suggestedItem: [56, 58],
          description:
            "Make a bold fashion statement with the Denim Pink Shirt. The denim material offers a comfortable fit, and the pink, denim, and white colors create a vibrant and eye-catching ensemble.",
        },
        {
          id: 56,
          name: "Silk Fuchsia Button-Down",
          imageUrl:
            "https://5.imimg.com/data5/IG/QO/MY-6827188/dennis-morton-men-27s-fuschia-party-half-sleeve-art-silk-shirt-500x500.png",
          price: 280,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Silk",
          color: ["Fuchsia", "Pink", "Purple"],
          suggestedItem: [57, 59],
          description:
            "Add a touch of luxury with the Silk Fuchsia Button-Down. The silk material provides a smooth and refined feel, and the fuchsia, pink, and purple colors create an elegant and sophisticated ensemble.",
        },
        {
          id: 57,
          name: "Printed Hawaiian Shirt",
          imageUrl:
            "https://w7.pngwing.com/pngs/880/1013/png-transparent-hawaiian-aloha-shirt-sleeve-shirt-tshirt-white-textile-thumbnail.png",
          price: 240,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Rayon",
          color: ["Printed", "Blue", "Green"],
          suggestedItem: [58, 60],
          description:
            "Embrace a laid-back style with the Printed Hawaiian Shirt. The rayon material offers a breathable feel, and the printed, blue, and green colors create a relaxed and tropical-inspired look.",
        },
        {
          id: 58,
          name: "Polo Shirt",
          imageUrl:
            "https://w7.pngwing.com/pngs/365/863/png-transparent-dress-shirt-t-shirt-collar-sleeve-button-dress-shirt-tshirt-barnes-noble-tshirt.png",
          price: 35,
          sizes: ["S", "M", "L"],
          quantity: 55,
          materialType: "Cotton",
          color: ["White", "Black", "Gray"],
          suggestedItem: [59, 51],
          description:
            "Stay casual and comfortable with the Polo Shirt. The cotton material ensures a soft and breathable fit, and the white, black, and gray colors create a versatile and sporty ensemble.",
        },
        {
          id: 59,
          name: "Striped Linen Shirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqHn-2TYAwNwMYJCdBWru9RIRMHK0qERbDw&usqp=CAU",
          price: 265,
          sizes: ["S", "M", "L"],
          quantity: 60,
          materialType: "Linen",
          color: ["Striped", "Blue", "Beige"],
          suggestedItem: [60, 52],
          description:
            "Elevate your summer wardrobe with the Striped Linen Shirt. The linen material offers a lightweight and breezy feel, and the striped, blue, and beige colors create a stylish and relaxed ensemble.",
        },
        {
          id: 60,
          name: "Classic White Shirt",
          imageUrl:
            "https://2.imimg.com/data2/UT/WB/MY-4067155/formal-shirts-500x500.jpg",
          price: 250,
          sizes: ["S", "M", "L"],
          quantity: 20,
          materialType: "Cotton",
          color: ["White", "Black", "Gray"],
          suggestedItem: [51, 53],
          description:
            "Achieve a clean and sophisticated look with the Classic White Shirt. The cotton material ensures a crisp and comfortable fit, and the white, black, and gray colors create a timeless ensemble suitable for various occasions.",
        },
      ],
    },
    {
      title: "T-Shirts",
      items: [
        {
          id: 61,
          name: "Graphic Tee",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXskIF__-DzhTxjRqLyT3kuYvGdAk03-681w&usqp=CAU",
          price: 200,
          sizes: ["S", "M", "L"],
          quantity: 35,
          materialType: "Cotton",
          color: ["Black", "White", "Blue"],
          suggestedItem: [67, 69],
          description:
            "Express yourself with our Graphic Tee. Made from soft cotton, this tee features unique graphics to add a touch of personality to your casual style. Whether you're heading out with friends or running errands, this tee is a perfect choice for a laid-back yet trendy look.",
        },
        {
          id: 62,
          name: "Vintage Logo T-Shirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpO00CFRCw5wVIS1D-7dOSmsqp0zRtSyRNXQ&usqp=CAU",
          price: 220,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Cotton Blend",
          color: ["Gray", "Navy Blue", "White"],
          suggestedItem: [64, 66],
          description:
            "Bring a vintage vibe to your wardrobe with our Vintage Logo T-Shirt. The cotton blend material offers a comfortable fit, while the classic logo adds retro charm. Whether you're pairing it with jeans or layering it under a jacket, this tee is a versatile addition to your casual wardrobe.",
        },
        {
          id: 63,
          name: "Striped Pocket Tee",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9GzSGIGit0DKldwtxjCl9lUPkZ66irsJjw&usqp=CAU",
          price: 230,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Jersey",
          color: ["Blue", "Green", "Yellow"],
          suggestedItem: [61, 68],
          description:
            "Upgrade your casual look with our Striped Pocket Tee. The jersey fabric and striped pattern make it a versatile choice for everyday wear. The chest pocket adds a stylish detail, and the comfortable fit ensures all-day comfort. Pair it with shorts or jeans for a laid-back and on-trend ensemble.",
        },
        {
          id: 64,
          name: "Plain V-Neck Shirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rKYDdTZL8dHilJgMaqz95lM_QSFVrJ-h6w&usqp=CAU",
          price: 140,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Cotton",
          color: ["White", "Black", "Pink"],
          suggestedItem: [62, 65],
          description:
            "Keep it simple and stylish with our Plain V-Neck Shirt. The soft cotton fabric and classic V-neck design make it a must-have for your wardrobe. Whether you're dressing it up with a blazer or keeping it casual with jeans, this versatile tee is a go-to choice for various occasions.",
        },
        {
          id: 65,
          name: "Long Sleeve Henley",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47ktIoCC0F8_n7L8wLBWTKk1hhPLaAeBHaQ&usqp=CAU",
          price: 250,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Cotton",
          color: ["Navy Blue", "Gray", " Black"],
          suggestedItem: [66, 69],
          description:
            "Stay cozy and casual in our Long Sleeve Henley. The cotton material and buttoned neckline add a touch of sophistication to your laid-back style. Perfect for cooler days, this long sleeve tee can be layered or worn on its own for a versatile and comfortable look.",
        },
        {
          id: 66,
          name: "Pocket Crewneck Tee",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKI8VLnk6AsQKhYcYHmd1XPTIQKT9LMiWPQ&usqp=CAU",
          price: 200,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Jersey",
          color: ["Baby blue", "Brown", "White"],
          suggestedItem: [63, 67],
          description:
            "Upgrade your basics with our Pocket Crewneck Tee. The jersey fabric and chest pocket detail make it a versatile and stylish addition to your collection. Pair it with chinos for a polished look or keep it casual with your favorite denim.",
        },
        {
          id: 67,
          name: "Retro Ringer T-Shirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JS0DFkJjmyvRmLFORZC6nNagL19D3in8eA&usqp=CAU",
          price: 270,
          sizes: ["S", "M", "L"],
          quantity: 50,
          materialType: "Cotton Blend",
          color: ["Red", "White", "Gray"],
          suggestedItem: [68, 70],
          description:
            "Bring a touch of retro style to your wardrobe with our Retro Ringer T-Shirt. The cotton blend material and contrasting neckline create a vintage-inspired look. Whether you're a fan of nostalgia or just love unique fashion, this tee is sure to make a statement.",
        },
        {
          id: 68,
          name: "Tie-Dye Shirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauVSRCsAJTRqV9nqBI27jztdGpWrtLD9jBw&usqp=CAU",
          price: 200,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Cotton",
          color: ["Cocktail", "Die colors"],
          suggestedItem: [61, 69],
          description:
            "Add a pop of color to your outfit with our Tie-Dye Shirt. The unique tie-dye pattern and comfortable cotton fabric make it a standout piece for casual occasions. Each shirt is unique, making it a fun and expressive choice for those who love to stand out in the crowd.",
        },
        {
          id: 69,
          name: "Graphic Long Sleeve Tee",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVZ4WSeOV967WylTZbZ7uYEQTs4Hojfat_g&usqp=CAU",
          price: 250,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Cotton",
          color: ["Black", "White", "Blue"],
          suggestedItem: [64, 66],
          description:
            "Make a statement with our Graphic Long Sleeve Tee. The unique graphics and long sleeves add an edgy touch to your streetwear-inspired look. Crafted from soft cotton, this tee ensures both style and comfort for those who like to showcase their individuality.",
        },
        {
          id: 70,
          name: "Plain Crewneck T-Shirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqPQ-s0b620Cvv8uNvAewv4wVxdN9ccZ6pg&usqp=CAU",
          price: 160,
          sizes: ["S", "M", "L"],
          quantity: 60,
          materialType: "Cotton",
          color: ["White", "Gray", "Yellow"],
          suggestedItem: [61, 68],
          description:
            "Elevate your basics with our Plain Crewneck T-Shirt. The soft cotton fabric and classic crewneck design make it a versatile and comfortable choice for everyday wear. Dress it up with a blazer or keep it casual with jeans, this tee is a wardrobe essential for those who appreciate timeless style.",
        },
      ],
    },
  
    {
      title: "Men-Trousers",
      items: [
        {
          id: 71,
          name: "Slim Fit Pants",
          imageUrl:
            "https://w7.pngwing.com/pngs/84/561/png-transparent-slim-fit-pants-sweatpants-jeans-chino-cloth-jeans-black-abdomen-formal-wear.png",
          price: 250,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Cotton Blend",
          color: ["Black", "Beige"],
          suggestedItem: [78, 75],
          description:
            "Stay stylish and comfortable in our Slim Fit Chinos. The cotton blend material ensures a breathable feel, while the versatile black and beige colors make them a perfect choice for any occasion.",
        },
        {
          id: 73,
          name: "Tailored Suit Trousers",
          imageUrl:
            "https://w7.pngwing.com/pngs/573/83/png-transparent-trousers-formal-wear-suit-trouser-s-waistcoat-waist-trouser-png-transparent-images.png",
          price: 270,
          sizes: ["S", "M"],
          quantity: 35,
          materialType: "Wool Blend",
          color: ["Charcoal Gray", "Navy Blue"],
          suggestedItem: [75, 77],
          description:
            "Elevate your formal look with our Tailored Suit Trousers. Crafted from a luxurious wool blend, these trousers come in sophisticated charcoal gray and navy blue colors, perfect for any special occasion.",
        },
        {
          id: 76,
          name: "Athletic Joggers",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6GSTkvHHw4lHphC4jq9ctdLYXawk1hFxKw&usqp=CAU",
          price: 240,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Cotton Blend",
          color: ["Navy Blue", "Heather Gray"],
          suggestedItem: [74, 77],
          description:
            "Stay active and comfortable in our Athletic Joggers. Made from a soft cotton blend, these joggers come in navy blue and heather gray colors, perfect for your active lifestyle.",
        },
        {
          id: 77,
          name: "Corduroy Pants",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_HDNeC-RvS4uCAFu6x1mlZc68Fodz5CKyA&usqp=CAU",
          price: 238,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Corduroy",
          color: ["Brown", "Olive Green"],
          suggestedItem: [73, 75],
          description:
            "Add a touch of texture to your wardrobe with our Corduroy Pants. The corduroy fabric provides a classic look, and the brown and olive green colors offer a versatile and stylish option.",
        },
        {
          id: 78,
          name: "High-Waisted Trousers",
          imageUrl:
            "https://w7.pngwing.com/pngs/562/931/png-transparent-cargo-pants-khaki-pocket-pant-zipper-waist-trousers-thumbnail.png",
          price: 248,
          sizes: ["M", "L"],
          quantity: 55,
          materialType: "Polyester Blend",
          color: ["Burgundy", " White"],
          suggestedItem: [71, 79],
          description:
            "Achieve a sophisticated look with our High-Waisted Trousers. The polyester blend material ensures a polished appearance, and the burgundy and navy blue colors add a touch of elegance to your ensemble.",
        },
        {
          id: 79,
          name: "Casual Sweatpants",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtiR0TFXVUtXLqXvR_FaBSVuLJNeLBPNe2939coMoivBX4J_PGlGxe6Qh6ij2U6G0riE&usqp=CAU",
          price: 230,
          sizes: ["S", "M"],
          quantity: 20,
          materialType: "Fleece",
          color: ["Heather Gray", " Black"],
          suggestedItem: [80, 74],
          description:
            "Relax in style with our Casual Sweatpants. The fleece material provides warmth and comfort, while the heather gray and navy blue colors make these sweatpants a versatile addition to your casual wardrobe.",
        },
        {
          id: 80,
          name: "Classic Khaki Pants",
          imageUrl:
            "https://w7.pngwing.com/pngs/621/646/png-transparent-khaki-pants-pocket-m-men-s-trousers.png",
          price: 242,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Cotton",
          color: ["Khaki", "Olive Green"],
          suggestedItem: [72, 76],
          description:
            "Timeless and versatile, our Classic Khaki Pants are a wardrobe essential. Made from breathable cotton, these pants come in khaki and olive green colors, perfect for a smart-casual look.",
        },
      ],
    },
  
    {
      title: "Women-Trousers",
      items: [
        {
          id: 72,
          name: "Cargo Pants",
          imageUrl:
            "https://w7.pngwing.com/pngs/811/529/png-transparent-cargo-pants-el-fuego-shorts-khaki-beige-cargo-ankle-danish-krone.png",
          price: 245,
          sizes: ["M", "L"],
          quantity: 30,
          materialType: "Canvas",
          color: ["Olive Green", "Beige"],
          suggestedItem: [80, 74],
          description:
            "Explore the outdoors in our Cargo Pants. Made with durable canvas, these pants feature multiple pockets for added convenience. Available in stylish olive green and khaki colors.",
        },
        {
          id: 74,
          name: "Skinny Jeans",
          imageUrl:
            "https://w7.pngwing.com/pngs/123/556/png-transparent-jeans-denim-waist-leggings-jeans-blue-electric-blue-trousers.png",
          price: 255,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Denim",
          color: ["Dark Blue", "Black"],
          suggestedItem: [76, 78],
          description:
            "Make a fashion statement with our Skinny Jeans. The denim material provides a comfortable fit, while the dark blue and black colors add a touch of edge to your casual wardrobe.",
        },
        {
          id: 75,
          name: "Wide-Leg Trousers",
          imageUrl:
            "https://png.pngtree.com/element_our/20190602/ourmid/pngtree-black-wide-leg-pants-dress-illustration-image_1405181.jpg",
          price: 260,
          sizes: ["S", "M", "L"],
          quantity: 50,
          materialType: "Polyester",
          color: ["Gray", "Burgundy"],
          suggestedItem: [71, 79],
          description:
            "Step out in style with our Wide-Leg Trousers. The polyester fabric gives these trousers a flowy silhouette, and the versatile gray and burgundy colors make them a chic choice for any occasion.",
        },
      ],
    },
  
    {
      title: "Skirts",
      items: [
        {
          id: 81,
          name: "A-Line Midi Skirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrY_axuqjLnb3YZvDObJdrZCk2dgp32KIRw&usqp=CAU",
          price: 235,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Cotton",
          colors: ["Pink", "Burgundy", "Olive"],
          description:
            "Elevate your feminine style with our A-Line Midi Skirt. Crafted from soft cotton, this skirt features a flattering silhouette that falls elegantly at mid-calf. Perfect for both casual and dressy occasions.",
          suggestedItems: [82, 84],
        },
        {
          id: 82,
          name: "Pleated Maxi Skirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4znXBILyRIoe2IMFAdCa2ZMcbERYJwvBlg&usqp=CAU",
          price: 240,
          sizes: ["M", "L"],
          quantity: 35,
          materialType: "Polyester",
          colors: ["Black", "Blush Pink", "Emerald Green"],
          description:
            "Make a statement with our Pleated Maxi Skirt. The flowing polyester fabric and elegant pleats create a chic and sophisticated look. Ideal for adding a touch of glamour to your wardrobe.",
          suggestedItems: [83, 85],
        },
        {
          id: 83,
          name: "Denim Mini Skirt",
          imageUrl:
            "https://c0.klipartz.com/pngpicture/837/354/sticker-png-denim-skirt-jeans-clothing-miniskirt-jeans-blue-fashion-woman-electric-blue-thigh.png",
          price: 228,
          sizes: ["S", "M"],
          quantity: 25,
          materialType: "Denim",
          colors: ["Blue", "Light Wash", "Charcoal"],
          description:
            "Keep it casual and cool in our Denim Mini Skirt. Crafted from durable denim, this skirt features a mini length for a trendy and laid-back vibe. Pair it with your favorite sneakers for a relaxed look.",
          suggestedItems: [86, 88],
        },
        {
          id: 84,
          name: "Wrap Front Skirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Cqrm1Dk9dqQSCuDpoXLxRvx7pkAizIoH4g&usqp=CAU",
          price: 232,
          sizes: ["S", "L"],
          quantity: 40,
          materialType: "Rayon",
          colors: ["Baby blue", "Mustard Yellow", "Navy Floral"],
          description:
            "Flatter your figure with our Wrap Front Skirt. The lightweight rayon fabric and wrap-around design add a touch of elegance to your ensemble. Perfect for a day at the office or a night out.",
          suggestedItems: [87, 89],
        },
        {
          id: 85,
          name: "Printed Pleated Skirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJlVb6zrK7j0XKNGjMsRXl8Jlgg_Gb7MV2A&usqp=CAU",
          price: 238,
          sizes: ["M", "L"],
          quantity: 45,
          materialType: "Chiffon",
          colors: ["Floral Print", "Polka Dot", "Silver"],
          description:
            "Express your unique style with our Printed Pleated Skirt. The chiffon material and playful prints create a whimsical and feminine look. A versatile piece that transitions seamlessly from day to night.",
          suggestedItems: [83, 86],
        },
        {
          id: 86,
          name: "Pencil Skirt",
          imageUrl:
            "https://e7.pngegg.com/pngimages/117/30/png-clipart-pencil-skirt-blue-dress-white-pencil-skirt-zipper-blue-thumbnail.png",
          price: 230,
          sizes: ["S", "M"],
          quantity: 50,
          materialType: "Cotton Blend",
          colors: ["Black", "Gray", "Burgundy"],
          description:
            "Achieve a polished and professional look with our Pencil Skirt. The cotton blend material provides comfort, while the sleek pencil silhouette adds a touch of sophistication. A wardrobe essential for the modern woman.",
          suggestedItems: [89, 87],
        },
        {
          id: 87,
          name: "Floral Midi Skirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHq7Mi-bIN8rmhivo97z682u7MZIqvANuSg&usqp=CAU",
          price: 242,
          sizes: ["S", "L"],
          quantity: 55,
          materialType: "Viscose",
          colors: ["Floral Print", "Navy", "White"],
          description:
            "Step into spring with our Floral Midi Skirt. The viscose fabric and vibrant floral prints create a fresh and feminine aesthetic. Perfect for adding a pop of color to your seasonal wardrobe.",
          suggestedItems: [88, 84],
        },
        {
          id: 88,
          name: "Tiered Ruffle Skirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuhca70WRpED1BH8Ou4uyfze7rUtXOcqU0g&usqp=CAU",
          price: 236,
          sizes: ["M", "L"],
          quantity: 20,
          materialType: "Polyester",
          colors: ["Pink", "Lilac", "Black"],
          description:
            "Make a statement with our Tiered Ruffle Skirt. The tiered design and polyester material add a playful and trendy vibe to your outfit. Ideal for a fun and stylish look.",
          suggestedItems: [82, 83],
        },
        {
          id: 89,
          name: "Satin Slip Skirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotvXK8GicopOofPJ9mr5rson7e9UlvgbDkg&usqp=CAU",
          price: 245,
          sizes: ["S", "M"],
          quantity: 60,
          materialType: "Satin",
          colors: ["Champagne", "Emerald Green", "White"],
          description:
            "Dress up your evening look with our Satin Slip Skirt. The luxurious satin material drapes beautifully, creating a sleek and sophisticated silhouette. A must-have for a touch of glamour.",
          suggestedItems: [85, 86],
        },
        {
          id: 90,
          name: "Knit Pencil Skirt",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgRglzV1-M0e5DdQv7pb3BS5KMXuffZUdeQ&usqp=CAU",
          price: 233,
          sizes: ["S", "L"],
          quantity: 35,
          materialType: "Knit",
          colors: ["Charcoal", "Burgundy", "Violette"],
          description:
            "Stay cozy and stylish with our Knit Pencil Skirt. The knit fabric provides warmth, while the pencil silhouette offers a chic and modern aesthetic. Perfect for a comfortable yet fashionable look.",
          suggestedItems: [83, 87],
        },
      ],
    },
    {
      title: "Blouses",
      items: [
        {
          id: 91,
          name: "Silk Blouse",
          imageUrl:
            "https://i.pinimg.com/originals/5a/80/89/5a80895a873bef74c05e5d36e2862cac.png",
          price: 230,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Silk",
          description:
            "Elevate your wardrobe with our luxurious Silk Blouse. Crafted from high-quality silk, this blouse offers a silky-smooth feel and a touch of sophistication. Perfect for special occasions or adding a touch of glamour to your everyday look.",
          colors: ["Ivory", "Blue", "Navy"],
          suggestedItems: [92, 95],
        },
        {
          id: 92,
          name: "Ruffle Sleeve Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_3AdNBCB1yI-UU5JGMA9OOhRIuncTaY-Kw&usqp=CAU",
          price: 245,
          sizes: ["M", "L"],
          quantity: 30,
          materialType: "Polyester",
          description:
            "Make a statement with our Ruffle Sleeve Blouse. Featuring stylish ruffle details, this blouse adds a playful and feminine touch to your outfit. The lightweight polyester material ensures comfort and breathability.",
          colors: ["Pink", "Teal", "Burgundy"],
          suggestedItems: [91, 96],
        },
        {
          id: 93,
          name: "Lace Trim Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2H4u9mcKYQkZgvkWPnnGkzT34AH8QjN9nLw&usqp=CAU",
          price: 260,
          sizes: ["S", "M"],
          quantity: 35,
          materialType: "Cotton Blend",
          description:
            "Achieve a charming and timeless look with our Lace Trim Blouse. The cotton blend material provides comfort, while the delicate lace trim adds a touch of romance. Ideal for both casual and dressy occasions.",
          colors: ["White", "Light Blue", "Black"],
          suggestedItems: [94, 98],
        },
        {
          id: 94,
          name: "Off-Shoulder Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_bOLSsUJ6OKK66L_JJh003EdFSmLBinsxw&usqp=CAU",
          price: 270,
          sizes: ["S", "M", "L"],
          quantity: 25,
          materialType: "Viscose",
          description:
            "Show off your shoulders with our Off-Shoulder Blouse. The viscose material offers a flattering drape, and the off-shoulder design adds a hint of allure. Perfect for a night out or a stylish day look.",
          colors: ["Black", "Red", "Royal Blue"],
          suggestedItems: [93, 97],
        },
        {
          id: 95,
          name: "Bow Tie Neck Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypdYtsend7CrN9X-m6eb4kNkXEiqM_vndhA&usqp=CAU",
          price: 280,
          sizes: ["M", "L"],
          quantity: 50,
          materialType: "Chiffon",
          description:
            "Enhance your outfit with our Bow Tie Neck Blouse. Made from flowy chiffon, this blouse features a stylish bow tie neck for a sophisticated touch. Versatile and chic, its a must- have for your wardrobe.",
          colors: ["Ivory", "Blush", "Orange"],
          suggestedItems: [91, 96],
        },
        {
          id: 96,
          name: "Printed Peplum Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwd4jHrRqjIUVPc6E2ze0rBI8Szkpel5O8A&usqp=CAU",
          price: 300,
          sizes: ["S", "M", "L"],
          quantity: 45,
          materialType: "Polyester",
          description:
            "Add flair to your look with our Printed Peplum Blouse. The peplum silhouette and vibrant print create a playful and trendy style. Made from high-quality polyester, this blouse ensures both comfort and fashion-forward appeal.",
          colors: ["Floral Print", "Striped", "Abstract"],
          suggestedItems: [92, 95],
        },
        {
          id: 97,
          name: "Embroidered Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QrMg3JmWIq-B3GRBB3L4wWFi4zju1qeZJg&usqp=CAU",
          price: 320,
          sizes: ["S", "M", "L"],
          quantity: 30,
          materialType: "Cotton",
          description:
            "Step into elegance with our Embroidered Blouse. The cotton fabric provides a breathable and comfortable fit, while the intricate embroidery adds a touch of sophistication. Perfect for special occasions or adding a refined touch to your daily attire.",
          colors: ["White", "Pastel Pink", "Navy"],
          suggestedItems: [93, 96],
        },
        {
          id: 98,
          name: "Bell Sleeve Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPADol2oF4htTYnd8Nl3YDtlDspwpDiK3oA&usqp=CAU",
          price: 340,
          sizes: ["M", "L"],
          quantity: 55,
          materialType: "Rayon",
          description:
            "Make a fashion statement with our Bell Sleeve Blouse. Crafted from soft rayon, this blouse features on-trend bell sleeves for a bohemian-inspired look. Versatile and stylish, its a wardrobe essential for those who love a laid- back yet chic style.",
          colors: ["Black", "Mauve", "Olive"],
          suggestedItems: [93, 96],
        },
        {
          id: 99,
          name: "Wrap Front Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jW2KNfzpOyoKfXO-FswEvac1ygPeqecLZA&usqp=CAU",
          price: 360,
          sizes: ["S", "M", "L"],
          quantity: 20,
          materialType: "Polyester Blend",
          description:
            "Achieve a modern and sophisticated look with our Wrap Front Blouse. The polyester blend material provides a comfortable fit, and the wrap front design adds a touch of elegance. Ideal for both casual and dressy occasions.",
          colors: ["Emerald ", " Gray", "Mustard"],
          suggestedItems: [94, 97],
        },
        {
          id: 100,
          name: "Sheer Chiffon Blouse",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zCuzilfzvRfLTTSR_di23R6Y7Z1ck-1Dmw&usqp=CAU",
          price: 400,
          sizes: ["S", "M", "L"],
          quantity: 40,
          materialType: "Chiffon",
          description:
            "Elevate your style with our Sheer Chiffon Blouse. The lightweight and sheer chiffon fabric create an ethereal and romantic look. Perfect for creating a chic and feminine ensemble for any occasion.",
          colors: ["Emerald", "Blush", "Black"],
          suggestedItems: [95, 98],
        },
      ],
    },
  ];
    

export default SHOP_DATA;