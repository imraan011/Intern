import {
  TestCategory,
  DiagnosticTech,
  CenterLocation,
  DoctorTestimonial,
} from '../types/suraksha-types';

export const TEST_CATEGORIES: TestCategory[] = [
  {
    id: 'oncology',
    name: 'Oncology',
    icon: 'biotech',
    description: 'Precision molecular profiling and tumor biomarker testing for early cancer detection.',
    popularTests: [
      { name: 'Liquid Biopsy Panel (NGS)', code: 'ONC-101', tat: '48 Hours', sampleType: 'Blood', price: 4500 },
      { name: 'BRCA1 / BRCA2 Gene Mutation', code: 'ONC-102', tat: '3 Days', sampleType: 'Blood/Tissue', price: 6800 },
      { name: 'CEA & CA-125 Biomarker Marker', code: 'ONC-103', tat: '24 Hours', sampleType: 'Blood', price: 1800 }
    ]
  },
  {
    id: 'hematology',
    name: 'Hematology',
    icon: 'bloodtype',
    description: 'Comprehensive blood disorders analysis, hemoglobinopathies, and coagulation profiles.',
    popularTests: [
      { name: 'Complete Blood Count (CBC) + ESR', code: 'HEM-201', tat: '6 Hours', sampleType: 'Blood', price: 450 },
      { name: 'HbA1c & Glycated Hemoglobin', code: 'HEM-202', tat: '4 Hours', sampleType: 'Blood', price: 550 },
      { name: 'Thalassemia Gene Profile', code: 'HEM-203', tat: '48 Hours', sampleType: 'Blood', price: 2400 }
    ]
  },
  {
    id: 'reproductive',
    name: 'Reproductive Health',
    icon: 'family_history',
    description: 'Hormonal fertility markers, prenatal screening (NIPT), and IVF diagnostics.',
    popularTests: [
      { name: 'AMH (Anti-Mullerian Hormone)', code: 'REP-301', tat: '24 Hours', sampleType: 'Blood', price: 2200 },
      { name: 'Non-Invasive Prenatal Screening (NIPT)', code: 'REP-302', tat: '5 Days', sampleType: 'Blood', price: 14500 },
      { name: 'Double Marker First Trimester Screen', code: 'REP-303', tat: '24 Hours', sampleType: 'Blood', price: 2800 }
    ]
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: 'favorite',
    description: 'Advanced cardiac biomarkers, lipid subfractions, and vascular risk assessment.',
    popularTests: [
      { name: 'High-Sensitivity Troponin I (hsTnI)', code: 'CAR-401', tat: '2 Hours', sampleType: 'Blood', price: 1200 },
      { name: 'NT-proBNP Heart Failure Marker', code: 'CAR-402', tat: '12 Hours', sampleType: 'Blood', price: 2600 },
      { name: 'Advanced Lipid Profile (ApoB/Lp(a))', code: 'CAR-403', tat: '24 Hours', sampleType: 'Blood', price: 1650 }
    ]
  },
  {
    id: 'endocrinology',
    name: 'Endocrinology',
    icon: 'vital_signs',
    description: 'Thyroid panel, adrenal stress tests, pituitary and metabolic hormone assays.',
    popularTests: [
      { name: 'Complete Thyroid Profile (T3, T4, TSH)', code: 'END-501', tat: '6 Hours', sampleType: 'Blood', price: 500 },
      { name: 'Vitamin D (25-OH) & Vitamin B12', code: 'END-502', tat: '12 Hours', sampleType: 'Blood', price: 1100 },
      { name: 'Cortisol & Insulin Resistance (HOMA-IR)', code: 'END-503', tat: '24 Hours', sampleType: 'Blood', price: 1400 }
    ]
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    icon: 'water_drop',
    description: 'Kidney function panel, microalbuminuria, and renal stone risk analysis.',
    popularTests: [
      { name: 'Kidney Function Test (KFT) + eGFR', code: 'NEP-601', tat: '6 Hours', sampleType: 'Blood & Urine', price: 650 },
      { name: 'Urine Microalbumin/Creatinine Ratio', code: 'NEP-602', tat: '12 Hours', sampleType: 'Urine', price: 750 }
    ]
  },
  {
    id: 'urology',
    name: 'Urology',
    icon: 'health_and_safety',
    description: 'PSA screening, prostate health indexes, and urinary infection PCR panels.',
    popularTests: [
      { name: 'Total & Free PSA (Prostate Screen)', code: 'URO-701', tat: '12 Hours', sampleType: 'Blood', price: 1150 },
      { name: 'Urine Culture & Sensitivity', code: 'URO-702', tat: '48 Hours', sampleType: 'Urine', price: 850 }
    ]
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology Diagnostics',
    icon: 'visibility',
    description: 'Ocular inflammatory bio-markers and diabetic retinopathy risk profiles.',
    popularTests: [
      { name: 'Diabetic Retinopathy Blood Marker Panel', code: 'OPH-801', tat: '24 Hours', sampleType: 'Blood', price: 1900 }
    ]
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: 'psychology',
    description: 'Autoimmune encephalitis panel, neuro-filament light chain, and CSF analysis.',
    popularTests: [
      { name: 'Autoimmune Encephalitis Screen', code: 'NEU-901', tat: '4 Days', sampleType: 'Blood/CSF', price: 9200 },
      { name: 'Serum Copper & Ceruloplasmin', code: 'NEU-902', tat: '24 Hours', sampleType: 'Blood', price: 1600 }
    ]
  }
];

