import Background from "../../components/Background/Background"
import Header from "../../components/Header/Header"
import "./Contact.css";

export default function Contact() {

    return(
        <>
            <Header/>
            <Background/>
            <div className="Contact-content">
                <h1 className="Contact-title">Kontakt</h1>
                <h1 className="Contact-subtitle">tel: 721 205 697</h1>
                <h1 className="Contact-subtitle">e-mail: Old.school.gym.mb@gmail.com</h1>
                <h1 className="Contact-subtitle">adresa: Václavkova 1040, Mladá Boleslav, 29301</h1>
                <h1 className="Contact-subtitle">facebook: OLD School GYM </h1>
                <h1 className="Contact-subtitle">instagram: old.school.gym.mb</h1>
            </div>
        </>
    )
}