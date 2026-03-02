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
    id: "building-repair",
    icon: "🔧",
    title: "Old Building Repairing",
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
    id: "demolition",
    icon: "💥",
    title: "Old Building Demolition",
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
    id: "consultation",
    icon: "🔍",
    title: "Consultation",
    description: "रिअल एस्टेट आणि बांधकाम संबंधी व्यावसायिक सल्ला।",
    details: {
      offers: [
        "Property investment advisory services",
        "Construction cost estimation and budgeting",
        "Legal documentation and approval guidance",
        "Site selection and feasibility studies",
        "Quality assessment and inspection services",
      ],
      benefits: [
        "Expert advice from industry professionals",
        "Transparent and honest recommendations",
        "Save time and avoid costly mistakes",
        "Market insights and trend analysis",
        "Customized solutions for your needs",
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
];

export default services;