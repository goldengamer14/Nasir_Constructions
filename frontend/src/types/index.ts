export interface EmailDomain {
  value: string;
  label: string;
}

export type ServiceOption = string;
export type RequirementType = "plot" | "layout" | "construction" | "repair" | "other";

export interface UserFormData {
  email: string;
  emailDomain: string;
  customDomain?: string;
  phoneCountry: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  requirement: string;
}

export interface BuyPageExtraProps {
  // Buy Property specific fields
  propertyType: string;
  budgetRange: string;
  propertyLocation: string;
  propertySize: string;
  timeframe: string;

  // Sell Property specific fields
  sellPropertyType: string;
  sellPropertyAge: string;
  sellExpectedPrice: string;
  sellPropertyCondition: string;
  additionalNotes: string;
};

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface NavItem {
  key: string;
  label: string;
  path: string;
}

// ADD these to your existing frontend/src/types/index.ts

export interface ProductCard {
  id: string;
  name: string;                  // Product name (can be Marathi/Hindi/English)
  nameLocal?: string;            // Optional local language name e.g. "गहू"
  image: string;                 // Image URL or path
  description: string;           // Short description
  rating: number;                // 1.0 – 5.0
  reviewCount?: number;          // Optional: number of reviews
  unit?: string;                 // e.g. "per bag", "per quintal", "per kg"
  priceLabel?: string;           // e.g. "₹350/bag" — optional, shown if provided
  badge?: string;                // Optional badge e.g. "Best Seller", "Fresh Harvest"
  category: "construction" | "farm";
}

export interface ProductRowProps {
  title: string;                 // English heading
  titleLocal: string;            // Marathi/Hindi heading
  products: ProductCard[];
}
