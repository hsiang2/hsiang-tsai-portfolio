import { useParams } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectDetail from "../components/ProjectDetail";
import projects from '../json/projects.json'

const DetailPage = () => {
    const { projectId } = useParams()
    const project = projects.find(
       (x) => x.id === projectId
    )

    return(
        <div className="mainLayout">
            <Header />
            <div className="layoutContent container">
                <ProjectDetail project={project} />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default DetailPage