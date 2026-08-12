import { Doctor, WellnessProgram, MedicalService, PatientHealthRecord } from '../types';

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Tena Johnson',
    role: 'Surgery specialist',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    patients: 1420,
    available: true,
    specialty: 'Surgical Precision & Care'
  },
  {
    id: 'doc-2',
    name: 'Dr. Alexander Chen',
    role: 'Cardiology Specialist',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    patients: 1850,
    available: true,
    specialty: 'Cardiovascular Care'
  },
  {
    id: 'doc-3',
    name: 'Dr. Marcus Vance',
    role: 'Neurology Lead',
    avatar: 'https://images.unsplash.com/photo-1594824813566-78853a152068?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    patients: 980,
    available: true,
    specialty: 'Cognitive Health'
  }
];

export const PROGRAMS_DATA: WellnessProgram[] = [
  {
    id: 'prog-1',
    title: 'Feelmind Platform',
    tag: '#Feelings',
    category: 'Digital Health',
    description: 'The digital core for managing your personal health and wellness journey.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    badgeText: 'Connected Care'
  },
  {
    id: 'prog-2',
    title: 'Not just healthcare',
    tag: '#Professionals',
    category: 'Surgical & Recovery',
    description: 'Comprehensive support from leading industry professionals.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    badgeText: 'Precision Care'
  },
  {
    id: 'prog-3',
    title: 'Redefines Precision and Compassion in Care!',
    tag: '#Surgery',
    category: 'Surgical Care',
    description: 'Expert consultation and surgical planning led by Dr. Tena Johnson.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600',
    badgeText: 'Surgical Excellence'
  }
];

export const SERVICES_DATA: MedicalService[] = [
  {
    id: 'srv-1',
    icon: 'medical_services',
    title: 'Surgical Department',
    description: 'Advanced minimally invasive surgery with compassionate care.',
    dept: 'Surgery'
  },
  {
    id: 'srv-2',
    icon: 'favorite',
    title: 'Cardiology Specialist',
    description: 'Comprehensive cardiovascular diagnostic & treatment protocols.',
    dept: 'Cardiology'
  },
  {
    id: 'srv-3',
    icon: 'psychology',
    title: 'Cognitive & Mind Wellness',
    description: 'Neurological consultation for brain health & stress protocols.',
    dept: 'Neurology'
  },
  {
    id: 'srv-4',
    icon: 'nutrition',
    title: 'Preventative Wellness',
    description: 'Customized metabolic guidance & biometric monitoring.',
    dept: 'Wellness'
  }
];

export const MOCK_PATIENT_RECORD: PatientHealthRecord = {
  patientName: 'Sarah Jenkins',
  healthScore: 86,
  nextAppointment: {
    doctor: 'Dr. Alexander Chen',
    date: 'Today, Oct 24',
    time: '2:30 PM',
    type: 'Cardiology Specialist'
  },
  prescriptions: [
    { name: 'CardioShield Rx', dosage: '50mg / evening', status: 'Active' },
    { name: 'Omegacare + D3', dosage: '1 Capsule / morning', status: 'Active' }
  ],
  vitals: {
    bloodPressure: '118/76',
    heartRate: 72,
    sleepAvg: '7h 15m'
  }
};
