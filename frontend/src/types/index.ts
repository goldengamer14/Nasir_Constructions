export interface EmailDomain {
  value: string;
  label: string;
}

export interface UserFormData {
  email: string;
  emailDomain: string;
  customDomain?: string;
  phoneCountry: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  requirement: "plot" | "layout" | "construction" | "repair" | "other";
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
