import React from "react";

const BusinessCard = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Front Side */}
      <div className="relative w-full max-w-4xl aspect-[9/5] overflow-hidden">
        {/* 背景画像レイヤー */}
        <div className="absolute inset-0">
          <img
            src="image6.jpeg"
            alt="Live performance"
            className="w-full h-[140%] object-cover relative -top-[39%] left-0"
          />
          {/* オーバーレイグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1026]/80 via-transparent to-[#0B1026]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,255,230,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative h-full p-16 flex flex-col justify-between">
          <div>
            <h1 className="text-7xl font-bold text-white mb-4 tracking-wider drop-shadow-[0_0_25px_rgba(56,255,230,0.3)]">
              HIROTO
            </h1>
            <p className="text-cyan-300 text-2xl tracking-[0.2em] mb-2 font-light">
              Engineer / HumanBeatboxer
            </p>
            <div className="w-96 h-px bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent mb-4" />
          </div>

          <div className="flex justify-between items-end">
            {/* QRコード群 */}
            <div className="flex gap-8">
              {/* Instagram QR */}
              <div className="group relative w-24 h-24">
                <div className="absolute inset-0 bg-white/90 rounded-lg p-2.5 backdrop-blur-sm">
                  <img src="/qr_instagram.svg" alt="Instagram QR" className="w-full h-full" />
                </div>
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-pink-400/30 to-purple-400/30" />
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Instagram
                </span>
              </div>

              {/* X (Twitter) QR */}
              <div className="group relative w-24 h-24">
                <div className="absolute inset-0 bg-white/90 rounded-lg p-2.5 backdrop-blur-sm">
                  <img src="/qr_x.svg" alt="X QR" className="w-full h-full" />
                </div>
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-400/30 to-cyan-400/30" />
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  X
                </span>
              </div>

              {/* Website QR */}
              <div className="group relative w-24 h-24">
                <div className="absolute inset-0 bg-white/90 rounded-lg p-2.5 backdrop-blur-sm">
                  <img src="/qr_website.svg" alt="Website QR" className="w-full h-full" />
                </div>
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-cyan-400/30 to-indigo-400/30" />
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Website
                </span>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <div className="flex gap-8">
                  <div>
                    <div className="text-cyan-300 text-sm tracking-wider mb-1">Create Web site</div>
                    <div className="text-white text-lg font-medium">10 more</div>
                  </div>
                  <div>
                    <div className="text-cyan-300 text-sm tracking-wider mb-1">Beatbox Shows</div>
                    <div className="text-white text-lg font-medium">10+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Side */}
      <div className="relative w-full max-w-4xl aspect-[9/5] overflow-hidden">
        {/* 背景画像レイヤー */}
        <div className="absolute inset-0">
          <img src="mv.webp" alt="Background" className="w-full h-full object-cover" />
          {/* オーバーレイグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1026]/90 via-[#1B2B52]/80 to-[#0B1026]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_70%)]" />
        </div>

        {/* コンテンツ */}
        <div className="h-full p-16 flex flex-col justify-between relative">
          {/* ヘッダー部分 */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-2 tracking-wider">BEAT SINK CENTRAL</h1>
            <p className="text-indigo-300 text-xl tracking-[0.2em] mb-6 font-light">
              Beatbox Community Platform
            </p>
            <div className="w-72 h-px bg-gradient-to-r from-indigo-400 via-purple-400 to-transparent mb-6" />
          </div>

          {/* 中央コンテンツ */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-12 pt-40">
              {/* メインビジョン */}
              <div>
                <p className="text-indigo-200/90">
                  <span className="block text-4xl font-thin tracking-[0.25em]">
                    DISCOVER RHYTHMS
                  </span>
                  <span className="block text-xl tracking-[0.2em] font-extralight mt-4">
                    響き渡る音の先へ
                  </span>
                </p>
              </div>

              {/* プラットフォームの特徴 */}
              <div className="grid grid-cols-3 gap-12 mt-8">
                <div className="text-center">
                  <div className="text-indigo-300 text-lg font-medium mb-2">DISCOVER</div>
                  <p className="text-white/80 text-sm font-light">
                    新たな才能との出会いと
                    <br />
                    感動の瞬間を
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-indigo-300 text-lg font-medium mb-2">CONNECT</div>
                  <p className="text-white/80 text-sm font-light">
                    プレイヤーと観客を
                    <br />
                    つなぐ架け橋に
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-indigo-300 text-lg font-medium mb-2">GROW</div>
                  <p className="text-white/80 text-sm font-light">
                    コミュニティの
                    <br />
                    持続的な成長を
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
