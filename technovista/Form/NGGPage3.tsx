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

const NGGPage3: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
		    <h2 className="bstf-form-heading">বেসরকারি মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা প্রতিষ্ঠান সমূহে অনুদান প্রদানের জন্য আবেদন ফরম  </h2>
            <div className="form-page-content form-page-content-registration bstf-form">
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
				<h3 className="bstf-form-title">আবেদনকারীর তথ্য </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তির ধরন " name="attachment_type">
									<Select placeholder="Scientific / Social" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তির নাম " name="attachment_name" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="মন্তব্য " name="attachment_type">
									<Select placeholder="Scientific / Social" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্ত" name="attachment_name" >
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
				 


				<h3 className="bstf-form-title">অঙ্গিকারনামা সংক্রান্ত </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text"> আমি প্রতিষ্ঠানের পক্ষে এ আবেদন দাখিল করছি   </div>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"হ্যাঁ "}</Radio></li>
												<li><Radio value={"no"}>{"না"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text"> অনুদান প্রাপ্ত হলে, আমি আবেদনে বর্ণিত বিজ্ঞান সচেতনতা কার্যক্রম বাস্তবায়ন সম্পন্ন করব এবং বিল ভাউচার সহ প্রতিবেদন এবং বাস্তবায়িত কার্যক্রমের সংক্ষিপ্ত বিবরণ সময়মতো মন্ত্রণালয়ে পাঠাব   </div>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"হ্যাঁ "}</Radio></li>
												<li><Radio value={"no"}>{"না"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={24}>
									<div className="form-colored-text form-padding-15"> আমি পুনরায় নিচের তথ্যগুলো নিশ্চিত করছি   </div>	
								</Col>
						</Row>
						<div className="form-padding-15"></div>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সংস্থা / প্রতিষ্ঠানের পদ  " name="attachment_name" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="মোবাইল নম্বর " name="attachment_name" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="এনআইডি" name="attachment_name" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ই-মেইল " name="attachment_name" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<div className="form-padding-15"></div>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text"> আমি এ মর্মে হলফ করছি যে, উপরে যে সব তথ্য পরিবেশিত হয়েছে তা সঠিক ও সত্য।    </div>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"হ্যাঁ "}</Radio></li>
												<li><Radio value={"no"}>{"না"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
						</Row>


						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
									<Form.Item label="আবেদনকারীর স্বাক্ষর  " name="which_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
									</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
									<Form.Item label="বেসরকারি শিক্ষা প্রতিষ্ঠান প্রধানের  স্বাক্ষর  " name="which_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
									</Form.Item>		
							</Col>
						</Row>
						
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
									<Form.Item label="আবেদনকারীর সীল    " name="which_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
									</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
									<Form.Item label="বেসরকারি শিক্ষা প্রতিষ্ঠান প্রধানের  সীল  " name="which_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
									</Form.Item>		
							</Col>
						</Row>
						
						
						


				</div>


				<h3 className="bstf-form-title"> </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="অ্যাপ্লিকেশন ট্র্যাকিং নম্বর " name="attachment_name" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="আবেদন জমা দেওয়ার তারিখ " name="attachment_name" >
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
							<Button>Print Preview </Button>		
						</Col>
					</Row>
					
				</div>


				 
				 
				 
				 
				 
				 
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(NGGPage3);