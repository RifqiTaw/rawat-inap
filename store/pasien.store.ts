import { create } from "zustand";
import { PasienState } from "@/types/pasien";

export const usePasienStore = create<PasienState>((set, get) => ({
  pasien: [],
  loading: false,

  fetchPasien: async () => {
    if (get().pasien.length > 0) return;

    set({ loading: true });

    await new Promise((resolve) => setTimeout(resolve, 500));

    set({
      pasien: [
        {
          id: "1",
          nama: "Andi Saputra",
          nik: "3174010101010001",
          diagnosa: "Demam",
          tanggalMasuk: "2025-12-08",
          dokter: "Dr. Budi",
          ruangan: "Melati 1",
        },
        {
          id: "2",
          nama: "Beri Santoso",
          nik: "3174010101010002",
          diagnosa: "Demam",
          tanggalMasuk: "2025-12-07",
          dokter: "Dr. Budi",
          ruangan: "Melati 2",
        },
        {
          id: "3",
          nama: "Citra Dewi",
          nik: "3174010101010003",
          diagnosa: "Demam",
          tanggalMasuk: "2025-12-06",
          dokter: "Dr. Budi",
          ruangan: "Melati 3",
        },
        {
          id: "4",
          nama: "Dewi Lestari",
          nik: "3174010101010004",
          diagnosa: "Demam",
          tanggalMasuk: "2025-12-06",
          dokter: "Dr. Budi",
          ruangan: "Melati 4",
        },
        {
          id: "5",
          nama: "Eka Putri",
          nik: "3174010101010005",
          diagnosa: "Demam",
          tanggalMasuk: "2025-12-04",
          dokter: "Dr. Budi",
          ruangan: "Melati 5",
        },
        {
          id: "6",
          nama: "Fajar Hidayat",
          nik: "3174010101010006",
          diagnosa: "Demam",
          tanggalMasuk: "2025-12-12",
          dokter: "Dr. Budi",
          ruangan: "Melati 3",
        },
      ],
      loading: false,
    });
  },

  addPasien: (data) =>
    set((state) => ({
      pasien: [...state.pasien, data],
    })),
}));
