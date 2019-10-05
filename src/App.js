import React from 'react';
import Container from './nohooks/ContainerNoHooks';
import './App.css';
import ContainerDenganHooks from './hooks/ContainerHooks';

function App() {
  return (
    <div className="App">
        <h3>Hooks memungkinkan kita menaruh state pada function component. Hal ini dapat memudahakan kita memisahkan logic yang berhubungan dengan server/api (Container component /Class Component) dengan logic yang tidak berhubungan dengan API seperti toogle Hide/Show yang dapat kita taruh pada function compononent(View Component) </h3>
        
        <h4>Contoh Kasus : ketika <span style={{"color" : "red"}}>tidak</span> menggunakan hooks maka otomatis data state &#123; <span style={{"color":"red"}}>show : true </span>, restaurant:[] &#125; dan method toogle akan ditaruh pada container dan di props pada  view</h4>
        <h4>Sebenarnya dapat juga dapat ditaruh pada child component dimana child component merupakan class based component akan tetapi tetap saja jumlah code lebih banyak dibanding menggunakan hooks </h4>
        <p>Dengan cara ini code yang sebatas logic penampilan akan tercampur dengan code logic yang berhubungan dengan data API, hal ini membuat code menjadi kompleks</p>
        <p>Dengan cara ini juga akan terjadi pemborosan performance</p>
        <p>Contoh : pada render method container :</p>
        <p>
            render()&#123; <br/>
                ListRestaurant<br/>
                Component2<br/>
                Component3<br/>
            &#125;
            <br/>
            ketika Component ListRestaurant melakukan trigger method toogleHideShow, state container akan diupdate dan mengakibatkan re render dimana semua Component pada container.
        </p>
        
        <h2>Contoh Code Tidak Menggunakan Hooks : coba lihat pada console, tekan tombol hide </h2>
        <Container/>
        <br/>
        <br/>
        <br/>
        <h2>Contoh Code Menggunakan Hooks : coba lihat pada console, tekan tombol hide </h2>
        <ContainerDenganHooks/>
        <h1>Sekian baru itu saja yang saya use case yang saya coba di react hooks pak Haday, saya belum pake useEffect. Atas perhatiannya saya ucapkan terima kasih</h1>
        <h1 style={{"color" : "red"}}>You can Donation in Here Email : hokandre@mhs.mdp.ac.id (fast reply)</h1>
    </div>
  );
}

export default App;
