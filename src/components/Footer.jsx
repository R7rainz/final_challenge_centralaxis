export default function Footer() {
    return (
      <footer className="border-t border-[#2e2e2e] bg-[#08090a] py-8">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <img
            src="https://www.centralaxis.com/logo_white_icon_only.png"
            alt="Logo"
            width={36}
            height={36}
            loading="lazy"
            className="mb-3"
          />
          <p className="text-center text-sm text-white/80">Copyright © 2025</p>
        </div>
      </footer>
    )
  }
  