import PasienTable from "@/components/pasien/PasienTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PasienPage() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold">Daftar Pasien Aktif</h1>
        <Link href="/pasien-masuk">
          <Button>+ Pasien Masuk</Button>
        </Link>
      </div>

      <PasienTable />
    </>
  );
}
