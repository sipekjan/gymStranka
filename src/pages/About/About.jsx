import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import "./About.css";

export default function About() {
  return (
    <>
      <Header />
      <Background />
      <div className="About-content">
        
        <h1 className="About-title">OLD SCHOOL GYM</h1>
        <h2 className="About-subtitle">
        <div className="About-text">
          <h3>Old School Gym</h3> je více než jen posilovna – je to místo, kde se setkává
          tradice s vášní pro fitness. Naše posilovna v Mladé Boleslavi byla
          založena s cílem nabídnout autentické a přátelské prostředí pro
          všechny, kdo to myslí s tréninkem vážně.
          </div>
          <div className="About-text">
          <h3>Naše mise</h3>
          Naším posláním je poskytovat vysoce kvalitní fitness zážitek, který
          podporuje zdravý životní styl a fyzickou kondici všech našich členů.
          Věříme v poctivý trénink a starou školu fitness, kde tvrdá práce a
          oddanost přinášejí výsledky.
          </div>
          <div className="About-time">
          <h3>Otevírací doba</h3>
          Po 6:30-21:00<br></br>
          Út 6:30-21:00<br></br>
          St 6:30-21:00<br></br>
          Čt 6:30-21:00<br></br>
          Pá 6:30-21:00<br></br>
          So 8:00-13:00<br></br>
          Ne 14:00-20:00
          </div>
        </h2>
      </div>
    </>
  );
}
