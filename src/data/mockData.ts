import { TestItem, PackageItem, Doctor, Centre, BlogPost } from '../types/suraksha';

export const TESTS_DATA: TestItem[] = [
  {
    id: 't-cbc',
    name: 'Complete Blood Count (CBC) + ESR',
    code: 'HEM-101',
    category: 'Hematology',
    sampleType: 'Blood (EDTA)',
    tat: '6 Hours',
    fasting: 'Not Required',
    price: 390,
    originalPrice: 550,
    popular: true
  },
  {
    id: 't-hba1c',
    name: 'HbA1c (Glycated Hemoglobin)',
    code: 'DIA-201',
    category: 'Diabetes',
    sampleType: 'Blood',
    tat: '4 Hours',
    fasting: 'Not Required',
    price: 490,
    originalPrice: 700,
    popular: true
  },
  {
    id: 't-lipid',
    name: 'Lipid Profile Screen (Complete)',
    code: 'CAR-301',
    category: 'Cardiology',
    sampleType: 'Blood',
    tat: '12 Hours',
    fasting: '10-12 Hours Fasting',
    price: 650,
    originalPrice: 950,
    popular: true
  },
  {
    id: 't-thyroid',
    name: 'Thyroid Profile (T3, T4, TSH)',
    code: 'END-401',
    category: 'Thyroid',
    sampleType: 'Blood',
    tat: '6 Hours',
    fasting: 'Not Required',
    price: 450,
    originalPrice: 750,
    popular: true
  },
  {
    id: 't-lft',
    name: 'Liver Function Test (LFT)',
    code: 'LIV-501',
    category: 'Liver',
    sampleType: 'Blood',
    tat: '8 Hours',
    fasting: '8 Hours Fasting',
    price: 590,
    originalPrice: 850,
    popular: true
  },
  {
    id: 't-kft',
    name: 'Kidney Function Test (KFT / RFT)',
    code: 'KID-601',
    category: 'Kidney',
    sampleType: 'Blood & Urine',
    tat: '8 Hours',
    fasting: 'Not Required',
    price: 620,
    originalPrice: 900,
    popular: true
  },
  {
    id: 't-vitd',
    name: 'Vitamin D (25-Hydroxy)',
    code: 'VIT-701',
    category: 'Bone & Joint',
    sampleType: 'Blood',
    tat: '24 Hours',
    fasting: 'Not Required',
    price: 790,
    originalPrice: 1400,
    popular: true
  },
  {
    id: 't-vitb12',
    name: 'Vitamin B12 Assays',
    code: 'VIT-702',
    category: 'Bone & Joint',
    sampleType: 'Blood',
    tat: '24 Hours',
    fasting: 'Not Required',
    price: 690,
    originalPrice: 1200,
    popular: true
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'pkg-full-body',
    name: 'Suraksha Full Body Health Shield',
    concern: 'senior',
    gender: 'all',
    ageGroup: 'All Ages',
    testCount: 78,
    price: 1499,
    originalPrice: 3999,
    testsIncluded: ['CBC + ESR (24)', 'Lipid Profile (8)', 'Liver Function (11)', 'Kidney Function (8)', 'Thyroid Panel (3)', 'HbA1c & Fasting Sugar (2)', 'Urine Routine (22)'],
    description: 'Comprehensive annual wellness checkup covering vital organ functions, metabolic rate, and blood health.',
    popular: true
  },
  {
    id: 'pkg-cardio',
    name: 'Advanced Cardiac Wellness Package',
    concern: 'heart',
    gender: 'all',
    ageGroup: '30+ Years',
    testCount: 42,
    price: 2199,
    originalPrice: 4800,
    testsIncluded: ['hs-CRP Heart Risk Marker', 'Lipid Profile Extended (ApoB/ApoA1)', 'HbA1c & Fasting Glucose', 'KFT & Electrolytes', 'ECG Trace (In-center)', 'Homocysteine Level'],
    description: 'Specialized bio-marker screening designed by cardiologists to evaluate coronary vascular risk.',
    popular: true
  },
  {
    id: 'pkg-diabetes',
    name: 'Suraksha Comprehensive Diabetic Care',
    concern: 'diabetes',
    gender: 'all',
    ageGroup: 'All Ages',
    testCount: 35,
    price: 999,
    originalPrice: 2200,
    testsIncluded: ['HbA1c (Glycated Hemoglobin)', 'Fasting & PP Blood Sugar', 'Urine Microalbumin/Creatinine Ratio', 'Lipid Screen', 'Kidney Function Test'],
    description: 'Essential quarterly monitoring for diabetic and pre-diabetic patients to track glycemic control.',
    popular: true
  },
  {
    id: 'pkg-women',
    name: 'Suraksha Women Special Wellness',
    concern: 'women',
    gender: 'female',
    ageGroup: '18+ Years',
    testCount: 64,
    price: 1899,
    originalPrice: 4500,
    testsIncluded: ['Complete Thyroid Profile (T3, T4, TSH)', 'Vitamin D3 & B12', 'Serum Iron & Ferritin Assay', 'CBC & Hemogram', 'Calcium & Phosphorus', 'Hormone Assay (FSH/LH)'],
    description: 'Tailored for women to detect anemia, bone density risk, thyroid imbalances, and hormonal fluctuations.',
    popular: true
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Aditya Rao',
    specialization: 'Cardiologist',
    experienceYears: 18,
    qualification: 'MD, DM (Cardiology), FACC',
    centreName: 'Connaught Place Reference Lab',
    city: 'Delhi NCR',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    availableDays: ['Mon', 'Wed', 'Fri'],
    consultFee: 800
  },
  {
    id: 'doc-2',
    name: 'Dr. Neha Kapoor',
    specialization: 'Dermatologist',
    experienceYears: 12,
    qualification: 'MD (Dermatology, Venereology & Leprosy)',
    centreName: 'Indiranagar Diagnostics Center',
    city: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    availableDays: ['Tue', 'Thu', 'Sat'],
    consultFee: 700
  },
  {
    id: 'doc-3',
    name: 'Dr. Farhan Ali',
    specialization: 'Gastroenterologist',
    experienceYears: 15,
    qualification: 'MD, DM (Gastroenterology)',
    centreName: 'Hazratganj Flagship Center',
    city: 'Lucknow',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
    availableDays: ['Mon', 'Tue', 'Thu'],
    consultFee: 850
  },
  {
    id: 'doc-4',
    name: 'Dr. Priya Nair',
    specialization: 'Gynaecologist',
    experienceYears: 16,
    qualification: 'MS (Obstetrics & Gynaecology), DNB',
    centreName: 'Park Street Diagnostics',
    city: 'Kolkata',
    avatar: 'https://images.unsplash.com/photo-1594824813566-78853a152068?auto=format&fit=crop&q=80&w=300',
    availableDays: ['Wed', 'Fri', 'Sat'],
    consultFee: 750
  }
];

