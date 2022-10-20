import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'next/image';
import StyleSearch from './SearchBar.module.css'

export function Search() {
    return (
        <>
            <div className={StyleSearch.o}>
                <InputGroup className={StyleSearch.input}>
                    <Form.Control
                        placeholder="Entrez une ville, un quartier , une adresse"
                        aria-label="Entrez une ville, un quartier , une adresse"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        <Image src='/V2.png' width='15px' height='15px'></Image>
                    </Button>
                    <Button variant="outline-primary" className={StyleSearch.b}>À vendre</Button>
                    <Button variant="outline-primary" className={StyleSearch.b}>Prix</Button>
                    <Button variant="outline-primary" className={StyleSearch.b}>Type</Button>
                    <Button variant="outline-primary" className={StyleSearch.b}>Surface</Button>
                    <Button variant="outline-primary" className={StyleSearch.b}>Chambres</Button>
                    <Button variant="primary" className={StyleSearch.b}>Valider</Button>

                </InputGroup>
            </div>
        </>
    )
}