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
 				<h3 className="bstf-form-title"> ২১. নিরাপত্তাজনিত যন্ত্রপাতি এবং সুবিধাদি   </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সুবিধাদি এবং  যন্ত্রপাতি    " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারী  " name="licence_number " >
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
								<Form.Item label="কাজ   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সংখ্যা   " name="licence_number " >
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
						 

						<h3 className="bstf-form-title"> সংযুক্তি   </h3>
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তির ধরন" name="gender">
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
								<Form.Item label="সংযুক্ত  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্ত  " name="licence_number " >
									<Input placeholder="Maximum file size 10 Mb" />
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
 
				<h3 className="bstf-form-title"> ২২. লাইসেন্সধারী /প্রাধিকার প্রাপ্ত ব্যাক্তির ঘোষনা   </h3>
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