
import fondo from '/fondo.png';
import logo from '/logo.png';
import wpp from '/wpp.png';
import instagram from '/instagram.png'
function Sectioncinco() {

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <section>
                <div className="container" style={{ marginTop: '90px' , backgroundImage:`url(${fondo})` , widt: '1200px'}}>

                    <div className="row">
                        <footer>
                            <div className="col-12 text-center">
                                <img src={logo} alt="" style={{width: '300px' , height: '200px'}} />
                            </div>
                            <div className="col-12 text-center mt-3">
                                <img className="icono-1" src={wpp} alt="" style={{width: '50px' , height: '50px'}} />
                                <img className="icono-" src={instagram} alt="" style={{width: '50px' , height: '50px'}} />
                            </div>
                        </footer>
                </div>
            </div>
        </section >


        </>
    );
}

export default Sectioncinco;