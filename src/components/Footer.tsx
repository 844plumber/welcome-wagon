const Footer = () => {
  return (
    <footer className="section-dark border-t border-border/5 py-14">
      <div className="container mx-auto px-6 text-center">
        <p className="text-section-dark-foreground/40 text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} NeverMissAPlumbingCall.com — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
