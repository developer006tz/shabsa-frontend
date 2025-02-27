'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, ShoppingCart } from 'lucide-react'
import { Button } from '../button2'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../dropdown-menu'
import { usePathname } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../dialog'
import Cart from '@/components/cart/Cart'

export default function Header() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const pathname = usePathname();
  const navigation = [
    { name: 'HOME', href: '/home', isActive: pathname === '/home' },
    { name: 'ABOUT', href: '/about-us', isActive: pathname === '/about-us' },
    { name: 'SERVICE', href: '/services', isActive: pathname.startsWith('/services') },
    { name: 'TEAM', href: '#', isActive: pathname === '/team' },
    { name: 'PRODUCTS', href: '/products', isActive: pathname === '/products' },
    { name: 'PAGES', href: '#', isActive: pathname === '/pages' },
    { name: 'CONTACT US', href: '/contact-us', isActive: pathname === '/contact-us' },
  ]
  return (
    <header className="bg-[#030f27] text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex gap-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${link.isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"
                  }`}              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {navigation.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link href={link.href}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Cart Icon and Login Button */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart with Notification Badge */}
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {'6'}
              </span>
            </div>

            {/* Login Button */}
            {pathname !== '/login' && (
              <Link href={'/login'}>
                <button className="bg-[#FDB813] text-[#030f27] font-bold hover:bg-[#EAA30B] rounded-lg px-4 py-2 transition-all">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* OPEN CART MODAL */}
      <Dialog open={isCartOpen} >
        <DialogContent className="max-w-3xl p-6">
          <DialogHeader>
          <DialogTitle>Shopping Bag</DialogTitle>
          </DialogHeader>
          <Cart closeCartModal={() => setIsCartOpen(false)} />
        </DialogContent>
      </Dialog>
    </header>
  )
}

