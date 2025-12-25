"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePasienStore } from "@/store/pasien.store";
import { FormState } from "@/types/pasien";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function PasienForm() {
  const router = useRouter();
  const addPasien = usePasienStore((s) => s.addPasien);

  const [form, setForm] = useState<FormState>({
    nama: "",
    nik: "",
    diagnosa: "",
    tanggalMasuk: "",
    dokter: "",
    ruangan: "",
  });

  const [error, setError] = useState<string>("");

  const validate = (): boolean => {
    if (Object.values(form).some((v) => !v)) {
      setError("Semua field wajib diisi");
      return false;
    }

    if (!/^\d{16}$/.test(form.nik)) {
      setError("NIK harus 16 digit angka");
      return false;
    }

    setError("");
    return true;
  };

  const submit = () => {
    if (!validate()) {
      toast.error("Gagal menyimpan pasien");
      return;
    }

    addPasien({
      id: crypto.randomUUID(),
      ...form,
    });

    toast.success("Pasien berhasil ditambahkan");
    router.push("/pasien");
  };

  return (
    <div className="max-w-xl space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Input
        placeholder="Nama Pasien"
        onChange={(e) => setForm({ ...form, nama: e.target.value })}
      />
      <Input
        type="number"
        placeholder="NIK (16 digit)"
        onChange={(e) => setForm({ ...form, nik: e.target.value })}
      />
      <Input
        placeholder="Diagnosa Masuk"
        onChange={(e) => setForm({ ...form, diagnosa: e.target.value })}
      />
      <Input
        type="date"
        onChange={(e) => setForm({ ...form, tanggalMasuk: e.target.value })}
      />
      <Input
        placeholder="Dokter Penanggung Jawab"
        onChange={(e) => setForm({ ...form, dokter: e.target.value })}
      />
      <Input
        placeholder="Ruangan"
        onChange={(e) => setForm({ ...form, ruangan: e.target.value })}
      />

      <Button
        onClick={submit}
        className="cursor-pointer bg-green-500 hover:bg-green-600"
      >
        Simpan Pasien
      </Button>
    </div>
  );
}
