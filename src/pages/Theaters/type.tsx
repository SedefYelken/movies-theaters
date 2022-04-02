import './style.css';

function Theaters(){

    const theatersResponse =  [
        {
            "id":1,
            "name":"Trouble in Mind",
            "imgURL":require('../../img/theatre1.PNG'),
            "description": "In 2021, the theater community took action to redress years of systemic racism, mounting more productions by creators of color. Perhaps no production embodied this more than the Roundabout’s powerful Broadway premiere Trouble in Mind. The 1955 play, by Alice Childress, a Black playwright and author who died in 1994, was headed toward Broadway but Childress refused to tone down its message about racism in the theater community and beyond. It belatedly gets a triumphant production, with a captivating performance by LaChanze, who previously won a Tony for her work in The Color Purple."
        },
        {
            "id":2,
            "name":"Caroline, or Change and Kimberly Akimbo",
            "imgURL":require('../../img/theatre2.PNG'),
            "description":"Sondheim is irreplaceable, but a leading contender as the dominant composer of musicals, Jeanine Tesori (Fun Home), also has two productions currently running in New York and both are outstanding. One is the third NYC revival of her collaboration with Tony Kushner, Caroline, or Change. I’ve seen all three and this crackling production is my favorite today. Tesori’s latest revelation, Kimberly Akimbo (with David Lindsay-Abaire, based on his play of the same name), is a near perfect night of theater. It is very funny, sad and incredibly fresh. The Off-Broadway production at the Atlantic Theater, starring Victoria Clark as a teenager who looks like she’s in her 70s, has recently been extended until next year and it would be a surprise if it did not eventually end up on Broadway."
        },
        {
            "id":3,
            "name":"Assassins and Company",
            "imgURL":require('../../img/theatre3.PNG'),
            "description":"There were also two Stephen Sondheim productions made unfortunately timely by the composer’s death, at 91, in November. I found the Classic Stage Company’s production of Assassins problematic: fresh on the heels of the Alec Baldwin film set shooting, the acquittal of Kyle Rittenhouse and the latest school shootings, a production in which guns are practically the main character seems questionable, but maybe that’s part of the point. Ultimately, the caliber of the cast and the soulfulness of their performances carried the day. Company received a lavish Broadway production directed by Marianne Elliott, who has won multiple Tony awards, with gorgeous sets, a killer 14-piece orchestra and Patti LuPone’s show-stopping, bring-down-the-house, standing O rendition of “Ladies Who Lunch.” In the gender-shifted production, the Andrews Sisters-like “You Could Drive a Person Crazy” and “I’m Not Getting Married Today” also drove the audiences wild."
        },
        {
            "id":4,
            "name":"Dana H. and Is This a Room",
            "imgURL":require('../../img/theatre4.PNG'),
            "description":"In addition to venue-supplied headsets, it was also a good year for transcripts. In a brilliant pairing, the Vineyard Theater staged Dana H. and Is This a Room, both based on verbatim transcripts. Is This a Room was a gripping drama taken from FBI transcripts of the raid and arrest of Reality Winner, a high-tech security worker who, spurred by conscience, leaked top-secret data on Russian interference in the 2016 elections. Reality Winner paid a steep price and was convicted and sentenced to more than five years in prison. The production was expertly paced, well-acted, entertaining and thought-provoking about important matters of individual responsibility and national policy. It ran in repertory with Dana H., the harrowing account of playwright Lucas Hnath’s mother, Dana H., getting kidnapped and held captive by a brutal member of the Aryan Brotherhood. The remarkable performance by Deirdre O’Connell had an extraordinarily high degree of difficulty and emotional toll. For the entire performance, O’Connell expertly lip synched recordings of interviews conducted with the actual Dana H., recounting her terrifying journey. The performance I attended left O’Connell in tears during the curtain call."
        },
        {
            "id":5,
            "name":"Only an Octave Apart",
            "imgURL":require('../../img/theatre5.PNG'),
            "description":"That September night, I was waiting to see the premiere of Only An Octave Apart at St. Ann’s, the converted 1860 tobacco warehouse in DUMBO. Once inside, seated among the double masked (nose slippage brought the evil eye) the cliche would be “there was electricity in the air.” And while I don’t know about the physics of how sound travels from a performer’s vocal chords, throat and mouth to the audience’s ear, when Justin Vivian Bond and Anthony Roth Costanzo began singing, it felt like I was being physically bombarded (in a good way) by electrons of music particles. It was a profoundly moving performance, with the audience collectively realizing how much we had missed the fizz of a live performance."
        }
    ]

    return(
        <div className="row background pt7">
            { theatersResponse.map((theater) => (
                <div className="col-lg-4" key={theater.id}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="movie-title ml3">{theater.id} - {theater.name}</h5>
                            <img src={theater.imgURL} className="style-img ml3" alt="Sample Movie" />
                            <p className="pb3">{theater.description}</p>
                            <div className="d-flex justify-content-between align-items-center"> 
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Theaters;