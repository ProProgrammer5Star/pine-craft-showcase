import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Facebook, Star, ShieldCheck, BadgeCheck, Hammer,
  Wrench, Layers, Boxes, Sparkles, ArrowRight, Menu, X, CheckCircle2,
} from "lucide-react";
import logo from "@/assets/logo.jpg";
import hero from "@/assets/hero.jpg";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EPS Flooring and Carpentry | Port Charlotte, FL" },
      { name: "description", content: "Licensed flooring & custom carpentry contractor serving Port Charlotte, North Port, Punta Gorda, Arcadia & Sarasota, FL." },
      { property: "og:title", content: "EPS Flooring and Carpentry" },
      { property: "og:description", content: "Expert hardwood, tile, vinyl & custom carpentry installation in Southwest Florida." },
    ],
  }),
  component: Home,
});

const PHONE_DISPLAY = "(941) 301-9649";
const PHONE_HREF = "tel:+19413019649";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Work" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  { icon: Layers, title: "Hardwood Flooring Installation", desc: "Solid and engineered hardwood, expertly installed for lasting beauty." },
  { icon: Boxes, title: "Laminate & Vinyl Plank", desc: "Durable, water-resistant flooring perfect for the Florida lifestyle." },
  { icon: Hammer, title: "Tile Installation", desc: "Porcelain, ceramic, and natural stone with precision layout and grout." },
  { icon: Wrench, title: "Custom Carpentry & Trim", desc: "Crown molding, baseboards, wainscoting and finish carpentry done right." },
  { icon: Boxes, title: "Cabinetry & Built-Ins", desc: "Custom cabinets, shelving, and built-in entertainment centers." },
  { icon: Sparkles, title: "Repair & Refinishing", desc: "Bring tired floors back to life with sanding, refinishing and repairs." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="EPS Flooring and Carpentry" className="h-10 md:h-12 w-auto rounded-md" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-bold tracking-tight text-[color:var(--navy)] text-lg">EPS</span>
            <span className="text-[10px] uppercase tracking-widest text-[color:var(--forest)] font-semibold">Flooring & Carpentry</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-foreground/80 hover:text-[color:var(--navy)] transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--navy)] text-[color:var(--cream)] px-4 md:px-5 py-2.5 text-sm font-bold shadow-[var(--shadow-soft)] hover:bg-[color:var(--navy-deep)] transition"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-semibold border-b border-border last:border-0">
                {n.label}
              </a>
            ))}
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
        <img src={hero} alt="Finished hardwood flooring" className="w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl text-[color:var(--cream)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" /> Licensed Florida LLC · Installer #9413019649
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Expert Flooring & Carpentry Craftsmanship in <span className="text-[color:var(--wood)]">Southwest Florida</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            Quality installation, custom carpentry, and reliable service you can trust. Serving Port Charlotte, North Port, Punta Gorda, Arcadia & Sarasota.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--wood)] hover:bg-[color:var(--wood-dark)] text-white px-7 py-4 text-base font-bold shadow-[var(--shadow-soft)] transition">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-4 text-base font-bold backdrop-blur transition">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mb-12 md:mb-16">
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--forest)]">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--navy-deep)]">{title}</h2>
      {sub && <p className="mt-4 text-base md:text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader eyebrow="What We Do" title="Flooring & Carpentry Services" sub="From installation to finish work, we deliver craftsmanship that lasts." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative rounded-2xl bg-card border border-border p-7 hover:border-[color:var(--wood)] hover:shadow-[var(--shadow-soft)] transition">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[color:var(--wood)]/10 text-[color:var(--wood-dark)] group-hover:bg-[color:var(--wood)] group-hover:text-white transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[color:var(--navy-deep)]">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[color:var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader eyebrow="About EPS" title="Built on craftsmanship and trust." />
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Founded by <strong>Peter Sannikov</strong>, EPS Flooring and Carpentry is a licensed Florida LLC delivering expert flooring installation and custom carpentry across Southwest Florida. Every project is handled with attention to detail, honest communication, and the kind of workmanship that holds up for decades.
          </p>
          <p className="mt-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            Whether it's a full home flooring transformation or a custom built-in, we treat your home like our own — clean job sites, on-time completion, and results we're proud to stand behind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: BadgeCheck, label: "Florida LLC" },
              { icon: Star, label: "Installer Certified" },
            ].map((b) => (
              <div key={b.label} className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-semibold text-[color:var(--navy-deep)]">
                <b.icon className="h-4 w-4 text-[color:var(--forest)]" /> {b.label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border-8 border-card shadow-[var(--shadow-soft)]">
            <img src={after1} alt="Finished living room with stone fireplace" className="w-full h-full object-cover aspect-[4/5]" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-[color:var(--navy)] text-[color:var(--cream)] rounded-2xl p-6 shadow-[var(--shadow-soft)] max-w-xs">
            <div className="text-3xl font-extrabold">100%</div>
            <div className="text-sm opacity-90">Customer satisfaction on every project we deliver.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted select-none">
        <img src={after} alt={`${label} after`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`${label} before`} className="absolute inset-0 h-full w-auto max-w-none object-cover" style={{ width: `${(100 / pos) * 100}%` }} loading="lazy" />
        </div>
        <div className="absolute top-3 left-3 bg-[color:var(--navy)]/90 text-white text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Before</div>
        <div className="absolute top-3 right-3 bg-[color:var(--wood)] text-white text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">After</div>
        <div className="absolute inset-y-0 w-0.5 bg-white pointer-events-none" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[color:var(--navy)]">
            <ArrowRight className="h-4 w-4 -rotate-180" />
            <ArrowRight className="h-4 w-4 -ml-1" />
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label={`${label} before/after slider`}
        />
      </div>
      <div className="text-sm font-semibold text-[color:var(--navy-deep)]">{label}</div>
    </div>
  );
}

function Gallery() {
  const placeholders = Array.from({ length: 6 });
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader eyebrow="Recent Work" title="Transformations that speak for themselves" sub="Drag the slider to see the before and after of recent jobs." />
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <BeforeAfter before={before1} after={after1} label="Living Room Feature Wall · Port Charlotte" />
          <BeforeAfter before={before2} after={after2} label="Coastal Fireplace Build · Sarasota" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[color:var(--navy-deep)] mb-6">Project Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((_, i) => (
            <div key={i} className="aspect-square rounded-2xl border-2 border-dashed border-border bg-muted flex items-center justify-center text-muted-foreground text-sm font-semibold">
              Project Photo {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { title: "Quality Craftsmanship", desc: "Every cut, plank, and joint is done right the first time." },
    { title: "On-Time Completion", desc: "We respect your schedule and finish when we say we will." },
    { title: "Fair, Transparent Pricing", desc: "Honest quotes with no surprise add-ons or hidden fees." },
    { title: "Free Estimates", desc: "No-pressure, in-home estimates at no cost to you." },
    { title: "Local SW Florida Expertise", desc: "We understand Florida homes — humidity, slabs, and salt air." },
    { title: "Fully Licensed & Insured", desc: "Peace of mind on every job, big or small." },
  ];
  return (
    <section id="why" className="py-20 md:py-28 bg-[color:var(--navy-deep)] text-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--wood)]">Why Choose EPS</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">The contractor your neighbors recommend.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition">
              <CheckCircle2 className="h-7 w-7 text-[color:var(--wood)]" />
              <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Customer Name", location: "Port Charlotte, FL", quote: "Placeholder testimonial — replace with a real customer review once available." },
    { name: "Customer Name", location: "North Port, FL", quote: "Placeholder testimonial — replace with a real customer review once available." },
    { name: "Customer Name", location: "Sarasota, FL", quote: "Placeholder testimonial — replace with a real customer review once available." },
  ];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader eyebrow="Testimonials" title="What our customers are saying" />
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-card border border-border p-7 shadow-sm">
              <div className="flex gap-0.5 text-[color:var(--wood)]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-foreground/80 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <div className="font-bold text-[color:var(--navy-deep)]">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28 bg-[color:var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <SectionHeader eyebrow="Get Started" title="Request your free quote" sub="Fill out the form or call us directly — we typically respond same day." />
          <div className="space-y-4">
            <a href={PHONE_HREF} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-[color:var(--wood)] transition">
              <div className="h-12 w-12 rounded-xl bg-[color:var(--navy)] text-white flex items-center justify-center"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Call</div>
                <div className="font-bold text-[color:var(--navy-deep)]">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href="mailto:info@epsflooring.com" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-[color:var(--wood)] transition">
              <div className="h-12 w-12 rounded-xl bg-[color:var(--forest)] text-white flex items-center justify-center"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Email</div>
                <div className="font-bold text-[color:var(--navy-deep)]">info@epsflooring.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
              <div className="h-12 w-12 rounded-xl bg-[color:var(--wood)] text-white flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Service Area</div>
                <div className="font-bold text-[color:var(--navy-deep)]">Port Charlotte, FL</div>
                <div className="text-sm text-muted-foreground mt-1">Serving North Port, Punta Gorda, Arcadia & Sarasota</div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted">
              <iframe
                title="EPS Service Area Map"
                src="https://www.google.com/maps?q=Port+Charlotte,+FL&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
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
              // Allow native Netlify submission; show confirmation only when on Netlify
              if (!window.location.hostname.includes("netlify")) {
                e.preventDefault();
                setSent(true);
              }
            }}
            className="rounded-3xl bg-card border border-border p-6 md:p-10 shadow-[var(--shadow-soft)]"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[color:var(--navy-deep)] mb-2">Service Needed</label>
                <select name="service" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--navy)]">
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                  <option>Something Else</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[color:var(--navy-deep)] mb-2">Project Details</label>
                <textarea name="message" rows={5} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--navy)]" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] hover:bg-[color:var(--navy-deep)] text-white px-8 py-4 text-base font-bold shadow-[var(--shadow-soft)] transition">
              Send My Quote Request <ArrowRight className="h-4 w-4" />
            </button>
            {sent && <p className="mt-4 text-sm text-[color:var(--forest)] font-semibold">Thanks! Your message will be sent once deployed on Netlify.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-sm font-bold text-[color:var(--navy-deep)] mb-2">{label}</label>
      <input type={type} name={name} required={required} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--navy)]" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EPS Flooring and Carpentry" className="h-12 w-auto rounded-md" />
            <div>
              <div className="font-extrabold text-lg">EPS Flooring & Carpentry</div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--wood)] font-semibold">Licensed Florida LLC</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-md">Craftsman flooring and carpentry serving Southwest Florida with quality, reliability, and pride.</p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[color:var(--wood)] font-bold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="text-white/80 hover:text-white">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[color:var(--wood)] font-bold mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href={PHONE_HREF} className="hover:text-white">{PHONE_DISPLAY}</a></li>
            <li><a href="mailto:info@epsflooring.com" className="hover:text-white">info@epsflooring.com</a></li>
            <li>Port Charlotte, FL</li>
            <li className="text-xs text-white/60 pt-2">Port Charlotte · North Port · Punta Gorda · Arcadia · Sarasota</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} EPS Flooring and Carpentry, LLC · Installer #9413019649 · Licensed Florida LLC
      </div>
    </footer>
  );
}