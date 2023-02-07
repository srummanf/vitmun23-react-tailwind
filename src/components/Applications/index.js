import React from 'react'
import styles from '../../components/Applications/styles/style.module.css'
import Navbar from '../../components/Navbar'

function index() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="landing-wrapper">
                    <div className="content">
                        <h2 className="applications">Applications</h2>
                    </div>
                </div>

                <div className="forum-wrapper">
                    <div className="forum">
                        <h2 className="forum-title">Application Forum</h2>
                        <p className="forum-desc">
                            At a Model UN conference, students work as the representatives of a
                            country, an organization, or a person and aim to solve problems
                            working with other delegates from around the world. MUN teaches skills
                            like research, public speaking, debating and writing skills, in
                            addition to critical thinking, teamwork, and leadership. Coming up
                            with solutions that are acceptable to a majority of the
                            representatives also inculcates skills of negotiation, conflict
                            resolution, and cooperation.
                        </p>
                        <button className="forum-apply">Apply Now</button>
                    </div>
                </div>

                <div className="guidelines-wrapper">
                    <div className="guidelines">
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