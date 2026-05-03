import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center p-8"
      style={{
        fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
      }}
    >
      {/* Resume Card */}
      <div className="bg-white rounded-[20px] shadow-[4px_4px_25px_-7px_rgba(0,0,0,0.25)] w-full max-w-[800px] overflow-hidden">
        {/* ── HEADER ── */}
        <div className="px-6 pt-5 pb-3">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-[42px] font-bold leading-[150%] tracking-[-0.011em]">
                <span className="text-[#1D76E2]">First</span>{" "}
                <span className="text-[#4082E2] font-medium">Name</span>
              </h1>
              <p className="text-[16.8px] font-normal text-black tracking-[-0.011em] leading-[150%] -mt-1">
                Your Proffesion/Goal Proffession
              </p>
            </div>
            <div className="flex items-center gap-5 pb-1 flex-wrap">
              <ContactLink icon="/icons/phone.png" label="91 123456781" />
              <ContactLink icon="/icons/github.png" label="Username" />
              <ContactLink icon="/icons/gmail.png" label="yourmail@mail.com" />
              <ContactLink icon="/icons/linkedin.png" label="Username" />
            </div>
          </div>
        </div>

        {/* ── HORIZONTAL DIVIDER ── */}
        <div className="mx-6 border-t border-[#5B5B5B]/40" />

        {/* ── BODY ── */}
        <div className="flex">
          {/* ══ LEFT SIDE ══ */}
          <div className="flex-1 px-6 py-4 space-y-5 min-w-0">
            {/* Experience */}
            <section>
              <SectionTitle>Experiance</SectionTitle>
              <ProjectItem
                title="IPL Analysis and Visualization"
                date="September 2022"
                bullets={[
                  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
                  "years old. Richard McClintock, a Latin professor at Hampden-Sydney consectetur, from a Lorem Ipsum passage, and going through the cite",
                ]}
              />
            </section>

            {/* Projects */}
            <section>
              <SectionTitle>Projects</SectionTitle>
              <div className="space-y-4">
                <ProjectItem
                  title="IPL Analysis and Visualization"
                  date="September 2022"
                  featured
                  bullets={[
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
                    "years old. Richard McClintock, a Latin professor at Hampden-Sydney consectetur, from a Lorem Ipsum passage, and going through the cite",
                    'classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et',
                  ]}
                />
                <ProjectItem
                  title="IPL Analysis and Visualization"
                  date="September 2022"
                  bullets={[
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
                    "years old. Richard McClintock, a Latin professor at Hampden-Sydney consectetur, from a Lorem Ipsum passage, and going through the cite",
                  ]}
                />
                <ProjectItem
                  title="IPL Analysis and Visualization"
                  date="September 2022"
                  bullets={[
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
                    "years old. Richard McClintock, a Latin professor at Hampden-Sydney consectetur, from a Lorem Ipsum passage, and going through the cite",
                    'classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et',
                  ]}
                />
              </div>
            </section>

            {/* Courses */}
            <section>
              <SectionTitle>Courses</SectionTitle>
              <ul className="space-y-0.5">
                {[
                  "IPL Analysis and Visualization",
                  "IPL Analysis and Visualization",
                  "IPL Analysis and Visualization",
                  "IPL Analysis and Visualization",
                  "IPL Analysis and Visualization",
                ].map((c, i) => (
                  <li
                    key={i}
                    className="text-[12.75px] font-semibold text-black tracking-[-0.011em] leading-[150%]"
                  >
                    - {c}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* ── VERTICAL DIVIDER ── */}
          <div className="w-px bg-[#5B5B5B]/40 self-stretch" />

          {/* ══ RIGHT SIDE ══ */}
          <div className="w-[210px] shrink-0 px-4 py-4 space-y-5">
            {/* Skills */}
            <section>
              <SectionTitle>Skills</SectionTitle>
              <div className="mb-3">
                <SubTitle>Programming</SubTitle>
                <div className="mt-1 space-y-1.5">
                  <SkillGroup
                    lang="Python"
                    items={["Pandas", "Numpy", "Matpotlip", "Seaborn"]}
                  />
                  <SkillGroup
                    lang="R Programming"
                    items={["ggplot2", "stringr"]}
                  />
                  <SkillGroup
                    lang="SQL"
                    items={["MySQL", "IBM Db2 Database"]}
                  />
                </div>
              </div>
              <div className="mb-3">
                <SubTitle>Tools/Platforms</SubTitle>
                <ul className="mt-1 space-y-0.5">
                  {[
                    "Power BI",
                    "Tableau",
                    "Advanced Excel",
                    "Jupyter Notebook",
                    "Github",
                    "Azure",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="text-[11.6px] font-bold text-[#727272] tracking-[-0.011em] leading-[150%]"
                    >
                      &nbsp;&nbsp;- {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SubTitle>Languages</SubTitle>
                <ul className="mt-1 space-y-0.5">
                  {["English", "Hindi", "Marathi"].map((l, i) => (
                    <li
                      key={i}
                      className="text-[11.6px] font-bold text-[#727272] tracking-[-0.011em] leading-[138%]"
                    >
                      &nbsp;&nbsp;- {l}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle>Education</SectionTitle>
              <div className="mb-3">
                <SubTitle>BSc Statistics</SubTitle>
                <p className="text-[9.3px] font-bold text-[#606060] tracking-[-0.011em] leading-[150%]">
                  June 2021 |{" "}
                  <span className="font-normal">Mumbai University</span>
                </p>
                <p className="text-[9.3px] font-bold text-[#727272] tracking-[-0.011em] leading-[150%]">
                  FY C.G.P.A - 8.5/10
                </p>
                <p className="text-[9.3px] font-bold text-[#727272] tracking-[-0.011em] leading-[130%]">
                  Member of Indoor Games Department
                </p>
              </div>
              <div>
                <SubTitle>High School College</SubTitle>
                <p className="text-[9.3px] font-bold text-[#606060] tracking-[-0.011em] leading-[150%]">
                  May 2019 - 21
                </p>
                <p className="text-[9.3px] font-bold text-[#727272] tracking-[-0.011em] leading-[150%]">
                  Percentage - 88.66%
                </p>
              </div>
            </section>

            {/* Soft Skills */}
            <section>
              <SectionTitle>Soft Skills</SectionTitle>
              <ul className="space-y-0.5">
                {[
                  "Time Management",
                  "Team Work",
                  "Logical Thinking",
                  "Presentation",
                ].map((s, i) => (
                  <li
                    key={i}
                    className="text-[11.6px] font-bold text-[#727272] tracking-[-0.011em] leading-[150%]"
                  >
                    &nbsp;&nbsp;- {s}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Helper Components ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[16.8px] font-bold text-[#3799EC] tracking-[-0.011em] leading-[150%] mb-2">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[12.75px] font-semibold text-black tracking-[-0.011em] leading-[150%]">
      {children}
    </h3>
  );
}

function ContactLink({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Image
        src={icon}
        alt={label}
        width={18}
        height={18}
        className="object-cover rounded-sm"
      />
      <span className="text-[12.75px] font-medium text-black tracking-[-0.011em]">
        {label}
      </span>
    </div>
  );
}

function ProjectItem({
  title,
  date,
  bullets,
  featured = false,
}: {
  title: string;
  date: string;
  bullets: string[];
  featured?: boolean;
}) {
  return (
    <div>
      <h3
        className={`text-[12.75px] tracking-[-0.011em] leading-[150%] text-black ${
          featured ? "font-semibold" : "font-semibold"
        }`}
      >
        {title}
      </h3>
      <p className="text-[8.7px] font-bold text-[#727272] tracking-[-0.011em] leading-[150%]">
        {date}
      </p>
      <ul className="mt-1 ml-3 space-y-0.5">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-[9.85px] font-bold text-[#606060] tracking-[-0.011em] leading-[150%]"
          >
            - {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ lang, items }: { lang: string; items: string[] }) {
  return (
    <div>
      <span className="text-[11.6px] font-bold text-[#606060] tracking-[-0.011em] leading-[150%]">
        {lang}
      </span>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[11.6px] font-bold text-[#727272] tracking-[-0.011em] leading-[150%]"
          >
            &nbsp;&nbsp;- {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
