import { Routes, Route } from 'react-router-dom';
import * as Lesson from '../ReactClasses';

const MyRoutes = () => {
    return(
        <Routes>
            <Route element = { <Lesson.ContextAPI /> }  path="/classes/context-api" />
            <Route element = { <Lesson.DumbComponents /> }  path="/classes/dumb-components" />
            <Route element = { <Lesson.Fragments /> }  path="/classes/fragments" />
            <Route element = { <Lesson.Hooks /> }  path="/classes/hooks" />
            <Route element = { <Lesson.LifeCicle /> }  path="/classes/life-cicle" />
            <Route element = { <Lesson.ProjectOrganization /> }  path="/classes/project-organization" />
            <Route element = { <Lesson.PropTypeClass /> }  path="/classes/type-checking" />
            <Route element = { <Lesson.RefsDom /> }  path="/classes/refs-and-dom" />
            <Route element = { <Lesson.RenderProps /> }  path="/classes/render-props" />
            <Route element = { <Lesson.SmartComponents /> }  path="/classes/smart-components" />
            <Route element = { <Lesson.ProjectOrganization /> }  path="/classes/project-organization" />
        </Routes>
    )
 }
 
 export default MyRoutes;
