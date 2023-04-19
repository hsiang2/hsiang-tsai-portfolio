import { Link } from 'react-router-dom'
import Button from '../Button'
import styles from './projectItem.module.css'

const ProjectItem = ({ project }) => {
    return (
        <div className={styles.item}>
            <video width="100%" src={project.video} autoPlay loop controls muted playsInline />
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>{project.name}</h1>
                    <p style={{color: '#5D718ED9'}}>{project.description}</p>
                </div>
                <Link to={`/id/${project.id}`}>
                    <Button>查看更多</Button>
                </Link>
            </div>
            
        </div>
    )
    
}

export default ProjectItem