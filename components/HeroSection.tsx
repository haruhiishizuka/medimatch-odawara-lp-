'use client';

import { motion } from 'framer-motion';
import { Sparkles, MapPin, MessageCircle, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-serenity-blue-light via-white to-powder-pink-light">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-serenity-blue opacity-10"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-powder-pink opacity-10"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Sparkle decorations */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          >
            <Sparkles className="w-6 h-6 text-shiny-gold" />
          </motion.div>
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Copy and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-6"
            >
              <MapPin className="w-4 h-4 text-serenity-blue" />
              <span className="text-sm font-medium text-gray-700">小田原医療圏専門</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block text-gray-800 mb-2">
                「求人票に自分を合わせる」
              </span>
              <span className="block text-gray-800 mb-2">
                のは、もう終わりに
              </span>
              <span className="block text-serenity-blue">
                しませんか？
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed"
            >
              MediMatchが、あなただけの
              <span className="font-bold text-powder-pink">『席』</span>
              を
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
            >
              小田原の病院と
              <span className="font-bold text-serenity-blue">直接交渉</span>
              します。
            </motion.p>

            {/* Handwritten accent */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="font-handwritten text-lg text-gray-600 mb-10 italic"
            >
              「もっと自分らしく働きたい」そんなワガママ、叶えます。
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-primary flex items-center justify-center gap-3 text-lg group">
                <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                <span>LINEで無料相談</span>
              </button>
              <div className="flex flex-col items-center sm:items-start text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-shiny-gold" />
                  あなたの席を確保する
                </span>
                <span className="text-xs text-gray-500">完全無料・秘密厳守</span>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-shiny-gold"></div>
                <span>小田原特化</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-shiny-gold"></div>
                <span>1対1コンシェルジュ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-shiny-gold"></div>
                <span>逆指名交渉</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-serenity-blue to-powder-pink flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">あなた専属のコンシェルジュが</p>
                  <p className="text-sm opacity-75 mt-2">
                    小田原の医療機関と直接交渉します
                  </p>
                </div>
              </div>
              {/* Decorative gold accent */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-shiny-gold opacity-20 blur-xl"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 rounded-full bg-white opacity-20 blur-xl"></div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-gold-glow p-4 max-w-xs hidden lg:block"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-shiny-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-800 text-sm mb-1">
                    実際の交渉成功例
                  </p>
                  <p className="text-xs text-gray-600">
                    「夜勤なし×年収50万UP」を実現したKさん（30代）
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-serenity-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-serenity-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
