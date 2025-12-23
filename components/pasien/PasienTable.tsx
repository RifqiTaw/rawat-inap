"use client";

import { useEffect, useMemo, useState } from "react";
import { usePasienStore } from "@/store/pasien.store";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import DataTable from "../common/DataTable";
import Pagination from "../common/Pagination";

const PAGE_SIZE = 5;

export default function PasienTable() {
  const { pasien, loading, fetchPasien } = usePasienStore();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"nama" | "tanggal">("nama");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPasien();
  }, [fetchPasien]);

  const processed = useMemo(() => {
    return pasien
      .filter(
        (p) =>
          p.nama.toLowerCase().includes(search.toLowerCase()) ||
          p.nik.includes(search)
      )
      .sort((a, b) => {
        if (sortBy === "nama") {
          return a.nama.localeCompare(b.nama);
        }
        return (
          new Date(a.tanggalMasuk).getTime() -
          new Date(b.tanggalMasuk).getTime()
        );
      });
  }, [pasien, search, sortBy]);

  const totalPages = Math.ceil(processed.length / PAGE_SIZE);
  const paginated = processed.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (loading) {
    return <LoadingSpinner text="Mengambil data pasien..." />;
  }

  if (!pasien.length) {
    return <p className="text-muted-foreground">Belum ada pasien.</p>;
  }

  return (
    <>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded w-full"
          placeholder="Cari Nama / NIK"
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setSortBy(e.target.value as "nama" | "tanggal")}
        >
          <option value="nama">Sort Nama</option>
          <option value="tanggal">Sort Tanggal Masuk</option>
        </select>
      </div>

      <DataTable headers={["Nama", "NIK", "Tanggal", "Dokter"]}>
        {paginated.map((p) => (
          <tr key={p.id} className="border-t">
            <td className="p-2">{p.nama}</td>
            <td className="p-2">{p.nik}</td>
            <td className="p-2">{p.tanggalMasuk}</td>
            <td className="p-2">{p.dokter}</td>
          </tr>
        ))}
      </DataTable>

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </>
  );
}
