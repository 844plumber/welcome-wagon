import { Play, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const YOUTUBE_URL = "https://youtube.com/shorts/8Mg9n18gYMk";
const THUMBNAIL_URL = "https://img.youtube.com/vi/8Mg9n18gYMk/maxresdefault.jpg";

const VideoIntro = () => {
  return (
    <section className="py-24 md:py-36 bg-background noise-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">See It In Action</p>
            <h2 className="text-4xl sm:text-[44px] font-extrabold text-foreground tracking-[-0.02em]">
              Watch How It Works
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-video rounded-[20px] overflow-hidden border border-border/60 bg-secondary group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]"
          >
            <img
              src={THUMBNAIL_URL}
              alt="844-PLUMBER Intro Video"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
              <div className="flex items-center gap-2 text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-3.5 h-3.5" />
                Watch on YouTube
              </div>
            </div>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoIntro;
