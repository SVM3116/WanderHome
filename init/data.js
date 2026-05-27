const data = [
  {
    title: "Silicon Valley Penthouse",
    description: "A luxurious, modern high-rise penthouse featuring panoramic views of the Bengaluru city skyline, a private rooftop deck, and state-of-the-art home automation.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    price: 8500,
    location: "Bengaluru",
    country: "India"
  },
  {
    title: "Royal Palace Heritage Homestay",
    description: "Immerse yourself in history at this beautifully restored heritage home featuring traditional Mysuru architecture, antique rosewood furniture, and a tranquil courtyard garden.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop",
    price: 3800,
    location: "Mysuru",
    country: "India"
  },
  {
    title: "Mist-Clad Coffee Estate Villa",
    description: "A gorgeous private villa nestled deep within a lush coffee plantation in Coorg, offering breathtaking misty morning walks and premium local filter coffee.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    price: 12000,
    location: "Coorg",
    country: "India"
  },
  {
    title: "Mountain Peak Wooden Cabin",
    description: "Perched on a serene hill in Chikmagalur's Western Ghats, this cozy rustic cabin offers stunning panoramic views of tea and coffee valleys.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
    price: 6500,
    location: "Chikmagalur",
    country: "India"
  },
  {
    title: "Cliffside Sunset Beach Resort",
    description: "Overlooking the pristine sands and crashing waves of Gokarna, this beach resort features private beach access and exquisite local seafood dining.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    price: 5500,
    location: "Gokarna",
    country: "India"
  },
  {
    title: "Coconut Grove Beach Cottage",
    description: "A serene beachside cottage in Udupi surrounded by swaying coconut palms, perfect for watching local fishermen and enjoying quiet coastal evenings.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop",
    price: 4500,
    location: "Udupi",
    country: "India"
  },
  {
    title: "Seaside Heritage Mansion",
    description: "Experience coastal elegance in this grand, colonial-style seaside estate in Mangaluru featuring massive arched windows and gorgeous ocean vistas.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    price: 9500,
    location: "Mangaluru",
    country: "India"
  },
  {
    title: "Western Ghats Streamside Eco-Retreat",
    description: "Unwind next to a crystal-clear mountain stream in Sakleshpur in this eco-friendly stay constructed using locally sourced timber and natural stone.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
    price: 5800,
    location: "Sakleshpur",
    country: "India"
  },
  {
    title: "Ancient Ruins Heritage Lodge",
    description: "Step back in time at this uniquely themed lodge, located steps away from the iconic boulder-strewn landscapes and ancient temples of Hampi.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    price: 4200,
    location: "Hampi",
    country: "India"
  },
  {
    title: "Riverfront Safari Lodge",
    description: "A premium safari resort on the banks of the Kabini River, offering direct boat access, amazing wildlife sightings, and luxurious glamping tents.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    price: 18500,
    location: "Kabini",
    country: "India"
  },
  {
    title: "Jog Falls Valley Farmhouse",
    description: "A tranquil farmhouse in Shivamogga surrounded by rich green betel nut plantations, offering breathtaking views of the surrounding valleys and misty hills.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    price: 3200,
    location: "Shivamogga",
    country: "India"
  },
  {
    title: "Kali River Jungle Camp",
    description: "Set in the heart of Dandeli's dense forest, this camp is a haven for adventure lovers, offering whitewater rafting, kayaking, and night jungle safaris.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop",
    price: 4800,
    location: "Dandeli",
    country: "India"
  },
  {
    title: "Portuguese Heritage Villa",
    description: "A beautifully restored 19th-century Portuguese villa in Goa, featuring a private swimming pool, hand-painted tiles, and a lush garden.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    price: 11000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Lake Pichola Luxury Suite",
    description: "Wake up to breathtaking views of the floating Lake Palace from this ultra-luxurious Udaipur haveli suite, featuring hand-crafted Mewari decor.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    price: 15500,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Snowy Peaks Alpine Chalet",
    description: "Enjoy warm hot chocolate by the stone fireplace in this gorgeous pine-wood chalet in Manali with uninterrupted views of the Solang Valley snow peaks.",
    image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1200&auto=format&fit=crop",
    price: 7500,
    location: "Manali",
    country: "India"
  },
  {
    title: "Manhattan Skyline Penthouse",
    description: "A stunning loft apartment in the heart of New York, featuring floor-to-ceiling windows, high-end modern art, and views of the Empire State Building.",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1200&auto=format&fit=crop",
    price: 28000,
    location: "New York",
    country: "United States"
  },
  {
    title: "Malibu Beachside Paradise",
    description: "Step directly onto the warm Malibu sand from this chic, open-concept beach house featuring massive sun decks and a private hot tub.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    price: 35000,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Aspen Ski-In Mountain Chalet",
    description: "A majestic timber lodge in Aspen with high vaulted ceilings, stone fireplace, and absolute ski-in/ski-out convenience for the ultimate winter getaway.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    price: 24000,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Maui Tropical Oceanfront Villa",
    description: "An island paradise home in Maui surrounded by lush gardens, offering a private pool, custom tiki bar, and front-row seats to spectacular Hawaiian sunsets.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    price: 22000,
    location: "Maui",
    country: "United States"
  },
  {
    title: "Banff Alpine Log Cabin",
    description: "A cozy handcrafted log cabin situated at the edge of the Banff woods, offering spectacular views of snow-dusted peaks and wild elk sightings.",
    image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=1200&auto=format&fit=crop",
    price: 14000,
    location: "Banff",
    country: "Canada"
  },
  {
    title: "Vancouver Waterfront Loft",
    description: "Modern glass loft apartment overlooking False Creek, featuring clean minimalist design, bicycle rentals, and close proximity to Stanley Park.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    price: 9500,
    location: "Vancouver",
    country: "Canada"
  },
  {
    title: "Historic Old Quebec Apartment",
    description: "Charming, historic stone apartment in Quebec City with exposed brick walls, vintage furniture, and steps away from beautiful cobblestone streets.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    price: 6200,
    location: "Quebec City",
    country: "Canada"
  },
  {
    title: "Cotswolds Stone Cottage",
    description: "An iconic honey-colored stone cottage covered in climbing ivy, boasting a beautiful English cottage garden and a roaring wood stove.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    price: 11500,
    location: "Cotswolds",
    country: "United Kingdom"
  },
  {
    title: "Soho Elegant Studio Loft",
    description: "A highly stylish and compact industrial studio in London's vibrant Soho district, perfect for city explorers and theatergoers.",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop",
    price: 13000,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Edinburgh Castle View Apartment",
    description: "A stunning Victorian apartment offering uninterrupted views of Edinburgh Castle, featuring historic high ceilings and elegant brass fittings.",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
    price: 9800,
    location: "Edinburgh",
    country: "United Kingdom"
  },
  {
    title: "Parisian Chic Balcony Studio",
    description: "Wake up with a fresh croissant on the classic wrought-iron balcony of this lovely Paris apartment, overlooking a quiet residential boulevard.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
    price: 12000,
    location: "Paris",
    country: "France"
  },
  {
    title: "Provence Lavender Fields Estate",
    description: "A stunning luxury farmhouse surrounded by vast fields of fragrant lavender, featuring a private saltwater pool and outdoor dining terrace.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    price: 21000,
    location: "Provence",
    country: "France"
  },
  {
    title: "Chamonix Luxury Ski Chalet",
    description: "Experience ultimate alpine luxury in this designer chalet featuring panoramic glass walls facing the breathtaking Mont Blanc mountain range.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop",
    price: 26000,
    location: "Chamonix",
    country: "France"
  },
  {
    title: "Amalfi Coast Cliffside Villa",
    description: "A breathtaking Mediterranean villa perched high on a cliff in Positano, featuring terraced lemon groves, an infinity pool, and endless blue sea views.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    price: 32000,
    location: "Positano",
    country: "Italy"
  },
  {
    title: "Tuscan Vineyard Estate",
    description: "A beautiful rustic stone villa set amidst rolling hills and historic Siena vineyards, complete with private wine tastings and home-cooked pasta classes.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
    price: 16500,
    location: "Siena",
    country: "Italy"
  },
  {
    title: "Grand Canal Palazzo Apartment",
    description: "Stay in a beautifully decorated apartment inside an authentic Venetian palazzo, boasting gothic windows opening directly onto the Grand Canal.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    price: 18000,
    location: "Venice",
    country: "Italy"
  },
  {
    title: "Zermatt Matterhorn Peak Chalet",
    description: "Watch the sun paint the majestic peak of the Matterhorn gold from your private outdoor hot tub in this ultra-premium, timber-framed chalet.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    price: 28500,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Interlaken Lakeside Cabin",
    description: "A cozy and charming wooden cabin located on the crystal-clear shores of Lake Brienz, offering complimentary kayaks and majestic mountain vistas.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    price: 11000,
    location: "Interlaken",
    country: "Switzerland"
  },
  {
    title: "Sydney Harbour Luxury Penthouse",
    description: "Enjoy jaw-dropping, unobstructed views of the Sydney Opera House and Harbour Bridge from this sleek, modern penthouse apartment.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?q=80&w=1200&auto=format&fit=crop",
    price: 24500,
    location: "Sydney",
    country: "Australia"
  },
  {
    title: "Byron Bay Boho Beach House",
    description: "Embrace relaxed coastal living in this airy Byron Bay beach house, complete with hanging hammocks, surfboards, and outdoor rain showers.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop",
    price: 13500,
    location: "Byron Bay",
    country: "Australia"
  },
  {
    title: "Kyoto Traditional Machiya Townhouse",
    description: "Stay in a beautifully restored, centuries-old wooden townhouse featuring a private rock garden, tatami mats, and paper shoji screens.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    price: 14500,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Tokyo Futuristic Neon High-Rise",
    description: "A sleek, tech-focused apartment in the heart of Shibuya, offering neon-lit interiors and breathtaking panoramas of the bustling streets below.",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    price: 11000,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Phuket Cliffside Oceanfront Villa",
    description: "A magnificent luxury villa perched on the cliffs of Kamala Beach, featuring an infinity pool that merges seamlessly with the Andaman Sea.",
    image: "https://images.unsplash.com/photo-1475018081319-f111408c7c21?q=80&w=1200&auto=format&fit=crop",
    price: 22500,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Chiang Mai Mountain Sanctuary",
    description: "Relax at this beautiful boutique bamboo resort surrounded by misty jungle hills, organic strawberry farms, and scenic valley trails.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    price: 5500,
    location: "Chiang Mai",
    country: "Thailand"
  },
  {
    title: "Ubud Jungle Bubble Villa",
    description: "Sleep under the stars inside a completely transparent luxury dome surrounded by the wild sounds and vibrant greens of Ubud's jungle valleys.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    price: 12000,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Seminyak Beachside Luxury Villa",
    description: "A contemporary architectural masterpiece featuring private tropical gardens, an 18-meter swimming pool, and dedicated butler service.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    price: 18500,
    location: "Seminyak",
    country: "Indonesia"
  },
  {
    title: "Overwater Sunset Bungalow",
    description: "Wake up to reef sharks and colorful fish swimming right below your glass bedroom floor in this ultra-private overwater Maldivian villa.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop",
    price: 38000,
    location: "Maafushi",
    country: "Maldives"
  },
  {
    title: "Private Island Beachfront Retreat",
    description: "Live your castaway dreams in complete luxury on a secluded stretch of powdery white sand surrounded by a brilliant turquoise lagoon.",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop",
    price: 45000,
    location: "Villingili",
    country: "Maldives"
  },
  {
    title: "Queenstown Lakefront Mountain Lodge",
    description: "An exquisite architectural lodge on the shores of Lake Wakatipu, boasting floor-to-ceiling glass walls capturing the epic Remarkables range.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1200&auto=format&fit=crop",
    price: 21500,
    location: "Queenstown",
    country: "New Zealand"
  },
  {
    title: "Rotorua Forest Eco-Resort",
    description: "Nestled among ancient giant ferns, this beautifully sustainable eco-resort features private geothermally heated pools and serene forest views.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc268266?q=80&w=1200&auto=format&fit=crop",
    price: 12000,
    location: "Rotorua",
    country: "New Zealand"
  },
  {
    title: "Black Forest Timber Cottage",
    description: "A serene and secluded wooden lodge in the heart of the Black Forest, featuring a private pine-scented wood-fired hot tub.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop",
    price: 9500,
    location: "Freiburg",
    country: "Germany"
  },
  {
    title: "Munich Modern Penthouse",
    description: "Sleek and minimalist apartment in Munich’s stylish Glockenbachviertel district, featuring a large private sun terrace and designer furniture.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    price: 12500,
    location: "Munich",
    country: "Germany"
  },
  {
    title: "Barcelona Ramblas Gothic Apartment",
    description: "A beautiful apartment in the heart of the Gothic Quarter with private Juliet balconies overlooking the bustling Ramblas streets.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    price: 10500,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Ibiza Sunset Sea View Villa",
    description: "A luxury white-washed villa offering premium sunset views, a massive infinity-edge pool, and private DJ deck set-up.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    price: 31000,
    location: "Ibiza",
    country: "Spain"
  },
  {
    title: "Mallorca Traditional Finca",
    description: "A restored historic stone finca surrounded by ancient olive groves, offering a private pool, wood-fired bread oven, and complete tranquility.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    price: 18500,
    location: "Mallorca",
    country: "Spain"
  }
];

module.exports = { data : data };
