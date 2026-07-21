import AdferLanding from "@/components/AdferLanding";
import { siteContent } from "@/data/site-content";
export default function Home(){
  const url=process.env.NEXT_PUBLIC_SITE_URL||"https://adfermarketing.com";
  const schema={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${url}/#organization`,name:"AdFer Marketing",url,sameAs:[]},{"@type":"ProfessionalService","@id":`${url}/#service`,name:"AdFer Marketing",url,areaServed:"Chihuahua, México",telephone:"+52 614 256 2234",parentOrganization:{"@id":`${url}/#organization`}},{"@type":"FAQPage",mainEntity:siteContent.faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><AdferLanding/></>;
}
