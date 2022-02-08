import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      <div class="pro-img">
        <img className="img-top" src=(employee.profileimg) width="100" height="100" alt="profile image" />
      </div>
      <div className="title">
        <h1>(employee.name)</h1>
      </div>
      <div className="pro-info">
        <label>location</label>
        <strong>(employee.location)</strong>

      </div>
      <div className="pro-info">
        <label>Blood group</label>
        <strong>(employee.bloodgroup)</strong>


      </div>
      <div className="pro-info">
        <label>Age</label>
        <strong>(employee.age)</strong>


      </div>
    </div>
  )
}



export default App;
