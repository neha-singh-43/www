"use client";

import React, { useState } from "react";
import {
  Folder,
  FolderOpen,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  const [openYears, setOpenYears] = useState<{ [key: string]: boolean }>({
    "2026": true,
    "2022-2026": false,
    "2020-2022": false,
    "2019-2020": false,
    "2016-2019": false,
  });
  const [copied, setCopied] = useState(false);

  const toggleYear = (key: string) => {
    setOpenYears((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("nehasinghrajput1993@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const workData = [
    {
      key: "2026",
      label: "2026 — Present",
      color: "text-blue-500",
      items: [
        {
          role: "Staff Software Engineer",
          company: "Diebold Nixdorf",
          period: "Feb 2026 – Present",
          tag: "Full-time",
          desc: "Leading fullstack engineering of digital self-service banking platforms & core transaction systems with high availability and security.",
          tech: ["ReactJs", "Angular", "JavaScript", "NodeJs", ".NET Core", "Azure", "Microservices"],
        },
      ],
    },
    {
      key: "2022-2026",
      label: "2022 — 2026",
      color: "text-emerald-500",
      items: [
        {
          role: "Senior Software Engineer",
          company: "Deloitte",
          period: "Apr 2022 – Feb 2026 · 3 yrs 11 mos",
          tag: "Consulting",
          desc: "Architected and delivered large-scale enterprise solutions across insurance, manufacturing, and financial services client verticals.",
          tech: ["JavaScript", "ASP.NET MVC", "ReactJs", "Web API", "Azure", "SQL Server"],
        },
      ],
    },
    {
      key: "2020-2022",
      label: "2020 — 2022",
      color: "text-amber-500",
      items: [
        {
          role: "Full Stack Engineer",
          company: "Capgemini",
          period: "Oct 2020 – Apr 2022 · 1 yr 7 mos · Pune",
          tag: "Enterprise",
          desc: "Engineered scalable web applications and microservices integrations for major enterprise accounts.",
          tech: ["JavaScript", "REST APIs", "Angular", "NodeJs", "ASP.NET Core"],
        },
        {
          role: "Full-stack Developer (Client: John Deere)",
          company: "John Deere",
          period: "Oct 2020 – Apr 2022 · 1 yr 7 mos · Hyderabad",
          tag: "AgriTech & IoT",
          desc: "Built high-performance fullstack portals, telemetry streaming systems, and digital manufacturing workflows.",
          tech: ["JavaScript", "REST APIs", "React", "Java / Spring", "PostgreSQL", "Cloud"],
        },
      ],
    },
    {
      key: "2019-2020",
      label: "2019 — 2020",
      color: "text-purple-500",
      items: [
        {
          role: "Software Engineer",
          company: "Cognizant",
          period: "Oct 2019 – Oct 2020 · 1 yr 1 mo · Kolkata",
          tag: "Full-time",
          desc: "Developed application modules, authored technical design documents, and collaborated on cross-functional enterprise deliveries.",
          tech: ["Design Documents", "JavaScript", "ASP.NET", "SQL", "Web Services"],
        },
      ],
    },
    {
      key: "2016-2019",
      label: "2016 — 2019",
      color: "text-slate-500",
      items: [
        {
          role: "Senior Software Engineer",
          company: "Mindteck",
          period: "Jul 2016 – Oct 2019 · 3 yrs 4 mos · Kolkata",
          tag: "Full-time",
          desc: "Designed and implemented robust software solutions, authored architecture specifications, and engineered production fullstack features.",
          tech: ["Fullstack", "ASP.NET", "JavaScript", "C#", "SQL Server", "WPF"],
        },
      ],
    },
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      badge: "AZ-204",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      badge: "AZ-900",
    },
    {
      name: "Microsoft Certified: Dynamics 365 Core",
      issuer: "Microsoft",
      badge: "MB-200",
    },
  ];

  const polaroids = [
    {
      title: "Workspace",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=380&fit=crop&q=80",
      rotate: "-rotate-6",
    },
    {
      title: "Engineering",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=380&fit=crop&q=80",
      rotate: "-rotate-2",
    },
    {
      title: "Architecture",
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=380&fit=crop&q=80",
      rotate: "rotate-1",
    },
    {
      title: "Travel & Life",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=380&fit=crop&q=80",
      rotate: "rotate-4",
    },
    {
      title: "Night Sky",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=380&fit=crop&q=80",
      rotate: "-rotate-3",
    },
    {
      title: "Nature",
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=380&fit=crop&q=80",
      rotate: "rotate-6",
    },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1a1a1a] flex flex-col justify-between selection:bg-slate-200">
      {/* Centered Minimal Container */}
      <main className="max-w-[620px] w-full mx-auto px-6 pt-16 sm:pt-24 pb-16 space-y-12">
        {/* Name Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-sm font-semibold tracking-tight text-slate-900">
              Neha Singh
            </h1>
            <span className="text-[11px] font-mono text-slate-400">
              Kolkata, West Bengal, India • She/Her
            </span>
          </div>

          <p className="text-[13px] leading-relaxed text-slate-600">
            Full stack developer crafting digital products (ReactJs, Angular, JavaScript, NodeJs, .NET Core). Over 8 years of engineering experience creating impact across insurance, manufacturing, and consulting domains. Certified by Microsoft. Currently{" "}
            <span className="text-slate-900 font-medium">Staff Software Engineer</span> at{" "}
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-800 font-medium text-[12px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Diebold Nixdorf
            </span>
            . Previously at{" "}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-800 font-medium text-[12px]">
              Deloitte
            </span>
            ,{" "}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-800 font-medium text-[12px]">
              Capgemini
            </span>{" "}
            (Client: John Deere),{" "}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-800 font-medium text-[12px]">
              Cognizant
            </span>
            , and{" "}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-800 font-medium text-[12px]">
              Mindteck
            </span>
            . Alum of <span className="text-slate-800 font-medium">Academy of Technology</span>. Creator of{" "}
            <a
              href="#cliner"
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-indigo-200 bg-indigo-50/70 text-indigo-900 font-medium text-[12px] hover:bg-indigo-100 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-indigo-600" />
              cliner
            </a>
            .
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-4 gap-4 pt-2 border-t border-slate-100">
          <div>
            <div className="text-base font-semibold text-slate-900">8+</div>
            <div className="text-[11px] text-slate-400">years exp (since 2016)</div>
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900">3x</div>
            <div className="text-[11px] text-slate-400">microsoft certified</div>
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900">5</div>
            <div className="text-[11px] text-slate-400">top tech leaders</div>
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900">Fullstack</div>
            <div className="text-[11px] text-slate-400">react • .net • azure</div>
          </div>
        </div>

        {/* Featured Product Section: Cliner */}
        <div className="space-y-4 pt-4">
          <div className="text-[12px] text-slate-400 uppercase tracking-wider font-medium">
            Featured Product
          </div>

          <div
            id="cliner"
            className="p-4 rounded-xl border border-slate-200 bg-gradient-to-b from-indigo-50/20 to-white hover:border-indigo-300 transition-all group shadow-xs scroll-mt-12"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5 group-hover:text-indigo-600 transition-colors">
                    Cliner
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Native macOS App Uninstaller & Residual Cleaner
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200 font-medium shrink-0">
                Rust + GPUI
              </span>
            </div>

            <p className="text-[12px] text-slate-600 leading-relaxed font-sans mb-3">
              A blazing-fast, privacy-first cleaner built with <strong className="font-semibold text-slate-800">Rust & GPUI</strong> (Metal GPU acceleration). Reclaims gigabytes of disk space left behind by macOS apps—including sandboxed containers, deep caches, preferences, WebKit storage, and orphaned launch daemons with sub-150ms parallel scanning and smart FSEvents Trash watching.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {["Rust", "GPUI", "Metal 120 FPS", "macOS FSEvents", "Touch ID", "Swift Bridge"].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-mono text-indigo-600 font-medium">
                &lt;25 MB RSS • 100% Safe
              </span>
            </div>
          </div>
        </div>

        {/* Work / Filetree Section */}
        <div className="space-y-4 pt-4">
          <div className="text-[12px] text-slate-400 uppercase tracking-wider font-medium">
            Work Experience (2016 — Present)
          </div>

          <div className="space-y-3 font-mono text-[13px]">
            {workData.map((section) => (
              <div key={section.key} className="space-y-2">
                <button
                  onClick={() => toggleYear(section.key)}
                  className="flex items-center gap-2 text-slate-700 hover:text-black transition-colors cursor-pointer group"
                >
                  <span className="text-slate-300">├──</span>
                  {openYears[section.key] ? (
                    <FolderOpen className={`w-3.5 h-3.5 ${section.color}`} />
                  ) : (
                    <Folder className={`w-3.5 h-3.5 ${section.color}`} />
                  )}
                  <span className="font-medium group-hover:underline underline-offset-4">
                    {section.label}
                  </span>
                </button>

                {openYears[section.key] && (
                  <div className="pl-7 space-y-4 border-l border-dashed border-slate-200 ml-2.5 my-1.5 py-1">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="space-y-1.5 pl-3">
                        <div className="flex items-start justify-between gap-2 text-xs">
                          <div>
                            <div className="font-semibold text-slate-900">
                              {item.role}
                            </div>
                            <div className="text-[11px] text-slate-500 font-sans">
                              {item.company} • {item.period}
                            </div>
                          </div>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-[12px] text-slate-600 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-4 pt-4">
          <div className="text-[12px] text-slate-400 uppercase tracking-wider font-medium">
            Certifications
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[12px]">
            {certifications.map((c, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200 font-semibold inline-block">
                    {c.badge}
                  </span>
                  <div className="font-medium text-slate-900 text-[11px] leading-tight pt-1">
                    {c.name}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 mt-2">
                  Issued by {c.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className="space-y-3 pt-4">
          <div className="text-[12px] text-slate-400 uppercase tracking-wider font-medium">
            Connect
          </div>

          <p className="text-[13px] text-slate-600 leading-relaxed">
            I&apos;m available for fullstack engineering, system design, and product builds. Get in touch by{" "}
            <button
              onClick={copyEmail}
              className="text-slate-900 underline underline-offset-4 hover:text-blue-600 transition-colors cursor-pointer font-medium"
            >
              {copied ? "copied email!" : "email"}
            </button>
            , or find me on{" "}
            <a
              href="https://in.linkedin.com/in/neha-singh-670a99178"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </main>

      {/* Off Screen / Polaroids Fan at bottom */}
      <section className="w-full overflow-hidden pt-8 pb-4">
        <div className="max-w-[620px] mx-auto px-6 mb-3">
          <span className="text-[12px] text-slate-400 uppercase tracking-wider font-medium">
            Off screen
          </span>
        </div>

        <div className="flex items-end justify-center -space-x-4 sm:-space-x-6 py-6 px-4">
          {polaroids.map((p, idx) => (
            <div
              key={idx}
              className={`polaroid-card bg-white p-2 sm:p-2.5 pb-5 sm:pb-6 rounded shadow-md border border-slate-200/80 cursor-pointer origin-bottom ${p.rotate}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.title}
                className="w-24 h-32 sm:w-32 sm:h-44 object-cover rounded-xs filter contrast-[1.05] brightness-[0.98]"
              />
              <div className="text-[10px] text-center text-slate-400 mt-2 font-mono tracking-tight">
                {p.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
