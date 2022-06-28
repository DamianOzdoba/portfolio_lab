import React, {useState} from 'react';
import HomeWhoWeHelpList from "./HomeWhoWeHelpList";
import Pagination from "./Pagination";
import {Element} from "react-scroll";
import foundations from "../data/foundations.json";
import organizations from "../data/organizations.json";
import local from "../data/local.json";


function HomeWhoWeHelp() {
    const [whoWeHelp, setWhoWeHelp] = useState(foundations);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(3);

    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = whoWeHelp.slice(indexOfFirstElement, indexOfLastElement);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Element name='homeWhoWeHelp' className="home-who-we-help">
            <h2 className="title">Komu pomagamy?</h2>
            <div className="home-who-we-help__container">
                <div className="home-who-we-help__btns">
                    <button className="btn btn--wwh"
                            onClick={() => {
                                setWhoWeHelp(foundations);
                                setCurrentPage(1);
                            }}>Fundacjom
                    </button>
                    <button className="btn btn--wwh" onClick={() => {
                        setWhoWeHelp(organizations);
                        setCurrentPage(1);
                    }}>Organizacjom
                        pozarządowym
                    </button>
                    <button className="btn btn--wwh" onClick={() => {
                        setWhoWeHelp(local);
                        setCurrentPage(1);
                    }}>Lokalnym zbiórkom
                    </button>
                </div>
                {whoWeHelp === foundations ?
                    <div className="home-who-we-help__content">
                        <p className="home-who-we-help__description">W naszej bazie znajdziesz listę zweryfikowanych
                            Fundacji, z którymi współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                        <HomeWhoWeHelpList whoWeHelp={currentElements}/>
                        {whoWeHelp.length > elementsPerPage
                            ?
                            <Pagination elementsPerPage={elementsPerPage} totalElements={whoWeHelp.length}
                                        paginate={paginate}/>
                            :
                            null
                        }
                    </div>
                    : whoWeHelp === organizations ?
                        <div className="home-who-we-help__content">
                            <p className="home-who-we-help__description">W naszej bazie znajdziesz listę zweryfikowanych
                                Fundacji, z którymi współpracujemy. Możesz
                                sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                            <HomeWhoWeHelpList whoWeHelp={currentElements}/>
                            {whoWeHelp.length > elementsPerPage
                                ?
                                <Pagination elementsPerPage={elementsPerPage} totalElements={whoWeHelp.length}
                                            paginate={paginate}/>
                                :
                                null
                            }
                        </div>
                        :
                        <div className="home-who-we-help__content">
                            <p className="home-who-we-help__description">W naszej bazie znajdziesz listę zweryfikowanych
                                Fundacji, z którymi współpracujemy. Możesz
                                sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                            <HomeWhoWeHelpList whoWeHelp={currentElements}/>
                            {whoWeHelp.length > elementsPerPage
                                ?
                                <Pagination elementsPerPage={elementsPerPage} totalElements={whoWeHelp.length}
                                            paginate={paginate}/>
                                :
                                null
                            }
                        </div>
                }
            </div>
        </Element>
    );
}

export default HomeWhoWeHelp;