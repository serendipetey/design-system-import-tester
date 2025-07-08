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
  name: "Design System",
  email: "test@example.com",
  avatar: "https://via.placeholder.com/40",
};

export function ComponentTestLayout({
  children,
  currentPage,
  onPageChange,
}: ComponentTestLayoutProps) {
  const navigationConfig: NavigationConfig = {
    sections: [
      createNavigationSection({
        id: "components",
        title: "Component Tests",
        items: [
          createNavigationItem({
            id: "form",
            label: "Form Components",
            href: "/form",
            icon: "edit",
          }),
          createNavigationItem({
            id: "data",
            label: "Data Components",
            href: "/data",
            icon: "table",
          }),
          createNavigationItem({
            id: "navigation",
            label: "Navigation Components",
            href: "/navigation",
            icon: "menu",
          }),
        ],
      }),
    ],
  };

  const navigationState = useNavigationState(navigationConfig);

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
            companyName="Design System"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <SidebarMenu
            config={navigationConfig}
            onItemClick={handleNavigation}
            activeItemId={currentPage}
          />
        </div>

        <div className="border-t border-gray-200 p-4">
          <SidebarProfile data={mockProfileData} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
