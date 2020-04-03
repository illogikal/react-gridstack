import React from 'react'
import PropTypes from 'prop-types'

export default class GridStackItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.children
  }
}

GridStackItem.propTypes = {
  autoPosition: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.number,
  id: PropTypes.string.isRequired,
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  minWidth: PropTypes.number,
  onShouldUpdate: PropTypes.func,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
}

GridStackItem.defaultProps = {
  onShouldUpdate: () => {return false}
}
