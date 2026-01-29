'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Target, Sparkles } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'ヒアリング',
    subtitle: '「ワガママ」を全部聞きます',
    description: '給与、勤務時間、診療科、通勤距離、人間関係の雰囲気…。遠慮なく、あなたの理想を教えてください。',
  },
  {
    icon: Target,
    title: '交渉',
    subtitle: '病院と直接かけあいます',
    description: '公開されていない求人や、条件のカスタマイズを私たちが直接交渉。「求人票に合わせる」のではなく、「あなたに合う席」を作ります。',
  },
  {
    icon: Heart,
    title: 'マッチング',
    subtitle: 'オーダーメイドの提案',
    description: '画一的な求人票ではなく、あなた専用にカスタマイズされた提案をお届け。本当に納得できる選択肢を提供します。',
  },
];

export default function PhilosophySection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-serenity-blue-light via-white to-powder-pink-light overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heart-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 30 C50 20, 40 10, 30 10 C20 10, 10 20, 10 30 C10 45, 25 60, 50 80 C75 60, 90 45, 90 30 C90 20, 80 10, 70 10 C60 10, 50 20, 50 30 Z" fill="currentColor" className="text-serenity-blue" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heart-pattern)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-serenity-blue/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-shiny-gold" />
            <span className="text-sm font-medium text-serenity-blue">The Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            求人を「探す」のではなく
            <br />
            理想を
            <span className="text-gradient-gold">「言語化」</span>
            する
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MediMatchは求人サイトではありません。
            <br className="hidden sm:block" />
            あなたの「こう働きたい」を実現する
            <span className="font-bold text-powder-pink">交渉型コンシェルジュサービス</span>
            です。
          </p>
        </motion.div>

        {/* Main philosophy card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-soft-pink p-8 md:p-12 border border-powder-pink/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-pink flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  求人票を見せない。
                  <br />
                  あなたの「ワガママ」から始める。
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  「週3日だけ」「17時には帰りたい」「小児科がいい」「駐車場必須」
                  <br className="hidden md:block" />
                  そんな"ワガママ"を、私たちは大歓迎します。
                </p>
              </div>
            </div>
            <div className="bg-serenity-blue/5 rounded-2xl p-6 border-l-4 border-serenity-blue">
              <p className="text-gray-700 leading-relaxed">
                既存の求人票に「妥協して合わせる」のではなく、
                <br className="hidden md:block" />
                <span className="font-bold text-serenity-blue">
                  「それまで存在しなかったポジション」を、病院と直接交渉して創り出します。
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 h-full hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-serenity-blue/20">
                      0{index + 1}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-serenity flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-powder-pink font-medium mb-3">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-soft px-8 py-6">
            <p className="font-handwritten text-2xl text-gray-800 mb-2">
              "自分に合う求人がない"のではなく、
            </p>
            <p className="font-handwritten text-2xl text-serenity-blue font-bold">
              "まだ作られていないだけ"です。
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-shiny-gold opacity-10 blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-powder-pink opacity-10 blur-2xl"
      />
    </section>
  );
}
