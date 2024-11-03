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
        FuelEfficiency: "Not specified",
        Wingspan: "130.9 ft (40.0 m)",
        img: require('../../assets/images/planes/Reconnaissance/Northrop Grumman RQ-4 Global Hawk.jpg'),
        Description: "The Northrop Grumman Global Hawk is an unmanned surveillance aircraft that provides high-altitude, long-endurance intelligence collection."
      },
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
        FuelEfficiency: "Not specified",
        Wingspan: "33.5 ft (10.2 m)",
        img: require('../../assets/images/planes/Training/Beechcraft T-6 Texan II.jpg'),
        Description: "The Beechcraft T-6 Texan II is a single-engine turboprop military trainer aircraft used for training pilots in the United States Air Force and Navy."
      },
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
        FuelEfficiency: "Not specified",
        Wingspan: "35 ft (10.7 m)",
        img: require('../../assets/images/planes/Combat/Su-35.jpg'),
        Description: "The F-35 Lightning II is a family of stealth multirole fighters that are designed for ground attack and air superiority missions."
      },
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
        FuelEfficiency: "Not specified",
        Wingspan: "68.4 m (224 ft 7 in)",
        img: require('../../assets/images/planes/Cargo/Boeing 747-8F (Freighter).jpg'),
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
        FuelEfficiency: "Not specified",
        Wingspan: "60.3 m (197 ft 10 in)",
        img: require('../../assets/images/planes/Cargo/Airbus A330-200F.jpg'),
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
        FuelEfficiency: "Not specified",
        Wingspan: "73.3 m (240 ft 5 in)",
        img: require('../../assets/images/planes/Cargo/Antonov An-124 Ruslan.jpg'),
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
        FuelEfficiency: "Not specified",
        Wingspan: "40.4 m (132 ft 7 in)",
        img: require('../../assets/images/planes/Cargo/Lockheed C-130 Hercules.jpg'),
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
        FuelEfficiency: "Not specified",
        Wingspan: "51.7 m (169 ft 10 in)",
        img: require('../../assets/images/planes/Cargo/McDonnell Douglas MD-11F.jpg'),
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
        FuelEfficiency: "Not specified",
        Wingspan: "68.4 m (224 ft 7 in)",
        img: require('../../assets/images/planes/Passenger/Boeing 747.jpg'),
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
        FuelEfficiency: "Not specified",
        Wingspan: "64.75 m (212 ft 4 in)",
        img: require('../../assets/images/planes/Passenger/Airbus A350.jpg'),
        Description: "The Airbus A350 is a modern long-range wide-body airliner known for its fuel efficiency and advanced aerodynamics."
      },
      // {
      //   id: 3,
      //   title: "Boeing 737",
      //   Type: "Passenger",
      //   Manufacturer: "Boeing",
      //   Role: "Narrow-body airliner",
      //   MaximumSpeed: "850 km/h (530 mph)",
      //   Range: "Approximately 6,570 km (3,550 nautical miles)",
      //   Armament: "None",
      //   Engine: "Twin-engine, typically CFM56 or LEAP-1B",
      //   ServiceCeiling: "41,000 feet",
      //   FuelEfficiency: "Not specified",
      //   Wingspan: "35.8 m (117 ft 5 in)",
      //   img: require('../../assets/images/planes/Passenger/Boeing 737.jpg'),
      //   Description: "The Boeing 737 is a widely used narrow-body airliner known for its short to medium-haul routes."
      // },
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
        FuelEfficiency: "5,000 lb/hr",
        Wingspan: "99.5 ft (30.3 m)",
        Description: "The Gulfstream G650 is known for its high speed and long-range capability, making it ideal for international travel."
    },
    ]
}

];
