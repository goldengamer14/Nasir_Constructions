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

        "Agriculture",
        "Product",
        "Infrastructure",
        "Water Management",
        "Green Energy",
        "Well Excavation",
        "Bore Well"
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
];

export default services;

// export const servicesGroups = [
//   { title: "Agriculture", group: [0, 1, 2] },
//   { title: "Layout", group: [3, 4] },
//   { title: "Infrastructure", group: [5, 6, 7, 8] },
//   { title: "Buy", group: [9] },
//   { title: "Sell", group: [10] }
// ];
export const servicesGroups = [
  { title: "Agriculture", group: ["agricultural-land-development", "agricultural-water-management", "agricultural-infrastructure-development"] },
  { title: "Infrastructure", group: ["demolition", "renovation", "new-construction", "interior-exterior-design", "layout-demarkation", "layout-development"] },
  { title: "E-Commerce", group: ["buy-property", "sell-property"] }
];