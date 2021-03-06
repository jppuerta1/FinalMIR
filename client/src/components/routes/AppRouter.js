import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginContainer } from "../authentication/login/LoginContainer";
import { SignUpContainer } from "../authentication/signup/SignUpContainer";
import { ProjectsContainer} from "../projects/ProjectsContainer";
import { CreateProjectContainer } from "../projects/CreateProjectContainer";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignUpContainer}/>
          <Route path='/projects/create' component={CreateProjectContainer}/>
          <Route path='/MyProjects' component={ProjectsContainer}/>
          
        </Switch>
      </div>
    </Router>
  )
}