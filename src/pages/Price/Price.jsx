import Background from "../../components/Background/Background"
import Header from "../../components/Header/Header"
import "./Price.css";

export default function Price() {

    return(
        <>
            <Header/>
            <Background/>
            <div className="Price-content">
        
        <h1 className="Price-title">Ceník</h1>
        <h2 className="Price-subtitle">
        <div className="Price-text">
          Vstup dospělý<br />
          95Kč<br />
          Vstup student<br />
          85Kč<br />
          10x vstup<br />
          850Kč<br />
          10x vstup student<br />
          750Kč<br />
         Měsiční permanentka<br />
          900Kč<br />
          3 měsiční permanentka<br />
          1500Kč<br />



        </div>
    
        </h2>
      </div>
        </>
    )
}