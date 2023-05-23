import MyContextProvider from "../../../context/PostsContext";
import Navbar from "../sub-components/Navbar";
import ProfileSettingsBody from "./ProfileSettingsBody";
import ProfileSettingsNav from "./ProfileSettingsNav";
import './profSettings-style.css';


export default function ProfileSettings() {
    return (
        <>
            <Navbar />
            <MyContextProvider>
                <div className="settings-section d-flex justify-content-center align-items-start">
                    <div className="settings-category">
                        <ProfileSettingsNav />
                    </div>

                    <div className="settings-body">
                        <ProfileSettingsBody />
                    </div>
                </div>
            </MyContextProvider>
        </>
    );
}