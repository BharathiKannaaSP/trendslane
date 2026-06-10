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

import { NavItem } from "./sidebar-types"

export function getOrgAdminNavigation(t: (key: string) => string): NavItem[] {
  return [
    {
      title: t("organization.title"),
      children: [
        {
          title: t("organization.dashboard"),
          url: "/",
          icon: Home,
        },
        {
          title: t("organization.members"),
          url: "/members",
          icon: Users,
        },
        {
          title: t("organization.invitations"),
          url: "/invitations",
          icon: Mail,
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
      title: t("operations.title"),
      children: [
        {
          title: t("operations.productApprovals"),
          url: "/product-approvals",
          icon: FileCheck,
        },
        {
          title: t("operations.imports"),
          url: "/imports",
          icon: Upload,
        },
      ],
    },

    {
      title: t("analytics.title"),
      children: [
        {
          title: t("analytics.analytics"),
          url: "/analytics",
          icon: BarChart3,
        },
      ],
    },

    {
      title: t("settings.title"),
      children: [
        {
          title: t("settings.organizationSettings"),
          url: "/settings",
          icon: Settings,
        },
      ],
    },
  ]
}
