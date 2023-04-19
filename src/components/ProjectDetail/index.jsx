import { Icon } from '@iconify/react'
import { Col, Row } from 'antd'
import Button from '../Button'
import styles from './projectDetail.module.css'

const ProjectDetail = ({ project }) => {
    return (
        <div className={styles.detail}>
            <h1 className={styles.name}>{project.name}</h1>
            <p style={{color: '#5D718ED9'}}>{project.description}</p>
            <video width="100%" src={project.video}
                autoPlay loop controls muted playsInline 
                style={{marginTop: '2.4rem', marginBottom: '2rem'}}
            />
            <div className={styles.info}>
                <p>{project.year}</p>
                <p style={{fontWeight: 'bold'}}>{project.language}</p>
            </div>
            <Row gutter={[32, 32]}>
                <Col md={{ span: 12 }} className={styles.descriptionItem}>
                    <h2 className={styles.title}>專案背景</h2>
                    <p>{project.background}</p>
                </Col>
                <Col md={{ span: 12 }} className={styles.descriptionItem}>
                    <h2 className={styles.title}>技術說明</h2>
                    <p>{project.skill}</p>
                </Col>
            </Row>
            <div className={styles.button}>
                {
                    !!project.link ?
                    <a href={project.link}>
                        <Button>前往網站</Button>
                    </a> :
                    <></>
                }
                
                <a href={project.github}>
                    <Button>
                        <Icon icon='mdi:github' />
                        程式碼
                    </Button>
                </a>
            </div>
        </div>
    )
    
}

export default ProjectDetail