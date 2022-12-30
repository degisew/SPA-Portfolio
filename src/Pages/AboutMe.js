import SharedSelectors from './SharedStyles.module.css';
import selectors from './AboutMe.module.css';
import photo from '../assets/images/degisew-photo.jpg';

const AboutMe = () => (
  <section id="about">
    <div className={selectors.mainDiv}>
      <div className={SharedSelectors.title}>
        <h1>ABOUT ME</h1>
      </div>
      <div className={selectors.photoDetailDiv}>
        <div className={selectors.myDetail}>
          <p>
            I am Degisew, and I am a front-end web developer in love with
            creating beautiful and interactive UI. Currently, I’m enrolling
            at microverse, an online web development school to jump to
            full-stack development.
          </p>
          <br />
          <p>
            I began my career by teaching IT courses
            in private colleges. My time as an instructor was very
            interesting because there were a lot of questions and answers
            and that really helped me to practice more and to stay updated
            with the technology. Last year, I developed an internship
            platform for my school by learning a new framework and I got
            recognition for this achievement. Currently, I am working on a
            project which is an online web development learning platform
            aimed to teach Ethiopian students in their native language.
          </p>
          {' '}
          <br />
          <p>
            The one thing that makes me special is when I am working on a
            project, I give full focus and tend to be goal oriented till I
            finish it and I can take care of full responsibility to do it on
            my own self if it is necessary. I also have an experience in
            pair programming and can collaborate in remote work with any
            devs around the globe.
          </p>

        </div>
        <div className={selectors.photo}>
          <img
            src={photo}
            alt="myPhoto"
          />
        </div>
      </div>
    </div>
  </section>
);
export default AboutMe;
