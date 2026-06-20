import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Facebook, Star, ShieldCheck, BadgeCheck, Hammer,
  Wrench, Layers, Boxes, Sparkles, ArrowRight, Menu, X, CheckCircle2, Quote,
} from "lucide-react";
import logo from "@/assets/logo.jpg";
import hero from "@/assets/hero-modern.jpg";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";
import p1 from "@/assets/p1-kitchen-floor.jpg.asset.json";
import p2 from "@/assets/p2-subway-bath.jpg.asset.json";
import p3 from "@/assets/p3-kitchen-progress.jpg.asset.json";
import p4 from "@/assets/p4-open-kitchen.jpg.asset.json";
import p5 from "@/assets/p5-slat-island.jpg.asset.json";
import p6 from "@/assets/p6-bedroom-floor.jpg.asset.json";
import p7 from "@/assets/p7-wainscot-bath.jpg.asset.json";
import p8 from "@/assets/p8-wide-plank.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EPS Flooring & Carpentry — Premium Remodeling in SW Florida" },
      { name: "description", content: "Award-quality flooring installation, custom carpentry, and full remodeling by EPS in Sarasota, North Port, Englewood, Venice & Fort Myers. Free estimates." },
      { property: "og:title", content: "EPS Flooring & Carpentry — Premium Remodeling in SW Florida" },
      { property: "og:description", content: "Hardwood, tile, custom carpentry and full remodels — crafted with precision in Southwest Florida." },
    ],
  }),
  component: Home,
});

const PHONE_DISPLAY = "(941) 301-9649";
const PHONE_HREF = "tel:+19413019649";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  { icon: Layers, title: "Hardwood Flooring", desc: "Solid and engineered hardwood installed plank-by-plank with precision." },
  { icon: Boxes, title: "Luxury Vinyl & Laminate", desc: "Waterproof, designer-grade plank flooring built for the Florida lifestyle." },
  { icon: Hammer, title: "Tile & Stone", desc: "Porcelain, ceramic and natural stone — bathrooms, showers, and full floors." },
  { icon: Wrench, title: "Custom Carpentry", desc: "Trim, wainscoting, crown molding and slatwall accents that elevate any room." },
  { icon: Boxes, title: "Kitchen & Bath Remodels", desc: "Cabinets, vanities, niches and full renovations finished to a luxury standard." },
  { icon: Sparkles, title: "Repair & Refinishing", desc: "Restore tired floors and finish work to a like-new condition." },
];

const GALLERY = [
  { src: p8.url, label: "Wide-Plank Oak · Kitchen", span: "md:col-span-2 md:row-span-2" },
  { src: p4.url, label: "Open Concept Living" },
  { src: p2.url, label: "Subway Tile Shower" },
  { src: p5.url, label: "Slat Wall Island" },
  { src: p1.url, label: "Vinyl Plank Install" },
  { src: p6.url, label: "Bedroom Flooring" },
  { src: p7.url, label: "Wainscoting Detail" },
  { src: p3.url, label: "Kitchen Remodel in Progress" },
];

