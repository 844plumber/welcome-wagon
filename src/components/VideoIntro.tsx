import { Play } from "lucide-react";

const VideoIntro = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">See It In Action</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Watch How It <span className="text-primary">Works</span>
          </h2>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-border bg-secondary flex items-center justify-center group cursor-pointer hover:border-primary/40 transition-colors duration-300">
          {/* Placeholder — replace src with your YouTube embed */}
          {/* <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="844-PLUMBER Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}

          {/* Placeholder UI */}
          <div className="flex flex-col items-center gap-4 text-secondary-foreground/60">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Play className="w-10 h-10 text-primary ml-1" />
            </div>
            <p className="font-heading font-semibold text-lg text-secondary-foreground/80">
              Video Coming Soon
            </p>
            <p className="text-sm text-secondary-foreground/50 max-w-md">
              We're putting together a quick intro showing exactly how 844-PLUMBER and the AI Receptionist work for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
