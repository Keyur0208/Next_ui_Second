"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      offset:500,
      disable: "phone",
      duration: 800, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return null;
};

export default AOSInit;
