import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useSectionAnimation } from '../hooks/useSectionAnimation'
import { useEffect, useState } from 'react'

const Products = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const sectionRef = useSectionAnimation()
  const [activeIndex, setActiveIndex] = useState(2) // 자스민부터 시작
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [scrollOpacity, setScrollOpacity] = useState(0)

  const products = [
    {
      name: "라벤더 아로마틱",
      image: "/images/main/lavender-aromatic.png",
      description: "편안한 라벤더 향기로 하루의 피로를 풀어주는 특별한 향",
      bgColor: '#F4F3E1',
      textColor: '#4a5568'
    },
    {
      name: "샌달우드 & 로즈",
      image: "/images/main/sandalwood-rose.png",
      description: "고급스러운 샌달우드와 로즈의 조화로운 블렌딩",
      bgColor: '#28170B',
      textColor: '#f7fafc'
    },
    {
      name: "자스민",
      image: "/images/main/jasmine.png",
      description: "싱그러운 자스민 향기로 활력을 불어넣는 향",
      bgColor: '#212123',
      textColor: '#f7fafc'
    }
  ]

  // 스와이프 핸들러
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // 왼쪽으로 스와이프
      setActiveIndex((prev) => (prev + 1) % products.length)
    }

    if (touchStart - touchEnd < -75) {
      // 오른쪽으로 스와이프
      setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
    }
  }

  // 컴포넌트 마운트 시 초기 transition 설정 및 배경색 변경
  useEffect(() => {
    // CSS로 부드러운 전환 설정
    const style = document.createElement('style');
    style.textContent = `
      #collection-bg {
        transition: background-color 1.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
      }
      #collection-title {
        transition: color 1.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
      }
      #collection-line {
        transition: background-color 1.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
      }
      .product-title {
        transition: color 1.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
      }
      .product-desc {
        transition: color 1.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [])

  // 스크롤에 따른 배경색 투명도 조절
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const collectionSnapPoint = 839.5 // Collection 섹션이 스냅되는 지점
      const fadeInDistance = 300 // 페이드 인 거리
      const fadeOutDistance = 500 // 페이드 아웃 거리

      let newOpacity = 0;

      // Collection 진입 전: 서서히 페이드 인
      if (scrollY < collectionSnapPoint) {
        const fadeInStart = collectionSnapPoint - fadeInDistance
        newOpacity = Math.max(0, Math.min(1, (scrollY - fadeInStart) / fadeInDistance))
      }
      // Collection 이후: 서서히 페이드 아웃
      else {
        newOpacity = Math.max(0, 1 - (scrollY - collectionSnapPoint) / fadeOutDistance)
      }

      setScrollOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 초기 호출
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // activeIndex 변경 시 배경색 변경
  useEffect(() => {
    const product = products[activeIndex]
    const bg = document.getElementById('collection-bg');
    const title = document.getElementById('collection-title');
    const line = document.getElementById('collection-line');
    const titles = document.querySelectorAll('.product-title');
    const descs = document.querySelectorAll('.product-desc');

    // RGB 값을 추출하여 투명도 적용
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    const bgColor = hexToRgb(product.bgColor)
    if (bg && bgColor) {
      bg.style.backgroundColor = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${scrollOpacity})`
    }
    if (title) title.style.color = product.textColor;
    if (line) line.style.backgroundColor = product.textColor;
    titles.forEach(el => el.style.color = product.textColor);
    descs.forEach(el => el.style.color = product.textColor);
  }, [activeIndex, products, scrollOpacity])

  return (
    <section ref={sectionRef} className="h-screen flex items-center relative overflow-hidden py-20 mb-[100vh]" id="collection-bg">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-gray-400 rotate-45" style={{
          animation: 'float1 8s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-gray-400 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(156,163,175,0.3) 0%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 border-2 border-gray-400 rotate-45" style={{
          animation: 'float2 6s ease-in-out infinite reverse'
        }}></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-sm" style={{
          animation: 'float3 10s ease-in-out infinite'
        }}></div>
        <div className="absolute top-20 left-1/2 w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rotate-45" style={{
          animation: 'float1 7s ease-in-out infinite'
        }}></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 border border-gray-400 rounded-full" style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(156,163,175,0.2), transparent)',
          animation: 'float2 9s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-14 h-14 border border-gray-400" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float3 11s ease-in-out infinite reverse'
        }}></div>
      </div>

      <div className="container mx-auto px-8 py-12 relative z-10 w-full h-full flex flex-col">

        {/* 제목 */}
        <div
          ref={titleRef}
          className={`mb-8 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl font-light text-gray-900 tracking-wide mb-3" id="collection-title">
            <div className="staggered-line">
              <span className="staggered-text">Collection</span>
            </div>
          </h2>
          <div className="w-16 h-px bg-gray-300" id="collection-line"></div>
        </div>

        {/* 슬라이더 */}
        <div
          className="flex-1 flex items-center justify-center relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="max-w-4xl w-full">
            <div className="relative overflow-hidden">
              {/* 왼쪽 화살표 */}
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + products.length) % products.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 transition-all hover:opacity-70 hover:scale-110"
                style={{ color: products[activeIndex].textColor, filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' }}
              >
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M30 15 L20 25 L30 35" />
                </svg>
              </button>

              {/* 오른쪽 화살표 */}
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % products.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 transition-all hover:opacity-70 hover:scale-110"
                style={{ color: products[activeIndex].textColor, filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' }}
              >
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 15 L30 25 L20 35" />
                </svg>
              </button>

              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`
                }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-8"
                  >
                    <div className="flex flex-col items-center">
                      <div className="aspect-[5/3] w-full overflow-hidden mb-6 relative max-w-2xl" style={{
                        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
                        transition: 'box-shadow 0.5s ease'
                      }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-omni text-2xl font-medium text-gray-900 mb-2 product-title">{product.name}</h3>
                        <p className="font-pretendard text-sm text-gray-500 product-desc tracking-wide">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 인디케이터 */}
            <div className="flex justify-center gap-3 mt-8 relative z-20">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? 'w-10 h-px'
                      : 'w-5 h-px opacity-40 hover:opacity-70'
                  }`}
                  style={{
                    backgroundColor: products[activeIndex].textColor
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products