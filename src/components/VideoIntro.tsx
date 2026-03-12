import { Play, ExternalLink } from "lucide-react";

const YOUTUBE_URL = "https://youtube.com/shorts/8Mg9n18gYMk";
const THUMBNAIL_URL = "https://img.youtube.com/vi/8Mg9n18gYMk/maxresdefault.jpg";

const VideoIntro = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">See It In Action</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Watch How It <span className="text-primary">Works</span>
          </h2>
        </div>

        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video rounded-2xl overflow-hidden border border-border/50 bg-secondary group cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500"
        >
          {/* Thumbnail */}
          <img
            src={THUMBNAIL_URL}
            alt="844-PLUMBER Intro Video"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/20 group-hover:via-secondary/30 transition-all duration-500" />

          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.5)' }}>
              <Play className="w-9 h-9 text-primary-foreground ml-1" fill="currentColor" />
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-4 h-4" />
              Watch on YouTube
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default VideoIntro;
