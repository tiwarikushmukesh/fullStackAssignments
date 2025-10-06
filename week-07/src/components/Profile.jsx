import "../style/Profile.css";
const Profile = () => {
    return (
        <div id="main">
            <div id="header">
                <div id="background">
                    <div className="box" id="box1">
                        <img src="https://plus.unsplash.com/premium_vector-1722950274237-580f74ace94a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="box" id="box2">
                        <h3>Rita Correia</h3>
                        <p>New York, USA</p>
                    </div>
                </div>
                <div id="profilePic" >
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div id="footer">
                <div className="info">
                    <h3 >80k</h3>
                    <p>Followers</p>
                </div>
                <div className="info">
                    <h3 >803k</h3>
                    <p>Likes</p>
                </div>
                <div className="info">
                    <h3 >1.4k</h3>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    )
}
export default Profile