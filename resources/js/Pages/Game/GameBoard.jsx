import Layout from "../Layout/Layout";
import { useState } from 'react'
import './game.css'
let initialBoard = [

]
export default function GameBoard(){

    const [initialBoard,setInitialBoard] = useState([
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ]);

    const [symbol,setSymbol] = useState('x');

    function reInitiate()
    {
        setInitialBoard([
            [null,null,null],
            [null,null,null],
            [null,null,null],
        ])
    }

    function handleClick(rowIndex,colIndex){ 
        let $chk = false;       
        setInitialBoard((board) => {
            let updatedBoard = [...initialBoard] 
            updatedBoard[rowIndex][colIndex] = symbol             
            setSymbol((sym) => (sym === 'x' ? 'o' : 'x'))          
            $chk = checkWin()             
            if($chk)
            {
                alert("Game Won by " + symbol);
                reInitiate();
            }
            return updatedBoard
        })
        
    }

    function checkWin(){
        for(let row =0;row<3;row++){
            if(initialBoard[row].every( (val, i, arr) => (val === arr[0] && val != null) ))
            {
                alert("Win in row" + row);
                return true;
            }
            if( initialBoard[0][row] != null && initialBoard[0][row] == initialBoard[1][row] && initialBoard[1][row] == initialBoard[2][row]){
                alert("Win in col" + row);
                return true;
            }
        }

        if(initialBoard[0][0] != null && 
            initialBoard[0][0] == initialBoard[1][1] &&
            initialBoard[1][1] == initialBoard[2][2] 
        ){
            alert("win in cross");
            return true;
        }

        if(initialBoard[0][2] != null && 
            initialBoard[0][2] == initialBoard[1][1] &&
            initialBoard[1][1] == initialBoard[2][0] 
        ){
            alert("win in cross");
            return true;
        }

        
    }
    
    return(
        <>  
        <Layout>
            <h1>Game Board</h1>
            <div id="game-container">
          
            <ol id="game-board">
            {initialBoard.map(
                (row,rowIndex) => <li key={rowIndex}>
                <ol>
                {row.map(
                    (col,colIndex) => <li key={colIndex} ><button onClick={ () => handleClick(rowIndex,colIndex)} disabled={col !== null && "disabled"}>{col}</button></li>
                )}
                </ol>
                </li>
            )}
           </ol>
           </div>
        </Layout>
        </>
    );
}