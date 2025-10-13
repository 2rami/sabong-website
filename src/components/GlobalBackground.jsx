const GlobalBackground = () => {
  return (
    <>
      {/* Light rays 배경 효과 */}
      <div className="light-rays">
        <div className="light-ray"></div>
        <div className="light-ray"></div>
        <div className="light-ray"></div>
        <div className="light-ray"></div>
        <div className="light-ray"></div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* 브랜드 이미지 */}
        <img
          src="/images/brand-image.png"
          alt="사봉 브랜드"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  )
}

export default GlobalBackground