import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Blocks } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Globe,
      title: "Web2 Expertise",
      description: "Full-stack development with React, Django, and Node.js",
    },
    {
      icon: Blocks,
      title: "Web3 Pioneer",
      description: "Building decentralized applications with Solidity and smart contracts",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30">
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
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar/Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <Code2 className="w-24 h-24 text-primary" />
                    </div>
                    <p className="text-xl font-bold text-gradient">Brayan Mlawa</p>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-foreground leading-relaxed">
                  Hi! I'm <span className="text-primary font-semibold">Brayan Mlawa</span>, a passionate{" "}
                  <span className="text-secondary font-semibold">Full-Stack Web & Web3 Developer</span> from
                  Tanzania. I specialize in building fast, scalable, and secure web and blockchain applications
                  that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in tech started with a curiosity about how the web works, and has evolved into a
                  career bridging traditional web development with cutting-edge blockchain technology. I believe
                  in continuous learning, clean code, and creating solutions that make a difference.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it's crafting beautiful user interfaces, architecting robust backend systems, or
                  deploying smart contracts, I bring creativity and engineering excellence to every project.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
