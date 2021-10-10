import React from "react"
import "../styles/writing.css"
import "../styles/full.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default props => (

    <div>
    <Row> 
    <Col>
    <div id="writingSection">
        <h1 className="writingSectionHead">Writing</h1>
        <p className="selectedSentence"> Selected Works</p><br />
        <div>
            {/* <h1 className="selectedHead">Selected</h1> */}
            <div className="selectedArticleDiv">
                <h1 className="writingSectionSubHead">New York Times</h1>
                <a className="articleLink" href="https://www.nytimes.com/2021/09/29/style/donottouchmyclothes-afghan-women-protest-taliban.html" target="_blank" >#DoNotTouchMyClothes: Afghan Women Protest Taliban Restrictions</a><br />
                <a className="articleLink" href="https://www.nytimes.com/2021/08/20/arts/taliban-afghan-cultural-heritage.html" target="_blank" >Taliban Vows to Protect Afghan Cultural Heritage, but Fears Persist</a><br />
                <a className="articleLink" href="https://www.nytimes.com/2021/09/10/style/topo-chico-coca-cola.html" target="_blank" >Topo Chico Is Well Sourced to Win the Seltzer Wars</a><br />
                <a className="articleLink" href="https://www.nytimes.com/2021/08/18/style/exercise-dress.html" target="_blank" >We Have Reached Peak ‘Exercise Dress’</a><br />
                <a className="articleLink" href="https://www.nytimes.com/2021/08/16/style/beards-brigham-young-university.html" target="_blank" >Beard Crusader</a><br />
                <a className="articleLink" href="https://www.nytimes.com/2021/08/14/style/asl-wap-tiktok.html" target="_blank" >The A.S.L. Interpretation of ‘WAP’ Was TikTok Gold. It’s Also a Problem.</a><br />
                <a className="articleLink" href="https://www.nytimes.com/2021/08/05/style/masks-sales-delta-variant-covid.html" target="_blank" >Hold On to Your Masks | Thursday Styles Cover</a><br />
                <a className="articleLink" href="https://www.nytimes.com/2021/07/03/style/spelling-bee-south-asian-americans.html" target="_blank" >How Indian Americans Came to Love the Spelling Bee</a><br />
                <a className="articleLink" href="https://www.nytimes.com/2021/06/18/style/bezos-mona-lisa-change-petition.html" target="_blank" >Why Do People Want Jeff Bezos to Buy and Eat the Mona Lisa?</a><br />
                <a className="articleLink" href="https://www.nytimes.com/live/2021/09/13/fashion/met-gala-2021" target="_blank" >Live Coverage: Met Gala</a><br />
                <a className="articleLink" href="https://www.nytimes.com/live/2021/07/08/us/scripps-spelling-bee" target="_blank" >Live Coverage: Scripps National Spelling Bee</a><br />

                <br /><h1 className="writingSectionSubHead">TIME Magazine</h1>
                <a className="articleLink" href="https://time.com/5680759/justin-trudeau-brownface-photo/" target="_blank" >Exclusive: Justin Trudeau Wore Brownface at 2001 ‘Arabian Nights’ Party</a><br />
                <a className="articleLink" href="https://time.com/5879768/kamala-harris-south-asian-biracial-identity/" target="_blank" >What Kamala Harris' South Asian Heritage Means to Voters</a><br />
                <a className="articleLink" href="https://time.com/5868422/indian-matchmaking-criticism/" target="_blank" >Netflix’s Indian Matchmaking Is Bringing Painful Conversations to the Fore</a><br />
                <a className="articleLink" href="https://time.com/5858649/racism-coronavirus/" target="_blank" >'I Will Not Stand Silent.' Asian Americans Reflect on Racism During the Pandemic | Cover Story</a><br />
                <a className="articleLink" href="https://time.com/5800209/asian-american-census/" target="_blank" >Who 'Counts' as Asian? Here's How the Answer Got So Complicated</a><br />
                <a className="articleLink" href="https://time.com/5900888/howardena-pindell-the-shed/" target="_blank" >‘I Put the Black Body in the Work.’ An Interview with Howardena Pindell</a><br />
                <a className="articleLink" href="https://time.com/5827561/1918-flu-art/" target="_blank" >How Art Movements Tried to Make Sense of the World in the Wake of the 1918 Flu</a><br />
                <a className="articleLink" href="https://time.com/5786068/whitney-museum-mexican-muralists/" target="_blank" >How Mexican Muralists Changed the Course of 20th-Century American Art</a><br />
                <a className="articleLink" href="https://time.com/5875469/atomic-bomb-legacy/" target="_blank" >A New Generation Is Carrying on the Legacy of Atomic Bomb Survivors</a><br />
                <a className="articleLink" href="https://time.com/5730790/banana-panama-disease/" target="_blank" >What We Can Learn From the Near-Death of the Banana</a><br />
                <a className="articleLink" href="https://time.com/5667447/tennis-clothes-history/" target="_blank" >The Surprising—and Sometimes Troubling—History of Tennis Clothes</a><br />
                <a className="articleLink" href="https://time.com/5645347/quentin-tarantino-women-dialogue/" target="_blank" >How Often Do Women Talk in Quentin Tarantino Films?</a><br />
            </div>
            <br />
            <a className="authorPageLink" href="https://www.nytimes.com/by/anna-p-kambhampaty" target="_blank" >NYT Author Page</a><br />
            <a className="authorPageLink" href="https://time.com/author/anna-purna-kambhampaty/" target="_blank" >TIME Author Page</a><br />
            <a className="authorPageLink" href="https://www.thejuggernaut.com/author/anna-purna-kambhampaty" target="_blank" >Juggernaut Author Page</a>

        </div>

        {/* <h3>
            <a className="allArticlesLink" href="https://time.com/author/anna-purna-kambhampaty/" target="_blank" >All TIME articles</a>
        </h3> */}

    </div>
    </Col>
    </Row>
    </div>
)
 