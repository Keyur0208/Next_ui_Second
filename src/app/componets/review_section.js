"use client"
import { Avatar, avatar } from "@nextui-org/react"
import { useState } from "react";

export default function Review_Section() {

    const [users, setUsers] = useState([
        { name: 'Jack Doe', company: 'Amazon.com, Inc.', avatar: '/jack_doe.webp' , des:'Anim labore ut amet cupidatat pariatur pariatur labore ad est. Fugiat eiusmod dolore aliquip aute duis esse excepteur amet. Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur. Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est magna nostrud Lorem consectetur irure.'},
        { name: 'John Doe' , company : 'Alphabet Inc.' , avatar: '/social-1.webp' , des:'Commodo Lorem consequat ea consectetur pariatur proident excepteur. Pariatur eiusmod minim minim ipsum tempor aute excepteur minim eu nisi laboris. Duis sunt labore eu eu cupidatat labore commodo id aliquip.'}
    ]);

    const [currentUserIndex, setCurrentUserIndex] = useState(0);

    const currentUser = users[currentUserIndex];

    const handleNextUser = () => {
        setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
    };

    return (
        <>
            <section className="bg-white dark:bg-black" >
                <div className="flex flex-col justify-center items-center w-full py-10 pb-20" data-aos="flip-left"  >
                    <div className="w-10/12 ease-in duration-300" >
                        <div>
                            <img src="/download (3).svg" className="size-12" />
                        </div>
                        <div className="pt-4">
                            <p className="text-gray-600 text-base pb-6 dark:text-white">{currentUser.des}</p>
                        </div>
                        <div className="flex flex-row  justify-between items-center" >
                            <div className="flex flex-row gap-4 items-center" >
                                <div>
                                    <Avatar
                                        isBordered
                                        src={currentUser.avatar}
                                        size="lg" />
                                </div>
                                <div>
                                    <h1 className="text-gray-600 font-bold dark:text-white">{currentUser.name}</h1>
                                    <p className="text-gray-600 text-base font-light dark:text-white">{currentUser.company}.</p>
                                </div>
                            </div>
                            <div className="flex flex-row " >
                                <img src="/download (9).svg"
                                    className="size-10 lg:size-12 cursor-pointer" 
                                    onClick={handleNextUser}
                                />
                                <img src="/download (8).svg"
                                    className="size-10 lg:size-12 cursor-pointer"
                                    onClick={handleNextUser}
                                 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
