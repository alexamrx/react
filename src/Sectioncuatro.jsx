import fondo from '/fondo.png';
import alexa from '/alexa.png';
import samuel from '/samuel.png';
import juan from '/juan.png';

function Sectioncuatro() {

    return (
        <>
        <br/>
        <br/>
        <br/>
        <a name="Equipo">
            <section>
                <div className="container text-center " style={{marginTop: '90px' , backgroundImage:`url(${fondo})` , widt: '1200px'}} >
                    <div className="row">
                        <div className="text-2 col-xl-10 col-lg-12 col-md-12 mx-auto">
                            Integrantes
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12  mt-5">
                            <img src={alexa} alt="" style={{width: '350px' , height: '500px'}}/>
                                <div className="info">
                                    <p>
                                        <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapseWidthExample">
                                            Ver más
                                        </button>
                                    </p>
                                    <div style={{minHeight: '120px'}}>
                                        <div className="collapse collapse-horizontal" id="collapse">
                                            <div className="card card-body mx-auto" style={{width: '300px'}}>
                                                Edad: 18
                                                Soy una persona extrovertida, sociable y energética
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 mt-5">
                            <img src={samuel} alt="" style={{width: '350px' , height: '500px'}}/>
                                <div className="info">
                                    <p>
                                        <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidth" aria-expanded="false" aria-controls="collapseWidthExample">
                                            Ver más
                                        </button>
                                    </p>
                                    <div style={{minHeight: '120px'}}>
                                        <div className="collapse collapse-horizontal" id="collapseWidth">
                                            <div className="card card-body mx-auto" style={{width: '300px'}}>
                                                Edad: 17
                                                Soy una persona extrovertida, sociable y energética
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 mt-5" >
                            <img src={juan} alt="" style={{width: '350px' , height: '500px'}}/>
                                <div className="info">
                                    <p>
                                        <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                            Ver más
                                        </button>
                                    </p>
                                    <div style={{minHeight: '120px'}}>
                                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                            <div className="card card-body mx-auto" style={{width: '300px'}}>
                                                Edad: 17
                                                Soy una persona extrovertida, sociable y energética
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </section>
            </a>
    </>
            );
}

            export default Sectioncuatro;