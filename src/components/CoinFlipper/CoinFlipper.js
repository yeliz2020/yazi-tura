import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      counter: 0, //atış sayısını tutan sayaç
      headCounter: 0, //tura sayısını tutan sayaç
      tailCounter: 0, // yazı sayısını tutan sayaç
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    //olasılıkları tutan bir array yazıp, random fonk.ile seçileni rand dedğişkenine atayalım
    let possibilities = ["yazi", "tura"];
    let rand = possibilities[Math.floor(Math.random() * possibilities.length)];

    //random fonk. ile rand değişkenine atanan değere göre ilgili state'in sayaç değerini setState ile güncelleyelim
    rand === "yazi"
      ? this.setState({ tailCounter: this.state.tailCounter + 1 })
      : this.setState({ headCounter: this.state.headCounter + 1 });
    //side state'i rand değişkeninin değerine göre "yazi" veya "tura" olarak güncellenir
    this.setState({ side: rand });
    //her tıklamayla atış değerini artırarak state güncellenir
    this.setState({ counter: this.state.counter + 1 });
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1> Yazı mı Tura mı ? </h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}> At! </button>
        <p>
          Toplam <strong> {this.state.counter} </strong>
          atıştan<br /> <strong> {this.state.headCounter} </strong>
          tura<br /> <strong> {this.state.tailCounter} </strong>
          yazı
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
