import {Component} from "react";

class TodoAppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        }
    }

    handleAddItem = () => {
        const {item, list} = this.state;
        if (item.trim() !== "") {
            this.setState({
                list: [...list, item],
                item: ""
            });
        }
    };
    handleChange = (event) => {
        this.setState({item: event.target.value});
    };

    render() {
        return (
            <div style={{padding: 20}}>
                <h1>Todo App</h1>
                <input type="text"
                       placeholder="Nhập Công Việc"
                       value={this.state.item}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((task, index) =>
                        (<li key={index}>{task}</li>))}
                </ul>
            </div>
        )
    }
}

export default TodoAppComponent;