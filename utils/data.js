import bcrypt from "bcryptjs"


const data = {
    users: [
        {
            name:"Zwelihle",
            email:"zwelihle777@gmail.com",
            password: bcrypt.hashSync("123456789"),
            isAdmin: true
        },
                {
            name:"Zwelihle",
            email:"zwelihleuser777@gmail.com",
            password: bcrypt.hashSync("123456789"),
            isAdmin: false
        },

    ],
  products: [
    {
      name: "Apple MacBook Pro",
      slug: "Apple MacBook Pro M1",
      image: "/images/macbook.png",
      category: "Laptops",
      brand: "Apple",
      price: 48999,
      countInStock: 12,
      description:
        "The MacBook Pro M1 is a high-performance laptop from Apple, which is powered by Apple's own M1 chip, based on ARM architecture. This laptop is available in 13-inch and 16-inch screen size options. It has a Retina display with True Tone technology and a resolution of 2560x1600 pixels. It features 8-core and 10-core CPU options, and up to 32GB of unified memory. It also has integrated graphics and an option for an additional discrete GPU. It has a built-in storage capacity of up to 2TB SSD",
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "Msi Raider GE78",
      slug: "Raider GE78 HX 13V",
      image: "/images/MSI-Raider-GE78.png",
      category: "Laptops",
      brand: "MSI",
      price: 102999,
      countInStock: 9,
      description:
        "MSI Raider GE78HX-13VH Series 13th gen RAIDER GE78HX 13VI-093ZA Black Notebook, Intel Core i9 Raptor Lake 24 Core i9-13980HX Turbo Boost up to 5.6Ghz 36MB L3 Cache Processor, 64GB DDR5-5200 SO-Dimm Memory (2x32GB), Supports 64GB Max Mem, 2 Memory slots, 2TB SSD Solid State Hard Drive PCIe, NO optical drive ( No CD), 17.0″ QHD (2560 x 1440 resolution) Non Gloss Type IPS 240Hz LED Backlit Display, nVidia Geforce RTX 4090 with 16GB dedicated graphics, 802.11ax Wi-Fi 6, 2.5 Gigabit LAN, Bluetooth, Webcam, 4 Cell Battery, Backlit Keyboard, Full Size Keyboard with Numpad, 1x Type-C (USB3.2 Gen2 / DP), 1x Type-C (USB / DP / Thunderbolt 4), 1x Type-C (USB3.2 Gen2 / DP) with PD charging, 1x Type-A USB3.2 Gen1, 1x Type-A USB3.2 Gen2, HDMI output, SD Express Card Reader, 3.1 kg, Microsoft Windows 11 Home 64 bit, 2 Year Carry in warranty",
      rating: 4.5,
      numReviews: 2,
    },
    {
      name: "Acer Aspire 3 Celeron",
      slug: "Acer Aspire 3 Celeron",
      image: "/images/acer_aspire.png",
      category: "Laptops",
      brand: "Acer",
      price: 8299,
      countInStock: 24,
      description:
        "Whether you’re at home, school, or work, get all the performance you need with the latest Intel or AMD Processors1; maintaining order and keeping your apps running consistently and smoothly",
      rating: 1.5,
      numReviews: 7,
    },
    {
      name: "ASUS X515",
      slug: "ASUS X515",
      image: "/images/asus-x515.png",
      category: "Laptops",
      brand: "Asus",
      price: 13130,
      countInStock: 3,
      description:
        "Whether for work or play, ASUS X515 is the entry-level laptop that delivers powerful performance and immersive visuals. Its NanoEdge display boasts wide 178° viewing angles and a matte anti-glare coating for a truly engaging experience. Inside, it's powered by up to an Intel® Core™ i7 processor with 16 GB 2400 MHz RAM, and features NVIDIA® GeForce® MX330. A dual-storage design with up to a 1 TB PCIe® SSD and a 1 TB HDD gives you the perfect combination of large storage capacity and fast data read / write speeds. There's also Intel® Optane™ memory support1 to help speed things up even more",
      rating: 3.5,
      numReviews: 8,
    },
    {
      name: "EcoFlow DELTA MAX",
      slug: "EcoFlow DELTA MAX",
      image: "/images/EcoFlow-DELTA-MAX.png",
      category: "Smart Home",
      brand: "EcoFlow",
      price: 33900,
      countInStock: 13,
      description:
        "The EcoFlow Delta MAX is a portable power station that can be used to charge devices and power appliances. It features a high capacity battery and multiple ports for charging devices, as well as a built-in solar panel for recharging the battery. It is designed for outdoor use, such as camping and off-grid living, and can be used as a backup power source in case of emergencies. It is a powerful and efficient power station which is easy to carry around.",
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "Skullcandy Indy ANC ",
      slug: "INDY™ ANC NOISE CANCELING",
      image: "/images/Skullcandy_Indy_ANC.png",
      category: "Headphones & Headsets",
      brand: "SkullCandy",
      price: 1800,
      countInStock: 16,
      description:
        "Skullcandy Indy ANC Wireless earbuds are a high-quality and feature-rich pair of wireless earbuds. They offer up to 19 hours of battery life, active noise cancelling, and a comfortable and secure fit. The earbuds come with touch controls that are intuitive and easy to use, and they support voice assistants for hands-free control. The sound quality is impressive, with well-balanced bass and clear treble that make them ideal for music lovers. Additionally, they feature noise isolation technology that helps block out external noise, allowing you to fully immerse yourself in your music. The active noise cancelling feature works effectively, reducing background noise and making them perfect for use in noisy environments.",
      rating: 4.5,
      numReviews: 187,
    },

    {
      name: "Apple AirPods Pro",
      slug: "Apple AirPods Pro",
      image: "/images/airpods.png",
      category: "Headphones & Headsets",
      brand: "Apple",
      price: 3999,
      countInStock: 8,
      description:
        "The AirPods Pro are a pair of truly wireless earbuds designed and developed by Apple. They feature active noise cancellation, transparency mode, and a customizable fit with multiple ear tip options. They also have improved sound quality and a new design that is sweat and water resistant. They can be controlled using touch gestures and are compatible with Apple devices running iOS 13 or later, as well as Macs running macOS Catalina or later",
      rating: 4.5,
      numReviews: 200,
    },
    {
      name: "HUAWEI nova 9",
      slug: "HUAWEI nova 9",
      image: "/images/huawei-nova-9.png",
      category: "Cellphones",
      brand: "HUAWEI",
      price: 9299,
      countInStock: 26,
      description:
        "Shine in the Starlight Admire the double-coated finish  of HUAWEI nova 9 as you take hold of the easy-grip ultra-thin, lightweight 175 g body. And get inspired to infinite possibilities via the iconic star orbit ring, which brings even more eye-catching beauty to every moment.View your favourite content and play fast-moving games in seamless flow thanks to the 120 Hz high refresh rate. And for lower frame-rate content, the system automatically switches to 60 Hz, preserving battery life in the process.",
      rating: 2.8,
      numReviews: 2,
    },
    {
      name: "Samsung Galaxy S22 Ultra",
      slug: "Samsung Galaxy S22 Ultra",
      image: "/images/galaxy.png",
      category: "Cellphones",
      brand: "Samsung",
      price: 32000,
      countInStock: 46,
      description:
        "The Samsung Galaxy S22 Ultra is a high-end smartphone with a 6.8-inch Dynamic AMOLED 2X display, a 108MP main camera, 12GB of RAM, and a 5,000mAh battery. It runs on a Snapdragon 888 processor and has a 5G capability. It also features a 120Hz refresh rate, IP68 water and dust resistance and reverse wireless charging. The device also supports an S Pen. It also comes with a 16MP front-facing camera and runs on One UI 3.5 based on Android 11.",
      rating: 4.5,
      numReviews: 239,
    },
    {
      name: "Apple iphone 13 Promax",
      slug: "Apple iphone 13 Promax",
      image: "/images/iphone-13-pro-gold.png",
      category: "Cellphones",
      brand: "Apple",
      price: 37000,
      countInStock: 56,
      description:
        "The iPhone 13 Pro Max is a high-end smartphone from Apple. It features a 6.1-inch Super Retina XDR display, a triple-camera system with 12MP ultra-wide, wide, and telephoto lenses, and 5G capability. It runs on the A15 Bionic chip, has 6GB of RAM, and a built-in storage capacity of up to 1TB. The device also features Face ID, Ceramic Shield front cover, and a LiDAR scanner for improved augmented reality experiences. It also features MagSafe technology for wireless charging and accessories. It runs on iOS 15 and has IP68 rating for water and dust resistance.",
      rating: 4.5,
      numReviews: 487,
    },
    {
      name: "Xbox Series X",
      slug: "Xbox Series X",
      image: "/images/Xbox-Series-X.png",
      category: "Gaming",
      brand: "Microsoft",
      price: 13000,
      countInStock: 36,
      description:
        "The Xbox Series X delivers sensationally smooth frame rates of up to 120FPS with the visual pop of HDR. Immerse yourself with sharper characters, brighter worlds and impossible details with true-to-life 4K. The Seagate Storage Expansion Cards for Xbox Series X|S plug into the back of the console via the dedicated storage expansion port and replicates the console’s custom SSD experience, providing additional game storage at the same performance. (Sold separately, available in various sizes.)",
      rating: 4.5,
      numReviews: 187,
    },
    {
      name: "Samsung Q60A Qled 4K",
      slug: "Samsung 65” Q60A Qled 4K Smart Tv",
      image: "/images/Samsung-QLED-4K.png",
      category: "TV & Home",
      brand: "Samsung",
      price: 27999,
      countInStock: 19,
      description:
        "Innovative backlighting technology delivers bolder and more accurate contrast by optimizing the backlight color tone to match the type of content being watched. Quantum HDR brings out the detail and contrast, so you can experience the full power in every image. Going beyond leading standards, the dynamic tone mapping of HDR10+ creates deeper blacks, more vibrant imagery, and detail that always shines through. Samsung’s powerful processor optimizes sound quality according to the viewing content. In addition, powerful 4K upscaling technology ensures you get up to 4K resolution.",
      rating: 5,
      numReviews: 87,
    },
    {
      name: "MSI GeForce RTX 4090",
      slug: "MSI GeForce RTX 4090",
      image: "/images/MSI-GeForce-RTX-4090.png",
      category: "Gaming",
      brand: "MSI",
      price: 42000,
      countInStock: 6,
      description: "Model Name: GeForce RTX® 4090 GAMING TRIO 24G ",
      rating: 4.5,
      numReviews: 187,
    },

    {
      name: "ROG Swift OLED PG27AQDM",
      slug: "ROG Swift OLED PG27AQDM",
      image: "/images/asus-monitor-two.png",
      category: "Gaming",
      brand: "Asus",
      price: 27800,
      countInStock: 6,
      description:
        "ROG Swift OLED PG27AQDM gaming monitor ― 27-inch (26.5-inch viewable) 1440p OLED panel, 240 Hz, 0.03ms response, G-SYNC® compatible, anti-glare, custom heatsink, intelligent voltage optimization, uniform brightness, DisplayWidget Center, -26.5-inch QHD (2560 x 1440) OLED gaming monitor with 240 Hz refresh rate and 0.03 ms response time for immersive gaming-Two HDMI® 2.0 ports, support for VRR on Xbox Series X and Series S consoles, VRR for PlayStation 5 games that include an unlocked framerate mode-",
      rating: 4.5,
      numReviews: 17,
    },
        {
      name: "Apex pro mini",
      slug: "Steelseries Apex pro mini",
      image: "/images/Apex_pro_mini.png",
      category: "Gaming",
      brand: "SteelSeries",
      price: 5200,
      countInStock: 19,
      description:
        "World's fastest OmniPoint 2.0 adjustable switches with 11x quicker response and 10x swifter actuation.-Customize the sensitivity of every key from a speedy 0.2mm to a deliberate 3.8mm.-Compact 60% form factor with side-printed functions for full-size keyboard functionality-",
      rating: 5,
      numReviews: 149,
    },
  ],
};

export default data;