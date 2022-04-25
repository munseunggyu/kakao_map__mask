import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import './App.css';
import { Map,MapMarker,MarkerClusterer,useMap,MapTypeId } from 'react-kakao-maps-sdk';
import Nav from './nav';
const { kakao } = window;

const KeyWordBtnBlock = styled.div`
  position:fixed;
  top:5px;
  left:5px;
  z-index:5;
  button{
    margin-right:5px;
  }
`
const Url = styled.div`
  margin-top:350px;
 
`
const Hi = styled.div`
   position:fixed;
  top:350px;
`

function App() {
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [keyWord,setKeyWord] = useState("")

  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()
    ps.keywordSearch(keyWord, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  console.log(data)
  // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []
        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            url: data[i].place_url
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    })
  }, [map,keyWord])
  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "100%",
        height: "350px",
      }}
      level={3}
      onCreate={setMap}
    >
      <KeyWordBtnBlock>
        <button onClick={() => {setKeyWord("순천 맛집")}}>순천 맛집</button>
        <button onClick={() => {setKeyWord("순천 행사")}}>순천 행사</button>
      </KeyWordBtnBlock>
      {markers.map((marker) => (
        <>
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.content && (
            <>
            <div style={{color:"#000"}}>{marker.content}</div>
            </>
          )}
        </MapMarker>
        {info &&info.content === marker.content && (
            <>
            {marker.url}
            </>
          )}
      </>
      ))}
    </Map>
  )
}

export default App;
