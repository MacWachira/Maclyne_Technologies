// src/components/Services.jsx
import React, { useState } from "react";
import {
  Laptop,
  Wrench,
  Network,
  Headphones,
  Cloud,
  ShieldCheck,
  Code,
  Database,
  Server,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Computer Sales",
    description: "Wide range of branded desktops, laptops, and accessories. We provide genuine products with warranty, installation, and after-sales support tailored to individuals, SMEs, and institutions.",
    moreInfo: "We partner with leading global brands to deliver affordable and high-performance machines. Get personalized recommendations based on your needs.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Repairs & Maintenance",
    description: "Hardware troubleshooting, OS reinstallation, virus removal, and preventive maintenance. Our experts ensure minimal downtime and maximum productivity.",
    moreInfo: "We offer both on-site and remote support, ensuring your systems are always up-to-date and functioning optimally.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "LAN & Networking",
    description: "Design and deployment of LAN, WAN, and Wi-Fi networks. Includes structured cabling, router/switch configuration, VPN setup, and network
