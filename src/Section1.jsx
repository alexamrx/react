import fondo from '/fondo.png';
function Section1(props) {

  return (
    <>
    <a  name="Inicio">
<section>
  <div className="container" style={{backgroundImage:`url(${fondo})` , widt: '2000px'}}>
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 ">
      <div className="flex text-center mt-5" >
        <img className='d-block w-100' src={props.imagen} alt="" style={{width: '900px'}}/>
      </div>
    </div>
    </div>
  </div>
</section>
</a>

    </>
  );
}

export default Section1;