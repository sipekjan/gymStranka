import "./Links.css"

export default function Links() {

    const redirectFacebook = () => {
        window.location.href = "https://www.facebook.com/Old.school.gym.mb/";
    };

    const redirectInstagram = () => {
        window.location.href = "https://www.instagram.com/oldschoolthegym/";
    };


    return(
        <>
            <div className="Links-list">
                <img src="./src/assets/facebook.png" alt="Facebook" className="Links-img" onClick={redirectFacebook}/>
                <img src="./src/assets/instagram.png" alt="Instagram" className="Links-img" onClick={redirectInstagram}/>
            </div>
        </>
    )
}