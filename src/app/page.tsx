import { Contact } from "@/components/contact";
import { EducationSkills } from "@/components/education-skills";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Talks } from "@/components/talks";
import { Work } from "@/components/work";
import { site } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denver / Arvada",
      addressRegion: "CO",
      addressCountry: "US",
    },
    jobTitle: "Full-stack developer and building energy codes specialist",
    sameAs: [site.github, site.linkedin],
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Experience />
      <Work />
      <Talks />
      <EducationSkills />
      <Contact />
    </main>
  );
}
