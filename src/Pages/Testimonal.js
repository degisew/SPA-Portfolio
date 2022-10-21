import React from 'react'
import sharedSelectors from '../Pages/SharedStyles.module.css';
import { testimonals } from '../Components/Data';
const Testimonal = () => {
  return (
    <section>
      <div className={sharedSelectors.title}>
        <h1> TESTIMONAL</h1>
      </div>
      <div>
        {testimonals ? <p>true</p> : <p>Nothing Yet!</p>}
      </div>
    </section>
  );
}

export default Testimonal
