import { memo } from "react";
import "./style.scss";
import { FaFacebookSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col_6">Trai</div>
                    <div className="col_6 header_top_right">
                        <ul>
                            {/* <li> <Link to={""}> <FaFacebookSquare /> </Link> </li>
                            <li> <Link to={""}> <AiFillTwitterCircle /> </Link> </li>
                            <li> <Link to={""}> <AiFillGoogleCircle /> </Link> </li>
                            <li> <Link to={""}> <AiOutlineUser /> </Link> </li> */}
                            <span>Login</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;