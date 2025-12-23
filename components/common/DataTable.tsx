import { DataTableProps } from "@/types/pasien";

export default function DataTable({ headers, children }: DataTableProps) {
  return (
    <table className="w-full border text-sm text-center">
      <thead>
        <tr className="bg-muted">
          {headers.map((h) => (
            <th key={h} className="p-2">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
