import { TESTS_DATA, PACKAGES_DATA, DOCTORS_DATA, CENTRES_DATA } from '../data/mockData';
import { TestItem, PackageItem, Doctor, Centre } from '../types/suraksha';

const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const fetchTests = async (): Promise<TestItem[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/tests`);
    if (!res.ok) throw new Error('API offline');
    const json = await res.json();
    return json.success && json.data.length ? json.data : TESTS_DATA;
  } catch {
    return TESTS_DATA;
  }
};

export const fetchPackages = async (): Promise<PackageItem[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/packages`);
    if (!res.ok) throw new Error('API offline');
    const json = await res.json();
    return json.success && json.data.length ? json.data : PACKAGES_DATA;
  } catch {
    return PACKAGES_DATA;
  }
};

export const fetchDoctors = async (): Promise<Doctor[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/doctors`);
    if (!res.ok) throw new Error('API offline');
    const json = await res.json();
    return json.success && json.data.length ? json.data : DOCTORS_DATA;
  } catch {
    return DOCTORS_DATA;
  }
};

export const fetchCentres = async (): Promise<Centre[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/centres`);
    if (!res.ok) throw new Error('API offline');
    const json = await res.json();
    return json.success && json.data.length ? json.data : CENTRES_DATA;
  } catch {
    return CENTRES_DATA;
  }
};

export const createBooking = async (bookingData: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });
    const json = await res.json();
    return json.success ? json.data : null;
  } catch {
    return null;
  }
};
