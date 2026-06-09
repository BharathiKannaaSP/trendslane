import {
  BarChart3,
  FileCheck,
  FolderTree,
  Home,
  Navigation,
  Package,
  Users,
} from "lucide-react"
import { NavItem } from "./types"

export const orgMemberNavigation: NavItem[] = [
  {
    title: "Workspace",
    children: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "My Submissions",
        url: "/dashboard/my-submissions",
        icon: FileCheck,
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
    title: "Insights",
    children: [
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: BarChart3,
      },
    ],
  },
]
