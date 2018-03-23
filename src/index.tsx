import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IButtonProps { callback: () => void; }

class TheButton extends React.Component<IButtonProps> {

    constructor(props: IButtonProps) {
        super(props);
    }

    public render() {
        return <button onClick={this.props.callback}>Hit me!</button>;
    }
}

interface ICounterProps { count: number; }

class Counter extends React.Component<ICounterProps> {

    constructor(props: ICounterProps) {
        super(props);
    }

    public render() {
        return <p>You hit the button {this.props.count} times.</p>;
    }
}

interface ICounterState {
    count: number;
}

class App extends React.Component<{}, ICounterState> {

    constructor(props: any) {
        super(props);
        this.state = { count: 0 };
    }

    public button_clicked() {
        this.setState({ count: this.state.count + 1});
    }

    public render() {
        return (
            <div>
                <div>
                    <TheButton callback={this.button_clicked.bind(this)} />
                </div>
                <div>
                    <Counter count={this.state.count} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
