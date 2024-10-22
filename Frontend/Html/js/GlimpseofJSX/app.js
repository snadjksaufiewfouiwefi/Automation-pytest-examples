const Custom = () => {
    return(
        <nav>
            <div>1</div>
            <input></input>
            <div>2</div>
        </nav>
    )
}

const App = () => {
    return(
        <div>
            <h1>
                welcome to react
            </h1>
            <button>click</button>
            <custom/>
            <custom/>
            <custom/>
            <custom/>
        </div>
    )

}

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

root.render(<App/>);