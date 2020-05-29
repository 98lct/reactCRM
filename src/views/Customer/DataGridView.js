import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input, Label,
    DropdownItem,DropdownMenu} from 'reactstrap';
    
class DataGridView extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            errors:{},
            fields: {},
            active:{id:'',true:false},
            true:false,
            btnSwitch:true,
        }
        this.typeRender=this.typeRender.bind(this);
        this.statusRender=this.statusRender.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
        this.submit=this.submit.bind(this);
        this.handleChange=this.handleChange.bind(this)
        this.selectedRow=this.selectedRow.bind(this)
        this.invalid=this.invalid.bind(this)
        this.toggleBth=this.toggleBth.bind(this)
    }
    typeRender(id){
        let types=this.props.cType;
        let a=types.find((type)=>{
            return type.value === id;
        })
       return a.label;
    }
    statusRender(id){
        let status=this.props.cStatus;
        let a2=status.find((st)=>{
            return st.value === id;
        })
       return a2.label;
    }
    handleValidation(){
        let fields = this.state.fields;
        console.log(fields)
        let errors = {};
        let formIsValid = true;
        if(!fields["name"]){
          formIsValid = false;
          errors["name"] = "Name Cannot be empty";
          this.setState({
            true:true
        })
        }
        // if(!fields["phone"]){
        //     formIsValid = false;
        //     errors["phone"] = "Cannot be empty";
        //     this.setState({
        //         true:true
        //     })
        // }
        this.setState({errors: errors});
        //console.log(errors)
        return formIsValid;
    }
    submit(){
        // if(this.state.btnSwitch!==true){

        // }
        if(this.handleValidation()){
          //Lưu 

          
        }else{
          alert("Form has errors.")
        }    
        console.log(this.state.fields);
    }
    handleChange(field, e){    	
        
        let fields = this.state.fields;
        let errors = this.state.errors;
        fields[field] = e.target.value; 
        //let a;
        if(e.target.value!=''){
            this.setState({
                true:false
            })
        } 
        else{
            this.setState({
                true:true
            })
        }      
        this.setState({
            fields,
           
        });
    }
    selectedRow(id){
            this.setState({
                active:{
                    true:false
                }
            })
            let data=this.props.Cdata;
            let a=data.find((d)=>{
                return d.id === id;
            })
            this.setState({
                fields:{
                    id:a.id,
                    name:a.name,
                    //active:true
                },
                active:{
                    id:id,
                    true:true
                }
                //active:true,
            })
            if(this.state.active.id===id && this.state.active.true===true){
                this.setState({
                    fields:{
                        id:'',
                        name:'',
                        //active:true
                    },
                    active:{
                        id:'',
                        true:false
                    }
                    //active:true,
                }) 
            }
            this.toggleBth()
            this.state.true=false;
        
    }
    
    invalid(field,e){
        console.log(field)
        if(this.state.errors[field] ===''){
             return false;
        }
        else{
            return true;
        }
        
    }
    toggleBth(){
        this.setState({
            btnSwitch:!this.state.btnSwitch
        })
    }
    render() {
        
        return (
            <div>
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Customers 
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                        <Label htmlFor="name">Full name</Label>
                                        <Input invalid={this.state.true} onChange={e => this.handleChange('name',e)} type="text" id="name" placeholder="Enter your name" required value={this.state.fields.name} />
                                        <FormFeedback>{this.state.errors.name}</FormFeedback>
                                        </FormGroup>
                                       
                                       {/* <div>{this.state.errors.name}</div>
                                       <span>{this.state.errors.name}</span> */}
                                      
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                        <Label htmlFor="name">Phone</Label>
                                        <Input type="text" onChange={e => this.handleChange('phone',e)} id="name" placeholder="Enter your phone" required value={this.state.fields.phone}/>
                                        </FormGroup>
                                        <FormFeedback>{this.state.errors.phone}</FormFeedback>
                                    </Col>
                                    <Col lg="6">
                                    <FormGroup>
                                        <Label htmlFor="select">Type</Label>
                                        <Input type="select" name="select" id="select">
                                            <option value="2">Kém Tiềm Năng</option>
                                            <option value="1">Bình Thường</option>
                                            <option value="3">Tìm Năng</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                    <FormGroup>
                                        <Label htmlFor="select">Status</Label>
                                        <Input type="select" name="select" id="select">
                                            <option value="1">Hoạt Động</option>
                                            <option value="2">Bảo Trì</option>
                                            <option value="3">Đóng</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                    <button className="btn btn-block btn-info" onClick={this.submit}>{
                                        (this.state.btnSwitch==true)?'Thêm': 'Lưu'
                                    }</button>
                                    </Col>
                                </Row>
                                
                                <Table responsive bordered>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.props.Cdata.map((element,index) => {
                                        return (
                                            <tr onClick={()=>this.selectedRow(element.id)} className={(this.state.active.id ==element.id && this.state.active.true==true) ?'active':''}>
                                                <td >{element.id}</td>
                                                <td>{element.name}</td>
                                                <td>{this.typeRender(element.type)}</td>
                                                <td>{this.statusRender(element.status)}</td>
                                                <td>
                                                    <button className="btn btn-primary">Sửa</button>
                                                    <button className="btn btn-danger">Xóa</button>
                                                </td>
                                            </tr>
                                        )
                                        })
                                    }
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous tag="button"></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink tag="button">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next tag="button"></PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default DataGridView;
