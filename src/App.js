import './App.css';

function App() {
 
  return (
    <div className="container-fluid">
    <div className="bs">
      <h2> Calculadora de índice de massa corporal</h2>
     
    </div>
    <div className="main">
    <form onSubmit={calcular}>
      
      <h4> Digite a altura </h4>
      <input type="text" id="txt-altura" placeholder="Altura"/>
      <h4> Digite o peso </h4>
      <input type="text" id='txt-peso' placeholder="Peso"/>
      
      <br></br><br></br>

      <input type="submit" className="btn btn-primary" value="calcular"/>
      <br></br><br></br>

      <h4>índice</h4>
      <input type="text" id='result' placeholder='indice'/><br></br><br></br>
      <h4>classificação</h4>
      <input type="text" id='result-class'/>
      <br></br><br></br>
      <input type="reset" className="btn btn-primary" id="btn-limpar" value="limpar"/>
      </form>

      </div>
      
      </div>
           
  );

  function calcular(e){

    e.preventDefault();
    var altura = (document.getElementById("txt-altura").value);
    var peso = (document.getElementById("txt-peso").value);

    altura = parseFloat(altura.replace(',','.'));
    peso = parseFloat(peso.replace(',','.'));  
           
     if (peso === 0 || altura === 0){
       document.getElementById("result-class").value = "Digite um valor valido"
         } else {

            var indice = (peso/(altura*altura));
                    
            document.getElementById("result").value = indice.toFixed(2);
       
      if(indice < 18.5){
        document.getElementById("result-class").value = "Abaixo do peso";
          }else if(indice >= 18.5 && indice <= 24.9 ){
            document.getElementById("result-class").value = "Peso Ideal";
                }else if(indice >= 25.00 && indice <= 29.9){
                   document.getElementById("result-class").value = "Sobrepeso";
                        }else if(indice >= 30.00 && indice <= 34.9 ){
        document.getElementById("result-class").value = "Obesidade Grau I";
          }else if(indice >= 35.00 && indice <= 39.9){
            document.getElementById("result-class").value = "Obesidade Grau II";
              }else if(indice >= 40.00){
                document.getElementById("result-class").value = "Obesidade Grau III";
                  }
            

     }         
   
  }

  
}
export default App;
