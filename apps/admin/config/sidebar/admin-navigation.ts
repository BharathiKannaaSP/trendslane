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
import { NavItem } from "./sidebar-types"

export function getAdminNavigation(t: (key: string) => string): NavItem[] {
  return [
    {
      title: t("platform.title"),
      children: [
        {
          title: t("platform.dashboard"),
          url: "/",
          icon: Home,
        },
        {
          title: t("platform.countries"),
          url: "/countries",
          icon: Globe,
        },
        {
          title: t("platform.organizations"),
          url: "/organizations",
          icon: Building2,
        },
        {
          title: t("platform.users"),
          url: "/users",
          icon: Users,
        },
        {
          title: t("platform.invitations"),
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
        {
          title: t("operations.translationQueue"),
          url: "/translation-queue",
          icon: Languages,
        },
        {
          title: t("operations.cacheManagement"),
          url: "/cache-management",
          icon: Database,
        },
      ],
    },

    {
      title: t("analytics.title"),
      children: [
        {
          title: t("analytics.platformAnalytics"),
          url: "/analytics/platform",
          icon: BarChart3,
        },
        {
          title: t("analytics.countryAnalytics"),
          url: "/analytics/countries",
          icon: Globe,
        },
        {
          title: t("analytics.organizationAnalytics"),
          url: "/analytics/organizations",
          icon: Building2,
        },
      ],
    },

    {
      title: t("system.title"),
      children: [
        {
          title: t("system.roles"),
          url: "/roles",
          icon: Shield,
        },
        {
          title: t("system.permissions"),
          url: "/permissions",
          icon: UserCog,
        },
        {
          title: t("system.settings"),
          url: "/settings",
          icon: Settings,
        },
        {
          title: t("system.auditLogs"),
          url: "/audit-logs",
          icon: History,
        },
      ],
    },
  ]
}
