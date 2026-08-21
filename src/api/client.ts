import { TESTS_DATA, PACKAGES_DATA, DOCTORS_DATA, CENTRES_DATA } from '../data/mockData';
import { TestItem, PackageItem, Doctor, Centre } from '../types/suraksha';

const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:5000/api';

// GET /api/tests
export const fetchTests = async (): Promise<TestItem[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/tests`);
    if (!res.ok) throw new Error('API request failed');
    const json = await res.json();
    return json.success && json.data.length ? json.data : TESTS_DATA;
  } catch {
    return TESTS_DATA;
  }
};

// GET /api/packages
export const fetchPackages = async (): Promise<PackageItem[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/packages`);
    if (!res.ok) throw new Error('API request failed');
    const json = await res.json();
    return json.success && json.data.length ? json.data : PACKAGES_DATA;
  } catch {
    return PACKAGES_DATA;
  }
};

// GET /api/doctors
export const fetchDoctors = async (): Promise<Doctor[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/doctors`);
    if (!res.ok) throw new Error('API request failed');
    const json = await res.json();
    return json.success && json.data.length ? json.data : DOCTORS_DATA;
  } catch {
    return DOCTORS_DATA;
  }
};

// GET /api/centres
export const fetchCentres = async (): Promise<Centre[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/centres`);
    if (!res.ok) throw new Error('API request failed');
    const json = await res.json();
    return json.success && json.data.length ? json.data : CENTRES_DATA;
  } catch {
    return CENTRES_DATA;
  }
};

// POST /api/bookings — Create new home sample / lab test booking
export const createBooking = async (bookingData: {
  patientName: string;
  mobile: string;
  email?: string;
  address: string;
  scheduledDate?: string;
  timeSlot?: string;
  items: Array<{ id: string; title: string; price: number; type: 'test' | 'package'; quantity?: number }>;
  totalAmount: number;
}) => {
  const res = await fetch(`${API_BASE_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.error?.message || 'Failed to submit booking');
  }
  return json.data;
};

// GET /api/bookings/:id — Retrieve booking detail by ID
export const getBookingById = async (bookingId: string) => {
  const res = await fetch(`${API_BASE_URL}/bookings/${bookingId}`);
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.error?.message || 'Booking not found');
  }
  return json.data;
};

// POST /api/appointments — Book specialist doctor consultation
export const bookDoctorAppointment = async (appointmentData: {
  doctorId?: string;
  doctorName: string;
  specialization?: string;
  centreName?: string;
  patientName: string;
  mobile: string;
  preferredDate?: string;
  preferredTime?: string;
}) => {
  const res = await fetch(`${API_BASE_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appointmentData)
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.error?.message || 'Failed to book appointment');
  }
  return json.data;
};

// POST /api/callback — Request a quick callback from Suraksha lab representative
export const requestCallback = async (callbackData: {
  name: string;
  mobile: string;
  message?: string;
}) => {
  const res = await fetch(`${API_BASE_URL}/callback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(callbackData)
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.error?.message || 'Failed to send callback request');
  }
  return json.data;
};

// GET /api/reports/lookup — Lookup diagnostic report by labId or mobile
export const lookupReport = async (labId?: string, mobile?: string) => {
  const params = new URLSearchParams();
  if (labId) params.append('labId', labId);
  if (mobile) params.append('mobile', mobile);

  const res = await fetch(`${API_BASE_URL}/reports/lookup?${params.toString()}`);
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.error?.message || 'No patient report found');
  }
  return json.data;
};

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  mobile: string;
}

// POST /api/auth/register — Register new patient account
export const registerUser = async (data: { name: string; email: string; mobile: string; password: string }) => {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.error?.message || 'Registration failed');
  }
  if (json.data.token) {
    localStorage.setItem('suraksha_token', json.data.token);
  }
  return json.data;
};

// POST /api/auth/login — Login patient account
export const loginUser = async (credentials: { email: string; password: string }) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.error?.message || 'Login failed');
  }
  if (json.data.token) {
    localStorage.setItem('suraksha_token', json.data.token);
  }
  return json.data;
};

// GET /api/auth/me — Fetch active session user profile
export const getCurrentUser = async (): Promise<UserProfile | null> => {
  const token = localStorage.getItem('suraksha_token');
  if (!token) return null;

  try {
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    if (res.ok && json.success) {
      return json.data.user;
    }
  } catch {
    // Ignore network error in fallback
  }
  return null;
};

// Logout active user session
export const logoutUser = () => {
  localStorage.removeItem('suraksha_token');
};

