import Button from './../components/button';

function Register(){
    return(
        <div className="main">
            <form>
                <label>Email</label>
                <input type="email" placeholder="Email"/>
                <label>First name</label>
                <input type="firstname" placeholder="First name"/>
                <label>Last name</label>
                <input type="lastname" placeholder="Last name"/>
                <label>Address</label>
                <textarea placeholder="Address"></textarea>
                <label>Password</label>
                <input type="password" placeholder="Password"/>
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password"/>                
                <Button value="Register" btnClass="btn"/>
            </form>
        </div>
    );
}

export default Register;