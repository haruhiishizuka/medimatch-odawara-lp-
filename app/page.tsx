import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import PhilosophySection from '@/components/PhilosophySection';
import Special2026Section from '@/components/Special2026Section';
import FlowSection from '@/components/FlowSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <Special2026Section />
      <FlowSection />
      <FAQSection />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-serenity-blue via-powder-pink to-shiny-gold py-20 md:py-28">
        <div className="section-container text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            あなただけの『席』、
            <br />
            一緒に探しませんか？
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95">
            小田原で、もっと自分らしく働くために。
          </p>
          <button className="bg-white text-serenity-blue hover:bg-gray-50 font-bold py-5 px-12 rounded-2xl text-xl shadow-2xl transition-all duration-300 transform hover:scale-105">
            LINEで無料相談を始める
          </button>
          <p className="mt-6 text-sm opacity-90">
            ※ 完全無料・秘密厳守・24時間以内に返信
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="section-container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">MediMatch for nurse 小田原</h3>
            <p className="text-gray-400 mb-6">
              あなただけの『席』を、小田原の病院と直接交渉します。
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition-colors">利用規約</a>
              <a href="#" className="hover:text-white transition-colors">運営会社</a>
            </div>
            <p className="mt-8 text-xs text-gray-500">
              © 2026 MediMatch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
