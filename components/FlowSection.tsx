'use client';

import { motion } from 'framer-motion';
import { MessageSquare, UserCheck, Handshake, Gift, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'LINE登録',
    subtitle: '30秒で完了',
    description: '友だち追加するだけで、あなた専属のコンシェルジュがつきます。匿名・無料でご相談いただけます。',
    color: 'serenity-blue',
  },
  {
    icon: UserCheck,
    number: '02',
    title: '1対1のヒアリング',
    subtitle: 'あなたのワガママを全部聞きます',
    description: '給与・勤務時間・通勤距離・診療科・人間関係…。遠慮なく理想の条件を教えてください。秘密は厳守します。',
    color: 'powder-pink',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'コンシェルジュによる逆指名交渉',
    subtitle: '病院に直接かけあいます',
    description: '公開求人にはない条件や、あなたのために新しく作るポジションを、私たちが病院と直接交渉します。',
    color: 'shiny-gold',
  },
  {
    icon: Gift,
    number: '04',
    title: 'オーダーメイド求人の提示',
    subtitle: 'あなただけの特別な席',
    description: '画一的な求人票ではなく、あなた専用にカスタマイズされた提案をお届けします。納得できるまで何度でも調整可能です。',
    color: 'serenity-blue',
  },
];

export default function FlowSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
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
            <Sparkles className="w-5 h-5 text-shiny-gold" />
            <span className="text-sm font-medium text-powder-pink">The Frictionless Path</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            完全無料、
            <span className="text-serenity-blue">4ステップ</span>
            で完結
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            面倒な会員登録も、履歴書の準備も不要。まずはLINEで気軽にご相談ください。
          </p>
        </motion.div>

        {/* Flow steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            // Static class mapping for Tailwind
            const gradientClass = step.color === 'serenity-blue' ? 'bg-gradient-to-br from-serenity-blue to-serenity-blue-dark' :
                                 step.color === 'powder-pink' ? 'bg-gradient-to-br from-powder-pink to-powder-pink-dark' :
                                 step.color === 'shiny-gold' ? 'bg-gradient-to-br from-shiny-gold to-shiny-gold-dark' :
                                 'bg-gradient-to-br from-serenity-blue to-serenity-blue-dark';

            const badgeBgClass = step.color === 'serenity-blue' ? 'bg-serenity-blue/10' :
                                step.color === 'powder-pink' ? 'bg-powder-pink/10' :
                                step.color === 'shiny-gold' ? 'bg-shiny-gold/10' :
                                'bg-serenity-blue/10';

            const badgeTextClass = step.color === 'serenity-blue' ? 'text-serenity-blue' :
                                  step.color === 'powder-pink' ? 'text-powder-pink' :
                                  step.color === 'shiny-gold' ? 'text-shiny-gold' :
                                  'text-serenity-blue';

            return (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">
                    {/* Step number and icon - Left side on desktop */}
                    <div className="md:col-span-3 flex md:flex-col items-center md:items-end gap-4">
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-2xl ${gradientClass} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-700">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content - Right side on desktop */}
                    <div className="md:col-span-9">
                      <div className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 p-6 md:p-8 border-2 border-transparent hover:border-powder-pink/20">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {step.title}
                          </h3>
                          <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${badgeBgClass} ${badgeTextClass}`}>
                            {step.subtitle}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                    className="flex justify-center md:justify-start md:ml-10 mb-8"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <ArrowRight className="w-6 h-6 text-serenity-blue transform md:rotate-90" />
                      <div className="w-0.5 h-8 bg-gradient-to-b from-serenity-blue to-transparent hidden md:block"></div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-serenity rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">完全無料</div>
            <p className="text-sm text-white/90">成功報酬も一切なし</p>
          </div>
          <div className="bg-gradient-pink rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">秘密厳守</div>
            <p className="text-sm text-white/90">職場にバレる心配なし</p>
          </div>
          <div className="bg-gradient-to-br from-shiny-gold to-shiny-gold-dark rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">即日対応</div>
            <p className="text-sm text-white/90">24時間以内に返信</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="btn-primary text-xl px-12 py-5">
            まずはLINEで無料相談してみる
          </button>
          <p className="mt-4 text-sm text-gray-500">
            登録後、しつこい営業は一切ありません
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-serenity-blue opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-powder-pink opacity-5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
