
import React from "react";
import ProfileSection from "@/components/ProfileSection";
import ContentSection from "@/components/ContentSection";
import { profileData, talks, writing, audio } from "@/data/portfolioData";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

const Index = () => {
  const professionalActivities = [
    "Fellow at British Computer Society (BCS)",
    "Ambassador at Cloud Native Computing Foundation",
    "Program Committee Member, KubeCon & CloudNativeCon London"
    "Program Committee Member, Istio Day Europe"
    "Program Committee Member, KubeCon & CloudNativeCon Japan",
    "Program Committee Member, KubeCon & CloudNativeCon China",
    "Program Committee Member, PlatforMa IL"
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <ProfileSection data={profileData} />
        
        <div className="border-t border-border">
          <ContentSection 
            title="Talks" 
            type="talk" 
            items={talks} 
            id="talks"
          />
        </div>
        
        <div className="border-t border-border">
          <ContentSection 
            title="Audio" 
            type="audio" 
            items={audio} 
            id="audio"
          />
        </div>

        <div className="border-t border-border">
          <ContentSection 
            title="Writing" 
            type="blog" 
            items={writing} 
            id="blog"
          />
        </div>
        
        <div className="border-t border-border">
          <section id="professional-activities" className="py-12 px-4 md:px-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary"><Briefcase className="h-5 w-5" /></span>
              <h2 className="text-2xl font-semibold tracking-tight">Professional Activities</h2>
            </div>
            <div className="space-y-1 divide-y divide-border">
              {professionalActivities.map((activity, index) => (
                <div 
                  key={index} 
                  className="block py-4 px-2 -mx-2 rounded-md hover:bg-secondary transition-colors"
                >
                  <p className="text-base">{activity}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <footer className="py-12 px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lior Lieberman. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
