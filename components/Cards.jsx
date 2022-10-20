import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StyleCards from './Card.module.css'

function Cards() {
    return (
        <>
            <div className={StyleCards.container}>
                <h1 className={StyleCards.h}>
                    Immobilier et maisons à vendre partout au Maroc
                </h1>
                <Button className={StyleCards.b}>
                    500 Agent listings
                </Button>
                <h2 className={StyleCards.h2}>
                    Filtre par
                </h2>
                <select className={StyleCards.btn}>
                    <option value="Date - Du plus récent au plus ancien" >Date - Du plus récent au plus ancien
                    </option>

                </select >
                <div className={StyleCards.icone}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>
                <div className={StyleCards.icone1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>
                <div className={StyleCards.icone2}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>
                <div className={StyleCards.icone3}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>
                <Card style={{ width: '25rem' }} className={StyleCards.card}>
                    <Card.Img variant="top" src="/C1.png" width='355px' height='177px' />
                    <Card.Body className={StyleCards.font}>
                        <Card.Title>1,000,122 MAD</Card.Title>
                        <Card.Text>Appartement à vendre | 2 chambres | 140 m²
                            Marrakech, Guéliz
                        </Card.Text>
                        <div className={StyleCards.a}>
                            Annonce par : Marrakech conseils Invest

                        </div>
                    </Card.Body>
                    <div className={StyleCards.p}>
                        3 days on agenz
                    </div>

                </Card>
                <Card style={{ width: '25rem' }} className={StyleCards.card1}>
                    <Card.Img variant="top" src="/C.png" width='355px' height='177px' />
                    <Card.Body className={StyleCards.font}>
                        <Card.Title>1,110,122 MAD</Card.Title>
                        <Card.Text>
                            Maison à vendre | 3 chambres | 230 m²
                            Marrakech, Ennakhil (Palmeraie)
                        </Card.Text>
                        <div className={StyleCards.a}>
                            Annonce par : Marrakech conseils Invest
                        </div>
                    </Card.Body>
                    <div className={StyleCards.p}>
                        3 days on agenz
                    </div>

                </Card>
                <Card style={{ width: '25rem' }} className={StyleCards.card2}>
                    <Card.Img variant="top" src="/C3.png" width='355px' height='177px' />
                    <div className={StyleCards.p1}>
                        3 days on agenz
                    </div>
                </Card>
                <Card style={{ width: '25rem' }} className={StyleCards.card3}>
                    <Card.Img variant="top" src="/C3.png" width='355px' height='177px' />
                    <div className={StyleCards.p2}>
                        3 days on agenz
                    </div>
                </Card>
            </div>
        </>
    );
}

export default Cards;