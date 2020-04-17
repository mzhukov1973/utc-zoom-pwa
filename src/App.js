import   React     from 'react'
import   logo      from './logo.svg'
import { ZoomMtg } from '@zoomus/websdk'
import './App.css'

//ZoomMtg.preLoadWasm()
//ZoomMtg.prepareJssdk()

//// Setup your signautre endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
//var signatureEndpoint = 'http://localhost:4000'
//var apiKey = 'JWT_API_KEY'
//var meetingNumber = 123456789
//var role = 0
//var leaveUrl = 'http://localhost:9999'
//var userName = 'WebSDK'
//var userEmail = ''
//var passWord = ''
/*
  |-------------------|-----------------------------------------------------------------------------------------------|
  | Variable          | Description                                                                                   |
  |-------------------|-----------------------------------------------------------------------------------------------|
  | signatureEndpoint | Required, the endpoint url that returns a signature. Get a signature endpoint here.           |
  | apiKey            | Required, your Zoom JWT App API Key.                                                          |
  | meetingNumber     | The Zoom Meeting / webinar number.                                                            |
  | role              | Required, 0 to join the meeting / webinar, 1 to start the meeting.                            |
  | leaveUrl          | Required, the url the user is taken to once the meeting is over.                              |
  | userName          | Required, A name for the user joining / starting the meeting / webinar.                       |
  | userEmail         | Optional, the user joining / starting the meeting / webinar.                                  |
  | passWord          | Optional, meeting password. Leave as empty string if the meeting does not require a password. |
  |-------------------|-----------------------------------------------------------------------------------------------|
*/
//// Generate the meeting signature to authenticate:
//var signature = 'eHUzSlBhQV9SSlcyLTlsNV9IQWFMQS4xMjM0NTY3ODkuMTU4MzE2OTUzODc3My4wLkJMNEtiM3FINGx5ZzA1MUZtbGJOcGtPRnlFQS9lQUR2bGllVzJNNGZJeWs9'
/*
  getSignature(meetConfig) {
      fetch(`${YOUR_SIGNATURE_ENDPOINT}`, {
  	    method: 'POST',
  	    body: JSON.stringify({ meetingData: meetConfig })
  	})
  	.then(result => result.text())
  	.then(response => {
  	    ZoomMtg.init({
  		leaveUrl: meetConfig.leaveUrl,
  		isSupportAV: true,
  		success: function() {
  		    ZoomMtg.join({
  			signature: response,
  			apiKey: meetConfig.apiKey,
  			meetingNumber: meetConfig.meetingNumber,
  			userName: meetConfig.userName,
  			// Email required for Webinars
  			userEmail: meetConfig.userEmail, 
  			// password optional; set by Host
  			password: meetConfig.password 
  			error(res) { 
  			    console.log(res) 
  			}
  		    })		
  		}
  	    })
      }
  }
*/
/*
// Then init, and join the meeting:
  ZoomMtg.init({
    leaveUrl:    leaveUrl,
    isSupportAV: true,
    error:       error => console.log(error),
    success:     success => {
      console.log(success)
      ZoomMtg.join({signature:signature, meetingNumber:meetingNumber, userName:userName, apiKey:apiKey, userEmail:userEmail, passWord:passWord, success:success=>console.log(success), error:error=>console.log(error)})
    }
  })
*/
/*
// Screen share:
  ZoomMtg.init({
    ...
    screenShare: true, // default, and it also require account's sharing setting enabled.
    ...    
  })

// Chat:
ZoomMtg.init({
...
isSupportChat: true, // default, and it also require account's sharing setting enabled.
...    
})

// Webinar notice:
// N.B.: If you want to join webinar you will need to add your email to the userEmail property within the join method and set the role to 0 within the meetingConfig function.
  ZoomMtg.join({
    ...
    userEmail: "hello@zoom.us", // Required for webinar
    ...
  })
  role: 0 // 1 for host; 0 for attendee or webinar

// 


*/


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>Learn React</a>
      </header>
    </div>
  )
}

export default App
