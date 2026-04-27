import { servicesData } from "@/data/pages";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = servicesData[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | ParvInfoSoft Services`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function ServicesPage({ params }: { params: { slug: string } }) {
  const data = servicesData[params.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <DynamicPageTemplate data={data} category="Services" />
      <Footer />
    </>
  );
}
