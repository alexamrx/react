
import fondo from '/fondo.png';
import logo from '/logo.png';



function Header() {

  return (
    <>
<section>

<div className="container text-center " style={{backgroundImage:`url(${fondo})` , widt: '1200px'}} >


    <div className="row">


        <div className="col-xl-2 col-lg-12 col-md-12 "><img src={logo} alt="" style={{width: '200px' , height: '100px'}}/></div>
        <div  className="Menu" style={{flex: '50px'}}>
           <a href="#Equipo"><div className="text col-xl-12   mt-5">Equipo de trabajo</div></a> 
            <a href="#Comic"><div className="text col-xl-12   mt-5">Cómic</div></a>
            <a href="#Inicio"><div className="text col-xl-12    mt-5">Inicio</div></a>
            
        </div>
        <hr/>
        
    </div>
    
</div>
</section>


    </>
  );
}

export default Header;