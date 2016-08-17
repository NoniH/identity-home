import React from 'react';

class IdentityHomeMain extends React.Component{


  render(){
    return(
      <div>
        <div className="hero-med">
          <div className="wrapper">
            <h1>Identity Program</h1>
            <br></br>
            <h3><i>Simple and secure access to government services online</i></h3>
            <p>We are developing a way to simply and securely prove who you are when you access government services online.</p>
          </div>
        </div>
        <main role="main">
          <article>
            <h3>Why Identity?</h3>
            <p>It can be difficult and complicated to prove who you are when using government services. It often involves going into a service and waiting in line to have a human check all your documents.</p>

            <p>We want to give you more options for using and applying for government services - without waiting in any lines.</p>
          </article>
          <article>
            <h3>What is it?</h3>
            <table className="content-table home-table">
              <thead>
                <tr>
                  <th scope="col">GOV.AU</th>
                  <th scope="col">Govpass</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="home-table-column-left">GOV.AU will make it easier to prove who you are when completing online applications for government services.

                  It will put you in control of the information you share with government services.

                  GOV.AU will help you to prove who you are and complete applications entirely online.

                  For example, when applying for a Tax File Number or parenting payments.
                  </td>
                  <td className="home-table-column-right">Govpass is one of many certified accounts that you can use to prove who you are with GOV.AU.

                    With Govpass, you will only need to provide your identity information once. This information will be kept safe with a secure 2-step login.

                    Once you have a Govpass, you will be able to reuse it to apply for a range of government services (such as a different Centrelink payment).
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article>
            <h3>How does it work?</h3>
            <p>When using GOV.AU to access government services, you will be able prove who you are by using an account you already have (such as ServiceNSW) or creating a Govpass.
            </p>
            <p>The account you choose will verify your identity and then send a message to GOV.AU confirming that you are who you say you are. </p>
            <p>Govpass or other identity accounts will not know which government service you are trying to access and the government service won’t know what documents you used to prove who you are.
            </p>
            <p>GOV.AU will ask you for permission before any information is sent to the government service you are trying to use.
            </p>
            <p><strong>Govpass</strong></p>

            <p>If you choose to create a Govpass to prove who you are, you will be asked to enter information that appears on your identity documents (such as your passport number). This information will be checked with the government department that issued the document (passport information will be checked with the Australian Passport Office). Once your document has been verified, Govpass will not retain any specific document information, only the type of document you have verified.</p>

            <p>Your identity documents are not stored centrally and you are in control of when your information is shared and who it is shared with.</p>

            <p>The next time you want to access a government service online you will simply log in with your Govpass and send confirmation of your identity to the service - no need to go in person.
            </p>

            <p>This process keeps your personal information safe and secure, with GOV.AU acting as the guard between your identity and the service.
            </p>
          </article>
          <article>
            <h3>Creating the thing</h3>
            <p>GOV.AU and Govpass are being developed by the Digital Transformation Office (DTO) to meet the Digital Service Standards. All Australian Government digital services must meet the standards, which ensure that services delivered online are simple, fast and easy to use.
            </p>
            <p>The Process</p>
            <p>A team of researchers, designers and developers went through the Discovery phase to map the needs and problems faced by users and then moved into the development of an Alpha prototype</p>
            <p>User research during the Discovery phase took place over 25 weeks. We spoke with more than XXX people to learn how they felt about creating an online identity account to access government services.</p>
            <p>During the Alpha phase we built a prototype of what the identity verification process might look like. Each week we took this back to users to get feedback. We then made weekly changes and improvements in response to this feedback. It involved a lot of collaborating, brainstorming and a bit of humility to be able to scrap things that didn’t work for the users.</p>
            <p>What’s next?</p>
            <p>In the Beta phase we will begin refining what we have built and fine-tuning the user experience. We are still learning and testing changes and updates to the process and will continue talking to users around Australia and responding to their feedback. As part of this we will explore more security and verification options including the possibility of using existing biometric technology like facial recognition.
            </p>
          </article>
        </main>
      </div>
    );
  }
};

export default IdentityHomeMain;
