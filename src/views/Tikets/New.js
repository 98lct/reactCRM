import React, { Component } from 'react';
import { Label, Card, CardBody, CardHeader, Col, Input, FormGroup, Row, Fade, Button, Modal, ModalBody, ModalFooter, ModalHeader, Badge } from 'reactstrap';


class TicketNew extends Component {
    constructor(props) {
        super(props)

        this.typeOnchange = this.typeOnchange.bind(this);
        this.renderElement = this.renderElement.bind(this);
        this.renderFields = this.renderFields.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            modal: false,
            ModalBody: '',
            options: [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
            ],
            selectedOption: {
                value: 'chocolate', label: 'Chocolate'
            },
            statusButton: [
                { uuid: 2, name: 'New', icon: "fa fa-file-o", color: "success" },
                { uuid: 3, name: 'Pending', icon: "fa fa fa-rotate-right", color: "info" },
                { uuid: 4, name: 'Response', icon: "fa fa-undo", color: "warning" },
                { uuid: 4, name: 'Solved', icon: "fa fa-ban", color: "danger" },
            ],
            typeOption: [
                {
                    uuid: 1, name: 'Hộ trợ', element: [
                        {
                            type: 'text', name: "Khách Hàng", value: "khachhang", required: true
                        },
                        {
                            type: 'select', name: "Loại", value: "type", list: 'lỗi,nâng cấp,khác'
                        },
                        {
                            type: 'email', name: "Email", value: "email", required: false
                        },
                        {
                            type: 'phone', name: "Điện Thoại", value: "phone", required: true
                        },
                        {
                            type: 'date', name: "Ngày bắt đầu", value: "startDate", required: true
                        },
                        {
                            type: 'time', name: "Giờ bắt đầu", value: "startTime", required: true
                        },
                        {
                            type: 'checkbox', name: "KH tìm năng", value: "timnang", required: true, list: 'kém,có,bình thường', required: true
                        },
                        {
                            type: 'textarea', name: "Ghi chú", value: "note", required: true, attr: [
                                {
                                    rows: 4
                                }
                            ]
                        },
                    ]
                },
                {
                    uuid: 2, name: 'Tư vấn', element: [
                        {
                            type: 'text', name: "Khách Hàng", value: "khachhang", required: true
                        },
                        {
                            type: 'select', name: "Loại", value: "type", list: 'lỗi,nâng cấp,khác'
                        },
                        {
                            type: 'email', name: "Email", value: "email", required: false
                        },
                        {
                            type: 'phone', name: "Điện Thoại", value: "phone", required: true
                        },
                    ]
                },
                {
                    uuid: 3, name: 'Thanh Toán', element: [
                        {
                            type: 'text', name: "Khách Hàng", value: "khachhang", required: true
                        },
                        {
                            type: 'email', name: "Email", value: "email", required: false
                        },
                        {
                            type: 'phone', name: "Điện Thoại", value: "phone", required: true
                        },
                    ]
                },
            ],
            requesterOption: [
                {
                    uuid: 1, name: ' Nguyễn A',
                },
                {
                    uuid: 1, name: 'Lê B',
                },
                {
                    uuid: 1, name: 'V Toán',
                },
            ],
            typeID: [],
            customerFields: [
                {
                    uuid: 1, gridDisplay: true, popupDisplay: true, key: 'tenKH', value: 'Tên KH', type: 'text'
                },
                {
                    uuid: 2, gridDisplay: true, popupDisplay: true, key: 'soDT', value: 'Số ĐT', type: 'phone'
                },
                {
                    uuid: 3, gridDisplay: true, popupDisplay: false, key: 'email', value: 'Email', type: 'email'
                },
                {
                    uuid: 4, gridDisplay: true, popupDisplay: true, key: 'gioitinh', value: 'Giới Tính', type: 'select', list: "nam,nữ,bê đê"
                }
            ]
        }
    }
    typeOnchange(e) {
        let typeId = e.target.value;
        let optionArr = this.state.typeOption;
        var filtered = optionArr.find(
            (value) => {
                return value.uuid == typeId
            }
        );
        if (filtered) {
            this.setState({
                typeID: filtered.element
            })
        }
        else {
            this.setState({
                typeID: ''
            })
        }
    }
    renderElement() {
        let type = this.state.typeID;
        let rows = []
        if (type !== null) {
            Object.values(type).forEach(function (key, i) {
                let required = ''
                if ((key.required == true)) {
                    required = <Badge color="danger" className="ml-2">Required</Badge>
                }
                if (['email', 'text', 'phone', 'date', 'time', 'textarea'].includes(key.type)) {
                    rows.push(
                        <Col xs="12" lg="6" key={i}>
                            <FormGroup>
                                <Label htmlFor={key.name}>{key.name}</Label>{required}
                                <div className="ticket">
                                    <Input type={key.type} name={key.value} id={key.value} />
                                </div>
                            </FormGroup>
                        </Col>
                    );
                }
                if (key.type === 'select') {
                    //string.split("],[")
                    let option = [];
                    rows.push(
                        <Col xs="12" lg="6" key={i}>
                            <FormGroup>
                                <Label htmlFor={key.name}>{key.name}</Label>
                                <div className="ticket">
                                    <Input type={key.type} name={key.value} id={key.value}>
                                        {
                                            ((key.list).split(",")).forEach(function (v, it) {
                                                option.push(<option key={it} value={v}>{v}</option>)
                                            })
                                        }
                                        {
                                            option
                                        }
                                    </Input>
                                </div>
                            </FormGroup>
                        </Col>
                    );
                }
                if (key.type === 'checkbox') {
                    let option = [];
                    rows.push(
                        <Col xs="12" lg="6" key={i}>
                            <FormGroup key={i}>
                                <Label htmlFor={key.name}>{key.name}</Label>
                                <div className="ticket">
                                    {
                                        ((key.list).split(",")).forEach(function (v, it) {
                                            option.push(
                                                <FormGroup key={it} check className="checkbox" inline>
                                                    <Input className="form-check-input" type="checkbox" value={v} name={key.name} />
                                                    <Label check className="form-check-label" htmlFor={v}>{v}</Label>
                                                </FormGroup>
                                                //return    option;
                                            )

                                        })
                                    }
                                    {option}

                                </div>
                            </FormGroup>
                        </Col>
                    );

                }
            });
        }
        return rows;
    }
    toggleModal() {
        let v = this.state.customerFields
        let a = v.filter((element) => (
            element.popupDisplay === true
        ))
        this.setState({
            modal: !this.state.modal,
            customerFields: a
        });
    }
    renderFields() {
        let type = this.state.customerFields;
        let rows = [];
        Object.values(type).forEach(function (key, i) {
            let required = ''
            if ((key.required == true)) {
                required = <Badge color="danger" className="ml-2">Required</Badge>
            }
            if (['email', 'text', 'phone', 'date', 'time', 'textarea'].includes(key.type)) {
                rows.push(
                    <Col xs="12" lg="12" key={i}>
                        <FormGroup>
                            <Label htmlFor={key.key}>{key.value}</Label>{required}
                            <div className="ticket">
                                <Input type={key.type} name={key.value} id={key.value} />
                            </div>
                        </FormGroup>
                    </Col>
                );
            }
            if (key.type === 'select') {
                let option = [];
                rows.push(
                    <Col xs="12" lg="12" key={i}>
                        <FormGroup>
                            <Label htmlFor={key.name}>{key.value}</Label>
                            <div className="ticket">
                                <Input type={key.type} name={key.value} id={key.value}>
                                    {
                                        ((key.list).split(",")).forEach(function (v, it) {
                                            option.push(<option key={it} value={v}>{v}</option>)
                                        })
                                    }
                                    {
                                        option
                                    }
                                </Input>
                            </div>
                        </FormGroup>
                    </Col>
                );
            }
            if (key.type === 'checkbox') {
                let option = [];
                rows.push(
                    <Col xs="12" lg="6" key={i}>
                        <FormGroup key={i}>
                            <Label htmlFor={key.name}>{key.name}</Label>
                            <div className="ticket">
                                {
                                    ((key.list).split(",")).forEach(function (v, it) {
                                        option.push(
                                            <FormGroup key={it} check className="checkbox" inline>
                                                <Input className="form-check-input" type="checkbox" value={v} name={key.name} />
                                                <Label check className="form-check-label" htmlFor={v}>{v}</Label>
                                            </FormGroup>
                                            //return    option;
                                        )

                                    })
                                }
                                {option}

                            </div>
                        </FormGroup>
                    </Col>
                );

            }
        });
        return rows;
    }
    render() {
        return (
            <Fade>
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                Add new ticket
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" lg="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Requester</Label>
                                            <div className="ticket requesterBox">
                                                <Input type="select" name="ccmonth" id="ccmonth">
                                                    {
                                                        this.state.requesterOption.map((element, index) => (
                                                            <option key={index} value={element.uuid}>{element.name}</option>
                                                        ))
                                                    }
                                                </Input>
                                                <Button onClick={this.toggleModal} className="btn btn-sm btn-primart"><i className="fa fa-plus"></i></Button>

                                                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                                                    <ModalHeader toggle={this.toggleModal}>Thêm Khách Hàng</ModalHeader>
                                                    <ModalBody>
                                                        {

                                                            this.renderFields()
                                                        }

                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
                                                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                                                    </ModalFooter>
                                                </Modal>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="assignee">Assignee</Label>
                                            <div className="ticket assigneeBox">
                                                <Input type="select" name="assignee" id="assignee">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </Input>
                                                <Input type="select" name="extendstion" id="extendstion" className="mt-2">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </Input>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="ccs">CCs</Label>
                                            <div className="ticket ccsBox">
                                                <Input type="text" name="ccs" id="ccs" />

                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="tags">Tags</Label>
                                            <div className="ticket tagsBox">
                                                <Input type="text" name="tags" id="tags" />

                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="type">Type</Label>
                                            <div className="ticket typeBox">
                                                <Input type="select" name="type" id="type" onChange={(e) => this.typeOnchange(e)}>
                                                    <option value="NULL">-- Chọn Type --</option>
                                                    {
                                                        this.state.typeOption.map((element, index) => (
                                                            <option key={index} value={element.uuid}>{element.name}</option>
                                                        ))
                                                    }

                                                </Input>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="priority">Priority</Label>
                                            <div className="ticket priorityBox">
                                                <Input type="select" name="priority" id="priority">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </Input>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="8">
                                        <div className="renderBox">
                                            <Row>
                                                {
                                                    this.renderElement()
                                                }
                                            </Row>
                                        </div>
                                        <FormGroup>
                                            <Label htmlFor="subject">Subject</Label>
                                            <div className="ticket subjectBox">
                                                <Input type="text" name="subject" id="subject" />
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="content">Content</Label>
                                            <div className="ticket contentBox">
                                                <Input type="textarea" name="content" id="content" rows="10" />
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="ticket statusBox">
                                                {
                                                    this.state.statusButton.map((element, index) => (
                                                        <Button key={index} className={"btn btn-" + element.color}>
                                                            <i className={element.icon}></i>
                                                            {element.name}
                                                        </Button>
                                                    ))
                                                }
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            </Fade>
        )
    }
}

export default TicketNew;
