import Background from "../../components/Background/Background"
import Header from "../../components/Header/Header"
import "./Location.css"

export default function Location() {

    return(
        <>
            <Header/>
            <Background/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4274.622902261911!2d14.904808750554105!3d50.427949372271506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955daeb486daf%3A0xb182fea202f9d508!2sOLD%20School%20GYM!5e0!3m2!1scs!2scz!4v1716732637762!5m2!1scs!2scz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="Location-map"></iframe>
        </>
    )
}