import {
  Activity,
  BarChart3,
  Building2,
  CheckCircle2,
  Database,
  Download,
  FileText,
  Flag,
  FolderTree,
  Globe,
  History,
  KeyRound,
  Languages,
  LanguagesIcon,
  LayoutDashboard,
  LucideIcon,
  Navigation,
  Package,
  Settings,
  Shield,
  Upload,
  Users,
  UsersRound,
  Webhook,
} from "lucide-react"

export interface NavItem {
  title: string
  url?: string
  icon?: LucideIcon
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Platform",
    icon: Globe,
    children: [
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
        title: "Roles",
        url: "/roles",
        icon: Shield,
      },
      {
        title: "Permissions",
        url: "/permissions",
        icon: Shield,
      },
    ],
  },

  {
    title: "Catalog",
    icon: Package,
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
        icon: UsersRound,
      },
      {
        title: "Navigation",
        url: "/navigation",
        icon: Navigation,
      },
      {
        title: "Pages",
        url: "/pages",
        icon: FileText,
      },
    ],
  },

  {
    title: "Localization",
    icon: Languages,
    children: [
      {
        title: "Languages",
        url: "/languages",
        icon: LanguagesIcon,
      },
      {
        title: "Translations",
        url: "/translations",
        icon: Languages,
      },
      {
        title: "Translation Queue",
        url: "/translations/queue",
        icon: Activity,
      },
    ],
  },

  {
    title: "Data Management",
    icon: Database,
    children: [
      {
        title: "Imports",
        url: "/imports",
        icon: Upload,
      },
      {
        title: "Exports",
        url: "/exports",
        icon: Download,
      },
      {
        title: "Batch Jobs",
        url: "/batches",
        icon: Database,
      },
    ],
  },

  {
    title: "Operations",
    icon: CheckCircle2,
    children: [
      {
        title: "Product Approvals",
        url: "/approvals/products",
        icon: CheckCircle2,
      },
      {
        title: "Cache Management",
        url: "/cache",
        icon: Activity,
      },
      {
        title: "Navigation Rebuild",
        url: "/navigation/rebuild",
        icon: Navigation,
      },
      {
        title: "Audit Logs",
        url: "/audit-logs",
        icon: History,
      },
    ],
  },

  {
    title: "Analytics",
    icon: BarChart3,
    children: [
      {
        title: "Overview",
        url: "/analytics",
        icon: BarChart3,
      },
      {
        title: "Countries",
        url: "/analytics/countries",
        icon: Globe,
      },
      {
        title: "Organizations",
        url: "/analytics/organizations",
        icon: Building2,
      },
      {
        title: "Products",
        url: "/analytics/products",
        icon: Package,
      },
      {
        title: "Imports",
        url: "/analytics/imports",
        icon: Upload,
      },
    ],
  },

  {
    title: "System",
    icon: Settings,
    children: [
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
      {
        title: "API Keys",
        url: "/api-keys",
        icon: KeyRound,
      },
      {
        title: "Webhooks",
        url: "/webhooks",
        icon: Webhook,
      },
      {
        title: "Feature Flags",
        url: "/feature-flags",
        icon: Flag,
      },
    ],
  },
]
