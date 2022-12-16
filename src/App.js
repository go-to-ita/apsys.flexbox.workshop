import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Learning Flexbox</h1>
      </header>
      <body className="body">
        <div className="container">
          <div className="home">Home</div>
          <div className="search">Search</div>
          <div className="logout">Logout</div>
        </div>
        <div className="container">
          <div class="item first-face">
            <span class="pip"></span>
          </div>
          <div class="item second-face">
            <span class="pip"></span>
            <span class="pip pip2"></span>
          </div>
          <div class="item third-face">
            <span class="pip"></span>
            <span class="pip pip3"></span>
            <span class="pip pip2"></span>
          </div>
          <div class="item fourth-face">
            <div class="column">
              <span class="pip"></span>
              <span class="pip"></span>
            </div>
            <div class="column">
              <span class="pip"></span>
              <span class="pip"></span>
            </div>
          </div>
          <div class="item fifth-face">
            <div class="column">
              <span class="pip"></span>
              <span class="pip"></span>
            </div>
            <div class="column pip4">
              <span class="pip "></span>
            </div>
            <div class="column">
              <span class="pip"></span>
              <span class="pip"></span>
            </div>
          </div>
          <div class="item sixth-face">
            <div class="column">
              <span class="pip"></span>
              <span class="pip"></span>
              <span class="pip"></span>
            </div>
            <div class="column column2">
              <span class="pip"></span>
              <span class="pip"></span>
              <span class="pip"></span>
            </div>
          </div>
        </div>
        <div class="flex-container">
          <div class="flex-item item1">1</div>
          <div class="flex-item item2">2</div>
          <div class="flex-item item3">3</div>
          <div class="flex-item item4 ">4</div>
        </div>
      </body>
    </div>
  );
}

export default App;
