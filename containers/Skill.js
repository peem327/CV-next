import React from "react";

const Skill = () => {
    return (
        <div>
            <div className="container md-5">
                <div className="row">
                    <div className="col-md-4 my-5">
                        <img src="/static/images/profile/20200513_020555002.jpg" className="card-img" alt="profile" />

                    </div>
                    <div className="col-md-8">
                        <div className="...">
                            <h6 className="card-title">ABOUT ME</h6>
                            <h2 className="card-title">Who Am I</h2>
                            <p className="card-text   title ">
                                สวัสดีครับ ผมชื่อ ภีม ครับ  ผมได้ออกจากงานเก่าช่วงโรคโควิด 19 ระบาด เลยใช้โอกาสช่วงนี้ศึกษาเรียนรู้เกี่ยวกับการพัฒนาเว็บไซต์ อย่างจริงจัง โดยเริ่มจากความอยากรู้ อยากเห็นว่าเว็บไซด์ และโปรแกรมต่างๆมันทำงานยังไง และมันเป็นความฝันตอนเด็กที่อยากเขียนโปรแกรม แต่ผมได้ตัดโอกาสของตัวเองไป เพราะคิดว่าตนเองคงทำไม่ได้เพราะโง่ ภาษาอังกฤษ 
                            แต่ที่มาเรียนรู้เรื่องนี้อีกครั้งเพราะทุกวันนี้ผมใช้ google translate เป็นครับ  </p>

                            <p className="card-text  title">
                                ก่อนหน้าที่จะออกจากงานประมาณ 4 เดือน ผมได้เริ่มศึกษาการเขียนโค้ด HTML ให้แสดงผลหน้าเว็บ “ Hello World” ในตอนนั้นผมรู้สึกว่าเฮ้ย !!! มันเจ๋งดีวะ จากนั้นผมได้หลงรักมัน และได้ศึกษาเรียนรู้มาเรื่อย ๆ แต่ก็ไม่จริงจังเท่าไหร่เพราะไม่มีเวลาให้กับมันมากนัก แต่เมื่อผมได้ออกจากงานเก่า  ผมคิดที่จะเปลี่ยนสายงาน จึงได้เรียนรู้ด้วยตัวเองทั้งจากคอร์สเรียนฟรีและมีค่าใช้จ่ายจาก 
                            www.w3schools.com, borntodev, Kong Ruksiam,  Udemy เป็นต้น</p>

                            <p className="card-text  title">
                                 ณ  ตอนนี้ผมได้รู้เกี่ยวกับ การออกแบบและโครงสร้างของเว็บ รวมทั้งเครื่องมือต่าง ๆเพื่อช่วยในการออกแบบและพัฒนาเว็บไซต์ให้ได้ตามที่เราต้องการ รวมถึงภาษาและเฟรมเวิร์ค ในการเขียนโค้ดด้วยครับ ถ้าคุณได้อ่านถึงบรรทัดนี้ผมขอบคุณมากครับที่รับฟังผม หวังว่าเราจะได้ร่วมงานกัน ได้รู้จักและช่วยเหลือกันและกัน และมีความสุขด้วยกันครับ</p>
                        </div>
                        <hr />

                        {/* progressbar */}
                        <h5>My Skills</h5>
                        <div className="container mb-4">
                            <div className="row mt-3">
                                <img src="/static/Icons/HTML.svg" alt="" width="35" height="35" title="..." />
                                <div className="col-md mb-3">
                                    <span><h6>HTML</h6></span>
                                    <div className="progress">
                                        < div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="language"></div>
                                    </div>
                                </div>
                                <img src="/static/Icons/CSS.svg" alt="" width="35" height="35" title="..." />
                                <div className="col-md ">
                                    <span> <h6>CSS</h6></span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="language"></div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <img src="/static/Icons/JS.svg" alt="" width="35" height="35" title="..." />
                                <div className="col-md mb-3">
                                    <span> <h6>JS</h6></span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="language"></div>
                                    </div>
                                </div>
                                <img src="/static/Icons/React.svg" alt="" width="35" height="35" title="..." />
                                <div className="col-md">
                                    <span> <h6>React</h6></span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="framework"></div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row ">
                                <img src="/static/Icons/PS.svg" alt="" width="35" height="35" title="..." />
                                <div className="col-md mb-3">
                                    <span> <h6>PS</h6></span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="tool"></div>
                                    </div>
                                </div>
                                <img src="/static/Icons/AI.svg" alt="" width="35" height="35" title="..." />
                                <div className="col-md mb-3">
                                    <span> <h6>AI</h6></span>
                                    <div className="progress ">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="tool"></div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* // WHAT CAN I DO */}

            <div className="bg-header jumbotron jumbotron-fluid">
                <div className="container wheat">
                    <div className="row">
                        <div className=" ">
                            <h2 className="section-heading text-uppercase">What Can I Do</h2>
                            <h3 className="section-subheading text-muted mb-5">When we work together.</h3>
                        </div>
                    </div>
                    <div className="row mt-5  text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <img className="text-center" src="/static/Icons/Good job for us.svg" alt="" width="150" height="150" title="..." />
                            </span>
                            <h4 className="service-heading">Good job for us</h4>
                            <p className="text-muted">ถ้าผมได้ทำอะไร ผมต้องทำให้สุดความสามารถ และทำทุกวิธี เพื่อให้งานออกมาดีที่สุด</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <img className="img-center" src="/static/Icons/Creative Design.svg" alt="" width="150" height="150" title="..." />
                            </span>
                            <h4 className="service-heading">Creative Design</h4>
                            <p className="text-muted">ผมชอบศิลปะ และความลงตัว</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <img src="/static/Icons/To make you happy.svg" alt="" width="150" height="150" title="..." />
                            </span>
                            <h4 className="service-heading">To make you happy</h4>
                            <p className="text-muted">ถ้าเราได้ร่วมงานกัน จะไม่ทำให้คุณผิดหวังครับ</p>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )

}

export default Skill;