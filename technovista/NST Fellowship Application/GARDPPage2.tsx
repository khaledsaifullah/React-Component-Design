import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Checkbox, Radio, DatePicker, Space   } from 'antd';
import {EnumUtils} from "../../../../../utils";
import {StatusEnum} from "../../../../../utils/enums";
import {useForm} from "../../../../../hooks/useForm";

import { PlusOutlined } from '@ant-design/icons';

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

const GARDPPage2: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
			    <div className="form-main-title"><span> NST Fellowship Application   </span></div>
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
                     
				<div className="form-subheading-bottom-border"> Part 4 : Type of NST Fellowship   </div>
				<div className="form-childform-content">
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Which one of the following NST fellowship type are you applying for?    " name="bank ">
									<Select placeholder="M. Sc. / 1st year M. Phil.  / 2nd year M. Phil / 1st year PhD " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Group you applied for   " name="branch  ">
									<Select placeholder="Agriculture/Biology/Physical " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>

						
				</div>

				<div className="form-subheading-bottom-border"> Part 5 : Applicant’s Academic Information   </div>
				<div className="form-childform-content">
					<div className="form-subheading-bottom-border"> Applicant’s Schooling Record    </div>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="University/Institute " name="university_institute">
									<Select placeholder=" " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Country " name="country  ">
									<Select placeholder="" >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Name of Examination " name="name_of_examination">
									<Select placeholder=" " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Group/Subject/Department  " name="group_subject_department">
									<Select placeholder=" " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Class/GPA/CGPA " name="name_of_examination">
									<Select placeholder=" " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Year of Passing   " name="year_of_passing  ">
									<Select placeholder=" " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					
					<div className="form-add-btn">
						 <Button icon={<PlusOutlined />} > Add </Button>		
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


					 




				<div className="form-subheading-bottom-border"> Part 6 : Applicant’s record of academic feats   </div>
				<div className="form-childform-content">
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Do you have any published article in peer review journal? " name="name_of_examination">
									<Select placeholder="Yes/No " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
								 
							</Col>
							<Col xs={24} md={12}>
								<div className="form-display-flex form-padding-10">
									<div className="form-padding-right">
									    <div> If yes, how many publication?</div>
										<Form.Item name="account_name " >
											<Input />
										</Form.Item>		
									</div>
									<div>
									    <div> Mention the name of the  journal </div>
										<Form.Item name="account_name " >
											<Input />
										</Form.Item>		
									</div>
								</div>
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Have any paper been accepted by any journal? " name="name_of_examination">
									<Select placeholder="Yes/No " >
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									</Select>
								</Form.Item>	
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="How many paper accepted?  " name="account_name " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Write your merit position in the B.Sc. exam (if any)  " name="account_name " >
									<Input />
								</Form.Item>		
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Write your merit position in the M.Sc. exam (if any)  " name="account_name " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>

					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Mention any medal / honor you got at M.Phil. level?  " name="account_name " >
									<Input />
								</Form.Item>		
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Did you present any seminar paper? " name="name_of_examination">
									<Select placeholder="Yes/No " >
										<Option value={"yes"}>Yes</Option>
										<Option value={"no"}>No</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>

					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="If yes, write the name of the your paper  " name="account_name " >
									<Input />
								</Form.Item>		
								 
							</Col>
							<Col xs={24} md={12}>
								 	
							</Col>
					</Row>



				</div>



				<div className="form-subheading-bottom-border"> Part 7 : Information Related to Research Proposal   </div>
				<div className="form-childform-content">
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Title of the research  " name="account_name " >
									<Input />
								</Form.Item>		
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Which type can your research be fall in? " name="name_of_examination">
									<Select placeholder="Scientific / Social " >
										<Option value={"yes"}>Yes</Option>
										<Option value={"no"}>No</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Write 02 objectives of your research " name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  placeholder="[in 03 catchy words] ............   2. [in 03 catchy words] ............ " />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Which of the following do your research work base on? (please Select) " name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  placeholder=" "  />
								</Form.Item>		
							</Col>
					</Row>
					
					<div className="form-subheading-bottom-border"> Mention the time schedule of your research work   </div>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div> Date of Start: </div>
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>		
							</Col>
							<Col xs={24} md={12}>
							    <div> Date of Completion: </div>
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>		
							</Col>
					</Row>
					<div className="form-subheading-bottom-border"> Supervisor Information   </div>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Name of the supervisor  " name="name_ofthe_supervisor " >
									<Input />
								</Form.Item>		
								 
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Designation of the supervisor  " name="designation_ofthe_supervisor " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>

					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Message " name="message">
									<TextArea autoSize={{ minRows: 4, maxRows: 7 }} placeholder="  "   />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Mobile number  " name="mobile_number " >
									<Input />
								</Form.Item>		
								<Form.Item label="Email   " name="email" >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<div className="form-subheading-bottom-border">   </div>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="The location your research could be inspected in  " name="account_name " >
									<Input />
								</Form.Item>		
							</Col>
								<Col xs={24} md={12}>
									<div className="form-padding-10"> Whether your admission is confirmed by academic council / proper authority   </div>	
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'no']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"Yes"}</Radio></li>
												<li><Radio value={"no"}>{"No"}</Radio></li>
											</ul>
										</Radio.Group>
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
export default React.memo(GARDPPage2);