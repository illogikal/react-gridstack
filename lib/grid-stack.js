'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('gridstack/dist/gridstack.js');

require('gridstack/dist/gridstack.css');

var _differenceWith = require('lodash/differenceWith');

var _differenceWith2 = _interopRequireDefault(_differenceWith);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridStack = function (_React$Component) {
  _inherits(GridStack, _React$Component);

  function GridStack(props) {
    _classCallCheck(this, GridStack);

    return _possibleConstructorReturn(this, (GridStack.__proto__ || Object.getPrototypeOf(GridStack)).call(this, props));
  }

  _createClass(GridStack, [{
    key: 'clear',
    value: function clear() {
      (0, _jquery2.default)(this.refs.gridstack).data('gridstack').removeAll();
    }
  }, {
    key: 'onAdded',
    value: function onAdded(e, items) {
      if (this.props.onAdded) {
        this.props.onAdded(e, items);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e, items) {
      if (this.props.onChange) {
        this.props.onChange(e, items);
      }
    }
  }, {
    key: 'onDisable',
    value: function onDisable(e) {
      if (this.props.onDisable) {
        this.props.onDisable(e);
      }
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(e, ui) {
      if (this.props.onDragStart) {
        this.props.onDragStart(e, ui);
      }
    }
  }, {
    key: 'onDragStop',
    value: function onDragStop(e, ui) {
      if (this.props.onDragStop) {
        this.props.onDragStop(e, ui);
      }
    }
  }, {
    key: 'onEnable',
    value: function onEnable(e) {
      if (this.props.onEnable) {
        this.props.onEnable(e);
      }
    }
  }, {
    key: 'onRemoved',
    value: function onRemoved(e, items) {
      if (this.props.onRemoved) {
        this.props.onRemoved(e, items);
      }
    }
  }, {
    key: 'onResizeStart',
    value: function onResizeStart(e, ui) {
      if (this.props.onResizeStart) {
        this.props.onResizeStart(e, ui);
      }
    }
  }, {
    key: 'onResizeStop',
    value: function onResizeStop(e, ui) {
      if (this.props.onResizeStop) {
        this.props.onResizeStop(e, ui);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = {
        acceptWidgets: this.props.acceptWidgets,
        alwaysShowResizeHandle: this.props.alwaysShowResizeHandle,
        animate: this.props.animate,
        auto: this.props.auto,
        cellHeight: this.props.cellHeight,
        disableDrag: this.props.disableDrag,
        disableResize: this.props.disableResize,
        draggable: this.props.draggable,
        float: this.props.float,
        handle: this.props.handle,
        handleClass: this.props.handleClass,
        height: this.props.height,
        itemClass: this.props.itemClass,
        minWidth: this.props.minWidth,
        placeholderClass: this.props.placeholderClass,
        placeholderText: this.props.placeholderText,
        removable: this.props.removable,
        removeTimeout: this.props.removeTimeout,
        resizable: this.props.resizable,
        rtl: this.props.rtl,
        staticGrid: this.props.staticGrid,
        verticalMargin: this.props.verticalMargin,
        width: this.props.width
      };

      var gridstack = (0, _jquery2.default)(this.refs.gridstack).gridstack(options).data('gridstack');
      (0, _jquery2.default)(this.refs.gridstack).on('resizestop', this.onResizeStop.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).on('resizestart', this.onResizeStart.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).on('removed', this.onRemoved.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).on('dragstop', this.onDragStop.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).on('dragstart', this.onDragStart.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).on('disable', this.onDisable.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).on('enable', this.onEnable.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).on('change', this.onChange.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).on('added', this.onAdded.bind(this));

      this.props.children.forEach(function (child) {
        gridstack.addWidget('<div class="grid-stack-item"><div id="' + child.props.id + '" class="grid-stack-item-content"></div></div>', child.props.x, child.props.y, child.props.width, child.props.height, child.props.autoPosition, child.props.minWidth, child.props.maxWidth, child.props.minHeight, child.props.maxHeight, child.props.id);
        _reactDom2.default.render(child, document.getElementById(child.props.id));
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _jquery2.default)(this.refs.gridstack).off('resizestop', this.onResizeStop.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).off('resizestart', this.onResizeStart.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).off('removed', this.onRemoved.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).off('dragstop', this.onDragStop.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).off('dragstart', this.onDragStart.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).off('disable', this.onDisable.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).off('enable', this.onEnable.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).off('change', this.onChange.bind(this));
      (0, _jquery2.default)(this.refs.gridstack).off('added', this.onAdded.bind(this));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // If the list of widgets in props in empty, then simply clear the grid
      if (this.props.children.length === 0) {
        this.clear();
        return;
      }

      var gridstack = (0, _jquery2.default)(this.refs.gridstack).data('gridstack');

      // Find any widgets we need to remove
      var toRemove = (0, _differenceWith2.default)(prevProps.children, this.props.children, function (a, b) {
        return a.props.id === b.props.id;
      });

      // Find new widgets or those we need to re-render
      var uniques = this.props.children.filter(function (newChild) {
        for (var index in prevProps.children) {
          var oldChild = prevProps.children[index];

          if (oldChild.props.id === newChild.props.id && !newChild.props.onShouldUpdate(oldChild, newChild)) {
            return false;
          }
        }
        return true;
      });

      // Remove widgets that user said to remove
      toRemove.forEach(function (child) {
        var el = document.getElementById(child.props.id);
        if (el !== null) {
          _reactDom2.default.unmountComponentAtNode(el);
          gridstack.removeWidget(el.parentElement);
        }
      });

      // Add new widgets or re-render any widgets that changed
      uniques.forEach(function (child) {
        var el = document.getElementById(child.props.id);
        if (el !== null) {
          _reactDom2.default.unmountComponentAtNode(el);
        } else {
          gridstack.addWidget('<div class="grid-stack-item"><div id="' + child.props.id + '" class="grid-stack-item-content"></div></div>', child.props.x, child.props.y, child.props.width, child.props.height, child.props.autoPosition, child.props.minWidth, child.props.maxWidth, child.props.minHeight, child.props.maxHeight, child.props.id);
        }
        _reactDom2.default.render(child, document.getElementById(child.props.id));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: 'gridstack', className: 'grid-stack' });
    }
  }, {
    key: 'layout',
    get: function get() {
      var layout = (0, _map2.default)((0, _jquery2.default)('.grid-stack .grid-stack-item:visible'), function (el) {
        var node = (0, _jquery2.default)(el).data('_gridstack_node');
        return {
          id: node.id,
          maxHeight: node.maxHeight,
          maxWidth: node.maxWidth,
          minHeight: node.minHeight,
          minWidth: node.minWidth,
          height: node.height,
          width: node.width,
          x: node.x,
          y: node.y
        };
      });
      return layout;
    }
  }]);

  return GridStack;
}(_react2.default.Component);

exports.default = GridStack;


GridStack.propTypes = {
  acceptWidgets: _react2.default.PropTypes.bool,
  alwaysShowResizeHandle: _react2.default.PropTypes.bool,
  animate: _react2.default.PropTypes.bool,
  auto: _react2.default.PropTypes.bool,
  cellHeight: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
  children: _react2.default.PropTypes.node,
  disableDrag: _react2.default.PropTypes.bool,
  disableResize: _react2.default.PropTypes.bool,
  draggable: _react2.default.PropTypes.object,
  float: _react2.default.PropTypes.bool,
  handle: _react2.default.PropTypes.string,
  handleClass: _react2.default.PropTypes.string,
  height: _react2.default.PropTypes.number,
  itemClass: _react2.default.PropTypes.string,
  minWidth: _react2.default.PropTypes.number,
  onAdded: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onDisable: _react2.default.PropTypes.func,
  onDragStart: _react2.default.PropTypes.func,
  onDragStop: _react2.default.PropTypes.func,
  onEnable: _react2.default.PropTypes.func,
  onRemoved: _react2.default.PropTypes.func,
  onResizeStart: _react2.default.PropTypes.func,
  onResizeStop: _react2.default.PropTypes.func,
  placeholderClass: _react2.default.PropTypes.string,
  placeholderText: _react2.default.PropTypes.string,
  removable: _react2.default.PropTypes.bool,
  removeTimeout: _react2.default.PropTypes.number,
  resizable: _react2.default.PropTypes.bool,
  rtl: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.string]),
  staticGrid: _react2.default.PropTypes.bool,
  verticalMargin: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
  width: _react2.default.PropTypes.number
};