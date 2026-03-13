const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-background/60 text-sm">
          © {new Date().getFullYear()} NeverMissAPlumbingCall.com — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
