import React from 'react'
import styles from '../../components/Home/styles/style.module.css'
import secretariat from '../../assets/secretariat.png'
import Navbar from '../../components/Navbar'

function index() {
    return (
        <>
            <Navbar />
            <div className={styles.main_bg}>
                <div className={styles.names}>
                    <h3>VIT Chennai</h3>
                    <h1>MODEL UNITED NATIONS</h1>
                    <div className={styles.dates_detail}>
                        <p className={styles.dates}>24 25 26 March 2022</p>
                        <p className={styles.detail}>Biggest MUN of South India</p>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.munintro}>
                    <h2>What is Model United Nations?</h2>
                    <p>
                        At a Model UN conference, students work as the representatives of a
                        country, an organization, or a person and aim to solve problems
                        working with other delegates from around the world. MUN teaches skills
                        like research, public speaking, debating and writing skills, in
                        addition to critical thinking, teamwork, and leadership. Coming up
                        with solutions that are acceptable to a majority of the
                        representatives also inculcates skills of negotiation, conflict
                        resolution, and cooperation.
                    </p>
                </div>
            </div>

            <div className={styles.vitmunintro}>
                <h2>About VITCMUN</h2>
                <p>
                    VITCMUN, or Vellore Institute of Technology Chennai Model United
                    Nations, is an annual conference held at the Vellore Institute of
                    Technology, Chennai. It is a platform for students to engage in
                    simulated United Nations discussions and debates on global issues.
                    Participants are assigned different countries and must represent their
                    viewpoints and policies during the conference. VITC MUN provides a
                    unique opportunity for students to improve their public speaking and
                    negotiation skills, as well as learn more about international relations
                    and current events. It also encourages critical thinking and the ability
                    to understand different perspectives, making it an invaluable experience
                    for anyone interested in politics or diplomacy.
                </p>
            </div>

            <div className={styles.letter_container}>
                <div className={styles.letter_wrappper}>
                    <div className={styles.pic}>
                        <img src={secretariat} alt="secretarait photo" />
                    </div>
                    <div className={styles.text_letter}>
                        <div className={styles.subtext}>
                            <h1>LETTER FROM THE SECRETARY-GENERAL</h1>
                            <p>
                                Dear Delegates and Faculty Advisors, For the past 12 years,
                                Harvard Model United Nations India has been the pinnacle of Model
                                UN practice and debate in international conferences, and we are
                                honoured to welcome you to join us for this impactful experience
                                this year. HMUN India has been able to attract and bring together
                                delegates from all around the world to participate in the highest
                                level of debate and negotiation, simulating and solving the
                                biggest challenges facing our world today. Leading such a
                                prestigious and impactful conference such as HMUN India is sure to
                                be an immense undertaking, and I hope to do so with as much
                                enthusiasm, wisdom, and support as I can while following in the
                                great legacies left behind by former Secretary-Generals Delaney
                                Hurley and Gaurang Goel, whom I had the pleasure of serving under
                                and learning from. To all receiving this message, this conference
                                is a unique and special opportunity to be involved at the highest
                                level of Model UN practice while exploring new cultures and
                                perspectives from our international reach of delegates and staff
                                alike. HMUN India will continue to mentor delegates in leadership,
                                diplomacy, and cooperation and serve as an opportunity for all to
                                engage with our consequential educational mission. As in years
                                past, HMUN India is not only a conference but an educational
                                mission on its own. Included in conference participation will be
                                access to beginner and advanced online MUN and Diplomacy training
                                courses and a number of other pre-conference chances to interact
                                with diplomacy and negotiation thinkers and scholars. Finally, our
                                Impact Initiative to provide funding and support to students who
                                submit proposals for social impact projects will be maintained and
                                revamped. The conference staff are excited and hard at work
                                preparing to create this incredible experience for all delegates,
                                and we hope you are all looking forward to seeing you all at HMUN
                                India 2023! Sincerely, Oscar Berry Secretary-General, HMUN India
                                2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index