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
				 
				<h3 className="bstf-form-title"> ৪. বিকিরণকারী যন্ত্রপাতি আমদানি/রপ্তানির জন্য চাহিত অতিরিক্ত তথ্যাদি (প্রযোজ্য ক্ষেত্রে পূরণ করুন ) </h3>
				<div className="form-childform-content">
						<h3 className="bstf-form-title"> যন্ত্রপাতির বিবরণ   </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
									<Form.Item label="ধরণ ও মডেল   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ বিভব মাত্রা কিলো ভোল্ট   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ তড়িৎ প্রবাহ (মিলি এ্যাম্পিয়ার)    " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ ক্ষমতা কিলোওয়াট   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
					
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="নিয়ন্ত্রণ প্যানেলের ক্রমিক নং    " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="টিউব হেডের ক্রমিক নং    " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
					
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর  নাম    " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর  ঠিকানা   " name="licence_number " >
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
				
					<Form.Item label="প্রস্তুতকারীর কারিগরি বিবরণ (Technical Specifications) " name="message"  className="form-padding-10">
						<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
					</Form.Item>		
				
				
				
				</div>		
 
				<h3 className="bstf-form-title"> ৫. প্রস্তাবিত দ্রব্যের আমদানি/রপ্তানির জন্য চাহিত অতিরিক্ত তথ্যাদি </h3>
				<div className="form-childform-content">
					<Form.Item  name="message">
						<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
					</Form.Item>		
					<h3 className="bstf-form-title"> সংযুক্তি   </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="সংযুক্তির ধরন  " name="gender">
								<Select placeholder=" " >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="সংযুক্তির নাম  " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>	
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="মন্তব্য  " name="gender">
								<Select placeholder=" " >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="সংযুক্ত" name="licence_number " >
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


					
					
				</div>		









				<h3 className="bstf-form-title"> ৬. লাইসেন্সধারী ব্যাক্তির ঘোষনা </h3>
				<div className="form-childform-content">
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={14}>
								আমি এই মর্মে ঘোষণা করিতেছি যে, 
							</Col>
						</Row>	
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={14}>
								আমি নিজে <Radio> </Radio> ব্যক্তিগতভাবে / <Radio> </Radio> প্রতিষ্ঠানের পক্ষে এ আবেদন দাখিল করছি
							</Col>
							<Col xs={24} md={10}>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}> <Radio>হ্যাঁ </Radio>  </Col>
									<Col xs={24} md={16}> <Radio>না</Radio>  </Col>
								 </Row>		
							</Col>
					</Row>	
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={14}>
								আমি পুনরায় নিচের তথ্যগুলো নিশ্চিত করছি
							</Col>
					</Row>	
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="নাম   " name="gender">
								<Select placeholder=" " >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="প্রতিষ্ঠানের পদ  " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>	
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="এনআইডি  " name="gender">
								<Select placeholder=" " >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="মোবাইল নম্বর  " name="licence_number " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>	
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={14}>
								 এই ফরমে প্রদত্ত সকল বিবরণী, তৎসহ এতদ উদেশ্যে সংযুক্ত অতিরিক্ত সকল দলিলাদি সত্য এবং সঠিক 
							</Col>
							<Col xs={24} md={10}>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}> <Radio>হ্যাঁ </Radio>  </Col>
									<Col xs={24} md={16}> <Radio>না</Radio>  </Col>
								 </Row>		
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