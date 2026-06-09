export interface ServiceDetails {
  offers?: string[];
  benefits?: string[];
  process?: Array<{
    title: string;
    description: string;
  }>;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  details?: ServiceDetails;
}

const services: Service[] = [
  {
    id: "agricultural-land-development",
    icon: "🌾",
    title: "Agricultural Land Development",
    description: "Comprehensive land planning and soil improvement for agricultural use.",
    details: {
      offers: [
        "Site survey and topographic mapping",
        "Soil testing and fertility enhancement",
        "Contour leveling, terracing and erosion control",
        "Irrigation layout and infrastructure",
        "Permits and documentation support",
      ],
      benefits: [
        "Optimized land use for higher crop yield",
        "Improved water retention and soil health",
        "Reduced erosion and long-term sustainability",
        "Better farm layout and operational efficiency",
        "Compliance with local regulations",
      ],
      process: [
        {
          title: "Land Assessment",
          description: "Survey soil profile, slope and drainage patterns.",
        },
        {
          title: "Design & Planning",
          description: "Create contour, channel and plot plans.",
        },
        {
          title: "Implementation",
          description: "Execute grading, trenching, and soil conditioning.",
        },
        {
          title: "Review & Handover",
          description: "Quality check reports and final deliverables.",
        },
      ],
    },
  },
  {
    id: "agricultural-water-management",
    icon: "💧",
    title: "Agricultural Water Management",
    description: "Irrigation systems and water conservation solutions for farms.",
    details: {
      offers: [
        "Drip and sprinkler irrigation design and installation",
        "Rainwater harvesting and storage systems",
        "Borewell/pump setup and automation",
        "Water monitoring and leak detection",
        "Scheduled maintenance and optimization",
      ],
      benefits: [
        "Great water savings & reduced wastage",
        "Steady water supply for crop cycles",
        "Lower operation costs",
        "Increased irrigation efficiency",
        "Sustainable farm water management",
      ],
      process: [
        {
          title: "Water Audit",
          description: "Evaluate available sources and usage patterns.",
        },
        {
          title: "System Design",
          description: "Plan pipes, tanks, pumps and control systems.",
        },
        {
          title: "Installation",
          description: "Install infrastructure and smart controls.",
        },
        {
          title: "Monitoring",
          description: "Regular checks and seasonal adjustments.",
        },
      ],
    },
  },
  {
    id: "agricultural-infrastructure-development",
    icon: "🚜",
    title: "Agricultural Infrastructure Development",
    description: "Farm infrastructure including roads, storage, and facilities.",
    details: {
      offers: [
        "Access road and site preparation",
        "Storage units, barns and cold rooms",
        "Greenhouse and farm shed construction",
        "Utility integration: power, water, fencing",
        "Facility planning for processing and logistics",
      ],
      benefits: [
        "Improved post-harvest handling",
        "Reduced transport and operational delays",
        "Enhanced farm safety and security",
        "Higher asset value and scalability",
        "Professional compliance and approval support",
      ],
      process: [
        {
          title: "Site Planning",
          description: "Evaluate local conditions and facility footprint.",
        },
        {
          title: "Design",
          description: "Draft functional layout for storage and services.",
        },
        {
          title: "Construction",
          description: "Build structures, utilities and finishing works.",
        },
        {
          title: "Commissioning",
          description: "Test systems and hand over completed infrastructure.",
        },
      ],
    },
  },
  {
    id: "layout-demarkation",
    icon: "📏",
    title: "Layout Demarkation",
    description: "Plot boundary marking and layout services for development projects.",
    details: {
      offers: [
        "Topographic survey and plot mapping",
        "Boundary demarcation and GPS staking",
        "Road and utility alignment planning",
        "Permit assistance and regulatory compliance",
        "Final drawing and certification",
      ],
      benefits: [
        "Accurate legal boundaries",
        "Reduced disputes and project delays",
        "Improved land utilization",
        "Fast approval and execution",
        "Professional site handover documentation",
      ],
      process: [
        {
          title: "Site Survey",
          description: "Collect measurements and verify legal boundaries.",
        },
        {
          title: "Layout Planning",
          description: "Prepare development layout with utilities.",
        },
        {
          title: "Approval Process",
          description: "Manage municipal approvals and corrections.",
        },
        {
          title: "Final Marking",
          description: "Install physical markers and deliver final plan.",
        },
      ],
    },
  },
  {
    id: "layout-development",
    icon: "📐",
    title: "Layout Development",
    description: "रहिवासी आणि व्यावसायिक प्रकल्पांसाठी कुशल लेआउट नियोजन।",
    details: {
      offers: [
        "Residential and commercial layout planning",
        "Plot division and marking services",
        "Infrastructure planning (roads, drainage, utilities)",
        "Government approval and NOC assistance",
        "Complete survey and documentation",
      ],
      benefits: [
        "Optimized space utilization",
        "Compliance with local regulations",
        "Modern amenities planning",
        "Value appreciation through proper planning",
        "Experienced town planners and surveyors",
      ],
      process: [
        {
          title: "Site Survey",
          description: "Detailed topographical survey and analysis",
        },
        {
          title: "Layout Planning",
          description: "Creating efficient layout with proper amenities",
        },
        {
          title: "Approvals",
          description: "Obtaining necessary government permissions",
        },
        {
          title: "Development",
          description: "Infrastructure development and plot demarcation",
        },
      ],
    },
  },
  {
    id: "demolition",
    icon: "💥",
    title: "Building Demolition",
    description: "पुरानी इमारतींचे सुरक्षित आणि व्यावसायिक विध्वंस सेवा।",
    details: {
      offers: [
        "Safe and controlled demolition of structures",
        "Complete debris removal and site clearing",
        "Proper waste disposal following regulations",
        "Salvage of reusable materials",
        "Site preparation for new construction",
      ],
      benefits: [
        "Licensed and experienced demolition team",
        "Modern equipment for efficient work",
        "Minimal noise and dust pollution",
        "Quick turnaround time",
        "Full compliance with safety norms",
      ],
    },
  },

  {
    id: "renovation",
    icon: "🔧",
    title: "Renovation",
    description: "पुरानी इमारतींची मरम्मत आणि नवीकरण सेवा।",
    details: {
      offers: [
        "Structural assessment and damage evaluation",
        "Water leakage and seepage repair solutions",
        "Crack filling and wall strengthening",
        "Foundation repair and reinforcement",
        "Complete building restoration services",
      ],
      benefits: [
        "Extends building lifespan by 15-20 years",
        "Cost-effective compared to new construction",
        "Advanced repair techniques and materials",
        "Minimal disruption to occupants",
        "Comprehensive warranty on repair work",
      ],
    },
  },

  {
    id: "new-construction",
    icon: "🏗️",
    title: "New Building Construction",
    description: "संपूर्ण बांधकाम प्रबंधन आणि निष्पादन सेवा।",
    details: {
      offers: [
        "Complete construction management from planning to execution",
        "Strong foundation with modern engineering techniques",
        "Quality materials ensuring durability and safety",
        "Customized designs as per client requirements",
        "Regular progress updates and transparent communication",
      ],
      benefits: [
        "10+ years of construction expertise",
        "Skilled team of engineers and workers",
        "Timely project completion within budget",
        "Post-construction support and warranty",
        "Modern construction techniques and equipment",
      ],
      process: [
        {
          title: "Consultation & Planning",
          description: "Understanding your vision, requirements, and creating detailed architectural plans",
        },
        {
          title: "Design Approval",
          description: "Finalizing designs, obtaining necessary permissions and approvals",
        },
        {
          title: "Foundation & Structure",
          description: "Strong foundation work followed by complete structural construction",
        },
        {
          title: "Finishing & Handover",
          description: "Interior finishing, quality checks, and final handover with documentation",
        },
      ],
    },
  },
  {
    id: "interior-exterior-design",
    icon: "🎭",
    title: "Interior & Exterior Designing",
    description: "आतील आणि बाहेरील डिजाइनमध्ये व्यापक आणि सृजनशील समाधान।",
    details: {
      offers: [
        "Complete interior design consultation and execution",
        "Modular kitchen and wardrobe designs",
        "POP ceiling, false ceiling, and wall textures",
        "Exterior facade design and elevation work",
        "Lighting design and fixture installation",
      ],
      benefits: [
        "Creative and contemporary design solutions",
        "Space optimization and functionality",
        "Premium quality materials and fittings",
        "3D visualization before execution",
        "Experienced interior designers",
      ],
      process: [
        {
          title: "Requirement Analysis",
          description: "Understanding your style preferences, budget, and functional needs",
        },
        {
          title: "Design Concepts",
          description: "Creating 2D/3D designs with material and color suggestions",
        },
        {
          title: "Execution",
          description: "Professional installation with attention to detail",
        },
        {
          title: "Final Setup",
          description: "Furnishing, decor placement, and final touches",
        },
      ],
    },
  },
  {
    id: "buy-property",
    icon: "🛒",
    title: "Buy",
    description: "गुणवत्तेचे गृह आणि प्रॉपर्टी खरेदीसाठी विश्वसनीय सल्ला.",
    details: {
      offers: [
        "Curated property listings matching your requirements",
        "Site visits and property inspections",
        "Legal verification and documentation support",
        "Negotiation assistance for best prices",
        "End-to-end buying process management",
      ],
      benefits: [
        "Access to verified property listings",
        "Expert negotiation saving you money",
        "Complete legal due diligence",
        "Transparent process with no hidden charges",
        "Post-purchase support and guidance",
      ],
    },
  },
  {
    id: "sell-property",
    icon: "🏷️",
    title: "Sell",
    description: "आपल्या संपत्तीची सर्वोच्च किंमतीत विक्री करण्यासाठी व्यावसायिक सहायता।",
    details: {
      offers: [
        "Professional property valuation services",
        "Marketing and listing on multiple platforms",
        "Qualified buyer identification and screening",
        "Negotiation and deal closure support",
        "Complete documentation and registration assistance",
      ],
      benefits: [
        "Get the best market price for your property",
        "Wide network of genuine buyers",
        "Quick and hassle-free selling process",
        "Professional marketing materials",
        "Expert legal and documentation support",
      ],
    },
  },
  {
    id: "electric-fencing",
    icon: "⚡",
    title: "Electric Fencing",
    description: "High-security electric fencing systems for farm and property protection.",
    details: {
      offers: [
        "Solar and grid-powered fencing systems",
        "Underground cable installation",
        "Alarm and monitoring integration",
        "Pest and wildlife deterrent solutions",
        "Professional maintenance and support",
      ],
      benefits: [
        "Enhanced farm and property security",
        "Wildlife and livestock protection",
        "Low maintenance and cost-effective",
        "Eco-friendly solar options available",
        "24/7 monitoring capabilities",
      ],
      process: [
        {
          title: "Site Assessment",
          description: "Evaluate perimeter, soil conditions, and security requirements.",
        },
        {
          title: "System Design",
          description: "Plan fence layout, power system, and monitoring setup.",
        },
        {
          title: "Installation",
          description: "Install posts, wiring, energizer, and alarm systems.",
        },
        {
          title: "Testing & Training",
          description: "System testing and user training for operation.",
        },
      ],
    },
  },
  {
    id: "boundary-wall",
    icon: "🧱",
    title: "Boundary Wall Construction",
    description: "Durable and secure boundary wall construction for properties.",
    details: {
      offers: [
        "Brick, stone, and concrete boundary walls",
        "Decorative wall designs and patterns",
        "Gate and entry point construction",
        "Waterproofing and weather protection",
        "Foundation and structural reinforcement",
      ],
      benefits: [
        "Enhanced property security and privacy",
        "Increased property value",
        "Long-lasting durability and low maintenance",
        "Aesthetic appeal and customization",
        "Professional engineering and compliance",
      ],
      process: [
        {
          title: "Site Survey",
          description: "Measure perimeter and identify boundary lines.",
        },
        {
          title: "Design & Approvals",
          description: "Plan wall design and obtain necessary permits.",
        },
        {
          title: "Construction",
          description: "Excavation, foundation, and wall building.",
        },
        {
          title: "Finishing",
          description: "Capping, painting, and final inspection.",
        },
      ],
    },
  },
  {
    id: "water-filter-plant",
    icon: "💧",
    title: "Water Filter Plant",
    description: "Advanced water purification systems for residential and commercial use.",
    details: {
      offers: [
        "RO and UV water purification systems",
        "Sediment and carbon filtration",
        "Mineral enrichment and pH balancing",
        "Storage tank and distribution setup",
        "Regular maintenance contracts",
      ],
      benefits: [
        "Clean and safe drinking water",
        "Reduced waterborne diseases",
        "Cost-effective long-term solution",
        "Improved water taste and quality",
        "Low power consumption systems available",
      ],
      process: [
        {
          title: "Water Quality Testing",
          description: "Analyze water source and identify contaminants.",
        },
        {
          title: "System Selection",
          description: "Choose appropriate filtration technology.",
        },
        {
          title: "Installation",
          description: "Install filters, tanks, and distribution lines.",
        },
        {
          title: "Monitoring",
          description: "Regular testing and filter replacement schedule.",
        },
      ],
    },
  },
  {
    id: "warehouse-storage",
    icon: "📦",
    title: "Warehouse Cold & Dry Storage",
    description: "Temperature-controlled storage facilities for agricultural products.",
    details: {
      offers: [
        "Climate-controlled cold storage units",
        "Dry storage for grains and seeds",
        "Humidity and temperature monitoring",
        "Pest control and fumigation services",
        "Inventory management system",
      ],
      benefits: [
        "Extended shelf life of products",
        "Reduced spoilage and wastage",
        "Real-time monitoring and alerts",
        "Compliance with food safety standards",
        "Optimized product preservation",
      ],
      process: [
        {
          title: "Facility Design",
          description: "Design storage capacity and climate control needs.",
        },
        {
          title: "Construction",
          description: "Build insulated structure with cooling systems.",
        },
        {
          title: "Equipment Setup",
          description: "Install monitoring, security, and handling equipment.",
        },
        {
          title: "Operational Training",
          description: "Staff training and management system setup.",
        },
      ],
    },
  },
  {
    id: "well-excavation",
    icon: "⛏️",
    title: "Well Excavation",
    description: "Professional well digging and water source development services.",
    details: {
      offers: [
        "Manual and mechanical well digging",
        "Groundwater survey and testing",
        "Well casing and lining installation",
        "Water yield assessment",
        "Maintenance and cleaning services",
      ],
      benefits: [
        "Reliable water source for farms",
        "Low operating costs",
        "Government subsidy eligibility",
        "Customized depth based on requirements",
        "Long-term water security",
      ],
      process: [
        {
          title: "Site Survey",
          description: "Identify best location and groundwater depth.",
        },
        {
          title: "Excavation",
          description: "Dig well to appropriate depth using equipment.",
        },
        {
          title: "Well Development",
          description: "Install casing, lining, and develop water yield.",
        },
        {
          title: "Testing & Handover",
          description: "Water quality testing and project completion.",
        },
      ],
    },
  },
  {
    id: "borewell-excavation",
    icon: "🔧",
    title: "Borewell Excavation",
    description: "Modern borewell drilling for deep groundwater access.",
    details: {
      offers: [
        "High-capacity borewell drilling",
        "Geological survey and assessment",
        "PVC and steel casing installation",
        "Submersible pump setup",
        "Water testing and certification",
      ],
      benefits: [
        "Access to deep groundwater reserves",
        "Higher water yield than traditional wells",
        "Suitable for diverse soil conditions",
        "Long-term water availability",
        "Minimal evaporation and contamination",
      ],
      process: [
        {
          title: "Hydro-Geological Survey",
          description: "Assess underground water table and rock formations.",
        },
        {
          title: "Drilling",
          description: "Drill borewell to target depth using modern rigs.",
        },
        {
          title: "Casing & Development",
          description: "Install pipes and develop well for water flow.",
        },
        {
          title: "Pump Installation",
          description: "Install submersible pump and testing.",
        },
      ],
    },
  },
  {
    id: "drone-camera",
    icon: "🚁",
    title: "Drone Camera & Aerial Survey",
    description: "Aerial imaging and drone survey services for farm monitoring.",
    details: {
      offers: [
        "High-resolution aerial photography",
        "Thermal and multispectral imaging",
        "Land survey and mapping",
        "Crop health monitoring",
        "Real-time data analysis and reporting",
      ],
      benefits: [
        "Comprehensive farm overview",
        "Early pest and disease detection",
        "Precise land measurement",
        "Cost-effective monitoring",
        "Data-driven farm management decisions",
      ],
      process: [
        {
          title: "Flight Planning",
          description: "Plan drone flight path and imaging requirements.",
        },
        {
          title: "Aerial Survey",
          description: "Capture high-resolution images and video data.",
        },
        {
          title: "Data Processing",
          description: "Analyze and create maps and reports.",
        },
        {
          title: "Report Delivery",
          description: "Provide actionable insights and recommendations.",
        },
      ],
    },
  },
  {
    id: "mobile-alerts",
    icon: "📱",
    title: "Mobile Alerts & Smart Monitoring",
    description: "Real-time alerts and IoT monitoring system for farms.",
    details: {
      offers: [
        "Weather alerts and forecasts",
        "Soil moisture and temperature monitoring",
        "Pest and disease warnings",
        "Water level notifications",
        "Crop growth stage tracking",
      ],
      benefits: [
        "Timely decision-making for farm operations",
        "Reduced crop losses",
        "Water management optimization",
        "Improved productivity and yields",
        "Easy mobile app access",
      ],
      process: [
        {
          title: "Sensor Installation",
          description: "Install IoT sensors across the farm.",
        },
        {
          title: "System Configuration",
          description: "Set alert thresholds and preferences.",
        },
        {
          title: "App Setup",
          description: "Configure mobile app for notifications.",
        },
        {
          title: "Ongoing Support",
          description: "Monitor system and provide technical support.",
        },
      ],
    },
  },
  {
    id: "precision-farming",
    icon: "🌾",
    title: "Precision Farming - Crop & Soil Monitoring",
    description: "फसल और मिट्टी की निगरानी के लिए आधुनिक तकनीकें।",
    details: {
      offers: [
        "Soil health testing and analysis",
        "Nutrient management planning",
        "Variable rate irrigation guidance",
        "Crop growth stage monitoring",
        "Yield mapping and analysis",
      ],
      benefits: [
        "Optimized fertilizer and water use",
        "Increased crop yield by 20-30%",
        "Reduced input costs",
        "Environmental sustainability",
        "Data-driven farming practices",
      ],
      process: [
        {
          title: "Baseline Survey",
          description: "Conduct soil and crop assessment.",
        },
        {
          title: "Data Collection",
          description: "Collect field data using sensors and imaging.",
        },
        {
          title: "Analysis & Planning",
          description: "Analyze data and create management zones.",
        },
        {
          title: "Implementation",
          description: "Execute recommendations with precision equipment.",
        },
      ],
    },
  },
  {
    id: "pest-disease-detection",
    icon: "🐛",
    title: "Pest & Disease Detection",
    description: "बीमारी और कीटों की पहचान के लिए उन्नत निदान सेवा।",
    details: {
      offers: [
        "Visual crop inspection and scouting",
        "Lab testing for pathogen identification",
        "AI-based disease recognition",
        "Pest population monitoring traps",
        "Integrated pest management planning",
      ],
      benefits: [
        "Early detection prevents major losses",
        "Targeted treatment reduces chemical use",
        "Lower pesticide costs",
        "Healthier crops and yields",
        "Environmentally responsible farming",
      ],
      process: [
        {
          title: "Field Scouting",
          description: "Regular field visits for pest and disease monitoring.",
        },
        {
          title: "Sample Collection",
          description: "Collect samples for lab testing and analysis.",
        },
        {
          title: "Diagnosis",
          description: "Identify pests and diseases accurately.",
        },
        {
          title: "Treatment Plan",
          description: "Provide targeted treatment recommendations.",
        },
      ],
    },
  },
  {
    id: "spot-spraying",
    icon: "💨",
    title: "Spot Spraying - Precision Application",
    description: "स्पॉट स्प्रेइंग प्रौद्योगिकी से चयनित क्षेत्रों में ही उपचार।",
    details: {
      offers: [
        "GPS-guided spot spraying technology",
        "Targeted pesticide and herbicide application",
        "Reduced chemical usage by 50-70%",
        "Drone and ground-based spraying",
        "Weather-based application timing",
      ],
      benefits: [
        "Significant cost savings on chemicals",
        "Reduced environmental impact",
        "Lower crop toxicity",
        "Higher efficacy in treatment",
        "Precision and consistency in application",
      ],
      process: [
        {
          title: "Problem Mapping",
          description: "Identify and map affected areas in the field.",
        },
        {
          title: "Route Planning",
          description: "Plan optimal spraying route using GPS.",
        },
        {
          title: "Controlled Application",
          description: "Apply treatment only to problem zones.",
        },
        {
          title: "Monitoring",
          description: "Monitor effectiveness and adjust as needed.",
        },
      ],
    },
  },
  {
    id: "yield-market-intelligence",
    icon: "📊",
    title: "Yield & Market Intelligence",
    description: "उपज का पूर्वानुमान और बाजार भाव की जानकारी सेवा।",
    details: {
      offers: [
        "Yield forecasting models",
        "Real-time market price monitoring",
        "Commodity price analysis and trends",
        "Best timing for harvest and sale",
        "Market demand intelligence",
      ],
      benefits: [
        "Better financial planning for farmers",
        "Maximize profit through optimal timing",
        "Reduce post-harvest losses",
        "Access to market opportunities",
        "Improved income predictability",
      ],
      process: [
        {
          title: "Data Analysis",
          description: "Analyze historical yield and market data.",
        },
        {
          title: "Forecasting",
          description: "Generate yield and price predictions.",
        },
        {
          title: "Market Monitoring",
          description: "Continuously track commodity prices.",
        },
        {
          title: "Advisory",
          description: "Provide timely selling recommendations.",
        },
      ],
    },
  },
  {
    id: "construction-planning-bim",
    icon: "🗺️",
    title: "Construction Planning & BIM",
    description: "Digital planning, cost estimation, and coordinated building models for efficient execution.",
    details: {
      offers: [
        "Construction cost and material estimation",
        "3D BIM modelling and drawing coordination",
        "Project timeline and labour planning",
        "MEP clash detection before construction",
        "Progress reporting and documentation",
      ],
      benefits: [
        "Better control over project cost and schedule",
        "Fewer design conflicts and site rework",
        "Accurate material and manpower planning",
        "Clear project visibility for clients",
        "Improved coordination between contractors",
      ],
      process: [
        {
          title: "Requirement Study",
          description: "Review the site, drawings, budget, and construction goals.",
        },
        {
          title: "Digital Planning",
          description: "Prepare estimates, schedules, and coordinated building models.",
        },
        {
          title: "Execution Support",
          description: "Track progress and resolve coordination issues during construction.",
        },
        {
          title: "Project Reporting",
          description: "Deliver progress records, updates, and final documentation.",
        },
      ],
    },
  },
  {
    id: "smart-construction-monitoring",
    icon: "📡",
    title: "Smart Construction Monitoring",
    description: "Technology-assisted monitoring for construction quality, progress, and site safety.",
    details: {
      offers: [
        "Construction progress monitoring and reporting",
        "Concrete strength and structural health checks",
        "Crack detection and quality inspections",
        "Site safety and compliance audits",
        "Material usage and waste monitoring",
      ],
      benefits: [
        "Early identification of quality issues",
        "Improved safety compliance on site",
        "Reduced material waste and delays",
        "Reliable progress records",
        "Better long-term structural performance",
      ],
      process: [
        {
          title: "Monitoring Plan",
          description: "Identify project milestones, risks, and quality checkpoints.",
        },
        {
          title: "Site Setup",
          description: "Configure inspection schedules and monitoring tools.",
        },
        {
          title: "Regular Inspection",
          description: "Track progress, safety, materials, and structural quality.",
        },
        {
          title: "Corrective Report",
          description: "Share findings and practical corrective recommendations.",
        },
      ],
    },
  },
  {
    id: "electrical-plumbing-services",
    icon: "🔌",
    title: "Electrical & Plumbing Services",
    description: "Complete electrical wiring, plumbing, sanitary fitting, and utility installation.",
    details: {
      offers: [
        "Electrical wiring, earthing, switches, and distribution boards",
        "Lighting, fan, and fixture installation",
        "Water supply and drainage pipe laying",
        "Tap, valve, toilet, and bathroom fitting",
        "Leak detection and repair work",
      ],
      benefits: [
        "Safe and reliable utility systems",
        "Coordinated installation with construction work",
        "Reduced leakage and electrical faults",
        "Quality fittings and workmanship",
        "Maintenance and repair support",
      ],
      process: [
        {
          title: "Site Inspection",
          description: "Assess utility requirements and existing connections.",
        },
        {
          title: "Layout Planning",
          description: "Plan electrical points, pipe routes, and fixtures.",
        },
        {
          title: "Installation",
          description: "Complete wiring, plumbing, testing, and fitting work.",
        },
        {
          title: "Safety Testing",
          description: "Verify electrical safety, water pressure, and drainage flow.",
        },
      ],
    },
  },
  {
    id: "waterproofing-sealing",
    icon: "☔",
    title: "Waterproofing & Sealing",
    description: "Protection against roof leakage, wall seepage, dampness, and joint failure.",
    details: {
      offers: [
        "Roof and terrace waterproofing",
        "Bathroom, balcony, and water tank treatment",
        "Liquid membrane waterproofing",
        "Crack grouting and joint sealing",
        "Leakage inspection and repair",
      ],
      benefits: [
        "Prevents costly water damage",
        "Protects walls, ceilings, and foundations",
        "Improves building life and hygiene",
        "Suitable solutions for old and new buildings",
        "Professional testing after application",
      ],
      process: [
        {
          title: "Leak Inspection",
          description: "Locate seepage sources and assess damaged surfaces.",
        },
        {
          title: "Surface Preparation",
          description: "Clean, repair, and prepare the treatment area.",
        },
        {
          title: "Waterproofing",
          description: "Apply the selected membrane, coating, or sealing system.",
        },
        {
          title: "Water Test",
          description: "Test treated areas and complete final finishing.",
        },
      ],
    },
  },
  {
    id: "painting-flooring-finishing",
    icon: "🎨",
    title: "Painting, Flooring & Finishing",
    description: "Professional surface finishing for beautiful, durable, and ready-to-use spaces.",
    details: {
      offers: [
        "Interior and exterior wall painting",
        "Primer, putty, texture, emulsion, and enamel work",
        "Floor and wall tile installation",
        "Floor polishing, grouting, and sealing",
        "POP, gypsum false ceiling, and wallpaper work",
      ],
      benefits: [
        "Clean and consistent professional finish",
        "Durable surfaces with easier maintenance",
        "Coordinated colours, flooring, and ceiling design",
        "Suitable for new construction and renovation",
        "Careful final cleaning and handover",
      ],
      process: [
        {
          title: "Design Selection",
          description: "Select colours, materials, patterns, and finish levels.",
        },
        {
          title: "Surface Preparation",
          description: "Repair, level, clean, and prepare all surfaces.",
        },
        {
          title: "Finishing Work",
          description: "Complete painting, tiling, polishing, and ceiling work.",
        },
        {
          title: "Quality Check",
          description: "Inspect alignment, finish quality, and final cleanliness.",
        },
      ],
    },
  },
  {
    id: "solar-security-systems",
    icon: "☀️",
    title: "Solar & Security Systems",
    description: "Solar power, CCTV, alarm, and fire-safety installations for modern properties.",
    details: {
      offers: [
        "Solar panel installation and setup",
        "CCTV camera mounting and configuration",
        "Alarm system wiring and installation",
        "LED street light installation",
        "Fire extinguisher planning and placement",
      ],
      benefits: [
        "Lower electricity costs with solar energy",
        "Improved property and site security",
        "Better night-time visibility",
        "Practical fire-safety readiness",
        "Single-team installation and support",
      ],
      process: [
        {
          title: "Requirement Survey",
          description: "Assess power, surveillance, lighting, and safety needs.",
        },
        {
          title: "System Design",
          description: "Plan equipment locations, wiring, and capacity.",
        },
        {
          title: "Installation",
          description: "Install equipment and complete all connections.",
        },
        {
          title: "Testing & Training",
          description: "Test each system and explain its operation.",
        },
      ],
    },
  },
  {
    id: "road-paver-development",
    icon: "🛣️",
    title: "Road & Paver Development",
    description: "Site roads, pathways, paver blocks, and supporting outdoor infrastructure.",
    details: {
      offers: [
        "Internal road and pathway construction",
        "Paver block laying and finishing",
        "Land levelling and site preparation",
        "Drainage and roadside utility planning",
        "LED street light installation",
      ],
      benefits: [
        "Improved property access and usability",
        "Durable, low-maintenance outdoor surfaces",
        "Better drainage and safer movement",
        "Suitable for layouts, farms, and commercial sites",
        "Complete preparation through finishing",
      ],
      process: [
        {
          title: "Site Survey",
          description: "Measure levels, routes, drainage, and expected traffic.",
        },
        {
          title: "Ground Preparation",
          description: "Complete excavation, levelling, and base compaction.",
        },
        {
          title: "Road & Paver Work",
          description: "Build the selected road, pathway, or paver surface.",
        },
        {
          title: "Final Inspection",
          description: "Check levels, drainage, edges, and surface finish.",
        },
      ],
    },
  },
  {
    id: "landscaping-plantation",
    icon: "🌳",
    title: "Landscaping & Plantation",
    description: "Landscaping, tree plantation, and green-space development for farms and properties.",
    details: {
      offers: [
        "Landscape planning and site preparation",
        "Tree plantation and sapling installation",
        "Garden, lawn, and green-space development",
        "Soil improvement and irrigation planning",
        "Seasonal maintenance guidance",
      ],
      benefits: [
        "Improved appearance and property value",
        "Healthier and more usable outdoor spaces",
        "Better shade, soil protection, and water retention",
        "Plant selection suited to local conditions",
        "Organized long-term maintenance plan",
      ],
      process: [
        {
          title: "Site Assessment",
          description: "Review soil, sunlight, water, and intended use.",
        },
        {
          title: "Landscape Plan",
          description: "Select plants and prepare a practical layout.",
        },
        {
          title: "Plantation",
          description: "Prepare the land and install plants and irrigation.",
        },
        {
          title: "Maintenance Plan",
          description: "Provide watering, nutrition, and care guidance.",
        },
      ],
    },
  },
  {
    id: "greenhouse-nursery-development",
    icon: "🌱",
    title: "Greenhouse & Nursery Development",
    description: "Greenhouse structures, nursery setup, and protected cultivation support.",
    details: {
      offers: [
        "Greenhouse and shade-net structure erection",
        "Nursery layout and growing-area setup",
        "Irrigation and climate-control planning",
        "Agri-plastic covering and utility installation",
        "Operational setup and maintenance guidance",
      ],
      benefits: [
        "Protected and controlled crop production",
        "Efficient use of water and growing space",
        "Improved seedling quality and survival",
        "Longer growing seasons",
        "Scalable setup for commercial farming",
      ],
      process: [
        {
          title: "Crop & Site Study",
          description: "Assess the crops, climate, water, and production goals.",
        },
        {
          title: "Structure Design",
          description: "Plan the greenhouse or nursery layout and utilities.",
        },
        {
          title: "Installation",
          description: "Erect the structure and install growing systems.",
        },
        {
          title: "Operational Handover",
          description: "Test systems and provide usage and care guidance.",
        },
      ],
    },
  },
  {
    id: "farm-machinery-support",
    icon: "🚜",
    title: "Farm Machinery & Operations Support",
    description: "Skilled support for farm equipment operation, maintenance, and field preparation.",
    details: {
      offers: [
        "Tractor, rotavator, sprayer, and harvester operation",
        "Land preparation, ploughing, and tilling",
        "Pump-set and farm equipment maintenance",
        "Equipment inspection and minor repair",
        "Seasonal field-operation support",
      ],
      benefits: [
        "Reliable access to skilled operators",
        "Faster and more consistent field work",
        "Reduced equipment downtime",
        "Safer use of agricultural machinery",
        "Flexible support for seasonal requirements",
      ],
      process: [
        {
          title: "Work Assessment",
          description: "Review the field, equipment, and required operation.",
        },
        {
          title: "Resource Planning",
          description: "Arrange suitable machinery, operators, and timing.",
        },
        {
          title: "Field Operation",
          description: "Complete the planned work with safety checks.",
        },
        {
          title: "Equipment Review",
          description: "Inspect equipment and report maintenance needs.",
        },
      ],
    },
  },
  {
    id: "post-harvest-processing",
    icon: "🌾",
    title: "Post-Harvest Processing",
    description: "Crop handling, grading, packing, and storage support after harvest.",
    details: {
      offers: [
        "Threshing, winnowing, and cleaning",
        "Sorting, quality checking, and grading",
        "Bagging, packing, and product labelling",
        "Dry and cold storage coordination",
        "Loading and handling support",
      ],
      benefits: [
        "Reduced post-harvest loss and spoilage",
        "Improved product quality and market readiness",
        "Organized packing and storage",
        "Better handling efficiency",
        "Support from harvest through dispatch",
      ],
      process: [
        {
          title: "Produce Assessment",
          description: "Review crop condition, quantity, and handling needs.",
        },
        {
          title: "Cleaning & Grading",
          description: "Prepare and classify produce for its target market.",
        },
        {
          title: "Packing",
          description: "Pack and label products for storage or transport.",
        },
        {
          title: "Storage & Dispatch",
          description: "Coordinate safe storage, loading, and movement.",
        },
      ],
    },
  },
  {
    id: "agri-logistics-support",
    icon: "🚚",
    title: "Agricultural Logistics Support",
    description: "Practical storage, inventory, packing, and delivery coordination for agricultural goods.",
    details: {
      offers: [
        "Warehouse receiving and inventory support",
        "Picking, packing, and order preparation",
        "Cold-storage handling coordination",
        "Delivery and return-pickup coordination",
        "Supply-chain documentation support",
      ],
      benefits: [
        "Organized movement from farm to buyer",
        "Reduced handling delays and product damage",
        "Improved inventory visibility",
        "Reliable packing and dispatch preparation",
        "Flexible support for bulk and regular orders",
      ],
      process: [
        {
          title: "Logistics Planning",
          description: "Review products, volumes, storage, and delivery needs.",
        },
        {
          title: "Receiving & Storage",
          description: "Coordinate safe receiving and inventory placement.",
        },
        {
          title: "Order Preparation",
          description: "Pick, pack, label, and prepare goods for dispatch.",
        },
        {
          title: "Delivery Coordination",
          description: "Track movement and manage delivery documentation.",
        },
      ],
    },
  },
];

export const servicesGroups = [
  {
    title: "Agriculture",
    group: ["agricultural-land-development", "agricultural-water-management", "agricultural-infrastructure-development", "greenhouse-nursery-development"]
  },
  {
    title: "Smart Farming",
    group: ["precision-farming", "pest-disease-detection", "spot-spraying", "yield-market-intelligence", "drone-camera", "mobile-alerts"]
  },
  {
    title: "Farm Systems",
    group: ["electric-fencing", "warehouse-storage", "boundary-wall", "water-filter-plant", "borewell-excavation"]
  },
  {
    title: "Infrastructure",
    group: ["new-construction", "interior-exterior-design", "demolition", "layout-demarkation", "layout-development", "renovation", "construction-planning-bim", "electrical-plumbing-services"]
  },
  {
    title: "E-Commerce",
    group: ["buy-property", "sell-property"]
  }
];

export default services;
