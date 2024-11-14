import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Grid = () => {
    const [gridSize, setGridSize] = useState(4); // default 4x4 

    // function that handles the grid changes
    const handleGridChange = (size) => {
        setGridSize(size);
    };

    return (
        <Container className="mt-4">
            {gridSize === 3 && ( // if condition is true, the condition inside will initialize, if false, nothing will happen
                <>
                    <Row className="mb-3">
                        <Col className="columns columns-a"> A </Col>
                        <Col className="columns columns-b"> B </Col>
                        <Col className="columns columns-c"> C </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-d"> D </Col>
                        <Col className="columns columns-e"> E </Col>
                        <Col className="columns columns-f"> F </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-g"> G </Col>
                        <Col className="columns columns-h"> H </Col>
                        <Col className="columns columns-i"> I </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-j"> J </Col>
                        <Col className="columns columns-k"> K </Col>
                        <Col className="columns columns-l"> L </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-m"> M </Col>
                        <Col className="columns columns-n"> N </Col>
                        <Col className="columns columns-o"> O </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-p"> P </Col>
                    </Row>
                </>
            )}
            
            {gridSize === 4 && (
                <>
                    <Row className="mb-3">
                        <Col className="columns columns-a"> A </Col>
                        <Col className="columns columns-b"> B </Col>
                        <Col className="columns columns-c"> C </Col>
                        <Col className="columns columns-d"> D </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-e"> E </Col>
                        <Col className="columns columns-f"> F </Col>
                        <Col className="columns columns-g"> G </Col>
                        <Col className="columns columns-h"> H </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-i"> I </Col>
                        <Col className="columns columns-j"> J </Col>
                        <Col className="columns columns-k"> K </Col>
                        <Col className="columns columns-l"> L </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-m"> M </Col>
                        <Col className="columns columns-n"> N </Col>
                        <Col className="columns columns-o"> O </Col>
                        <Col className="columns columns-p"> P </Col>
                    </Row>
                </>
            )}

            {gridSize === 6 && (
                <>
                    <Row className="mb-3">
                        <Col className="columns columns-a"> A </Col>
                        <Col className="columns columns-b"> B </Col>
                        <Col className="columns columns-c"> C </Col>
                        <Col className="columns columns-d"> D </Col>
                        <Col className="columns columns-e"> E </Col>
                        <Col className="columns columns-f"> F </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-g"> G </Col>
                        <Col className="columns columns-h"> H </Col>
                        <Col className="columns columns-i"> I </Col>
                        <Col className="columns columns-j"> J </Col>
                        <Col className="columns columns-k"> K </Col>
                        <Col className="columns columns-l"> L </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="columns columns-m"> M </Col>
                        <Col className="columns columns-n"> N </Col>
                        <Col className="columns columns-o"> O </Col>
                        <Col className="columns columns-p"> P </Col>
                    </Row>
                </>
            )}

            <div className="mt-4">
                <button onClick={() => handleGridChange(3)} className="btn btn-primary m-2"> 3x3 </button>
                <button onClick={() => handleGridChange(4)} className="btn btn-primary m-2"> 4x4 </button>
                <button onClick={() => handleGridChange(6)} className="btn btn-primary m-2"> 6x6 </button>
            </div>
        </Container>
    );
};

export default Grid;
