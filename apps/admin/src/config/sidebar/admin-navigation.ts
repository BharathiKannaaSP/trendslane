import {
  BarChart3,
  Building2,
  Database,
  Globe,
  Mail,
  Package,
  Settings,
  Shield,
  Users,
  UserCog,
  FolderTree,
  Navigation,
  Upload,
  Languages,
  FileCheck,
  History,
  Home,
} from "lucide-react"
import { NavItem } from "./types"

export const adminNavigation: NavItem[] = [
  // PLATFORM
  {
    title: "Platform",
    children: [
      {
        title: "Dashboard",
        url: "/",
        icon: Home,
      },
      {
        title: "Countries",
        url: "/countries",
        icon: Globe,
      },
      {
        title: "Organizations",
        url: "/organizations",
        icon: Building2,
      },
      {
        title: "Users",
        url: "/users",
        icon: Users,
      },
      {
        title: "Invitations",
        url: "/invitations",
        icon: Mail,
      },
    ],
  },

  // CATALOG
  {
    title: "Catalog",
    children: [
      {
        title: "Products",
        url: "/products",
        icon: Package,
      },
      {
        title: "Categories",
        url: "/categories",
        icon: FolderTree,
      },
      {
        title: "Audiences",
        url: "/audiences",
        icon: Users,
      },
      {
        title: "Navigation",
        url: "/navigation",
        icon: Navigation,
      },
    ],
  },

  // OPERATIONS
  {
    title: "Operations",
    children: [
      {
        title: "Product Approvals",
        url: "/product-approvals",
        icon: FileCheck,
      },
      {
        title: "Imports",
        url: "/imports",
        icon: Upload,
      },
      {
        title: "Translation Queue",
        url: "/translation-queue",
        icon: Languages,
      },
      {
        title: "Cache Management",
        url: "/cache-management",
        icon: Database,
      },
    ],
  },

  // ANALYTICS
  {
    title: "Analytics",
    children: [
      {
        title: "Platform Analytics",
        url: "/analytics/platform",
        icon: BarChart3,
      },
      {
        title: "Country Analytics",
        url: "/analytics/countries",
        icon: Globe,
      },
      {
        title: "Organization Analytics",
        url: "/analytics/organizations",
        icon: Building2,
      },
    ],
  },

  // SYSTEM
  {
    title: "System",
    children: [
      {
        title: "Roles",
        url: "/roles",
        icon: Shield,
      },
      {
        title: "Permissions",
        url: "/permissions",
        icon: UserCog,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
      {
        title: "Audit Logs",
        url: "/audit-logs",
        icon: History,
      },
    ],
  },
]
