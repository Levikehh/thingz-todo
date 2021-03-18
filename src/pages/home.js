import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            todoName: ''
        }

        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.removeAll = this.removeAll.bind(this)
        this.setTodoName = this.setTodoName.bind(this)
    }

    setTodoName = (value) => {
        this.setState({
            todoName: value
        })
    }

    addItem = (item) => {
        let newItems = [...this.state.items]
        newItems.push(item)
        this.setState({
            items: newItems,
            todoName: ''
        })
    }

    removeItem = (index) => {
        let newItems = [...this.state.items]
        newItems.splice(index, 1)
        this.setState({
            items: newItems
        })
    }

    removeAll = () => {
        let newItems = [...this.state.items]
        newItems = []
        this.setState({
            items: newItems
        })
    }

    render() {
        return (
            <>
                <h1 className='todo-header'>
                    You have {this.state.items.length} todos
                </h1>
                <h3 className='todo-sub_header'>
                    (Click on an item to remove)
                </h3>
                <div className='todo-container'>
                    <ul>
                        {this.state.items && this.state.items.map((item, i) => {
                            return (
                                <li
                                    key={i}
                                    className={`todo-${i}`}
                                    onClick={() => this.removeItem(i)}
                                >{item.name}</li>
                            )
                        })}
                    </ul>

                </div>
                <div className='todo-controls'>
                    <input
                        className='todo-input'
                        value={this.state.todoName}
                        onChange={(event) => {
                            this.setTodoName(event.target.value)
                        }}
                        placeholder='Type something' />
                    <div className='todo-btns'>
                        <button
                            className='todo-add_btn'
                            onClick={() => this.addItem({ name: this.state.todoName })}
                            disabled={!this.state.todoName || this.state.todoName === ' '}
                        >Add</button>
                        {this.state.items && this.state.items.length ? (
                            <button
                                className='todo-remove_btn'
                                onClick={() => this.removeAll()}
                            >Remove All</button>
                        ) : ''}
                    </div>

                </div>
            </>

        );
    }
}

export default Home;