export const CENTRES_DATA: Centre[] = [
  {
    id: 'c-cp-delhi',
    name: 'Suraksha Flagship Reference Lab - Connaught Place',
    state: 'Delhi NCR',
    city: 'Delhi',
    locality: 'Connaught Place',
    address: 'E-42, Inner Circle, Opposite Radial 4, Connaught Place, New Delhi - 110001',
    phone: '+91 11 4982 3000',
    timings: '6:30 AM - 9:00 PM (All 7 Days)',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Connaught+Place+Delhi',
    hasImaging: true,
    hasHomePickup: true
  },
  {
    id: 'c-noida',
    name: 'Suraksha Care Center - Sector 18 Noida',
    state: 'Delhi NCR',
    city: 'Noida',
    locality: 'Sector 18',
    address: 'K-12, Main Market, Block K, Sector 18, Noida, Uttar Pradesh - 201301',
    phone: '+91 120 456 7800',
    timings: '6:30 AM - 8:30 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Noida',
    hasImaging: true,
    hasHomePickup: true
  },
  {
    id: 'c-lucknow',
    name: 'Suraksha Diagnostics Center - Hazratganj',
    state: 'Uttar Pradesh',
    city: 'Lucknow',
    locality: 'Hazratganj',
    address: '14, Mahatma Gandhi Marg, Near Mayfair Cinema, Hazratganj, Lucknow - 226001',
    phone: '+91 522 405 7700',
    timings: '7:00 AM - 8:30 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Lucknow',
    hasImaging: true,
    hasHomePickup: true
  },
  {
    id: 'c-patna',
    name: 'Suraksha Care Center - Kankarbagh',
    state: 'Bihar',
    city: 'Patna',
    locality: 'Kankarbagh',
    address: 'Plot 42, Doctor Colony, Main Road Kankarbagh, Patna, Bihar - 800020',
    phone: '+91 612 235 9900',
    timings: '7:00 AM - 8:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Patna',
    hasImaging: true,
    hasHomePickup: true
  },
  {
    id: 'c-kolkata',
    name: 'Suraksha Reference Lab - Park Street',
    state: 'West Bengal',
    city: 'Kolkata',
    locality: 'Park Street',
    address: '88B, Mother Teresa Sarani, Park Street, Kolkata, West Bengal - 700016',
    phone: '+91 33 4010 8800',
    timings: '6:00 AM - 9:30 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Kolkata',
    hasImaging: true,
    hasHomePickup: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Understanding HbA1c: Why Single Blood Sugar Tests Aren’t Enough',
    category: 'Diabetes Care',
    readTime: '4 min read',
    date: 'Aug 10, 2026',
    excerpt: 'Learn how glycated hemoglobin reveals your average blood glucose levels over 90 days for better diabetes management.',
    content: 'While daily blood glucose checks provide immediate snapshots, the HbA1c test measures sugar bound to red blood cells over their 3-month lifespan. This biomarker gives clinicians the true long-term picture of your metabolic control...',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    author: 'Dr. Anjali Mehra'
  },
  {
    id: 'blog-2',
    title: 'The Silent Threat of Fatty Liver: Early Diagnostic Biomarkers',
    category: 'Liver Health',
    readTime: '5 min read',
    date: 'Aug 04, 2026',
    excerpt: 'Non-Alcoholic Fatty Liver Disease (NAFLD) often presents zero symptoms. Discover key liver enzyme tests to catch it early.',
    content: 'Non-alcoholic fatty liver disease affects over 30% of Indian adults. Elevated ALT and AST enzymes combined with FibroScan imaging provide non-invasive assessment before liver fibrosis advances...',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600',
    author: 'Dr. Farhan Ali'
  },
  {
    id: 'blog-3',
    title: 'Vitamin D Deficiency in Urban India: Symptoms & Diagnostic Screening',
    category: 'Bone & Joints',
    readTime: '3 min read',
    date: 'Jul 28, 2026',
    excerpt: 'Why 8 out of 10 urban Indians suffer from low 25-Hydroxy Vitamin D levels, and how to safely correct it.',
    content: 'Despite abundant sunlight, office jobs and indoor lifestyles leave millions deficient in Vitamin D3. A simple 25-OH Vitamin D blood test guides precise supplementation to protect bone density and immunity...',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600',
    author: 'Dr. Neha Kapoor'
  }
];
