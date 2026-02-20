import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function Portal() {
    const { t, direction } = useLanguage();
    const [activeTab, setActiveTab] = useState("student");

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 transition-colors duration-300 flex flex-col">
            <PageHead title={t("portal")} description={t("student_login")} />
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-20 px-4 mt-20">
                <AnimatedSection>
                    <Card className="w-full max-w-[450px] shadow-xl border-0 bg-white dark:bg-neutral-900 dark:border-neutral-800 rounded-3xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="bg-green-700 dark:bg-green-900 p-8 text-center text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern opacity-10" />
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <User className="w-8 h-8" />
                                    </div>
                                    <h1 className="text-2xl font-bold [font-family:'Almarai',Helvetica]">{t("portal")}</h1>
                                    <p className="text-white/80 text-sm [font-family:'Almarai',Helvetica]">
                                        {t("back_to_portal")}
                                    </p>
                                </div>
                            </div>

                            <div className="p-8">
                                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" dir={direction}>
                                    <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 dark:bg-neutral-800 rounded-xl p-1">
                                        <TabsTrigger
                                            value="student"
                                            className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700 data-[state=active]:text-green-700 dark:data-[state=active]:text-white data-[state=active]:shadow-sm transition-all [font-family:'Almarai',Helvetica]"
                                        >
                                            {t("student_login")}
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="staff"
                                            className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700 data-[state=active]:text-green-700 dark:data-[state=active]:text-white data-[state=active]:shadow-sm transition-all [font-family:'Almarai',Helvetica]"
                                        >
                                            {t("staff_login")}
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="student">
                                        <form className="flex flex-col gap-5">
                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="s-username" className="text-right [font-family:'Almarai',Helvetica] text-neutral-600 dark:text-neutral-300">{t("username")}</Label>
                                                <div className="relative">
                                                    <Input
                                                        id="s-username"
                                                        className={`pl-4 pr-10 h-11 rounded-xl bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 focus:ring-green-500/20 [font-family:'Almarai',Helvetica] text-right`}
                                                        placeholder="2024xxxx"
                                                    />
                                                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="s-password" className="text-right [font-family:'Almarai',Helvetica] text-neutral-600 dark:text-neutral-300">{t("password")}</Label>
                                                <div className="relative">
                                                    <Input
                                                        id="s-password"
                                                        type="password"
                                                        className={`pl-4 pr-10 h-11 rounded-xl bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 focus:ring-green-500/20 [font-family:'Almarai',Helvetica] text-right`}
                                                    />
                                                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                                <a href="#" className="text-xs text-green-700 dark:text-green-500 hover:underline [font-family:'Almarai',Helvetica] self-end">{t("forgot_password")}</a>
                                            </div>

                                            <Button className="h-11 rounded-xl bg-green-700 hover:bg-green-800 text-white font-bold [font-family:'Almarai',Helvetica] flex items-center justify-center gap-2 mt-2">
                                                <span>{t("login")}</span>
                                                {direction === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                                            </Button>
                                        </form>
                                    </TabsContent>

                                    <TabsContent value="staff">
                                        <form className="flex flex-col gap-5">
                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="t-username" className="text-right [font-family:'Almarai',Helvetica] text-neutral-600 dark:text-neutral-300">{t("username")}</Label>
                                                <div className="relative">
                                                    <Input
                                                        id="t-username"
                                                        className={`pl-4 pr-10 h-11 rounded-xl bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 focus:ring-green-500/20 [font-family:'Almarai',Helvetica] text-right`}
                                                        placeholder="admin"
                                                    />
                                                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="t-password" className="text-right [font-family:'Almarai',Helvetica] text-neutral-600 dark:text-neutral-300">{t("password")}</Label>
                                                <div className="relative">
                                                    <Input
                                                        id="t-password"
                                                        type="password"
                                                        className={`pl-4 pr-10 h-11 rounded-xl bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 focus:ring-green-500/20 [font-family:'Almarai',Helvetica] text-right`}
                                                    />
                                                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                                <a href="#" className="text-xs text-green-700 dark:text-green-500 hover:underline [font-family:'Almarai',Helvetica] self-end">{t("forgot_password")}</a>
                                            </div>

                                            <Button className="h-11 rounded-xl bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white font-bold [font-family:'Almarai',Helvetica] flex items-center justify-center gap-2 mt-2">
                                                <span>{t("login")}</span>
                                                {direction === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                                            </Button>
                                        </form>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </CardContent>
                    </Card>
                </AnimatedSection>
            </main>

            <Footer />
        </div>
    );
}
