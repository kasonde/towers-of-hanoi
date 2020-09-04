import React, { useEffect, useState } from 'react'
import TowerComponent from './TowerComponent';
import {Tower, Piece} from './utils';

const App = () => {
    
    const [towers, setTowers] = useState<any>({
        "A": new Tower("A", []),
        "B": new Tower("B", []),
        "C": new Tower("C", []),
    });

    const [seedNumber, setSeedNumber] = useState(5);

    useEffect(()=>{
        // load up the peices first time it runs
        function initTowers(){
            let tower = towers.A;
            for(let i = 1; i <= seedNumber; i++){
                tower.addPeice(new Piece(i));
            }
            setTowers({
                ...towers,
                A: tower
            });
        }
        initTowers();
    }, []);

    const move = async (from:Tower, to:Tower) => {
        // todo: add a delay to watch
        // manipulate state in a crude but functional way first
        let removedPiece = from.pieces.shift();
        to.pieces.unshift(removedPiece??new Piece(55));
        // TODO: remove that weird Piece(55) you've added just to make this work.
        setTowers({
            ...towers,
            [from.name]: from,
            [to.name]: to
        });
        console.log(`Move from ${from.name} to ${to.name}`);
    }

    const hanoi = (n:number, from:Tower, to:Tower, spare:Tower) => {
        if (n === 1){
            move(from, to)
        }else{
            hanoi(n-1, from, spare, to);
            hanoi(1, from, to, spare);
            hanoi(n-1, spare, to, from);
        }
    }

    const solve = () =>{
        hanoi(seedNumber, towers.A, towers.C, towers.B)
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: "flex",
            flexDirection: "column",
            alignItems: 'center'
        }}>
            <div style={{
                width: '300px',
                margin: '3rem auto',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                {Object.keys(towers).map(key=><TowerComponent key={towers[key].name} tower={towers[key]} />)}
            </div>
            <button onClick={()=>{
                solve();
            }} style={{
                backgroundColor: "rebeccapurple",
                color: 'white',
                border: "none",
                outline: "none",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                cursor: "pointer"
            }}>solve</button>
        </div>
    )
}

export default App
