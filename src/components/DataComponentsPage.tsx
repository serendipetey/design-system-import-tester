import React from "react";
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Pagination,
  ColumnSortControls,
} from "@serendipetey/components";

const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "Editor" },
];

export function DataComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Data Components</h2>
        <p className="text-gray-600 mb-6">
          Testing data display components from the design system
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold mb-3">Basic Table</h3>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">DataTable</h3>
          <DataTable
            data={sampleData}
            columns={[
              {
                accessorKey: "name",
                header: "Name",
              },
              {
                accessorKey: "email",
                header: "Email",
              },
              {
                accessorKey: "role",
                header: "Role",
              },
            ]}
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Column Sort Controls</h3>
          <div className="flex gap-4">
            <ColumnSortControls
              column="name"
              sortDirection="asc"
              onSort={(column, direction) =>
                console.log("Sort:", column, direction)
              }
            />
            <ColumnSortControls
              column="email"
              sortDirection="desc"
              onSort={(column, direction) =>
                console.log("Sort:", column, direction)
              }
            />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Pagination</h3>
          <Pagination
            currentPage={1}
            totalPages={5}
            onPageChange={(page) => console.log("Page:", page)}
          />
        </section>
      </div>
    </div>
  );
}
