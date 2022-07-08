import PrivateRoute from "components/PrivateRoute";
import { Switch } from "react-router-dom";
import Navbar from "./Navbar";

import './styles.css'; 


const PostingForm = () => {
    return (
        <div className="page-container posting-form-container">
            <Navbar />
            <div className="posting-crud-content">
                <Switch>
                    <PrivateRoute path="/postings/create/posting">
                        <h1>Create products</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/postings/create/salary-advance">
                        <h1>Create adiantamentos</h1>
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    )
}

export default PostingForm;