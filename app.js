const auth = `<div class="authbody">
            <div class="authhead">
                <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)"> <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"> </polygon> </g> </g> </g></svg>

            </div>
            <div class="welcome">

                <h2>
                    Welcome to Pinterest
                </h2>
            </div>
            <div class="form">
                <div class="input">
                    <div class="lebo">
                        <label for="input">Email</label>
                    </div>
                    <input type="text" placeholder="Email">
                </div>
                <div class="input">
                    <div class="lebo">
                        <label for="input">Password</label>
                    </div>
                    <input type="text" placeholder="Password">
                </div>
                <div class="forgot">
                    <p>Forgot your password?</p>
                </div>
                <div class="input">
                    <input type="submit" value="Login" id="login"  >
                </div>
                <div class="or"><p>OR</p></div>
                <div class="input2">
                    <div id="button">
                        <img src="./facebook.png" alt="">
                        Continue with facebook
                    </div>
                </div>
                <div class="input2">

                    <div id="buttonG">
                        <img src="./google.png" alt="">
                        Continue with Google</div>
                </div>
                <div class="text">
                    <p>
                        By continuing, you agree to Pinterest's Terms of Service and acknowledge you've read our Privacy Policy. Notice at collection.
                    </p>
                </div>
                <div class="text2">
                    <p>
                        Not on Pinterest yet?<b> Sign up</b>
                    </p>
                    <p>
                        Are you a business?
                        <b>Get started here!</b>
                    </p>
                </div>

            </div>
        </div>`
const login = document.getElementById("login")
login.addEventListener("click",()=>{
    document.getElementById("auth").innerHTML = auth
})