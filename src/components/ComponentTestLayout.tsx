// design-system-import-tester/src/components/ComponentTestLayout.tsx
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
  LayoutDashboard,
  FileText,
  BarChart3,
  Users,
  MousePointer,
  Type,
  CheckSquare,
  Table,
  List,
  Grid3X3,
  Sidebar,
  Palette,
  Settings,
  Layers,
  Square, // For buttons icon
} from "lucide-react";

interface ComponentTestLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const mockProfileData: SidebarProfileData = {
  contact: {
    name: "Design System",
    role: "Administrator",
  },
  entity: {
    name: "Import Tester",
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
      {/* Enhanced Sidebar with new design system */}
      <div className="w-64">
        <SidebarMenu size="md" className="h-full">
          {/* Logo Section */}
          <div>
            <SidebarBusinessLogo
              businessName="Design System"
              showTextWithLogo={true}
            />
          </div>

          {/* Profile Section */}
          <div className="border-b border-gray-200">
            <SidebarProfile user={mockProfileData} position="middle" />
          </div>

          {/* Navigation Menu Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <SidebarMenuSectionRoot>
              {/* Standalone Menu Items (like Dashboard) */}
              <div className="space-y-1 mb-4">
                <SidebarMenuItem
                  icon={LayoutDashboard}
                  active={currentPage === "overview"}
                  onClick={() => handleNavigation("overview")}
                >
                  Overview
                </SidebarMenuItem>
              </div>

              {/* Component Testing Sections */}
              <SidebarMenuSection title="Core Components" icon={Layers}>
                <div className="space-y-1">
                  <SidebarMenuItem
                    icon={Square}
                    active={currentPage === "buttons"}
                    onClick={() => handleNavigation("buttons")}
                  >
                    Buttons & Actions
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={MousePointer}
                    active={currentPage === "form"}
                    onClick={() => handleNavigation("form")}
                  >
                    Form Components
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={BarChart3}
                    active={currentPage === "data"}
                    onClick={() => handleNavigation("data")}
                  >
                    Data Components
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={Users}
                    active={currentPage === "navigation"}
                    onClick={() => handleNavigation("navigation")}
                  >
                    Navigation
                  </SidebarMenuItem>
                </div>
              </SidebarMenuSection>

              <SidebarMenuSection title="Layout & Structure" icon={Grid3X3}>
                <div className="space-y-1">
                  <SidebarMenuItem
                    icon={Sidebar}
                    active={currentPage === "layout"}
                    onClick={() => handleNavigation("layout")}
                  >
                    Layout Components
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={Grid3X3}>Grid Systems</SidebarMenuItem>
                  <SidebarMenuItem icon={Layers}>Containers</SidebarMenuItem>
                </div>
              </SidebarMenuSection>

              <SidebarMenuSection title="Design Tokens" icon={Palette}>
                <div className="space-y-1">
                  <SidebarMenuItem icon={Palette}>Colors</SidebarMenuItem>
                  <SidebarMenuItem icon={Type}>Typography</SidebarMenuItem>
                  <SidebarMenuItem icon={Settings}>Spacing</SidebarMenuItem>
                </div>
              </SidebarMenuSection>

              <SidebarMenuSection title="Advanced" icon={Settings}>
                <div className="space-y-1">
                  <SidebarMenuItem icon={CheckSquare}>
                    Validation
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={Table}>Complex Tables</SidebarMenuItem>
                  <SidebarMenuItem icon={List}>Custom Lists</SidebarMenuItem>
                </div>
              </SidebarMenuSection>
            </SidebarMenuSectionRoot>
          </div>
        </SidebarMenu>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
