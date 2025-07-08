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
  FileText,
  BarChart3,
  Users,
  MousePointer,
  Type,
  CheckSquare,
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
    name: "Acme Corp",
    id: "acme-001",
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
      {/* Sidebar Container with Design System Styling */}
      <div className="w-64">
        <SidebarMenu className="rounded-lg shadow-sm">
          {/* Logo Section */}
          <div>
            <SidebarBusinessLogo
              businessName="Design System"
              showTextWithLogo={true}
            />
          </div>

          {/* Navigation Menu Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Component Testing Sections */}
            <SidebarMenuSectionRoot>
              <SidebarMenuSection title="Form Components" icon={FileText}>
                <div className="space-y-1">
                  <SidebarMenuItem
                    icon={MousePointer}
                    active={currentPage === "form"}
                    onClick={() => handleNavigation("form")}
                  >
                    Buttons & Actions
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={Type}>Input Fields</SidebarMenuItem>
                  <SidebarMenuItem icon={CheckSquare}>
                    Form Controls
                  </SidebarMenuItem>
                </div>
              </SidebarMenuSection>

              <SidebarMenuSection title="Data Components" icon={BarChart3}>
                <div className="space-y-1">
                  <SidebarMenuItem
                    active={currentPage === "data"}
                    onClick={() => handleNavigation("data")}
                  >
                    Tables & Lists
                  </SidebarMenuItem>
                  <SidebarMenuItem>Charts & Graphs</SidebarMenuItem>
                </div>
              </SidebarMenuSection>

              <SidebarMenuSection title="Navigation" icon={Users}>
                <div className="space-y-1">
                  <SidebarMenuItem
                    active={currentPage === "navigation"}
                    onClick={() => handleNavigation("navigation")}
                  >
                    Sidebar Components
                  </SidebarMenuItem>
                  <SidebarMenuItem>Menu Systems</SidebarMenuItem>
                </div>
              </SidebarMenuSection>
            </SidebarMenuSectionRoot>
          </div>

          {/* Profile Section - Override border styling for bottom position */}
          <div className="mt-auto">
            <SidebarProfile
              user={mockProfileData}
              className="border-t border-b-0"
            />
          </div>
        </SidebarMenu>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
