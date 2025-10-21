import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 라벤더부터 시작
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const products = [
    {
      name: "라벤더 아로마틱",
      image: "/images/main/lavender-aromatic.png",
      description: "편안한 라벤더 향기로 하루의 피로를 풀어주는 특별한 향",
      bgColor: "#F4F3E1",
      textColor: "#4a5568",
    },
    {
      name: "샌달우드 & 로즈",
      image: "/images/main/sandalwood-rose.png",
      description: "고급스러운 샌달우드와 로즈의 조화로운 블렌딩",
      bgColor: "#28170B",
      textColor: "#f7fafc",
    },
    {
      name: "자스민",
      image: "/images/main/jasmine.png",
      description: "싱그러운 자스민 향기로 활력을 불어넣는 향",
      bgColor: "#212123",
      textColor: "#f7fafc",
    },
  ];

  // 스와이프 핸들러
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // 왼쪽으로 스와이프
      setActiveIndex((prev) => (prev + 1) % products.length);
    }

    if (touchStart - touchEnd < -75) {
      // 오른쪽으로 스와이프
      setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    }
  };

  // 가로 스크롤 애니메이션
  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    if (!section || !slider) return;

    // CSS로 부드러운 전환 설정
    const style = document.createElement("style");
    style.textContent = `
      #products {
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

    // 가로 스크롤 애니메이션 설정
    const scrollTween = gsap.to(slider, {
      x: () => -(slider.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${slider.scrollWidth}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const segment = 1 / products.length;
          const newIndex = Math.min(
            products.length - 1,
            Math.floor(progress / segment)
          );
            setActiveIndex(newIndex);
        },
      },
    });

    return () => {
      document.head.removeChild(style);
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, [products.length]);

  // 스크롤에 따른 배경색 투명도 조절
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const collectionSnapPoint = 839.5; // Collection 섹션이 스냅되는 지점
      const fadeInDistance = 300; // 페이드 인 거리
      const fadeOutDistance = 500; // 페이드 아웃 거리

      let newOpacity = 0;

      // Collection 진입 전: 서서히 페이드 인
      if (scrollY < collectionSnapPoint) {
        const fadeInStart = collectionSnapPoint - fadeInDistance;
        newOpacity = Math.max(
          0,
          Math.min(1, (scrollY - fadeInStart) / fadeInDistance)
        );
      }
      // Collection 이후: 서서히 페이드 아웃
      else {
        newOpacity = Math.max(
          0,
          1 - (scrollY - collectionSnapPoint) / fadeOutDistance
        );
      }

      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기 호출
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // activeIndex 변경 시 배경색 변경
  useEffect(() => {
    const product = products[activeIndex];
    const bg = document.getElementById("products");
    const title = document.getElementById("collection-title");
    const line = document.getElementById("collection-line");
    const titles = document.querySelectorAll(".product-title");
    const descs = document.querySelectorAll(".product-desc");

    if (bg) {
      bg.style.backgroundColor = product.bgColor;
    }
    if (title) title.style.color = product.textColor;
    if (line) line.style.backgroundColor = product.textColor;
    titles.forEach((el) => (el.style.color = product.textColor));
    descs.forEach((el) => (el.style.color = product.textColor));
  }, [activeIndex, products]);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="h-screen relative overflow-hidden mb-[100vh]"
      data-bg-id="collection-bg"
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gray-400 rounded-full animate-pulse"></div>
        <div
          className="absolute top-32 right-20 w-16 h-16 border-2 border-gray-400 rotate-45"
          style={{
            animation: "float1 8s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-24 h-24 border border-gray-400 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(156,163,175,0.3) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-32 right-10 w-12 h-12 border-2 border-gray-400 rotate-45"
          style={{
            animation: "float2 6s ease-in-out infinite reverse",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-sm"
          style={{
            animation: "float3 10s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute top-20 left-1/2 w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rotate-45"
          style={{
            animation: "float1 7s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-10 h-10 border border-gray-400 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(156,163,175,0.2), transparent)",
            animation: "float2 9s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-14 h-14 border border-gray-400"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "float3 11s ease-in-out infinite reverse",
          }}
        ></div>
      </div>

      {/* Collection 제목 - 고정 위치 */}
      <div className="absolute top-20 left-16 z-30 pointer-events-none">
        <h2
          className="font-display text-4xl font-light text-gray-900 tracking-wide mb-3"
          id="collection-title"
        >
          <div className="staggered-line">
            <span className="staggered-text">Collection</span>
          </div>
        </h2>
        <div
          className="w-16 h-px bg-gray-300"
          id="collection-line"
        ></div>
      </div>

      <div
        ref={sliderRef}
        className="h-full flex items-center relative z-10"
        style={{ width: `${products.length * 100}vw` }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative"
          >
            {/* 제품 */}
            <div className="flex flex-col items-center justify-center w-full max-w-4xl px-16 translate-y-40">
              <div
                className="aspect-[5/3] w-full overflow-hidden mb-8 relative max-w-2xl mx-auto"
                style={{
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                  transition: "box-shadow 0.5s ease",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  style={{
                    animation: "imageFloat 8s ease-in-out infinite",
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="font-omni text-2xl font-medium text-gray-900 mb-2 product-title">
                  {product.name}
                </h3>
                <p className="font-pretendard text-sm text-gray-500 product-desc tracking-wide">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-20">
        {products.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-700 ease-out ${
              idx === activeIndex ? "w-10 h-px" : "w-5 h-px opacity-40"
            }`}
            style={{
              backgroundColor: products[activeIndex].textColor,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
