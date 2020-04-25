import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {
	getStyle = () => {
		return {
			backgroundColor: '#f4f4f4',
			borderBottom: '1px #ccc dotted',
			padding: '10px',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{' '}
					{title}
					<button onClick={this.props.delTodo.bind(this, id)} style={deleteBtn}>
						X
					</button>
				</p>
			</div>
		);
	}
}

TodoItems.propTypes = {
	todo: PropTypes.object.isRequired,
};

const deleteBtn = {
	background: '#ff0000',
	color: '#fff',
	padding: '5px 10px',
	border: 'none',
	borderRadius: '50%',
	float: 'right',
	cursor: 'pointer',
};

export default TodoItems;
