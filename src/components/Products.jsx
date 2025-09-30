import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useSectionAnimation } from '../hooks/useSectionAnimation'
import { useEffect } from 'react'

const Products = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const sectionRef = useSectionAnimation()

  // 컴포넌트 마운트 시 초기 transition 설정
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

  const products = [
    {
      name: "라벤더 아로마틱",
      image: "/images/main/lavender-aromatic.png",
      description: "편안한 라벤더 향기로 하루의 피로를 풀어주는 특별한 향",
      bgColor: '#f5f3e7',
      textColor: '#4a5568'
    },
    {
      name: "샌달우드 & 로즈",
      image: "/images/main/sandalwood-rose.png",
      description: "고급스러운 샌달우드와 로즈의 조화로운 블렌딩",
      bgColor: '#4a3728',
      textColor: '#f7fafc'
    },
    {
      name: "자스민",
      image: "/images/main/jasmine.png",
      description: "싱그러운 자스민 향기로 활력을 불어넣는 향",
      bgColor: '#0f0f0f',
      textColor: '#f7fafc'
    }
  ]


  return (
    <section ref={sectionRef} className="pt-32 pb-20 bg-transparent relative" style={{ overflow: 'visible' }} id="collection-bg">
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

      <div className="container mx-auto px-8 relative z-10 mt-16" style={{ overflow: 'visible' }}>

        {/* 제목 */}
        <div
          ref={titleRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-5xl font-light text-gray-900 tracking-wide mb-4" id="collection-title">
            <div className="staggered-line">
              <span className="staggered-text">Collection</span>
            </div>
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto" id="collection-line"></div>
        </div>

        {/* 제품 그리드 */}
        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto" style={{ overflow: 'visible' }}>

          {products.map((product, index) => {
            const floatAnimations = [
              'animate-float-1',
              'animate-float-2',
              'animate-float-3'
            ];

            return (
            <div
              key={index}
              className={`${floatAnimations[index]}`}
              style={{
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div
                className="group cursor-pointer relative card-hover"
                style={{ zIndex: 1 }}
                onMouseEnter={() => {
                  // 배경색 변경
                  const bg = document.getElementById('collection-bg');
                  const title = document.getElementById('collection-title');
                  const line = document.getElementById('collection-line');
                  const titles = document.querySelectorAll('.product-title');
                  const descs = document.querySelectorAll('.product-desc');

                  if (bg) bg.style.backgroundColor = product.bgColor;
                  if (title) title.style.color = product.textColor;
                  if (line) line.style.backgroundColor = product.textColor;
                  titles.forEach(el => el.style.color = product.textColor);
                  descs.forEach(el => el.style.color = product.textColor);
                }}
                onMouseLeave={() => {
                  // 색상 원래대로
                  const bg = document.getElementById('collection-bg');
                  const title = document.getElementById('collection-title');
                  const line = document.getElementById('collection-line');
                  const titles = document.querySelectorAll('.product-title');
                  const descs = document.querySelectorAll('.product-desc');

                  if (bg) bg.style.backgroundColor = 'transparent';
                  if (title) title.style.color = '#111827';
                  if (line) line.style.backgroundColor = '#d1d5db';
                  titles.forEach(el => el.style.color = '#111827');
                  descs.forEach(el => el.style.color = '#6b7280');
                }}
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative" style={{
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
                  transition: 'box-shadow 0.5s ease'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center px-4 pb-4">
                  <h3 className="font-omni text-lg font-medium text-gray-900 mb-1 product-title">{product.name}</h3>
                  <p className="font-pretendard text-xs text-gray-500 product-desc tracking-wide">{product.description}</p>
                </div>
              </div>
            </div>
            );
          })}

        </div>
      </div>
    </section>
  )
}

export default Products