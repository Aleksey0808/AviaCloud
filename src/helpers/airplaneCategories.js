export const airplaneCategories = [
    {
      id: 1,
      title: "Reconnaissance aircraft",
      img: require('../../assets/images/categoriesAircraft/Reconnaissance.png'),
      airplanes: [
        {
          id: 1,
          title: "Northrop Grumman Global Hawk",
          Type: "Reconnaissance",
          Manufacturer: "Northrop Grumman",
          Role: "Unmanned Aerial Vehicle",
          MaximumSpeed: "400 knots (460 mph)",
          Range: "12,300 nautical miles",
          Armament: "None",
          Engine: "Turbocharged diesel engine",
          ServiceCeiling: "60,000 feet",
          Description: "The Northrop Grumman Global Hawk is an unmanned surveillance aircraft that provides high-altitude, long-endurance intelligence collection."
        },
        // Добавь сюда другие самолеты для этой категории
      ]
    },
    {
      id: 2,
      title: "Training aircraft",
      img: require('../../assets/images/categoriesAircraft/Training.png'),
      airplanes: [
        {
          id: 1,
          title: "Beechcraft T-6 Texan II",
          Type: "Trainer",
          Manufacturer: "Beechcraft",
          Role: "Basic Trainer",
          MaximumSpeed: "320 knots (370 mph)",
          Range: "1,500 nautical miles",
          Armament: "None",
          Engine: "PT6A-68 turboprop",
          ServiceCeiling: "25,000 feet",
          Description: "The Beechcraft T-6 Texan II is a single-engine turboprop military trainer aircraft used for training pilots in the United States Air Force and Navy."
        },
        // Добавь сюда другие самолеты для этой категории
      ]
    },
    {
      id: 3,
      title: "Combat aircraft",
      img: require('../../assets/images/categoriesAircraft/Combat.png'),
      airplanes: [
        {
          id: 1,
          title: "Lockheed Martin F-35 Lightning II",
          Type: "Fighter",
          Manufacturer: "Lockheed Martin",
          Role: "Multirole Fighter",
          MaximumSpeed: "1,200 knots (1,380 mph)",
          Range: "1,380 nautical miles",
          Armament: "Various air-to-air and air-to-ground weapons",
          Engine: "Pratt & Whitney F135",
          ServiceCeiling: "50,000 feet",
          Description: "The F-35 Lightning II is a family of stealth multirole fighters that are designed for ground attack and air superiority missions."
        },
        // Добавь сюда другие самолеты для этой категории
      ]
    },
    {
      id: 4,
      title: "Cargo planes",
      img: require('../../assets/images/categoriesAircraft/Cargo.png'),
      airplanes: [
        {
          id: 1,
          title: "Boeing 747-8F (Freighter)",
          Type: "Cargo",
          Manufacturer: "Boeing",
          Role: "Freighter",
          MaximumSpeed: "908 km/h (564 mph)",
          Range: "Approximately 8,130 km (4,390 nautical miles)",
          Armament: "None",
          Engine: "Four-engine, typically General Electric GEnx-2B67 turbofans",
          ServiceCeiling: "45,000 feet",
          Description: "The Boeing 747-8F is the latest freighter variant of the iconic 747 series, known for its large cargo capacity and long-range capabilities."
        },
        {
          id: 2,
          title: "Airbus A330-200F",
          Type: "Cargo",
          Manufacturer: "Airbus",
          Role: "Freighter",
          MaximumSpeed: "870 km/h (540 mph)",
          Range: "Approximately 7,400 km (4,000 nautical miles)",
          Armament: "None",
          Engine: "Twin-engine, options include Rolls-Royce Trent 700, GE CF6-80E1, or Pratt & Whitney PW4000",
          ServiceCeiling: "41,000 feet",
          Description: "The Airbus A330-200F is a dedicated freighter version of the A330 family, designed to replace older cargo aircraft."
        },
        {
          id: 3,
          title: "Antonov An-124 Ruslan",
          Type: "Cargo",
          Manufacturer: "Antonov",
          Role: "Heavy Lift Transport",
          MaximumSpeed: "800 km/h (500 mph)",
          Range: "Approximately 4,800 km (2,600 nautical miles)",
          Armament: "None",
          Engine: "Four-engine, Ivchenko Progress D-18T turbofans",
          ServiceCeiling: "39,000 feet",
          Description: "The Antonov An-124 Ruslan is one of the largest cargo aircraft in the world, designed for transporting oversized and heavy cargo."
        },
        {
          id: 4,
          title: "Lockheed C-130 Hercules",
          Type: "Cargo",
          Manufacturer: "Lockheed Martin",
          Role: "Military Transport",
          MaximumSpeed: "671 km/h (417 mph)",
          Range: "Approximately 3,800 km (2,050 nautical miles)",
          Armament: "None",
          Engine: "Four-engine, Allison T56-A-15 turboprops",
          ServiceCeiling: "28,000 feet",
          Description: "The Lockheed C-130 Hercules is a versatile military transport aircraft used for a wide range of missions."
        },
        {
          id: 5,
          title: "McDonnell Douglas MD-11F",
          Type: "Cargo",
          Manufacturer: "McDonnell Douglas",
          Role: "Freighter",
          MaximumSpeed: "876 km/h (545 mph)",
          Range: "Approximately 7,408 km (4,000 nautical miles)",
          Armament: "None",
          Engine: "Three-engine, typically Pratt & Whitney PW4460",
          ServiceCeiling: "38,000 feet",
          Description: "The McDonnell Douglas MD-11F is a freighter version of the MD-11, known for its extended range and high payload capacity."
        }
      ]
    },
    {
      id: 5,
      title: "Passenger planes",
      img: require('../../assets/images/categoriesAircraft/Passenger.png'),
      airplanes: [
        {
          id: 1,
          title: "Boeing 747",
          Type: "Passenger",
          Manufacturer: "Boeing",
          Role: "Wide-body airliner",
          MaximumSpeed: "907 km/h (564 mph)",
          Range: "Approximately 13,450 km (7,260 nautical miles)",
          Armament: "None",
          Engine: "Four-engine, typically General Electric CF6, Pratt & Whitney PW4000, or Rolls-Royce RB211",
          ServiceCeiling: "45,000 feet",
          Description: "The Boeing 747, known as the 'Jumbo Jet,' revolutionized air travel with its size and capacity for long-haul routes."
        },
        {
          id: 2,
          title: "Airbus A350",
          Type: "Passenger",
          Manufacturer: "Airbus",
          Role: "Wide-body airliner",
          MaximumSpeed: "903 km/h (561 mph)",
          Range: "Approximately 15,000 km (8,100 nautical miles)",
          Armament: "None",
          Engine: "Twin-engine, powered by Rolls-Royce Trent XWB turbofans",
          ServiceCeiling: "43,000 feet",
          Description: "The Airbus A350 is known for its advanced technology and fuel efficiency, designed for long-haul flights."
        },
        {
          id: 3,
          title: "Boeing 787 Dreamliner",
          Type: "Passenger",
          Manufacturer: "Boeing",
          Role: "Wide-body airliner",
          MaximumSpeed: "913 km/h (567 mph)",
          Range: "Approximately 13,530 km (7,300 nautical miles)",
          Armament: "None",
          Engine: "Twin-engine, typically Rolls-Royce Trent 1000 or General Electric GEnx",
          ServiceCeiling: "43,000 feet",
          Description: "The Boeing 787 Dreamliner features advanced materials and systems for improved fuel efficiency and passenger comfort."
        },
        {
          id: 4,
          title: "Airbus A320",
          Type: "Passenger",
          Manufacturer: "Airbus",
          Role: "Narrow-body airliner",
          MaximumSpeed: "828 km/h (514 mph)",
          Range: "Approximately 6,300 km (3,400 nautical miles)",
          Armament: "None",
          Engine: "Twin-engine, typically CFM56 or IAE V2500",
          ServiceCeiling: "39,000 feet",
          Description: "The Airbus A320 family is widely used for short- to medium-haul operations with its digital fly-by-wire technology."
        },
        {
          id: 5,
          title: "Embraer E195-E2",
          Type: "Passenger",
          Manufacturer: "Embraer",
          Role: "Regional jet",
          MaximumSpeed: "870 km/h (541 mph)",
          Range: "Approximately 4,815 km (2,600 nautical miles)",
          Armament: "None",
          Engine: "Twin-engine, Pratt & Whitney PW1900G geared turbofans",
          ServiceCeiling: "41,000 feet",
          Description: "The Embraer E195-E2 offers significant improvements in fuel efficiency and passenger comfort for regional routes."
        }
      ]
    },
    {
      id: 6,
      title: "Business Jets",
      img: require('../../assets/images/categoriesAircraft/Business.png'),
      airplanes: [
        {
          id: 1,
          title: "Gulfstream G650",
          Type: "Business",
          Manufacturer: "Gulfstream Aerospace",
          Role: "Luxury Business Jet",
          MaximumSpeed: "Mach 0.925",
          Range: "Approximately 13,000 km (7,000 nautical miles)",
          Armament: "None",
          Engine: "Twin-engine, Rolls-Royce BR725",
          ServiceCeiling: "51,000 feet",
          Description: "The Gulfstream G650 is known for its high speed and long-range capability, making it ideal for international travel."
        },
        {
          id: 2,
          title: "Bombardier Global 7500",
          Type: "Business",
          Manufacturer: "Bombardier",
          Role: "Ultra Long Range Business Jet",
          MaximumSpeed: "Mach 0.925",
          Range: "Approximately 14,800 km (8,000 nautical miles)",
          Armament: "None",
          Engine: "Twin-engine, General Electric Passport",
          ServiceCeiling: "51,000 feet",
          Description: "The Bombardier Global 7500 is recognized for its spacious cabin and ability to connect distant cities non-stop."
        },
        // Добавь сюда другие самолеты для этой категории
      ]
    }
  ];
  