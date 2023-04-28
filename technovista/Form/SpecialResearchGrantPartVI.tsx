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

const SpecialResearchGrantPartVI: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
			    <div className="form-main-title"><span> PART – VI: DECLARATION/CERTIFICATION </span></div>
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
                    
				<div className="form-colored-text">It is certified that – </div>
				<div className="form-colored-text">(a) The same project has not been submitted to any other agency / agencies for financial support. </div>	
				<div className="form-colored-text">(b) The research work proposed in this project is not a duplicate work already done 
				or being done in the field (i.e. area of research)  </div>		
				<div className="form-colored-text">(c) We agree to accept the terms and conditions developed for the Special Allocation 
				for Science and Technology as mentioned in the Guidelines. </div>	
				<div className="form-colored-text"> (d) Associate Investigator assures the responsibility of the 
				Project in case the Principal Investigator leaves the institution/Organization. </div>
				<div className="form-colored-text"> (e) Project will be provided with access to all available facilities in the Organization.</div>

				

				<div className="form-subheading-bottom-border"> Principal Investigator  </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Name" name="name" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Signature" name="signature" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Mobile Number " name="mobile_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Seal" name="seal" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>

				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="E-mail " name="mobile_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							 		
						</Col>
				</Row>

			
				



				<div className="form-subheading-bottom-border"> Associate Investigator  </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Name" name="name" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Signature" name="signature" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Mobile Number " name="mobile_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Seal" name="seal" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>

				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="E-mail " name="mobile_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							 		
						</Col>
				</Row>



				<div className="form-subheading-bottom-border"> Head of the Organization / Institutes /University  </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Name" name="name" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Signature" name="signature" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Organization/Institute/ University Name" name="organization_institute_name" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Seal" name="seal" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Mobile Number " name="mobile_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							 		
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="E-mail " name="mobile_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							 		
						</Col>
				</Row>

				
				<div className="form-main-title form-papers-tobe-attached"><span> Papers to be attached  </span></div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Attachment Type " name="attachment_type">
								<Select placeholder="-- Select --" >
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
									<Option value={"NID/Passport/Certificates"}>NID/Passport/Certificates</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Attachment Name" name="attachment_Name" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Remarks" name="remarks" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Attachment File" name="attachment_file" >
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
				




					<div className="form-btn-group">
					  <Row gutter={[16, 16]}>
							<Col xs={8} md={8} className="form-back-btn">
								 <Button>Back</Button>		
							</Col>
							<Col xs={8} md={8}  className="form-save-btn">
							 	<Button>Save</Button>		
							</Col>
							<Col xs={8} md={8}  className="form-next-btn">
							 	<Button>Print Preview </Button>		
							</Col>
						</Row>
						
					</div>



					
					
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(SpecialResearchGrantPartVI);