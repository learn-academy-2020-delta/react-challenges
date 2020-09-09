<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <title>Intro to React</title>

</head>
<body>

  <div id="react-container"></div>

  <script type="text/babel">
    class App extends React.Component{
      render(){
        return(
            <div>
                <Header />
                <h1>Hello React!</h1>
            </div>
        )
      }
    }

    class Header extends React.Component{
        render(){
            return(
                <h1>Delta Cohort</h1>
            )
        }
    }
    const domContainer = document.querySelector('#react-container')
    ReactDOM.render(<App />, domContainer)
  </script>
</body>
</html>