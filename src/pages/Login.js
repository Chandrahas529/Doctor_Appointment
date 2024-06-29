import src1 from "../images/d.jpg"
import "../pages/login.css"
function Login() {
    return (
        <div className="outer-ctn">
            <div className="inner-ctn">
                <img className="login-img" src={src1} />
                <div className="login-sec">
                    <div className="c1" id="c1">
                        <span className="log">Login</span>
                        <form className="login-form">
                            <div className="c2"><label>Name</label><br /><input className="text" type="text" /></div>
                            <div className="c2"><label>Password</label><br /><input className="text" type="text" /></div>
                            <button className="login-btn">Login</button>
                            <div style={{ color: "black" }}>or</div>
                            <span onClick={register}>Register as a new User</span>
                        </form>
                    </div>
                    <div className="c12" id="c12">
                        <span className="log2">Register</span>
                        <form className="login-form2">
                            <div className="c2"><label>Name</label><br /><input className="text" type="text" /></div>
                            <div className="c2"><label>Email</label><br /><input className="text" type="text" /></div>
                            <div className="c2"><label>Mobile Number</label><br /><input className="text" type="text" /></div>
                            <div className="c21"><label>Gender</label><div className="inline"><input name="gender" className="text" type="radio" value="male"/> Male</div><div className="inline"><input name="gender" className="text" type="radio" /> Female</div></div>
                            <div className="c2"><label>Create Password</label><br /><input className="text" type="text" /></div>
                            <button className="login-btn">Submit</button>
                            <div style={{ color: "black" }}>or</div>
                            <span  onClick={loginbtn}>Already have an account</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

function register(){
    var c1 = document.getElementById('c1')
    var c12 = document.getElementById('c12')
    c1.style.display = "none";
    c12.style.display = "flex";
}
function loginbtn(){
    var c1 = document.getElementById('c1')
    var c12 = document.getElementById('c12')
    c1.style.display = "flex";
    c12.style.display = "none";
}

export default Login;