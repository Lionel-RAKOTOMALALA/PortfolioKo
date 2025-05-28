"use client";

import { useState } from "react";
import { motion, useMotionTemplate } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  GraduationCap,
  Building,
  MapPin
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  skills: string[];
  type: "work" | "education";
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isEven: boolean;
}

export default function TimelineItem({ experience, index, isEven }: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const icon = experience.type === "work" ? <Briefcase className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? -50 : 50,
      y: 20,
      rotate: isEven ? -5 : 5
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1 
      }
    }
  };

  const circleVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.1 
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: (index * 0.1) + 0.2
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: (index * 0.1) + (i * 0.05),
        duration: 0.3
      }
    })
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Timeline center circle */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-background rounded-full border-4 border-primary flex items-center justify-center shadow-lg cursor-pointer"
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        variants={circleVariants}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div variants={iconVariants}>
          {icon}
        </motion.div>
      </motion.div>
      
      {/* Connecting line animation */}
      <motion.div
        className={`absolute left-1/2 transform -translate-x-1/2 w-px bg-primary`}
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      />
      
      {/* Card - alternating left and right */}
      <div className={`flex w-full ${isEven ? 'justify-end md:pl-16' : 'justify-start md:pr-16'} relative md:w-1/2`}>
        <motion.div
          className="w-full md:w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            rotate: isEven ? 1 : -1,
            transition: { duration: 0.2 }
          }}
        >
          <Card className="w-full overflow-hidden">
            <CardContent className="pt-6 pb-6">
              <motion.div 
                className="flex items-center text-primary mb-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: (index * 0.1) + 0.2 }}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                </motion.div>
                <span className="text-sm">{experience.date}</span>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold mb-1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (index * 0.1) + 0.3 }}
              >
                {experience.title}
              </motion.h3>
              
              <motion.div 
                className="flex items-center text-muted-foreground mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: (index * 0.1) + 0.4 }}
              >
                <Building className="h-4 w-4 mr-2" />
                <span>{experience.company}</span>
                <span className="mx-2">•</span>
                <MapPin className="h-4 w-4 mr-1" />
                <span>{experience.location}</span>
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (index * 0.1) + 0.5 }}
              >
                {experience.description}
              </motion.p>
              
              {experience.skills.length > 0 && (
                <motion.div 
                  className="flex flex-wrap gap-2 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (index * 0.1) + 0.6 }}
                >
                  {experience.skills.map((skill, i) => (
                    <motion.span 
                      key={skill} 
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full cursor-pointer"
                      custom={i}
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "var(--primary)",
                        color: "var(--primary-foreground)"
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}