import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Outputs are in Inspect Console</h1>
      <button onClick={()=>{
        console.clear(); 
          let a = 20;
        while(a<=100){
          console.log(`a is ${a}`);
          a++;
        }
      }}>while</button>

      <button onClick={()=>{
        console.clear(); 
          let a = 20;
        do{
          console.log(`a is ${a}`);
          a++;
        }while(a<100);
      }}>do while</button>
      
      <button onClick={()=>{
        console.clear(); 
          let a;
        for(a=0;a<20;a++){
          console.log(a);
        }
      }}>for</button>

      <button onClick={()=>{
        console.clear(); 
          let a;
        for(a=0;a<20;a++){
          console.log(a);
          if(a==15){
            break;
          }
        }
      }}>break</button>

      <button onClick={()=>{
          console.clear(); 
        for(let i=1;i<=1000;i++){
          if(i==756 || i==549 || i==643 || i==721 || i==135 || i==601 || i==611){
              continue;
            } 
          for(let j=1;j<=100;j++){
            if(j==6 || j==7 || j==8 || j==9 || j==12 || j==14 || j==15 || j==23 || j==46 || j==79 || j==86){
              continue;
            }            
            console.log(`${i}*${j}=${i*j}`);            
          }
        }
      }}>tables with continue</button>
    </div>
  );
}

export default App;
