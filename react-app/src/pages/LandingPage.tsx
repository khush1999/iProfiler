import { Link } from 'react-router-dom';
import featured from '../assets/featured.png';
import leftimg from '../assets/leftimg.png';
import rightimg from '../assets/rightimg.png';
import Footer from '../components/Footer';
import { NavigationBar } from '../components/NavigationBar';
import '../pages/landingpage.css';

// Home Page of the Project
export const Landingpage = (props: { location: { state: Boolean; }; }) => {

    return (
        <>
            <NavigationBar navigationState={props.location.state} />
            
            <div className="welcome-area" id="welcome">

                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                <h1><strong>iProfiler</strong><br />Take the <strong>hassle </strong>out,<br />
                        for the <strong>remote </strong>recruitment process.</h1>
                                <Link to="/Login">
                                    <button className="btn btn-dark hire-button">Let's Hire{' >>'}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section home-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src={featured} alt="discover" /></i>
                                        </div>
                                        <h5 className="features-title">Discover</h5>
                                        <h6 className="font-weight-bold card-line">Find talent with a human machine collaboration </h6>
                                        <p className="feature-description">Humans are innately creative and iprofiler brings first of its kind talent intelligence to source, screen and assess candidates.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll="enter bottom move 50px over 0.6s after 0.4s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src={featured} alt="shortlist" /></i>
                                        </div>
                                        <h5 className="features-title">Shortlisting</h5>
                                        <h6 className="font-weight-bold card-line">Profile shortlisting is an important process in recruitment</h6>
                                        <p className="feature-description">With Iprofiler, more detailed profiling solution that helps to incorporate qualitative and quantitative parameters.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src={featured} alt="structure" /></i>
                                        </div>
                                        <h5 className="features-title">Structure</h5>
                                        <h6 className="font-weight-bold card-line">Build a structured and efficient shortlisting process</h6>
                                        <p className="feature-description">An efficient shortlisting process to keep track of talent pipeline and generate insightful candidate list. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section padding-top-70 padding-bottom-0" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
                            <img src={leftimg} className="rounded img-fluid d-block mx-auto" alt="App" />
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                            <div className="left-heading">
                                <h2 className="section-title">Why iProfiler?</h2>
                            </div>
                            <div className="left-text">
                                <p>It???s always a tedious task for HR to evaluate the hundreds of resumes/CVs incoming on every job posting. To filter based candidates out of the pool of them, iProfiler comes to the rescue.
                                Using AI resume parsing, these CVs could be categorized in just a few minutes.
                                Filters provided by the application would help HR to segregate hundreds of unwanted profiles of users and only relevant will be saved for the later stage.
                            Thus iProfiler is a handy tool for all HR representatives.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hr"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section padding-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                            <div className="left-heading">
                                <h2 className="section-title">We can streamline the recruitment process</h2>
                            </div>
                            <div className="left-text">
                                <p>It is difficult and counter-productive to assess each incoming application.
                                This tool provides a medium to shift focus to a filtered class of applicants
                                and thus ensures a streamline recruitment process.
                        </p>

                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big">
                            <img src={rightimg} className="rounded img-fluid d-block mx-auto" alt="App" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}