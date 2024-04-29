"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Features",
        "Testimonials",
        "Pricing",
        "Blog",
        "Contact sales",
        "Log in",
        "Get Started"
    ];

    return (
//         <div>
//  <Navbar onMenuOpenChange={setIsMenuOpen} className="my-2  flex h-20 justify-around " >
//             <NavbarContent  >
//                 <NavbarBrand  style={{width:'46rem'}} >
//                     <img src="/logo.svg" className="h-12 w-12" />
//                     <NavbarContent className="hidden sm:flex gap-3 ml-10">
//                         <NavbarItem>
//                             <Link color="foreground" href="#" className="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium" >
//                                 Features
//                             </Link>
//                         </NavbarItem>
//                         <NavbarItem >
//                             <Link color="foreground" href="#" className="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium" >
//                                 Testimonials
//                             </Link>
//                         </NavbarItem>
//                         <NavbarItem>
//                             <Link color="foreground" href="#" className="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium" >
//                                 Pricing
//                             </Link>
//                         </NavbarItem>
//                         <NavbarItem>
//                             <Link color="foreground" href="#" className="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium" >
//                                 Blog
//                             </Link>
//                         </NavbarItem>
//                     </NavbarContent>

//                 </NavbarBrand>
//                 <NavbarMenuToggle
//                     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//                     className="sm:hidden"
//                 />
//             </NavbarContent>
//             <NavbarContent className="hidden sm:flex gap-4 " justify="end">
//                 <NavbarItem>
//                     <Link color="foreground" href="#" className="font-sans font-medium py-2 px-4 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100 border-none  mr-2" >
//                         Contact sales
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Link color="foreground" href="#" className="font-sans font-medium py-2 px-4 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100 border-none  mr-2">
//                         Log in
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Button className="font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700" >Get Started</Button>
//                 </NavbarItem>
//                 <NavbarItem>

//                 </NavbarItem>
//             </NavbarContent>
//             <NavbarMenu>
//                 {menuItems.map((item, index) => (
//                     <NavbarMenuItem key={`${item}-${index}`}>
//                         <Link
//                             color="foreground"
//                             className="w-full"
//                             href="#"
//                             size="lg"

//                         >
//                             {item}
//                         </Link>
//                     </NavbarMenuItem>
//                 ))}
//             </NavbarMenu>
//         </Navbar>
//         </div>
       
        <Navbar></Navbar>
    );
}
