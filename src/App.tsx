import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    let container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    let option =  {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, option); // 지도 생성 및 객체 리턴
  }, [])

  return (
    <div className="App">
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
}

export default App;