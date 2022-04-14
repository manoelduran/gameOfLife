import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import Button from "../components/Button";
import useInterval from "../hooks/useInterval";
import { positions } from "../utilities/PositionsRules";
import { randomTiles, generateEmptyGrid } from "../utilities/RandomTiles";
import {
    Container,
    Title,
    ColumContainer,
    GridContainer,
    ButtonContainer
} from './styles';

const Home: React.FC<any> = () => {
    const theme = useTheme();
    const numRows = 25;
    const numCols = 35;
    const [running, setRunning] = useState(false);
    const [grid, setGrid] = useState<number[][]>(() => {
        return randomTiles({ numRows, numCols });
    });
    const runningRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback((grid: number[][]) => {
        if (!runningRef.current) {
            return;
        }

        let gridCopy = JSON.parse(JSON.stringify(grid));
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                let neighbors = 0;

                positions.forEach(([x, y]) => {
                    const newI = i + x;
                    const newJ = j + y;

                    if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                        neighbors += grid[newI][newJ];
                    }
                });

                if (neighbors < 2 || neighbors > 3) {
                    gridCopy[i][j] = 0;
                } else if (grid[i][j] === 0 && neighbors === 3) {
                    gridCopy[i][j] = 1;
                }
            }
        }
        setGrid(gridCopy);
    }, []);
    useInterval(() => {
        runSimulation(grid);
    }, 150);
    return (
        <Container>
            <Title>Game of Life</Title>
            <GridContainer numCols={numCols}>
                {grid.map((rows, i) =>
                    rows.map((col, k) => (
                        <ColumContainer
                            key={`${i}-${k}`}
                            onClick={() => {
                                let newGrid = JSON.parse(JSON.stringify(grid));
                                newGrid[i][k] = grid[i][k] ? 0 : 1;
                                setGrid(newGrid);
                            }}
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: grid[i][k] ? theme.white_details : undefined,
                            }}
                        />
                    ))
                )}
            </GridContainer>
            <ButtonContainer>
                <Button text="Start" onClick={() => {
                    setRunning(true);
                }} />
                {
                    running === true ?
                        <Button text="Stop" onClick={() => {
                            setRunning(false)
                        }} />
                        :
                        <Button text="Clean Grid" onClick={() => {
                            setRunning(false);
                            setGrid(generateEmptyGrid({ numRows, numCols }))
                        }} />
                }
            </ButtonContainer>
        </Container>
    );
};

export default Home;