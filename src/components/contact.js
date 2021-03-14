import React from 'react';
import '../styles/Contact.scss';
import { ThemeContext } from 'styled-components';
import styled from "styled-components";
import { defaultTheme } from './theme';

const copyEmail = () => {
	var $body = document.getElementsByTagName('body')[0];
	var $copyEmailText = document.getElementById('copyEmailText');
	var myEmail = document.getElementById('myEmail').innerHTML;

	var copyToClipboard = function(myEmail) {
		var $tempInput = document.createElement('INPUT');
		$body.appendChild($tempInput);
		$tempInput.setAttribute('value', myEmail)
		$tempInput.select();
		document.execCommand('copy');
		$body.removeChild($tempInput);
		$copyEmailText.focus();
	}
	copyToClipboard(myEmail);
}

const ContactContainer = styled.div`
	background-color: ${({ theme }) => theme.contactTile};
	position: relative;
  transform: perspective(0px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
	backface-visibility: hidden;
	transform: perspective(1px) scale(1.0,1.0);

	&:hover {
		cursor: crosshair;
	}

	&:hover, &:focus, &:active {
		-webkit-transform: translateZ(0) scale(1.0) rotate(3deg);
	  transform: translateZ(0) scale(1.0) rotate(3deg);
		backface-visibility: hidden;
	}

	h3, h1, a {
		margin-bottom: 0px;
		color: ${({ theme }) => theme.background};
	}
`

const ContactLayer = styled.div`
	background-color: ${({ theme }) => theme.contactTile};
	transition: background-color 0.2s linear;
	height: 100%;
	width: 100%;
	min-height: 10rem;

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.copyEmailText {
		color: ${({ theme }) => theme.background};

		&:before {
			color: ${({ theme }) => theme.background};
			border-top: 5px solid ${({ theme }) => theme.background};
		}

		&:after {
			background-color: ${({ theme }) => theme.background};
			color: ${({ theme }) => theme.text};
		}
	}
`

const Contact = props => (
	<ThemeContext.Consumer>
		{(theme = defaultTheme) => (
			<ContactContainer className={props.faded ? "ProjectItem-Faded" :
			``}>
				<ContactLayer>
					<div className="contact-layer">
						<h1>Reach out</h1>
						<div className="contact-links">
							<h3><button className="copyEmailText" id="copyEmailText" onClick={copyEmail}>Email</button></h3>
							<div id="myEmail" style={{display: 'none'}}>{props.email}</div>
							<h3><a target="_blank" href={props.Behance}>Behance</a></h3>
							<h3><a target="_blank" href={props.instagram}>Instagram</a></h3>
							<h3><a target="_blank" href={props.linkedin}>Linkedin</a></h3>
						</div>
					</div>
				</ContactLayer>
				<div className={theme.diagonalTileClassName}></div>
			</ContactContainer>
		)}
	</ThemeContext.Consumer>
)


export default Contact
