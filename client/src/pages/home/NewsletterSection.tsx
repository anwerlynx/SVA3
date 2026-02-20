import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Mail, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function NewsletterSection() {
  const { language, direction } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 409) {
        setMessage(language === "ar" ? "أنت مشترك بالفعل" : "You're already subscribed");
        setIsError(true);
      } else if (res.ok) {
        setMessage(language === "ar" ? "تم الاشتراك بنجاح!" : "Subscribed successfully!");
        setIsError(false);
        setEmail("");
      } else {
        setMessage(language === "ar" ? "حدث خطأ، حاول مرة أخرى" : "An error occurred, try again");
        setIsError(true);
      }
    } catch {
      setMessage(language === "ar" ? "حدث خطأ، حاول مرة أخرى" : "An error occurred, try again");
      setIsError(true);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 4000);
    }
  };

  return (
    <section className="py-20 bg-green-800 dark:bg-green-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
        <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-[800px] mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center flex flex-col items-center gap-6" dir={direction}>
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
              {language === "ar" ? "اشترك في النشرة الإخبارية" : "Subscribe to Newsletter"}
            </h2>
            <p className="text-white/70 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
              {language === "ar"
                ? "احصل على آخر الأخبار والمستجدات مباشرة في بريدك الإلكتروني"
                : "Get the latest news directly in your inbox"}
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-[500px] mt-4">
              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 h-auto rounded-full bg-white text-green-800 hover:bg-gray-100 [font-family:'Almarai',Helvetica] font-bold flex items-center gap-2 flex-shrink-0"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {language === "ar" ? "اشترك" : "Subscribe"}
                </Button>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === "ar" ? "بريدك الإلكتروني" : "Your email address"}
                  className={`flex-1 px-6 py-3 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 ${direction === "rtl" ? "text-right" : "text-left"} [font-family:'Almarai',Helvetica]`}
                  required
                  disabled={loading}
                />
              </div>
            </form>

            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm [font-family:'Almarai',Helvetica] ${isError ? "text-red-300" : "text-green-200"}`}
              >
                {message}
              </motion.p>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
