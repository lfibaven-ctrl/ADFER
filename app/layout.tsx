import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
const display=Space_Grotesk({subsets:["latin"],variable:"--font-display",display:"swap"});
const body=Manrope({subsets:["latin"],variable:"--font-body",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://adfermarketing.com"),title:"AdFer Marketing | Agencia de marketing digital en Chihuahua",description:"Estrategias digitales, diseño de contenido, administración de redes sociales y campañas de Meta Ads para impulsar el crecimiento de tu negocio.",alternates:{canonical:"/"},openGraph:{title:"AdFer Marketing | Estrategia, contenido y Meta Ads",description:"Convertimos atención digital en crecimiento real.",type:"website",locale:"es_MX"},twitter:{card:"summary_large_image",title:"AdFer Marketing",description:"Estrategia, contenido y Meta Ads para marcas que quieren crecer."},manifest:"/manifest.webmanifest",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>}
