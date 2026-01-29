'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus, Shield, Heart } from 'lucide-react';

const faqs = [
  {
    question: '転職するか決めていなくても相談できますか？',
    answer: 'もちろんです。「今すぐ転職するつもりはないけど、条件次第では考えたい」という方も大歓迎です。まずは小田原の医療圏の情報収集や、ご自身の市場価値を知るためにご活用ください。押し売りは一切いたしません。',
  },
  {
    question: '現在の職場にバレる心配はありませんか？',
    answer: '完全秘密厳守です。あなたの許可なく、現在の職場や第三者に情報が漏れることは絶対にありません。また、病院への交渉も匿名で進めることができますので、安心してご相談ください。',
  },
  {
    question: 'なぜ無料で利用できるのですか？',
    answer: 'MediMatchは病院・クリニック側から紹介手数料をいただくビジネスモデルです。看護師の皆様からは一切費用をいただきません。成功報酬や登録料なども不要です。安心してご利用ください。',
  },
  {
    question: '小田原以外の地域でも利用できますか？',
    answer: '現在は小田原医療圏（小田原市・南足柄市・箱根町・真鶴町・湯河原町・開成町・大井町・松田町・山北町・中井町）に特化してサービスを提供しています。地域を絞ることで、より深い情報と強い交渉力を実現しています。',
  },
  {
    question: '希望の条件が叶わない場合もありますか？',
    answer: '正直にお伝えすると、すべての希望が100%叶うわけではありません。しかし、大手求人サイトでは見つからない選択肢を提示できる自信があります。また、「今すぐは難しいが、3ヶ月後なら可能」といった将来的な可能性も含めてご提案します。',
  },
  {
    question: 'どのくらいの期間で転職できますか？',
    answer: '最短で2週間、平均で1〜2ヶ月程度です。ただし、ご希望の条件や現在の職場の退職時期によって変動します。急がず、あなたのペースで進めることができますのでご安心ください。',
  },
  {
    question: 'ブランクがあっても大丈夫ですか？',
    answer: 'はい、大丈夫です。ブランク明けの復職支援が充実している病院や、研修制度が整っているクリニックもご紹介できます。あなたの状況に合わせて、無理なく働ける環境を一緒に探しましょう。',
  },
  {
    question: 'パートや派遣でも相談できますか？',
    answer: 'もちろんです。正社員だけでなく、パート・派遣・夜勤専従など、様々な雇用形態に対応しています。「週3日だけ」「日勤のみ」といった柔軟な働き方も交渉可能です。',
  },
];

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start gap-4 text-left hover:bg-gray-50/50 transition-colors duration-200 px-4 rounded-lg group"
      >
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
          isOpen ? 'bg-serenity-blue text-white' : 'bg-serenity-blue/10 text-serenity-blue group-hover:bg-serenity-blue/20'
        }`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-serenity-blue transition-colors duration-200">
            {faq.question}
          </h3>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pr-4 pb-6 ml-14">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
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
          <div className="inline-flex items-center gap-2 bg-serenity-blue/10 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-serenity-blue" />
            <span className="text-sm font-medium text-serenity-blue">Trust Building</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            よくあるご質問
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            不安や疑問を解消してから、安心してご利用ください
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-soft p-4 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-serenity-blue/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-serenity-blue" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">完全秘密厳守</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                プライバシーポリシーに基づき、あなたの個人情報を厳重に管理します。
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-powder-pink/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-powder-pink" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">あなたの味方です</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                病院側ではなく、看護師であるあなたの利益を最優先に考えます。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-serenity-blue-light to-powder-pink-light rounded-2xl shadow-soft px-8 py-6">
            <p className="text-gray-800 font-medium mb-3">
              他にも気になることがあれば、お気軽にLINEでご質問ください
            </p>
            <button className="btn-primary">
              LINEで質問する
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-powder-pink opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-serenity-blue opacity-5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
