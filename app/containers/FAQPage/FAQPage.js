import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

class FAQPage extends Component {
  render() {
    return (
      <div>
        <br/>
        <h3>Is my email address and password safe?</h3>
        <p>Absolutely! Your credentials and personal information is never stored. It is only used *once* to make calls to Tesla's server on your behalf and retrieve your car information, including your "corked/uncorked" status.
        </p>
        <h3>What if I don't want to trust this site with my credentials?</h3>
        <p>No problem! This site was created by a Tesla enthusiast to help make it easy for people to check their uncorked status. Especially useful if you just picked up your car at the service center and want to make sure it was actually uncorked to avoid an unnecessary repeat visit.</p><br/>

        <h4>There are 3 options to getting this information:</h4>
        <div>
            <Image src='./circle-1.png' avatar />
            <span>Provide your Tesla email address and password here. We use it on your behalf to query the Tesla API for car and performance information. Your password and email address are NOT stored. This is the easiest method.</span>
        </div>
        <div>
            <Image src='./circle-2.png' avatar />
            <span>Generate your own token and provide that.and we'll do the rest. If you have recently generated an option for another 3rd party Tesla site, you can use that one.</span>
        </div>
        <div>
          <Image src='./circle-3.png' avatar />
          <span>Skip this website and do it all yourself. Requires a little bit of patience and a modern web browser (laptop/desktop recommended though mobile can work as well). Instructions here at this YouTube video:<a href='https://www.youtube.com/watch?v=1Gzkgol6G0o'> https://www.youtube.com/watch?v=1Gzkgol6G0o</a></span>
        </div>
        <br/><h3>What information can I see?</h3><br/>
        <p>Although many people come here only to check their cork/uncorked status, we will also display your token (which you can use here or at various other 3rd party Tesla websites and mobile apps) and your car's option codes.</p>



      </div>
    );
  }
}

export default FAQPage;
