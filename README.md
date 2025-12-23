# 🏥 Modul Rawat Inap – Pasien Masuk

This project is a frontend application for **Rawat Inap (Inpatient Admission)** module, built as part of a frontend challenge.  
The application allows users to input inpatient data and view a list of active patients with search, sorting, and pagination features.

The project is built using **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Zustand**.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Zustand (State Management)**

---

## ✨ Features

### 1. Formulir Pasien Masuk
Form to input inpatient data with the following fields:
- Nama Pasien
- NIK
- Diagnosa Masuk
- Tanggal Masuk
- Dokter Penanggung Jawab
- Ruangan

**Validation rules:**
- All fields are required
- NIK must be exactly 16 digits
- Error message is shown when validation fails

After successful submission, the patient data will be added to the active patient list.

---

### 2. Daftar Pasien Aktif
A table displaying all active inpatients with features:
- 🔍 Search by **Nama / NIK**
- 🔃 Sorting by **Nama** or **Tanggal Masuk**
- 📄 Client-side pagination
- ⏳ Loading state (mock delay 500ms)
- 📭 Empty state when no data is available

---

### 3. State Management
Global state is managed using **Zustand** to:
- Store patient data across pages
- Handle loading state
- Simulate API behavior using mock data
- Prevent data loss during route transitions

---

### 4. Reusable Components
The project applies reusable component concepts at different levels:

- **Global reusable components**
  - LoadingSpinner
  - Pagination
  - DataTable
- **Feature-level components**
  - PasienForm
  - PasienTable

---
