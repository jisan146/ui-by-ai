import React, { Component, lazy, Suspense } from "react";
import Cookies from "js-cookie";

const MainLayout = lazy(() => import("./components/MainLayout/MainLayout"));
const LoginLanding = lazy(() => import("./components/LoginLanding/LoginLanding"));

class App extends Component {

    state = {
        isLoggedIn: !!Cookies.get("token"),
    };

    componentDidMount() {
        window.addEventListener("authChanged", this.checkAuth);
    }

    componentWillUnmount() {
        window.removeEventListener("authChanged", this.checkAuth);
    }

    checkAuth = () => {
        this.setState({
            isLoggedIn: !!Cookies.get("token"),
        });
    };

    render() {
        return (
            <Suspense fallback={null}>
                {this.state.isLoggedIn ? (
                    <MainLayout />
                ) : (
                    <LoginLanding />
                )}
            </Suspense>
        );
    }
}

export default App;

/*
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
http://127.0.0.1:8000/docs/api
mxho tejd lsne jvfd
import React, { Component, lazy, Suspense } from "react";
 <Suspense fallback={<div>Loading...</div>}>
                    <Login />
                </Suspense>
                <Suspense fallback={null}>
        <LoginModal />
    </Suspense>
    
*/