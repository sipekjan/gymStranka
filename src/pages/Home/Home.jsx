import Background from "../../components/Background/Background"
import Header from "../../components/Header/Header"
import "./Home.css";

export default function Home() {

    return(
        <>
            <Header/>
            <Background/>
            <div className="Home-content1">
                <h1 className="Home-title">OLD SCHOOL GYM</h1>
                <h1 className="Home-subtitle">Proč si <b className="Home-orange">nás</b> vybrat</h1>
                <a href="#Home-scroll"><div className="Home-triangle"></div></a>
            </div>
            <div className="Home-content2" id="Home-scroll">
                <div className="Home-list">
                    <div className="Home-obj">
                        <div className="Home-objTitle">
                        Klasické a moderní vybavení
                        </div>
                        <div className="Home-Text">
                        Naše posilovna je vybavena širokou škálou klasických i moderních posilovacích strojů, které uspokojí potřeby jak začátečníků, tak pokročilých cvičenců.
                        <img src="./src/assets/equipment.png" alt="Equipment" className="Home-equipment-img" />
                        <h3>Motivující prostředí</h3> Naše posilovna je navržena tak, aby vás motivovala a inspirovala každý den.
                        </div>
                    </div>
                    <div className="Home-obj">
                        <div className="Home-objTitle">
                        Odborné vedení
                        </div>
                        <div className="Home-Text">
                        Naši zkušení trenéři jsou zde, aby vám poskytli profesionální rady a pomohli vám dosáhnout vašich fitness cílů.
                        <img src="./src/assets/people.png" alt="People" className="Home-people-img" />
                        <h3>Individuální přístup</h3> Přizpůsobíme tréninkový plán vašim specifickým potřebám a cílům.
                        </div>
                    </div>
                    <div className="Home-obj">
                        <div className="Home-objTitle">
                        Komunitní atmosféra
                        </div>
                        <div className="Home-Text">
                        Jsme hrdí na naši přátelskou a podporující komunitu, kde se členové navzájem motivují a podporují.
                        <img src="./src/assets/ticket.png" alt="Ticket" className="Home-ticket-img" />
                        <h3>Flexibilní členství</h3> Nabízíme různé možnosti členství, které odpovídají vašemu životnímu stylu a rozpočtu.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}