"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "IT & Infrastructure",
    icon: <PiWallFill />,
    title: "Services",
    description:
      "Our comprehensive managed services ensure smooth day-to-day IT operations. We deliver reliable IT infrastructure solutions tailored to your business needs.",
    serviceList: [
      "Proactive Monitoring",
      "Rapid Support",
      "Network Management",
      "System Maintenance",
      "Performance Optimization",
      "Reliable Infrastructure",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "Virtualisation",
    icon: <PiPaintRollerFill />,
    title: "Solutions",
    description:
      "We provide scalable and flexible cloud hosting, virtualization, and data backup services. Optimize IT resources, reduce capital expenditure, and quickly adapt to evolving market demands.",
    serviceList: [
      "Responsive Design",
      "Virtual Environments",
      "Cloud Hosting",
      "Secure Backups",
      "Resource Efficiency",
      "Remote Accessibility",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "AI & Automation",
    icon: <PiWrenchFill />,
    title: "Solutions",
    description:
      "Our AI-driven solutions harness machine learning and advanced analytics to streamline operations, enhance decision-making, and unlock new growth opportunities.",
    serviceList: [
      "Machine Learning",
      "Predictive Analytics",
      "Process Efficiency",
      "Structural Fix",
      "Data Insights",
      "Smart Integrations",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-9.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "Cybersecurity & GDPR",
    icon: <PiUserGearFill />,
    title: "Services",
    description:
      "We offer multi-layered security solutions, threat detection, and compliance management to safeguard your business against evolving cyber threats.",
    serviceList: [
      "Threat Detection",
      "Data Encryption",
      "Compliance Management",
      "Vulnerability Assessments",
      "Risk Mitigation",
      "Incident Response",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-7.jpg" },
      { url: "/assets/img/services/thumb-8.jpg" },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Professional and Inclusive</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
          Affordable, expert IT support isn’t just a service-it’s a promise. We believe every business, no matter how modest, should have access to world-class technology.
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="construction"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[150px] ml-16">
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* images */}
                    <div className="flex md:flex-col gap-8 xl:gap-[15px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[150px] md:w-[175px] xl:w-[200px] h-[160px] md:h-[180px] xl:h-[210px]"
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>
                    {/* text & button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/* btn */}
                        <Button text="Read more" />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
