'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Building2, Users, Clock, Lightbulb } from 'lucide-react';

const insights = [
  {
    icon: Building2,
    title: '市立病院の移転',
    description: '2026年の新病院開設に向け、地域の医療体制が大きく変わります。',
    impact: 'positive',
  },
  {
    icon: Users,
    title: '民間病院の採用強化',
    description: '変化の時期だからこそ、民間医療機関は優秀な人材確保に積極的です。',
    impact: 'positive',
  },
  {
    icon: Clock,
    title: '今が動くベストタイミング',
    description: '再編前の今だからこそ、好条件での交渉がしやすい環境です。',
    impact: 'positive',
  },
];

const opportunities = [
  {
    title: '新規開設クリニックの立ち上げメンバー',
    badge: '限定募集',
    color: 'shiny-gold',
  },
  {
    title: '柔軟な勤務体系を導入する病院',
    badge: '今だけ',
    color: 'serenity-blue',
  },
  {
    title: '年収・待遇の見直しを検討中の施設',
    badge: '交渉可',
    color: 'powder-pink',
  },
];

export default function Special2026Section() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-shiny-gold/10 px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-5 h-5 text-shiny-gold" />
            <span className="text-sm font-medium text-shiny-gold">2026 Special Opportunity</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-serenity-blue">2026年</span> 小田原医療圏の再編：
            <br />
            今が
            <span className="text-gradient-gold">『先行者』</span>
            のチャンスです
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            市立病院の移転は、不安ではなく「選択肢が広がる機会」です
          </p>
        </motion.div>

        {/* Main insight card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-serenity-blue to-serenity-blue-dark text-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-shiny-gold opacity-10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    地域医療の変化期 = キャリアアップの絶好機
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    小田原市立病院の移転に伴い、地域の医療機関が人材獲得に動いています。
                    <br className="hidden md:block" />
                    この「変化の時期」だからこそ、通常では叶わない条件交渉が可能になっています。
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      ポジション創出
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      待遇見直し
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      柔軟な勤務体系
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Insights grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-soft p-6 border-2 border-serenity-blue/10 hover:border-serenity-blue/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-serenity-blue/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-serenity-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">
                      {insight.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Opportunities section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-powder-pink-light to-white rounded-3xl shadow-soft-pink p-8 md:p-12 border border-powder-pink/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              今、小田原で動いている
              <span className="text-powder-pink">限定案件</span>
            </h3>
            <div className="space-y-4">
              {opportunities.map((opportunity, index) => {
                // Static class mapping for Tailwind
                const dotClass = opportunity.color === 'shiny-gold' ? 'bg-shiny-gold' :
                                opportunity.color === 'serenity-blue' ? 'bg-serenity-blue' :
                                'bg-powder-pink';

                const badgeBgClass = opportunity.color === 'shiny-gold' ? 'bg-shiny-gold/10' :
                                    opportunity.color === 'serenity-blue' ? 'bg-serenity-blue/10' :
                                    'bg-powder-pink/10';

                const badgeTextClass = opportunity.color === 'shiny-gold' ? 'text-shiny-gold' :
                                      opportunity.color === 'serenity-blue' ? 'text-serenity-blue' :
                                      'text-powder-pink';

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`flex-shrink-0 w-3 h-3 rounded-full ${dotClass}`}></div>
                    <span className="flex-grow text-gray-800 font-medium">
                      {opportunity.title}
                    </span>
                    <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${badgeBgClass} ${badgeTextClass}`}>
                      {opportunity.badge}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 bg-serenity-blue/5 rounded-2xl p-6 border-l-4 border-serenity-blue">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-serenity-blue">これらは求人サイトには掲載されません。</span>
                <br />
                MediMatchの独自ネットワークだからこそアクセスできる、非公開の交渉案件です。
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-handwritten text-xl md:text-2xl text-gray-800">
            "様子を見る"より、
            <span className="text-shiny-gold font-bold">"先に動く"</span>
            人が、最高の席を確保できます。
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-shiny-gold opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-serenity-blue opacity-5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
