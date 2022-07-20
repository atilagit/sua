import PrivateRoute from "components/PrivateRoute";
import { Switch } from "react-router-dom";
import CreatePostingForm from "./CreatePostingForm";
import CreateSalaryAdvanceForm from "./CreateSalaryAdvanceForm";
import Navbar from "./Navbar";

import './styles.css'; 


const PostingForm = () => {
    return (
        <div className="page-container posting-form-container">
            <Navbar />
            <div className="posting-crud-content">
                <Switch>
                    <PrivateRoute path="/postings/posting/:id">
                        <CreatePostingForm />
                    </PrivateRoute>
                    <PrivateRoute path="/postings/salary-advance/:id">
                        <CreateSalaryAdvanceForm />
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    )
}

export default PostingForm;