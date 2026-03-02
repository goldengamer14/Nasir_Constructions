export interface EmailDomain {
  value: string;
  label: string;
}

export type ServiceOption = "new-construction"
  | "building-repair"
  |
  "interior-exterior-design"
  | "consultation"
  | "buy-property"
  | "sell-property"
  | "layout-development"
  | "other";
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
  requirement: ServiceOption;
}

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface NavItem {
  key: string;
  label: string;
  path: string;
}
