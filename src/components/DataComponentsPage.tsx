import React, { useState } from "react";
import {
  DataTable,
  ColumnSortControls,
  Pagination,
  type DataTableColumn,
} from "@serendipetey/components";

interface TestData {
  id: number;
  name: string;
  email: string;
  role: string;
}

const sampleData: TestData[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
];

const sampleColumns: DataTableColumn<TestData>[] = [
  {
    key: "name",
    header: "Name",
    sortable: true,
  },
  {
    key: "email",
    header: "Email",
    sortable: true,
  },
  {
    key: "role",
    header: "Role",
    sortable: true,
  },
];

export function DataComponentsPage() {
  const [sortColumn, setSortColumn] = useState<string | null>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (column: string | null, direction: "asc" | "desc") => {
    setSortColumn(column);
    setSortDirection(direction);
    console.log(`Sorting by ${column} ${direction}`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Data Components</h2>
        <p className="text-gray-600 mb-6">
          Testing data components from the design system
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold mb-3">Column Sort Controls</h3>
          <div className="space-y-4">
            <ColumnSortControls
              columns={sampleColumns}
              currentColumn={sortColumn}
              currentDirection={sortDirection}
              onColumnChange={setSortColumn}
              onDirectionChange={setSortDirection}
            />
            <ColumnSortControls
              columns={sampleColumns}
              currentColumn={sortColumn}
              currentDirection={sortDirection}
              onColumnChange={setSortColumn}
              onDirectionChange={setSortDirection}
            />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Data Table</h3>
          <DataTable
            data={sampleData}
            columns={sampleColumns}
            title="Sample Data"
            searchable={true}
            striped={true}
            hoverable={true}
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Pagination</h3>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={10}
            totalItems={50}
            onPageChange={setCurrentPage}
          />
        </section>
      </div>
    </div>
  );
}
