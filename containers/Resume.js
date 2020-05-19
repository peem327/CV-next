import React from "react";

const Resume = () => {

    return (
        <div>
            <div className="bg-header jumbotron jumbotron-fluid ">
                <div className="container wheat">
                    <div className="row my-3">
                        <div className="col-ml-12 ">
                            <h2 className="section-heading ">MY RESUME</h2>
                            <h4 className="section-subheading text-muted">My Story</h4>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="/static/Icons/icons8-school-96.png" alt="" />
                                    </div>
                                        <div className = "col-lg">
                                            <div className="timeline-panel text-right float-left">
                                                <div className="timeline-heading">
                                                    <h4>2554</h4>
                                                    <h4 className="subheading">สำเร็จการศึกษามัธยมศึกษาตอนปลาย</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted"> โรงเรียนนารีนุกูล จ.อุบลราชธานี</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "col-lg">
                                            <div className="timeline-panel2 text-left float-right">
                                                <div className="timeline-heading">
                                                    <h4>2011</h4>
                                                    <h4 className="subheading">Finish high school</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Nari Nukun School, Ubon Ratchathani Province</p>
                                                </div>
                                            </div>
                                        </div>
                                </li>
                                <li>
                                <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="/static/Icons/icons8-university-96.png" alt="" />
                                    </div>
                                        <div className = "col-lg">
                                            <div className="timeline-panel text-right float-left">
                                                <div className="timeline-heading">
                                                    <h4>2560</h4>
                                                    <h4 className="subheading">สำเร็จการศึกษาปริญญาตรี </h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted"> สาขาวัสดุศาสตร์ โรงเรียนนารีนุกูล มหาวิทยาลัยแม่โจ้ จ.เชียงใหม่</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "col-lg">
                                            <div className="timeline-panel2 text-left float-right">
                                                <div className="timeline-heading">
                                                    <h4>2017</h4>
                                                    <h4 className="subheading">Bachelor degree</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Materials Science, Mae Jo University, Chiang Mai Province</p>
                                                </div>
                                            </div>
                                        </div>
                                </li>
                                <li>
                                <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="/static/Icons/icons8-work-96.png" alt="" />
                                    </div>
                                        <div className = "col-lg">
                                            <div className="timeline-panel text-right float-left">
                                                <div className="timeline-heading">
                                                    <h4>2563</h4>
                                                    <h4 className="subheading">บริษัท เฮเดล เทคโนโลยีส์ (ประเทศไทย) จำกัด</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">ตำแหน่ง Production : วางแผนและควบคุมการผลิตให้ตรงตามมาตรฐานหรือเป้าหมายที่กำหนด รวมถึงงานต่างๆที่ได้รับมอบหมาย เช่น 
                                                    การดูแลคลังสินค้าและวัตถุดิบ และเป็นส่วนหนึ่งในทีมทำงานวิจัย เป็นต้น</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "col-lg">
                                            <div className="timeline-panel2 text-left float-right">
                                                <div className="timeline-heading">
                                                    <h4>2020</h4>
                                                    <h4 className="subheading">Haydale Technologies (Thailand) Company Limited</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Production position: Plan and control production to meet the standard or target set. Including assigned 
                                                    tasks such as working in warehouses and raw materials And is part of the research team etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume;

