import * as React from "react"
import {FooterBoxes} from "../datas/team/content";
import Layout from "../components/layout";
import addToMailchimp from 'gatsby-plugin-mailchimp';
import ReactModal from "react-modal";
import {Link} from "gatsby";
import {Helmet} from "react-helmet";
import {content} from "../datas/technology/content";

class JoinOurCommunityPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            telegram : '',
            discord: '',
            field: '',
            introduce: '',
            time: '',
            language: '',
            proficiency: '',
            experience: '',
            expertise: '',
            created: Date().toLocaleString(),
            isModalOpen: false,
            msg: ''
        };
    }

    handleModalOpen = event => {
        this.setState({ isModalOpen: true })
        document.body.style.overflow = 'hidden';
    }

    handleModalClose = event => {
        this.setState({ isModalOpen: false })
        document.body.style.overflow = 'unset';
    }

    change(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }

    sendForm(e){
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const values = this.state

        delete values.isModalOpen;
        delete values.msg;

        var requestOptions = {
            method: "post",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify([Object.values(values)])
        };

        fetch("https://v1.nocodeapi.com/celestia/google_sheets/ZqShkCdhfGTphXJy?tabId=Responses", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        addToMailchimp(this.state.email, {
            'group[24870]': '1'
        }).then(data => {
            this.setState({isModalOpen:true})
            this.setState({msg:data.message})
        })
        .catch(() => {
            // unnecessary because Mailchimp only ever
            // returns a 200 status code
            // see below for how to handle errors
        });
    }
    componentDidMount() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {

                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })

    }

    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <Helmet>
                    <title>Celestia - Join our global community</title>
                </Helmet>
            <div className={'faq-page'}>
                <main>
                    <div className={'container'}>
                        <h1 className={'main mb-4'}>Join our global community</h1>

                        <form onSubmit={(e) => this.sendForm(e)} className="needs-validation" noValidate>
                            <div className={'row my-5'}>
                                <div className={'col col-12 col-md-6 pe-md-5'}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" onChange={(e) => this.change(e)} required/>
                                        <div className="invalid-feedback">Please enter your email address!</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telegram">Telegram ID <span>(optional)</span></label>
                                        <input type="text" className="form-control" id="telegram" onChange={(e) => this.change(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="discord">Discord username <span>(optional)</span></label>
                                        <input type="text" className="form-control" id="discord" onChange={(e) => this.change(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="expertise">What is your main field of expertise</label>
                                        <select className="form-control" id="field" onChange={(e) => this.change(e)} required>
                                            <option value="">&nbsp;</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Business Development">Business Development</option>
                                            <option value="Blockchain Enthusiast">Blockchain Enthusiast</option>
                                            <option value="Graphic Designer">Graphic Designer</option>
                                            <option value="Web Designer">Web Designer</option>
                                            <option value="Social Media Influencer">Social Media Influencer</option>
                                            <option value="Content Writer">Content Writer</option>
                                            <option value="Content Translator">Content Translator</option>
                                            <option value="Strategic Partner">Strategic Partner</option>
                                        </select>
                                        <div className="invalid-feedback">What is your main field of expertise</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="introduce">Please introduce yourself</label>
                                        <textarea className="form-control" id="introduce" name={'introduce'} onChange={(e) => this.change(e)} required />
                                        <div className="invalid-feedback">Please introduce yourself!</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time">How much time are you willing to dedicate to the project?</label>
                                        <select className="form-control" id="time" onChange={(e) => this.change(e)} required>
                                            <option value="">&nbsp;</option>
                                            <option value="Less than 5 hours per week">Less than 5 hours per week</option>
                                            <option value="5-20 hours">5-20 hours</option>
                                            <option value="20-40 hours">20-40 hours</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="invalid-feedback">Please select!</div>
                                    </div>

                                </div>
                                <div className={'col col-12 col-md-6 ps-md-5'}>
                                    <div className="form-group">
                                        <label htmlFor="language">What is your native language</label>

                                        <select className="form-control" id="language" onChange={(e) => this.change(e)} required>
                                            <option value="">&nbsp;</option>
                                            <option value="English">English</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="Mandarin Chinese">Mandarin Chinese</option>
                                            <option value="Russian">Russian</option>
                                            <option value="Portugese">Portugese</option>
                                            <option value="French">French</option>
                                            <option value="Arabic">Arabic</option>
                                            <option value="German">German</option>
                                            <option value="Japanese">Japanese</option>
                                            <option value="Korean">Korean</option>
                                            <option value="Turkish">Turkish</option>
                                            <option value="Malay">Malay</option>
                                            <option value="Italian">Italian</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="invalid-feedback">Please select!</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="proficiency">Please specify your proficiency in other languages.</label>
                                        <textarea className="form-control" id="proficiency" name={'proficiency'} onChange={(e) => this.change(e)} required />
                                        <div className="invalid-feedback">Please specify your proficiency in other languages.</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="experience">How many years of experience do you have in Blockchain / Cryptocurrency?</label>
                                        <textarea className="form-control" id="experience" name={'experience'} onChange={(e) => this.change(e)} required />
                                        <div className="invalid-feedback">Please answer!</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time">What is your main expertise in Blockchain?</label>
                                        <select className="form-control" id="expertise" onChange={(e) => this.change(e)}  required>
                                            <option value="">&nbsp;</option>
                                            <option value="Smart Contracts">Smart Contracts</option>
                                            <option value="Blockchain Code Review">Blockchain Code Review</option>
                                            <option value="Blockchain Security">Blockchain Security</option>
                                            <option value="Distributed Ledger">Distributed Ledger</option>
                                            <option value="Blockchain Architecture">Blockchain Architecture</option>
                                            <option value="Business Processes">Business Processes</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="invalid-feedback">Please answer!</div>
                                    </div>
                                </div>
                                <div className={'col col-12'}>
                                    <button type={'submit'} className={'button button-simple'}>Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </main>
                <ReactModal
                    isOpen={this.state.isModalOpen}
                >
                    <div className={'inner'}>
                        <h3 className={'text-center'}>Thank you!</h3>
                        <div className={'text-center'}>Response submitted.</div>
                        <div className={'row justify-content-center mt-3'}>
                            <div className={'col-auto'}>
                                <Link to={'/'} className={'button button-simple'}>Back to homepage</Link>
                            </div>
                        </div>
                        <button className={'close-button'} onClick={this.handleModalClose}><i className={'icon-close'} aria-label="Close"></i></button>
                    </div>
                </ReactModal>
            </div>
            </Layout>
        )
    }
}


export default JoinOurCommunityPage
