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

 				<h3 className="bstf-form-title"> ১৪. ব্যাক্তি পরিবীক্ষণ (Personnel Monitoring) :  * </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ধরণ " name="gender">
									<Select placeholder="থার্মোলুমিনিসেন্স ডসিমিটার (TLD)" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
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
								<Form.Item label="মূল্যায়নকারী এজেন্সী  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="মূল্যায়নের সংখ্যা  " name="licence_number " >
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
 
 
 
				<h3 className="bstf-form-title"> ১৫. স্থাপিতব্য যন্ত্রপাতি ও সুবিধাদির বিবরণ   * </h3>
				<div className="form-childform-content">
					   <h3 className="bstf-form-title"> দাখিলকৃত বিস্তারিত লে - আউট (Layout) পরিকল্পনায় ন্যূনতম নিন্মোক্ত তথ্যসমূহ থাকিতে হইবে  </h3>	
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="কক্ষ, কক্ষের স্থান এবং পরিমাপ  " name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="দেয়াল, ছাদ ও মেঝেতে ব্যবহৃত পদার্থের বিবরণ এবং পুরুত্ব " name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
								</Form.Item>		
							</Col>
						</Row>	

 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="দরজা, জানালা এবং অন্যান্য ওপেনিং এর অবস্থান, আকার এবং ব্যবহৃত পদার্থ   " name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="যন্ত্রপাতি --। বিকিরণকারী যন্ত্রপাতি স্পেসিফিকেশন (Specification), কক্ষে যন্ত্রের অবস্থান এবং পরিচালন কনসোল (Console) এর অবস্থান  " name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="  "   />
								</Form.Item>		
							</Col>
						</Row>	
 						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="পার্শ্ববর্তী এলাকা  -  কক্ষ সংলগ্ন এবং ইহার উপর /নীচের খালি জায়গায় ব্যবহার   " name="message">
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
 
    
				<h3 className="bstf-form-title"> ১৬. গৃহীতব্য বিকিরণ নিয়ন্ত্রণ কর্মসূচির সুনির্দিষ্ট বিবরণ  * </h3>
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
				
				<h3 className="bstf-form-title"> ১৭. গৃহীতব্য অগ্নি নির্বাপন  কর্মসূচির সুনির্দিষ্ট বিবরণ   * </h3>
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