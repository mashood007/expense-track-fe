import Sidebar from '@/components/Sidebar';

interface Transaction {
  name: string;
  amount: string;
  date: string;
  category: string;
  notes: string;
}

const transactions: Transaction[] = [
  { name: 'Room rent', amount: '12,000 €', date: '27/11/2024', category: 'Rent', notes: '' },
  { name: 'ok', amount: '-400 €', date: '27/11/2024', category: 'Paypal', notes: '' },
  { name: 'Taxie', amount: '-50 €', date: '27/11/2024', category: 'Travels', notes: '' },
  { name: 'Tour', amount: '-500 €', date: '26/11/2024', category: 'Travels', notes: '' },
];

export default function Transactions() {
  return (
    <div className="mx-auto flex h-screen max-w-screen-2xl overflow-hidden">
      <Sidebar />
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

        <table className="w-full mt-4 border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">NAME</th>
              <th className="px-4 py-2">AMOUNT</th>
              <th className="px-4 py-2">DATE</th>
              <th className="px-4 py-2">CATEGORIES</th>
              <th className="px-4 py-2">NOTES</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{transaction.name}</td>
                <td className="px-4 py-2">{transaction.amount}</td>
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">{transaction.category}</td>
                <td className="px-4 py-2">{transaction.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}