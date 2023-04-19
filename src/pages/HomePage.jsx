import { Tabs } from "antd"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectList from "../components/ProjectList"
import projects from '../json/projects.json'

const HomePage = () => {
    const webProjects = projects.filter((project) => project.category === "網頁作品")
    const appProjects = projects.filter((project) => project.category === "應用程式")
    const otherProjects = projects.filter((project) => project.category === "其他作品")
    const items = [
        {
          key: '1',
          label: `網頁作品`,
          children: <ProjectList projects={webProjects} />,
        },
        {
          key: '2',
          label: `應用程式`,
          children: <ProjectList projects={appProjects} />,
        },
        {
          key: '3',
          label: `其他作品`,
          children: <ProjectList projects={otherProjects} />,
        },
      ];
    return(
        <div className="mainLayout">
            <Header />
            <div className="layoutContent">
                <div className="container" style={{paddingLeft: '1.25rem', paddingRight: '1.25rem'}}>
                    <h1 style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontSize: '6rem'
                    }}>
                        HSIANG²
                    </h1>
                    <h1 style={{
                        fontFamily: 'Noto Serif TC, serif',
                        fontWeight: 'bold', opacity: '0.5',
                        marginBottom: '7.7rem'
                    }}>相襄 Portfolio</h1>
                </div>
                
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={items}
                    tabBarStyle={{
                        // color: '#BFC8E1',
                        marginBottom: '6.5rem'
                    }}
                />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default HomePage