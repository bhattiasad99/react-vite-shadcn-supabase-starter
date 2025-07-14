const env = import.meta.env

import NewProject from "@/pages/NewProject"
import NewUser from "@/pages/NewUser"
import Projects from "@/pages/Projects"
import SingleTimelog from "@/pages/SingleTimelog"
import Timelogs from "@/pages/Timelogs"
import Users from "@/pages/Users"
import { User, UserPlus, Clock, Workflow, LayoutDashboard, PackageCheck } from "lucide-react"
import type React from "react"

export const SUPABASE_PROJECT_URL = env.VITE_SUPABASE_PROJECT_URL
export const SUPABASE_DB_PASS = env.VITE_SUPABASE_DB_PASS
export const SUPABASE_ACCESS_TOKEN = env.VITE_SUPABASE_ACCESS_TOKEN
export const SUPABASE_API_KEY = env.VITE_SUPABASE_API_KEY

export type Page = {
    path: string,
    heading: string,
    element: React.ReactNode,
    icon: React.ReactNode,
    name: string,
    inNav?: boolean
}

export const PAGES: Page[] = [
    {
        name: 'users',
        path: "/users",
        heading: 'All Users',
        element: <Users />,
        icon: <User />,
        inNav: true
    },
    {
        name: 'create-user',
        path: "/users/new",
        heading: 'Create New User',
        element: <NewUser />,
        icon: <UserPlus />,
        inNav: true
    },
    {
        name: 'timelogs',
        path: "/timelogs",
        heading: 'All Timelogs',
        element: <Timelogs />,
        icon: <Clock />,
        inNav: true
    },
    {
        name: 'single-timelog',
        path: "/timelogs/:id",
        heading: 'Single Timelog',
        element: <SingleTimelog />,
        icon: <Workflow />
    },
    {
        name: 'projects',
        path: "/projects",
        heading: 'All Projects',
        element: <Projects />,
        icon: <LayoutDashboard />,
        inNav: true
    },
    {
        name: 'create-project',
        heading: 'Create New Project',
        path: "/projects/new",
        element: <NewProject />,
        icon: <PackageCheck />,
        inNav: true
    },

]