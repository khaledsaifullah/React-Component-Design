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

const SpecialResearchGrantPartI: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
                <div className="form-main-title"><span>PART – I: GENERAL INFORMATION</span></div>
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
				
					<div className="form-colored-title"> 1. NAME AND ADDRESS OF THE CONTRACTING INSTITUTE </div>
				    <Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item label="Name of the Institute" name="name_ofthe_institute" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>
					
					<div className="form-subheading-bottom-border">Address of the Contracting Institute</div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="House & Road No." name="house_road_no" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Village" name="village" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Post Office" name="post_office" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Upazilla/Thana" name="upazilla_thana">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>	
							
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="District" name="district">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Division" name="division">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Telephone" name="telephone" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Fax" name="fax" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Mobile" name="mobile" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="E-mail" name="email" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>

					<div className="form-colored-title"> 2.DEPARTMENT WHERE RESEARCH IS TO BE PERFORMED </div>
				    <Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item name="department_ofthe_institute" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>

					<div className="form-colored-title"> 3.TITLE OF THE PROPOSED PROJECT </div>
				    <Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item name="title_ofthe_proposed_project" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>

					<div className="form-colored-title-samll"> (A) Name of Coordinated Research Programme (if applicable) </div>
				    <Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item name="title_ofthe_proposed_project" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>

					<div className="form-colored-title-samll"> (1) Name and Designation of the authority of the Organization/Institutes /University forwarding the research contract proposal </div>
				    <Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Name of the Authority" name="name_ofthe_authority" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Designation " name="designation " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>


					<div className="form-colored-title-samll"> Name and Address of the Organization  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>		
						</Col>
					</Row>
					
					
					
					<div className="form-colored-title-samll"> (2) Area of Research </div>
				    <Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item name="Area of Research">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>		
						</Col>
					</Row>


					<div className="form-duration-totalcost">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="4. DURATION (in year)" name="duration_in_year)" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="5. TOTAL COSTS (in Taka)" name="total_cost_in_taka)" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
					</div>

					<div className="form-btn-group">
					  <Row gutter={[16, 16]}>
							<Col xs={8} md={8} className="form-back-btn">
								 <Button className="display-none" >Back</Button>		
							</Col>
							<Col xs={8} md={8}  className="form-save-btn">
							 	<Button>Save</Button>		
							</Col>
							<Col xs={8} md={8}  className="form-next-btn">
							 	<Button>Next</Button>		
							</Col>
						</Row>
						
					</div>


				 
						
					
					
					
					 
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(SpecialResearchGrantPartI);