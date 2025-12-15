import React from 'react'
import Nav from './Components/Nav'

function Home() {
  return (
   <>
    <div className="jumbotron">
  <div className="container text-center">
    <h1>Online Store</h1>      
    <p>Mission, Vission & Values</p>
  </div>
</div>


<Nav />
<div className="container">    
  <div className="row">
    <div className="col-sm-4">
      <div className="panel panel-primary">
        <div className="panel-heading">BLACK FRIDAY DEAL</div>
        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/></div>
        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
      </div>
    </div>
    <div className="col-sm-4"> 
      <div className="panel panel-danger">
        <div className="panel-heading">BLACK FRIDAY DEAL</div>
        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/></div>
        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
      </div>
    </div>
    <div className="col-sm-4"> 
      <div className="panel panel-success">
        <div className="panel-heading">BLACK FRIDAY DEAL</div>
        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/></div>
        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
      </div>
    </div>
  </div>
</div><br/>

<div className="container">    
  <div className="row">
    <div className="col-sm-4">
      <div className="panel panel-primary">
        <div className="panel-heading">BLACK FRIDAY DEAL</div>
        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/></div>
        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
      </div>
    </div>
    <div className="col-sm-4"> 
      <div className="panel panel-primary">
        <div className="panel-heading">BLACK FRIDAY DEAL</div>
        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/></div>
        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
      </div>
    </div>
    <div className="col-sm-4"> 
      <div className="panel panel-primary">
        <div className="panel-heading">BLACK FRIDAY DEAL</div>
        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/></div>
        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
      </div>
    </div>
  </div>
</div><br/><br/>

<footer className="container-fluid text-center">
  <p>Online Store Copyright</p>  
  <form className="form-inline">Get deals:
    <input type="email" className="form-control" size="50" placeholder="Email Address"/>
    <button type="button" className="btn btn-danger">Sign Up</button>
  </form>
</footer>


   </>
  )
}

export default Home