import { useGsapAnimation } from '../hooks/useGsapAnimation'

const Perfume = () => {
  const titleRef = useGsapAnimation('fadeUp', 0)
  const perfume1Ref = useGsapAnimation('scaleIn', 0.2)
  const perfume2Ref = useGsapAnimation('scaleIn', 0.4)

  const perfumes = [
    {
      image: "/images/perfume/퍼퓸 아로마틱.png",
      name: "오 드 퍼퓸",
      subtitle: "Eau de Parfum",
      notes: {
        top: "베르가못, 자스민",
        middle: "로즈, 일랑일랑",
        base: "샌달우드, 머스크"
      }
    },
    {
      image: "/images/perfume/퍼퓸 자스민.png",
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
    <section className="h-screen flex items-center bg-transparent relative overflow-hidden py-20 mb-[100vh]">

      <div className="container mx-auto px-8 py-12 relative z-10 w-full h-full flex flex-col">

        {/* 제목 */}
        <div ref={titleRef} className="mb-8">
          <h2 className="font-display text-4xl font-light text-stone-100 tracking-wide mb-3">
            <div className="staggered-line">
              <span className="staggered-text">Perfume</span>
            </div>
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-stone-400 staggered-text"></div>
            <p className="text-xs tracking-[0.3em] text-stone-300 uppercase font-light staggered-text">
              Signature Fragrance
            </p>
          </div>
        </div>

        {/* 퍼퓸 그리드 */}
        <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto flex-1 items-center">

          {/* 첫 번째 퍼퓸 */}
          <div ref={perfume1Ref}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-8">
                <div className="aspect-[3/4] max-w-xs mx-auto">
                  <img
                    src={perfumes[0].image}
                    alt={perfumes[0].name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    style={{
                      animation: 'imageFloat 8s ease-in-out infinite'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="space-y-1 text-sm opacity-90 font-light">
                      <p className="staggered-text"><span className="font-medium">Top:</span> {perfumes[0].notes.top}</p>
                      <p className="staggered-text"><span className="font-medium">Middle:</span> {perfumes[0].notes.middle}</p>
                      <p className="staggered-text"><span className="font-medium">Base:</span> {perfumes[0].notes.base}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-omni text-xl mb-2 text-stone-100 staggered-text">{perfumes[0].name}</h3>
                <p className="font-pretendard text-base font-light text-stone-300 staggered-text">{perfumes[0].subtitle}</p>
              </div>
            </div>
          </div>

          {/* 두 번째 퍼퓸 */}
          <div ref={perfume2Ref}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-8">
                <div className="aspect-[3/4] max-w-xs mx-auto">
                  <img
                    src={perfumes[1].image}
                    alt={perfumes[1].name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    style={{
                      animation: 'imageFloat 8s ease-in-out infinite'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="space-y-1 text-sm opacity-90 font-light">
                      <p className="staggered-text"><span className="font-medium">Top:</span> {perfumes[1].notes.top}</p>
                      <p className="staggered-text"><span className="font-medium">Middle:</span> {perfumes[1].notes.middle}</p>
                      <p className="staggered-text"><span className="font-medium">Base:</span> {perfumes[1].notes.base}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-omni text-xl mb-2 text-stone-100 staggered-text">{perfumes[1].name}</h3>
                <p className="font-pretendard text-base font-light text-stone-300 staggered-text">{perfumes[1].subtitle}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Perfume