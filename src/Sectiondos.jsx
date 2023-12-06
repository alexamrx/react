import comic1 from '/comic1.png'
import comic2 from '/comic2.png'
import comic3 from '/comic3.png'
import fondo from '/fondo.png';
function Sectiondos(props) {

    return (
        <>
        <br/>
         <br/>
         <br/>
         <br/>
         <a name="Comic">
            <section>
                <div className="container text-center " style={{ margintop: '90px' , backgroundImage:`url(${fondo})` , widt: '1200px'}}  >
                <div className="row">
               
                    <div className="text-2 col-xl-10 col-lg-12 col-md-12 mx-auto">
                        {props.texto}
                    </div>
                    
                    <div id="carouselExampleControlsNoTouching" className=" carousel slide mt-5" data-bs-touch="false" >
                        <div className=" carousel-inner">
                            <div className="col-10 carousel-item active">
                                <img src={comic1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="col-10 carousel-item">
                                <img src={comic2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="col-10 carousel-item">
                                <img src={comic3} className="d-block w-100 " alt="..." />
                                <div className="buton d-flex">
                                    <a href="https://youtu.be/RrCYR7l8zlI" target='blank_'><button type="button" className="btn btn-outline-light">Ver video</button></a>
                                   <a href="#Perso"> <button type="button" className="btn btn-outline-light">Personajes</button></a>
                                </div>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
       </section> 
       </a>

    </>
  );
}

export default Sectiondos;