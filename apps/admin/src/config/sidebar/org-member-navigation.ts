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
        url: "/",
        icon: Home,
      },
      {
        title: "My Submissions",
        url: "/my-submissions",
        icon: FileCheck,
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
    title: "Insights",
    children: [
      {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart3,
      },
    ],
  },
]
