import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Checkbox, Radio, DatePicker, Space,Upload  } from 'antd';
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

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


const NGGPage3: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
		    <h2 className="bstf-form-heading">আমদানি/রপ্তানি পারমিটের আবেদন পত্র   </h2>
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
				<h3 className="bstf-form-title"> ৫. আমদানি/রপ্তানির উদ্দেশ্য (সঠিক জায়গায় চিহ্ন দিন) </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={8}>
								 	ব্যবহার &nbsp;&nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
							<Col xs={24} md={8}>
								 	ব্যবসা   &nbsp;&nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
							<Col xs={24} md={8}>
								 	বঅনন্যা (উল্লেখ করুন)  &nbsp;&nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
						</Row>
						<h3 className="bstf-form-sub-title">যদি আমদানি/রপ্তানির উদ্দেশ্য "ব্যবসা" হয় তাহলে বিগত ছয় (৬) মাসের আমদানিকৃত পণ্য  বিক্রয়কারী যেখানে যেখানে বিক্রয় করেছে সেই প্রতিষ্ঠানের তথ্য দিন </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
							    <div className="form-padding-10"> তারিখ  </div>
								<div className="form-padding-10">
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>
								</div>								
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="পারমিট নম্বর " name="permit_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>				
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="প্রতিষ্ঠানের নাম " name="institue_name " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ঠিকানা" name="address " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="পমোবাইল  " name="mobile " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ই-মেইল " name="email " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="পণ্যের  নাম  " name="mobile " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="পণ্যের অবস্থা " name="product_state">
									<Select placeholder="গুদামজাত / বিক্রয়/খালাসের অপেক্ষায় " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>	

						<div className="form-plus-btn form-padding-10">
							<Button icon={<PlusOutlined />} > Add </Button>						
						</div>
						<div className="form-table-design form-padding-10">
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
						
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্ত  " name="mobile " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						
						<h3 className="bstf-form-sub-title"> যদি আমদানি/রপ্তানির উদ্দেশ্য "ব্যবহার" হয় তাহলে ব্যবহারিক লাইসেন্সের তথ্য দিন </h3>
						
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-text-red"> ব্যবহারিক লাইসেন্স না থাকলে প্রথমে  লাইসেন্স এর জন্য আবেদন করুন।     </div>  		
							</Col>
							<Col xs={24} md={12}>
								 <div className="form-blue-bg"> ব্যবহারিক লাইসেন্স এর জন্য আবেদন </div>  
							</Col>
						</Row>
						
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="শ্রেণী  " name="mobile " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="লাইসেন্স নম্বর / অ্যাপ্লিকেশন ট্র্যাকিং নম্বর  " name="email " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	

						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
							    <div className="form-padding-10"> প্রদানের তারিখ  </div>
								<div className="form-padding-10">
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>
								</div>								
							</Col>
							<Col xs={24} md={12}>
							    <div className="form-padding-10"> মেয়াদ উত্তীর্ণের তারিখ  </div>
								<div className="form-padding-10">
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>
								</div>								
							</Col>

						</Row>


						
						
						
				</div>
				
				 
				 
	
				<h3 className="bstf-form-title"> ৬. আমদানি/রপ্তানিতব্য দ্রব্যের বিবরণ (সঠিক জায়গায় চিহ্ন দিন) </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={6}>
								 	তেজস্ক্রিয় পদার্থ &nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
							<Col xs={24} md={6}>
								 	পারমাণবিক পদার্থ &nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
							<Col xs={24} md={6}>
								 	বিকিরণকারী যন্ত্রপাতি &nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
							<Col xs={24} md={6}>
								 	অনন্যা (উল্লেখ করুন) &nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
						</Row>				
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div className="form-display-flex form-padding-10">
									<div className="form-padding-5">Proforma Invoice এর সংখ্যা * &nbsp; </div>
									<div>
										<Form.Item name="invoice" >
											<Input />
										</Form.Item>
									</div>
								</div>								
							</Col>
							<Col xs={24} md={12}> 
								<div className="form-padding-10 form-text-right"> <a href="#"> <PlusOutlined /> </a>	</div>	
							</Col>
						</Row>	

						<h3 className="bstf-form-sub-title"> Proforma Invoice এর তথ্য   </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Invoice নম্বর  " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Invoice তারিখ " name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						
						 
						
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								 <div className="form-padding-15"> Invoice এর আর্থিক মূল্যের পরিমাণ * </div>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}>
										<Form.Item  name="gender">
											<Select placeholder="USD" >
												<Option value={"Male"}>Male </Option>
												<Option value={"Female"}>Female</Option>
											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} md={16}>
										<Form.Item name="invoice_date " >
											<Input />
										</Form.Item>
									</Col>
								 </Row>
							</Col>
							<Col xs={24} md={12}>
								 <Form.Item label="মন্তব্য  " name="invoice_date " >
									<Input />
								</Form.Item>
							</Col>
						</Row>	
						<h3 className="bstf-form-sub-title"> &nbsp;</h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								 <div className="form-padding-15"> C & F Value এর আর্থিক মূল্যের পরিমাণ * </div>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}>
										<Form.Item  name="gender">
											<Select placeholder="USD" >
												<Option value={"Male"}>Male </Option>
												<Option value={"Female"}>Female</Option>
											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} md={16}>
										<Form.Item name="invoice_date " >
											<Input />
										</Form.Item>
									</Col>
								 </Row>
							</Col>
							
							<Col xs={24} md={12}>
								 <div  className="form-padding-top-30">
									 <Row gutter={[16, 16]}>
										<Col xs={24} md={12}>
											<div>আজকের মুদ্রা বিনিময় হার দেখতে পাশের লিংকটি চাপুন </div>
										</Col>
										<Col xs={24} md={12}>
											<a href="#" className="click-blue-btn"> Click on this button  </a>
										</Col>
									 </Row>
								 </div>
							</Col>
							
							
						 
						</Row>	
				
						<h3 className="bstf-form-sub-title"> LC এর তথ্য   </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="LC Credit  নম্বর  " name="lc_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="LC Credit  তারিখ" name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								 <div className="form-padding-15"> LC Credit এর আর্থিক মূল্যের পরিমাণ * </div>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}>
										<Form.Item  name="gender">
											<Select placeholder="USD" >
												<Option value={"Male"}>Male </Option>
												<Option value={"Female"}>Female</Option>
											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} md={16}>
										<Form.Item name="invoice_date " >
											<Input />
										</Form.Item>
									</Col>
								 </Row>
							</Col>
							<Col xs={24} md={12}>
								 <Form.Item label="মন্তব্য  " name="invoice_date " >
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