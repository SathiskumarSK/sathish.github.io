import React from 'react'
import { Link } from "gatsby"
import '../styles/ProjectItem.scss'
import '../styles/HoverThumbnail.scss'
import Img from 'gatsby-image'
import Measure from 'react-measure'

class HoverThumbnail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isHovered: false,
			renderThumbnailRight: true,
			windowWidth: 0,
			containerRightCoordinate: 0,
			containerLeftCoordinate: 0,
		}
	}

	onResize = (contentRect) => {
		this.setState({ containerRightCoordinate: contentRect.bounds.right});
		this.setState({ containerLeftCoordinate: contentRect.bounds.left});
	}

	handleWindowResize = () => {
		this.setState({ windowWidth: window.innerWidth});
	}

	onHover = () => {
		this.setState({ isHovered: true });
	}

	onLeave = () => {
		this.setState({ isHovered: false });
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
			thumbnail,
			text,
			sizeThumbnail,
		} = this.props;

		const {
			containerRightCoordinate,
			containerLeftCoordinate,
			windowWidth,
			isHovered,
		} = this.state;

		const containerWidth = containerRightCoordinate - containerLeftCoordinate;
		const renderSize = sizeThumbnail;

		let renderClass = "thumbnail-intro";
		let hoverClass = "thumbnail";
		let positionLeft = 400;

		positionLeft = containerWidth - sizeThumbnail - 20;

		if (isHovered) {
			hoverClass = "thumbnail-hovered";
		}

		return(
			<span className="HoverThumbnail">
				<Measure
					bounds
					onResize={this.onResize}>
					{({ measureRef }) => (
						<span ref={measureRef}
							onMouseOver={this.onHover}
							onMouseLeave={this.onLeave}>
							{text}
						</span>
			 		)}
				</Measure>
				<img src={ thumbnail } style={{left: positionLeft, width: `${renderSize}px`}} className={ `${renderClass} ${hoverClass}`}/>
			</span>
		);
	}
}

export default HoverThumbnail
