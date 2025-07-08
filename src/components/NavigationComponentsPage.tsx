// design-system-import-tester/src/components/NavigationComponentsPage.tsx
import React, { useState } from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSection,
  SidebarProfile,
  SidebarBusinessLogo,
  SidebarToggle,
  type SidebarProfileData,
} from "@serendipetey/components";
import { FileText, DollarSign, Users } from "lucide-react";

const mockProfileData: SidebarProfileData = {
  contact: {
    name: "John Doe",
    role: "Product Manager",
  },
  entity: {
    name: "Acme Corp",
    id: "acme-001",
  },
};

export function NavigationComponentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Navigation Components</h2>
        <p className="text-gray-600 mb-6">
          Testing navigation components from the design system
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sidebar Toggle */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Sidebar Toggle</h3>
          <div className="p-4 border rounded-lg bg-white">
            <SidebarToggle open={sidebarOpen} onToggle={setSidebarOpen} />
            <p className="text-sm text-gray-600 mt-2">
              Current state: {sidebarOpen ? "Open" : "Closed"}
            </p>
          </div>
        </section>

        {/* Business Logo */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Business Logo</h3>
          <div className="p-4 border rounded-lg bg-white">
            <SidebarBusinessLogo
              businessName="Design System Demo"
              showTextWithLogo={true}
            />
          </div>
        </section>

        {/* Profile Component */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Profile Component</h3>
          <div className="p-4 border rounded-lg bg-white max-w-xs">
            <SidebarProfile user={mockProfileData} />
          </div>
        </section>

        {/* Individual Menu Items */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Individual Menu Items</h3>
          <div className="p-4 border rounded-lg bg-white space-y-2 max-w-xs">
            <SidebarMenuItem icon={FileText} active={false}>
              Example Item 1
            </SidebarMenuItem>
            <SidebarMenuItem icon={DollarSign} active={true}>
              Active Item
            </SidebarMenuItem>
            <SidebarMenuItem icon={Users} badge="3">
              Item with Badge
            </SidebarMenuItem>
          </div>
        </section>
      </div>

      {/* Full Sidebar Demo */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Complete Sidebar Demo</h3>
        <div
          className="border rounded-lg bg-white overflow-hidden"
          style={{ height: "400px" }}
        >
          <div className="flex h-full">
            {/* Demo Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
              {/* Logo */}
              <div className="p-4 border-b border-gray-200">
                <SidebarBusinessLogo
                  businessName="Portal Demo"
                  showTextWithLogo={true}
                />
              </div>

              {/* Menu */}
              <div className="flex-1 overflow-y-auto">
                <SidebarMenu>
                  <div className="p-2 space-y-1">
                    <SidebarMenuItem icon={FileText} active={true}>
                      Dashboard
                    </SidebarMenuItem>
                    <SidebarMenuItem icon={DollarSign} badge="3">
                      Funding
                    </SidebarMenuItem>
                    <SidebarMenuItem icon={Users}>Team</SidebarMenuItem>
                  </div>
                </SidebarMenu>
              </div>

              {/* Profile */}
              <div className="border-t border-gray-200 p-4">
                <SidebarProfile user={mockProfileData} />
              </div>
            </div>

            {/* Demo Content Area */}
            <div className="flex-1 p-6 bg-gray-50">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Main Content Area
              </h4>
              <p className="text-gray-600">
                This demonstrates how the sidebar components work together in a
                real layout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
