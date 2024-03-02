import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import screen2 from "../assets/img/screen2.jpeg";
import screen3 from "../assets/img/screen3.jpeg";
import screen4 from "../assets/img/screen4.jpeg";
import game1 from "../assets/img/game1.png";
import game2 from "../assets/img/game2.jpeg";
import game3 from "../assets/img/game3.jpeg";
import TrackVisibility from "react-on-screen";



export const Projects = () => {
    const projects = [
        {
            title: "CAR RENT 1",
            description: "Car Rent with Laravel Dashboard",
            imgUrl: projImg1,
        },
        {
            title: "CAR RENT 2",
            description: "Car Maintenance",
            imgUrl: projImg2,
        },
        {
            title: "CAR RENT 3",
            description: "Income Analysis",
            imgUrl: projImg3,
        },
        {
            title: "E-Commerce shop 1 ",
            description: "E-Commerce shop with React Products Page",
            imgUrl: screen2,
        },
        {
            title: "E-Commerce shop 2",
            description: "Product information page",
            imgUrl: screen3,
        },
        {
            title: "E-Commerce shop 3",
            description: "Cart Page",
            imgUrl: screen4,
        },
        {
            title: "Tic-Tac-Toe Game 1",
            description: "Tic Tac Toe with Html-css-js Home Page",
            imgUrl: game1,
        },
        {
            title: "Tic-Tac-Toe Game 2",
            description: "Player vs Player",
            imgUrl: game2,
        },
        {
            title: "Tic-Tac-Toe Game 3",
            description: "Player vs CPU",
            imgUrl: game3,
        },
    ];

    
    const groupedProjects = projects.reduce((acc, project, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(project);
        return acc;
    }, []);

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ?"animate_animated animate_bounces" : ""}>
                    <h2>
                            Projects
                        </h2>
                        <p>
                            My projects showcase my passion for software development and problem-solving. I have worked on a range of projects, each contributing to my skills in coding and project management. From web applications to user interfaces, I am dedicated to creating innovative solutions. I am enthusiastic about using technology to tackle real-world challenges and am eager to take on new projects that push my abilities
                        </p>
                    </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Tab One
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Tab Two
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {groupedProjects[0].map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {groupedProjects[1].map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {groupedProjects[2].map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
};
