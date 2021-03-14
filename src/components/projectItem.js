import React from 'react'
import '../styles/ProjectItem.scss'
import Measure from 'react-measure'
import { ThemeContext } from 'styled-components';
import styled from "styled-components";
import Img from "gatsby-image";
import { defaultTheme } from './theme';

class ProjectItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hovered: false,
			renderThumbnailRight: true,
			windowWidth: 0,
			projectItemRightCoordinate: 0,
		}
	}

	onResize = (contentRect) => {
		this.setState({ projectItemRightCoordinate: contentRect.bounds.right});
	}

	handleWindowResize = () => {
		this.setState({ windowWidth: window.innerWidth});
	}

	componentDidMount () {
		window.addEventListener('resize', this.handleWindowResize);
		this.setState({ windowWidth: window.innerWidth});
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.handleWindowResize)
	}

	render () {

		const {
			link,
			title,
			skills,
			description,
			faded,
			isHovered,
			onHover,
			onLeave,
			thumbnail,
			backgroundColor
		} = this.props;

		const {
			projectItemRightCoordinate,
			windowWidth
		} = this.state;

		const xCoordinateThumbnail = projectItemRightCoordinate + 200;

		let renderClass = "thumbnail-right";
		let hoverClass = "thumbnail";

		if (xCoordinateThumbnail >= windowWidth) {
			renderClass = "thumbnail-left";
		}


		if (isHovered) {
			hoverClass = "thumbnail-hovered";
		}

		return(
			<ThemeContext.Consumer>
				{(theme = defaultTheme) => (
					<div className={faded ? "projectItemContainer hvr-float ProjectItem-Faded" :
					`projectItemContainer hvr-float`} style={{backgroundColor: backgroundColor}}>
						<Img fluid={ thumbnail } className={ `${renderClass} ${hoverClass}`} style={{border: `1px solid ${backgroundColor}`}}/>
						<Measure
							bounds
							onResize={this.onResize}>
							{({ measureRef }) => (
								<div ref={measureRef} className={faded ? "ProjectItem ProjectItem-Faded" :
								`ProjectItem`}
									onMouseOver={onHover}
									onMouseLeave={onLeave}>
									<a href={link} className="link-container">
										<div className="project-text">
											<h1 className="project-title">{title}</h1>
											<h3 className="skills">{skills}</h3>
											<p className="description">{description}</p>
										</div>
									</a>
								</div>
					 		)}
						</Measure>
						<div className="projectBackground">
							<svg xmlns='http://www.w3.org/2000/svg'>
								<filter id='n'>
									<feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='1' stitchTiles='stitch'/>
								</filter>
								<rect fill={backgroundColor} height="100%"/>
								<rect filter="url(#n)" opacity='0.5'/>
							</svg>
						</div>
						<div className={isHovered ? theme.sprinklesClassName : null}></div>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default ProjectItem
