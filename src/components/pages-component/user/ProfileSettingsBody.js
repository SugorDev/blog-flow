import { useContext, useState } from "react";
import { MyContext } from "../../../context/PostsContext";

export default function ProfileSettingsBody() {
    const { selectedSettings } = useContext(MyContext);

    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setProfilePhoto(file);
    };
    return (
        <>
            <ul className="body-list">
                <li className="user-profile-display" visible={`selectedSettings === 'Profile'`} hidden={selectedSettings !== 'Profile'}>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Profile Photo</label>
                            <div className="profile-container">
                                <input type="file" id="user-profile-photo" onChange={handleFileChange} hidden/>
                                {profilePhoto && (
                                    <img src={URL.createObjectURL(profilePhoto)} alt="Thumbnail" className="mt-2 profile-photo-preview" accept=".png, .jpg, .jpeg" />
                                )}

                                <label htmlFor="user-profile-photo" className="change-photo"><i className="fa-regular fa-circle-user"></i><p>Change</p></label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user-display-name" className="form-label">Display Name</label>
                            <input type="text" id="user-display-name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user-bio-content" className="form-label">Bio</label>
                            <textarea id="user-bio-content" rows="8" placeholder="Tell us about yourself"></textarea>
                        </div>
                        <div className="mb-3">
                            <h3>Social Links</h3>
                            <ul className="user-social-links">
                                <li>
                                    <label htmlFor="user-social-facebook" className="form-label">Facebook</label>
                                    <input type="text" id="user-social-facebook" />
                                </li>
                                <li>
                                    <label htmlFor="user-social-instagram" className="form-label">Instagram</label>
                                    <input type="text" id="user-social-instagram" />
                                </li>
                                <li>
                                    <label htmlFor="user-social-twitter" className="form-label">Twitter</label>
                                    <input type="text" id="user-social-twitter" />
                                </li>
                                <li>
                                    <label htmlFor="user-social-youtube" className="form-label">Youtube</label>
                                    <input type="text" id="user-social-youtube" />
                                </li>
                            </ul>
                        </div>
                        <button className="user-save-changes">Save Changes</button>
                    </form>
                </li>
                <li className="terms-conditions" visible={`selectedSettings === 'TermsConditions'`} hidden={selectedSettings !== 'TermsConditions'}>
                    <h2>Terms & Conditions</h2>
                    <h5>Acceptance of Terms</h5>
                    By using this website or any related services, you agree to these absurd and comical terms and conditions. If you do not agree, please refrain from using the website and promptly close your browser window.

                    <h5>Intellectual Property</h5>
                    All the content on this website, including but not limited to nonsensical text, whimsical images, and ludicrous videos, is the intellectual property of the website owner. You may not reproduce, modify, or distribute any of the content without obtaining the explicit permission of a fictional character named Mr. Mumbo Jumbo.

                    <h5>Unicorns and Rainbows</h5>
                    This website may occasionally feature unicorns and rainbows, which are purely for decorative purposes. We do not guarantee the existence of actual unicorns or the presence of rainbows in your vicinity. Any disappointment caused by the absence of magical creatures is entirely your responsibility.

                    <h5>Nonexistent Customer Support</h5>
                    We take pride in our non-existent customer support department. If you have any questions, concerns, or complaints, please send them to our imaginary email address (support@makebelieve.com), and expect an equally imaginative response within 72 imaginary hours.

                    <h5>Absurd Privacy Policy</h5>
                    We assure you that your privacy is of no concern to us. We may collect imaginary data about your non-existent browsing habits for completely fictional analytical purposes. Rest assured, we have no intention of using this imaginary data for anything other than our own amusement.

                    <h5>Cookies and Marshmallows</h5>
                    This website uses cookies to track your imaginary preferences. By continuing to use this site, you consent to the use of delicious chocolate chip cookies and fluffy marshmallows, both real and imaginary, as well as any other pretend snacks that may magically appear during your browsing session.

                    <h5>Liability Waiver</h5>
                    By using this website, you absolve us of any liability for any imaginary damages, including but not limited to laughter-induced abdominal pain, temporary loss of sanity, or any unexpected encounters with leprechauns, aliens, or time-traveling dinosaurs that may result from your visit.

                    <h5>Governing Law of Nonsense</h5>
                    These terms and conditions are governed by the laws of the Land of Absurdity. Any legal disputes arising from the interpretation or violation of these terms shall be settled by a fictional court presided over by a whimsical judge and a jury of animated characters.
                </li>
            </ul>
        </>
    );
}