export const DIAGNOSTIC_TECHS: DiagnosticTech[] = [
  {
    id: 'mol-diag',
    title: 'Molecular Diagnostics',
    subtitle: 'DNA / RNA Sequencing',
    description: 'Real-time PCR and Next-Generation Sequencing (NGS) for ultra-sensitive pathogen detection and oncogenic mutations.',
    features: ['99.9% Analytical Specificity', 'Rapid 24-48h Genotype Turnaround', 'FDA-cleared Reagent Chemistries'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ihc',
    title: 'Immunohistochemistry (IHC)',
    subtitle: 'Tissue Protein Staining',
    description: 'Fully automated Roche Ventana staining platforms for precise tumor origin classification and immunotherapeutic drug targets.',
    features: ['300+ Validated Antibody Markers', 'Digital Whole Slide Imaging', 'Dual-Expert Pathologist Review'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'flow-cyto',
    title: 'Flow Cytometry',
    subtitle: 'Single-Cell Analysis',
    description: '10-color BD FACSLyric cytometers for leukemia/lymphoma immunophenotyping and minimal residual disease (MRD) monitoring.',
    features: ['Sub-population Lymphocyte Counting', 'High-throughput 10,000 cells/sec', 'Standardized EuroFlow Protocols'],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'histo',
    title: 'Histopathology',
    subtitle: 'Microscopic Tissue Examination',
    description: 'Cryostat frozen sectioning and paraffin tissue processing overseen by senior oncopathologists.',
    features: ['Same-Day Intraoperative Frozen Sections', 'Special Histochemical Stains', 'Archival Slide Preservation'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cyto-path',
    title: 'Cytopathology',
    subtitle: 'Cellular Morphology Assessment',
    description: 'Liquid-based cytology (LBC) for Pap smears and fine-needle aspiration cytology (FNAC) with computer-assisted screening.',
    features: ['ThinPrep LBC Technology', 'Image-Guided Ultrasound FNAC', 'Reduced Unsatisfactory Smear Rates'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cyto-gene',
    title: 'Cytogenetics',
    subtitle: 'Karyotyping & FISH',
    description: 'Fluorescence In-Situ Hybridization (FISH) and G-banded karyotyping to detect chromosomal translocations and copy number variants.',
    features: ['High-Resolution Chromosome Banding', 'Prenatal & Somatic Mutation Panels', 'Automated Metaphase Finding'],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800'
  }
];

export const CITY_CENTERS: CenterLocation[] = [
  {
    id: 'c-delhi',
    city: 'Delhi',
    area: 'Connaught Place & South Ext.',
    address: 'E-42, Inner Circle, Connaught Place, New Delhi - 110001',
    phone: '+91 11 4982 3000',
    timings: '6:30 AM - 9:00 PM (All 7 Days)',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Connaught+Place+Delhi',
    hasHomeCollection: true
  },
  {
    id: 'c-gurugram',
    city: 'Gurugram',
    area: 'Golf Course Road, Sector 54',
    address: 'Ground Floor, DLF Horizon Center, Sector 54, Gurugram - 122002',
    phone: '+91 124 412 8800',
    timings: '6:30 AM - 9:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Gurugram',
    hasHomeCollection: true
  },
  {
    id: 'c-bengaluru',
    city: 'Bengaluru',
    area: 'Indiranagar & Koramangala',
    address: '100 Feet Road, 12th Main, Indiranagar, Bengaluru - 560038',
    phone: '+91 80 4610 9900',
    timings: '6:00 AM - 9:30 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Bengaluru',
    hasHomeCollection: true
  },
  {
    id: 'c-lucknow',
    city: 'Lucknow',
    area: 'Hazratganj & Gomti Nagar',
    address: '14, Mahatma Gandhi Marg, Hazratganj, Lucknow - 226001',
    phone: '+91 522 405 7700',
    timings: '7:00 AM - 8:30 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Lucknow',
    hasHomeCollection: true
  },
  {
    id: 'c-bhopal',
    city: 'Bhopal',
    area: 'MP Nagar Zone 1',
    address: 'Plot 112, City Center, MP Nagar Zone 1, Bhopal - 462011',
    phone: '+91 755 428 1100',
    timings: '7:00 AM - 8:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Bhopal',
    hasHomeCollection: true
  },
  {
    id: 'c-indore',
    city: 'Indore',
    area: 'Vijay Nagar',
    address: '201, Scheme No 54, Vijay Nagar, Indore - 452010',
    phone: '+91 731 490 2200',
    timings: '6:30 AM - 9:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Indore',
    hasHomeCollection: true
  },
  {
    id: 'c-ludhiana',
    city: 'Ludhiana',
    area: 'Ferozepur Road',
    address: 'Opposite Aarti Complex, Ferozepur Road, Ludhiana - 141001',
    phone: '+91 161 502 4400',
    timings: '7:00 AM - 8:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Ludhiana',
    hasHomeCollection: true
  },
  {
    id: 'c-rishikesh',
    city: 'Rishikesh',
    area: 'Dehradun Road',
    address: 'Near AIIMS Gate 2, Dehradun Road, Rishikesh - 249201',
    phone: '+91 135 243 5500',
    timings: '7:00 AM - 7:30 PM',
    mapsUrl: 'https://maps.google.com/?q=Suraksha+Diagnostics+Rishikesh',
    hasHomeCollection: true
  }
];

export const DOCTOR_TESTIMONIALS: DoctorTestimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Anjali Mehra',
    role: 'Senior Medical Oncologist',
    city: 'Delhi NCR',
    hospital: 'Max Super Speciality Hospital',
    quote: 'Suraksha Diagnostics provides molecular profiling results with remarkable turnaround times. Their NGS reports give me clear actionable targets for therapy.',
    avatar: 'https://images.unsplash.com/photo-1594824813566-78853a152068?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't-2',
    name: 'Dr. Rohit Sharma',
    role: 'Chief Consultant Pathologist',
    city: 'Pune',
    hospital: 'Sahyadri Specialty Hospital',
    quote: 'As a pathologist, I respect their rigorous internal & NABL QC protocols. The IHC staining quality and slide clarity match top international reference labs.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't-3',
    name: 'Dr. Kavita Iyer',
    role: 'Consultant Obstetrician & Gynaecologist',
    city: 'Bengaluru',
    hospital: 'Manipal Hospitals',
    quote: 'For prenatal screening (NIPT & double marker), Suraksha is my first choice. Their genetic counselor support for expectant parents is empathetic and thorough.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
  }
];