const REVIEWS = [
  {
    name: "Alex",
    quote: "Peter with EPS General Contractor remodeled our laundry room, master bathroom, and small bathroom. He did a great job. The cabinets and faucets look great. Love the LEDs in the shower niche. The tile is a masterpiece. You can see his great attention to detail. He's passionate about what he does, stayed on schedule, and communicated quickly. We'll definitely be reaching out to Peter again for our kitchen remodel.",
  },
  {
    name: "Yegor Suyarkov",
    quote: "Peter recently installed the flooring in my house, and I couldn't be happier with the results! The quality of work is outstanding, and it's clear he takes pride in his craftsmanship. My floors look fantastic thanks to Peter's expertise and attention to detail. I highly recommend him for any flooring project.",
  },
  {
    name: "Anthony Doherty",
    quote: "Peter installed all the flooring and base moldings in my home. He even moved all the furniture to complete the job and left everything clean when he was finished. Excellent workmanship and service. Highly recommended.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-10 flex items-center justify-between h-18 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="EPS Flooring & Carpentry" className="h-10 md:h-11 w-auto rounded-md" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-xl text-[color:var(--ink)]">EPS</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)] font-semibold">Flooring & Carpentry</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={PHONE_HREF} className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)] px-3 py-2">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] text-[color:var(--ivory)] px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--ink-soft)] transition">
            Free Estimate <ArrowRight className="h-4 w-4" />
          </a>
          <a href={PHONE_HREF} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-[color:var(--ink)] text-[color:var(--ivory)]" aria-label="Call now">
            <Phone className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-5 py-3 flex flex-col">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium border-b border-border last:border-0">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-4 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] text-[color:var(--ivory)] px-5 py-3 text-sm font-semibold">
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Bright modern home with light hardwood flooring" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-10 pt-28 md:pt-40 pb-24 md:pb-40">
        <div className="max-w-3xl text-[color:var(--ivory)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur animate-fade-up">
            <ShieldCheck className="h-3.5 w-3.5" /> Licensed Florida LLC · Insured
          </div>
          <h1 className="mt-7 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-medium animate-fade-up-delay-1">
            Craftsmanship that<br />
            <em className="italic text-[color:var(--wood)]">elevates</em> the home.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-up-delay-2">
            Premium flooring, custom carpentry, and full kitchen & bath remodels — installed with uncompromising precision across Southwest Florida.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up-delay-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ivory)] hover:bg-white text-[color:var(--ink)] px-7 py-4 text-sm font-semibold shadow-[var(--shadow-lift)] transition">
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-4 text-sm font-semibold backdrop-blur transition">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl animate-fade-up-delay-3">
            {[
              { k: "15+", v: "Years of Craft" },
              { k: "5.0", v: "Average Rating" },
              { k: "100%", v: "Satisfaction" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl md:text-4xl text-[color:var(--ivory)]">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-white/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Hardwood", "Luxury Vinyl", "Tile & Stone", "Custom Carpentry", "Kitchen Remodels", "Bath Remodels", "Wainscoting", "Trim & Molding"];
  return (
    <div className="border-y border-border bg-[color:var(--sand)]/50">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs md:text-sm uppercase tracking-[0.2em] text-[color:var(--ink-soft)] font-medium">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-8">
            {i}
            {idx < items.length - 1 && <span className="h-1 w-1 rounded-full bg-[color:var(--ink-soft)]/40 hidden md:inline-block" />}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub, center = false }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl mb-14 md:mb-20 ${center ? "mx-auto text-center" : ""}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--wood-dark)]">{eyebrow}</div>
      <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-[color:var(--ink)]">{title}</h2>
      {sub && <p className="mt-5 text-base md:text-lg text-[color:var(--ink-soft)] leading-relaxed">{sub}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader eyebrow="What We Do" title="A complete craft, end to end." sub="From the subfloor to the final piece of trim — every detail handled by one trusted team." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative bg-card p-8 md:p-10 hover:bg-[color:var(--sand)]/40 transition">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-[color:var(--ink)]/15 text-[color:var(--ink)] group-hover:bg-[color:var(--ink)] group-hover:text-[color:var(--ivory)] transition">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-[color:var(--ink)]">{s.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--ink-soft)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted select-none shadow-[var(--shadow-soft)]">
        <img src={after} alt={`${label} after`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`${label} before`} className="absolute inset-0 h-full w-auto max-w-none object-cover" style={{ width: `${(100 / pos) * 100}%` }} loading="lazy" />
        </div>
        <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur">Before</div>
        <div className="absolute top-4 right-4 bg-[color:var(--ivory)] text-[color:var(--ink)] text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">After</div>
        <div className="absolute inset-y-0 w-px bg-white pointer-events-none" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-white shadow-xl flex items-center justify-center text-[color:var(--ink)]">
            <ArrowRight className="h-3.5 w-3.5 -rotate-180" />
            <ArrowRight className="h-3.5 w-3.5 -ml-1" />
          </div>
        </div>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" aria-label={`${label} before/after slider`} />
      </div>
      <div className="text-sm font-medium text-[color:var(--ink)] tracking-wide">{label}</div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 md:py-36 bg-[color:var(--sand)]/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader eyebrow="Recent Work" title="Real homes. Real craftsmanship." sub="A selection of recent installs across Southwest Florida — drag the sliders to see the transformation." />

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-20 md:mb-28">
          <BeforeAfter before={before1} after={after1} label="Living Room Feature Wall · Port Charlotte" />
          <BeforeAfter before={before2} after={after2} label="Coastal Fireplace Build · Sarasota" />
        </div>

        <div className="flex items-end justify-between mb-8">
          <h3 className="font-display text-3xl md:text-4xl text-[color:var(--ink)]">Project Gallery</h3>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)] hover:text-[color:var(--wood-dark)] transition">
            Start your project <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
          {GALLERY.map((g) => (
            <figure key={g.label} className={`group relative overflow-hidden rounded-2xl bg-muted ${g.span ?? ""}`}>
              <img src={g.src} alt={g.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-3 left-4 right-4 text-[color:var(--ivory)] text-xs md:text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-lift)]">
            <img src={p8.url} alt="Wide plank oak floor by EPS" className="w-full h-full object-cover aspect-[4/5]" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-[color:var(--ink)] text-[color:var(--ivory)] rounded-2xl p-7 shadow-[var(--shadow-lift)] max-w-xs">
            <Quote className="h-6 w-6 text-[color:var(--wood)]" />
            <p className="mt-3 text-sm leading-relaxed text-white/90">"He treats every job like it's his own home. That's rare."</p>
            <div className="mt-3 text-[11px] uppercase tracking-widest text-white/60">— EPS client</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader eyebrow="About EPS" title="Built on precision, trust, and craft." />
          <p className="text-base md:text-lg text-[color:var(--ink-soft)] leading-relaxed">
            Founded by <strong className="text-[color:var(--ink)]">Peter Sannikov</strong>, EPS Flooring & Carpentry is a licensed Florida LLC delivering high-end flooring, custom carpentry, and full remodels across Southwest Florida. Every project is treated as a portfolio piece — handled directly by Peter with the same attention to detail you'd expect from the finest custom homes.
          </p>
          <p className="mt-5 text-base md:text-lg text-[color:var(--ink-soft)] leading-relaxed">
            Clean job sites. Clear communication. Honest pricing. And the kind of finish work that still looks flawless a decade later.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: BadgeCheck, label: "Florida LLC" },
              { icon: Star, label: "5★ Reviewed" },
            ].map((b) => (
              <div key={b.label} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sand)]/60 border border-border px-4 py-2.5 text-sm font-medium text-[color:var(--ink)]">
                <b.icon className="h-4 w-4 text-[color:var(--wood-dark)]" /> {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[color:var(--ink)] text-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--wood)]">Testimonials</div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">
            Loved by homeowners across SW Florida.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {REVIEWS.map((t) => (
            <figure key={t.name} className="relative rounded-3xl bg-white/[0.04] border border-white/10 p-8 md:p-10 hover:bg-white/[0.07] transition">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[color:var(--wood)]/40" />
              <div className="flex gap-1 text-[color:var(--wood)]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-white/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-white/10">
                <div className="font-display text-lg text-[color:var(--ivory)]">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Verified Client</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--sand)] border border-border p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--wood-dark)]">Ready when you are</div>
            <h3 className="mt-3 font-display text-3xl md:text-5xl leading-[1.05] text-[color:var(--ink)]">
              Let's build something you'll love walking on.
            </h3>
            <p className="mt-4 text-[color:var(--ink-soft)] md:text-lg">Free, no-pressure estimates — typically same-day response.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] hover:bg-[color:var(--ink-soft)] text-[color:var(--ivory)] px-7 py-4 text-sm font-semibold transition">
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-white border border-border text-[color:var(--ink)] px-7 py-4 text-sm font-semibold hover:border-[color:var(--ink)] transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-36 bg-[color:var(--sand)]/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionHeader eyebrow="Get Started" title="Request your free estimate." sub="Tell us a bit about your project — or call us directly. We typically respond the same day." />
          <div className="space-y-3">
            <a href={PHONE_HREF} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-[color:var(--ink)] transition">
              <div className="h-11 w-11 rounded-full bg-[color:var(--ink)] text-[color:var(--ivory)] flex items-center justify-center"><Phone className="h-4 w-4" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)] font-semibold">Call</div>
                <div className="font-semibold text-[color:var(--ink)]">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href="mailto:info@epsflooring.com" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-[color:var(--ink)] transition">
              <div className="h-11 w-11 rounded-full bg-[color:var(--wood-dark)] text-white flex items-center justify-center"><Mail className="h-4 w-4" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)] font-semibold">Email</div>
                <div className="font-semibold text-[color:var(--ink)]">info@epsflooring.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
              <div className="h-11 w-11 rounded-full bg-[color:var(--sage)] text-white flex items-center justify-center"><MapPin className="h-4 w-4" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)] font-semibold">Service Area</div>
                <div className="font-semibold text-[color:var(--ink)]">Port Charlotte, FL</div>
                <div className="text-sm text-[color:var(--ink-soft)] mt-1 leading-relaxed">Sarasota · North Port · Englewood<br />Venice · Fort Myers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              if (!window.location.hostname.includes("netlify")) {
                e.preventDefault();
                setSent(true);
              }
            }}
            className="rounded-3xl bg-card border border-border p-7 md:p-12 shadow-[var(--shadow-soft)]"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[color:var(--ink-soft)] mb-2">Service Needed</label>
                <select name="service" required className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--ink)] focus:border-[color:var(--ink)]">
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                  <option>Something Else</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[color:var(--ink-soft)] mb-2">Project Details</label>
                <textarea name="message" rows={5} required className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--ink)] focus:border-[color:var(--ink)]" />
              </div>
            </div>
            <button type="submit" className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] hover:bg-[color:var(--ink-soft)] text-[color:var(--ivory)] px-8 py-4 text-sm font-semibold transition">
              Send Request <ArrowRight className="h-4 w-4" />
            </button>
            {sent && <p className="mt-4 text-sm text-[color:var(--sage)] font-semibold">Thanks! Your message will be sent once deployed on Netlify.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[color:var(--ink-soft)] mb-2">{label}</label>
      <input type={type} name={name} required={required} className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--ink)] focus:border-[color:var(--ink)]" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EPS Flooring & Carpentry" className="h-12 w-auto rounded-md" />
            <div>
              <div className="font-display text-xl">EPS Flooring & Carpentry</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--wood)] font-semibold">Licensed Florida LLC</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/65 max-w-md leading-relaxed">Premium flooring, carpentry, and remodeling — crafted with precision across Southwest Florida.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--wood)] font-semibold mb-5">Navigate</div>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="text-white/75 hover:text-white transition">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--wood)] font-semibold mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-white/75">
            <li><a href={PHONE_HREF} className="hover:text-white transition">{PHONE_DISPLAY}</a></li>
            <li><a href="mailto:info@epsflooring.com" className="hover:text-white transition">info@epsflooring.com</a></li>
            <li>Port Charlotte, FL</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/55">
        © {new Date().getFullYear()} EPS Flooring & Carpentry, LLC · Licensed Florida LLC
      </div>
    </footer>
  );
}
