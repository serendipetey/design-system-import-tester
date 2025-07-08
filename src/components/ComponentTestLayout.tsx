import React from "react";
import {
  SidebarMenu,
  SidebarProfile,
  SidebarBusinessLogo,
  createNavigationSection,
  createNavigationItem,
  useNavigationState,
  type NavigationConfig,
  type SidebarProfileData,
} from "@serendipetey/components";

interface ComponentTestLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const mockProfileData: SidebarProfileData = {
  contact: {
    name: "Design System Tester",
    role: "Developer",
  },
  entity: {
    name: "Design System Co",
    id: "ds-001",
  },
};

export function ComponentTestLayout({
  children,
  currentPage,
  onPageChange,
}: ComponentTestLayoutProps) {
  const navigationConfig: NavigationConfig = {
    sections: [
      createNavigationSection("components", "Component Tests", [
        createNavigationItem("form", "Form Components", "/form"),
        createNavigationItem("data", "Data Components", "/data"),
        createNavigationItem(
          "navigation",
          "Navigation Components",
          "/navigation"
        ),
      ]),
    ],
  };

  const navigationState = useNavigationState(
    navigationConfig,
    `/${currentPage}`
  );

  const handleNavigation = (itemId: string) => {
    onPageChange(itemId);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <SidebarBusinessLogo
            logoUrl="https://via.placeholder.com/120x40"
            businessName="Design System"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <SidebarMenu>
            <div>Menu placeholder content</div>
          </SidebarMenu>
        </div>

        <div className="border-t border-gray-200 p-4">
          <SidebarProfile user={mockProfileData} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
