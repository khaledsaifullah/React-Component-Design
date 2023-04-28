import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Checkbox, Radio, DatePicker, Space,Upload  } from 'antd';
import {EnumUtils} from "../../../../../utils";
import {StatusEnum} from "../../../../../utils/enums";
import {useForm} from "../../../../../hooks/useForm";

const { TextArea } = Input;
const { RangePicker } = DatePicker;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
};

const initialState  = {
    fields: {
        name_en: null,
        name_bn: null,
        status: 1,
    }
}

const GARDPPage5: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
				<div className="form-main-title"><span> Grants Application for R & D Project  </span></div>
                <Form
                    {...formItemLayout}
                    form={formRef}
                    name="registrationForm"
                    scrollToFirstError={true}
                    initialValues={initialValues}
                    onValuesChange={handleChange}
                    onFinish={handleSubmit}
                    onFinishFailed={handleSubmitFailed}
                >
				<div className="form-subheading-bottom-border"> Part 10 : Applicant’s swear   </div>
				<div className="form-childform-content">                        
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text"> I myself fill up the TRDP application from   </div>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"Yes"}</Radio></li>
												<li><Radio value={"no"}>{"No"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text"> If I get TRDP grant, I will keep book of financial account and submit financial 
									report with voucher to MoST in time   </div>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"Yes"}</Radio></li>
												<li><Radio value={"no"}>{"No"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text form-padding-10"> If I get TRDP grant, I will submit 02 copies of research report
									(in 250 words and bind) to MoST in time    </div>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"Yes"}</Radio></li>
												<li><Radio value={"no"}>{"No"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
						</Row>
						
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text form-padding-10"> If I leave /stop/ defer my research project (whatever isthe reason), as soon as possible, 
									I will inform it to MoST and seek permission </div>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"Yes"}</Radio></li>
												<li><Radio value={"no"}>{"No"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
						</Row>
						
						<div className="form-colored-text form-padding-10"> I am again confirming the following information below</div>	
						
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Mobile" name="mobile" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="NID" name="nid" >
										<Input />
									</Form.Item>		
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Email" name="email" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Skype" name="skype" >
										<Input />
									</Form.Item>		
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Bank Account Number" name="bank_account_number" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									 		
								</Col>
						</Row>
						<div  className="form-padding-15">
							<Row gutter={[16, 16]}>
									<Col xs={24} md={12}>
										<div className="form-colored-text"> Information I have given in the form is correct and authentic   </div>	
									</Col>
									<Col xs={24} md={12}>
										<Form.Item  name="web_access" > 
											<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
												<ul className="form-display-flex form-padding">
													<li><Radio value={"yes"}>{"Yes"}</Radio></li>
													<li><Radio value={"no"}>{"No"}</Radio></li>
												</ul>
											</Radio.Group>
										</Form.Item>	
									</Col>
							</Row>
						</div>	
						<div  className="form-padding-15">
							<Row gutter={[16, 16]}>
									<Col xs={24} md={12}>
										<div className="form-colored-text"> I myself have printed, signed and kept copy of this application form for further any reference   </div>	
									</Col>
									<Col xs={24} md={12}>
										<Form.Item  name="web_access" > 
											<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
												<ul className="form-display-flex form-padding">
													<li><Radio value={"yes"}>{"Yes"}</Radio></li>
													<li><Radio value={"no"}>{"No"}</Radio></li>
												</ul>
											</Radio.Group>
										</Form.Item>	
									</Col>
							</Row>
						</div>	

				
                </div>				
					
					
					
				<div className="form-subheading-bottom-border"> Part 11 : Papers to be attached   </div>
				<div className="form-childform-content">  					
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Attachment Type " name="attachment_type">
									<Select placeholder="Scientific / Social" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Attachment Name " name="attachment_name" >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Remarks " name="remarks" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Attachment File" name="attachment_name" >
									<Input />
								</Form.Item>		
							</Col>
					</Row>


					<div className="form-add-btn">
						 <Button>+ Add</Button>		
					</div>
					<div className="form-table-design">
							<table>
							  <thead>
								<tr>
								  <th>Subject</th>
								  <th>Name of Degree</th>
								  <th>University/Institute</th>
								  <th>Country</th>
								  <th>Class/GPA</th>
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								</tr>
								<tr>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								</tr>
							  </tbody>      
							</table>
					</div>

					 
				</div>	



				<div className="form-subheading-bottom-border">     </div>
				<div className="form-childform-content">  					
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Application Tracking Number " name="application_tracking_number" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Application Submission Date" name="application_submission_date" >
									<Input />
								</Form.Item>		
							</Col>
					</Row>

				</div>					
					

				<div className="form-btn-group">
				  <Row gutter={[16, 16]}>
						<Col xs={8} md={8} className="form-back-btn">
							 <Button>Back</Button>
						</Col>
						<Col xs={8} md={8}  className="form-save-btn">
							<Button>Save</Button>		
						</Col>
						<Col xs={8} md={8}  className="form-next-btn">
							<Button>Next </Button>		
						</Col>
					</Row>
					
				</div>
				
					
					
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(GARDPPage5);