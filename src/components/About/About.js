import React from 'react'
import styles from '../../components/About/styles/About.module.css'
import Navbar from '../../components/Navbar'


function About() {
  return (
    <div id='About'>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.landing_wrapper}>
          <div className={styles.content}>
            <h2 className={styles.applications}>
              About Us
            </h2>
          </div>
        </div>

        <div className={styles.forum_wrapper}>
          <div className={styles.forum}>
            <h2 className={styles.forum_title}>Application Forum</h2>
            <p className={styles.forum_desc}>At a Model UN conference, students work as the representatives of a country, an organization, or a person and aim to solve problems working with other delegates from around the world. MUN teaches skills like research, public speaking, debating and writing skills, in addition to critical thinking, teamwork, and leadership. Coming up with solutions that are acceptable to a majority of the representatives also inculcates skills of negotiation, conflict resolution, and cooperation.</p>
            <button className={styles.forum_apply}>Apply Now</button>
          </div>
        </div>

        <div className={styles.guidelines_wrapper}>
          <div className={styles.guidelines}>
            <h2>Guidelines</h2>
            <p>At a Model UN conference, students work as the representatives of a country, an organization, or a person and aim to solve problems working with other delegates from around the world. MUN teaches skills like research, public speaking, debating and writing skills, in addition to critical thinking, teamwork, and leadership. Coming up with solutions that are acceptable to a majority of the representatives also inculcates skills of negotiation, conflict resolution, and cooperation.</p>
            <p>At a Model UN conference, students work as the representatives of a country, an organization, or a person and aim to solve problems working with other delegates from around the world. MUN teaches skills like research, public speaking, debating and writing skills, in addition to critical thinking, teamwork, and leadership. Coming up with solutions that are acceptable to a majority of the representatives also inculcates skills of negotiation, conflict resolution, and cooperation.</p>
            <p>At a Model UN conference, students work as the representatives of a country, an organization, or a person and aim to solve problems working with other delegates from around the world. MUN teaches skills like research, public speaking, debating and writing skills, in addition to critical thinking, teamwork, and leadership. Coming up with solutions that are acceptable to a majority of the representatives also inculcates skills of negotiation, conflict resolution, and cooperation.</p>
          </div>
        </div>


        <div class={styles.map_wrapper}>
          <iframe
            title="VIT Chennai Address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1629.3387502917824!2d80.1521125463424!3d12.841138299068941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1673893320482!5m2!1sen!2sin"
            width="900" height="650" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default About