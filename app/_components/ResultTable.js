import { GiPlainSquare } from "react-icons/gi";
function ResultTable() {
  return (
    <table className="min-w-full border border-brand-primary">
      <thead>
        <tr className="bg-accent-primary text-brand-secondary">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Number</th>
          <th className="px-4 py-2">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344580</td>
          <td className="px-4 py-2 border-t border-gray-300">9</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-rust" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344579</td>
          <td className="px-4 py-2 border-t border-gray-300">5</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-emerald" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344578</td>
          <td className="px-4 py-2 border-t border-gray-300">0</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-purple" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344577</td>
          <td className="px-4 py-2 border-t border-gray-300">4</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-emerald" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344576</td>
          <td className="px-4 py-2 border-t border-gray-300">8</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-rust" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344575</td>
          <td className="px-4 py-2 border-t border-gray-300">7</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-emerald" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344574</td>
          <td className="px-4 py-2 border-t border-gray-300">1</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-emerald" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344573</td>
          <td className="px-4 py-2 border-t border-gray-300">2</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-rust" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344572</td>
          <td className="px-4 py-2 border-t border-gray-300">6</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-purple" />
            </div>
          </td>
        </tr>
        <tr className="text-center hover:bg-gray-50">
          <td className="px-4 py-2 border-t border-gray-300">2628344571</td>
          <td className="px-4 py-2 border-t border-gray-300">3</td>
          <td className="px-4 py-2 border-t border-gray-300">
            <div className="flex justify-center items-center">
              <GiPlainSquare className="text-rust" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultTable;
