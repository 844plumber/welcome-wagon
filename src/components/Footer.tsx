const Footer = () => {
  return (
    <footer className="section-dark border-t border-border/10 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-section-dark-foreground/50 text-sm">
          © {new Date().getFullYear()} NeverMissAPlumbingCall.com — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
