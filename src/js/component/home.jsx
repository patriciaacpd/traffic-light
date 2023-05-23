import React, {useState} from "react";

const Home = () => {

	let [status,setStatus] = useState("desactivado");
	let [rojo,setRojo] = useState("desactivado");
	let [amarillo,setAmarillo] = useState("desactivado");
	let [verde,setVerde] = useState("desactivado");


	const handleStatus = (statusParametro) => {
		

		if (statusParametro==="activadorojo"){
			setStatus (statusParametro)
		}
		else if (statusParametro==="activadoamarillo"){
			setStatus (statusParametro)
		}
		else if (statusParametro==="activadoverde"){
			setStatus (statusParametro)
		}
		

	};



	return (
		
		<div className="container d-flex flex-column justify-content-start align-items-center sectionall">
			<div className="bg-black w-5 top"><p></p></div>
			<div className="divgeneralnegro bg-black d-flex flex-column mybox rounded">
				<button onClick= {() => handleStatus("activadorojo")} type="button" className={`btn btn-danger rounded-circle my-2 mx-2  ${status  === "activadorojo"  ? "light" : ""}`}><p></p></button>
				<button onClick={() => handleStatus("activadoamarillo")} type="button" className={`btn btn-warning rounded-circle my-2 mx-2 ${status  === "activadoamarillo" ? "light" : ""}`}><p></p></button>
				<button onClick={() => handleStatus("activadoverde")} type="button" className={`btn btn-success rounded-circle my-2 mx-2 ${status  === "activadoverde" ? "light" : ""}`}><p></p></button>

			</div>
		</div>



	);
};

export default Home;
