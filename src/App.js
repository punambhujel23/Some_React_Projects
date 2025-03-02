import React,{useState} from "react";

// const fruits =[
//     {name:"Apple",isFruit:true,id:1},
//     {name:"Banana",isFruit:true,id:2},
//     {name:"Grapes",isFruit:true,id:1},
//     {name:"Cabbage",isFruit:false,id:1}
// ];

// export default function FruitList(){
//     const count = fruits.map(fruit=>
//         <li key={fruit.id} style={{color:fruit.isFruit?"green":"red"}}>
//             {fruit.name}
//         </li>
//     )
//     return (
//         <ul>{count}</ul>
//     )
// }


// function MyAdmin(){
//     return (
//         <p>Hi! I am Admin.</p>
//     )
// }
// function Client(){
//     return (
// <p>Hi ! I am a user.</p>
//     )
// }

// export default function MyApp(){
//     const isLoggedIn = true;
//   return (
//     <div>
//   {
//   !isLoggedIn ? <MyAdmin /> :<Client />}
//   </div>
//   )
// }

//Responding to events
// export default function MyApp(){
//     const [count,setCount] = useState(0);
//     function clickButton(){
//         setCount(count + 1);
//     }
//     return(
//         <div>
//             <p>Counters that update separately.</p>
         
//             <MyButton count={count} onClick={clickButton} />
//             <MyButton count={count} onClick={clickButton} />
//         </div>
//     )
// }
// function MyButton({count,onClick}){
//     return(
//         <button onClick={onClick}>
//             Clicked {count} times
//         </button>
//     )
// }


function calculateWinner(squares){
   const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
   ];
   for (let i=0;i < lines.length;i++){
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b]&& squares[a] === squares[c]){
         return squares[a];
      }
   }
   return null;
}

function Square({value,onSquareClick}){
   return <button className="square" onClick={onSquareClick} >{value}</button>
}
// Tic - Tac - Toe Game
function Board(){
   const [xIsNext,setIsNext] = useState(true);
    const [squares,setSquares] = useState(Array(9).fill(null));
    
    function handleClick(i){
      if (squares[i] || calculateWinner(squares)){
         return ;
      }
      const nextSquares = squares.slice();
      if (xIsNext)
      {
         nextSquares[i]='X';
      }
      else{
         nextSquares[i] ='O';
      }
      setSquares(nextSquares);
      setIsNext(!xIsNext);
    }
    
    const winner = calculateWinner(squares);
    let status;
    if (winner){
      status='Winner' + winner;
    }
    else{
      status ='Next player:' +(xIsNext?'X' :'O');
    }
    return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
 <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
 <Square  value={squares[1]} onSquareClick={()=>handleClick(1)}/>
 <Square  value={squares[2]} onSquareClick={()=>handleClick(2)}/>
    </div>
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
    <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
    <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div className="board-row">
    <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
    <Square value={squares[7]}onSquareClick={()=>handleClick(7)}/>
    <Square value={squares[8]}onSquareClick={()=>handleClick(8)}/>
    </div>
    </>
    )
}

export default Board;