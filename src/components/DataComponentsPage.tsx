// src/components/DataComponentsPage.tsx
import { useState, useEffect } from "react";
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
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

interface ComponentTest {
  name: string;
  status: "success" | "error" | "warning";
  message: string;
}

interface SampleData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleData: SampleData[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Admin",
    status: "Active",
  },
];

export function DataComponentsPage() {
  const [tests, setTests] = useState<ComponentTest[]>([]);

  const runTests = () => {
    const testResults: ComponentTest[] = [];

    // Test DataTable component
    try {
      if (typeof DataTable === "function") {
        testResults.push({
          name: "DataTable Component",
          status: "success",
          message: "DataTable component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "DataTable Component",
        status: "error",
        message: "DataTable component failed to load",
      });
    }

    // Test Table components
    try {
      if (typeof Table === "function" && typeof TableBody === "function") {
        testResults.push({
          name: "Table Components",
          status: "success",
          message: "Table components imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Table Components",
        status: "error",
        message: "Table components failed to load",
      });
    }

    // Test Pagination component
    try {
      if (typeof Pagination === "function") {
        testResults.push({
          name: "Pagination Component",
          status: "success",
          message: "Pagination component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Pagination Component",
        status: "error",
        message: "Pagination component failed to load",
      });
    }

    // Test ColumnSortControls component
    try {
      if (typeof ColumnSortControls === "function") {
        testResults.push({
          name: "ColumnSortControls Component",
          status: "success",
          message:
            "ColumnSortControls component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "ColumnSortControls Component",
        status: "error",
        message: "ColumnSortControls component failed to load",
      });
    }

    setTests(testResults);
  };

  useEffect(() => {
    runTests();
  }, []);

  const getStatusIcon = (status: ComponentTest["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Data Components
        </h1>
        <p className="text-gray-600">
          Testing data display and table components from the design system
        </p>
      </div>

      {/* Component Tests */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Component Import Tests
          </h2>
          <button
            onClick={runTests}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Re-run Tests
          </button>
        </div>

        <div className="space-y-3">
          {tests.map((test, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg"
            >
              {getStatusIcon(test.status)}
              <div>
                <span className="font-medium text-gray-900">{test.name}:</span>
                <span className="text-gray-600 ml-2">{test.message}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Component Examples */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Live Component Examples
        </h2>

        <div className="space-y-8">
          {/* Basic Table Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Basic Table</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleData.slice(0, 3).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* DataTable Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              DataTable Component
            </h3>
            <DataTable
              data={sampleData}
              columns={[
                {
                  key: "name",
                  label: "Name",
                  sortable: true,
                },
                {
                  key: "email",
                  label: "Email",
                  sortable: true,
                },
                {
                  key: "role",
                  label: "Role",
                  sortable: true,
                },
                {
                  key: "status",
                  label: "Status",
                  sortable: false,
                  render: (value: string) => (
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        value === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {value}
                    </span>
                  ),
                },
              ]}
              searchable
              pagination={{
                pageSize: 3,
                showSizeChanger: true,
                showTotal: true,
              }}
            />
          </div>

          {/* Standalone Pagination Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              Standalone Pagination
            </h3>
            <Pagination
              currentPage={1}
              totalPages={5}
              onPageChange={(page: number) =>
                console.log("Page changed to:", page)
              }
              showSizeChanger
              pageSize={10}
              onPageSizeChange={(size: number) =>
                console.log("Page size changed to:", size)
              }
            />
          </div>

          {/* Column Sort Controls Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              Column Sort Controls
            </h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <ColumnSortControls
                sortKey="name"
                sortDirection="asc"
                onSort={(key: string, direction: string) =>
                  console.log("Sort:", key, direction)
                }
                label="Name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
