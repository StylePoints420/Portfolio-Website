import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { BoxReveal } from "@/components/ui/box-reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BorderBeam } from "@/components/ui/border-beam";
import { Building, Calendar, Code2, LinkIcon } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function ExperienceSection() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("fuji");

  return (
    <div className="max-w-full md:max-w-6xl mx-auto px-4 md:px-8 lg:px-10 py-20">
      <h2 className="text-5xl md:text-7xl text-primary max-w-4xl font-headers font-bold">
        <LinkIcon className="inline w-8 h-8 md:w-13 md:h-13 mr-3" />
        Experience
      </h2>
      <article className="flex flex-col gap-5  items-center mt-10">
        <BoxReveal boxColor={"oklch(77.7% 0.152 181.912)"} duration={0.5}>
          <h3 className="text-2xl md:text-4xl font-primary font-medium">
            Year{" "}
            <NumberTicker
              value={2025}
              startValue={2003}
              className="whitespace-pre-wrap text-2xl md:text-4xl font-medium tracking-tighter text-primary"
            />
          </h3>
        </BoxReveal>
        <Tabs
          defaultValue={activeTab}
          orientation="vertical"
          className="w-full flex-col md:flex-row"
        >
          <TabsList className="flex-row md:flex-col md:h-96 w-60 md:w-96">
            <TabsTrigger
              value="fuji"
              className="w-full md:text-2xl relative overflow-hidden dark:data-[state=active]:bg-gray-500"
              onClick={() => setActiveTab("fuji")}
            >
              <BoxReveal boxColor={"oklch(77.7% 0.152 181.912)"} duration={0.5}>
                <h3>{isMobile ? "Feb - May" : "February - May"}</h3>
              </BoxReveal>
              {activeTab === "fuji" && (
                <>
                  <BorderBeam
                    duration={6}
                    size={isMobile ? 100 : 400}
                    className="from-transparent via-teal-500 to-transparent"
                  />
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={isMobile ? 100 : 400}
                    borderWidth={2}
                    className="from-transparent via-purple-500 to-transparent"
                  />
                </>
              )}
            </TabsTrigger>

            <TabsTrigger
              value="tab-2"
              className="w-full md:text-2xl relative overflow-hidden dark:data-[state=active]:bg-gray-500"
              onClick={() => setActiveTab("tab-2")}
              disabled
            >
              {activeTab === "tab-2" && (
                <>
                  <BorderBeam
                    duration={6}
                    size={isMobile ? 100 : 400}
                    className="from-transparent via-teal-500 to-transparent"
                  />
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={isMobile ? 100 : 400}
                    borderWidth={2}
                    className="from-transparent via-purple-500 to-transparent"
                  />
                </>
              )}
              Pending...
            </TabsTrigger>
          </TabsList>
          <div className="grow rounded-md border relative overflow-hidden">
            <div className="bg-teal-500 dark:bg-teal-600 h-20 w-20 rounded-full absolute -top-5 -right-5">
              <span className="sr-only">top right sphere</span>
            </div>
            <div className="bg-teal-500 dark:bg-teal-600 h-20 w-20 rounded-full absolute -left-5 -bottom-5">
              <span className="sr-only">bottom left sphere</span>
            </div>
            <TabsContent
              value="fuji"
              className="h-[450px] lg:h-96 bg-secondary"
            >
              <section className="px-4 py-4 space-y-2">
                <BoxReveal
                  boxColor={"oklch(77.7% 0.152 181.912)"}
                  duration={0.5}
                >
                  <h4 className="text-xl font-bold inline-flex gap-1 font-primary items-center">
                    <Building /> Fuji Trading Co., Ltd.
                  </h4>
                </BoxReveal>
                <BoxReveal
                  boxColor={"oklch(77.7% 0.152 181.912)"}
                  duration={0.5}
                >
                  <h5 className="text-lg font-medium inline-flex gap-1 items-center font-headers">
                    <Code2 /> Web Developer Intern
                  </h5>
                </BoxReveal>

                <ul className="list-disc break-words max-w-2xl px-4 space-y-2 pt-5 max-h-60 overflow-y-auto">
                  <li>
                    <BoxReveal
                      boxColor={"oklch(77.7% 0.152 181.912)"}
                      duration={0.5}
                    >
                      <p>
                        Developed a Human Resource Management internal website
                        that integrates with biometrics API to import attendance
                        data on a daily basis.
                      </p>
                    </BoxReveal>
                  </li>
                  <li>
                    <BoxReveal
                      boxColor={"oklch(77.7% 0.152 181.912)"}
                      duration={0.5}
                    >
                      <p>
                        Implemented an automatic SSS, PAG-IBIG, Philhealth
                        deduction to employee’s payroll depending on the cutoff
                        period and scheduled leaves are reflected to it as well
                        when the request is approved.
                      </p>
                    </BoxReveal>
                  </li>
                  <li className="z-20">
                    <BoxReveal
                      boxColor={"oklch(77.7% 0.152 181.912)"}
                      duration={0.5}
                    >
                      <p>
                        Built features such as action logs, Role Based Access
                        Control (RBAC), payroll and attendance reports,
                        dashboard employee data summary through multiple charts
                        and real-time updates on logs.
                      </p>
                    </BoxReveal>
                  </li>
                </ul>
              </section>
            </TabsContent>
            <TabsContent
              value="tab-2"
              className="h-[450px] lg:h-96 bg-secondary"
            >
              <h2 className="text-muted-foreground px-4 py-3 text-lg break-words">
                Nothing to see here.
                <br />
                Pending content.
              </h2>
            </TabsContent>
          </div>
        </Tabs>
      </article>
    </div>
  );
}
