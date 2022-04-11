import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import './App.css';
import { Map,MapMarker } from 'react-kakao-maps-sdk';

const MapBlock = styled.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: medium;
    border-color: #D8D8D8;
`
function App() {
  let [datas,setDatas] = useState([{
    "id":1,
    "경도":37.55469055521677,
    "위도":126.97062049345743,
    "text":'서울역'
  },{
    "id":2,
    "경도":37.56000302825312,
    "위도": 126.97540593203321,
    "text":'숭례문'
  },{
    "id":3,
    "경도":37.56042199060154, 
    "위도":126.97540013527656,
    "text":'롯데마트'
  }])
  return (
    <div className="App">
      <Map
      center={{ lat: 37.56000302825312, lng: 126.97540593203321 }}
      style={{ width: "100vw", height: "100vh" }}
      >
        {
          datas.map((data) => {
           return( <MapMarker position={{ lat: data.경도, lng: data.위도 }}>
              <div style={{color:"#000"}}>{data.text}!</div>
            </MapMarker>)
          })
        }
      </Map>
    </div>
  );
}

export default App;
