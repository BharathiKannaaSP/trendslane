import React from 'react'
import {
	Home,
	ShoppingBag,
	ShoppingCart,
	Package,
	Heart,
	User,
	Settings,
	Bell,
	HelpCircle,
	ChevronUp,
	Projector,
	Plus,
	ChevronDown
} from 'lucide-react'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarSeparator
} from './ui/sidebar'
import Link from 'next/link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from './ui/collapsible'

export const navLinks = [
	{
		title: 'Dashboard',
		url: '/',
		icon: Home
	},
	{
		title: 'Shop',
		url: '/shop',
		icon: ShoppingBag
	},
	{
		title: 'Cart',
		url: '/cart',
		icon: ShoppingCart
	},
	{
		title: 'Orders',
		url: '/orders',
		icon: Package
	},
	{
		title: 'Wishlist',
		url: '/wishlist',
		icon: Heart
	},
	{
		title: 'Profile',
		url: '/profile',
		icon: User
	},
	{
		title: 'Settings',
		url: '/settings',
		icon: Settings
	},
	{
		title: 'Notifications',
		url: '/notifications',
		icon: Bell
	},
	{
		title: 'Help',
		url: '/help',
		icon: HelpCircle
	}
]

const AppSidebar = () => {
	return (
		<Sidebar collapsible='icon'>
			<SidebarHeader className='py-4'>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href='/'>
								<span>Trendslane </span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarSeparator />

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{navLinks.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
											{item.title === 'Notifications' && (
												<SidebarMenuBadge>3</SidebarMenuBadge>
											)}
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Projects</SidebarGroupLabel>
					<SidebarGroupAction>
						<Plus /> <span className='sr-only'>Add Project</span>
					</SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href='/#'>
										<Projector />
										See All Projects
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href='/#'>
										<Plus />
										Add Project
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<Collapsible className='group/collapsible'>
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Collapsable Group
								<ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href='/#'>
												<Projector />
												See All Projects
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href='/#'>
												<Plus />
												Add Project
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				{/* NESTED */}
				<SidebarGroup>
					<SidebarGroupLabel>Nested Items</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href='/#'>
										<Projector />
										See All Projects
									</Link>
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton asChild>
											<Link href='/#'>
												<Plus />
												Add Project
											</Link>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton asChild>
											<Link href='/#'>
												<Plus />
												Add Category
											</Link>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<Avatar className='size-4'>
										<AvatarImage src='https://images.pexels.com/photos/2169428/pexels-photo-2169428.jpeg' />
										<AvatarFallback>RG</AvatarFallback>
									</Avatar>
									Rachel Green <ChevronUp className='ml-auto' />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								<DropdownMenuItem>Account</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>Sign out</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
export default AppSidebar
