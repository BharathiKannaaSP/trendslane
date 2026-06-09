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
        url: "/",
        icon: Home,
      },
      {
        title: "Members",
        url: "/members",
        icon: Users,
      },
      {
        title: "Invitations",
        url: "/invitations",
        icon: Mail,
      },
    ],
  },

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
    ],
  },

  {
    title: "Analytics",
    children: [
      {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart3,
      },
    ],
  },

  {
    title: "Settings",
    children: [
      {
        title: "Organization Settings",
        url: "/settings",
        icon: Settings,
      },
    ],
  },
]
