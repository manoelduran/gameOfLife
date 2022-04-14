import React from "react";

interface randomTilesProps {
    numRows: number;
    numCols: number;
}

interface randomTilesProps {
    numRows: number;
    numCols: number;
}

export const randomTiles = ({ numRows, numCols }: randomTilesProps) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))); // returns a live cell 70% of the time
    }
    return rows;
}

export const generateEmptyGrid = ({ numRows, numCols }: randomTilesProps) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
};

