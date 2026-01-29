'use client';

import { motion } from 'framer-motion';
import { FileText, MapPinOff, TrendingDown, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: FileText,
    title: '大手サイトには\n同じ求人ばかり',
    description: '全国展開の求人サイトを見ても、掲載されているのは限られた大手病院の定型求人ばかり。本当に自分に合った働き方は見つからない。',
    color: 'serenity-blue',
  },
  {
    icon: MapPinOff,
    title: '255号線の渋滞や\n現場の本当の情報がない',
    description: '駐車場の有無、通勤のしやすさ、実際の人間関係、残業の実態…。求人票には載らない「リアルな情報」が分からず、入職後に後悔することも。',
    color: 'powder-pink',
  },
  {
    icon: TrendingDown,
    title: '市立病院の移転で\n雇用バランスが不安定',
    description: '2026年に控える小田原市立病院の移転により、地域の雇用環境が変化。今後のキャリアをどう設計すべきか、不安を感じている。',
    color: 'shiny-gold',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ProblemSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-powder-pink/10 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-5 h-5 text-powder-pink" />
            <span className="text-sm font-medium text-powder-pink">The Odawara Reality</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            小田原の看護師が抱える
            <br className="hidden sm:block" />
            <span className="text-serenity-blue">3つのリアルな悩み</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            大手求人サイトでは見えてこない、地域特有の課題があります
          </p>
        </motion.div>

        {/* Problem cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            // Static class mapping for Tailwind
            const bgClass = problem.color === 'serenity-blue' ? 'bg-serenity-blue/10 group-hover:bg-serenity-blue/20' :
                           problem.color === 'powder-pink' ? 'bg-powder-pink/10 group-hover:bg-powder-pink/20' :
                           'bg-shiny-gold/10 group-hover:bg-shiny-gold/20';

            const textClass = problem.color === 'serenity-blue' ? 'text-serenity-blue' :
                             problem.color === 'powder-pink' ? 'text-powder-pink' :
                             'text-shiny-gold';

            const borderClass = problem.color === 'serenity-blue' ? 'border-serenity-blue/20' :
                               problem.color === 'powder-pink' ? 'border-powder-pink/20' :
                               'border-shiny-gold/20';

            const dotClass = problem.color === 'serenity-blue' ? 'bg-serenity-blue' :
                            problem.color === 'powder-pink' ? 'bg-powder-pink' :
                            'bg-shiny-gold';

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="card-soft h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${bgClass} transition-colors duration-300`}>
                      <Icon className={`w-8 h-8 ${textClass}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 whitespace-pre-line leading-tight">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {problem.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div className={`mt-6 pt-6 border-t ${borderClass}`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${dotClass}`}></div>
                      <div className={`w-2 h-2 rounded-full ${dotClass} opacity-60`}></div>
                      <div className={`w-2 h-2 rounded-full ${dotClass} opacity-30`}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-soft p-8 md:p-12">
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              これらの悩み、すべて
              <span className="text-powder-pink">「情報の非対称性」</span>
              が原因です。
            </p>
            <p className="text-gray-600 leading-relaxed">
              求人サイトは「求人を掲載する側」の論理で作られています。
              <br className="hidden sm:block" />
              だから、あなたの「本当に知りたいこと」は書かれていないのです。
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-serenity-blue font-medium">
              <span>でも、MediMatchなら違います</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-serenity-blue opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-powder-pink opacity-5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
