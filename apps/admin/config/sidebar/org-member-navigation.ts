import {
  BarChart3,
  FileCheck,
  FolderTree,
  Home,
  Navigation,
  Package,
  Users,
} from "lucide-react"

import { NavItem } from "./sidebar-types"

export function getOrgMemberNavigation(t: (key: string) => string): NavItem[] {
  return [
    {
      title: t("workspace.title"),
      children: [
        {
          title: t("platform.dashboard"),
          url: "/",
          icon: Home,
        },
        {
          title: t("workspace.mySubmissions"),
          url: "/my-submissions",
          icon: FileCheck,
        },
      ],
    },

    {
      title: t("catalog.title"),
      children: [
        {
          title: t("catalog.products"),
          url: "/products",
          icon: Package,
        },
        {
          title: t("catalog.categories"),
          url: "/categories",
          icon: FolderTree,
        },
        {
          title: t("catalog.audiences"),
          url: "/audiences",
          icon: Users,
        },
        {
          title: t("catalog.navigation"),
          url: "/navigation",
          icon: Navigation,
        },
      ],
    },

    {
      title: t("insights.title"),
      children: [
        {
          title: t("analytics.overview"),
          url: "/analytics",
          icon: BarChart3,
        },
      ],
    },
  ]
}
