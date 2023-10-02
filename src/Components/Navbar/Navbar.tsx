import {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = () => {

    return (
        <>
            <div className="container">
                <div className="flex">
                    <Link className="px-2 py-4" to="/">Home</Link>
                    <Link className="px-2 py-4" to="/findlobby">Find lobby</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
