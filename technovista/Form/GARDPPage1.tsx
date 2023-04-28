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
							<div className="form-padding-10"> Date of Birth:</div>
							<Space direction="vertical" size={"large"}>
								<DatePicker renderExtraFooter={() => 'extra footer'} />
							</Space>								
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Gender " name="gender">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>	
						</Col>
				</Row>
				
				
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Home District " name="home_district">
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
				<div className="form-subheading-bottom-border"> Applicant’s Permanent Address   </div>
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
							<Form.Item label="Skype ID " name="skype_id" >
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
							<Form.Item label="SSC /equivalent certificate number  " name="ssc_equivalent_certificate_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Passport number" name="passport_number" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				<div className="form-subheading-bottom-border"> Applicant’s Bank Accounts Information   </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Bank " name="bank">
								<Select placeholder="-- Select --" >
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Branch " name="branch">
								<Select placeholder="-- Select --" >
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
								</Select>
							</Form.Item>	
						</Col>
				</Row>

				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Account Name  " name="account_name  " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Account Number " name="account_number " >
								<Input />
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