import { useState } from "react";
import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function ManagementContact() {
  const { language, direction } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = [
    { icon: MapPin, title: language === "ar" ? "العنوان" : "Address", value: language === "ar" ? "المنطقة الصناعية - مدينة السادات - محافظة المنوفية" : "Industrial Zone - Sadat City - Menoufia Governorate" },
    { icon: Phone, title: language === "ar" ? "الهاتف" : "Phone", value: "048-2600000" },
    { icon: Mail, title: language === "ar" ? "البريد الإلكتروني" : "Email", value: "management@valley-institutes.edu" },
    { icon: Clock, title: language === "ar" ? "ساعات العمل" : "Working Hours", value: language === "ar" ? "السبت - الخميس: 8:00 ص - 4:00 م" : "Saturday - Thursday: 8:00 AM - 4:00 PM" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, institute: "management" }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || (language === "ar" ? "فشل في إرسال الرسالة" : "Failed to send message"));
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || (language === "ar" ? "حدث خطأ أثناء الإرسال" : "An error occurred while sending"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "تواصل معنا - المعهد العالي للإدارة" : "Contact Us - Higher Institute of Management"} description={language === "ar" ? "معلومات التواصل مع المعهد العالي للإدارة والمالية ونظم المعلومات" : "Contact information for the Higher Institute of Management, Finance and Information Systems"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "تواصل معنا" : "Contact Us"} subtitle={language === "ar" ? "نسعد بتواصلك معنا" : "We are happy to hear from you"} image="/figmaAssets/rectangle-16.png" overlayColor="from-green-900/60 to-green-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" dir={direction}>
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "معلومات التواصل" : "Contact Information"}</h2>
                {contactInfo.map((info, i) => (
                  <Card key={i} className="rounded-2xl border-0 shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-colors duration-300">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300"><info.icon className="w-6 h-6 text-green-700 dark:text-green-500 transition-colors duration-300" /></div>
                      <div>
                        <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{info.title}</h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] mt-1 transition-colors duration-300">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-colors duration-300">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center gap-4 text-center py-6">
                      <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400" />
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-300 [font-family:'Almarai',Helvetica]">{language === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "سنتواصل معك في أقرب وقت ممكن." : "We will get back to you as soon as possible."}</p>
                      <Button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }} className="mt-2 rounded-xl bg-green-700 hover:bg-green-800 text-white [font-family:'Almarai',Helvetica]">
                        {language === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-6 transition-colors duration-300">{language === "ar" ? "أرسل رسالة" : "Send a Message"}</h2>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input type="text" required placeholder={language === "ar" ? "الاسم الكامل" : "Full Name"} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-right [font-family:'Almarai',Helvetica] transition-colors duration-300" />
                        <input type="email" required placeholder={language === "ar" ? "البريد الإلكتروني" : "Email"} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-right [font-family:'Almarai',Helvetica] transition-colors duration-300" dir="ltr" />
                        <input type="text" placeholder={language === "ar" ? "الموضوع" : "Subject"} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-right [font-family:'Almarai',Helvetica] transition-colors duration-300" />
                        <textarea required placeholder={language === "ar" ? "الرسالة" : "Message"} rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-right resize-none [font-family:'Almarai',Helvetica] transition-colors duration-300" />
                        {error && <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm [font-family:'Almarai',Helvetica]">{error}</div>}
                        <Button type="submit" disabled={loading} className="w-full py-3 h-auto rounded-xl bg-green-700 hover:bg-green-800 disabled:opacity-60 dark:bg-green-600 dark:hover:bg-green-700 text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                          {loading ? <><Loader2 className="w-4 h-4 animate-spin ml-2" /> {language === "ar" ? "جاري الإرسال..." : "Sending..."}</> : (language === "ar" ? "إرسال الرسالة" : "Send Message")}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}