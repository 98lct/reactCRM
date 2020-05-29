import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, Collapse, Fade, ListGroup, ListGroupItem } from 'reactstrap';

import DataTable from 'react-data-table-component';
class TicketOverview extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.clickStatus = this.clickStatus.bind(this);
        this.state = {
            data: [
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
                { id: 1, status: 'Normal', subject: 'hhii', priority: 'Low', type: 'CSKH', assign: '911', lastUpdateTime: '5 days ago', Sla: '' },
            ],
            columns: [
                {
                    name: 'ID',
                    selector: 'id',
                    sortable: true,
                },
                {
                    name: 'Trạng thái',
                    selector: 'status',
                    sortable: true,
                },
                {
                    name: 'Chủ đề',
                    selector: 'subject',
                    sortable: true,
                },
                {
                    name: 'Ưu tiên',
                    selector: 'priority',
                    sortable: true,
                },
                {
                    name: 'Loại',
                    selector: 'type',
                    sortable: true,
                },
                {
                    name: 'Xác nhận',
                    selector: 'assign',
                    sortable: true,
                },
                {
                    name: 'Cập nhật',
                    selector: 'lastUpdateTime',
                    sortable: true,
                },
                {
                    name: 'Sla',
                    selector: 'sla',
                    sortable: true,
                },
            ],
            slaTicketCollapse:true,
            statusTicketCollapse:true,
            fadeIn: true,
            timeout: 300,
            statusCurrent: 'All',
            slaCurrent:'All',
            statusTicket: [
                { uuid: 1, name: 'All', icon:"fa fa-list-alt" },
                { uuid: 2, name: 'New', icon:"fa fa-file-o" },
                { uuid: 3, name: 'Pending', icon:"fa fa fa-rotate-right" },
                { uuid: 4, name: 'Response', icon:"fa fa-undo" },
                { uuid: 4, name: 'Solved', icon:"fa fa-ban" },
            ],
            slaTicket: [
                { uuid: 1, name: 'All',icon:"fa fa-list-alt" },
                { uuid: 2, name: 'Unknow',icon:"fa fa-question-circle" },
                { uuid: 3, name: 'Still validated' ,icon:"fa fa-calendar-check-o" },
                { uuid: 4, name: 'SLA expired',icon:"fa fa-calendar-times-o" },
                { uuid: 5, name: 'SLA under a deadline', icon:"fa fa-calendar-plus-o" },
            ]
        }
    }
    toggle(type) {
        if(type=='status'){
            this.setState({
                statusTicketCollapse:!this.state.statusTicketCollapse
            })
        }
        if(type=='sla'){
            this.setState({
                slaTicketCollapse:!this.state.slaTicketCollapse
            })
        }
        
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }
    clickStatus(e) {
        this.setState({
            statusCurrent:e
        })
    }

    clickSla(e) {
        this.setState({
            slaCurrent:e
        })
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="3">
                        <Card>
                            <CardHeader className="border-primary">
                            <i className="fa fa-link"></i>
                                Status Tickets
                                <div className="card-header-actions">
                                    <a className="card-header-action btn btn-minimize" data-target="#ticketStatus" onClick={()=>this.toggle('status')}><i className="icon-arrow-up"></i></a>
                                </div>
                            </CardHeader>
                            <Collapse isOpen={this.state.statusTicketCollapse} id="ticketStatus">
                                <ListGroup>
                                    {
                                        this.state.statusTicket.map((element, index) => (
                                            <ListGroupItem onClick={() => this.clickStatus(element.name)} key={element.uuid} className={(this.state.statusCurrent === element.name ? "active border-none borderRadius-unset" : "border-none borderRadius-unset")}><i className={element.icon +' pr-2'}></i>{element.name}</ListGroupItem>
                                        ))
                                    }
                                </ListGroup>
                            </Collapse>
                        </Card>
                        <Card>
                            <CardHeader className="border-primary">
                            <i className="fa fa-calendar"></i>
                                SLA Tickets
                                <div className="card-header-actions">
                                    
                                    <a className="card-header-action btn btn-minimize" data-target="#ticketSLA" onClick={()=>this.toggle('sla')}><i className="icon-arrow-up"></i></a>

                                </div>
                            </CardHeader>
                            <Collapse isOpen={this.state.slaTicketCollapse} id="ticketSLA">
                            <ListGroup>
                                    {
                                        this.state.slaTicket.map((element, index) => (
                                            <ListGroupItem onClick={() => this.clickSla(element.name)} key={element.uuid} className={(this.state.slaCurrent === element.name ? "active border-none borderRadius-unset" : "border-none borderRadius-unset")}><i className={element.icon +' pr-2'}></i>{element.name}</ListGroupItem>
                                        ))
                                    }
                                </ListGroup>
                            </Collapse>
                        </Card>
                    </Col>
                    <Col xs="12" lg="9">
                        <div className="box-overviewss">
                            <DataTable
                                columns={this.state.columns}
                                data={this.state.data}
                                pagination={true}
                                noHeader={true}
                                fixedHeader={true}
                                fixedHeaderScrollHeight	="58vh"
                                paginationServerOptions	={true}
                                paginationRowsPerPageOptions={['10','30','50']}
                                responsive={false}
                            />
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default TicketOverview;
