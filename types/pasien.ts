export type FormState = {
  nama: string;
  nik: string;
  diagnosa: string;
  tanggalMasuk: string;
  dokter: string;
  ruangan: string;
};

export interface Pasien {
  id: string;
  nama: string;
  nik: string;
  diagnosa: string;
  tanggalMasuk: string;
  dokter: string;
  ruangan: string;
}

export interface DataTableProps {
  headers: string[];
  children: React.ReactNode;
}

export interface LoadingSpinnerProps {
  text?: string;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export interface PasienState {
  pasien: Pasien[];
  loading: boolean;
  fetchPasien: () => Promise<void>;
  addPasien: (data: Pasien) => void;
}
