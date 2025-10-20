import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Users, Zap } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "10+ Full-Stack Projects",
    description: "Successfully delivered diverse web and blockchain applications",
    year: "2024",
  },
  {
    icon: Award,
    title: "Blockchain Certification",
    description: "Completed advanced smart contract development course",
    year: "2024",
  },
  {
    icon: Users,
    title: "Open Source Contributor",
    description: "Active contributor to multiple open-source projects",
    year: "2023-Present",
  },
  {
    icon: Zap,
    title: "Freelance Developer",
    description: "Providing full-stack solutions for startups and businesses",
    year: "2023-Present",
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Achievements & <span className="text-gradient">Certifications</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Milestones and accomplishments in my development journey
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="bg-card rounded-xl p-6 border border-border card-hover">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">{achievement.title}</h3>
                            <span className="text-sm font-mono text-primary">{achievement.year}</span>
                          </div>
                          <p className="text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-background" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
