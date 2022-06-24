import React from 'react';
import HomeThreeColumnsArticle from "./HomeThreeColumnsArticle";
import threeColumns_bg from "../assets/three-columns-bg.png";

function HomeThreeColumns() {
    return (
        <div className="home-three-columns" style={{backgroundImage: `url(${threeColumns_bg})`}}>
            <div className="home-three-columns__container">
                <div className="home-three-columns__content">
                    <HomeThreeColumnsArticle
                        quantity={'10'}
                        title={'ODDANYCH WORKÓW'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
                    <HomeThreeColumnsArticle
                        quantity={'5'}
                        title={'WSPARTYCH ORGANIZACJI'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
                    <HomeThreeColumnsArticle
                        quantity={'7'}
                        title={'ZORGANIZOWANY ZBIÓREK'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
                </div>
            </div>
        </div>
    );
}

export default HomeThreeColumns;