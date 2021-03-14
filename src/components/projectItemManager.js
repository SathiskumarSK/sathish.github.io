import React, { Children, cloneElement, isValidElement } from 'react'
import { Link } from "gatsby"
import '../styles/ProjectItem.scss'
import Img from 'gatsby-image'

class ProjectItemManager extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hoveredItemIndex: null
		}
	}

  // return function for updating state given project id
	handleMouseOver = (projectId) => {
    return () => this.setState({ hoveredItemIndex: projectId });
	}

	handleMouseLeave = () => this.setState({ hoveredItemIndex: null });

  isElementFaded = (projectId) => {
    const { hoveredItemIndex } = this.state;
    if (hoveredItemIndex === null) {
      return false;
    } else if (hoveredItemIndex === projectId) {
      return false;
    } else {
      return true;
    }
  }

	rotationDirection = (projectId) => {
		return projectId % 2 === 0;
	}

	render () {
    const { children } = this.props;
		const { hoveredItemIndex } = this.state;

    const processedItems = Children.map(children, (child, index) => {
			let isHovered = false;
			if (hoveredItemIndex !== null && index === hoveredItemIndex) {
				isHovered = true;
			} else {
				isHovered = false;
			}
      if (isValidElement(child)) {
        // if child prop static is true, don't change
        if (child.props.static === true) {
          return child;
        }
        // clone element with new props and existing props
        return cloneElement(child, {
          faded: this.isElementFaded(index),
					isHovered : isHovered,
          onHover: this.handleMouseOver(index),
          onLeave: this.handleMouseLeave,
        })
      }
      return child;
    });

		return (
			<div className = "projectItems">
				{ processedItems }
			</div>
		)
	}
}

export default ProjectItemManager
