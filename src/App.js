import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./pages/login/Login";
import Email from "./pages/user/email/Email";
import AdminEmails from "./pages/admin/emails/AdminEmails";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/admin/emails"><AdminEmails/></Route>
                <Route path="/user/email"><Email/></Route>
                <Route path="/"><Login/></Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
