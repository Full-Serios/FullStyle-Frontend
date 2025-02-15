import type { Metadata } from 'next'
import '@/app/globals.css'
import Link from 'next/link'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from '@/components/ui/separator'
import LogoutButton from '@/components/logout-button'
import React from 'react'

export const metadata: Metadata = {
  title: 'FullStyle - Dueños'
}

export default function OwnerLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
          <SidebarTrigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex flex-1 items-center justify-between">
            <Link href="/" className="hidden font-semibold md:block title">
              FullStyle
            </Link>
            <LogoutButton />
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
