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
		    <h2 className="bstf-form-heading"> আমদানি/রপ্তানি লাইসেন্সের   আবেদন পত্র ("ঙ" শ্রেণীর লাইসেন্স) </h2>
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
				 
				 				<h3 className="bstf-form-title"> ১. আমদানি/রপ্তানি লাইসেন্সের জন্য চাহিত তথ্যাদি (প্রযোজ্য ক্ষেত্রে পূরণ করতে হবে ) </h3>
				<div className="form-childform-content">
						<h3 className="bstf-form-title">  তেজস্ক্রিয় পদার্থ,  পারমাণবিক পদার্থ অথবা প্রস্তাবিত যন্ত্রপাতি আমদানী বা রপ্তানীর জন্য চাহিত সাধারণ তথ্যাদি   </h3>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="আমদানীকারক /রপ্তানীকারক দেশের নাম  " name="gender">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর নাম " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর ঠিকানা " name="message">
									<TextArea autoSize={{ minRows: 4, maxRows: 4 }} placeholder="  "   />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ফোন  " name="licence_number " >
									<Input />
								</Form.Item>		
								<Form.Item label="ই-মেইল " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						 
						 
				</div>
				
				
				<h3 className="bstf-form-title"> ২. তেজস্ক্রিয় পদার্থ আমদানি/রপ্তানির জন্য অতিরিক্ত তথ্যাদি (প্রযোজ্য ক্ষেত্রে পূরণ করুন ) </h3>
				<div className="form-childform-content">			
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="উপাদান ও ভর সংখ্যা  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="রাসায়নিক এবং/অথবা ভৌত গঠন  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="প্রস্তুতকারীর নাম (যদি থাকে)  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="মডেল নং (যদি থাকে) " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<h3 className="bstf-form-title"> সক্রিয়তা ও তারিখ   </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="আবদ্ধ উৎস (প্রতি উৎস) " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="উন্মুক্ত উৎস " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
					
					<div className="form-plus-btn form-padding-15">
						<Button icon={<PlusOutlined />} > Add </Button>						
					</div>
					<div className="form-table-design form-padding-15">
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
								<Form.Item label="পরিবহন মাধ্যম উল্লেখ করুন   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="মোড়কের  (Package) ধরন   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ব্যবহারের জন্য ভাড়াকৃত আধারের (Container) সংখ্যা (যদি  থাকে )   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							 
						</Row>	

						
				</div>
				
				
				
				<h3 className="bstf-form-title"> ৩. পারমাণবিক পদার্থের আমদানি/রপ্তানির জন্য চাহিত অতিরিক্ত তথ্যাদি (প্রযোজ্য ক্ষেত্রে পূরণ করুন ) </h3>
				<div className="form-childform-content">	
					<Row gutter={[16, 16]}>					
						<Col xs={24} md={24}>
							<Form.Item label="পারমাণবিক পদার্থের রাসায়নিক বা ভৌত গঠন এবং সমৃদ্ধ (Enriched) ইউরেনিয়াম সমৃদ্ধায়নে (Enriched) ও প্লুটোনিয়াম – ২৪১ – এর শতকরা ভাগ" name="licence_number " >
								<Input />
							</Form.Item>
						</Col>
					</Row>
					<h3 className="bstf-form-title"> পরিমাণ (গ্রাম বা কিলোগ্রাম) </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="আমদানীতব্য/রপ্তানীতব্য পারমাণবিক পদার্থের পরিমাণ   " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="ইউরেনিয়াম বা প্লুটোনিয়ামের পরিমাণ  " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>	
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="সমৃদ্ধ ইউরেনিয়ামে প্লুটোনিয়াম - ২৪১ -এর পরিমাণ " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>	
					<h3 className="bstf-form-title">  </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="পরিবহনের মাধ্যম উল্লেখ করুন   " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="ব্যবহৃতব্য মোড়কের  ধরন  " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>	
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="পারমাণবিক পদার্থের ক্ষতির দায়বদ্ধতা পূরণের জন্য অর্থনৈতিক নিরাপত্তা (সংশ্লিষ্ট দলিল সংযুক্ত করুন )  " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>	
					

					
					
				</div>

				
				 



	              			 
 
 
				<div className="form-btn-group">
				  <Row gutter={[16, 16]}>
						<Col xs={8} md={8} className="form-back-btn">
							  
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