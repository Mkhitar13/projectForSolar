import { useState } from "react";
import "./registration.scss";

const Registration = () => {

    const [showOrHideSignUp, setShowOrHideSignUp] = useState(false);
    const [showOrHideSignIn, setShowOrHideSignIn] = useState(false);
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div id="registrationContainer">
            <div id="choice">
                <button
                    className='btn block-cube block-cube-hover'
                    type='button'
                    onClick={() => !showOrHideSignUp
                        ? setShowOrHideSignIn(false)
                        : setShowOrHideSignUp(true)
                    }
                >
                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='text'>
                        Sign Up
                    </div>
                </button>

                <button
                    className='btn block-cube block-cube-hover'
                    type='button'
                    onClick={() => !showOrHideSignIn
                        ? setShowOrHideSignIn(true)
                        : setShowOrHideSignUp(false)
                    }>

                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='text'>
                        Sign In
                    </div>
                </button>
            </div>

            <form autoComplete='off' className='form'>
                {/* SECTION SIGNUP STARTS UNDER */}

                {!showOrHideSignIn
                    ? <div id="signUpSection">
                        <div className='control'>
                            <h1>
                                Sign Up
                            </h1>
                        </div>
                        <div>
                            <div className='control block-cube block-input'>
                                <input type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="NAME"
                                />
                                <div className='bg-top'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg-right'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg'>
                                    <div className='bg-inner'></div>
                                </div>
                            </div>

                            <div className='control block-cube block-input'>
                                <input type="text"
                                    value={secondName}
                                    onChange={e => setSecondName(e.target.value)}
                                    placeholder="SECONDNAME"
                                />
                                <div className='bg-top'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg-right'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg'>
                                    <div className='bg-inner'></div>
                                </div>
                            </div>

                            <div className='control block-cube block-input'>
                                <input type="text"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="EMAIL"
                                />
                                <div className='bg-top'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg-right'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg'>
                                    <div className='bg-inner'></div>
                                </div>
                            </div>

                            <div className='control block-cube block-input'>
                                <input type="text"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="PASSWORD"
                                />
                                <div className='bg-top'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg-right'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg'>
                                    <div className='bg-inner'></div>
                                </div>
                            </div>

                            <div className='control block-cube block-input'>
                                <input type="text"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="PASSWORD"
                                />
                                <div className='bg-top'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg-right'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg'>
                                    <div className='bg-inner'></div>
                                </div>
                            </div>

                            <button className='btn block-cube block-cube-hover' type='button'>
                                <div className='bg-top'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg-right'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='bg'>
                                    <div className='bg-inner'></div>
                                </div>
                                <div className='text'>
                                    ENTER
                                </div>
                            </button>
                        </div>
                    </div>

                    /* SECTION SIGNIN STARTS UNDER  */

                    : <div id="signUpSection">
                        <div className='control'>
                            <h1>
                                Sign In
                            </h1>
                        </div>

                        <div className='control block-cube block-input'>
                            <input name='username' placeholder='Username' type='text' />

                            <div className='bg-top'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                        </div>

                        <div className='control block-cube block-input'>
                            <input name='password' placeholder='Password' type='password' />

                            <div className='bg-top'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                        </div>

                        <button className='btn block-cube block-cube-hover' type='button'>
                            <div className='bg-top'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='text'>
                                Log In
                            </div>
                        </button>
                    </div>}
            </form>
        </div >
    )
}
export default Registration;

