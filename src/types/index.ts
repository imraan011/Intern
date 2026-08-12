export type NavTab = 'home' | 'solutions' | 'services' | 'portal';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  patients: number;
  available: boolean;
  specialty: string;
}

export interface WellnessProgram {
  id: string;
  title: string;
  tag: string;
  category: string;
  description: string;
  image: string;
  badgeText: string;
}

export interface MedicalService {
  id: string;
  icon: string;
  title: string;
  description: string;
  dept: string;
}

export interface PatientHealthRecord {
  patientName: string;
  healthScore: number;
  nextAppointment: {
    doctor: string;
    date: string;
    time: string;
    type: string;
  };
  prescriptions: Array<{
    name: string;
    dosage: string;
    status: string;
  }>;
  vitals: {
    bloodPressure: string;
    heartRate: number;
    sleepAvg: string;
  };
}
