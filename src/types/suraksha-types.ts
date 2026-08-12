export interface TestItem {
  name: string;
  code: string;
  tat: string; // Turnaround time e.g. "Same Day"
  sampleType: string;
  price: number;
}

export interface TestCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  popularTests: TestItem[];
}

export interface DiagnosticTech {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface CenterLocation {
  id: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  timings: string;
  mapsUrl: string;
  hasHomeCollection: boolean;
}

export interface DoctorTestimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  hospital: string;
  avatar: string;
}
