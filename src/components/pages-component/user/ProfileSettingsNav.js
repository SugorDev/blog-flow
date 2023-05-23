import { useContext } from "react";
import { MyContext } from "../../../context/PostsContext";

export default function ProfileSettingsNav() {
    const { selectedSettings, setSelectedSettings } = useContext(MyContext);

    return (
        <>
            <ul>
                <li>
                    <button className={`settings-link animate__animated animate__fadeIn ${selectedSettings === 'All' ? 'settings-active' : ''}`} onClick={() => setSelectedSettings('Profile')}>Profile</button>
                </li>
                <li>
                    <button className={`settings-link animate__animated animate__fadeIn ${selectedSettings === 'All' ? 'settings-active' : ''}`} onClick={() => setSelectedSettings('TermsConditions')}>Terms & Conditions</button>
                </li>
            </ul>
        </>
    );
}