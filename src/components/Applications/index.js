import React from 'react'
import styles from '../../components/Applications/styles/style.module.css'
import Navbar from '../../components/Navbar'

function index() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.landing_wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.applications}>Applications</h2>
                    </div>
                </div>

                <div className={styles.forum_wrapper}>
                    <div className={styles.forum}>
                        <h2 className={styles.forum_title}>Application Forum</h2>
                        <p className={styles.forum_desc}>
                            At a Model UN conference, students work as the representatives of a
                            country, an organization, or a person and aim to solve problems
                            working with other delegates from around the world. MUN teaches skills
                            like research, public speaking, debating and writing skills, in
                            addition to critical thinking, teamwork, and leadership. Coming up
                            with solutions that are acceptable to a majority of the
                            representatives also inculcates skills of negotiation, conflict
                            resolution, and cooperation.
                        </p>
                        <button className={styles.forum_apply}>Apply Now</button>
                    </div>
                </div>

                <div className={styles.guidelines_wrapper}>
                    <div className={styles.guidelines}>
                        <h2>Guidelines</h2>
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
            </div>

        </div>
    )
}

export default index