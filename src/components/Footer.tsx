const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6 text-center">
        <p className="text-background/50 text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} NeverMissAPlumbingCall.com — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
