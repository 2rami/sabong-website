import { useGsapAnimation } from '../hooks/useGsapAnimation'

const BathSalt = () => {
  const titleRef = useGsapAnimation('fadeUp', 0)
  const image1Ref = useGsapAnimation('fadeUp', 0.1)
  const image2Ref = useGsapAnimation('fadeUp', 0.3)
  const image3Ref = useGsapAnimation('fadeUp', 0.5)
  const textRef = useGsapAnimation('fadeUp', 0.7)

  const images = [
    {
      src: "/images/bathsalt/배쓰밤 아로마틱.png",
      name: "라벤더 릴랙싱",
      subtitle: "Lavender Relaxing",
      ref: image1Ref,
      position: "left-[8%] top-[20%]",
      rotation: "-rotate-3",
      scale: "scale-95"
    },
    {
      src: "/images/bathsalt/배쓰밤 샌달우드.png",
      name: "샌달우드 캄",
      subtitle: "Sandalwood Calm",
      ref: image2Ref,
      position: "left-[38%] top-[20%]",
      rotation: "rotate-2",
      scale: "scale-100"
    },
    {
      src: "/images/bathsalt/배쓰밤 자스민.png",
      name: "자스민 프레시",
      subtitle: "Jasmine Fresh",
      ref: image3Ref,
      position: "right-[10%] top-[20%]",
      rotation: "rotate-4",
      scale: "scale-95"
    }
  ]

  return (
    <section className="min-h-[130vh] flex items-center bg-transparent relative overflow-hidden py-20 mb-[100vh]">
      {/* 도트 패턴 */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({length: 50}).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 py-12 relative z-10 w-full h-full flex flex-col justify-between">

        {/* 제목 */}
        <div ref={titleRef} className="mb-8">
          <h2 className="font-display text-4xl font-light text-stone-100 tracking-wide mb-3">
            <div className="staggered-line">
              <span className="staggered-text">Bath Balm</span>
            </div>
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-stone-400 staggered-text"></div>
            <p className="text-xs tracking-[0.3em] text-stone-300 uppercase font-light staggered-text">
              Natural Bath Balm
            </p>
          </div>
        </div>

        {/* 이미지 자유 배치 */}
        <div className="relative flex-1 w-full min-h-[500px]">
          {images.map((image, index) => (
            <div
              key={index}
              ref={image.ref}
              className={`absolute group cursor-pointer ${image.position} ${image.rotation} ${image.scale} transition-all duration-700 ease-out hover:z-50`}
            >
              <div className="relative p-8 hover:p-4 transition-all duration-500">
                <div className="aspect-[2/3] w-56 relative">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    style={{
                      animation: 'imageFloat 8s ease-in-out infinite',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="font-omni text-xl mb-2 tracking-wide">{image.name}</h3>
                    <p className="font-pretendard text-sm font-light opacity-90 tracking-wider">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 설명 텍스트 */}
        <div ref={textRef} className="text-center max-w-2xl mx-auto mt-8 pb-8">
          <p className="font-pretendard text-xl text-stone-200 leading-relaxed mb-4">
            <span className="staggered-text"><span className="font-bold">천연 식물성 오일</span>과 <span className="font-bold">에센셜 오일</span>의 완벽한 조화</span>
          </p>
          <p className="font-pretendard text-lg text-stone-300 leading-relaxed">
            <span className="staggered-text">따뜻한 목욕물에 녹여 사용하면 <span className="font-bold">피부에 영양을 공급</span>하며 <span className="font-bold">몸과 마음의 긴장을 풀어줍니다</span></span>
          </p>
        </div>

      </div>
    </section>
  )
}

export default BathSalt