export default function Footer() {
    return (
        <footer className="border-t border-[#2e2e2e] px-20 bg-[#08090a]">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <div style={{ marginLeft: "72.5px", paddingLeft: "32px", display: "flex", alignItems: "center" }}>
                      <img
                          src="https://www.centralaxis.com/logo_white_icon_only.png"
                          alt="Logo"
                          width={36}
                          height={36}
                          loading="lazy"
                          style={{ color: "transparent" }}
                      />
                    </div>
                    <p className="text-center text-sm leading-loose md:text-left">
                        Copyright © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};
