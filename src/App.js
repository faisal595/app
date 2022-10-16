
import "./App.css";

function App(props){
  return(
    <div className="container">
      <div className="box">

        <div className="box-img">
          <img src={props.emp.profileImg} alt=""/>
        </div>

        <div className="content">
          <h1>{props.emp.name}</h1>
          <p>Location</p>
          <h2>{props.emp.location}</h2>
          <br/>
          <p>Blood Group</p>
          <h2>{props.emp.bloodGroup}</h2>
          <br/>
          <p>Age</p>
          <h2>{props.emp.age}</h2>
        </div>
      </div>
    </div>
  );
}
export default App;