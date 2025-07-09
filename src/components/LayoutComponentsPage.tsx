// design-system-import-tester/src/components/LayoutComponentsPage.tsx
import React, { useState } from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSection,
  SidebarMenuSectionRoot,
  SidebarProfile,
  SidebarBusinessLogo,
  Button,
  type SidebarProfileData,
} from "@serendipetey/components";
import {
  LayoutDashboard,
  Sidebar,
  Menu,
  Grid3X3,
  Columns,
  Rows,
  PanelLeft,
  PanelRight,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";

const mockProfileData: SidebarProfileData = {
  contact: {
    name: "Layout Demo",
    role: "UI Designer",
  },
  entity: {
    name: "Design Team",
    id: "design-001",
  },
};

export function LayoutComponentsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Layout Components</h2>
        <p className="text-gray-600 mb-6">
          Structural components for organizing content and creating consistent
          layouts
        </p>
      </div>

      {/* Grid Systems */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Grid3X3 className="h-5 w-5" />
          Grid Systems
        </h3>

        <div className="bg-white rounded-lg border p-6">
          <h4 className="font-medium mb-4">Responsive Grid Examples</h4>

          <div className="space-y-4">
            <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="bg-blue-100 p-2 text-center text-xs rounded"
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-green-100 p-4 rounded text-center">
                <p className="font-medium">1 Column</p>
                <p className="text-sm text-gray-600">Mobile</p>
              </div>
              <div className="bg-green-100 p-4 rounded text-center">
                <p className="font-medium">2 Columns</p>
                <p className="text-sm text-gray-600">Tablet</p>
              </div>
              <div className="bg-green-100 p-4 rounded text-center">
                <p className="font-medium">3 Columns</p>
                <p className="text-sm text-gray-600">Desktop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Layouts */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Sidebar className="h-5 w-5" />
          Sidebar Layouts
        </h3>

        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="flex h-80">
            <div
              className={`${
                sidebarCollapsed ? "w-16" : "w-64"
              } transition-all duration-300 bg-gray-50 border-r flex flex-col`}
            >
              <div className="p-4 border-b bg-white">
                <div className="flex items-center justify-between">
                  {!sidebarCollapsed && (
                    <SidebarBusinessLogo
                      businessName="Layout Demo"
                      showTextWithLogo={true}
                    />
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    leftIcon={sidebarCollapsed ? <PanelRight /> : <PanelLeft />}
                  >
                    {!sidebarCollapsed && "Collapse"}
                  </Button>
                </div>
              </div>

              <div className="flex-1 p-2">
                <SidebarMenuSectionRoot>
                  <div className="space-y-1">
                    <SidebarMenuItem icon={LayoutDashboard} active={true}>
                      {!sidebarCollapsed && "Dashboard"}
                    </SidebarMenuItem>
                    <SidebarMenuItem icon={Grid3X3}>
                      {!sidebarCollapsed && "Grid System"}
                    </SidebarMenuItem>
                    <SidebarMenuItem icon={Columns}>
                      {!sidebarCollapsed && "Layouts"}
                    </SidebarMenuItem>
                  </div>
                </SidebarMenuSectionRoot>
              </div>

              {!sidebarCollapsed && (
                <div className="border-t p-4 bg-white">
                  <SidebarProfile user={mockProfileData} />
                </div>
              )}
            </div>

            <div className="flex-1 p-6 bg-white">
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Main Content Area</h4>
                <p className="text-gray-600">
                  This demonstrates how sidebar layouts adapt based on collapsed
                  state. The content area automatically adjusts its width.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <h5 className="font-medium">Content Block 1</h5>
                    <p className="text-sm text-gray-600">Sample content here</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <h5 className="font-medium">Content Block 2</h5>
                    <p className="text-sm text-gray-600">More content here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Container Layouts */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Monitor className="h-5 w-5" />
          Container Layouts
        </h3>

        <div className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <h4 className="font-medium mb-3">Full Width Container</h4>
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm">
                This container spans the full width of its parent.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h4 className="font-medium mb-3">Centered Container (Max Width)</h4>
            <div className="max-w-4xl mx-auto bg-green-50 p-4 rounded">
              <p className="text-sm text-center">
                This container has a maximum width and is centered horizontally.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h4 className="font-medium mb-3">Padded Container</h4>
            <div className="bg-purple-50 p-8 rounded">
              <p className="text-sm">
                This container has consistent padding on all sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Layouts */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Smartphone className="h-5 w-5" />
          Responsive Layouts
        </h3>

        <div className="bg-white rounded-lg border p-6">
          <h4 className="font-medium mb-4">Responsive Breakpoint Demo</h4>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="h-4 w-4" />
                <span className="font-medium">Mobile (&lt; 768px)</span>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-100 p-3 rounded">
                  Single column layout
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  Stacked navigation
                </div>
                <div className="bg-gray-100 p-3 rounded">Condensed content</div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Tablet className="h-4 w-4" />
                <span className="font-medium">Tablet (768px - 1024px)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-100 p-3 rounded">Two column layout</div>
                <div className="bg-gray-100 p-3 rounded">Side navigation</div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="h-4 w-4" />
                <span className="font-medium">Desktop (&gt; 1024px)</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-100 p-3 rounded">
                  Three column layout
                </div>
                <div className="bg-gray-100 p-3 rounded">Full navigation</div>
                <div className="bg-gray-100 p-3 rounded">Extended content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Layouts */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Rows className="h-5 w-5" />
          Card & Content Layouts
        </h3>

        <div className="bg-white rounded-lg border p-6">
          <h4 className="font-medium mb-4">Card Grid Layouts</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 bg-gradient-to-br from-blue-50 to-blue-100">
              <h5 className="font-medium mb-2">Feature Card</h5>
              <p className="text-sm text-gray-600 mb-3">
                Description of the feature goes here
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>

            <div className="border rounded-lg p-4 bg-gradient-to-br from-green-50 to-green-100">
              <h5 className="font-medium mb-2">Stats Card</h5>
              <p className="text-2xl font-bold text-green-600 mb-1">1,234</p>
              <p className="text-sm text-gray-600">Total users</p>
            </div>

            <div className="border rounded-lg p-4 bg-gradient-to-br from-purple-50 to-purple-100">
              <h5 className="font-medium mb-2">Action Card</h5>
              <p className="text-sm text-gray-600 mb-3">
                Quick action or call-to-action
              </p>
              <Button variant="primary" size="sm">
                Take Action
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Best Practices */}
      <section className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Layout Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Spacing & Rhythm</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Use consistent spacing scales (4px, 8px, 16px, 24px)</li>
              <li>• Maintain vertical rhythm with line-height</li>
              <li>• Apply proper margin and padding relationships</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Responsive Design</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Mobile-first approach for better performance</li>
              <li>• Use flexible grids and containers</li>
              <li>• Test across multiple device sizes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
