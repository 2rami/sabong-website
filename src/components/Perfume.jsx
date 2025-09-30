import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useSectionAnimation } from '../hooks/useSectionAnimation'

const Perfume = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const [perfume1Ref, perfume1Visible] = useScrollAnimation(0.2)
  const [perfume2Ref, perfume2Visible] = useScrollAnimation(0.2)
  const [descRef, descVisible] = useScrollAnimation(0.2)
  const sectionRef = useSectionAnimation()

  const perfumes = [
    {
      image: "/images/perfume/Render_Mockup_1600_1200_2025-06-13 (7).jpg",
      name: "오 드 퍼퓸",
      subtitle: "Eau de Parfum",
      notes: {
        top: "베르가못, 자스민",
        middle: "로즈, 일랑일랑",
        base: "샌달우드, 머스크"
      }
    },
    {
      image: "/images/perfume/Render_Mockup_1600_1200_2025-06-13 (8).jpg",
      name: "오 드 뚜왈렛",
      subtitle: "Eau de Toilette",
      notes: {
        top: "라벤더, 레몬",
        middle: "제라늄, 네롤리",
        base: "시더우드, 앰버"
      }
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-lime-300 via-green-200 to-emerald-100 relative overflow-hidden">
      {/* 장식적 요소들 */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-emerald-300/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-8 relative z-10">

        {/* 제목 */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-6xl font-light text-green-800 tracking-wide mb-6">
            <div className="staggered-line">
              <span className="staggered-text">Perfume</span>
            </div>
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-px bg-green-600 staggered-text"></div>
            <p className="text-sm tracking-[0.4em] text-green-700 uppercase font-light staggered-text">
              Signature Fragrance
            </p>
            <div className="w-8 h-px bg-green-600 staggered-text"></div>
          </div>
        </div>

        {/* 퍼퓸 그리드 */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto mb-20">

          {/* 첫 번째 퍼퓸 */}
          <div
            ref={perfume1Ref}
            className={`group cursor-pointer transition-all duration-1000 delay-200 ${
              perfume1Visible
                ? 'opacity-100 rotate-x-0'
                : 'opacity-0 rotate-x-[90deg]'
            }`}
          >
            <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
                 style={{ clipPath: 'polygon(0 5%, 95% 0%, 100% 95%, 5% 100%)' }}>
              <div className="aspect-[4/5]">
                <img
                  src={perfumes[0].image}
                  alt={perfumes[0].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="font-omni text-2xl mb-2 staggered-text">{perfumes[0].name}</h3>
                  <p className="font-pretendard text-lg font-light opacity-90 mb-4 staggered-text">{perfumes[0].subtitle}</p>
                  <div className="space-y-1 text-sm opacity-80 font-light">
                    <p className="staggered-text"><span className="font-medium">Top:</span> {perfumes[0].notes.top}</p>
                    <p className="staggered-text"><span className="font-medium">Middle:</span> {perfumes[0].notes.middle}</p>
                    <p className="staggered-text"><span className="font-medium">Base:</span> {perfumes[0].notes.base}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 두 번째 퍼퓸 */}
          <div
            ref={perfume2Ref}
            className={`group cursor-pointer transition-all duration-1000 delay-400 ${
              perfume2Visible
                ? 'opacity-100 rotate-x-0'
                : 'opacity-0 rotate-x-[90deg]'
            }`}
          >
            <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
                 style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 95%)' }}>
              <div className="aspect-[4/5]">
                <img
                  src={perfumes[1].image}
                  alt={perfumes[1].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="font-omni text-2xl mb-2 staggered-text">{perfumes[1].name}</h3>
                  <p className="font-pretendard text-lg font-light opacity-90 mb-4 staggered-text">{perfumes[1].subtitle}</p>
                  <div className="space-y-1 text-sm opacity-80 font-light">
                    <p className="staggered-text"><span className="font-medium">Top:</span> {perfumes[1].notes.top}</p>
                    <p className="staggered-text"><span className="font-medium">Middle:</span> {perfumes[1].notes.middle}</p>
                    <p className="staggered-text"><span className="font-medium">Base:</span> {perfumes[1].notes.base}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 설명 및 사이즈 */}
        <div
          ref={descRef}
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
            descVisible
              ? 'opacity-100 rotate-x-0'
              : 'translate-y-[100%] rotate-[10deg]'
          }`}
        >
          <p className="font-pretendard text-xl text-green-800 leading-relaxed mb-4">
            <span className="staggered-text">당신만의 특별한 순간을 위한 시그니처 향수</span>
          </p>
          <p className="font-pretendard text-lg text-green-700 leading-relaxed mb-8">
            <span className="staggered-text">프랑스 그라스의 최고급 향료로 블렌딩된 고급스러운 향기를 경험하세요</span>
          </p>

          <div className="flex justify-center items-center space-x-8">
            <span className="font-pretendard text-green-700 staggered-text">50ml Travel Size</span>
            <div className="w-px h-4 bg-green-600 staggered-text"></div>
            <span className="font-pretendard text-green-700 staggered-text">100ml Signature</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Perfume