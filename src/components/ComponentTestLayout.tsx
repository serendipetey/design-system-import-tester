// design-system-import-tester/src/components/ComponentTestLayout.tsx
// 🎯 FIXED: Smart sidebar integration with proper layout

import React from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSection,
  SidebarMenuSectionRoot,
  SidebarProfile,
  SidebarBusinessLogo,
  type SidebarProfileData,
} from "@serendipetey/components";
import {
  FileText,
  BarChart3,
  Users,
  MousePointer,
  Type,
  CheckSquare,
  Database,
  Grid,
} from "lucide-react";

interface ComponentTestLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const mockProfileData: SidebarProfileData = {
  contact: {
    name: "Jane Doe",
    role: "Administrator",
  },
  entity: {
    name: "Design System Tester",
    id: "tester-001",
  },
};

export function ComponentTestLayout({
  children,
  currentPage,
  onPageChange,
}: ComponentTestLayoutProps) {
  const handleNavigation = (page: string) => {
    onPageChange(page);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 🎯 FIXED: Smart sidebar with container width constraint */}
      <div className="w-64">
        <SidebarMenu size="md" className="h-full">
          {/* Logo Section */}
          <SidebarBusinessLogo
            businessName="Design System"
            showTextWithLogo={true}
          />

          {/* Profile Section */}
          <SidebarProfile user={mockProfileData} position="middle" />

          {/* Navigation Menu Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <SidebarMenuSectionRoot>
              {/* Form Components Section */}
              <SidebarMenuSection title="Form Components" icon={FileText}>
                <div className="space-y-1">
                  <SidebarMenuItem
                    icon={MousePointer}
                    active={currentPage === "form"}
                    onClick={() => handleNavigation("form")}
                  >
                    Buttons & Actions
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={Type}
                    onClick={() => console.log("Input fields - coming soon")}
                  >
                    Input Fields
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={CheckSquare}
                    onClick={() => console.log("Form controls - coming soon")}
                  >
                    Form Controls
                  </SidebarMenuItem>
                </div>
              </SidebarMenuSection>

              {/* Data Components Section */}
              <SidebarMenuSection title="Data Components" icon={Database}>
                <div className="space-y-1">
                  <SidebarMenuItem
                    icon={Grid}
                    active={currentPage === "data"}
                    onClick={() => handleNavigation("data")}
                  >
                    Tables & Data
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={BarChart3}
                    onClick={() => console.log("Charts - coming soon")}
                  >
                    Charts
                  </SidebarMenuItem>
                </div>
              </SidebarMenuSection>

              {/* Navigation Components Section */}
              <SidebarMenuSection title="Navigation" icon={BarChart3}>
                <div className="space-y-1">
                  <SidebarMenuItem
                    icon={BarChart3}
                    active={currentPage === "navigation"}
                    onClick={() => handleNavigation("navigation")}
                  >
                    Sidebar Components
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={Users}
                    onClick={() => console.log("Menu items - coming soon")}
                  >
                    Menu Items
                  </SidebarMenuItem>
                </div>
              </SidebarMenuSection>
            </SidebarMenuSectionRoot>
          </div>
        </SidebarMenu>
      </div>

      {/* 🎯 FIXED: Main content now properly uses remaining space */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Design System Import Tester
            </h2>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">
                Current: {currentPage}
              </span>
              <div
                className="w-2 h-2 bg-green-500 rounded-full"
                title="Layout working correctly"
              ></div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Layout Status Indicator */}
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                ✅ Layout Integration Fixed!
              </h3>
              <div className="text-sm text-green-700 space-y-1">
                <p>• Sidebar: Auto-detected container width constraint</p>
                <p>• Content: Properly uses remaining horizontal space</p>
                <p>
                  • No conflicts: Container controls layout, component handles
                  styling
                </p>
              </div>
            </div>

            {/* Page content */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
