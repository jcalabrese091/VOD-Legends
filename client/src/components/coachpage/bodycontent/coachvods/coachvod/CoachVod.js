import React from "react"; 
import "./CoachVod.css";

const CoachVod = () => (

<div id="coachVod">

	<h4 className="text-center">Your Student's VOD: <span><u> Username </u></span></h4>

	<h5 className="text-center">Zyra Game against Sona - September 8, 2017</h5>

	<iframe className="center-block" width="80%" height="400" src="https://www.youtube.com/embed/8PMvZS8WAhs" frameBorder="0" title="video" allowFullScreen></iframe>

	<div id="coachVodCommentBackground">
		<h5 className="text-center"><u>Your Coaching Comments</u></h5>
		<div id="commentButtons">
			<button type="button" className="btn btn-primary">1</button>
			<button type="button" className="btn btn-primary">2</button>
			<button type="button" className="btn btn-primary">3</button>
			<button type="button" className="btn btn-primary">4</button>		
			<button type="button" className="btn btn-primary">5</button>
			<button type="button" className="btn btn-primary">6</button>
			<button type="button" className="btn btn-primary">7</button>
			<button type="button" className="btn btn-primary">8</button>		
			<button type="button" className="btn btn-primary">9</button>
			<button type="button" className="btn btn-primary">10</button>
		</div>
	</div>

	<div id="coachVodForm">
		<p id="coachComment">Comment Number: <span><u> #6</u></span></p>
		
		<p id="timeStamp">Timestamp: <span><u> 2:51</u></span></p>


		<p>Your Coaching Comment:</p>
	    <textarea id="coachingComment" rows="4"  />
	</div>

</div>



);

export default CoachVod;