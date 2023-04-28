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
				 
				<h3 className="bstf-form-title"> ৯. পারমাণবিক পদার্থের আমদানি/রপ্তানির জন্য চাহিত অতিরিক্ত তথ্যাদি (প্রযোজ্য ক্ষেত্রে পূরণ করুন )  </h3>
				<div className="form-childform-content">
						<div>পারমাণবিক পদার্থের রাসায়নিক বা ভৌত গঠন এবং সমৃদ্ধ (Enriched) ইউরেনিয়াম সমৃদ্ধায়নে (Enriched) ও প্লুটোনিয়াম – ২৪১ – এর শতকরা ভাগ </div>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item  name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<h3 className="bstf-form-sub-title"> পরিমাণ (গ্রাম বা কিলোগ্রাম)   </h3>
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="আমদানিতব্য/রপ্তানিতব্য পারমাণবিক পদার্থের পরিমাণ  " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ইউরেনিয়াম বা প্লুটোনিয়ামের পরিমাণ " name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সমৃদ্ধ ইউরেনিয়ামে প্লুটোনিয়াম - ২৪১ -এর পরিমাণ   " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
 
						</Row>	
						<h3 className="bstf-form-sub-title">    </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="পরিবহনের মাধ্যম উল্লেখ করুন   " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ব্যবহৃতব্য মোড়কের  ধরন " name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
							    <div>পারমাণবিক পদার্থের ক্ষতির দায়বদ্ধতা পূরণের জন্য অর্থনৈতিক নিরাপত্তা (সংশ্লিষ্ট দলিল সংযুক্ত করুন ) </div>
								<Form.Item   name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	



				</div>



				<h3 className="bstf-form-title"> ১০. বিকিরণকারী যন্ত্রপাতি আমদানি/রপ্তানির জন্য চাহিত অতিরিক্ত তথ্যাদি (প্রযোজ্য ক্ষেত্রে পূরণ করুন )  </h3>
				<div className="form-childform-content">
						<h3 className="bstf-form-title"> যন্ত্রপাতির বিবরণ </h3>						 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ধরণ ও মডেল * " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ বিভব মাত্রা কিলো ভোল্ট   *" name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ তড়িৎ প্রবাহ (মিলি এ্যাম্পিয়ার)    " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ ক্ষমতা কিলোওয়াট   " name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="নিয়ন্ত্রণ প্যানেলের ক্রমিক নং       " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="টিউব হেডের ক্রমিক নং  " name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর  নাম   " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর  ঠিকানা   " name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	

 

				<div className="form-plus-btn form-padding-10 ">
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
								<Form.Item label="প্রস্তুতকারীর কারিগরি বিবরণ (Technical Specifications) " name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্ত *" name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
	 					
					
					
					
					
					
			</div>		
					
					


				<h3 className="bstf-form-title"> ১১. পারমিট ফী   </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="পারমিট ফী (টাকায়)  " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ভ্যাট (পারমিট ফী এর উপর)  " name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="মোট (টাকায়)  " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ভমোট (কথায়)  " name="invoice_date " >
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