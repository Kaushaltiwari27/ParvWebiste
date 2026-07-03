import { caseStudiesData } from "@/data/case-studies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyDetailClient from "@/components/CaseStudyDetailClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = caseStudiesData[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | ParvInfoSoft Case Studies`,
    description: data.subtitle,
  };
}

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const data = caseStudiesData[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <CaseStudyDetailClient data={data} />
      <Footer />
    </>
  );
}
