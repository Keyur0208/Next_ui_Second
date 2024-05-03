"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Divider } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { theme, setTheme } = useTheme();

    function handleTheameSwitch() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const menuItems = [
        {
            url: "#",
            name: "Features"
        },
        {
            url: "#",
            name: "Testimonials"
        },
        {
            url: "#",
            name: "Pricing"
        },
        {
            url: "#",
            name: "Login"
        }
    ];

    const menuItems2 = [
        {
            url: "#",
            name: "Contact Sales"
        },
        {
            url: "#",
            name: "Log in"
        },
        {
            url: "#",
            name: "Get Started"
        }
    ];

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" height="6rem" className="bg-white dark:bg-black" isBordered={theme == "dark" ? true : false} >
                <NavbarContent>
                    <div className="flex items-center gap-4">
                        <NavbarBrand className="mr-2 lg:mr-2 xl:mr-6">
                            <img src="/logo.svg" className="h-14" />
                        </NavbarBrand>
                        <NavbarItem className="hidden lg:flex gap-4">
                            <Link href="#" aria-current="page" className="mr-2  font-medium text-gray-500 hover:text-black px-3 py-2 rounded-md  dark:text-white " >
                                Features
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="hidden lg:flex gap-4">
                            <Link color="foreground" href="#" className="mr-2  font-medium text-gray-500 hover:text-black px-3 py-2 rounded-md
                            dark:text-white">
                                Testimonials
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="hidden lg:flex gap-4">
                            <Link color="foreground" href="#" className="mr-2  font-medium text-gray-500 hover:text-black px-3 py-2 rounded-md  dark:text-white">
                                Pricing
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="hidden lg:flex gap-4">
                            <Link color="foreground" href="#" className="mr-2   font-medium text-gray-500 hover:text-black px-3 py-2 rounded-md dark:text-white">
                                Blog
                            </Link>
                        </NavbarItem>
                    </div>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden  lg:flex items-center gap-1">
                        <Link href="#" className="font-medium ease-in-out duration-300 py-2 px-4  rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100 border-0 mr-1 dark:bg-black dark:text-white dark:hover:bg-gray-100  dark:hover:text-black " >
                            Contact sales
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex items-center gap-4">
                        <Link href="#" className="font-medium py-2 px-4  rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100 border-0 mr-1 dark:bg-black dark:text-white dark:hover:bg-gray-100  dark:hover:text-black " >
                            Login
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex gap-4">
                        <Button color="danger" href="#" size="md" radius="full" className="ont-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700">
                            Get started
                        </Button>
                    </NavbarItem>
                    <NavbarItem className="gap-4">
                        <div onClick={handleTheameSwitch} className="cursor-pointer"   >
                            {theme === 'light' ? (
                                <img src="/moon.png" alt="moon" className="size-5" />
                            ) : (
                                <img src="/sun.png" alt="sun" className="size-5" />
                            )}
                        </div>
                    </NavbarItem>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="lg:hidden"
                    />
                </NavbarContent>
                <NavbarMenu >
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className="p-1">
                            <Link color="foreground" href={item.url}  >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <Divider className="p-0" />
                    {menuItems2.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link color="foreground" href={item.url} className="p-1 " >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    );
}


