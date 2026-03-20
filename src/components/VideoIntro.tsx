import { Play, ExternalLink } from "lucide-react";

const YOUTUBE_URL = "https://youtube.com/shorts/dV7VjowY-iw";
const THUMBNAIL_URL = "https://img.youtube.com/vi/dV7VjowY-iw/maxresdefault.jpg";

const VideoIntro = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">See It In Action</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Watch How It Works
          </h2>
        </div>

        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video rounded-xl overflow-hidden border border-border bg-secondary group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <img
            src={THUMBNAIL_URL}
            alt="844-PLUMBER Intro Video"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors duration-300" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Play className="w-7 h-7 text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
            <div className="flex items-center gap-1.5 text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ExternalLink className="w-3.5 h-3.5" />
              Watch on YouTube
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default VideoIntro;
