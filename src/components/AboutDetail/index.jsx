import { Icon } from '@iconify/react'
import { Col, Row } from 'antd'
import styles from './aboutDetail.module.css'

const AboutDetail = () => {
    return (
        <div className={styles.about}>
            <img width='106px' src="/images/img_avatar.png" />
            <h3 className={styles.name}>蔡相襄</h3>
            <Row  gutter={[32, 32]} style={{width: '100%'}}>
                <Col xs={{ span: 24 }} md={{ span: 8 }} className={styles.descriptionItem}>
                    <h2 className={styles.title}>基本資料</h2>
                    <ul>
                        <li>
                            <strong>生日</strong>&nbsp;2002 / 08 / 09
                        </li>
                        <li style={{wordBreak: 'keep-all'}}>
                            <strong>信箱</strong>&nbsp;tsaihsiang2@gmail.com
                        </li>
                        <li>
                            <strong>電話</strong>&nbsp;0929200289
                        </li>
                    </ul>

                    <h2 className={styles.title}>語言能力</h2>
                    <ul>
                        <li>
                            <strong>英文</strong>&nbsp;多益 920 分
                        </li>
                    </ul>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 16 }} className={styles.descriptionItem}>
                    <h2 className={styles.title}>個人簡歷</h2>
                    <Row gutter={[32, 32]}>
                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                            <ul>
                                <li>
                                    <strong>學業</strong>
                                    <p style={{lineHeight: '2', marginTop: '1.5rem'}}>
                                        國立臺北教育大學<br />
                                        數位科技設計系 三年級
                                    </p>
                                    <p style={{lineHeight: '2', marginTop: '1.5rem'}}>
                                        109 / 110 / 111 上 書卷獎<br />
                                        （平均分數 93.85）
                                    </p>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                            <ul>
                                <li >
                                    <strong>課外活動</strong>
                                    <p style={{marginTop: '1.5rem'}}>大三 國北 iOS Club 美宣幹部</p>
                                    <p className={styles.subtitle}>負責社團之宣傳視覺設計</p>
                                    <p>大二 國北數位營美宣組員</p>
                                    <p className={styles.subtitle}>負責活動之宣傳視覺設計</p>
                                    <p>大一 系學會學術股員</p>
                                    <p className={styles.subtitle}>協助系刊排版製作</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <h2 className={styles.title} style={{textAlign: 'center'}}>專業技能</h2>
            <div className={styles.lineTitle}>
                <hr style={{width: '40%'}} />
                <strong>
                    程式
                </strong>
                <hr style={{width: '40%'}} />
            </div>
            <Row gutter={[32, 64]} justify='center'>
                <Col md={{ span: 16 }}>
                    <div style={{width: '15rem'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className={styles.iconItem}>
                                <Icon width='3rem' icon='akar-icons:html-fill' />
                                <strong style={{marginTop: '1rem'}}>HTML</strong>
                            </div>
                            <div className={styles.iconItem}>
                                <Icon width='3rem' icon='akar-icons:css-fill' />
                                <strong style={{marginTop: '1rem'}}>CSS</strong>
                            </div>
                            <div className={styles.iconItem}>
                                <Icon width='3rem' icon='ri:javascript-fill' />
                                <strong style={{marginTop: '1rem'}}>JavaScript</strong>
                            </div>
                        </div>
                        <p className={styles.skillText}>
                            擁有 HTML、CSS、JavaScript 靜態 RWD 網站，以及 React 框架動態網站的基礎開發經驗。目前正在學習 MERN Stack 等後台技術。
                        </p>
                    </div>
                    
                </Col>
                <Col md={{ span: 8 }} className={styles.iconItem}>
                        <Icon width='3rem' icon='simple-icons:swift' />
                        <strong style={{marginTop: '1rem'}}>Swift</strong>
                        <p className={styles.skillText}>
                            透過社團課程學習過基礎語法，目前正在自學 MVVM 架構等。
                        </p>
                    
                </Col>
            </Row>
            <div className={styles.lineTitle} style={{marginTop: '4rem'}}>
                <hr style={{width: '40%'}} />
                <strong>
                    設計
                </strong>
                <hr style={{width: '40%'}} />
            </div>
            <Row gutter={[48, 64]} justify='center'>
                <Col md={{ span: 8 }} className={styles.iconItem}>
                    <Icon width='3rem' icon='simple-icons:adobephotoshop' />
                    <strong style={{marginTop: '1rem'}}>Photoshop</strong>
                    <p className={styles.skillText}>
                        透過自學曾幫系上營隊、課堂專題等活動繪製插圖。
                    </p>
                </Col>
                <Col md={{ span: 8 }} className={styles.iconItem}>
                    <Icon width='3rem' icon='bxl:figma' />
                    <strong style={{marginTop: '1rem'}}>Figma</strong>
                    <p className={styles.skillText}>
                        藉由學校課程和專題，擁有基本的網頁 UI 設計經驗。
                    </p>
                </Col>
            </Row>
            <h2 className={styles.title} style={{marginTop: '8rem'}}>自傳</h2>
            <p className={styles.bio}>
                <strong>【背景】</strong><br/>
                &emsp; &emsp;我是相襄，自幼生長在自由開明的家庭，養成了我自律獨立的性格。繪圖是我一直以來的興趣，為此我在國中時就自學摸索繪圖板和軟體。成長過程中，除了視覺藝術外，我認為各個學科都有其迷人之處。因此當時不希望被侷限在特定框架的我，被跨領域的數位科技設計系所吸引，決定追隨熱忱就讀此系。<br/><br/>
                <strong>【程式】</strong><br/>
                &emsp; &emsp;進入數位系開啟了我學習程式的旅程。首先，在大一的必修課程裡，我透過學習 C/C++ 建立程式基礎。接著，從選修的前端工程設計課中，我學會利用 HTML、CSS、JavaScript 和 React 框架，與團隊合作開發 RWD 網頁。在該課程專題中，我主要負責撰寫程式實現組員繪製的視覺稿。此經驗讓我首次體會到前端的樂趣，但也體認到自己所學僅是前端技術的冰山一角，因此我開始主動學習更多前後端技術（例如：在校內修習 Django 動態網頁課、參加 MERN Stack 線上課程等）。除網頁外，我也曾在其他課堂專題中使用 React Native 框架開發 App、自學 Unity 與同學合作開發 2D 平台遊戲，並利用課餘時間參加學校社團 iOS club學習 Swift 語言。<br/><br/>
                <strong>【設計】</strong><br/>
                &emsp; &emsp;除了程式，系上的課程及活動經驗也幫助我培養基本的設計能力。在網頁方面，前端設計課程教會我使用 Figma 進行 UI 設計，並學到設計介面時不能僅注重外表，而是必須站在使用者的角度思考。此外，我在系上曾擔任過學術股員、數位營活動美宣組員和 iOS Club 的美宣幹部，在任內我靠自學 Photoshop 和 Illustrator 完成了許多任務，例如：協助系刊排版、繪製網頁插圖、設計數位營活動的宣傳貼文和海報等。<br/><br/>
                <strong>【未來】</strong><br/>
                &emsp; &emsp;大學時期探索過各種數位領域後，結合邏輯與美學的前端工程是我最感興趣的一塊，雖然我目前對前端的知識尚淺，但我清楚自己很享受透過研究和思考，一步步實踐與隊友共同發想設計的企劃。因此希望未來能有機會能加入工作團隊，持續增進自己的實力，並為團隊貢獻心力，帶給人們更好的作品。
            </p>
        </div>
    )
}

export default AboutDetail