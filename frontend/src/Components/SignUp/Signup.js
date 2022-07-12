import './Signup.css';
import InputField from '../Common/InputField'
import google_logo from '../../Assets/Images/google.svg'

export default function Signup(props) {
  return (
    <>
    <div
        style={{
        fontSize: 36,
        fontWeight: "bold",
        fontFamily: '"Poppins"',
        textAlign: "center",
        marginTop: 38
        }}
    >
        Sign Up
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div
        style={{
            background: "#F6F7FB",
            borderRadius: 10,
            paddingLeft: 68,
            paddingRight: 68,
            paddingTop: 61,
            paddingBottom: 61,
            width: "fit-content",
            marginTop: 25
        }}
        >
        <div className="sign-in-input-field-container">
            <select
            style={{
                fontSize: 18,
                fontFamily: "poppins",
                outline: "none",
                border: "none",
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                marginBottom: 10
            }}
            >
            <option>Student</option>
            <option>Faculty</option>
            <option>College Administrator</option>
            <option>University Administrator</option>
            </select>
        </div>

        <InputField type="email" placeholder="Email" />
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <InputField type="password" placeholder="Confirm Password" />

        <div
            style={{
            textAlign: "center",
            marginTop: 25,
            fontFamily: "poppins",
            fontWeight: 800,
            display: "flex",
            flexDirection: "row"
            }}
        >
            <div>Already have an account ?</div>
            <div style={{ color: "#2C5EFF", fontWeight: "bolder", marginLeft: 5 }}>
            Login in
            </div>
        </div>
        <div style={{ textAlign: "center" }}>
            <button
            className="sign-in-button"
            style={{ width: "80%", height: "6vh", marginTop: 17 }}
            >
            Sign In
            </button>
        </div>
        <div style={{ textAlign: "center" }}>
            <button
            className="sign-in-with-google-button"
            style={{ height: "6vh" }}
            >
            <div style={{ display: "flex" }}>
                <div style={{ margin: "auto" }}>
                <img src={google_logo} alt="" width="70%" height="70%" />
                </div>
                <div
                style={{
                    fontFamily: "poppins",
                    fontWeight: "bold",
                    margin: "auto"
                }}
                >
                Sign in with Google
                </div>
            </div>
            </button>
        </div>
        </div>
    </div>
    </>

  );
}
