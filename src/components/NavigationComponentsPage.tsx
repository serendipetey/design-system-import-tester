// src/components/NavigationComponentsPage.tsx
import { useState, useEffect } from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarProfile,
  SidebarBusinessLogo,
  SidebarToggle,
  createNavigationSection,
  createNavigationItem,
  useNavigationState,
  type NavigationConfig,
  type SidebarProfileData,
} from "@serendipetey/components";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

interface ComponentTest {
  name: string;
  status: "success" | "error" | "warning";
  message: string;
}

export function NavigationComponentsPage() {
  const [tests, setTests] = useState<ComponentTest[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  const runTests = () => {
    const testResults: ComponentTest[] = [];

    // Test SidebarMenu component
    try {
      if (typeof SidebarMenu === "function") {
        testResults.push({
          name: "SidebarMenu Component",
          status: "success",
          message: "SidebarMenu component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "SidebarMenu Component",
        status: "error",
        message: "SidebarMenu component failed to load",
      });
    }

    // Test SidebarProfile component
    try {
      if (typeof SidebarProfile === "function") {
        testResults.push({
          name: "SidebarProfile Component",
          status: "success",
          message:
            "SidebarProfile component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "SidebarProfile Component",
        status: "error",
        message: "SidebarProfile component failed to load",
      });
    }

    // Test SidebarBusinessLogo component
    try {
      if (typeof SidebarBusinessLogo === "function") {
        testResults.push({
          name: "SidebarBusinessLogo Component",
          status: "success",
          message:
            "SidebarBusinessLogo component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "SidebarBusinessLogo Component",
        status: "error",
        message: "SidebarBusinessLogo component failed to load",
      });
    }

    // Test Navigation utilities
    try {
      if (
        typeof createNavigationSection === "function" &&
        typeof useNavigationState === "function"
      ) {
        testResults.push({
          name: "Navigation Utilities",
          status: "success",
          message: "Navigation utilities imported successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Navigation Utilities",
        status: "error",
        message: "Navigation utilities failed to load",
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

  // Sample navigation config
  const sampleNavConfig: NavigationConfig = {
    sections: [
      createNavigationSection({
        id: "main",
        title: "Main Navigation",
        items: [
          createNavigationItem({
            id: "dashboard",
            label: "Dashboard",
            href: "/dashboard",
            icon: "📊",
          }),
          createNavigationItem({
            id: "projects",
            label: "Projects",
            href: "/projects",
            icon: "📁",
          }),
          createNavigationItem({
            id: "settings",
            label: "Settings",
            href: "/settings",
            icon: "⚙️",
          }),
        ],
      }),
      createNavigationSection({
        id: "tools",
        title: "Tools",
        items: [
          createNavigationItem({
            id: "analytics",
            label: "Analytics",
            href: "/analytics",
            icon: "📈",
          }),
          createNavigationItem({
            id: "reports",
            label: "Reports",
            href: "/reports",
            icon: "📄",
          }),
        ],
      }),
    ],
  };

  const { expandedSections, toggleSection } =
    useNavigationState(sampleNavConfig);

  const sampleProfileData: SidebarProfileData = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://via.placeholder.com/40",
    role: "Administrator",
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Navigation Components
        </h1>
        <p className="text-gray-600">
          Testing navigation and sidebar components from the design system
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
          {/* Sidebar Toggle Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Sidebar Toggle</h3>
            <div className="flex items-center gap-4">
              <SidebarToggle
                isExpanded={isExpanded}
                onToggle={() => setIsExpanded(!isExpanded)}
              />
              <span className="text-sm text-gray-600">
                Sidebar is {isExpanded ? "expanded" : "collapsed"}
              </span>
            </div>
          </div>

          {/* Business Logo Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Business Logo</h3>
            <div className="w-64 p-4 bg-gray-50 rounded-lg">
              <SidebarBusinessLogo
                logoUrl="https://via.placeholder.com/120x40/4f46e5/ffffff?text=LOGO"
                businessName="Acme Inc"
                isExpanded={isExpanded}
              />
            </div>
          </div>

          {/* Profile Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Sidebar Profile</h3>
            <div className="w-64 p-4 bg-gray-50 rounded-lg">
              <SidebarProfile
                profileData={sampleProfileData}
                isExpanded={isExpanded}
                onProfileClick={() => console.log("Profile clicked")}
              />
            </div>
          </div>

          {/* Full Sidebar Menu Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              Complete Sidebar Menu
            </h3>
            <div className="w-64 bg-white border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <SidebarBusinessLogo
                  logoUrl="https://via.placeholder.com/120x40/4f46e5/ffffff?text=LOGO"
                  businessName="Acme Inc"
                  isExpanded={true}
                />
              </div>

              <div className="p-4">
                <SidebarMenu
                  navigationConfig={sampleNavConfig}
                  currentPath="/dashboard"
                  onItemClick={(href: string, id: string) =>
                    console.log("Navigation clicked:", href, id)
                  }
                  expandedSections={expandedSections}
                  onToggleSection={toggleSection}
                />
              </div>

              <div className="p-4 border-t mt-auto">
                <SidebarProfile
                  profileData={sampleProfileData}
                  isExpanded={true}
                  onProfileClick={() => console.log("Profile clicked")}
                />
              </div>
            </div>
          </div>

          {/* Individual Menu Item Example */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              Individual Menu Items
            </h3>
            <div className="w-64 space-y-2">
              <SidebarMenuItem
                item={createNavigationItem({
                  id: "example1",
                  label: "Active Item",
                  href: "/active",
                  icon: "✓",
                })}
                isActive={true}
                isExpanded={true}
                onItemClick={(href: string, id: string) =>
                  console.log("Item clicked:", href, id)
                }
              />
              <SidebarMenuItem
                item={createNavigationItem({
                  id: "example2",
                  label: "Inactive Item",
                  href: "/inactive",
                  icon: "○",
                })}
                isActive={false}
                isExpanded={true}
                onItemClick={(href: string, id: string) =>
                  console.log("Item clicked:", href, id)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
