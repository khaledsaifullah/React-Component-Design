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
		    <h2 className="bstf-form-heading"> বিকিরণকারী যন্ত্রপাতির লাইসেন্সের আবেদন পত্র ("গ" শ্রেণীর লাইসেন্স) </h2>
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

 				<h3 className="bstf-form-title"> ১০. যে বিকিরণকারী যন্ত্রপাতি লাইসেন্স করা হইবে উহার বিবরণ এবং অভিপ্রেত ব্যবহার  * </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ধরণ ও মডেল *" name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ বিভব মাত্রা কিলো ভোল্ট  * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ তড়িৎ প্রবাহ (মিলি এ্যাম্পিয়ার)   *" name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সর্বোচ্চ ক্ষমতা কিলোওয়াট    * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="নিয়ন্ত্রণ প্যানেলের ক্রমিক নং   " name="licence_number " >
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
								<Form.Item label="সরবরাহকারীর  নাম  * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর  ঠিকানা  *  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="অভিপ্রেত ব্যবহার (প্রদানকৃত কোড ব্যবহার করুন) * " name="gender">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
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
 
 
 
				<h3 className="bstf-form-title"> ১১. ১০ নং ক্রমিকে বর্ণিত বিকিরণকারী যন্ত্রপাতি সম্পর্কিত অতিরিক্ত তথ্য  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				
				
				</div>
 

 
 
 

 				<h3 className="bstf-form-title"> ১২. আবেদনকারী কর্তৃক বর্তমানে ব্যবহৃত বিকিরণ সনাক্তকরণ অথবা পরিমাপণ যন্ত্রপাতি (যদি থাকে)   </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="যন্ত্রের ধরণ   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারী   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="মডেল নং    " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="বর্তমান সংখ্যা    " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সনাক্তযোগ্য বিকিরণ    " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="পরিধি   " name="licence_number " >
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
 
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি  (Callibration Certificate)  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 

 
 
				</div>
 
 
 
				<h3 className="bstf-form-title"> ১৩. ১২ নং ক্রমিকে বর্ণিত যন্ত্রের ক্রমাংকন (Calibration) : <br/>
        (সঠিক জায়গায়  চিহ্ন  দিন এবং প্রাসংগিক প্রত্যায়ন সংযুক্ত করুন)   </h3>
				<div className="form-childform-content"> 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}> লাইসেন্সধারীর নাম &nbsp; <Checkbox></Checkbox>  </Col>
							<Col xs={24} md={12}> 
								<div>অন্যান্য (ক্রমাংকন এজেন্সীর নাম ও ঠিকানা উল্লেখ করুন) &nbsp; <Checkbox></Checkbox>  </div>
								<Row gutter={[16, 16]}>
									<Col xs={24} md={12}>
										<Form.Item label="এজেন্সীর নাম    " name="licence_number " >
											<Input />
										</Form.Item>		
									</Col>
									<Col xs={24} md={12}>
										<Form.Item label="ঠিকানা   " name="licence_number " >
											<Input />
										</Form.Item>		
									</Col>
								</Row>	 
							</Col>
						</Row>						 

						<div className="form-padding-15">যন্ত্রের ক্রমাংকনের ক্ষেত্রে ব্যবহৃত পদ্ধতি, সংখ্যা, সর্বশেষ তারিখ এবং প্রযোজ্য প্রমিতি উল্লেখপূর্বক একটি' বিবরণী সংযুক্ত করুন  </div>
 
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