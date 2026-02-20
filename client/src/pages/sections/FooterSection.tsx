const footerColumns = [
  {
    title: "تواصل معنا",
    links: ["خريطة الموقع والاتجاهات", "الوظائف المتاحة"],
  },
  {
    title: "الخدمات والمعلومات",
    links: ["شروط الالتحاق", "الأسئلة الشائعة", "المكتبة", "وحدة ضمان الجودة"],
  },
  {
    title: "معاهد الوادي العليا",
    links: [
      "من نحن",
      "كلمة رئيس مجلس الإدارة",
      "الرؤية والرسالة",
      "الأقسام الأكاديمية",
    ],
  },
];

const socialIcons = [
  {
    src: "/figmaAssets/ico.svg",
    alt: "Ico",
    className: "absolute top-0.5 left-0.5 w-[75px] h-[75px]",
    wrapper: true,
  },
  {
    src: "/figmaAssets/duseat-icons-24pt-instagram.svg",
    alt: "Duseat icons",
    className: "w-20 h-20",
    wrapper: false,
  },
  {
    src: "/figmaAssets/duseat-icons-24pt-location.svg",
    alt: "Duseat icons",
    className: "w-20 h-20",
    wrapper: false,
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center gap-12 px-[53px] py-8 border-t border-black">
      <nav className="flex items-start justify-center gap-8 w-full">
        {footerColumns.map((column, index) => (
          <div key={index} className="flex flex-col items-center gap-3 flex-1">
            <h3 className="font-bold text-black text-[32px] text-center leading-[48px] [font-family:'Almarai',Helvetica] tracking-[0] [direction:rtl]">
              {column.title}
            </h3>
            <div className="flex flex-col items-center gap-3.5 w-full">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="font-normal text-black text-2xl text-center leading-9 [font-family:'Almarai',Helvetica] tracking-[0] [direction:rtl] hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="flex items-end justify-center gap-[173px] w-full">
        <div className="flex items-center gap-[30px] flex-1">
          {socialIcons.map((icon, index) =>
            icon.wrapper ? (
              <div key={index} className="relative w-20 h-20">
                <img className={icon.className} alt={icon.alt} src={icon.src} />
              </div>
            ) : (
              <img
                key={index}
                className={icon.className}
                alt={icon.alt}
                src={icon.src}
              />
            ),
          )}
        </div>

        <div className="flex flex-col items-center flex-1">
          <img
            className="w-[81.49px] h-[77px]"
            alt="Logo"
            src="/figmaAssets/logo-2.png"
          />
          <img
            className="w-full h-[126.1px]"
            alt="Logo"
            src="/figmaAssets/logo-3.png"
          />
        </div>

        <div className="flex-1 font-normal text-black text-xl leading-[30px] [font-family:'Almarai',Helvetica] tracking-[0] [direction:rtl]">
          © 2026 معاهد الوادي العليا. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};
