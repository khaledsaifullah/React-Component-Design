import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Checkbox, Radio, DatePicker, Space   } from 'antd';
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

const GARDPPage1: FC<any> = props => {
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
				<div className="form-subheading-bottom-border"> Part 1: Applicant’s Basic Information   </div>
				<div className="form-childform-content">
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Applicant’s Name (in English )" name="applicant_name" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Applicant’s Name (in Bangla ) " name="applicant_name_bangla" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
                     
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Father’s name " name="father_name" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Mother’s name " name="mother_name" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				
				
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div className="form-display-flex">
								<div className="form-padding-right">
									<div className="form-padding-10"> Date of Birth: </div>
									<Space direction="vertical" size={"large"}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>
								</div>
								<div>
									<div className="form-padding-10"> Age on the last Date of Application :</div>
									<Form.Item  name="mother_name" >
										<Input />
									</Form.Item>		
								</div>
							</div>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Home District " name="home_district">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>	
						</Col>
				</Row>
				
				
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Gender" name="gender">
								<Select placeholder="-- Select --" >
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Nationality " name="nationality">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>	

						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="NID" name="nid" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Passport number " name="passport_number" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				
			</div>			
   				 
					 


			<div className="form-subheading-bottom-border"> Part 2: Administrative Communication   </div>
			<div className="form-childform-content">
				<div className="form-subheading-bottom-border"> Applicant’s Present Address   </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="House & Road No. " name="house_road_no" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Village " name="village" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
                     
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Post Office " name="post_office" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Upazila/Thana  " name="upazila_thana">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>	
						</Col>
				</Row>
				
				
				 
				
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="District " name="home_district">
								<Select placeholder="-- Select --" >
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Division " name="division">
								<Select placeholder="-- Select --" >
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
								</Select>
							</Form.Item>	
						</Col>
				</Row>
				<div className="form-subheading-bottom-border"> &nbsp;   </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Mobile Number " name="mobile_number" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="E-Mail " name="email" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>

				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							
							<div className="form-display-flex">
								<div className="form-padding-right">
									<Form.Item label="Social Media Messenger " name="social_media_messenger">
										<Select placeholder="Skype ID" >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
								</div>
								<div>
									<Form.Item label="ID " name="id" >
										<Input />
									</Form.Item>		
								</div>
							</div>
							 
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="SSC /equivalent certificate number  " name="id" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>


				<div className="form-subheading-bottom-border"> Applicant’s Bank Accounts Information    </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Bank  " name="bank ">
								<Select placeholder=" " >
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
								</Select>
							</Form.Item>	
							 
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Branch   " name="branch  ">
								<Select placeholder=" " >
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
								</Select>
							</Form.Item>	
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Account Name  " name="account_name " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Account Number  " name="account_number " >
								<Input />
							</Form.Item>		
						</Col>
				</Row>





				 
				
			</div>

					 
				<div className="form-subheading-bottom-border"> Part 3: Applicant’s Current Studentship Information  </div>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Applicant’s Present Enrollment in  " name="bank ">
										<Select placeholder="M. Sc. / M. Phil / PhD / Leading M. Phil to PhD" >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
									 
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Studentship Type " name="studentship_type">
										<Select placeholder="Full-time student / Part-time student / Evening course student" >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Name of the University" name="name_ofthe_facultyschool ">
										<Select placeholder=" " >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
									 
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Name of the Faculty/School" name="name_ofthe_facultyschool">
										<Select placeholder=" " >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-padding-10"> Name of the department/Subject :</div>
									<Form.Item   name="name_ofthe_facultyschool ">
										<Select placeholder=" " >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
									 
								</Col>
								<Col xs={24} md={12}>
									<div className="form-padding-10"> Admission Date:</div>
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>		
								</Col>
						</Row>

						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Academic Year" name="academic_year ">
										<Select placeholder="1st Year " >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
									 
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Academic Session " name="name_ofthe_facultyschool">
										<Select placeholder="2020-2021 " >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
								</Col>
						</Row>



						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text form-padding-10"> Whether your admission is confirmed by academic council / proper authority   </div>	
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'no']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"Yes"}</Radio></li>
												<li><Radio value={"no"}>{"No"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
								<Col xs={24} md={12}>
									<div className="form-colored-text form-padding-10"> If yes, attach the proof   </div>
									<Form.Item   name="name_ofthe_facultyschool">
										<Select placeholder="Maximum file size 10 Mb " >
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
											<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
										</Select>
									</Form.Item>	
									
								</Col>
						</Row>
						
						


				</div>




















					<div className="form-btn-group">
					  <Row gutter={[16, 16]}>
							<Col xs={8} md={8} className="form-back-btn">
								 &nbsp;	
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
export default React.memo(GARDPPage1);