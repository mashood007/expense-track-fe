import { TableProps } from "@/types/data-table"

const DataTable = ({ data, headers }: TableProps) => {

  return (
    <table className="w-full mt-4 border">
      <thead>
        <tr className="bg-gray-100 text-left">
          {
            headers.map((header) => {
              return (
                <th className="px-4 py-2">{header.label}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            {headers.map((header) => (
              <td key={header.key + index} className="px-4 py-2">
                {item[header.key] || '-'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
