import { useContext } from "react";
import { MyContext } from "../../../context/PostsContext";

export default function ProfileSettingsBody() {
    const { selectedSettings } = useContext(MyContext);
    return (
        <>
            <ul className="body-list">
                <li visible={selectedSettings === 'Profile'} hidden={selectedSettings !== 'Profile'}>
                    <div className="mb-3">
                        <label for="user-profile-photo" className="form-label">Profile Photo</label>
                        <input type="file" id="user-profile-photo" />
                    </div>
                    <div className="mb-3">
                        <label for="user-display-name" className="form-label">Display Name</label>
                        <input type="text" id="user-display-name" disabled/>
                    </div>
                    <div className="mb-3">
                        <label for="form-blog-content" className="form-label">Bio</label>
                        <textarea id="contact-content" rows="10" placeholder="Tell us about yourself"></textarea>
                    </div>
                    <div className="mb-3">
                        <ul className="user-social-links">
                            <li>
                                <label for="user-social-facebook" className="form-label">Facebook</label>
                                <input type="text" id="user-social-facebook" />
                            </li>
                            <li>
                                <label for="user-social-facebook" className="form-label">Instagram</label>
                                <input type="text" id="user-social-instagram" />
                            </li>
                            <li>
                                <label for="user-social-facebook" className="form-label">Instagram</label>
                                <input type="text" id="user-social-instagram" />
                            </li>
                            <label for="user-social-facebook" className="form-label">Twitter</label>
                            <input type="text" id="user-social-twitter" />
                            <li>
                                <label for="user-social-facebook" className="form-label">Youtube</label>
                                <input type="text" id="user-social-youtube" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li visible={selectedSettings === 'UserSecurity'} hidden={selectedSettings !== 'UserSecurity'}>
                    User & Security Section
                </li>
                <li visible={selectedSettings === 'TermsConditions'} hidden={selectedSettings !== 'TermsConditions'}>
                    Terms & Conditions Section
                </li>
            </ul>
        </>
    );
}