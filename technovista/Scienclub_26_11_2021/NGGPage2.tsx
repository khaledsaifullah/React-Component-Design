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
		    <h2 className="bstf-form-heading">বেসরকারি মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা প্রতিষ্ঠান সমূহে অনুদান প্রদানের জন্য আবেদন ফরম   </h2>
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
 				<h3 className="bstf-form-title"> প্রার্থিত অনুদানের উদ্দেশ্য ও ব্যয় যৌক্তিকতা নিরূপণ </h3>
				<div className="form-childform-content">
					    <h3 className="bstf-form-title"> প্রার্থিত অনুদান ব্যবহার করে যে সকল বিজ্ঞান সচেতনতামূলক কাজ বাস্তবায়নের পরিকল্পনা
							রয়েছে সেসকল  কাজের নাম, সম্ভাব্য বাস্তবায়ন তারিখ, স্থান ও সম্ভাব্য ব্যয় উল্লেখ করুণ </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="পরিকল্পনাধীন কার্যক্রমের নাম " name="university_institute">
									<Select placeholder=" " >
										<Option value={"Dhaka University"}>Dhaka University</Option>
										<Option value={"Khulna University"}>Khulan University</Option>
										<Option value={"Cumilla University"}>Cumilla University</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="তারিখ " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="বাস্তবায়নের স্থান " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সম্ভাব্য ব্যয় " name="licence_number " >
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
						 

						<h3 className="bstf-form-title"> ইতোপূর্বে অত্র মন্ত্রণালয় থেকে অনুদান পেয়ে থাকলে তা সদ্ব্যবহার সম্পর্কে নিম্নোক্ত তথ্য দিন </h3>
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div className="form-label-topup form-margin-top-23">বিগত অর্থবছরে অনুদান প্রাপ্ত হয়েছেন কি না</div>
								<Form.Item  name="gender">
									<Select placeholder="হ্যাঁ / না" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<div className="form-label-topup">প্রাপ্ত অনুদানের অর্থ ব্যবহার সম্পর্কিত সভার কার্যবিবরণী ও বিল ভাউচার মন্ত্রণালয়ে দাখিল করা হয়েছে কিনা? </div>
								<Form.Item  name="gender">
									<Select placeholder="হ্যাঁ / না" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>
					<h3 className="bstf-form-title"> সর্বশেষ তিন বছরের তথ্য  </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="অর্থবছর "  name="gender">
								<Select placeholder=" " >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="অনুদানের পরিমান  " name="licence_number " >
								<Input />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="অর্থবছর "  name="gender">
								<Select placeholder=" " >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="অনুদানের পরিমান  " name="licence_number " >
								<Input />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="অর্থবছর "  name="gender">
								<Select placeholder=" " >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="অনুদানের পরিমান  " name="licence_number " >
								<Input />
							</Form.Item>
						</Col>
					</Row>




					<h3 className="bstf-form-title"> প্রতিষ্ঠানের সক্রিয়তা নির্ণয়  </h3>
					<h3 className="bstf-form-title"> গত অর্থবছরে প্রতিষ্ঠান কর্তৃক বাস্তবায়িত বিজ্ঞান সচেতনতামূলক কার্যক্রম উল্লেখ করুণ  </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="বাস্তবায়িত কার্যক্রমের নাম "  name="gender">
								<Select placeholder=" " >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="তারিখ  " name="licence_number " >
								<Input />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="বাস্তবায়নের স্থান  " name="licence_number " >
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



					<h3 className="bstf-form-title"> বিগত অর্থ বছরে প্রকাশিত গবেষণা পত্রিকা / জার্নালের বিবরণ (যদি থাকে) </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="সংযুক্তি  " name="licence_number " >
								<Input />
							</Form.Item>
						</Col>
					</Row>


					<h3 className="bstf-form-title"> বিগত অর্থ বছর পর্যন্ত এ মন্ত্রণালয় থেকে প্রাপ্ত অনুদানের অর্থের অডিট সংক্রান্ত তথ্য  </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="সংযুক্তি  " name="licence_number " >
								<Input />
							</Form.Item>
						</Col>
					</Row>



					<h3 className="bstf-form-title"> সংস্থার সকল আয়-ব্যয় এর উৎস সম্পর্কিত তথ্য   </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="সংযুক্তি  " name="licence_number " >
								<Input />
							</Form.Item>
						</Col>
					</Row>



					<h3 className="bstf-form-title"> ব্যাংকে মাস ভিত্তিক গচ্ছিত অর্থ  সম্পর্কিত তথ্য    </h3>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item  name="comment" >
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