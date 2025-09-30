import { useSectionAnimation } from '../hooks/useSectionAnimation'

const Footer = () => {
  const sectionRef = useSectionAnimation()

  return (
    <footer ref={sectionRef} className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white py-20 min-h-screen flex items-center relative overflow-hidden">
      {/* 어두운 패턴 */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({length: 30}).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-omni text-4xl font-light mb-4 text-stone-100">SABONG</h3>
            <p className="font-pretendard text-stone-300">
              프리미엄 바스 & 뷰티 브랜드
            </p>
          </div>

          <div>
            <h4 className="font-omni text-xl font-light mb-6 text-stone-200">제품</h4>
            <ul className="space-y-3 font-pretendard text-stone-400">
              <li className="hover:text-stone-200 transition-colors cursor-pointer">바디 워시</li>
              <li className="hover:text-stone-200 transition-colors cursor-pointer">입욕제</li>
              <li className="hover:text-stone-200 transition-colors cursor-pointer">퍼퓸</li>
              <li className="hover:text-stone-200 transition-colors cursor-pointer">기프트 세트</li>
            </ul>
          </div>

          <div>
            <h4 className="font-omni text-xl font-light mb-6 text-stone-200">고객 지원</h4>
            <ul className="space-y-3 font-pretendard text-stone-400">
              <li className="hover:text-stone-200 transition-colors cursor-pointer">문의하기</li>
              <li className="hover:text-stone-200 transition-colors cursor-pointer">배송 정보</li>
              <li className="hover:text-stone-200 transition-colors cursor-pointer">반품/교환</li>
              <li className="hover:text-stone-200 transition-colors cursor-pointer">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-omni text-xl font-light mb-6 text-stone-200">소셜 미디어</h4>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <span className="text-sm font-light text-stone-300">IG</span>
              </div>
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <span className="text-sm font-light text-stone-300">FB</span>
              </div>
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <span className="text-sm font-light text-stone-300">YT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 text-center">
          <p className="font-pretendard text-stone-400">&copy; 2025 SABONG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer