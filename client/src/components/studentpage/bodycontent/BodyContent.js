import React from "react"; 
import "./BodyContent.css";
import ProfileSection from "./profilesection/ProfileSection"
import RequestSection from "./requestsection/RequestSection"
import ProgressSection from "./progresssection/ProgressSection"
import VodsSection from "./vodssection/VodsSection"

const BodyContent = () => (

<div id="bodyContent" className="col-sm-9 col-md-9 col-lg-9">

	<div className="tab-content">

		<div id="studentRequest" className="tab-pane fade in active">
			<RequestSection />
		</div>

		<div id="studentVods" className="tab-pane fade">
			<VodsSection />
		</div>

		<div id="studentProgress" className="tab-pane fade">
			<ProgressSection />
		</div>

		<div id="studentProfile" className="tab-pane fade">
			<ProfileSection />
		</div>

	</div>

</div>

);

export default BodyContent;