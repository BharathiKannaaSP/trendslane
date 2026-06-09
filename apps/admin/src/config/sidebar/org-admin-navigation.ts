import {
  BarChart3,
  FileCheck,
  FolderTree,
  Home,
  Mail,
  Navigation,
  Package,
  Settings,
  Upload,
  Users,
} from "lucide-react"
import { NavItem } from "./types"

export const orgAdminNavigation: NavItem[] = [
  {
    title: "Organization",
    children: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Members",
        url: "/dashboard/members",
        icon: Users,
      },
      {
        title: "Invitations",
        url: "/dashboard/invitations",
        icon: Mail,
      },
    ],
  },

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
    ],
  },

  {
    title: "Analytics",
    children: [
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: BarChart3,
      },
    ],
  },

  {
    title: "Settings",
    children: [
      {
        title: "Organization Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
]
