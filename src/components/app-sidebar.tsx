'use client'

import {ChevronDown, StickyNote, LogOut} from "lucide-react"
import { deleteCookie } from 'cookies-next'
import toast from 'react-hot-toast';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Toast from "@/components/generic/Toast";
import {useRouter} from "next/navigation";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import Link from "next/link";

// Menu items.
const items = [
    {
        title: "CMS",
        icon: StickyNote,
        children: [
            {
                title: "Pages",
                url: "dashboard/pages",
            },
            {
                title: "Blogs",
                url: "dashboard/blogs",
            },
        ]
    },
]

export function AppSidebar() {
    const router = useRouter();
    const logout = async () => {
        const response = await fetch('/api/admin/logout', {
            method: "POST",
        });
        deleteCookie('auth_token');
        toast.success('Logged out Successfully');
        router.push('/admin/login');
    }
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <Collapsible key={item.title} defaultOpen className="group/collapsible">
                                    <SidebarGroup>
                                        <SidebarGroupLabel asChild>
                                            <CollapsibleTrigger>
                                                <div className={'flex justify-center items-center gap-2'}>
                                                    <item.icon className={'w-5'}/>
                                                    <span>{item.title}</span>
                                                </div>
                                                <ChevronDown
                                                    className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                            </CollapsibleTrigger>
                                        </SidebarGroupLabel>
                                        <CollapsibleContent className={'pl-8 flex flex-col gap-2 mt-2'}>
                                            {item.children.map((childItem) => (
                                                <SidebarGroupContent key={childItem.title}>
                                                    <Link href={childItem.url} >{childItem.title}</Link>
                                                </SidebarGroupContent>
                                                )
                                            )
                                            }
                                        </CollapsibleContent>
                                    </SidebarGroup>
                                </Collapsible>
                            ))}
                            <SidebarMenuItem className={'px-2 pt-1'}>
                                <AlertDialog>
                                    <AlertDialogTrigger className={'flex gap-2'}><LogOut className={'w-4'} />Logout</AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={logout}>Logout</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </SidebarMenuItem>
                            <Toast />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
