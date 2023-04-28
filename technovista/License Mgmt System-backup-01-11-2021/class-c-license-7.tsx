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
				<h3 className="bstf-form-title"> ১৮. গৃহীতব্য জরুরী প্রস্তুতি পরিকল্পনার সুনির্দিষ্ট বিবরণ  </h3>
				<div className="form-childform-content">
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item   name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				 
				</div>

				<h3 className="bstf-form-title"> ১৯. তত্ত্বাবধায়ক, বিকিরণ নিয়ন্ত্রণ কর্মকর্তা, চালক এবং বিকিরণ কর্মীর জন্য গৃহীতব্য শিক্ষা এবং প্রশিক্ষণ কর্মসূচির সুনির্দিষ্ট বিবরণ  </h3>
				<div className="form-childform-content">
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item   name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				 
				</div>

 				<h3 className="bstf-form-title"> ২০. তত্ত্বাবধায়ক, বিকিরণ নিয়ন্ত্রণ কর্মকর্তা  এবং চালকের যোগ্যতা এবং অভিজ্ঞতা    </h3>
				<div className="form-childform-content">
						<h3 className="bstf-form-title"> তত্ত্বাবধায়ক, বিকিরণ নিয়ন্ত্রণ কর্মকর্তা  এবং চালকের যোগ্যতা উল্লেখ করুন, অংশগ্রহনকৃত সংশ্লিষ্ট সকল কোর্সের নাম উল্লেখ করুন এবং প্ৰাপ্ত সনদপত্রের সত্যায়িত কপি সংযুক্ত করুন </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="নাম   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="পদবী   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="যোগ্যতা/অংশগ্রহনকৃত কোর্সের নাম  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি  " name="licence_number " >
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
						<h3 className="bstf-form-title"> তত্ত্বাবধায়ক, বিকিরণ নিয়ন্ত্রণ কর্মকর্তা  এবং চালকের অভিজ্ঞতা উল্লেখ করুন। <br/> 
						যদি থাকে তবে যথাযথ বৃত্তান্ত সংযুক্ত করুন । </h3>

						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="নাম  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="পদবী  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	

						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="প্রতিষ্ঠান   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="কার্যকাল  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="বৎসর     " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি  " name="licence_number " >
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