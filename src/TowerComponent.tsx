import React from 'react'
import { Tower } from './utils'

type TowerComponentProps = {
    tower:Tower
}

const pieceHeight = 15;

const TowerComponent = ({tower}:TowerComponentProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center"
        }}>
            <div style={{
                // height will be calculated by the number of pieces * their height + arbitrary spacing at the top
                height: `${(tower.pieces.length * pieceHeight) + 80}px`,
                width: "10px",
                background: "slateblue",
                display: 'flex',
                flexDirection: "column", 
                justifyContent: 'flex-end',
                alignItems: 'center'
            }} className={`${tower.name}-shaft`}>
                {tower.pieces.map(piece=>{
                    return <div
                        key={piece.weight} 
                        className={`${tower.name}-peice-${piece.weight}`} 
                        style={{
                            width: `${piece.weight * 20}px`,
                            height: `${pieceHeight}px`,
                            backgroundColor: 'gold',
                            marginTop: '5px',
                            marginBottom: '5px',
                            borderRadius: '10px'
                        }}
                    />
                })}
            </div>
            <div id={`${tower.name}-platform`} style={{
                width: 100,
                marginLeft: 10,
                marginRight: 10,
                height: 20,
                border: "1px solid black",
                textAlign: 'center'
            }}>{tower.name}</div>
        </div>
    )
}

export default TowerComponent
