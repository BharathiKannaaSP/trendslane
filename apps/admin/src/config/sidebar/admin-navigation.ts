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
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Countries",
        url: "/dashboard/countries",
        icon: Globe,
      },
      {
        title: "Organizations",
        url: "/dashboard/organizations",
        icon: Building2,
      },
      {
        title: "Users",
        url: "/dashboard/users",
        icon: Users,
      },
      {
        title: "Invitations",
        url: "/dashboard/invitations",
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
        url: "/dashboard/products",
        icon: Package,
      },
      {
        title: "Categories",
        url: "/dashboard/categories",
        icon: FolderTree,
      },
      {
        title: "Audiences",
        url: "/dashboard/audiences",
        icon: Users,
      },
      {
        title: "Navigation",
        url: "/dashboard/navigation",
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
        url: "/dashboard/product-approvals",
        icon: FileCheck,
      },
      {
        title: "Imports",
        url: "/dashboard/imports",
        icon: Upload,
      },
      {
        title: "Translation Queue",
        url: "/dashboard/translation-queue",
        icon: Languages,
      },
      {
        title: "Cache Management",
        url: "/dashboard/cache-management",
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
        url: "/dashboard/analytics/platform",
        icon: BarChart3,
      },
      {
        title: "Country Analytics",
        url: "/dashboard/analytics/countries",
        icon: Globe,
      },
      {
        title: "Organization Analytics",
        url: "/dashboard/analytics/organizations",
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
        url: "/dashboard/roles",
        icon: Shield,
      },
      {
        title: "Permissions",
        url: "/dashboard/permissions",
        icon: UserCog,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Audit Logs",
        url: "/dashboard/audit-logs",
        icon: History,
      },
    ],
  },
]
