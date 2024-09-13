import React from "react";
import "./Baslik.css"
function Baslik() {
    return (
        <header>
            <img src="../Assets/Iteration-1-assets/logo.svg" alt="" />
            <div>
            <a href="/">Ana Sayfa</a>
            <a href="/siparis">Sipariş Oluştur</a>
            </div>
        </header>
    )
}
export default Baslik;