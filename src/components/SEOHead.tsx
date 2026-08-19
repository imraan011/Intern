import React, { useEffect } from 'react';
import { PageView } from '../types/suraksha';

interface SEOHeadProps {
  currentPage: PageView;
}

const SEO_MAP: Record<PageView, { title: string; description: string }> = {
  home: {
    title: 'Suraksha Care Diagnostics | Book Lab Tests & Full Body Checkup Online',
    description: 'Book diagnostic blood tests, pathology, radiology & full body health packages online with Suraksha Care Diagnostics. NABL Accredited, Free Home Sample Collection & Instant PDF Reports.'
  },
  'book-test': {
    title: 'Book Diagnostic Blood Tests Online | CBC, HbA1c, Thyroid, LFT, KFT - Suraksha Care',
    description: 'Search & book pathology diagnostic tests online with 100% smart barcoded sample collection. CBC, HbA1c, Lipid Profile, Vitamin D, Thyroid panel available at best prices.'
  },
  packages: {
    title: 'Preventive Health Checkup Packages | Full Body Shield & Cardiac Screening - Suraksha Care',
    description: 'Explore comprehensive health checkup packages for Seniors, Women, Diabetes, & Heart Health. Early disease detection panels designed by expert pathologists.'
  },
  'consult-doctor': {
    title: 'Consult Specialist Doctors Online & In-Person | Cardiology, Gynaecology - Suraksha Care',
    description: 'Book appointments with senior specialist doctors across India. Cardiologists, Dermatologists, Endocrinologists, Gynaecologists available at Suraksha care hubs.'
  },
  centres: {
    title: 'Find Diagnostic Lab Centres Near You | NABL Reference Labs - Suraksha Care',
    description: 'Locate Suraksha diagnostic lab reference centers, automated sample hubs, and imaging clinics in Delhi NCR, Mumbai, Kolkata, Bengaluru, Hyderabad, & more.'
  },
  'download-report': {
    title: 'Download Patient Test Reports Online | Instant PDF Access - Suraksha Care',
    description: 'Access and download your digital NABL barcoded diagnostic PDF report online using your Lab CRN or registered mobile number. No login or password required.'
  },
  about: {
    title: 'About Suraksha Care Diagnostics | 30+ Years of Excellence in Healthcare',
    description: 'Learn about Suraksha Care Diagnostics heritage, 50+ NABL accredited reference laboratories, 1,000+ specialized tests, and commitment to medical accuracy.'
  },
  blog: {
    title: 'Medical Health Insights & Diagnostic Guidance Blog - Suraksha Care',
    description: 'Read evidence-based health awareness articles on HbA1c, fatty liver disease, vitamin D deficiency, and metabolic wellness written by senior pathologists.'
  },
  contact: {
    title: 'Contact Us & Franchise Inquiries | Suraksha Care Diagnostics',
    description: 'Get in touch with Suraksha customer support, report assistance, career opportunities, or diagnostic lab franchise partnerships.'
  }
};

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPage }) => {
  useEffect(() => {
    const seoInfo = SEO_MAP[currentPage] || SEO_MAP.home;
    document.title = seoInfo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seoInfo.description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', seoInfo.description);
      document.head.appendChild(metaDesc);
    }
  }, [currentPage]);

  return null;
};
