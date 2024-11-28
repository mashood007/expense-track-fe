import DataTable from "@/components/common/Table";
import { TableHeader } from "@/types/data-table";

const Store = () => {

  const headers: TableHeader[] = [
    { label: "NAME", key: "name" },
    { label: "LOCATION", key: "location.name" }
  ]
  const data: any[] = []

  return (

    <main className="flex-1 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Transactions (4)</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          + Add transactions
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <select className="border px-4 py-2 rounded">
          <option>Incomes & Expenses</option>
        </select>
        <select className="border px-4 py-2 rounded">
          <option>Filter by...</option>
        </select>
        <select className="border px-4 py-2 rounded">
          <option>Select categories...</option>
        </select>
        <input
          type="date"
          className="border px-4 py-2 rounded"
          defaultValue="2023-11-27"
        />
      </div>
      <DataTable data={data} headers={headers} />
    </main>
  );
};

export default Store;
