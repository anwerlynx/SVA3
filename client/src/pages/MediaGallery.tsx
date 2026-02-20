import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { Camera, Film, X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from "lucide-react";

interface GalleryItem {
  id: number;
  category: string;
  titleAr: string;
  titleEn: string;
  image: string;
}

export default function MediaGallery() {
  const { language, direction } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const pageTitle = language === 'ar' ? 'معرض الصور والفيديو' : 'Media Gallery';
  const pageSubtitle = language === 'ar'
    ? 'لحظات مميزة من حياة معاهد الوادي العليا الأكاديمية والاجتماعية'
    : 'Special moments from the academic and social life at Valley Higher Institutes';

  const categories = [
    { id: 'all', label: language === 'ar' ? 'الكل' : 'All' },
    { id: 'events', label: language === 'ar' ? 'الفعاليات' : 'Events' },
    { id: 'graduation', label: language === 'ar' ? 'التخرج' : 'Graduation' },
    { id: 'activities', label: language === 'ar' ? 'الأنشطة' : 'Activities' },
    { id: 'campus', label: language === 'ar' ? 'الحرم الجامعي' : 'Campus' },
  ];

  const photos: GalleryItem[] = [
    { id: 1, category: 'events', titleAr: 'حفل افتتاح العام الدراسي', titleEn: 'Academic Year Opening Ceremony', image: '/gallery/events_1_1.jpg' },
    { id: 2, category: 'graduation', titleAr: 'حفل تخرج دفعة 2025', titleEn: 'Class of 2025 Graduation', image: '/gallery/graduation_1_1.jpg' },
    { id: 3, category: 'activities', titleAr: 'يوم الرياضة السنوي', titleEn: 'Annual Sports Day', image: '/gallery/activities_1_1.jpg' },
    { id: 4, category: 'campus', titleAr: 'المبنى الرئيسي', titleEn: 'Main Building', image: '/gallery/campus_1_1.jpg' },
    { id: 5, category: 'events', titleAr: 'ندوة علمية دولية', titleEn: 'International Scientific Seminar', image: '/gallery/events_1_2.jpg' },
    { id: 6, category: 'graduation', titleAr: 'تكريم المتفوقين', titleEn: 'Honoring Top Students', image: '/gallery/graduation_1_2.jpg' },
    { id: 7, category: 'activities', titleAr: 'مسابقة الابتكار', titleEn: 'Innovation Competition', image: '/gallery/activities_1_2.jpg' },
    { id: 8, category: 'campus', titleAr: 'المكتبة المركزية', titleEn: 'Central Library', image: '/gallery/campus_1_2.jpg' },
    { id: 9, category: 'events', titleAr: 'زيارة وفد أكاديمي', titleEn: 'Academic Delegation Visit', image: '/gallery/events_1_3.jpg' },
    { id: 10, category: 'activities', titleAr: 'ورشة عمل تقنية', titleEn: 'Technical Workshop', image: '/gallery/activities_1_3.jpg' },
    { id: 11, category: 'campus', titleAr: 'المعامل والمختبرات', titleEn: 'Labs & Laboratories', image: '/gallery/campus_1_3.jpg' },
    { id: 12, category: 'graduation', titleAr: 'لحظات التخرج', titleEn: 'Graduation Moments', image: '/gallery/graduation_1_3.jpg' },
  ];

  const videos = [
    { id: 1, category: 'events', titleAr: 'فيلم تسجيلي عن المعاهد', titleEn: 'Documentary Film About the Institutes', image: '/gallery/events_1_1.jpg' },
    { id: 2, category: 'graduation', titleAr: 'أبرز لحظات حفل التخرج', titleEn: 'Graduation Ceremony Highlights', image: '/gallery/graduation_1_1.jpg' },
    { id: 3, category: 'activities', titleAr: 'جولة في الحرم الجامعي', titleEn: 'Campus Tour', image: '/gallery/campus_1_1.jpg' },
    { id: 4, category: 'events', titleAr: 'ملخص المؤتمر العلمي', titleEn: 'Scientific Conference Summary', image: '/gallery/events_1_2.jpg' },
    { id: 5, category: 'activities', titleAr: 'يوم في حياة طالب', titleEn: 'A Day in Student Life', image: '/gallery/activities_1_1.jpg' },
    { id: 6, category: 'campus', titleAr: 'جولة في المعامل الحديثة', titleEn: 'Tour of Modern Laboratories', image: '/gallery/campus_1_2.jpg' },
  ];

  const filteredPhotos = useMemo(() =>
    activeCategory === 'all' ? photos : photos.filter(p => p.category === activeCategory),
    [activeCategory, language]
  );

  const filteredVideos = useMemo(() =>
    activeCategory === 'all' ? videos : videos.filter(v => v.category === activeCategory),
    [activeCategory, language]
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (dir: 'prev' | 'next') => {
    const len = filteredPhotos.length;
    if (dir === 'next') setLightboxIndex((lightboxIndex + 1) % len);
    else setLightboxIndex((lightboxIndex - 1 + len) % len);
  };

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Media Gallery" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
              {pageSubtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-8 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-neutral-800 rounded-xl" dir={direction}>
                <button
                  onClick={() => setActiveTab('photos')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold [font-family:'Almarai',Helvetica] transition-all ${
                    activeTab === 'photos'
                      ? 'bg-white dark:bg-neutral-700 text-green-700 dark:text-green-400 shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  {language === 'ar' ? 'الصور' : 'Photos'}
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                    {filteredPhotos.length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold [font-family:'Almarai',Helvetica] transition-all ${
                    activeTab === 'videos'
                      ? 'bg-white dark:bg-neutral-700 text-green-700 dark:text-green-400 shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  <Film className="w-4 h-4" />
                  {language === 'ar' ? 'الفيديو' : 'Videos'}
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                    {filteredVideos.length}
                  </span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3" dir={direction}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2 rounded-full text-sm font-bold [font-family:'Almarai',Helvetica] transition-all ${
                      activeCategory === cat.id
                        ? 'bg-green-700 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-green-900/20'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {activeTab === 'photos' && (
        <section className="py-12 md:py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            {filteredPhotos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" dir={direction}>
                {filteredPhotos.map((photo, index) => (
                  <AnimatedSection key={photo.id} delay={index * 0.05} direction="up">
                    <Card
                      className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all h-full group bg-white dark:bg-neutral-900 overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={photo.image}
                          alt={language === 'ar' ? photo.titleAr : photo.titleEn}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-neutral-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                            <ZoomIn className="w-5 h-5 text-green-700 dark:text-green-400" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-xs text-green-600 dark:text-green-400 font-bold [font-family:'Almarai',Helvetica] mb-1 uppercase tracking-wider">
                          {categories.find(c => c.id === photo.category)?.label}
                        </p>
                        <h3 className="font-bold text-sm text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300" dir={direction}>
                          {language === 'ar' ? photo.titleAr : photo.titleEn}
                        </h3>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <AnimatedSection>
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <ImageIcon className="w-16 h-16 text-neutral-300 dark:text-neutral-600" />
                  <p className="text-neutral-400 dark:text-neutral-500 text-lg [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'لا توجد صور في هذا التصنيف' : 'No photos in this category'}
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      )}

      {activeTab === 'videos' && (
        <section className="py-12 md:py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
                {filteredVideos.map((video, index) => (
                  <AnimatedSection key={video.id} delay={index * 0.1} direction="up">
                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all h-full group bg-white dark:bg-neutral-800 overflow-hidden cursor-pointer">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={video.image}
                          alt={language === 'ar' ? video.titleAr : video.titleEn}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-green-700/80 group-hover:bg-green-700 flex items-center justify-center transition-all group-hover:scale-110">
                            <Film className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-xs text-green-600 dark:text-green-400 font-bold [font-family:'Almarai',Helvetica] mb-1 uppercase tracking-wider">
                          {categories.find(c => c.id === video.category)?.label}
                        </p>
                        <h3 className="font-bold text-sm text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300" dir={direction}>
                          {language === 'ar' ? video.titleAr : video.titleEn}
                        </h3>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <AnimatedSection>
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <Film className="w-16 h-16 text-neutral-300 dark:text-neutral-600" />
                  <p className="text-neutral-400 dark:text-neutral-500 text-lg [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'لا توجد مقاطع فيديو في هذا التصنيف' : 'No videos in this category'}
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      )}

      {lightboxOpen && filteredPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[lightboxIndex].image}
              alt={language === 'ar' ? filteredPhotos[lightboxIndex].titleAr : filteredPhotos[lightboxIndex].titleEn}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center">
              <h3 className="text-white text-lg font-bold [font-family:'Almarai',Helvetica]" dir={direction}>
                {language === 'ar' ? filteredPhotos[lightboxIndex].titleAr : filteredPhotos[lightboxIndex].titleEn}
              </h3>
              <p className="text-white/50 text-sm [font-family:'Almarai',Helvetica] mt-1">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
