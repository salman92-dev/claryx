import Marquee from "react-fast-marquee";
import Image from "next/image";

// Replace these with your real logo paths or remote URLs
const LOGOS_ROW_1 = [
  { src: "/logo-1.svg", alt: "Google" },
  { src: "/logo-2.svg", alt: "Amazon" },
  { src: "/logo-3.svg", alt: "Microsoft" },
  { src: "/logo-4.svg", alt: "Meta" },
  { src: "/logo-5.svg", alt: "Netflix" },
];


function LogoStrip({ items }) {
  return (
    <div className="flex items-center gap-20 ml-20">
      {items.map((logo, idx) => (
        <div
          key={`${logo.alt}-${idx}`}
          className="shrink-0 hover:opacity-100 transition-opacity duration-200"
          aria-label={`${logo.alt} logo`}
        >
          {/* Set width/height to match your real asset aspect ratio */}
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={48}
            className="h-8 w-auto md:h-10"
            priority
          />
        </div>
      ))}
    </div>
  );
}

export default function LogosMarquee() {
  return (
    <section className="w-full py-10 md:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="inter-r text-center text-2xl md:text-3xl tracking-[-1.97px] text-[#060B13]">
          Trusted over 2k+ company
        </h2>

        {/* Row 1 */}
        <div className="relative mt-8 md:mt-10">
          {/* subtle edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          <Marquee
            autoFill
            pauseOnHover
            speed={40}
            gradient={true}
            className="[--marquee-gap:theme(space.10)]"
          >
            <LogoStrip items={LOGOS_ROW_1} />
          </Marquee>
        </div>
      </div>
    </section>
  );
}
