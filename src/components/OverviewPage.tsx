// design-system-import-tester/src/components/OverviewPage.tsx
import React from "react";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  SidebarBusinessLogo,
  SidebarProfile,
  type SidebarProfileData,
} from "@serendipetey/components";
import {
  FileText,
  BarChart3,
  Users,
  Settings,
  Download,
  Upload,
  Check,
} from "lucide-react";

const mockProfileData: SidebarProfileData = {
  contact: {
    name: "Design System",
    role: "Component Library",
  },
  entity: {
    name: "Serendipetey",
    id: "serendipetey-001",
  },
};

function OverviewPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Design System Overview
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          A comprehensive collection of components, tokens, and patterns that
          ensure consistent user experiences across all applications.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" leftIcon={<Download />}>
            Export Components
          </Button>
          <Button variant="outline" leftIcon={<FileText />}>
            View Documentation
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Form Components</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-1">12+</p>
          <p className="text-sm text-gray-600">
            Input fields, buttons, selects, and validation
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <BarChart3 className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Data Components</h3>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-1">8+</p>
          <p className="text-sm text-gray-600">
            Tables, pagination, sorting, and charts
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Navigation</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600 mb-1">6+</p>
          <p className="text-sm text-gray-600">
            Sidebars, menus, profiles, and navigation
          </p>
        </div>
      </div>

      {/* Component Categories */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Component Categories
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Components Preview */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
              <h4 className="text-xl font-semibold">Form Components</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Complete form controls with validation, accessibility, and
              consistent styling.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Button variant="primary" size="sm">
                  Primary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
                <Button variant="ghost" size="sm">
                  Ghost
                </Button>
              </div>

              <div className="space-y-2">
                <Input
                  label="Sample Input"
                  placeholder="Type something..."
                  size="sm"
                />
                <div className="flex items-center gap-2">
                  <Checkbox id="sample-checkbox" />
                  <label htmlFor="sample-checkbox" className="text-sm">
                    Sample checkbox option
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Components Preview */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-purple-600" />
              <h4 className="text-xl font-semibold">Navigation Components</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Sidebar navigation, profiles, and menu systems for application
              layouts.
            </p>

            <div className="space-y-4">
              <div className="border rounded-lg p-3 bg-gray-50">
                <SidebarBusinessLogo
                  businessName="Sample Business"
                  showTextWithLogo={true}
                />
              </div>

              <div className="border rounded-lg p-3 bg-gray-50">
                <SidebarProfile user={mockProfileData} />
              </div>
            </div>
          </div>

          {/* Data Components Preview */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-6 w-6 text-green-600" />
              <h4 className="text-xl font-semibold">Data Components</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Tables, pagination, sorting controls, and data visualization
              components.
            </p>

            <div className="overflow-hidden border rounded-lg">
              <div className="bg-gray-50 px-4 py-2 border-b">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Sample Data Table</span>
                  <span className="text-xs text-gray-500">3 rows</span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-sm">John Doe</span>
                  <span className="text-sm text-gray-600">Admin</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-sm">Jane Smith</span>
                  <span className="text-sm text-gray-600">User</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-sm">Bob Johnson</span>
                  <span className="text-sm text-gray-600">Manager</span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Tokens Preview */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-6 w-6 text-orange-600" />
              <h4 className="text-xl font-semibold">Design Tokens</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Consistent colors, typography, spacing, and other design
              decisions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                <span className="text-sm">Primary Blue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <span className="text-sm">Success Green</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded"></div>
                <span className="text-sm">Error Red</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="text-sm">Neutral Gray</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Getting Started
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Installation</h4>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
              pnpm add @serendipetey/components
              <br />
              pnpm add @serendipetey/design-tokens
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Import & Use</h4>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
              import {"{ Button }"} from '@serendipetey/components'
              <br />
              {'<Button variant="primary">Click me</Button>'}
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Component Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <Check className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-green-900">Stable</p>
              <p className="text-sm text-green-700">Ready for production use</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <Upload className="h-5 w-5 text-yellow-600" />
            <div>
              <p className="font-medium text-yellow-900">Beta</p>
              <p className="text-sm text-yellow-700">Available for testing</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Settings className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-blue-900">In Development</p>
              <p className="text-sm text-blue-700">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
