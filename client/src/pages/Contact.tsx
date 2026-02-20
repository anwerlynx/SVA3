import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
    const { t, direction, language } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, institute: "both" }),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Failed to send message");
            }
            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || (language === 'ar' ? "حدث خطأ أثناء الإرسال" : "An error occurred"));
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: MapPin,
            label: t("address"),
            value: t("main_address"),
            color: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-500",
        },
        {
            icon: Phone,
            label: t("phone"),
            value: "+20 123 456 7890",
            color: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
        },
        {
            icon: Mail,
            label: t("email_label"),
            value: "info@valley-institutes.edu.eg",
            color: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400",
        },
        {
            icon: Clock,
            label: t("working_hours"),
            value: t("weekdays"),
            color: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400",
        },
    ];

    return (
        <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
            <PageHead title={t("contact_title")} description={t("contact_subtitle")} />
            <Navbar />

            {/* Hero */}
            <section className="relative w-full h-[50vh] min-h-[350px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" alt="Contact" src="/figmaAssets/rectangle-2.png" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
                            {t("contact_title")}
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
                            {t("contact_subtitle")}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
              <Breadcrumb
                items={[
                  { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
                  { label: language === 'ar' ? 'اتصل بنا' : 'Contact Us' },
                ]}
              />
            </div>

            {/* Contact Info Cards */}
            <section className="py-16 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" dir={direction}>
                        {contactInfo.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.1} direction="up">
                                <Card className="rounded-2xl border-0 shadow-sm bg-white dark:bg-neutral-800 h-full">
                                    <CardContent className="p-6 flex flex-col gap-3">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral-400 dark:text-neutral-500 [font-family:'Almarai',Helvetica] mb-1 uppercase tracking-wider">
                                                {item.label}
                                            </p>
                                            <p className="text-neutral-800 dark:text-white [font-family:'Almarai',Helvetica] text-sm font-medium leading-relaxed">
                                                {item.value}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" dir={direction}>

                        {/* Contact Form */}
                        <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">
                                        {t("send_message")}
                                    </h2>
                                    <div className="w-16 h-1 bg-green-700 rounded-full" />
                                </div>

                                {submitted ? (
                                    <Card className="rounded-2xl border-0 shadow-sm bg-green-50 dark:bg-green-900/20">
                                        <CardContent className="p-10 flex flex-col items-center gap-4 text-center">
                                            <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400" />
                                            <h3 className="text-xl font-bold text-green-800 dark:text-green-300 [font-family:'Almarai',Helvetica]">
                                                {language === 'ar' ? "تم إرسال رسالتك بنجاح!" : "Message sent successfully!"}
                                            </h3>
                                            <p className="text-green-700 dark:text-green-400 [font-family:'Almarai',Helvetica] text-sm">
                                                {language === 'ar' ? "سنتواصل معك في أقرب وقت ممكن." : "We will get back to you as soon as possible."}
                                            </p>
                                            <button
                                                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                                className="px-6 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-xl text-sm font-bold [font-family:'Almarai',Helvetica] transition-colors"
                                            >
                                                {language === 'ar' ? "إرسال رسالة أخرى" : "Send Another Message"}
                                            </button>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">
                                                    {t("name_placeholder")} *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.name}
                                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                                    placeholder={t("name_placeholder")}
                                                    className={`px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">
                                                    {t("email_placeholder")} *
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                                    placeholder={t("email_placeholder")}
                                                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all text-left"
                                                    dir="ltr"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">
                                                {t("subject_placeholder")} *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={form.subject}
                                                onChange={e => setForm({ ...form, subject: e.target.value })}
                                                placeholder={t("subject_placeholder")}
                                                className={`px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">
                                                {t("message_placeholder")} *
                                            </label>
                                            <textarea
                                                required
                                                rows={6}
                                                value={form.message}
                                                onChange={e => setForm({ ...form, message: e.target.value })}
                                                placeholder={t("message_placeholder")}
                                                className={`px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all resize-none ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                                            />
                                        </div>

                                        {error && (
                                            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm [font-family:'Almarai',Helvetica]">
                                                {error}
                                            </div>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white rounded-xl font-bold [font-family:'Almarai',Helvetica] transition-colors"
                                        >
                                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                            <span>{loading ? (language === 'ar' ? "جاري الإرسال..." : "Sending...") : t("submit_form")}</span>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>

                        {/* Map */}
                        <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">
                                        {t("contact_info")}
                                    </h2>
                                    <div className="w-16 h-1 bg-green-700 rounded-full" />
                                </div>

                                {/* Map Embed */}
                                <div className="rounded-3xl overflow-hidden shadow-lg h-[350px] bg-gray-100 dark:bg-neutral-800">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0!2d31.5!3d30.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA2JzAwLjAiTiAzMcKwMzAnMDAuMCJF!5e0!3m2!1sar!2seg!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Valley Higher Institutes Location"
                                    />
                                </div>

                                {/* Institute Contacts */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Card className="rounded-2xl border-0 shadow-sm bg-green-700 text-white">
                                        <CardContent className="p-5">
                                            <h4 className="font-bold [font-family:'Almarai',Helvetica] mb-2 text-sm">
                                                {language === 'ar' ? "معهد الإدارة" : "Management Institute"}
                                            </h4>
                                            <p className="text-white/80 text-xs [font-family:'Almarai',Helvetica]" dir="ltr">+20 123 111 2222</p>
                                            <p className="text-white/80 text-xs [font-family:'Almarai',Helvetica]">management@valley.edu.eg</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="rounded-2xl border-0 shadow-sm bg-neutral-800 dark:bg-neutral-700 text-white">
                                        <CardContent className="p-5">
                                            <h4 className="font-bold [font-family:'Almarai',Helvetica] mb-2 text-sm">
                                                {language === 'ar' ? "معهد الهندسة" : "Engineering Institute"}
                                            </h4>
                                            <p className="text-white/80 text-xs [font-family:'Almarai',Helvetica]" dir="ltr">+20 123 333 4444</p>
                                            <p className="text-white/80 text-xs [font-family:'Almarai',Helvetica]">engineering@valley.edu.eg</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
