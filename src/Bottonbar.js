import React, {Component} from 'react';
import './Bottonbar.css';


class Bottonbar extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<div id="bottonbar" className="row align-items-center">
				<div id="info" className="col-6">
					<p>App developed by Stefano Silvestrini</p>
					<p>Tortuga Coders</p>
					<p>Koh Samui, Thailand</p>
				</div>
				<div id="sharing" className="col-6"><div className="fb-share-button"
				data-href="https://pickyourword.herokuapp.com"
				data-layout="button_count" data-size="small">
				<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
				className="fb-xfbml-parse-ignore">แชร์</a></div></div>
				<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.website.com."
   title="Share by Email">Hello
		</a>
			</div>
		)
	}
}

export default Bottonbar;
